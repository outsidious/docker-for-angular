FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json nx.json ./
COPY scripts ./

# Скачиваем сертификат
RUN wget -O ./cert.crt \
    https://raw.githubusercontent.com/outsidious/docker-for-angular/main/cert.crt
# Устанавливаем сертификат
#RUN npm config set cafile ./cert.crt

RUN npm install -g nx@18
RUN npm ci

COPY . .
RUN nx build nx-frontend


FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/nx-frontend/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]