---
layout: post
title:  "Practical Guide to Ansible: File and Directory Operations"
date:   2023-07-23
categories: devops
tags: ansible python
toc: true
toc_sticky: true
---

# Practical Guide to Ansible: File and Directory Operations

Ansible is an open-source IT automation tool that simplifies complex configuration, management, and application deployment. One area where Ansible particularly shines is file and directory operations. In this guide, we'll explore how to create, delete, and manage files and directories using Ansible.

## Prerequisites
Before proceeding, ensure you have installed Ansible and configured it with Python3 as per the guide provided earlier.

## Ansible Playbook Basics

Ansible playbooks are YAML files where you define your automation tasks. They provide a sequence of operations to be executed on a managed host. A playbook can have one or more 'plays', and each play can have one or more 'tasks'.

Let's look at a basic playbook structure:

```yaml
---
- hosts: all
  tasks:
    - name: Task 1
      ...
```

Here, `hosts: all` indicates that the tasks in this playbook will be run on all hosts in your inventory. Each task is represented by a `- name:` line followed by the actual command(s).

Now, let's delve into file and directory operations.

## Creating Files with Ansible

Ansible provides the `copy` module for creating files. You can use it to create a new file on your host machines. Here's an example:

```yaml
---
- hosts: all
  tasks:
    - name: Create a file
      copy:
        content: "Hello, World!"
        dest: /tmp/hello.txt
```

This playbook creates a file at `/tmp/hello.txt` with the content `Hello, World!`. The `copy` module creates a new file and copies the content you specify to that file.

## Deleting Files with Ansible

You can use the `file` module in Ansible to remove files. Here's an example:

```yaml
---
- hosts: all
  tasks:
    - name: Delete a file
      file:
        path: /tmp/hello.txt
        state: absent
```

This playbook removes the file at `/tmp/hello.txt`. The `state: absent` ensures the file does not exist. If it does, Ansible will delete it.

## Creating Directories with Ansible

To create directories, we again use the `file` module, but with `state: directory`. Here's an example:

```yaml
---
- hosts: all
  tasks:
    - name: Create a directory
      file:
        path: /tmp/my_folder
        state: directory
```

This playbook ensures a directory exists at `/tmp/my_folder`. If it does not, Ansible will create it.

## Deleting Directories with Ansible

Deleting directories is the same as deleting files. You just specify the directory path:

```yaml
---
- hosts: all
  tasks:
    - name: Delete a directory
      file:
        path: /tmp/my_folder
        state: absent
```

This playbook will remove the directory at `/tmp/my_folder`. If the directory exists, Ansible will delete it.

## Changing File Permissions with Ansible

You can change file or directory permissions using the `mode` parameter:

```yaml
---
- hosts: all
  tasks:
    - name: Change file permissions
      file:
        path: /tmp/hello.txt
        mode: '0644'
```

This playbook will change the permissions of `/tmp/hello.txt` to `0644`.

## Conclusion

Ansible provides simple and effective mechanisms to manage files and directories on remote hosts. Through its `file` and `copy` modules, you can control the state, content, and permissions of your files and directories.

While we've covered the basics here, remember that Ansible is a powerful tool with many more capabilities. As you continue exploring Ansible, you'll discover ways to manage complex configurations and automate repetitive tasks, making your IT management tasks more efficient and reliable.

Happy Ansible-ing!