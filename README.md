# Music Library

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

On 20th December 2021 the project is not fully finished and the UPDATE and DELETE operations are not working yet. My plan is to complete these in near future. This being the first backend API app managing the database the project was challenging at the times but very rewarding to see the CREATE and READ features working and to be able to add data.

I'm also planning to add another route and extend the app to include album table.

I have left some commented out code which is not working just as a notes for myself.

---

**Comments**

The project has streghten my knowledge of the complex _BACKEND_ development, _ODD (Object oriented programming)_ by keeping ROUTES, CONTROLLERS and SERVICES separate and of course again highlighed the importance of the testing environment.
