# Music Library 🎶

**First project with [Manchester Codes](https://www.manchestercodes.com/) BACKEND module**

The purpose of this project was to apply all learned aspects together in one project by building an API (Application Programming Interface) app to manage a database, a music library.

The project followed TDD principles by writing a failing test and write the code to pass the test. This time we used Mocha supertest, an integration test which checks that app is communicating with the database.

---

**Concepts**

- Database Design
- SQL
- MySQL
- CRUD (CREATE, READ, UPDATE, DELETE) Operations

---

**Programming languages and technologies used**

- Express, NodeJS
- MySQL
- Mocha /Chai supertest
- Docker
- Postman
- MySQL workbench

---

**Set up**

To be able to run this application following environment needs to be installed:

[Docker](https://docs.docker.com/get-docker/)

[MySQLWorkbench](https://www.mysql.com/products/workbench/)

[Postman](https://www.postman.com/)

-clone this repo and set up local .env settings for:

DB_PASSWORD=password

DB_NAME=music_library_dev

DB_USER=root

DB_HOST=localhost

DB_PORT=3307

PORT=3000

-change password to something more secure

-set up the database connection, pull docker image and use MySQLWorkbench to manage the database.

```
docker run -d -p 3307:3306 --name music_library_mysql -e MYSQL_ROOT_PASSWORD=password mysql
```

run:

```
npm i
```

**Routes**

- Create: POST to /artist
- Read all: GET to /artist
- Read single artist: GET to /artist/:id
- Update: PATCH to /artist/id
- Delete: DELETE to /artist/:id

**Project status**

Completed and deployed with Heroku [here](https://music-library-helid.herokuapp.com/artist). Use Postman as a client to insert an artist to the database.

Possible ways to continue this project:

- extend the app to include album table.

- connect artist id to album

- fix swagger front end

---

**Comments**

The project has streghten my knowledge of the complex Backend development, ODD (Object oriented programming) by keeping ROUTES, CONTROLLERS and SERVICES separate and of course again highlighed the importance of the testing environment.
