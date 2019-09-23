var config = {
  development: {
    database: {
      name: "radius",
      host: "DB_VLAN1",
      user: "node",
      password: "NODE_USR_PASSWORD",
      port: "3306",
      ca_file: "./certs/ca-PROJECT_DOMAIN.pem",
      cert_file: "./certs/node.PROJECT_DOMAIN-cert.pem",
      key_file: "./certs/node.PROJECT_DOMAIN-key.pem"
    },
    other: {
      jwt_key: "JWT_SALT_KEY",
      salt: "HASH_SALT"
    }
  },
  production: {
    database: {
      host: "DB_VLAN1",
      user: "node",
      password: "NODE_USR_PASSWORD",
      port: "3306",
      ca_file: "./certs/ca-PROJECT_DOMAIN.pem",
      cert_file: "./certs/node.PROJECT_DOMAIN-cert.pem",
      key_file: "./certs/node.PROJECT_DOMAIN-key.pem"
    },
    other: {
      jwt_key: "JWT_SALT_KEY",
      salt: "HASH_SALT"
    }
  }
};

module.exports = config;
