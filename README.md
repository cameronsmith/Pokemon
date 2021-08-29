# Pokémon React Application


## Initial Project Setup

Copy the environment file:

```
cp ./env.example ./env
```

This project has been built with docker in mind, but can be run without it if needed:


#### Docker Setup

Build the images and launch the application:
```
make build
```

The application is now available at: [http://localhost:3000](http://localhost:3000)

##### Please Note:
- If you want to add any packages or run any npm commands this should be done WITHIN the docker environment.
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