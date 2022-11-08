FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install
RUN npm i -g nodemon

COPY . .

EXPOSE 8080
CMD [ "node", "app.js" ]