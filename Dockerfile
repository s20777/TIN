FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install
RUN npm i -g nodemon
RUN npm i mysql2
RUN npm i sequelize
RUN npm i express-session
RUN npm i bcryptjs
RUN npm i i18n
RUN npm i jsonwebtoken


COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]