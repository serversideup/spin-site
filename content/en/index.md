---
title: ''
menuTitle: 'Home'
description: ''
position: 1
category: ''
fullscreen: true
navigation: false
features:
  - Language independent (works with PHP, Node, Ruby, Python, etc)
  - Works on Windows, MacOS, and Linux
  - Replicate 100% of production locally in development
  - Intelligent & Automated docker image updates on every startup
  - Follows Docker standards, so there's no extra syntax to learn
---

<img src="header.png" class="light-img" width="1200" height="630" alt=""/>

## Replicate production in a single command
Spin is a bash utility that dramatically improves the development experience for development environments that use Docker.

<list :items="features"></list>

#### 😱 Turn this:
```bash
docker compose pull --ignore-pull-failures && docker compose -f docker-compose.yml -f docker-compose.dev.yml up --remove-orphans
```
#### ⚡️ Into this:
```bash
spin up
```

### Use Docker the way it's intended with Docker Overrides
- Docker Overrides are an extremely powerful feature that allows you to standardize your environment. [Learn more →](getting-started/introduction)
- Replicate 100% of production, no matter what environment you're in
### Install locally or at the project
- Install on your system with automatic updates (without requiring root permissions)
- Available via NPM
- Available via Composer
### Works with any language
- Spin is just a bash wrapper that improves the user-experience for developers
- Choose any docker image that you'd like or build your own Docker image
### Follows Docker standards
- Spin passes your commands to the official Docker commands, so there is no reason for you to learn a domain-specific language or learn another standard

## 🚀 Get started
[Learn the simple concepts and get started →](getting-started/introduction)