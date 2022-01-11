---
title: 'PHP'
description: ''
position: 6.4
category: 'Common Services'
---
## About
[PHP](https://www.php.net/) is a popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  php:
    image: serversideup/php:8.1-fpm-nginx
```

Feel free to use whatever PHP image that you want, but we use our own open source PHP images ([serversideup/php](https://hub.docker.com/r/serversideup/php)) to serve our applications.

This follows Chris Fidao's methodology from [Shipping Docker](https://serversforhackers.com/shipping-docker), where everything is packaged into one application image. This means PHP-FPM + NGINX + Your App can be delivered all at once in a single Docker image, making it very easy for you to make your application disposable and repeatable. PHP-FPM + NGINX are delivered together because of some special intricacies with how PHP-FPM reads files. [See our README on our PHP images](https://github.com/serversideup/docker-php/) for more detail.

#### Versions
[See the official serversideup/php DockerHub page](https://hub.docker.com/r/serversideup/php/) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  php:
    networks:
        - web-dev
    volumes:
      - .:/var/www/html/:cached
    # Example dependencies for other services. Remove below if not needed
    depends_on:
      - "mariadb"
      - "traefik"
    # Remove the ports if you are using something like Trafeik or Caddy (recommended)
    ports:
      - target: 443
        published: 443
        mode: host
```

### Commands
You can see the "command:" calls to run `yarn dev`. This may need to be changed, depending on your project (and if you are using `npm` or `yarn`).

### Ports
The example above directly exposes the NGINX server on port 443. You'll likely never do that in production. If you use something like Traefik, you would replace the ports with `labels`, like this:

```yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.myphpapp.rule=Host(`myphpapp.dev.test`)"
      - "traefik.http.routers.myphpapp.entrypoints=websecure"
      - "traefik.http.routers.myphpapp.tls=true"
      - "traefik.http.services.myphpapp.loadbalancer.server.port=443"
      - "traefik.http.services.myphpapp.loadbalancer.server.scheme=https"
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