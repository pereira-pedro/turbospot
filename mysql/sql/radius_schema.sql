###########################################################################
# $Id: 1059b115282ea738353fe4fbc8d92b03a338f8c1 $                 #
#                                                                         #
#  schema.sql                       rlm_sql - FreeRADIUS SQL Module       #
#                                                                         #
#     Database schema for MySQL rlm_sql module                            #
#                                                                         #
#     To load:                                                            #
#         mysql -uroot -prootpass radius < schema.sql                     #
#                                                                         #
#                                   Mike Machado <mike@innercite.com>     #
###########################################################################
#
# Table structure for table 'radacct'
#
CREATE TABLE radacct (
  radacctid bigint(21) NOT NULL auto_increment,
  acctsessionid varchar(64) NOT NULL default '',
  acctuniqueid varchar(32) NOT NULL default '',
  username varchar(64) NOT NULL default '',
  realm varchar(64) default '',
  nasipaddress varchar(15) NOT NULL default '',
  nasportid varchar(15) default NULL,
  nasporttype varchar(32) default NULL,
  acctstarttime datetime NULL default NULL,
  acctupdatetime datetime NULL default NULL,
  acctstoptime datetime NULL default NULL,
  acctinterval int(12) default NULL,
  acctsessiontime int(12) unsigned default NULL,
  acctauthentic varchar(32) default NULL,
  connectinfo_start varchar(50) default NULL,
  connectinfo_stop varchar(50) default NULL,
  acctinputoctets bigint(20) default NULL,
  acctoutputoctets bigint(20) default NULL,
  calledstationid varchar(50) NOT NULL default '',
  callingstationid varchar(50) NOT NULL default '',
  acctterminatecause varchar(32) NOT NULL default '',
  servicetype varchar(32) default NULL,
  framedprotocol varchar(32) default NULL,
  framedipaddress varchar(15) NOT NULL default '',
  PRIMARY KEY (radacctid),
  UNIQUE KEY acctuniqueid (acctuniqueid),
  KEY username (username),
  KEY framedipaddress (framedipaddress),
  KEY acctsessionid (acctsessionid),
  KEY acctsessiontime (acctsessiontime),
  KEY acctstarttime (acctstarttime),
  KEY acctinterval (acctinterval),
  KEY acctstoptime (acctstoptime),
  KEY nasipaddress (nasipaddress)
) ENGINE = INNODB;

#
# Table structure for table 'radcheck'
#

CREATE TABLE radcheck (
  id int(11) unsigned NOT NULL auto_increment,
  username varchar(64) NOT NULL default '',
  attribute varchar(64)  NOT NULL default '',
  op char(2) NOT NULL DEFAULT '==',
  value varchar(253) NOT NULL default '',
  PRIMARY KEY  (id),
  KEY username (username(32))
);

#
# Table structure for table 'radgroupcheck'
#

CREATE TABLE radgroupcheck (
  id int(11) unsigned NOT NULL auto_increment,
  groupname varchar(64) NOT NULL default '',
  attribute varchar(64)  NOT NULL default '',
  op char(2) NOT NULL DEFAULT '==',
  value varchar(253)  NOT NULL default '',
  PRIMARY KEY  (id),
  KEY groupname (groupname(32))
);

#
# Table structure for table 'radgroupreply'
#

CREATE TABLE radgroupreply (
  id int(11) unsigned NOT NULL auto_increment,
  groupname varchar(64) NOT NULL default '',
  attribute varchar(64)  NOT NULL default '',
  op char(2) NOT NULL DEFAULT '=',
  value varchar(253)  NOT NULL default '',
  PRIMARY KEY  (id),
  KEY groupname (groupname(32))
);

#
# Table structure for table 'radreply'
#

CREATE TABLE radreply (
  id int(11) unsigned NOT NULL auto_increment,
  username varchar(64) NOT NULL default '',
  attribute varchar(64) NOT NULL default '',
  op char(2) NOT NULL DEFAULT '=',
  value varchar(253) NOT NULL default '',
  PRIMARY KEY  (id),
  KEY username (username(32))
);


#
# Table structure for table 'radusergroup'
#

