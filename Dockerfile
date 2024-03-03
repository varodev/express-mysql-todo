FROM node:20.11.1-slim

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]