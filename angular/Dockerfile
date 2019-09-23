# Create image based on the official Node 10 image from dockerhub
FROM node:11

ARG NODE_VLAN1

# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

RUN sed -i -e 's@NODE_VLAN1@'${NODE_VLAN1}'@g' /app/src/environments/environment.ts && \
	sed -i -e 's@NODE_VLAN1@'${NODE_VLAN1}'@g' /app/src/environments/environment.prod.ts

# Serve the app
CMD ["npm", "start"]