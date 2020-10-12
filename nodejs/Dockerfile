FROM node:10

RUN mkdir -p /home/node/ && chown -R node:node /home/node/
ADD api /home/node/api
WORKDIR /home/node/api
RUN  npm install

USER node

EXPOSE 8888

CMD [ "node","/home/node/api/src/server" ]
