FROM node:18

COPY . .
RUN ./src/generateAuth.js
RUN npm install

CMD ["npm", "start"]