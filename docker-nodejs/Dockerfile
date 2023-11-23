FROM node:12.0-alpine as debug

WORKDIR /node/

COPY ./src/package.json /node/package.json
RUN npm install
RUN npm install -g nodemon

COPY ./src/ /node/src/

ENTRYPOINT [ "nodemon","--inspect=0.0.0.0", "src/server.js" ]
