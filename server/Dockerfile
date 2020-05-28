# base image
FROM node:12.16-alpine

RUN apk add inotify-tools

# Create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package.json ./
RUN npm install

# bundle app source
COPY . .

EXPOSE 8080

# run server
CMD ["npm", "start"]
