---
layout: post
title:  "Package Management in CentOS"
date:   2023-07-12
categories: rhel
tags: yum
toc: true
toc_sticky: true
---

YUM (Yellowdog Updater Modified) is a powerful package management tool in CentOS and other RPM-based Linux distributions. It's a reliable resource for installing, updating, and removing packages, along with their dependencies. Beyond the basics, YUM also supports package groups, allows package caching, and has a host of other features. This guide will help you navigate the advanced side of YUM and streamline your package management tasks.

## YUM Installation and Update

Let's start with a brief review of installing and updating packages. To install a package:

```bash
yum install packageName
```

To update a package:

```bash
yum update packageName
```

To update all packages:

```bash
yum update
```

While these commands are basic, they are the cornerstone of any package management tasks you'll be performing.

## Group Management

YUM supports package groups, which are groups of packages that serve a similar purpose. For example, "Development Tools" is a package group.

To list all available groups:

```bash
yum group list
```

To install a group:

```bash
yum group install 'groupName'
```

This feature is incredibly useful for installing a suite of packages that serve a common purpose.

## Search Packages

YUM allows you to search for packages using keywords related to the package. This can be particularly useful when you're unsure of a package's exact name:

```bash
yum search keyword
```

The search results will display a list of packages that contain the keyword in their name or summary.

## List Packages

YUM provides commands to list all available, installed, or specific packages:

```bash
yum list all
yum list installed
yum list packageName
```

It is a great way to quickly view what's available or installed on your system.

## Package Info

The `info` command provides detailed information about a package:

```bash
yum info packageName
```

This can be particularly useful when evaluating a package for potential installation.

## Remove Packages

Removing a package is as simple as:

```bash
yum remove packageName
```

YUM will take care of resolving and removing dependencies as well.

## Clean YUM Cache

YUM stores package data from the repositories to which your system is connected. Over time, this cache may become cluttered with outdated package data. To clean all cached files from any enabled repository, use:

```bash
yum clean all
```

This command is helpful for reclaiming disk space and ensuring up-to-date package data.

## YUM History

One of the powerful features of YUM is its ability to maintain a detailed history of transactions. To view this history:

```bash
yum history
```

You can use the history command to undo or redo certain transactions:

```bash
yum history undo transactionID
yum history redo transactionID
```

This is an incredibly powerful feature that allows for detailed troubleshooting and system recovery.

## Managing Repositories

YUM allows for the management of repositories from which it retrieves package data. To list all repositories:

```bash
yum repolist
```

You can enable or disable repositories during package installations:

```bash
yum --enablerepo=repositoryName install packageName
yum --disablerepo=repositoryName install packageName
```

This allows for granular control over the source of your packages.

## Conclusion

Mastering YUM is an important part of managing CentOS and other RPM-based systems. While the basic commands are powerful and useful, delving into the more advanced features of YUM can vastly increase your efficiency and effectiveness as a system administrator.

Remember, practice makes perfect. Use these commands, play around with them, and see what works best for your workflow. In time, you'll be navigating YUM like a pro. Happy package managing!