---
layout: post
title:  "Guide to SSH, SSH-Add, and SCP"
date:   2023-07-12
categories: linux
tags: ssh
toc: true
toc_sticky: true
---

Secure Shell (SSH) is a protocol that provides a secure method to access a remote system. SSH also refers to the utilities suite that implements the protocol. Secure Copy (SCP) is a means of securely transferring computer files between a local and a remote host or between two remote hosts. SSH-Add adds private key identities to the authentication agent.

## SSH: Secure Shell

SSH provides a secure channel over an unsecured network in a client-server architecture, connecting an SSH client application with an SSH server. It can be used for remote command-line login and remote command execution.

**Login to a remote server:**

```bash
ssh user@loop.brain.fr
```

**Execute a command on a remote server:**

```bash
ssh user@loop.brain.fr 'command'
```

SSH connections are encrypted and secure. They provide strong password authentication and even public key authentication while maintaining connection privacy and integrity.

## SSH-Keygen & SSH-Add: Authentication Keys and Agent

SSH supports password-based authentication, but it's more common and safer to use key pairs. SSH-Keygen is a tool that helps us create these pairs.

**Generate a new SSH key pair:**

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@loop.brain.fr"
```

Once you generate your key pair, you can use SSH-Add to manage your keys. SSH-Add adds RSA or DSA identities to the authentication agent (ssh-agent).

**Add the default identity:**

```bash
ssh-add
```

**Add a specific identity:**

```bash
ssh-add ~/.ssh/id_rsa_custom
```

## SCP: Secure Copy

SCP allows files to be copied to, from, or between different hosts. It uses SSH for data transfer, and provides the same security and uses the same authentication as SSH.

**Copy a local file to a remote server:**

```bash
scp localfile user@loop.brain.fr:/remote/directory/
```

**Copy a file from a remote server to local machine:**

```bash
scp user@loop.brain.fr:/remote/file /local/directory/
```

**Copy a directory from a remote server to local machine:**

```bash
scp -r user@loop.brain.fr:/remote/directory /local/directory/
```

**Copy a file between two remote servers from the local machine:**

```bash
scp user@loop.brain.fr:/remote/file user@otherhost:/remote/directory/
```

SSH, SSH-Add, and SCP are very powerful tools when dealing with remote servers. Their wide variety of options and parameters cover many use cases, and their secure nature makes them a default choice for system administrators all over the world. Keep in mind that this guide only scratches the surface of what is possible with these tools. Be sure to check their man pages (`man ssh`, `man ssh-add`, `man scp`) for a more in-depth look at their capabilities.