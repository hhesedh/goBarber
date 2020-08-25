# stage 1
FROM node as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


# stage 2
FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY --from=builder /usr/src/app/dist ./dist
COPY ormconfig.docker.json ./ormconfig.json
EXPOSE 3333

CMD ["node", "dist/server.js"]
