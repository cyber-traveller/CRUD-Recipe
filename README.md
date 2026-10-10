# CRUD Recipe API

A REST API for creating, reading, updating and deleting recipes, built with Express and MongoDB (Mongoose).

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

## Endpoints

Base path: `/api/recipes`

| Method | Path | Description |
| --- | --- | --- |
| POST | `/api/recipes` | Create a recipe |
| GET | `/api/recipes` | List recipes |
| GET | `/api/recipes/:id` | Get one recipe |
| PATCH | `/api/recipes/:id` | Update a recipe |
| DELETE | `/api/recipes/:id` | Delete a recipe |

## Getting started

```bash
git clone https://github.com/cyber-traveller/CRUD-Recipe.git
cd CRUD-Recipe
npm install
```

Create a `.env` file with your MongoDB connection string and port (see `config/dbConfig.js` for the variable names), then run:

```bash
node Server.js
```

## Structure

```
config/        Database connection
controllers/   Recipe logic
models/        Recipe schema
routes/        Recipe routes
Server.js      App entry point
```
