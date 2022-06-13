FROM node:lts
WORKDIR /react
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
