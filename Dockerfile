FROM node:19-alpine

VOLUME [ "." ]

EXPOSE 3000
CMD ["npm", "install","&&","npm","run","start"]