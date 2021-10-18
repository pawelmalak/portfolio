FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npm prune --production

EXPOSE 3000

CMD ["npm", "start"]