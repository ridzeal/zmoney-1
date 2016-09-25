# To build and run with Docker:
#
#  $ docker build -t ng-zmoney .
#  $ docker run -it --rm -p 3000:3000 -p 3001:3001 ng-zmoney
#
FROM node:latest

RUN mkdir -p /zmoney /home/nodejs && \
    groupadd -r nodejs && \
    useradd -r -g nodejs -d /home/nodejs -s /sbin/nologin nodejs && \
    chown -R nodejs:nodejs /home/nodejs

WORKDIR /zmoney
COPY package.json typings.json /zmoney/
RUN npm install --unsafe-perm=true

COPY . /zmoney
RUN chown -R nodejs:nodejs /zmoney
USER nodejs

CMD npm start
