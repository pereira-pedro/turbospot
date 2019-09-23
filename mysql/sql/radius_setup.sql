# -*- text -*-
##
## admin.sql -- MySQL commands for creating the RADIUS user.
##
##      WARNING: You should change 'localhost' and 'radpass'
##               to something else.  Also update raddb/sql.conf
##               with the new RADIUS password.
##
##      $Id: aff0505a473c67b65cfc19fae079454a36d4e119 $

#
#  Create default administrator for RADIUS
#
CREATE USER 'radius'@'RADIUS_VLAN1';
SET PASSWORD FOR 'radius'@'RADIUS_VLAN1' = 'RADIUS_USR_PASSWORD';

ALTER USER 'radius'@'RADIUS_VLAN1' IDENTIFIED WITH mysql_native_password BY 'RADIUS_USR_PASSWORD';

# The server can read any table in SQL
GRANT SELECT ON radius.* TO 'radius'@'RADIUS_VLAN1';

CREATE USER 'node'@'NODE_VLAN1';
SET PASSWORD FOR 'node'@'NODE_VLAN1' = 'NODE_USR_PASSWORD';

ALTER USER 'node'@'NODE_VLAN1' IDENTIFIED WITH mysql_native_password BY 'NODE_USR_PASSWORD';

# The node server can do anything
GRANT ALL ON radius.* TO 'node'@'NODE_VLAN1';

# The server can write to the accounting and post-auth logging table.
#
#  i.e.
GRANT ALL on radius.radacct TO 'radius'@'RADIUS_VLAN1';
GRANT ALL on radius.radpostauth TO 'radius'@'RADIUS_VLAN1';

FLUSH PRIVILEGES;

INSERT INTO radius.user(fullname, login, password, type) VALUES ('Administrator','admin','26a4b135d474253c6bfba9eff93135e20ac3d4cb','admin')
