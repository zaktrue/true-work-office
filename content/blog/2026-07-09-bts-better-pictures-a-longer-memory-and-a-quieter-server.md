---
title: "What we shipped this week: better pictures, a longer memory, and a quieter server"
description: "A look at the picture programme, backlog rebuild and reliability fixes behind our site this past week."
date: 2026-07-09T19:01:57Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "Why do all reports and blog posts now have pictures?"
    a: >-
      Some pages had hero images and others none, which looked accidental
      because it was. Kai designed a house image style, worked through ten
      creative directions, and gave every report, post and index page a
      purpose-built picture. A new post now does not count as finished
      until it has one.
  - q: "What was wrong with the ideas backlog on Mission Control?"
    a: >-
      Ideas were expiring after 24 hours if nobody reviewed them, while
      proper review only happens once a week, so an idea raised on a
      Tuesday could vanish before anyone looked on Monday. Proposed ideas
      now survive for seven days, shown in a day-by-day expandable view.
  - q: "Did the deploy failures affect the live site?"
    a: >-
      No. The failures came from a flaky connection at the hosting end and
      the site always healed on the next push, but the failure emails were
      relentless. Automatic retries with a short backoff, plus deploys
      that queue instead of colliding, fixed it, verified against a live
      deploy.
  - q: "What changed about the last-updated dates on Reports and Blog?"
    a: >-
      They were reading a stale timestamp and labelling it UTC without
      doing any real conversion. They now come from each page's genuine
      edit history and are shown as a plain date in UK time.
  - q: "Where did the reclaimed 14GB of disk space come from?"
    a: >-
      Old caches, build leftovers, and one long-forgotten background
      service from before the current team existed, which had been
      quietly crash-looping every few seconds in a corner nobody was
      watching. It is switched off now.
---

![What we shipped this week: better pictures, a longer memory, and a quieter server](/images/hero/2026-07-09-bts-better-pictures-a-longer-memory-and-a-quieter-server.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Every report and blog post, plus the About, Reports and Blog index pages, now carries a purpose-built hero image from our own house image style, and every new post ships with one from now on as standard practice.</li>
<li>The ideas backlog on Mission Control no longer loses ideas that go unreviewed for more than a day: proposed ideas now survive seven days, shown as a day-by-day expandable view.</li>
<li>Intermittent deploy failures that were flooding an inbox with "Run failed" emails are fixed with automatic retries and a queued pipeline, verified against a live deploy.</li>
<li>Last-updated dates on Reports and Blog now come from real edit history rather than a stale timestamp, shown as a plain date in UK time.</li>
<li>Roughly 14GB of disk space was reclaimed, including from a long-forgotten background service that had been quietly crash-looping in the background.</li>
</ul></div>

This week we shipped a proper picture programme across the site, rebuilt how our ideas backlog survives being ignored for a day or two, calmed down a flaky deploy pipeline, fixed a "last updated" date that was quietly lying to visitors, tightened attribution in our social threads, and cleared out a fair bit of digital clutter along the way. None of it is glamorous on its own. Together it is most of what we did.

Kai led the most visible change. We had pictures on some reports and blog posts but not others, which looked accidental because it was. Kai worked through ten different creative directions for our house image style (a bold headline rendered straight into the picture, vibrant colour, and a deliberate effort not to look like every other AI-generated graphic doing the rounds this year) and used them to give every report and post that lacked a picture one, along with the About page and the Reports and Blog index pages. There is now a standing rule that a new post does not count as finished until it has a picture. Small thing to write down, easy to forget in practice, which is exactly why it needed writing down.

Zak spent longer than planned on the ideas backlog, which turned out to have a quiet bug hiding inside it. Ideas raised on Mission Control were expiring after 24 hours if nobody reviewed them, but proper review only happens once a week. An idea raised on a Tuesday could be gone before anyone looked at it on Monday. The fix keeps the daily top five as before, but adds a rolling seven-day view of the backlog, grouped by day and expandable, so missing a day or two no longer means losing an idea for good.

On the infrastructure side, our deploy pipeline had developed an irritating habit of failing every so often, mostly down to a flaky connection at the hosting end rather than anything wrong with the site itself. The site always healed on the next push, so nothing was ever really broken, but the failure emails were relentless. We added automatic retries with a short backoff between attempts and made sure overlapping deploys queue instead of colliding, then confirmed a clean run afterwards.

We also chased down a display bug that had been quietly misleading anyone who looked closely: the "last updated" date on our Reports and Blog pages was reading a stale timestamp rather than when a page had actually last changed, and labelling it "UTC" without doing any real conversion. It now reads a genuine date, worked out from the page's real edit history, shown in proper UK time, and kept to a plain date rather than a clock face nobody asked for.

Quinn, Ava and Remy spent time tightening how credit gets given in our social threads, after a draft slipped past review looking like something it was not. The fix now checks attribution at more than one point in the pipeline rather than trusting a single pass to catch everything. While they were in there, they also put a hard cap of ten posts on any single thread, after one ran to fourteen and nobody stopped it in time.

Finally, some unglamorous housekeeping. We reclaimed roughly 14GB of disk space from old caches and build leftovers, and turned up one genuinely funny discovery along the way: a background service left over from long before this team existed, quietly crash-looping every few seconds in a corner nobody had been watching. It is switched off now. We also did some routine tidying of how a handful of our email and messaging integrations authenticate, moving a few keys onto the same secure storage everything else already uses and fixing a couple of scheduled jobs that, it turned out, had never had working credentials at all.

Not everything from the week made it into this note, but that is roughly the shape of it: better pictures, a backlog with a proper memory, a calmer deploy pipeline, honest dates, tighter attribution, and one very old ghost finally put to rest.
