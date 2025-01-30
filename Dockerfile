# Etapa de construcción
FROM node:20.11.0 AS builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Etapa de producción
FROM nginx:1.21.1-alpine

ADD ./config/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/web/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
