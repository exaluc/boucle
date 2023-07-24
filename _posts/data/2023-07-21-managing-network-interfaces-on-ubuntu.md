---
layout: post
title:  "Managing Network Interfaces on Ubuntu"
date:   2023-07-21
categories: network
tags: wireless
toc: true
toc_sticky: true
---

Managing network interfaces is a critical task in networking and system administration. Ubuntu, being one of the most popular Linux distributions, provides several command-line utilities for network interface management. This article will guide you on how to start, stop, or disconnect different interfaces in Ubuntu.

## The `ip` Command

The `ip` command is a powerful tool for network interface management in Ubuntu. It replaces the deprecated `ifconfig` command in modern Linux distributions.

### Start an Interface

To bring up or start a network interface, use the `ip link set up` command:

```bash
sudo ip link set eth0 up
```

Replace `eth0` with the name of your interface.

### Stop an Interface

To bring down or stop a network interface, use the `ip link set down` command:

```bash
sudo ip link set eth0 down
```

Replace `eth0` with the name of your interface.

## NetworkManager and the `nmcli` Command

NetworkManager is the default network management tool for Ubuntu, and `nmcli` is its command-line counterpart. You can use `nmcli` to manage network connections and interfaces.

### Start a Connection

To start a network connection, use the `nmcli connection up` command:

```bash
nmcli connection up "Wired connection 1"
```

Replace `"Wired connection 1"` with the name of your connection.

### Stop a Connection

To stop a network connection, use the `nmcli connection down` command:

```bash
nmcli connection down "Wired connection 1"
```

Replace `"Wired connection 1"` with the name of your connection.

### Disconnect a Device

To disconnect a device from all connections, use the `nmcli device disconnect` command:

```bash
nmcli device disconnect eth0
```

Replace `eth0` with the name of your device.

## The `ifup` and `ifdown` Commands

Although the `ifup` and `ifdown` commands are deprecated in favor of the `ip` command, they are still widely used in Ubuntu. These commands require superuser privileges.

### Start an Interface

To bring up or start an interface, use the `ifup` command:

```bash
sudo ifup eth0
```

Replace `eth0` with the name of your interface.

### Stop an Interface

To bring down or stop an interface, use the `ifdown` command:

```bash
sudo ifdown eth0
```

Replace `eth0` with the name of your interface.

## The `systemctl` Command

You can use the `systemctl` command to start or stop the NetworkManager service itself. This is a more drastic step and will affect all network connections on your system.

### Start NetworkManager

To start the NetworkManager service, use the `systemctl start` command:

```bash
sudo systemctl start NetworkManager
```

### Stop NetworkManager

To stop the NetworkManager service, use the `systemctl stop` command:

```bash
sudo systemctl stop NetworkManager
```

## Conclusion

Knowing how to manage network interfaces is an essential skill for anyone working with Ubuntu or any other Linux distribution. Whether you prefer to use the `ip`, `nmcli`, `ifup`/`ifdown`, or `systemctl` commands, it's important to understand what each command does and how to use it properly. This knowledge will help you maintain a robust and stable network on your Ubuntu system.