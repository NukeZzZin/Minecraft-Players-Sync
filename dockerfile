FROM node:16
LABEL programmer "Nuke <86313547+NukeZzZin@users.noreply.github.com>"
WORKDIR /home/minecraft/express
COPY ["package.json", "package-lock.json*", "./"]
RUN yarn install 
COPY . /home/minecraft/express
ENV NODE_ENV production
ENV PORT 3000
EXPOSE 3000
CMD ["yarn", "dev"]