---
title: 'Install to macOS'
description: ''
position: 3.1
category: 'Installation'
---
<video width="1200" height="630" alt="Spin Demo Video" autoplay loop muted controls>
   <source type='video/mp4' src='https://serversideup.net/wp-content/uploads/2022/01/spin-macos-install.mp4'>
</video>

## Install Docker Desktop
MacOS does not ship with Docker by default. To get Docker installed, you will need "Docker Desktop", which is the official desktop tool developed by Docker.

[Learn how to install Docker Desktop →](https://docs.docker.com/desktop/mac/install/)

## Download and install `spin`
Once Docker is installed, you are now ready to install `spin`. Run the installer with this simple command in your terminal. **No root permissions required.**

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
# Add this to `~/.zshrc` or `~/.bash_profile`
export PATH="$HOME/.spin/bin:$PATH"
```
Files to modify:
- **ZSH (most modern Macs):** ~/.zshrc
- **Bash:** ~/.bash_profile

You can use something like `nano` or `vim` to modify these files.

## Apply your changes
To apply the changes, simply restart your terminal or you can source the file you just modified:

```bash
# If you're using ZSH
source ~/.zshrc

# If you're using Bash
source ~/.bash_profile
```

## Validate it's working
You should be able to run this and get a result 🥳
```bash
spin version
```