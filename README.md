# SpookyVibes: Client-Side

## Overview
This is the frontend for an app called SpookyVibes. It's a full-stack application built with React, Node.js, Express, and MongoDB.
* Server-side repository for this app is here: https://github.com/RParker505/movie_api

## View the App
View the app here: https://spookyvibes.netlify.app/login

## Features
The app will provide users with access to information about different movies, directors, and genres. Users will be able to sign up, update their personal information, and create a list of their favorite movies.

## Technologies Used
* **Node.js:** Install it on your local machine.
* **npm:** (Node Package Manager)
* **React:** A JavaScript library for building user interfaces.
* **React Bootstrap:** A front-end framework built on top of Bootstrap for React components.
* **React Router:** A routing library for React that enables navigation between different components.

## Main Components
* **MainView:** Is the entry point, orchestrating navigation and rendering of different views.
* **NavigationBar:** Provides navigation based on user authentication status.
* **MovieView:** Displays detailed information about movies.
* **MovieCard:** Represents a single movie selected by the user, showing details and allowing users to add or remove the movie to/from their list of favorites.
* **SignupView & LoginView:** Handle user registration and authentication.
* **AccountView:** Allows users to view and edit their profile details, manage favorite movies, and delete their accounts.

## API
SpookyVibes interacts with a custom movie API available at [Movie-API](https://github.com/RParker505/movie_api). The API supplies data about movies, including titles, descriptions, genres, and directors. Refer to the API documentation for more details on available endpoints and data formats.

## Dependencies
```
"bootstrap": "^5.3.3",
"prop-types": "^15.8.1",
"react": "^18.2.0",
"react-bootstrap": "^2.10.1",
"react-datepicker": "^6.6.0",
"react-dom": "^18.2.0",
"react-router": "^6.22.3",
"react-router-dom": "^6.22.3"
```

## Dev Dependencies
```
"@parcel/transformer-sass": "^2.12.0",
"parcel": "^2.12.0",
"process": "^0.11.10"
```
