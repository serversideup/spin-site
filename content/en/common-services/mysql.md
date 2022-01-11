---
title: 'MySQL'
description: ''
position: 6.2
category: 'Common Services'
---
## About
[MySQL](https://www.mysql.com/) is a very popular open source relational database. It is maintained by Oracle and is used by many applications worldwide.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  mysql:
    # You might need to specifically the platform for M1 Macs
    platform: linux/x86_64
    image: mysql:8
    networks:
      - web-dev
    volumes:
      - ./_dev/mysql/database_data/:/var/lib/mysql:cached
    environment:
        MYSQL_ROOT_PASSWORD: "rootpassword"
        MYSQL_DATABASE: "platform"
        MYSQL_USER: "platformuser"
        MYSQL_PASSWORD: "platformpassword"
    ports:
      - target: 3306
        published: 3306
        mode: host
```

[See the official MySQL DockerHub page](https://hub.docker.com/_/mysql/?tab=description) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  mysql:
    networks:
      - web-dev
    volumes:
      - ./_dev/mysql/database_data/:/var/lib/mysql:cached
    environment:
        MYSQL_ROOT_PASSWORD: "rootpassword"
        MYSQL_DATABASE: "mydatabase"
        MYSQL_USER: "databaseuser"
        MYSQL_PASSWORD: "databasepassword"
    # Publish the port so things like Sequel Pro or TablePlus can connect
    ports:
      - target: 3306
        published: 3306
        mode: host
```

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