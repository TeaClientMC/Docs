FROM node:lts AS build
WORKDIR /app
COPY . .
RUN corepack enable pnpm 
RUN pnpm install
RUN pnpm run build

EXPOSE 8080
CMD [ "pnpm", "preview" ]