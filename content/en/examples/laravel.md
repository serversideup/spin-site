---
title: 'New Laravel Project'
description: ''
position: 4.0
category: 'Examples'
---

## Assumptions
This guide has a few critical assumptions before moving forward:
1. You have `spin` installed on your machine
1. You're starting a new, simple Laravel project
1. You have Docker installed and running on your machine
1. You've [configured an additional loopback address](helpful-docker-configurations/add-loopback-address) for Docker

## Create a new Laravel Project with Composer
<alert type="warning">

This example is using `PHP 8.1`. Be sure to change the image name to match your version of PHP that you're using for your project. [See available versions →](https://github.com/serversideup/docker-php/#available-docker-images)

</alert>

We can use Docker to run `composer` and download Laravel in a new folder.

Run this command in the directory you want to create a new Laravel project in:
```bash
docker run --rm -e "S6_LOGGING=1" -v $(pwd):/var/www/html serversideup/php:8.1-fpm composer create-project laravel/laravel example-app
```

## Add the "Docker Compose" templates to your project
As we explain in our Introduction & Concepts page, we have two files that are critical for development:

1. docker-compose.yml
1. docker-compose.dev.yml

Feel free to use these files as your simple Laravel example:

<alert type="warning">

You can change the database credentials, but if you change them in one place, be sure to change them everywhere else.

</alert>

#### docker-compose.yml
```yaml
version: '3.8'
services:
  php:
    image: serversideup/php:8.1-fpm-nginx
    working_dir: /var/www/html

  mariadb:
    image: mariadb:10.7
  
  node:
    image: node:lts
```

#### docker-compose.dev.yml
```yaml
version: '3.8'
services: 
  mariadb:
    networks:
      - web-dev
    environment:
        MYSQL_ROOT_PASSWORD: "rootpassword"
        MARIADB_DATABASE: "laravel"
        MARIADB_USER: "example-app-user"
        MARIADB_PASSWORD: "example-app-password"
    volumes:
      # Add volume for all database files
      - ./_volumes/mysql/database_data/:/var/lib/mysql
      # Add volume for custom configurations
      - ./_volumes/mysql/conf.d/:/etc/mysql/conf.d
      - ./_volumes/mysql/docker-entrypoint-initdb.d/:/docker-entrypoint-initdb.d
    ports:
      - target: 3306
        published: 3306
        mode: host

  php:
    networks:
        - web-dev
    ports:
      # Listen on port 80, default for HTTP
      - target: 80
        published: 80
        mode: host
      # Listen on port 443, default for HTTPS
      - target: 443
        published: 443
        mode: host
    volumes:
      - .:/var/www/html/:cached
    depends_on:
      - "mariadb"

  node:
    networks:
      - web-dev
    volumes:
      - .:/usr/src/app/:cached
    working_dir: /usr/src/app/

networks:
  web-dev:
```

## Configure your Laravel `.env`
Make sure you update these variables to look like this (or whatever you changed them to):
```
DB_CONNECTION=mysql
DB_HOST=mariadb
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=example-app-user
DB_PASSWORD=example-app-password
```

## Add `./volumes` to your ".gitignore"
We want your database information to be persistent, so we store them in your project under `./volumes`. You will not want this information committed to your repo.

#### .gitignore
```
# Ignore the _volumes folder
/_volumes/*
```

## Configure your hosts file 
Add this entry to your hosts file:
```
127.0.0.1 laravel.dev.test
```

The hosts file is simulating DNS for us. You can find it at:
* MacOS: `/etc/hosts`
* Linux: `/etc/hosts`
* Windows: `C:\Windows\System32\drivers\etc\hosts`

## Spin up your development environment
```bash
spin up
```

You'll start to see a bunch of output in your terminal. Wait for this to fully come up (the output should slow down or stop).

**Important note:** On your first provision, you must wait for the database to provision the user. Look at the Docker compose output for "financial-freedom-mariadb-1". It will say something like `[Entrypoint]: Creating user example-app-user

## Visit your local development site
Open up a browser window and visit `http://laravel.dev.test`.

![Laravel will load locally on your development environment.](laravel-example/test-site.png "Laravel Test Site")

## Run your migrations
Using [exec](command-reference/exec), let's run a command in our existing PHP containers.

**Open a new terminal window/tab**, then run this:
```bash
spin exec php php artisan migrate
```

If everything is up and running correctly, you should see the migrations completed successfully.

## Adding services
This is a very basic example of getting up and running with Laravel. If you're looking to add more services, check out the "Common Services" section in the navigation for more advanced use cases!