# Quote of the day

A website for showing quotes, everyday.

## Build and run

This project uses MariaDB as it's database. To setup a container for it run the following

```bash
mkdir db
docker-compose up -d
```

Before running the server, the .env file must be present with a correct configuration.

```bash
cp .env.example .env
```

To build and run the project run the following

```bash
npm install
npm run dev
```
