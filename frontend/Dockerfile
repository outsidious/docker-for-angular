# Stage 1: Сборка приложения
FROM node:20-alpine AS build

WORKDIR /app
COPY package*.json ./
RUN npm install -g @angular/cli@17
RUN npm ci

COPY . .
RUN ng build


# Stage 2: Запуск NGINX и обслуживание статических файлов
FROM nginx:alpine

# Меняем конфиг nginx-а на собственный
COPY nginx.conf /etc/nginx/nginx.conf
# Копируем собранное приложение из предыдущего этапа в рабочую директорию nginx
COPY --from=build /app/dist/frontend/browser /usr/share/nginx/html

EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]