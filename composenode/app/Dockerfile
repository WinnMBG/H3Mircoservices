FROM node:18
WORKDIR /app
COPY package*.json .
COPY init.json ./docker-entrypoint-initdb.d/init.json
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]