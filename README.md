# REST-API-with-NodeJS
Created a basic REST API with NodeJS and wrote an application to test the API.

#### This guide

* node_modules – Our application's dependancies. npm manages this folder automatically.
* api.db – The database where the table "messages" exits.
* package-lock.json – Machine-readable version of package.json for npm. npm manages this folder automatically. [More here](https://docs.npmjs.com/configuring-npm/package-lock-json.html#:~:text=Description,regardless%20of%20intermediate%20dependency%20updates.)
* package.json – Works with npm to manage application's dependancies.
* client.js – Request and display results from server.js (http://localhost:3000/messages).
* README.md - This file.
* server.js - Process and serve requests from data in the database  (http://localhost:8080/).

#### Development
* Make sure you install npm dependances first: `npm install`
* To run both server and client: `npm run start`
* To run only server or client: `npm run server|client`

