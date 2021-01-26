FROM node:14-alpine

RUN apk add --no-cache --update curl bash
WORKDIR /app

COPY package* ./

RUN npm install bcrypt

# Install the npm packages
RUN npm install && npm update

COPY . .

WORKDIR /app/client

RUN npm install

RUN npm run build

WORKDIR /app


# Run the image as a non-root user
RUN adduser -D myuser
USER myuser



CMD ["npm", "run", "start"]