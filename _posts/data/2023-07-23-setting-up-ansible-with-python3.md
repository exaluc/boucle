---
layout: post
title:  "Setting Up Ansible with Python3"
date:   2023-07-23
categories: devops
tags: ansible python
toc: true
toc_sticky: true
---

# Setting Up Ansible with Python3

Ansible is an open-source automation tool that can automate various aspects of system administration such as configuration management, application deployment, and task automation. In this article, we will walk through the steps required to set up Ansible with Python3.

## Prerequisites
Before we begin, ensure that you have the following installed on your system:

1. Python 3: Ansible is built with Python and you need it to run Ansible commands. You can check your Python version by running `python3 --version` in your terminal. If you do not have Python installed, follow the Python installation guide for your operating system.

2. A text editor: You'll need this to create and edit Ansible playbooks. You can use any text editor you prefer, such as Vim, Nano, or Sublime Text.

3. A target machine: This is the machine you will be controlling with Ansible. It could be a remote server or a local virtual machine.

## Step 1: Install Ansible
The installation of Ansible varies depending on the operating system. 

For Ubuntu, you can install Ansible using apt:

```bash
sudo apt update
sudo apt install ansible
```

For CentOS or RHEL, you can use yum:

```bash
sudo yum install ansible
```

For MacOS, you can use Homebrew:

```bash
brew install ansible
```

Check the installation by running `ansible --version`. This should display information about the installed Ansible version and its configuration.

## Step 2: Configure Ansible

Once installed, Ansible looks for a configuration file in several locations, in the following order:

- ANSIBLE_CONFIG (environment variable if set)
- ansible.cfg (in the current directory)
- ~/.ansible.cfg (in the home directory)
- /etc/ansible/ansible.cfg

If you want to configure Ansible for all users on the system, it's best to edit `/etc/ansible/ansible.cfg`. However, if you want to configure it just for your user, creating `~/.ansible.cfg` would be a better choice. 

Ansible also uses a hosts file where it looks up the hosts to connect. By default, this file is located at `/etc/ansible/hosts`. You can change this in your configuration file or use the `-i` flag when running Ansible commands.

An example of how to add hosts to the Ansible hosts file:

```ini
[web]
192.168.1.10
192.168.1.11

[db]
192.168.1.20
```

Here, we've added two groups of hosts: `web` and `db`. 

## Step 3: Configure Python Interpreter

Ansible uses Python to execute its modules, and it will automatically detect and use Python2 if it is available. If you want to use Python3, you will need to explicitly configure it.

To configure Ansible to use Python3, you can set the `ansible_python_interpreter` variable to the location of Python3 for a group or a host in your inventory file:

```ini
[web]
192.168.1.10 ansible_python_interpreter=/usr/bin/python3
192.168.1.11 ansible_python_interpreter=/usr/bin/python3

[db]
192.168.1.20 ansible_python_interpreter=/usr/bin/python3
```

You can also set this variable globally in your `ansible.cfg` file:

```ini
[defaults]
interpreter_python = /usr/bin/python3
```

## Step 4: Testing Your Setup

With Ansible installed and configured, you can now try running a simple command on your hosts to see if everything works as expected:

```bash
ansible all -m ping
```

This command will use the `ping` module to test the connection to all hosts in your inventory. If everything is set up correctly, you should see a `pong` reply from each of them.

## Conclusion

Setting up Ansible with Python3 might seem intimidating at first, but once you understand the process, it becomes straightforward. With Ansible, you can efficiently manage your infrastructure and automate repetitive tasks, and with Python3, you benefit from the latest features and improvements of the Python language. 

Remember that understanding and effectively using Ansible requires practice. Start by writing simple playbooks, and gradually incorporate more complex configurations as you become more comfortable with the tool.

Happy automating!
