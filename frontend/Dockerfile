# Используем за основу образ Node.js
FROM node:20-alpine AS build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы приложения
COPY . .

# Устанавливаем переменную окружения PORT
ENV PORT=4200

# Экспонируем порт 4200
EXPOSE 4200

# Команда для запуска приложения
CMD ["npm", "start"]