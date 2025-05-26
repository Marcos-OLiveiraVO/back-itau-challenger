## 📚 Project structure

I applied some concepts from the inMemoryRepository pattern along with a use case to centralize the application rules. I also created DTOs to validate the input data and an entity to represent our transaction.

Additionally, I created a health check endpoint that returns 'OK', indicating the application is running.

All the tests was made using Jest that is already integrated with Nestjs.

Since all the data is in memory, once you restart application all will be lost. The challenger repository can be found here: https://github.com/feltex/desafio-itau-backend/tree/main

# 🧩 Project Setup & Usage Guide

## 🚀 Running the Application

To get started, make sure you have **Docker** and **Docker Compose** installed on your machine and i highly recommend you use **yarn**.

Once everything is configured, clone the repository and start the application with:

```bash
yarn dev
```

🛑 Stopping and Resetting
To shut down all containers and reset the environment, run:

```bash
yarn stop
```

## 📚 Running tests

You can run all the tests using the following command.

```bash
yarn test --verbose
```

## 📚 API Documentation

You can easily explore all available endpoints through Swagger UI.

Just open your browser and go to:

http://localhost:3000/api

That’s it — simple as that!
