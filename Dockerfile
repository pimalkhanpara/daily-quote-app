
FROM nginx:alpine

LABEL maintainer="Your Name"
LABEL project="Daily Quote App"
LABEL version="1.0"

COPY . /usr/share/nginx/html

HEALTHCHECK CMD wget --spider http://localhost || exit 1

EXPOSE 80