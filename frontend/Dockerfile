FROM node:18-alpine

WORKDIR /usr/app/frontend

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]