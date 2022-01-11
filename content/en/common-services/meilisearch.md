---
title: 'MeiliSearch'
description: ''
position: 6.1
category: 'Common Services'
---
## About
[MeiliSearch](https://www.meilisearch.com/) is an open source lightweight alternative to ElasticSearch, giving developers blazingly fast and relevant search results in their application.

## Installation & Basic Usage
Please see the [Introduction & Concepts](/getting-started/introduction), then reference the examples below on adding this service to your project.

## Base: `docker-compose.yml`
Add this section to your main `docker-compose.yml` file, which will act as a "base". All environments will reference this file, so you can simply manage everything from one location.
```yaml
  meilisearch:
    image: getmeili/meilisearch
    environment:
      MEILI_NO_ANALYTICS: "true"
```

[See the official MeiliSearch DockerHub page](https://hub.docker.com/r/getmeili/meilisearch/tags) for specific version references.

## Development: `docker-compose.dev.yml`
```yaml
  meilisearch:
    networks:
        - web-dev
    volumes: 
      - ./_volumes/meilisearch/data.ms:/data.ms:cached
    # Example dependencies for other services. Remove below if not needed
    depends_on:
      - "mariadb"
      - "php"
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