CREATE TABLE radusergroup (
  username varchar(64) NOT NULL default '',
  groupname varchar(64) NOT NULL default '',
  priority int(11) NOT NULL default '1',
  KEY username (username(32))
);

#
# Table structure for table 'radpostauth'
#
CREATE TABLE radpostauth (
  id int(11) NOT NULL auto_increment,
  username varchar(64) NOT NULL default '',
  pass varchar(64) NOT NULL default '',
  reply varchar(32) NOT NULL default '',
  authdate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY  (id)
) ENGINE = INNODB;

#
# Table structure for table 'nas'
#
CREATE TABLE nas (
  id int(10) NOT NULL auto_increment,
  nasname varchar(128) NOT NULL,
  shortname varchar(32),
  type varchar(30) DEFAULT 'other',
  ports int(5),
  secret varchar(60) DEFAULT 'secret' NOT NULL,
  server varchar(64),
  community varchar(50),
  description varchar(200) DEFAULT 'RADIUS Client',
  PRIMARY KEY (id),
  KEY nasname (nasname)
);

#
# Auxiliary table to node interface
#
CREATE TABLE user (
  id int(11) NOT NULL auto_increment,
  fullname varchar(64) NOT NULL,
  login varchar(16) NOT NULL,
  password varchar(64) NOT NULL,
  type varchar(16) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY login_UNIQUE (login)
);

DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_change_password`(
	IN p_id INT,
    IN p_login VARCHAR(16),
    IN p_password VARCHAR(64))
BEGIN
	START TRANSACTION;
    
    -- update radius user password
	UPDATE radcheck 
		SET `value` = p_password 
    WHERE username = p_login 
		AND attribute = 'SSHA2-256-Password'
		AND op = ':=';
    
    -- update user password
    UPDATE user 
		SET `password` = p_password
	WHERE login = p_login 
		AND id = p_id;
    
    COMMIT;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_create_user`(
	IN p_fullname VARCHAR(32),
    IN p_login VARCHAR(16),
    IN p_password VARCHAR(64),
    IN p_type VARCHAR(16),
    OUT p_id INT)
BEGIN
	START TRANSACTION;
    
    -- insert radius user
	INSERT INTO radcheck (username, attribute, op, `value`)
    VALUES (p_login, 'SSHA2-256-Password', ':=', p_password);
    
    -- insert user admin
    INSERT INTO user (fullname, login, `password`, `type`)
    VALUES (p_fullname, p_login, p_password, p_type );

	-- get last inserted id
	SET p_id = LAST_INSERT_ID();
    
    COMMIT;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_delete_user`(
	IN p_id INT)
BEGIN
    DECLARE v_login VARCHAR(16);
	DECLARE CONTINUE HANDLER FOR NOT FOUND
    BEGIN
		ROLLBACK;
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'User not found.';
    END;

	START TRANSACTION;    
    
    -- find current login
    SELECT login 
    INTO v_login
    FROM user
    WHERE id = p_id;
    
    -- delete radius user
	DELETE FROM radcheck
    WHERE username = v_login;
    
    -- insert user admin
    DELETE FROM `user`
    WHERE id = p_id;

    COMMIT;

END ;;
DELIMITER ;

DELIMITER ;;
CREATE DEFINER=`root`@`%` PROCEDURE `sp_update_user`(
	IN p_id INT,
    IN p_fullname VARCHAR(32),
    IN p_login VARCHAR(16),
    IN p_type VARCHAR(16),
    IN p_password VARCHAR(64)
    )
BEGIN
	START TRANSACTION;
    
    -- update user admin
    UPDATE `user` SET 
		fullname = p_fullname, 
        login = p_login, 
        `type` = p_type
	WHERE id = p_id;

    -- update radius user
	UPDATE radcheck SET username = p_login
    WHERE username = p_login;

    -- update past connections
  	UPDATE radacct SET username = p_login
    WHERE username = p_login;
    
    -- update password if it's not empty
    IF LENGTH(p_password) > 0 THEN
		CALL sp_change_password(p_id, p_login, p_password);
	END IF;

    COMMIT;

END ;;
DELIMITER ;