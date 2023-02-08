# Mercadopago NodeJS Server Typescript

Mercadopago is a free market payment platform ,is present throughout Latin America.

The following implementation is the server that allows processing customer orders and obtaining a payment id to be later used to direct the user to the payment module within the site.

## Features

- Checkout within the same site
- Fast payment and great shopping experience for users
- Accept multiple payment methods (credit, debit,banks transferences, mercadopago account)
- Customizable
- Multiple validations, from payments to the identity of the buyer

# Usage

Clone repository

```sh
git clone https://github.com/davc93/mercadopago-server-typescript.git
```

Start containers

```sh
docker compose up -d

```
Set env variables in .env files taking .env.example
```
MP_ACCESS_TOKEN=
MONGODB_URI=
PORT=
```

Install dependencies
```sh
npm i

```
Run in dev mode
```sh

npm run dev
```

## To test api use insomnia importing insomnia.json