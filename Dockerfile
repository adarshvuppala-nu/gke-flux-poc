FROM node:22-alpine

ENV NODE_ENV=production
ENV PORT=8090

WORKDIR /app

COPY --chown=node:node package.json app.js ./

USER node

EXPOSE 8090

CMD ["node", "app.js"]
