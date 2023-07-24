---
layout: post
title:  "Handy Commands for Red Hat CentOS"
date:   2023-07-12
categories: linux
tags: shells bash zsh ksh rhel centos
toc: true
toc_sticky: true
---

When working with Red Hat CentOS, it's essential to become familiar with the terminal and the wide range of commands that you can use to navigate, modify, and manage your Linux system. In this article, we're going to explore some of the most useful commands that will aid your CentOS journey.

## 1. Basic File and Directory Commands

### `ls` - List Directory Contents
This command is used to list the contents of a directory.

```bash
ls
```
<br>

### `cd` - Change Directory
To navigate through the Linux files and directories, use the `cd` command.

```bash
cd /path/to/directory
```
<br>

### `pwd` - Print Working Directory
If you want to know the absolute path of your current directory, `pwd` comes in handy.

```bash
pwd
```
<br>

### `touch` - Create a New File
Creating a new, empty file is as easy as typing `touch` followed by the file name.

```bash
touch myfile.txt
```
<br>

### `rm` - Remove a File or Directory
You can remove a file or directory using `rm` command. Use `-r` option for directories.

```bash
rm myfile.txt
rm -r mydirectory
```

## 2. System Information Commands

### `uname` - Print System Information
`uname` displays the important information about your system. The `-a` option prints all system information.

```bash
uname -a
```
<br>

### `top` - Monitor System, Process, and Users
`top` gives you real-time information about your system, the current processes, and users.

```bash
top
```
<br>

### `df` - Disk Space Usage of File Systems
`df` displays the amount of disk space used and available on Linux file systems.

```bash
df -h
```
<br>

### `free` - Memory Usage
This command gives you a summary of the memory usage in your system.

```bash
free -m
```


## 3. Package Management with YUM

### `yum install` - Install a Package
Use `yum install` followed by the package name to install a new package.

```bash
sudo yum install packageName
```
<br>

### `yum remove` - Remove a Package
To remove an installed package, use `yum remove` followed by the package name.

```bash
sudo yum remove packageName
```
<br>

### `yum update` - Update System Packages
To update all the system packages to their latest versions, just type `yum update`.

```bash
sudo yum update
```
<br>

### `yum search` - Search for a Package
If you need to find a package in the repositories, use `yum search`.

```bash
yum search packageName
```
<br>

## 4. Network-related Commands

### `ping` - Send ICMP ECHO_REQUEST to Network Hosts
You can check your connectivity to a network host using `ping`.

```bash
ping host
```
<br>

### `ifconfig` or `ip` - Display or Configure a Network Interface
Use `ifconfig` or `ip` to configure, control, and query TCP/IP network interface parameters.

```bash
ifconfig
ip addr
```
<br>

### `netstat` - Network Statistics
`netstat` provides a variety of information about network connections.

```bash
netstat
```
<br>


### `ssh` - OpenSSH Remote Login Client
`ssh` command is used for logging into a remote machine and for executing commands on a remote machine.

```bash
ssh username@hostname
```
<br>


The above commands are just the tip of the iceberg when it comes to managing and navigating a CentOS system, but they're a good starting point for both beginners and experienced users alike. Don't hesitate to explore the `man` pages for any command you're interested in, as it provides in-depth information about usage, options, and examples.
