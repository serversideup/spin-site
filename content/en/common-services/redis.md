---
title: 'Redis'
description: ''
position: 6.5
category: 'Common Services'
---
## About
[Redis](https://redis.io/) is an open source, in-memory data structure store, used as a database, cache, and message broker.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  redis:
    image: redis:6
```

[See the official Redis DockerHub page](https://hub.docker.com/_/redis/) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  redis:
    command: "redis-server --appendonly yes --requirepass redispassword"
    volumes:
      - ./_volumes/redis/data:/data
    networks:
      - web-dev
```
#### Redis Password
Be sure to change the "command" to use the Redis password that you want to use.

### Persistent storage
All persistent storage will be located in a `./_volumes/` folder on your project.
#### Add this to your `.gitignore`
```
/_volumes/*
```

## Networks
If you copy and paste from above, be sure to define your network at the bottom of the file.

```yaml
networks:
  web-dev:
```

## Real-life example
See our open source project called [Financial Freedom](https://github.com/serversideup/financial-freedom) for more examples.