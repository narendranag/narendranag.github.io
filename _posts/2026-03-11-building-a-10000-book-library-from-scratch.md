---
layout: post
title: "Building a 10,000-Book Library from Scratch"
date: 2026-03-11
description: "I built a curated digital library of 10,001 books spanning serious literature, science fiction, detective fiction, science, and a dozen other genres — with a REST API, editorial web frontend, and CLI tools. Here's why and how."
categories: [development, books, data]
author: Narendra Nag
---

I've always believed that a good library tells you something about the person who built it. Not just what they read, but how they think about the world — what they consider important, what they want to understand, what they return to.

So I built one. Ten thousand books, curated by hand (with some help from Claude), spanning everything from Dostoevsky to detective fiction, from quantum physics to Vikram Chandra.

<!--more-->

## The itch

It started with a simple frustration. I wanted a dataset of books — a *real* dataset, not a random dump from some API. Something that reflected actual reading taste across genres, languages, and centuries. Something you could build applications on top of.

Most book datasets out there are either too small (a hundred "classics"), too narrow (just bestsellers), or too messy (scraped from Goodreads with half the metadata missing). I wanted something deliberately curated — a seed library that a serious reader would recognise as legitimate.

So I set out to build one from scratch.

## What's in it

The [Ultimate Book Library](https://github.com/narendranag/ultimate-book-library) currently holds **10,001 books** across more than **1,500 authors** and **25 languages**.

The genres are deliberately broad:

- **Serious literature** — Morrison, Coetzee, Munro, Erdrich, Roth, Updike, McCullers, Welty
- **Science fiction** — Asimov, Le Guin, Dick, Butler, Banks, Chiang, Leckie, Chambers
- **Fantasy** — Tolkien, Le Guin, Sanderson, Hobb, Erikson, Abercrombie, Bardugo
- **Detective fiction** — Christie, Chandler, Simenon, Donna Leon, Dexter, Mankell, Tana French
- **Spy thrillers** — le Carré, Fleming, Forsyth, Cumming, Herron, Furst
- **Science** — Dawkins, Gould, Sacks, Sapolsky, Rovelli, Mukherjee, Kaku
- **History** — Tuchman, Keegan, Beevor, McCullough, Chernow, Macintyre
- **Indian fiction** — Rushdie, Roy, Ghosh, Lahiri, Chandra, Desai, Mistry, Tripathi
- **And more** — horror, romance, children's, poetry, drama, philosophy, art, cinema, music, geography, graphic novels, memoir

The dataset isn't just English. There's French literature (Camus, Simenon, Vargas), Russian (Tolstoy, Dostoevsky, Bulgakov), Japanese (Murakami, Mishima, Ogawa), German (Mann, Hesse, Zweig), Spanish (Borges, Bolaño, Márquez), and works from Icelandic, Polish, Chinese, Korean, Arabic, and more.

Every book has structured metadata — title, authors, publication year, genres, language, page count, ISBN-13, and description where available. The ISBNs are deterministically generated from title-author pairs using MD5 hashing with proper ISBN-13 check digits, so they're consistent and reproducible.

## How it's built

The whole thing is a Python project — properly packaged with `uv`, tested with pytest (118 tests, all passing), linted with ruff, and wired up with GitHub Actions CI.

The architecture has layers:

**Data layer.** The 10,001 books live in `data/books.json`, generated from 35 batch scripts that each focus on different authors and genres. A merge script deduplicates by both ISBN and title-author combination, validates every entry against a Pydantic schema, and writes the final dataset. The batch approach kept the process manageable — you can't curate ten thousand books in one sitting.

**CLI toolkit.** Built with Typer and Rich, the `booklib` command gives you search, stats, validation, and a way to serve the whole thing locally. `booklib search "Murakami"` returns what you'd expect. `booklib stats` tells you the collection has books spanning from 2100 BC (the Epic of Gilgamesh) to 2024.

**REST API.** FastAPI serves paginated, filterable endpoints at `/api/books`, `/api/search`, and `/api/stats`. Full OpenAPI documentation at `/docs`. You can filter by genre, language, year range — the kind of thing you'd want if you were building a reading app on top of this data.

**Web frontend.** Server-rendered HTML via Jinja2 templates with HTMX for search-as-you-type. No JavaScript build step, no npm, no React. Just templates and a stylesheet. The design follows the same editorial aesthetic as this site — Lora serif, warm cream background, thin rules, generous whitespace. Because a library should feel like a library.

## The design choice

When it came to the web frontend, I didn't want the generic Bootstrap-card-grid look that every side project defaults to. I wanted it to feel like something you'd want to browse — quiet, typographic, respectful of the content.

So I pulled the design language directly from this site. Same Lora typeface. Same warm cream palette. Same thin horizontal rules separating sections. Genre tags are understated bordered pills rather than bright colored badges. Book covers sit in warm muted tones rather than garish gradients.

The result is something that feels more like a curated bookshop catalogue than a database frontend. Which is the whole point.

## What I learned

**Curation is harder than collection.** Anyone can scrape a million ISBNs. Choosing ten thousand books that genuinely represent the breadth of world literature, genre fiction, and non-fiction — that's a different problem. It requires knowing what you're leaving out and why.

**Deduplication gets progressively harder.** The first five thousand books had minimal overlap. By the time I was pushing past nine thousand, every batch was hitting 30-50% duplicate rates. The solution was dedup-aware generators that load the existing dataset before producing new entries.

**Batch processing is the right mental model.** Thirty-five batches of 200-500 books each, generated by focused Python scripts, each concentrating on specific authors or genres. It's the same principle as database migrations — small, focused, reversible changes that build up to something large.

**The dataset is the product.** The API and web frontend are nice, but the real value is the curated JSON file. It's the kind of thing you can drop into any project — a recommendation engine, a reading tracker, a bookshop prototype, a machine learning experiment. Ten thousand real books with real metadata.

## Try it

The project is open source at [github.com/narendranag/ultimate-book-library](https://github.com/narendranag/ultimate-book-library).

Clone it, run `uv sync`, and you're up:

```
booklib serve          # Start the web frontend
booklib search tolkien # Search from the command line
booklib stats          # Collection statistics
```

Or just hit the API directly:

```
GET /api/books?genre=Science+Fiction&page_size=10
GET /api/search?q=murakami
GET /api/stats
```

Ten thousand books. Thirty-five genres. Twenty-five languages. One JSON file.

The library is open. Come browse.
