# Utilizando una imagen de Node para construir la aplicación
FROM node:14 AS build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
COPY . .

# Instalar las dependencias
RUN npm install

# Ejecutar el build de producción
RUN npm run build -- --prod

# Utilizando Nginx para servir la aplicación Angular
FROM nginx:alpine

# Copiar el build de Angular al contenedor de Nginx
COPY --from=build /usr/src/app/dist/your-angular-app /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
