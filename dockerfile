FROM node:8.17.0

RUN mkdir -p /app/usr/src/app

WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent

CMD [ "npm", "start" ]
