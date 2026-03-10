---
layout: post
title: "Zeitgeist — Which Sports Teams Are People Actually Paying Attention To?"
date: 2026-03-10
description: "I built a dashboard that tracks digital attention across all 92 NBA, MLB, and NHL teams using six data sources. Here's what it reveals about how we follow sports."
categories: [sports, data, streaming]
author: Narendra Nag
---
I've been thinking about attention a lot lately.

Not the corporate buzzword kind. The real kind — the kind where someone picks up their phone, types a team name into Google, clicks on a Wikipedia page, or doomscrolls through r/nba at 1am. That kind of attention.

If you work in sports media, you already know that measuring this stuff is weirdly hard. TV ratings are delayed and incomplete. Social media follower counts are vanity metrics. And gut feeling? Well, my gut has been wrong about a lot of things.

So I built something. It's called [Zeitgeist](https://major-league-interest-map.streamlit.app), and it tracks digital attention across all 92 teams in the NBA, MLB, and NHL. Updated every six hours. Open source. Free.

## The Problem With One Number

Here's what I've learned from years in sports media: no single metric tells the whole story. A team can be trending on Google because of a trade rumour while their subreddit is dead quiet. Wikipedia traffic can spike from a controversial call that never makes the highlight reel. News coverage systematically favours big-market teams regardless of what's actually happening on the field.

Any one of these signals is noisy. But combine six of them? Now you're getting somewhere.

Zeitgeist pulls from **Google Trends** (what people are searching), **Wikipedia pageviews** (what people are reading up on), **ESPN** (what's actually happening on the field), **Reddit** (what fans are talking about), **Google News** (what the media is covering), and yes — **Victory+** (what people can watch for free).

Each metric captures a different flavour of attention. Search is intent. Wikipedia is curiosity. Reddit is passion. News is narrative. ESPN is reality. And Victory+ is access.

## Why Victory+ Matters Here

I'm going to be upfront — I work at [Victory+](https://victoryplus.com). So I'm biased. But here's the thing: when a game is freely available to stream, something interesting happens to the attention data around that team. It goes up. Not always dramatically, but consistently.

Zeitgeist flags which upcoming games are available on Victory+ right in the Team Deep Dive page. It's a small feature, but it connects two things I think about constantly: how easy it is to watch a game, and how much people end up caring about the team playing it.

Access drives fandom. We've seen this over and over.

## What You Can Actually Do With It

Zeitgeist isn't just a leaderboard. It's built around four different ways of looking at the data.

**League Overview** ranks all 92 teams by a composite score — but here's the twist: YOU set the weights. Think on-field performance is everything? Crank up the ESPN slider. Care more about cultural buzz? Weight Reddit and News higher. The rankings recalculate as you drag the sliders. It's the kind of thing you can lose an hour to.

**Team Deep Dive** is where it gets fun. Pick a team and see every metric overlaid on a single chart, with win/loss markers from ESPN layered on top. You can literally watch how a three-game losing streak ripples through search interest, Wikipedia traffic, and Reddit engagement. Sometimes the effect is immediate. Sometimes it takes days. The patterns are fascinating.

**Head to Head** lets you compare up to five teams side by side. It's useful for rivalry analysis, market comparisons, or settling arguments. (The Lakers-Celtics comparison is always a good time.)

**Movers and Alerts** is where the anomalies live. Using a rolling 30-day average, it flags any data point that's more than two standard deviations from normal. These are the moments worth paying attention to — a mid-market team suddenly dominating the conversation, or a contender whose buzz is inexplicably cratering.

## The Score Is Yours To Define

The Interest Score formula is intentionally transparent. Five metrics, each normalised to a 0-100 scale, combined as a weighted average. The default weights are balanced — 25% each for Trends and Wikipedia, 20% for ESPN, 15% each for Reddit and News. But there's no "correct" weighting.

If you're in advertising, search and news probably matter most. If you're in fan engagement, Reddit is your signal. If you're trying to predict which teams will drive streaming numbers... well, you might want to look at which teams have games on Victory+.

The point is: the same data tells different stories depending on what question you're asking.

## Always On

The data pipeline runs every six hours automatically. No manual updates, no stale dashboards. A colour-coded indicator on the home page tells you how fresh the data is — green for current, yellow for aging, red for stale.

Ninety-two teams. Three leagues. Six data sources. Updated four times a day.

**Explore it at [major-league-interest-map.streamlit.app](https://major-league-interest-map.streamlit.app)**

The source code is on [GitHub](https://github.com/narendranag/interest-map) if you want to peek under the hood or contribute.

The zeitgeist is always shifting. Now you can watch it happen in real time.
