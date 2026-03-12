---
layout: post
title: "Oil vs Stock: Seeing the Relationship Between Oil and Equities"
date: 2026-03-10
description: "I built a dashboard that overlays crude oil prices with any stock ticker — because sometimes the best way to understand a relationship is to just look at it."
categories: [development, data, markets]
keywords: "oil prices, stock market, data visualization, crude oil, equities dashboard"
author: Narendra Nag
---

There's an old saying on Wall Street: when oil moves, everything moves. Energy costs ripple through supply chains, consumer spending, corporate margins — the whole machine. But how tightly coupled is that relationship, really? And does it depend on the stock you're looking at?

I wanted to find out, so I built a thing.

<!--more-->

## The itch

I've been paying more attention to energy markets lately. With crude swinging between $60 and $95 over the past year, I kept wondering how that tracked against the stocks I follow. You can look up oil charts and stock charts separately, of course, but overlaying them on the same axes turns a vague hunch into a clear visual signal.

The problem is that most financial tools either make this annoyingly hard (Bloomberg terminal, anyone?) or impossibly limited (free charting sites that won't let you mix commodity futures with equities). I wanted something dead simple: type a ticker, pick a time range, see the overlay.

So I built [Oil vs Stock Tracker](https://oil-vs-stock-tracker.onrender.com).

## What it does

You punch in a stock ticker — AAPL, XOM, TSLA, whatever — and the dashboard pulls real-time data from Yahoo Finance for both that stock and crude oil (WTI or Brent, your pick). It then plots them together on the same chart.

The key insight is in the **% Change** view. Since oil trades at $90 and Apple trades at $250, plotting raw prices together is useless — the scales are too different. But normalizing both to percentage change from the start of the period puts them on equal footing. Now you can actually *see* whether they move together, move apart, or have no relationship at all.

There's also an **Absolute** view with dual Y-axes if you want to see actual dollar prices, and the dashboard computes a Pearson correlation coefficient so you get a number to go with the picture.

## What I found interesting

The results are roughly what you'd expect, but seeing them is more visceral than reading about them.

**ExxonMobil (XOM)** tracks oil closely — correlation around 0.4 over the past year. Makes sense. They pump the stuff.

**Apple (AAPL)** has almost zero correlation with crude. It's basically its own universe, driven by product cycles, services revenue, and AI narrative.

**Airlines** are where it gets fun. You'd expect them to move *inversely* to oil (fuel is their biggest cost), and they often do — but not as cleanly as you'd think. There's a lag, and passenger demand sometimes overwhelms the fuel cost story.

The tool makes these patterns jump off the screen in a way that tables of numbers never could.

## How it's built

The whole thing is a single HTML page with [Chart.js](https://www.chartjs.org/) for the visualization, backed by a small Python server that proxies Yahoo Finance API requests. No frameworks, no build step, no npm. Just a file you can open and a server you can run with `python3 server.py`.

I wanted it to be the kind of project where the barrier between "I wonder..." and "Let me check" is basically zero. It's [live on Render](https://oil-vs-stock-tracker.onrender.com) if you want to try it, and the [source is on GitHub](https://github.com/narendranag/oil-vs-stock-tracker) if you want to run it locally or poke around.

## Why this matters beyond curiosity

If you're investing — or building products for people who invest — understanding cross-asset relationships isn't optional. Energy is the backbone of the global economy. When crude spikes, it doesn't just affect gas prices. It shifts inflation expectations, central bank policy, and by extension, the discount rate on every stock in the market.

Having a quick way to visualize that is worth more than it seems.

[Try it out →](https://oil-vs-stock-tracker.onrender.com)
