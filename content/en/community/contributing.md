---
title: 'Contributing'
description: ''
position: 7.4
category: 'Community'
---

## Releasing a new version
Everything is based off the version defined in `package.json`. To publish a version, follow these steps:

1. Have a clean working repository
1. Run `npm version [ version-type ]` ([see `npm version` docs](https://docs.npmjs.com/cli/v8/commands/npm-version) for more detail)
1. Push tags & push the commit
1. Configure the tag as a release

<alert type="warning">

Be sure to tag the release as a `pre-release` on the Github UI for beta releases.

</alert>