---
layout: post
title:  "Bash & CSV: A Compact Guide"
date:   2023-07-12
categories: linux
tags: linux bash csv
toc: true
toc_sticky: true
---

The Comma-Separated Values (CSV) format is a staple in the realm of data manipulation and storage. Various languages like Python or R are used for data manipulation, but Bash also offers a compelling, lightweight solution for CSV file interaction. Let's explore how to read and write CSV files in Bash.

## Reading CSV Files in Bash

Reading a CSV file in Bash is simple. You can use the `cat` command coupled with a while-read loop. Below is an example:

```bash
while IFS=',' read -r col1 col2 col3
do
    echo "Column 1: $col1 Column 2: $col2 Column 3: $col3"
done < example.csv
```

In this script, we set the Internal Field Separator (`IFS`) to a comma for the read command, which enables us to read each line of the CSV as separate variables. Each line is split at the commas, allowing us to manipulate each column's data independently.

## Writing CSV Files in Bash

Writing to a CSV file involves redirecting output to a file. The key detail here is formatting your output to be CSV-compatible. See this example:

```bash
for i in {1..5}
do
  echo "$i,$((i*2)),$((i*3))" >> output.csv
done
```

In the above script, we generate a CSV file where each line has three columns: `i`, `2i`, and `3i`.

## Advanced CSV Manipulation with `awk` and `sed`

For complex manipulations, `awk` and `sed` come in handy. Suppose you need to calculate the sum of numbers in the second column of a CSV file. Here's how to do it using `awk`:

```bash
awk -F',' '{sum+=$2} END {print sum}' example.csv
```

Here, `-F','` sets the field separator to a comma. `'{sum+=$2}'` adds the value of the second field of each line to the `sum` variable. `'END {print sum}'` prints the sum after processing all lines.

## In Summary

Bash is a powerful tool for basic CSV manipulations, due to its effective text manipulation capabilities and wide usage in the Unix world. However, for more complex manipulations and data analysis tasks, it's recommended to use a dedicated data processing language such as Python, R, or SQL.