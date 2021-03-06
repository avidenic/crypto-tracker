FROM node:alpine

RUN apk update

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY . /app

ENTRYPOINT ["npm", "run", "docker-start"]