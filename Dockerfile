FROM node:8
ADD build /build/
WORKDIR /build
EXPOSE 5000
RUN npm install -g serve
CMD serve
