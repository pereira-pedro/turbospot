if [ -e ca-${PROJECT_DOMAIN}-key.pem ]
then
    echo "Certificates already generated. Clear certs/data directory."
    exit 1
fi
# Generate new CA certificate ca.pem file.
openssl genrsa 2048 > ca-${PROJECT_DOMAIN}-key.pem

openssl req -new -x509 -nodes -days 3600 \
    -subj "${OPENSSL_CA}" \
    -key ca-${PROJECT_DOMAIN}-key.pem -out ca-${PROJECT_DOMAIN}.pem

# Create the mysql server certificate
openssl req -newkey rsa:2048 -days 3600 -nodes \
    -subj "${OPENSSL_MYSQL}" \
    -keyout mysql.${PROJECT_DOMAIN}-key.pem -out mysql.${PROJECT_DOMAIN}-req.pem
openssl rsa -in mysql.${PROJECT_DOMAIN}-key.pem -out mysql.${PROJECT_DOMAIN}-key.pem
openssl x509 -req -in mysql.${PROJECT_DOMAIN}-req.pem -days 3600 \
    -CA ca-${PROJECT_DOMAIN}.pem -CAkey ca-${PROJECT_DOMAIN}-key.pem -set_serial 01 -out mysql.${PROJECT_DOMAIN}-cert.pem

rm -f mysql.${PROJECT_DOMAIN}-req.pem

# Create the node server certificate
openssl req -newkey rsa:2048 -days 3600 -nodes \
    -subj "${OPENSSL_NODE}" \
    -keyout node.${PROJECT_DOMAIN}-key.pem -out node.${PROJECT_DOMAIN}-req.pem
openssl rsa -in node.${PROJECT_DOMAIN}-key.pem -out node.${PROJECT_DOMAIN}-key.pem
openssl x509 -req -in node.${PROJECT_DOMAIN}-req.pem -days 3600 \
    -CA ca-${PROJECT_DOMAIN}.pem -CAkey ca-${PROJECT_DOMAIN}-key.pem -set_serial 01 -out node.${PROJECT_DOMAIN}-cert.pem

rm -f node.${PROJECT_DOMAIN}-req.pem

# Create the radius server certificate
openssl req -newkey rsa:2048 -days 3600 -nodes \
    -subj "${OPENSSL_RADIUS}" \
    -keyout radius.${PROJECT_DOMAIN}-key.pem -out radius.${PROJECT_DOMAIN}-req.pem
openssl rsa -in radius.${PROJECT_DOMAIN}-key.pem -out radius.${PROJECT_DOMAIN}-key.pem
openssl x509 -req -in radius.${PROJECT_DOMAIN}-req.pem -days 3600 \
    -CA ca-${PROJECT_DOMAIN}.pem -CAkey ca-${PROJECT_DOMAIN}-key.pem -set_serial 01 -out radius.${PROJECT_DOMAIN}-cert.pem

rm -f radius.${PROJECT_DOMAIN}-req.pem

# Verify the certificates are correct
openssl verify -CAfile ca-${PROJECT_DOMAIN}.pem mysql.${PROJECT_DOMAIN}-cert.pem node.${PROJECT_DOMAIN}-cert.pem radius.${PROJECT_DOMAIN}-cert.pem