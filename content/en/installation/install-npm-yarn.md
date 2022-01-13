---
title: 'Install via NPM/Yarn'
description: ''
position: 3.4
category: 'Installation'
---

Installing `spin` at the project level is a great way to deploy `spin` without much configuration from the user's end. [View `spin` on NPM →](https://www.npmjs.com/package/@serversideup/spin)

## Add `spin` to your project with Yarn/NPM
We can use Docker to run install `spin` on your project. **Run this command from the parent folder of your project.**

<alert type="warning">

The examples below are using `node:latest`. Be sure to change the image name to match your version of Node that you're using for your project. [See available versions →](https://hub.docker.com/_/node/)

</alert>

#### Yarn (with Docker)
```bash
docker run --rm -v  $(pwd):/usr/app/src -w /usr/app/src/ node yarn add @serversideup/spin --dev
```
#### NPM (with Docker)
```bash
docker run --rm -v  $(pwd):/usr/app/src -w /usr/app/src/ node npm install @serversideup/spin --dev
```


#### If you already have `yarn` or `npm` installed on your machine
We're essentially just installing it like this:

**Yarn:**
```bash
yarn add @serversideup/spin --dev
```
**NPM:**
```bash
npm install @serversideup/spin --dev
```



## Spin is installed 🥳
You should now be able to access `spin` by running:
```bash
./node_modules/.bin/spin up
```

### Bonus Tip: Use an alias
Rather than typing `./node_modules/.bin/spin` every time, you can add a "smart alias", which will check to see if it exists in your `node_modules`, if not, it loads it from the `vendor` folder.

Just add this in your `~/.bash_profile` or your `~/.zshrc`:
```bash
alias spin='[ -f node_modules/.bin/spin ] && bash node_modules/.bin/spin || bash vendor/bin/spin'
```

You'll now be able to access `spin` from your project root directory.