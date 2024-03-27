FROM --platform=linux/amd64 node:20-alpine
RUN echo "net.ipv4.ping_group_range = 0 2147483647" >> /etc/sysctl.conf
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost:4000/ || exit 1

EXPOSE 4000

ENTRYPOINT [ "node", "app.js" ]