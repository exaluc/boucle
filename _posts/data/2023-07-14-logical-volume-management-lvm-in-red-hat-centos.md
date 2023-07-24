---
layout: post
title:  "Logical Volume Management (LVM) in Red Hat CentOS"
date:   2023-07-12
categories: rhel
tags: lvm
toc: true
toc_sticky: true
---

Logical Volume Management (LVM) is a device mapper target that provides logical volume management for the Linux kernel. It is a powerful and flexible system that allows you to manage your disk space more efficiently.

In this article, we will discuss how to create logical volumes, extend and reduce their sizes, remove them, and check detailed information about the various partitions and volume groups.

## Creating a Logical Volume

The first step to creating a Logical Volume (LV) is to create a Physical Volume (PV) and then a Volume Group (VG).

1. Create a Physical Volume:

```bash
sudo pvcreate /dev/sdb1
```

2. Create a Volume Group:

```bash
sudo vgcreate myvg /dev/sdb1
```

3. Create a Logical Volume:

```bash
sudo lvcreate -L 10G -n mylv myvg
```

The `-L` option specifies the size of the LV, and `-n` specifies the name. The `myvg` at the end is the name of the VG that the LV belongs to.

## Extending a Logical Volume

If you find that you need more space on your LV, you can extend and `--resizefs` it with the following command:

```bash
sudo lvextend -r -L+5G /dev/myvg/mylv
```

This command increases the size of the logical volume by 5GB.

Old technic to resize the filesystem after extending the logical volume:

```bash
sudo resize2fs /dev/myvg/mylv
```

## Reducing a Logical Volume

Before reducing the size of a logical volume, we need to reduce the filesystem first:

```bash
sudo resize2fs /dev/myvg/mylv 10G
```

Then reduce the size of the LV:

```bash
sudo lvreduce -L 10G /dev/myvg/mylv
```

This reduces the size of the logical volume to 10GB. Be cautious with this operation as it can lead to data loss if not handled properly.

## Removing a Logical Volume

You can remove a logical volume with the `lvremove` command:

```bash
sudo lvremove /dev/myvg/mylv
```

You'll be asked to confirm the operation because it will destroy all data in the logical volume.

## Checking Information about Partitions and Volume Groups

The `pvs`, `vgs`, and `lvs` commands display information about physical volumes, volume groups, and logical volumes, respectively.

```bash
sudo pvs
sudo vgs
sudo lvs
```

The `pvdisplay`, `vgdisplay`, and `lvdisplay` commands provide more detailed information:

```bash
sudo pvdisplay
sudo vgdisplay
sudo lvdisplay
```

These commands are essential for managing and understanding your LVM setup.

Logical Volume Management is a powerful tool in Linux. It provides a higher-level view of the disk storage on a computer system than the traditional view of disks and partitions. This flexibility is beneficial for system administrators who need to manage storage more effectively. It's recommended to practice these commands and concepts in a safe environment to understand their potential fully.