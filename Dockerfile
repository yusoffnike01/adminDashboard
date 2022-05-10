# Builder
FROM  --platform=linux/amd64 node:16.3.0-slim AS builder
RUN apt-get update
RUN apt-get install -y openssl

WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.21.6-alpine as production-stage
RUN mkdir /app
COPY --from=build-stage /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf