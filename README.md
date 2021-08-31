# Pokémon React Application

## Initial Project Setup

Copy the environment file:

```
cp ./env.example ./env
```

This project has been built with docker in mind, but can be run without if needed:


#### Docker Setup

Build the images and launch the application:
```
make build
```

The application is now available at: [http://localhost:3000](http://localhost:3000)

The graphql-pokemon application is also available at: [http://localhost:5000](http://localhost:5000)

##### Please Note:
- The ports are the same as the local versions but in real-life these would be changed to avoid conflicts.


#### Without Docker Setup

Install application dependencies:
```
npm install
```

Start application:
```
npm start
```

The application is now available at: [http://localhost:3000](http://localhost:3000)

##### Please Note:

You will need to install and run a local version of [https://github.com/lucasbento/graphql-pokemon](https://github.com/lucasbento/graphql-pokemon) 
if you are not using the docker environment.

## Testing

To make user testing easier you can edit the `POKEMONS_FETCH_LIMIT` constant within the `/src/constants/app.js` file to something like 10.
This will avoid you having to click through a 151 pokemons.

You can also run the application tests and linting by performing:

```
make test
```

A local postman collection has been added to allow for testing the GraphQL server outside the application if you wish.