---
title: 'Contributing'
description: ''
position: 7.4
category: 'Community'
---

## Contributing to documentation
Open source projects are worthless without good documentation. If you find something is not clear, we'd love to have your help.

<br />[View the docs repo →](https://github.com/serversideup/spin-site)

## Testing beta features
If you'd like to help us test beta releases, please add `--beta` to the install script:
```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/serversideup/spin/main/tools/install.sh)" "" --beta
```

## Request Features
We have a guide on how to request features:
<br />[Request features →](https://community.serversideup.net/t/requesting-features-for-spin/537)

## Releasing a new version
Everything is based off the version defined in `package.json`. To publish a version, follow these steps:

1. Have a clean working repository
1. Run `npm version [ version-type ]` ([see `npm version` docs](https://docs.npmjs.com/cli/v8/commands/npm-version) for more detail)
1. Push tags & push the commit
1. Configure the tag as a release

<alert type="warning">

Be sure to tag the release as a `pre-release` on the Github UI for beta releases.

</alert>