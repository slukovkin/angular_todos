FROM node:18.19-alpine

RUN npm install -g @angular/cli -y

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
