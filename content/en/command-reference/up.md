---
title: 'up'
description: ''
position: 5.8
category: 'Command Reference'
---
## Purpose
Bring up all containers defined in `docker-compose.yml` and `docker-compose.dev.yml`.

## Usage
```bash
spin up [OPTIONS]
```
**Example:**
```bash
spin up --build
```
You can add options at the end of the command (like the `--build` shown above. The above command will bring up your containers, but then also force a new build (if you have builds configured in your "docker-compose.dev.yml" file).

## Official Documentation & Additional Options
This command is a shortcut for [`docker-compose up`](https://docs.docker.com/compose/reference/up/) and can accept additional options that you pass to it. It also does a number of other special things.

**`spin up` is a shortcut for:**
```
docker-compose up -f docker-compose.yml -f docker-compose.dev.yml
```

## Special notes
* Make sure to have a `docker-compose.yml` and `docker-compose.dev.yml` in your project before running
* Spin will automatically pull image updates (only if the machine is connected to the Internet)
* Spin will remove any orphan containers