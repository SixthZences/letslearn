FROM node:latest
COPY . /usr/code
WORKDIR /usr/code
RUN npm install && rm -rf /var/lib/apt/lists/*
EXPOSE 3000
CMD ["npm" ,"run","start"]