FROM node:10

# Create app directory
WORKDIR /node-api

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

WORKDIR /node-api/app

CMD [ "node", "Bend.js" ] 

EXPOSE 8888