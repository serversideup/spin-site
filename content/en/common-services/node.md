---
title: 'Node'
description: ''
position: 6.3
category: 'Common Services'
---
## About
[Node.js](https://nodejs.org/) is an extremely popular JavaScript runtime that is used by many JavaScript frameworks.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  node:
    image: node:lts
    working_dir: /usr/src/app
```

[See the official Node DockerHub page](https://hub.docker.com/_/node/) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  node:
    command: "yarn dev"
    volumes:
      - .:/usr/src/app:cached
    networks: 
      - web-dev
    # Remove the ports if you are using something like Trafeik or Caddy (recommended)
    ports:
      - target: 3000
        published: 3000
        mode: host
```

### Commands
You can see the "command:" calls to run `yarn dev`. This may need to be changed, depending on your project (and if you are using `npm` or `yarn`).

### Ports
The example above directly exposes the Node server on port 3000. You'll likely never do that in production. If you use something like Traefik, you would replace the ports with `labels`, like this:

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.mynodeapp.rule=Host(`mynodeapp.dev.test`)"
      - "traefik.http.routers.mynodeapp.entrypoints=websecure"
      - "traefik.http.routers.mynodeapp.tls=true"
      - "traefik.http.services.mynodeapp.loadbalancer.server.port=3000"
      - "traefik.http.services.mynodeapp.loadbalancer.server.scheme=http"
```

The `label` adds certain metadata to your container, telling Traefik to route "mynodeapp.dev.test" to port 3000 on your node container. All web traffic will enter through Traefik first, then to your Node container -- which is a more realistic scenario to what you can run in production.

## Networks
If you copy and paste from above, be sure to define your network at the bottom of the file.

```yaml
networks:
  web-dev:
```

## Real-life example
See our open source project called [Financial Freedom](https://github.com/serversideup/financial-freedom) for more examples.