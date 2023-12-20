FROM --platform=linux/amd64 node:20-alpine
RUN echo "net.ipv4.ping_group_range = 0 2147483647" >> /etc/sysctl.conf
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 4000
ENTRYPOINT [ "node", "app.js" ]