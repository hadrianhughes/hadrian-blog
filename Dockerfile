# Specify node environment for inside container
FROM node:alpine

# Make directory for app to run in
WORKDIR /usr/src/app

# Environment variables
ENV PORT 3000

# Copy package and package-lock before other files
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
