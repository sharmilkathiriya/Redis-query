# Redis Installation on WSL (Windows Subsystem for Linux) - Ubuntu 22.04

This guide provides quick steps to install Redis on **WSL** using **Ubuntu 22.04**.

## Steps

To install Redis on your Windows machine via WSL, follow these commands:

```bash
wsl --install
wsl --install -d Ubuntu-22.04
wsl -d Ubuntu-22.04
sudo apt update
sudo apt install redis-server
sudo service redis-server start
redis-cli ping
redis-cli
sudo service redis-server stop


The link to **Redis Commander** is now clickable in markdown format using `[Redis Commander](https://joeferner.github.io/redis-commander/)`.
