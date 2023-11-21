---
title: 'Getting the source directory path in C'
url: 'get-source-directory-path-in-c'
description: 'Turned out I had never really thought about how to find the source code directory with a running C application. Here's how I did it.'
published: true
pubDate: 21/11/2023
author: 'Kristian Hannula'
tags: ['c']
---

Turned out I had never really thought about how to find the source code directory with a running C application. If a file is created without a path:

```c
fptr = fopen(filename, "w");
```

... the file is just created to wherever the user is running the app from.

In my use case, I wanted to place the file to the same directory with the source code. More precisely, I wanted to go one directory up from `/src`.

I ended up getting the path to the executable with `"/proc/self/exe"`, and then stripping the string from the end until I had a path to the source of the app directory:

```C
int build_filepath(char* executablepath, int length, char* filepath) {
  int result = 0;
  int iterator = 0;

  if (readlink("/proc/self/exe", executablepath, length) == -1) {
    perror("Error with the directory path");
    result = 1;
  }

  iterator = get_index_of_src(executablepath);

  if (iterator == 1) {
    perror("Malformatted executable path");
    result = 1;
  }

  if (result != 1) {
    executablepath[iterator] = '\0';
    snprintf(filepath, length + 200, "%s/FILENAME", executablepath);
  }

  return result;
}

int get_index_of_src(char* path) {
  int indexOfSrc = 1;
  for (int i = strlen(path); i > 0; i--) {
    if (path[i] == 'c') {
      if (path[i - 1] == 'r') {
        if (path[i - 2] == 's') {
          indexOfSrc = i - 2;
          break;
        }
      }
    }
  }
  return indexOfSrc;
}

```
