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

!["Home Page"]()

Home Page

!["Search Rides"]()

Filter rides by location, departure date and driver preferences

!["Search Results"]()

Search Results

!["Book Trip"]()

View ride details (description, price, seats available, driver preferences)

!["Profile Page"]()

Profile page

!["My Trips"]()

View upcoming and completed trips

!["Driver Details"]()

View driver contact info for booked trips

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