# Music Library 🎶

**First project with [Manchester Codes](https://www.manchestercodes.com/) BACKEND module**

The purpose of this project was to apply all learned aspects together in one project by building an API (Application Programming Interface) app to manage a database, a music library.

The project followed TDD principles by writing a failing test and write the code to pass the test. This time we used Mocha supertest, an integration test which checks that app is communicating with the database.

---

**Consepts**

- Database Design
- SQL
- MySQL
- CRUD (CREATE, READ, UPDATE, DELETE) Operations

---

**Programming langages and technologies used**

- Express, NodeJS
- MySQL
- Mocha /Chai supertest
- Docker
- Postman
- MySQL workbench

---

**Set up**

To be able to run this application follwing environment needs to be installed:

[Docker](https://docs.docker.com/get-docker/)

[MySQLWorkbench](https://www.mysql.com/products/workbench/)

[Postman](https://www.postman.com/)

```
npm init -y
```

```
npx eslint --init
```

```
npm i -S express
```

```
npm i -D nodemon
```

```
npm i -D dotenv
```

```
npm i -S mysql2
```

```
npm i -D mocha chai supertest
```

---

**Project status**

Completed and deployed with Heroku [here](https://music-library-helid.herokuapp.com/artist). Use Postman as a client to insert an artist to the database.

Possible ways to continue this project:

- extend the app to include album table.

- connect artist id to album

I have left some commented out code which is not working just as a notes for myself.

---

**Comments**

The project has streghten my knowledge of the complex _BACKEND_ development, _ODD (Object oriented programming)_ by keeping ROUTES, CONTROLLERS and SERVICES separate and of course again highlighed the importance of the testing environment.
