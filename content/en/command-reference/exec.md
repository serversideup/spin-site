---
title: 'exec'
description: ''
position: 5.3
category: 'Command Reference'
---
## Purpose
Use `exec` if you want to run a command in **existing** containers.

## Usage
```bash
spin exec [OPTIONS] SERVICE COMMAND
```
**Example:**
```bash
spin exec php php artisan migrate
```
The above command runs `php artisan migrate` inside of the `php` service (this is why "php" is repeated twice).

## Official Documentation & Additional Options
This command is a shortcut for [`docker-compose exec`](https://docs.docker.com/compose/reference/exec/) and can accept additional options that you pass to it.

## Special notes
* Make sure to change `service` to the service name defined in your "docker-compose.yml" file
* Pass the command after the service name. It must be a valid command inside that container