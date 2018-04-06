FROM node:carbon

WORKDIR /usr/src/app

COPY package*.json ./

COPY gulpfile.js ./

COPY tsconfig.json ./

COPY . .

RUN apt-get update 

RUN apt-get --yes install libasound2-dev

RUN npm install --unsafe-perm=true --allow-root

RUN npm run build

RUN npm rebuild --unsafe-perm=true --allow-root

EXPOSE 3000

CMD [ "npm", "start" ]