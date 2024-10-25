FROM node:19-alpine

COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm","run","start"]