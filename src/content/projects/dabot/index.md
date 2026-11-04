---
title: DaBot
description: A modular TypeScript chat bot that ran on Telegram, Discord, IRC, Skype, and Messenger.
status: archived
years: "2006 – 2018"
stack: [TypeScript, Node.js, IRC]
repo: https://github.com/dabbers/dab.bot
order: 20
---

DaBot is a TypeScript-based modular chat bot. He ran on various chat endpoints: Telegram, Discord, IRC, Skype, Facebook Messenger, and so on.

His origin story goes back to 2006, when I wanted to build an IRC bot. He began as an mIRC script that grew into a pile of commands. Then I learned how to do TCP networking in PHP and started writing an IRC bot from scratch. That set off a long adventure of learning how to write bots that live longer than a browser session. Security was a big part of it: how do you let users interact with the bot without compromising the machine it runs on?

The most stable predecessor to DaBot is [DeBot, a PHP bot](https://github.com/dabbers/debot). He was my primary bot until I moved my community to Discord, where DeBot could no longer serve any purpose. I rewrote DeBot a few times in a mix of JavaScript and TypeScript before landing on this final version. He's a labor of love for sure.
