---
title: 'MariaDB'
description: ''
position: 6.0
category: 'Common Services'
---
## About
[MariaDB](https://mariadb.org/) is a very popular open source relational database. It is a fork of MySQL and is run by some of the original developers of MySQL before Oracle acquired the MySQL project.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  mariadb:
    image: mariadb:10.7
```

[See the official MariaDB DockerHub page](https://hub.docker.com/_/mariadb?tab=description) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
mariadb:
    networks:
      - web-dev
    environment:
        MYSQL_ROOT_PASSWORD: "rootpassword"
        MARIADB_DATABASE: "mydatabase"
        MARIADB_USER: "databaseuser"
        MARIADB_PASSWORD: "databasepassword"
    volumes:
      # Add volume for all database files
      - ./_volumes/mysql/database_data/:/var/lib/mysql
      # Add volume for custom configurations
      - ./_volumes/mysql/conf.d/:/etc/mysql/conf.d
      - ./_volumes/mysql/docker-entrypoint-initdb.d/:/docker-entrypoint-initdb.d
    ports:
        # Publish the port so things like Sequel Pro or TablePlus can connect
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