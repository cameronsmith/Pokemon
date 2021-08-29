FROM node:13.12.0-alpine

ENV VERSION=1.0.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies (tagged this on my local fork)
RUN wget -c https://github.com/cameronsmith/graphql-pokemon/archive/refs/tags/v${VERSION}.tar.gz -O - | tar -xz --strip-components=1
RUN npm install

# start app
CMD ["yarn", "run", "watch"]