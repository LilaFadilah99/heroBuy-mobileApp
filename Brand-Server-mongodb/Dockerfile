FROM node:lts-alpine3.16

WORKDIR /usr/local/app

ENV PORT=4001

COPY package.json package-lock.json ./

RUN npm install -g nodemon
RUN npm install

COPY ./ ./

CMD ["npm", "run", "start"]