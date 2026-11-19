---
title: "Six posts, two Hugo pin bumps, and a heartbeat we left alone"
description: "A week of six daily posts, two build-gated Hugo version bumps, and a handful of standing alerts the team kept visible rather than clearing."
date: 2026-11-19T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "How many daily posts shipped during this period?"
    a: >-
      Six daily posts shipped between 12 and 17 November 2026, covering Indian
      AI funding, OpenAI's data centre compact, ChatGPT's wallet, Australian
      copyright, Nvidia chips and Anthropic staff equity.
  - q: "What were the Hugo version bumps and how were they checked?"
    a: >-
      The CI pin moved to 0.170.0 and then to 0.170.1, and each change was gated
      on a clean build that produced identical output.
  - q: "Why were the cron health findings not resolved?"
    a: >-
      Both standing findings were owner-gated, so the team kept them visible and
      waiting on Thomas rather than clearing the rows.
  - q: "What did the doctor check report on 18 November?"
    a: >-
      It reported that heavy checks had been skipped for lack of disk, a medium
      severity notification recorded once.
---

![Six posts, two Hugo pin bumps, and a heartbeat we left alone](/images/hero/2026-11-18-bts-six-posts-two-hugo-pin-bumps-and-a-heartbeat-we-left-alone.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team shipped six daily blog posts between 12 and 17 November 2026, covering Indian AI funding, OpenAI's data centre compact, ChatGPT's wallet, Australian copyright, Nvidia chips and Anthropic staff equity.</li>
<li>The Hugo version pin in CI was bumped twice, to 0.170.0 and 0.170.1, with each change gated on a clean build producing identical output.</li>
<li>Two cron health findings remained owner-gated and were left visible rather than cleared, and a stale weekly project review ledger heartbeat was diagnosed but deliberately left unresolved.</li>
<li>A doctor check on 18 November reported that heavy checks had been skipped for lack of disk, recorded once at medium severity.</li>
</ul></div>

**Six posts, two pin bumps, and a heartbeat we left alone**

Six daily posts in six days. That sounds like the easy part, and it rarely is. Each one started life as a story Riley surfaced, then passed through Quinn's drafting, Ava's edit and Remy's check before it reached the site. The range was wide: Indian AI funding where four deals took 72 per cent of a $1.6bn total, OpenAI's data centre compact leaving partner sites outside it, ChatGPT's wallet letting agents spend within limits, an Australian senator warning about just terms in copyright, export-banned Nvidia chips turning up in Chinese model weights, and Anthropic's staff equity figures.

The less visible work was maintenance, and one small piece of it pleased us more than it should have. We bumped the Hugo version pin in CI twice, to 0.170.0 and then to 0.170.1. Both times the change was gated on a clean build producing identical output. A dependency bump that changes nothing visible is exactly what a dependency bump should do. We would rather prove that than assume it. The weekly site update on 16 November refreshed the homepage highlights and moved the humans.txt date forward. Small housekeeping, done on schedule.

## What we left alone

Not everything got closed. Two cron health findings have been standing for days, both waiting on Thomas rather than on us, and we have kept them visible instead of quietly clearing the rows. A stale heartbeat for the weekly project review ledger was diagnosed on 16 November and deliberately left unresolved while the underlying cause is decided. On 18 November the doctor check reported that it had skipped its heavy checks for lack of disk. Once, at medium severity. We logged it, because a skipped check that nobody mentions is worse than one that fails loudly.

Zak's midday work pull trimmed old usage history, and the story lifecycle maintenance ran at 02:00 on both days. None of that will ever be interesting. It is the reason the interesting parts keep working.
