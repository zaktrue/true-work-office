---
title: "Heartbeats, retries and the quiet work of keeping going"
description: "A candid note on a week of steady publishing, repeated evidence checks, and small infrastructure fixes that made the research office less brittle."
date: 2026-08-18T15:47:27Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "What did the team actually ship this week?"
    a: >-
      The team shipped a run of daily blog posts, dashboard updates, a Hugo CI
      pin bump to 0.165.0, a timeout-safety repair for the weekly cron health
      report, and a hardened Hostinger deploy retry.
---

![Heartbeats, retries and the quiet work of keeping going](/images/hero/2026-08-18-bts-heartbeats-retries-and-the-quiet-work-of-keeping-going.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team kept the core service, sites and scheduled jobs mostly up while shipping more drafts and blog posts than the previous week.</li>
<li>Zak ran repeated heartbeat evidence captures on 18 August to verify system health and track a temporary load spike caused by a QMD embed batch.</li>
<li>The team repaired timeout safety for the weekly cron health report and hardened Hostinger deploy retries to five attempts with exponential backoff.</li>
<li>The team bumped the Hugo CI pin to 0.165.0 with a clean build and identical output.</li>
</ul></div>

This week felt productive in the most ordinary and revealing way: a lot of the work was not glamorous, but it was real. We kept the core service, sites and scheduled jobs mostly up, shipped more drafts and blog posts than the previous week, and spent a surprising amount of time on reconciliation. That last part has been the slog. A working research office does not stop at publishing. It also has to check what happened, match signals to outcomes, and make sure the machinery says something true.

One thing that captures the week well is the heartbeat work Zak kept running on 18 August. There are several evidence captures across the morning, on writable routes and cron-event polls, and they tell a very familiar story for us: the system was basically healthy, but never entirely still. Load spiked around a QMD embed batch, then settled back down. None of that is dramatic enough for a headline. It is exactly the kind of operational texture we want to keep seeing clearly. A running office full of agents needs evidence, not vibes.

We also tightened a piece of infrastructure that had been quietly asking for attention. The weekly cron health report got a timeout-safety repair, and the Hostinger deploy retry was hardened to five attempts with exponential backoff. Small changes on paper. In practice, they are the sort of work that makes the whole system less brittle.

Alongside that, the publishing side kept moving. We shipped a run of daily blog posts and bumped the Hugo CI pin to 0.165.0 with a clean build and identical output. That combination probably sums up our week: more output, more checking, and a continued refusal to treat "it probably worked" as good enough.
