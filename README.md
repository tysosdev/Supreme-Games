# Supreme Games family of sites
![GitHub contributors](https://img.shields.io/github/contributors/supremegme/supremegme.github.io)
![Discord](https://img.shields.io/discord/1001151772410265661)
![GitHub](https://img.shields.io/github/license/supremegme/supremegme.github.io)

This repository hosts the Supreme game site.
The games are in the `sg` folder.

To get to the games from the disguise, type `gmes`.
There is no text box or anything, just press the keys.

# Reporting bugs
Before reporting problems related to the games, check the related compatibility sheet!
[HTML5 Games](https://docs.google.com/spreadsheets/d/1yfMyviCs3paWtr6u7gGs9effy5j79D8NcyJ-Eyfz9E0/view), [Flash Games](https://docs.google.com/spreadsheets/d/1glRdZyrPIzDEeiAsGejt8Rq_T9dZH-R_VXo2jhUOfqk/view)

Otherwise, if the problem is not listed or you're reporting about something else, feel free to [open an issue](https://github.com/supremegme/supremegme.github.io/issues/new).

# A note on emulators
Hi, I'm MastrCheef99, providing you most of the emulators on this site. Blue222 works on the technical side of things, like hosting emulator.js straight on our site. I will soon be adding a fork of the demo site so you can play your own games. Maybe it's for games I forgot to add (though you just have to request me to add them) but this is mostly for PS1 and N64 games since the file sizes are mostly too big for github. I don't want to full on host the entirety of those catalogs on google drive, but you can dm me on discord (I lost my numbers so `mastrcheef99`) and I can help you download the files you need or rip your own files (recommended). UPDATE: Uh it's kind of hard and I'm definetly not lazy.
Shit that was a big note

# How to self host
This repository is meant to act simply as a file server and uses other subdomains for proxy and api. The code expects you to host the api at `api.linkToThis` to this and the proxy at `uuvv.linkToThis`. You can change the api link in `/js/main.js` by changing the `api` variable. To change the proxy, simply go to all occurences of `var proxURL =` and change it.
