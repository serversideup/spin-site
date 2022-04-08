---
title: 'up'
description: ''
position: 5.8
category: 'Command Reference'
---
## Purpose
Bring up all containers defined in `docker-compose.yml` and `docker-compose.$SPIN_ENV.yml` (`$SPIN_ENV` defaults to `dev`).

## Usage
```bash
spin up [OPTIONS]
```
**Example:**
```bash
spin up --build
```
You can add options at the end of the command (like the `--build` shown above. The above command will bring up your containers, but then also force a new build (if you have builds configured in your "docker-compose.dev.yml" file).

## Defaults
The `spin up` command defaults to running:
```sh
COMPOSE_FILE=docker-compose.yml:docker-compose.dev.yml docker compose up
```

## Official Documentation & Additional Options
This command is a shortcut for [`docker compose up`](https://docs.docker.com/compose/reference/up/) and can accept additional options that you pass to it. It also does a number of other special things.


## Special notes
* Make sure to have a `docker-compose.yml` and **by default** a `docker-compose.dev.yml` in your project before running
* Spin will automatically pull image updates (only if the machine is connected to the Internet)
* Spin will remove any orphan containers

## Overriding the environment with `$SPIN_ENV`
Let's say you have a few different files in your repository:
```
.
├── docker-compose.ci.yml
├── docker-compose.production.yml
├── docker-compose.staging.yml
├── docker-compose.testing.yml
└── docker-compose.yml
```

By default, Spin uses `docker-compose.yml` and `docker-compose.dev.yml`.

If you want to change that, you just need to set `$SPIN_ENV`:
```
SPIN_ENV=testing spin up
```

This will essentially run:
```
COMPOSE_FILE=docker-compose.yml:docker-compose.testing.yml docker compose up
```