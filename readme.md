# Kafka BBB

## Intro

This project is inspired by Big Brother Brasil's voting system.
It uses Apache Kafka in order to record and process voting events.
On this POC express and Apache Kafka event streams + KSQLDb will be used to compute the votes.

## How to run

**Important**: Use a Kafka cluster from confluent cloud to spin up the project quickly.

After cloning the repo, there are some configs that has to be set up in order to make the project work properly.
First of all, download all dependencies with:

```bash
yarn install
```

After that, set up an environment file `.env` with your Confluent cloud credentials, using `.env.example` as model.

Once the environment is properly configured, build the project and run it.

```bash
yarn build
```

```bash
yarn start
```
