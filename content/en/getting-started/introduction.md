---
title: Introduction & Concepts
description: ''
position: 2.0
category: 'Getting Started'
benefits:
  - That's much easier to type than 65 characters!
  - Spin follows the same Docker syntax
  - It's easy to onboard people to your team (people don't need to relearn custom aliases for your team if they are already familiar with Docker)
---

## Why use `spin`?
Spin is created to simplify the replication of your production environment and enable you to manage your infrastructure dependencies from a single file.

The days of "make sure to update this on your machine" are over. Commit once, and deploy that change to everyone.

## How `spin` works
Spin simply is a "wrapper script" that shortens the syntax of official Docker commands. Spin dramatically improves the developer experience of while using Docker without abandoning a standardized protocol.

## Docker overrides
The most powerful concept we embrace is the use of [Docker Overrides](https://docs.docker.com/compose/extends/). This allows you to have multiple files and override your base file, depending what environment you are in.

For example, let's say our project directory has these three files:

```
/my-project
├── docker-compose.yml
├── docker-compose.dev.yml
└── docker-compose.prod.yml
```

We can use `docker-compose.yml` as our base file, then `docker-compose.dev.yml` as our "override". This will essentially merge the files.

To do that, we need to run:

```bash
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This will call the files in order and "merge" them together:

<img src="docker-overrides.png" alt="Docker Overrides Diagram"/>

#### Our Expected Result for Development
```yaml
version: 3.8
services:
  php:
    image: serversideup/php:8.1-fpm-nginx
    environment:
        PRODUCTION: "false"
  node:
    image: node:lts
```

Cool, but that's *a lot* to type every morning when you jump on the computer!

### Spin simplifies the development workflow
Instead of typing 65 characters everytime or having people come up with their own whacky aliases, `spin` simplifies and follows the Docker standard:
```bash
spin up
```
There are tons of benefits to this:
<list :items="benefits"></list>

That's not all, there are a ton of other actions that you can run to simplify your development workflow. [See All Available Commands →](/command-reference/available-commands)

## Do I run `spin` in production?
Honestly, we don't recommend it. The less moving parts you have in production, the better.

The goal of `spin` is to simplify the human experience. For your CI stuff, just use the longer commands directly from Docker. Your CI runner doesn't mind typing those commands in every single time.

## Can I use `spin` if I don't run Docker in "Swarm Mode" in production?
Of course! Although you might be missing the full benefits of running full Docker in production, using Spin in development may help solve a lot of problems for managing a fleet of development machines.

## Where is `spin` installed?
We offer two areas where Spin can be installed:

#### At the _user_ level
Users can install this on their system **without root permissions** being requested. The benefit with this installation is that users will be able to use `spin` from anywhere on their system. As long as the alias is configured in their bash profile and there is a `docker-compose.yml` and `docker-compose.dev.yml` in the folder, spin will work.

The other major advantage is `spin` will intelligently check for updates to make sure everyone is always on the latest version.

See the installation instructions on how to install spin on the system at the user level.

#### At the _project_ level
On larger projects or open source projects, having everyone configure their machines with a system dependency can be a nightmare. Instead of having each user go through steps manually, you can include spin as a dependency via `npm/yarn` or `composer`.

This will give the project manager control of the exact version of spin to run on everyone's machine.