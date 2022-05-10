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

ARG VITE_API_URL
ENV VITE_API_URL=${VITE_API_URL}

EXPOSE 5000

RUN yarn build