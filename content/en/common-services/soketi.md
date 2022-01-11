---
title: 'Soketi'
description: ''
position: 6.6
category: 'Common Services'
---
## About
[Soketi](https://docs.soketi.app/) is a simple, fast, and resilient open-source WebSockets server.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  socket:
    image: quay.io/soketi/soketi:latest-16-alpine
```

[See the official Soketi Documentation](https://docs.soketi.app/getting-started/installation/docker) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  socket:
    environment:
      DB_REDIS_HOST: "redis"
      DB_REDIS_PASSWORD: "redispassword"
      DB_REDIS_KEY_PREFIX: "socketi"
    networks:
      - web-public
    # The dependency below assumes you are using Redis. Remove if not needed.
    depends_on:
    - "redis"
    # Remove the ports if you are using something like Trafeik or Caddy (recommended)
    ports:
      - target: 6001
        published: 6001
        mode: host
```

### Ports
The example above directly exposes the NGINX server on port 443. You'll likely never do that in production. If you use something like Traefik, you would replace the ports with `labels`, like this:

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.socket-myapp.rule=Host(`socket-myapp.dev.test`)"
      - "traefik.http.routers.socket-myapp.entrypoints=websecure"
      - "traefik.http.routers.socket-myapp.tls=true"
      - "traefik.http.services.socket-myapp.loadbalancer.server.port=6001"
      - "traefik.http.services.socket-myapp.loadbalancer.server.scheme=http"
```

The `label` adds certain metadata to your container, telling Traefik to route "myphpapp.dev.test" to port 443 on your PHP container. All web traffic will enter through Traefik first, then to your PHP container -- which is a more realistic scenario to what you can run in production.

## Networks
If you copy and paste from above, be sure to define your network at the bottom of the file.

```yaml
networks:
  web-dev:
```

## Real-life example
See our open source project called [Financial Freedom](https://github.com/serversideup/financial-freedom) for more examples.