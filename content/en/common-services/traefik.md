---
title: 'Traefik'
description: ''
position: 6.7
category: 'Common Services'
---
## About
[Traefik](https://traefik.io/traefik/) is an open source reverse proxy and load balancer for microservices. It works very well with Docker and automatically handles issuing LetsEncrypt certificates too.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  traefik:
    image: traefik:v2.5
```

[See the official Traefik DockerHub page](https://hub.docker.com/_/traefik/) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  traefik:
    networks:
      - web-dev
    ports:
      # Publish port 80, with a redirect to HTTPS
      - target: 80
        published: 80
        mode: host
      # Publish port 443 for HTTPS
      - target: 443
        published: 443
        mode: host
      # Publish port 8080 so developers can access the Traefik console
      - target: 8080
        published: 8080
        mode: host
    volumes:
      # Add Docker as a mounted volume, so that Traefik can read the labels of other services (read-only)
      - /var/run/docker.sock:/var/run/docker.sock:ro
      # Provide a custom config for Traefik (read-only)
      - ./_volumes/traefik/traefik.yml:/traefik.yml:ro
      # Provide an additional configuration for local certificates
      - ./_volumes/traefik/traefik-certs.yml:/traefik-certs.yml
      # Mount the certificate store from our local project
      - ./_volumes/traefik/certificates/:/certificates
```
### Persistent storage
All persistent storage will be located in a `./_volumes/` folder on your project.
#### Add this to your `.gitignore`
```sh
# Ignore the _volumes folder, except certain Traefik configs
/_volumes/*
!/_volumes/traefik
```

## Required configs (commit these to your repository)
There are certain configurations that you can manage with Traefik. Feel free to commit these configurations directly to your repository so you can manage everything from one location.

### Main Traefik Configuration: `./volumes/traefik/traefik.yml`
```yml
# Do not panic if using a self-signed cert
serversTransport:
  insecureSkipVerify: true

### Providers
providers:
  docker:
    # Match this to your network
    network: web-dev
    exposedbydefault: false
  file:
      filename: /traefik-certs.yml
      watch: true
entryPoints:
  web:
    # Redirect HTTP → HTTPS
    address: ":80"
    http:
      redirections:
        entrypoint:
          to: websecure
          scheme: https

  websecure:
    address: ":443"

accessLog: {}
log:
  level: ERROR

api:
  dashboard: true
  insecure: true
```
[See the official Traefik configuration reference for all options →](https://doc.traefik.io/traefik/reference/static-configuration/file/)

### Certificate Configuration: `./volumes/traefik/traefik-certs.yml`
```yml
tls:
  stores:
    default:
      defaultCertificate:
        # Change these file names to match what you have
        certFile: /certificates/local-dev-opensource.pem
        keyFile: /certificates/local-dev-opensource-key.pem
  certificates:
      # Change these file names to match what you have
    - certFile: /certificates/local-dev-opensource.pem
      keyFile: /certificates/local-dev-opensource-key.pem
      stores:
        - default
```
[See the official Traefik configuration reference for all options →](https://doc.traefik.io/traefik/reference/dynamic-configuration/file/)

### Certificates Directory: `./volumes/traefik/certificates/`
Make sure to place your keypair in here and configure `./volumes/traefik/traefik-certs.yml` to match your file names/path.

#### 🔐 What SSL keypair should I use?
You can [grab the ones we use](https://github.com/serversideup/financial-freedom/tree/main/_volumes/traefik/certificates) from one of our open source projects, or generate your own using [OpenSSL](https://www.openssl.org/).

## Networks
If you copy and paste from above, be sure to define your network at the bottom of the file.

```yaml
networks:
  web-dev:
```

## Real-life example
See our open source project called [Financial Freedom](https://github.com/serversideup/financial-freedom) for more examples.