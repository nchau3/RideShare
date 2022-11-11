# RoundTrip

## Project Overview
RoundTrip is a ride-share app that connects users with a common destination. Drivers can post/fill empty seats to help cover travel costs.

Development was focused on a responsive and straightforward UI using a React front-end and a Ruby on Rails API backend.

All HTML/CSS styling was completed from scratch.

Future features will include:
- driver mode for creating/monitoring rides
- review system for drivers and passengers
- live chat with drivers after booking

## Screenshots

!["Home Page"](https://github.com/nchau3/RoundTrip/blob/master/docs/Home.png)

Home Page

!["Login"](https://github.com/nchau3/RoundTrip/blob/master/docs/Login.png)

Login Page

!["Search Rides"](https://github.com/nchau3/RoundTrip/blob/master/docs/Search-Rides.png)

Filter rides by location, departure date and driver preferences

!["Search Results"](https://github.com/nchau3/RoundTrip/blob/master/docs/Search-Results.png)

Search Results

!["Book Trip"](https://github.com/nchau3/RoundTrip/blob/master/docs/Book-Trip.png)

View ride details (description, price, seats available, driver preferences)

!["Profile Page"](https://github.com/nchau3/RoundTrip/blob/master/docs/My-Profile.png)

Profile page

!["My Trips"](https://github.com/nchau3/RoundTrip/blob/master/docs/My-Trips.png)

View upcoming and completed trips

!["Driver Details"](https://github.com/nchau3/RoundTrip/blob/master/docs/Driver-Details.png)

View driver contact info after booking

## Dependencies
- Ruby v 3.1.1
- Rails v 6
- React v 16
- Axios
- Faker (DB seeding)
- Bcrypt
- Sass

## Setup

As this is a React/Rails based app, all front-end is located in the "client" directory. This replaces the views/ERB files in a pure Rails app.

### In the main directory (Rails API)

Install gems

```sh
bundle install
```

Database setup

```sh
bin/rails db:reset
```

Start server

```sh
bin/rails s
```

Start server (for Vagrant machine users)

```sh
bin/rails s -b 0.0.0.0
```

### In the CLIENT directory (React App)

Install dependencies

```sh
npm install
```

Run client server

```sh
npm start
```

Open http://localhost:8080/ in the browser

## Contact

Please contact nc_chau@hotmail.com or any contributors listed below with any questions or concerns. Thank you!

## Contributors

[Nicholas Chau](https://github.com/nchau3)

[Coreen Huang](https://github.com/coreenhuang)

[Shaun Jiji](https://github.com/shaunjiji)

## Notes

This project was completed as a final project for the Lighthouse Labs Web Development Bootcamp, using a [React/Rails boilerplate](https://github.com/NimaBoscarino/react-rails-boilerplate) created by [@NimaBoscarino](https://github.com/NimaBoscarino).