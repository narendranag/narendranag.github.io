---
layout: post
title: "Building a Family Recipe Book"
date: 2026-03-13
categories: [project, development, build-notes]
author: Narendra Nag
image: "https://images.unsplash.com/photo-1761839258568-fd466a93f68b?w=1200&h=630&fit=crop&q=80"
image_alt: "A family cooking together in a warm kitchen"
---
My family's recipes live in three places: a YouTube playlist of cooking videos I've saved over the years, a folder in Apple Notes where I jot things down when someone tells me how to make something, and my head. The first two are searchable in theory but useless in practice. YouTube buries the actual recipe in a video description full of social media links and hashtags. Apple Notes is a graveyard of half-formed bullet points. And the recipes in my head aren't going to survive me unless I write them down.

So I built [Nag Family Recipes](https://recipes.nag.family) — a simple recipe website for my family, inspired by NYT Cooking.

## The Problem

The real problem wasn't building a website. It was that recipes, as they exist in the wild, are messy. A YouTube video description might contain a perfectly good recipe, but it's sandwiched between "SUBSCRIBE FOR MORE!" and fifteen Instagram handles. An Apple Note might say "chicken, that spice mix, cook until done." These aren't recipes. They're reminders that only make sense to the person who wrote them, and only on the day they wrote them.

I wanted a system that could pull recipes from wherever I save them, clean them up into something actually usable, and put them on a site where my family can find them.

## How It Works

The architecture is deliberately simple. Recipes are stored as text files (MDX with YAML frontmatter) in a git repository. No database. No CMS. Just files that are version-controlled, human-readable, and easy to edit by hand if needed.

Three ingestion pipelines feed into this:

**YouTube** — A Python script calls the YouTube Data API, fetches every video in my playlist, and extracts whatever recipe information it can find from the description. It downloads thumbnails, parses ingredients and instructions, and writes an MDX file for each video. A GitHub Action runs this weekly, so new videos I add to the playlist show up on the site automatically. When I remove a video from the playlist, the recipe disappears from the site on the next sync.

**Apple Notes** — An AppleScript exports everything from my "Recipes" folder to JSON, then a Python script parses the HTML and converts it to MDX. This runs locally via a macOS launchd agent every morning because Apple Notes isn't accessible from a CI server.

**Manual** — I can always just create a file by hand.

## The Rewriter

The most interesting part of this project is what happens after ingestion. Raw recipes are terrible. So I built a rewriting pipeline that sends each recipe through Claude (Anthropic's AI) to clean it up. The rewriter takes something like:

> "Butter Chicken Recipe \| How to make Butter Chicken at home \| Chicken Makhani \| Chef Sanjyot Keer"

and turns it into "Butter Chicken." It separates ingredients from instructions when they're jumbled together, removes promotional text, estimates cooking times, assigns categories and tags, and produces a clean, structured recipe.

This runs automatically after every sync. The script checks for recipes that haven't been rewritten yet (using a `rewritten: true` flag in the frontmatter) and only processes new ones.

## The Site

The frontend is Next.js with Tailwind CSS, deployed on Vercel. It's statically generated at build time — every recipe becomes a page. There's fuzzy search powered by Fuse.js, category filtering, embedded YouTube videos for recipes that came from my playlist, and an interactive ingredient checklist that lets you tick off items as you cook.

I spent some time getting the design right. Playfair Display for headings, Inter for body text, a warm off-white background with a red accent colour. It's not going to win any design awards, but it feels like a cookbook, which is what I was going for.

## What I Learned

The YouTube Data API is essential for CI environments. I initially used yt-dlp (a command-line tool for downloading YouTube metadata) but it gets blocked by bot detection when running from GitHub Actions on datacenter IPs. The API just works.

Apple Notes is surprisingly hard to get data out of. There's no API, no export function, nothing. AppleScript is the only way, and it's as pleasant to work with as you'd expect a language designed in 1993 to be. But it works.

The recipe rewriting step turned out to be more important than I expected. Without it, the site would be full of ALL CAPS TITLES, ingredient lists mixed with Hindi text, and instructions that say "don't forget to like and subscribe." With it, every recipe reads like it belongs in a cookbook.

## What's Next

The site is live at [recipes.nag.family](https://recipes.nag.family). I add to it whenever I find a new recipe worth keeping. The automation means I just save a video to my YouTube playlist or type a recipe into Apple Notes, and it eventually shows up on the site, cleaned up and ready to cook from.

I had originally planned to pull recipes from Instagram too, but their API makes it nearly impossible to access saved posts programmatically. Maybe someday. For now, two sources and a text editor are more than enough.

**Live Site**: [recipes.nag.family](https://recipes.nag.family)

**GitHub Repository**: [github.com/narendranag/recipe-book](https://github.com/narendranag/recipe-book)
