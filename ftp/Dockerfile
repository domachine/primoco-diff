FROM node:22-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app

ADD package.json package-lock.json ./
RUN npm install --omit=dev

ADD . ./

CMD ["node", "node_modules/.bin/ftp-srv", "ftp://0.0.0.0:2121", "--root", "data/root", "--username", "ftp-user", "--password", "ftp-password", "--pasv_min", "5000", "--pasv_max", "5005"]
