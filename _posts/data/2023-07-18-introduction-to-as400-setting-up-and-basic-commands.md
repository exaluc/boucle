---
layout: post
title:  "Introduction to AS400: Setting Up and Basic Commands"
date: 2023-07-18
categories: AS400
tags: terminal
toc: true
toc_sticky: true
---

The AS400, now known as IBM i, is a mid-range computer system developed by IBM. It is known for its reliability, security, and scalability, making it a popular choice for businesses that require a robust and stable platform. In this article, we will explore how to set up an AS400 environment and learn some basic commands to get you started.

## Setting up AS400

Setting up an AS400 environment involves several steps. Here's a general outline of the process:

1. **Hardware**: Acquire an AS400 server or an IBM i-compatible machine. Ensure that it meets the necessary hardware requirements for your workload.

2. **Operating System**: Install the IBM i operating system on the AS400 machine. This can be done using the IBM i installation media or by using virtualization software such as IBM PowerVM.

3. **Networking**: Configure the network settings for your AS400. This includes assigning IP addresses, setting up DNS, and configuring network interfaces.

4. **Security**: Establish proper security measures for your AS400 environment. This may involve setting up user accounts, configuring access controls, and enabling security features such as SSL/TLS.

5. **Software Installation**: Install additional software and applications on your AS400 system as per your requirements. IBM i supports a wide range of applications, including ERP systems, databases, and development tools.

Once your AS400 environment is set up, you can start using it by accessing the command line interface.

## Basic AS400 Commands

The command line interface in AS400, commonly referred to as the "green screen," provides a powerful way to interact with the system. Here are some basic commands to help you get started:

1. **WRKSYSSTS**: This command displays the system status, including CPU usage, memory utilization, and active jobs. It provides a snapshot of the overall system health.

```
WRKSYSSTS
```

2. **WRKACTJOB**: Use this command to view the active jobs on the system. It displays information such as job name, user, CPU usage, and status.

```
WRKACTJOB
```

3. **DSPJOBLOG**: This command allows you to view the job log for a specific job or the entire system. The job log contains information about job-related events, messages, and errors.

```
DSPJOBLOG JOB(jobname)
```

4. **WRKOBJ**: Use this command to work with objects on the system, such as libraries, files, or programs. It provides options to create, delete, or modify objects.

```
WRKOBJ OBJ(libraryname/objectname) OBJTYPE(*ALL)
```

5. **CRTLIB**: This command creates a new library on the system. Libraries are used to organize objects and provide a logical grouping.

```
CRTLIB LIB(libraryname)
```

6. **CHGLIB**: Use this command to modify the attributes of an existing library, such as the text description or the library's authority.

```
CHGLIB LIB(libraryname) TEXT('New description')
```

7. **DSPLIB**: This command displays information about a specific library, including its objects, size, and attributes.

```
DSPLIB LIB(libraryname)
```

8. **WRKUSRJOB**: This command displays information about user jobs. It provides details such as job name, user, job status, CPU usage, and memory utilization.

```
WRKUSRJOB USER(username)
```

9. **WRKSPLF**: Use this command to work with spooled files. Spooled files are used to store printer output or other generated reports. This command allows you to view, hold, release, or delete spooled files.

```
WRKSPLF
```

10. **WRKJOBSCDE**: This command displays information about jobs scheduled to run at specific times. It provides details such as job name, schedule time, job status, and command to be executed.

```
WRKJOBSCDE
```

11. **GO CMD**: This command allows you to navigate to a specific command on the system. It opens a menu that lists different commands, and you can choose the desired command to execute.

```
GO CMD
```

13. **CHGJOB**: Use this command to change the attributes of a specific job, such as the job priority, job queue, or time slice.

```
CHGJOB JOB(jobname) PRTTXT('New priority')
```

14. **CPYTOIMPF**: This command copies data from a physical file to an IFS (Integrated File System) file. It is useful for exporting data in a format that can be easily accessed by other applications.

```
CPYTOIMPF FROMFILE(libraryname/filename) TOSTMF('/path/to/output.csv') MBROPT(*REPLACE) STMFCODPAG(*PCASCII)
```

15. **DSPF**: This command displays the contents of a physical file. It allows you to view and navigate through the records of the file.

```
DSPF FILE(libraryname/filename)
```

16. **WRKCFGSTS**: Use this command to display the configuration status of various system components, such as network interfaces, disk units, or tape drives.

```
WRKCFGSTS CFGTYPE(*DEV) CFGD(DEVICENAME)
```

17. **SAVSYS**: This command initiates a system save, which creates a backup of the entire system. It is used for disaster recovery and system migration purposes.

```
SAVSYS DEV(TAP01) ENDOPT(*LEAVE)
```

18. **DSPMSGD**: This command displays detailed information about a specific message ID. It provides the message text, severity level, and possible causes or actions.

```
DSPMSGD MSGID(messageid)
```

These are just a few examples of the basic commands available in AS400. The system offers a wide range of commands to manage objects, jobs, printers, and more. You can explore the AS400 documentation for a comprehensive list of commands and their usages.

## Conclusion

AS400, now known as IBM i, is a powerful and reliable computer system that has been widely adopted by businesses. In this article, we discussed the process of setting up an AS400 environment and explored some basic commands to get you started. As you become more familiar with the platform, you'll discover its rich features and capabilities, allowing you to leverage its strength in managing and running critical business applications.