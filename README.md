# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)  SOFTWARE ENGINEERING IMMERSIVE

## Getting started

1. Fork
1. Clone

# Sequelize Querying

> - https://sequelize.org/master/manual/querying.html

Sequelize comes packaged with pre-defined query builders out of the box. Whenever we create a new model, it comes attached to that specific model.

Heres a sequelize cheatsheet for your reference.**[Cheat Sheet]()**


##

Let's go into the repo:

```sh
cd sequelize-querying
npm install
```

Create your database:

```sh
sequelize db:create
```

Run the migration:

```sh
sequelize db:migrate
```

Populate the database with seed data:

```sh
sequelize db:seed:all
```

Test the database:

```sh
psql sequelize_querying_development
SELECT * FROM users;
```

## Querying

While referencing either the docs, or the cheat sheet to query for the specified information. Work with the query.js file in the repo to execute different queries:

```sh
node query.js
```


## Resources

- https://sequelize.org/master/manual/querying.html
