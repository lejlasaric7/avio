FROM node:lts-alpine
WORKDIR /app
COPY package.json ./
ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm config set strict-ssl false
RUN npm install
EXPOSE 8080
CMD ["npm","run","serve"]