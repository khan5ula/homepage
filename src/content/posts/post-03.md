---
title: 'Fixing disable touchpad while typing on laptop with Linux'
url: 'fixing-disable-touchpad-while-typing-on-linux-laptop'
description: 'If disable while typing does not work on your laptop with Linux, this might help you. Read the whole thing in my blog.'
published: true
pubDate: 13/11/2023
author: 'Kristian Hannula'
tags: ['linux']
---

I have stumbled upon this problem every time I've installed a new Linux distribution on my Lenovo laptop. The touchpad itself works fine, but annoyingly the `disable while typing` functionality doesn't. This causes the cursor to constantly move about when typing on the keyboard.

Luckily, the fix is easy. It requires `libinput` library, which should, to my understanding, come preinstalled in most modern distros. If typing `libinput` to the terminal provides some sensible output, it's installed.

## The fix

First, type `sudo libinput list-devices` and look for the details of your keyboard.

```zsh
Device:           ITE Tech. Inc. ITE Device(8296) Keyboard
Kernel:           /dev/input/event7
Group:            8
Seat:             seat0, default
Capabilities:     keyboard pointer
Tap-to-click:     n/a
Tap-and-drag:     n/a
Tap drag lock:    n/a
Left-handed:      n/a
Nat.scrolling:    disabled
Middle emulation: n/a
Calibration:      n/a
Scroll methods:   none
Click methods:    none
Disable-w-typing: n/a
Accel profiles:   n/a
Rotation:         n/a
```

Then, snatch the Kernel part of the output and check whether a query:

```zsh
sudo libinput quirks list /dev/input/event7
```

... provides any output. The `/dev/input/event7` part is from the Kernel part.

Nothing should come up.

Next, create a file for the `libinput quirks` called `/etc/libinput/local-overrides.quirks`, with the content of:

```zsh
[Serial Keyboards]
MatchUdevType=keyboard
MatchName=ITE Tech. Inc. ITE Device(8296) Keyboard
AttrKeyboardIntegration=internal
```

Where the MatchName property is from the earlier `libinput list-devices` output.

Now, after a logout & login, `disable touchpad while typing` should work. Now, a quirks query should provide output:

```zsh
sudo libinput quirks list /dev/input/event7
AttrKeyboardIntegration=internal
```
