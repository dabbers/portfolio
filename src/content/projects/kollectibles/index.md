---
title: KOllectibles
description: A Pokémon collection tracker. Local-first, offline capable, syncs when you want to share.
status: building
years: "2025 –"
stack: [Expo (React Native), SQLite, PowerSync]
url: https://kollectibles.app
cover: ./cover.png
coverAlt: A KOllectibles set view for Prismatic Evolutions, showing owned Exeggcute variants including the reverse holofoil.
order: 40
---

I got way too deep into the Pokémon card game. Buying a ton of packs to open cards to try and complete a set. It's a lot of fun, but also quite expensive. I turned to selling Pokémon cards with my brother-in-law.

We started out streaming on Twitch and moved over to Whatnot. We've got a small site up to say more about our community at [kopulls.com](https://kopulls.com). The thing about live-streaming card sales is that you can only sell while you're online. With lives and full-time jobs, we don't have that kind of time.

Enter KOllectibles, a TCG collection tracking app by KO Pulls. The goal is to let people collect and share their collections with others. There are plenty of other apps out there, and they all have one issue or another. My goal is to make the app I would want to use, and hope others want to use it too.

The app is built on Expo (React Native) with SQLite on the device. It's fully offline capable and local-first; changes sync through PowerSync. You don't need an account to start tracking, only to share your collection.

KOllectibles and [KOmpare](/projects/kompare) started as separate apps and now run on the same PowerSync backend. That refactor is what let the KOmpare card scanner work inside KOllectibles too.
