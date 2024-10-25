FROM node:19-alpine

VOLUME [ "./"]

CMD ["npm", "install","&&","npm","run","start"]