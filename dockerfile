FROM oven/bun


COPY . .


RUN bun install

RUN bun run build

EXPOSE 4321

CMD [ "bun run preview" ]