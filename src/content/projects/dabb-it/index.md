---
title: dabb.it
description: A web IRC client that wanted to be IRCCloud before IRCCloud existed.
status: archived
stack: [Angular, Node.js, WebSockets, jQuery UI, socket.io]
repo: https://github.com/dabbers/dab.irc.manager
cover: ./cover.jpg
coverAlt: The refreshed dabb.it client, with a channel list on the left and a chat view in the middle.
order: 40
---

dabb.it was my IRC client project. Its intent was to become basically what IRCCloud did, before IRCCloud existed. Unfortunately I was too slow to the draw and never released a product. IRC clients were something I was very interested in making. I loved the IRC protocol for its ease of use. Being able to telnet into a server and still communicate (maybe poorly) with people was an incredible thought.

dabb.it started out using jQuery UI and socket.io. I'm not a designer by any means, so this version looked very rough around the edges. Thankfully a community member helped make a refreshed UI. With the new UI, and armed with WebSockets, I rewrote dabb.it with a new backend.

![dabb.it before the UI refresh: the main chat view.](./v1-chat.jpg)

![dabb.it before the UI refresh: a channel view.](./v1-channel.jpg)

The refreshed dabb.it used Angular for the front end, WebSockets for the communication layer, and Node.js with a WebSocket server package from npm. I wrote the IRC parser myself; it's [on GitHub](https://github.com/dabbers/dab.irc.manager/blob/master/sample.ts). This of course was not scalable, but my concern at the time was releasing something usable and scaling later.

![One of the settings views in the refreshed UI. Angular 1.0 with a Node.js backend.](./settings.jpg)
