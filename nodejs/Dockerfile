FROM node:15

WORKDIR /usr/src/app

COPY . .
RUN npm install

RUN apt-get update && apt-get install -y wget

EXPOSE 3333

