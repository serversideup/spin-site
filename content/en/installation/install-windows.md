---
title: 'Install to Windows'
description: ''
position: 3.2
category: 'Installation'
---

<alert type="warning">

This document is a work in progress. We're currently testing some things out and continuing to add to this document. If you see errors or have advice, please contribute! 😃

</alert>

## Pre-requisites
Windows requires a "subsystem Linux" distribution which takes some configuring on a brand new machine. Once configured, Linux will be running as a virtual machine on your Windows computer, allowing you to run Docker.

You'll need the following services configured on your Windows machine:
* Windows Subsystem Linux
* Docker Desktop

## Prepare your Windows Machine

### Install The Kernel Update

To prevent errors with Docker Desktop, be sure to have the latest Linux Kernel update installed. [Refer to the documentation for download →](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)

If you do not install this update, you will see this error on launch of Docker Desktop.

![WSL 2 Installation Warning](windows/wsl-incomplete.png)

### Install Windows Subsystem Linux (WSL)

<alert type="info">

The Official documentation for installing WSL can be found here: [https://docs.microsoft.com/en-us/windows/wsl/install](https://docs.microsoft.com/en-us/windows/wsl/install)

</alert>

We prefer Ubuntu as our distribution. So if you're happy with that recommendation, run this command in PowerShell as administrator to install WSL.

<alert type="warning">

Make sure to right click on the PowerShell icon and click <b>Run as Administrator.</b>

</alert>

```powershell
wsl --install -d ubuntu
```

![WSL Install Command](windows/wsl-install.png)

## Install Docker Desktop

Download and install the latest version of Docker Desktop from Docker's Website [https://www.docker.com/products/docker-desktop](https://www.docker.com/products/docker-desktop)

### Configuration

If prompted, leave the default options checked.

![Docker Configuration](windows/docker-desktop-configuration.png)

### Accept the terms

Make sure you open "Docker Desktop" (double click the Docker Desktop icon from your Desktop) after install and accept the terms.

![Accept Docker EULA](windows/docker-accept-eula.png)

# Install Windows Terminal (Optional)

Although this application is still in preview, you may want to consider installing this for your best experience. You'll get tab support for CLIs and a few other bonus features.

You can install it from the Microsoft Store or from their Github page:<br /> [Download Windows Terminal →](https://docs.microsoft.com/en-us/windows/terminal/install)

# Verify everything is working

You can validate Docker is working by running this command in your Windows Terminal:

```bash
docker info
```

It should return version information.

![Docker Info](windows/docker-info.png)

You can also run a simple container to ensure everything is working with container execution:

```bash
docker run --rm hello-world
```

It should return something like this.

![Docker Run Hello World!](windows/docker-run-hello-world.png)