---
title: Comparisons
description: ''
position: 2.1
category: 'Getting Started'
---

We understand that spin isn't the first tool on the planet that solves the pain of managing development environments. Here is how it compares:

### Laravel Sail
We love Laravel Sail, but it focuses specifically on development. Sail uses Docker, but you won't be able to run Sail's configurations in production.

Although spin is not specifically designed for production ([read more](/getting-started/introduction#do-i-run-spin-in-production)), Spin enables the system administrator to easily re-use the configurations of Spin in production if you use Docker Swarm.

You should consider `spin` over Laravel Sail if:
- You want your production environment and development environment to be 100% the same
- You want to use `spin` on other projects that do not use PHP or Laravel

### Vagrant
* Vagrant is intended for development machines only
* Vagrant is pretty heavy when it comes to image size and performance requirements

### MAMP & MAMP PRO
* You would **never** run MAMP in production

### Kubernetes
Kubernetes is great, but over complicated for most apps. If you need greater than [99.999% uptime](https://uptime.is/99.999) (and it makes business sense to pay the price for that uptime), then Kubernetes might be a great fit for you.