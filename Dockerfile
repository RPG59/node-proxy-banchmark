FROM node:20.10.0-alpine
# FROM node:20.10.0

WORKDIR /app

COPY . .

CMD [ "node", "main.cjs" ]