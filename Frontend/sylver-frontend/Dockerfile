FROM node:16-alpine

WORKDIR /usr/src/app

COPY src/App /usr/share/node/app

RUN npm install

EXPOSE 80:80

CMD ["npm", "start"]
