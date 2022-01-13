---
title: 'Install via Composer'
description: ''
position: 3.5
category: 'Installation'
---

Installing `spin` at the project level is a great way to deploy `spin` without much configuration from the user's end. [View `spin` on Packagist →](https://packagist.org/packages/serversideup/spin)

## Add `spin` to your project with Composer
<alert type="warning">

This example is using `PHP 8.1`. Be sure to change the image name to match your version of PHP that you're using for your project. [See available versions →](https://github.com/serversideup/docker-php/#available-docker-images)

</alert>

We can use Docker to run `composer` and install it on your project. **Run this command from the parent folder of your project.**

```bash
docker run --rm -e "S6_LOGGING=1" -v  $(pwd):/var/www/html serversideup/php:8.1-fpm composer require serversideup/spin --dev
```

#### If you already have composer installed on your machine:
We're essentially just installing it like this:
```bash
composer require serversideup/spin --dev
```

## Spin is installed 🥳
You should now be able to access `spin` by running:
```bash
./vendor/bin/spin up
```

### Bonus Tip: Use an alias
Rather than typing `./vendor/bin/spin` every time, you can add a "smart alias", which will check to see if it exists in your `node_modules`, if not, it loads it from the `vendor` folder.

Just add this in your `~/.bash_profile` or your `~/.zshrc`:
```bash
alias spin='[ -f node_modules/.bin/spin ] && bash node_modules/.bin/spin || bash vendor/bin/spin'
```

You'll now be able to access `spin` from your project root directory.