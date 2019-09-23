# Create image based on the official Node 6 image from the dockerhub
FROM node:11
LABEL maintainer="petrivs@gmail.com"

ARG NODE_USR_PASSWORD
ARG DB_VLAN1
ARG JWT_SALT_KEY
ARG PROJECT_DOMAIN
ARG HASH_SALT

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package.json /app

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app

RUN sed -i -e 's@NODE_USR_PASSWORD@'${NODE_USR_PASSWORD}'@g' /app/config.js && \
  sed -i -e 's@PROJECT_DOMAIN@'${PROJECT_DOMAIN}'@g' /app/config.js && \
	sed -i -e 's@DB_VLAN1@'${DB_VLAN1}'@g' /app/config.js && \
	sed -i -e 's@HASH_SALT@'${HASH_SALT}'@g' /app/config.js && \
  sed -i -e 's@JWT_SALT_KEY@'${JWT_SALT_KEY}'@g' /app/config.js

# Serve the app
CMD ["npm", "start"]
