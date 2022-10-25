FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
COPY ./node_modules ./node_modules
RUN npm config set legacy-peer-deps=true
RUN npm config set registry=https://registry.npmjs.org
RUN npm install --production
COPY . .
EXPOSE 3000 
# RUN chown -R node /usr/src/app
# USER node
USER root
CMD ["npm", "start"]






#multi Stage
# # STAGE 1
# FROM node:lts-alpine AS build
# ENV NODE_ENV=production
# WORKDIR /usr/src/app
# COPY ["package.json", "npm-shrinkwrap.json*", "./"]
# COPY ./node_modules ./node_modules
# RUN npm config set legacy-peer-deps=true
# RUN npm config set registry=https://registry.npmjs.org
# RUN npm install --production
# COPY . /app
# RUN npm run build


# # STAGE 2
# FROM node:lts-alpine
# WORKDIR /usr/src/app
# RUN npm install -g webserver.local
# COPY --from=build /app/build ./build
# EXPOSE 3000 
# # RUN chown -R node /usr/src/app
# # USER node
# USER root
# # CMD ["npm", "start"]
# CMD webserver.local -d ./build


