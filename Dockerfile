FROM node:8
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./* ./

COPY ./.env.example ./.env

RUN npm install --quiet
# If you are building your code for production
# RUN npm install --only=production
# Bundle app source
COPY . .

CMD ["npm", "run", "dev"]

EXPOSE 9000