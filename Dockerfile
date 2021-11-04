FROM node:14-alpine as builder

WORKDIR /app_build

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build && npm prune --production

FROM node:14-alpine

WORKDIR /app

COPY --from=builder /app_build /app

EXPOSE 3000

CMD ["npm", "start"]