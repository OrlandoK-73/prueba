# Dockerfile

FROM node:18

WORKDIR /src
COPY package*.json ./
RUN npm install
COPY . .
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Comando para iniciar la aplicación usando wait-for-it.sh
CMD ["./wait-for-it.sh", "database:3306", "--", "npm", "start"]
