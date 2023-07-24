---
layout: post
title:  "Advanced File Manipulation: Sed and Awk"
date:   2023-07-12
categories: rhel
tags: linux bash
toc: true
toc_sticky: true
---

Shell scripting in Unix-like operating systems is not complete without the mention of stream editors like `sed` and text-processing languages like `awk`. These powerful utilities offer a whole new level of data and file manipulation beyond simple read, write, and move commands.

## Sed (Stream Editor)

`sed` is a stream editor used for filtering and transforming text. It works by making non-interactive changes to input data using pre-written scripts or commands. Let's take a look at some essential `sed` operations.

```bash
# Echo a string, but substitute 'world' for 'there'
echo "Hello world" | sed 's/world/there/'

# Output: "Hello there"
```

This example uses the `s/old/new/` `sed` command to substitute "world" with "there".

You can also modify files in place with `-i` option.

```bash
# Replace 'old-word' with 'new-word' in example.txt
sed -i 's/old-word/new-word/g' example.txt
```

The 'g' flag after the substitution command tells `sed` to make the change globally on each line, not just for the first match.

## Awk

`awk` is a powerful text-processing language named after its authors: Aho, Weinberger, and Kernighan. `awk` views a text file as records and fields, which makes it ideal for tasks involving structured data. 

Here's a basic usage of `awk`:

```bash
# Print the first field in a space-separated file
awk '{print $1}' file.txt
```

This command prints the first field (column) of each record (row) in `file.txt`.

But `awk` really shines when you use it to process data. For example, let's assume we have a file called `employees.txt` with the structure: `Name Age Salary`.

```bash
# Print the name and salary of employees who are older than 50
awk '$2 > 50 {print $1, $3}' employees.txt
```

This command would output the name and salary of all employees over the age of 50. As you can see, `awk` commands can almost read like English, making them somewhat intuitive.

For more complex operations, you can put `awk` commands in a file and run that file, which can be very useful for scripting.

```bash
# Contents of command.awk
BEGIN {print "File Contents:"}
{print $0}
END {print "File EOF"}

# Run command.awk on file.txt
awk -f command.awk file.txt
```

This `awk` script prints a header, the contents of `file.txt`, and a footer.

With `awk` and `sed`, you have the power to manipulate files and data in complex ways. But keep in mind that with great power comes great responsibility. These commands are incredibly flexible and powerful, but they can also be hard to master. The best way to learn them is through practice, so don't be afraid to experiment with different commands and scripts. Happy scripting!
