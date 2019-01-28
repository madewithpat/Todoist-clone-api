FROM node:latest

RUN mkdir /usr/src/app

ADD package.json /usr/src/package.json
RUN npm install -g yarn
RUN yarn

CMD ["yarn", "start"]