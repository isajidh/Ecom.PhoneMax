FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm config set legacy-peer-deps=true
RUN npm cache clean --force
RUN npm config set fetch-mintimeout=60000
RUN npm config set fetch-maxtimeout=99999
RUN npm install --omit=dev && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
