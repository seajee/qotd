# Quote of the day

A website for showing quotes, everyday.

## Build and run

Before running the server, the .env file must be present with a correct configuration.

```bash
cp .env.example .env
```

This project uses MariaDB as it's database. To setup a container for it run the following

```bash
docker-compose up -d
```

To build and run the project run the following

```bash
npm install
npm run dev
```

## Adding new quotes

To add a new quote just run the following

```bash
QUOTE="Quote of the day" npm run add
```