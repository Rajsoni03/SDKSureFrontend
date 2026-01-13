# FROM node:24
FROM artifactory.itg.ti.com/docker-public/node:24

# set proxy server
ENV http_proxy=http://webproxy.ext.ti.com:80
ENV https_proxy=http://webproxy.ext.ti.com:80
ENV ftp_proxy=http://webproxy.ext.ti.com:80

# set work directory
WORKDIR /app/frontend

# add to $PATH
# ENV PATH /app/frontend/node_modules/.bin:$PATH

# install app dependencies
COPY ./package.json .
COPY ./package-lock.json .
RUN npm install 2>&1

# add app
COPY . .

# start the server
CMD ["npm", "run", "dev"]