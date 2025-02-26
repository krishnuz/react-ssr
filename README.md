# Overview

Setup is done using create react app (CRA) `npx create-react-app react-ssr`. Routing is included. SSR includes styling and fetching data on server side using context api. No external state management is used, instead context api is used.

src/index.js is for client side rendering and src/server.js for SSR.

# Setup

## `npm install`

Just install dependencies and you are ready to go.

# Available Scripts

In the project directory, you can run:

## `npm start`

Runs the app in the development mode and client side.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## `npm run build` and `npx babel-node src/server.js`

Runs the app using SSR.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
