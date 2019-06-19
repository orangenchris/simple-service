FROM node:10.15.3-alpine
# Create app directory
WORKDIR mkdir src

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
WORKDIR /src
ADD app/package.json /src/package.json
ADD app/swagger.json /src/swagger.json
RUN npm install

COPY . .
EXPOSE 8080

CMD node app/bin/www
