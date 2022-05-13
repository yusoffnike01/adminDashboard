# Builder
FROM node:16.3.0-alpine AS builder

WORKDIR /usr/app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

# Production Builder
FROM node:16.3.0-alpine AS production
WORKDIR /usr/app
COPY --from=builder /usr/app /usr/app/
EXPOSE 3000
RUN yarn build