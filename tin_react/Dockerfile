#FROM node:alpine as build
#ENV NODE_ENV development
## Add a work directory
#WORKDIR /app
## Cache and Install dependencies
#COPY package*.json .
#COPY yarn.lock .
#
#RUN npm install
#RUN yarn install
#RUN npm install
#
#RUN npm ci
#
#
## Copy app files
#COPY . .
#
## Expose port
#EXPOSE 3000
## Start the app
#CMD [ "yarn", "start" ]


# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install cors --save
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm install react-router-dom@5.2.0
RUN npm install react-i18next i18next

COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

