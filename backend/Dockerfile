# Usar una imagen oficial de Node.js
FROM node:18
RUN apt-get update && apt-get install -y curl
RUN curl -o /wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /wait-for-it.sh

WORKDIR /usr/src/app
COPY package*.json ./ 
RUN npm install
COPY . .
EXPOSE 3000
CMD ["/wait-for-it.sh", "db:5432", "--", "npm", "run", "start"]
