---
layout: post
title: "Zeitgeist — Which Sports Teams Are People Actually Paying Attention To?"
date: 2026-03-10
description: "I built a dashboard that tracks digital attention across all 92 NBA, MLB, and NHL teams using seven data sources — from Wikipedia and ESPN to ticket demand and betting odds. Here's what it reveals about how we follow sports."
categories: [sports, data, streaming]
author: Narendra Nag
---
I've been thinking about attention a lot lately.

Not the corporate buzzword kind. The real kind — the kind where someone picks up their phone, opens a Wikipedia page, checks the box score, looks up ticket prices, or scrolls through YouTube highlights at 1am. That kind of attention.

If you work in sports media, you already know that measuring this stuff is weirdly hard. TV ratings are delayed and incomplete. Social media follower counts are vanity metrics. And gut feeling? Well, my gut has been wrong about a lot of things.

So I built something. It's called [Zeitgeist](https://sports-zeitgeist.streamlit.app), and it tracks digital attention across all 92 teams in the NBA, MLB, and NHL. Updated every six hours. Open source. Free.

## The Problem With One Number

Here's what I've learned from years in sports media: no single metric tells the whole story. A team can spike on Wikipedia because of a controversial trade that never makes the highlight reel. Ticket prices can surge for a rivalry game even when the team is losing. Betting markets can love a squad that fans barely talk about online. News coverage systematically favours big-market teams regardless of what's actually happening on the field.

Any one of these signals is noisy. But combine seven of them? Now you're getting somewhere.

Zeitgeist pulls from **Wikipedia pageviews** (what people are reading up on), **ESPN** (what's actually happening on the field), **Google News** (what the media is covering), **Attendance** (who's actually showing up), **SeatGeek ticket demand** (what people will pay to see), **YouTube** (what content people consume), and **betting odds** (what people are putting money on).

Each metric captures a different flavour of attention. Wikipedia is curiosity. ESPN is reality. News is narrative. Attendance is commitment. Tickets are demand. YouTube is fandom. Betting is conviction.

## Why These Seven?

I started with more sources. Google Trends, Reddit, team subreddits, merchandise rankings. But here's the thing about building a data pipeline that runs on GitHub Actions every six hours: some sources just don't work from shared cloud infrastructure. Google blocks the IP ranges. Reddit returns 403s. Merchandise data doesn't have a reliable public API.

So I cut them. Ruthlessly. What's left are seven sources that actually work — reliably, every six hours, without breaking. Four of them need no API keys at all. The other three (SeatGeek, YouTube, The Odds API) have generous free tiers.

The pipeline is designed to never break. If one source has a bad day, the others keep flowing. If an API key expires, that source gracefully returns zero rows instead of crashing everything.

## Why Victory+ Matters Here

I'm going to be upfront — I work at [Victory+](https://victoryplus.com). So I'm biased. But here's the thing: when a game is freely available to stream, something interesting happens to the attention data around that team. It goes up. Not always dramatically, but consistently.

Zeitgeist flags which upcoming games are available on Victory+ right in the Team Deep Dive page. It's a small feature, but it connects two things I think about constantly: how easy it is to watch a game, and how much people end up caring about the team playing it.

Access drives fandom. We've seen this over and over.

## What You Can Actually Do With It

Zeitgeist isn't just a leaderboard. It's built around four different ways of looking at the data.

**League Overview** ranks all 92 teams by a composite score — but here's the twist: YOU set the weights. Think on-field performance is everything? Crank up the ESPN slider. Care more about commercial popularity? Weight Tickets and YouTube higher. The rankings recalculate as you drag the sliders. It's the kind of thing you can lose an hour to.

**Team Deep Dive** is where it gets fun. Pick a team and see every metric as an overlaid trendline, with win/loss markers from ESPN layered on top. You can literally watch how a three-game losing streak ripples through Wikipedia traffic and news coverage. Sometimes the effect is immediate. Sometimes it takes days. The patterns are fascinating. Below the chart: recent results, upcoming schedule with Victory+ flags, news volume, attendance records, ticket demand, YouTube stats, and betting odds.

**Head to Head** lets you compare up to five teams side by side. It's useful for rivalry analysis, market comparisons, or settling arguments. (The Lakers-Celtics comparison is always a good time.)

**Movers and Alerts** is where the anomalies live. Using a rolling 30-day average, it flags any data point that's more than two standard deviations from normal. These are the moments worth paying attention to — a mid-market team suddenly dominating the conversation, or a contender whose buzz is inexplicably cratering.

## The Score Is Yours To Define

The Interest Score formula is intentionally transparent. Seven metrics, each normalised to a 0-100 scale, combined as a weighted average. The default weights emphasise the three richest daily data sources — Wikipedia at 30%, ESPN at 25%, and News at 25% — with Attendance, Tickets, YouTube, and Betting filling in the rest.

But there's no "correct" weighting. If you're in advertising, news and Wikipedia probably matter most. If you're in fan engagement, attendance and ticket demand are your signals. If you're trying to predict which teams will drive streaming numbers... well, you might want to look at which teams have games on Victory+.

The point is: the same data tells different stories depending on what question you're asking.

## Always On

The data pipeline runs every six hours automatically. No manual updates, no stale dashboards. A colour-coded indicator on the home page tells you how fresh the data is — green for current, yellow for aging, red for stale.

Ninety-two teams. Three leagues. Seven data sources. Updated four times a day.

**Explore it at [sports-zeitgeist.streamlit.app](https://sports-zeitgeist.streamlit.app)**

The source code is on [GitHub](https://github.com/narendranag/interest-map) if you want to peek under the hood or contribute.

The zeitgeist is always shifting. Now you can watch it happen in real time.
