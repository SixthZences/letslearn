FROM node:latest
WORKDIR /usr/code
COPY package*.json ./
RUN npm install && rm -rf /var/lib/apt/lists/*
COPY . .
EXPOSE 3000
CMD ["npm" ,"run","start"]