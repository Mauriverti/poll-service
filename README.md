# Poll-server
This is a back end app for [Poll-app](https://github.com/Mauriverti/poll-FE).
It was developed in Node.JS, using typescript as main language. It's using Firebase's Firestore as Database and Jest for tests.

## Install dependencies

At terminal, navigate to the project folder, then run `npm ci` to download all the project dependencies.
(This project was developed and tested using NodeJS 17.9.0 and npm 8.5.5)

## Development server
Run `npm start` for a dev server.
This backend end app is set to serve at `http://localhost:3333`, if you want to change it, you can change it at `config/server.config.json` file

## Tests
You can run automated tests using `npm test` command in project folder, after download the dependencies
