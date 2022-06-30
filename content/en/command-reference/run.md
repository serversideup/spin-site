---
title: 'run'
description: ''
position: 5.7
category: 'Command Reference'
---
## Purpose
Use `run` if you want to run a command with NEW containers. This is helpful for package installers, etc.

## Usage
```bash
spin run [OPTIONS] SERVICE COMMAND 
```
**Example:**
```bash
spin exec php composer install
```
The above command runs `composer install` inside of the `php` service.

## Official Documentation & Additional Options

#### Spin Specific Options
- `--no-pull`: Do not automatically pull docker images.

### Official Docker Options
This command is a shortcut for [`docker-compose run`](https://docs.docker.com/compose/reference/run/) and can accept additional options that you pass to it.

## Special notes
* This command specifically ignores running container dependencies
* It will automatically remove the containers once the command is complete
* It adds extra environment variables to improve user-experience if you're running things like "S6 Overlay" inside your containers