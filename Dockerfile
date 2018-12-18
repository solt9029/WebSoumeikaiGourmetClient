FROM node:8
ADD build /build/
WORKDIR /build
EXPOSE 80
RUN npm install -g serve
CMD serve
