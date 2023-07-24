---
layout: post
title:  "Basic Resource Monitoring in Linux"
date:   2023-07-12
categories: rhel
tags: linux monitoring
toc: true
toc_sticky: true
---

Linux-based systems are often used in environments that require continuous monitoring. Server administrators, DevOps engineers, and even developers need to monitor system resources such as CPU usage, memory consumption, and disk I/O to ensure optimal performance and stability. The key to effective monitoring is understanding the tools available in the Linux ecosystem. Let's dive into some of these tools: `top`, `htop`, `vmstat`, `iostat`, and `netstat`.

## top

The `top` command is one of the most commonly used commands for monitoring system resources. It provides a real-time, dynamic view of the processes running on a system.

```bash
top
```

The output of the `top` command includes system summary information as well as a list of tasks currently being managed by the Linux kernel. The summary information includes the total uptime, the number of tasks, CPU usage, and memory usage.

The real power of `top` lies in its interactivity. You can send signals to processes (like killing a process) directly from `top` by pressing 'k' and entering the process ID and signal to send.

## htop

While `top` is incredibly useful, it has some limitations that have been addressed by a more robust tool called `htop`.

To install htop, you can use the package manager for your system, like `yum` for CentOS or `apt` for Ubuntu.

```bash
sudo yum install htop
# or
sudo apt install htop
```

Like `top`, `htop` shows a list of processes running on the system, but it also includes a graphical representation of your CPU usage, memory usage, and swap usage right at the top.

```bash
htop
```

`htop` allows you to scroll horizontally to view additional information about each process, and you can scroll vertically to view different processes. It's also a lot more colorful, which can make it easier to parse at a glance.

## vmstat

`vmstat`, or virtual memory statistics, is a tool for monitoring system resources related to memory, including virtual memory, disk I/O activity, and system activity.

```bash
vmstat 5
```

This command gives you a new summary line every five seconds. These lines include information on processes, memory, paging, block I/O, traps, and cpu activity.

## iostat

The `iostat` command stands for input/output statistics and is used for monitoring system input/output device loading by observing the time the devices are active in relation to their average transfer rates.

```bash
iostat
```

`iostat` produces reports that can be used to change system configurations to better balance the input/output load between physical disks.

## netstat

`netstat`, or network statistics, is a command-line tool that displays network connections (both incoming and outgoing), routing tables, and a number of network interface and network protocol statistics.

```bash
netstat
```

It is used for finding problems in the network and to determine the amount of traffic on the network as a performance measurement.

## Conclusion

Effective resource monitoring in Linux is an essential skill for many IT professions. By understanding and using tools like `top`, `htop`, `vmstat`, `iostat`, and `netstat`, you can ensure that your Linux systems are running smoothly and efficiently.

Remember, the key to effective system monitoring is regular observation and understanding the normal operational baseline of your system. This way, you can detect any unusual activity and investigate it further using the appropriate tools.

These tools each have a multitude of options and variations in how they report data. Don't be afraid to dive into their respective man pages (`man top`, `man htop`, etc.) to explore more about what they offer.

Happy monitoring!