# Hot-Takes-Game-Reviews

## Description

Hot Takes Game Reviews is a place where you can tell everyone how you really feel about the latest and greatest videogames. Here you can post your own review anonymously to any of the games listed. If you do not see the game that you've been wanting to rant about then simply log in and create it. To view the games that you have already reviewed you can click on the "My Reviewed Games" tab.

This repository contains the code for a web application that allows users to rate and review video games. It consists of a React frontend and a Ruby on Rails backend.

## Requirements

- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

## Installing the React Frontend

1. Clone the repository to your local machine

```console
$ git clone https://github.com/TylerLampel/Hot-Take-Game-Reviews.git
```

2. Navigate to the `client` folder

```console
$ cd client
```

3. Install dependencies

```console
$ npm install
```

4. Start the server

```console
$ npm start
```

The React frontend should now be running on http://localhost:4000/.

## Installing the Rails Backend

1. Open another terminal to the root of the repository

2. Install dependencies

```console
$ bundle install
```

3. Create and seed the database

```console
$ rails db:create db:migrate db:seed
```

4. Start the server

```console
$ rails s
```

The Rails backend should now be running on http://localhost:3000/.

## Architecture and Models

The Hot-Take Game Reviews application is composed of a React frontend and a Ruby on Rails backend. The frontend communicates with the backend via RESTful APIs to retrieve and update data.

### Models

The Rails backend uses the following models:

- User: stores information about the registered users, such as username, and password.
- Game: stores information about the video games, such as title, age rating, and description.
- Review: stores user-generated reviews for the video games, including a title, rating, and a comment.

Each model has a corresponding database table that is used to persist the data. The models are defined using Active Record, which is the default Object-Relational Mapping (ORM) library for Rails.

### Relationships

The following relationships are established between the models:

- A User has many Reviews
- A Game has many Reviews
- A Review belongs to a User and a Game

User --< Reviews >-- Games

These relationships allow for efficient retrieval of information about the reviews, games, and users in the application.

## Contributing

1. Fork the repositroy
2. Create a branch for your feature
3. Commit and push your changes
4. Submit a pull request

## Author

[TylerLampel](https://github.com/TylerLampel)
