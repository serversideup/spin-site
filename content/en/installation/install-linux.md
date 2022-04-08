---
title: 'Install to Linux'
description: ''
position: 3.3
category: 'Installation'
---

## Install Docker Engine
Install Docker Engine [following the official Docker instructions](https://docs.docker.com/engine/install/).

Ensure you have a working Docker installation by running `docker version`.

## Download and install `spin`
Run the installer with this simple command in your terminal. **No root permissions required.**

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/serversideup/spin/main/tools/install.sh)"
```

The above script will install spin at the _user_ level in `~/.spin`, using less than 300KB of storage.

## Add `spin` to your PATH
In order for your terminal to know where `spin` is located, we need to add this to your "PATH" for your shell. Depending on your shell, you will need to **paste the following text at the BOTTOM of the appropriate file**:

<alert type="info">

You can run `echo $0` in your terminal to figure out which shell you are using.

</alert>

```bash
# Add this to `~/.zshrc` or `~/.bashrc`
export PATH="$HOME/.spin/bin:$PATH"
```
Files to modify:

- **Bash (shipped as default for most distros):** ~/.bashrc
- **ZSH (for the true hackers 🤓):** ~/.zshrc

You can use something like `nano` or `vim` to modify these files.

## Source your changes
To apply the changes, simply restart your terminal or you can source the file you just modified:

```bash
# If you're using ZSH
source ~/.zshrc

# If you're using Bash
source ~/.bashrc
```
## Configure Docker Compose V2
Spin is set to run the latest version of Docker Compose. By default, Linux still ships with V1. You can follow Docker's official steps on [ How to Install Docker Compose V2 →](https://docs.docker.com/compose/cli-command/#install-on-linux)

## Verify your user can run Docker commands
<alert type="warning">

Make sure your user has access to manage the Docker daemon.

</alert>

```sh
docker compose version
```

### ❌ If you run into an error: Add your user to the Docker Group
If your user does not have access to the Docker Daemon, you will need to add it.

#### Ensure the "docker" group is created
```sh
sudo groupadd docker
```

#### Add your user to the "docker" group
```sh
sudo usermod -aG docker $USER
```

#### Activate changes to your group
```sh
newgrp docker
```

## Validate `spin` is working


You should be able to run this and get a result 🥳
```bash
spin version
```