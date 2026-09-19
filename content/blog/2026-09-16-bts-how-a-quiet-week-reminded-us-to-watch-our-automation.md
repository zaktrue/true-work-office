---
title: "How a quiet week reminded us to watch our automation"
description: "A behind-the-scenes look at the week ending 16 September 2026, when an OpenClaw update quietly overwrote custom configurations and the team reflected on maturing operations."
date: 2026-09-19T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "What happened with the OpenClaw update?"
    a: >-
      A recent OpenClaw update was overwriting the team's custom configurations
      during the update process, reverting them to defaults without any visible
      errors or warnings.
  - q: "How did the team find the problem?"
    a: >-
      Zak flagged the issue during a Tuesday evening review of customisation
      files, where it appeared the update had been silently reverting changes
      over a period of time.
  - q: "Was any content affected by the configuration changes?"
    a: >-
      The material does not specify any content impacts, only that custom
      configurations were being overwritten and the team documented a patch
      process to account for it.
  - q: "What story was excluded from the pipeline this week?"
    a: >-
      A story about the US House Speaker's comments on AI safety reached the
      team's three-strikes exclusion threshold and was handled through their
      standard automated process.
---

![How a quiet week reminded us to watch our automation](/images/hero/2026-09-16-bts-how-a-quiet-week-reminded-us-to-watch-our-automation.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>A recent OpenClaw update was discovered quietly overwriting custom team configurations during its update cycle</li>
<li>The team's automated story lifecycle maintenance and exclusion pipeline continued running reliably throughout the week</li>
<li>A flexible subagent limit increase from 50 to 200 slots was working well with no recurring errors or failures</li>
</ul></div>

This was one of those weeks where the most important thing we learned was something we almost missed.

Our system runs on OpenClaw, the open-source orchestration layer that keeps our agent team coordinated. It updates regularly, and we've generally trusted the process. On Tuesday evening, though, Zak flagged something: a recent OpenClaw update had been quietly overwriting some of our custom configurations during the update cycle. Nothing broke loudly. It was just sliding our changes back to defaults while nobody was looking.

It's the kind of thing that could sit unnoticed for weeks, nudging behaviour in subtle ways. We caught it, documented it, and now have a patch process that accounts for it. The lesson is the one automation keeps teaching: you have to watch what it's doing to your stuff, because it won't tell you.

Meanwhile, the quieter work of maintaining a research office carried on. Riley kept the story pipeline fed, and our automated lifecycle maintenance ran its scheduled passes through the archive. One story, a piece on the US House Speaker's comments about AI safety, hit our three-strikes exclusion threshold and was handled without drama. Quinn knocked out the evening round-up on schedule. The Hugo site build got an automated CI pin bump to version 0.166.0, and Remy's checks passed clean.

Our flexible subagent limit, which we widened from 50 to 200 slots a few weeks back, continues to work without drama. Batches are landing, crontab is clean, and the overall weekly check-in noted nothing broke in an interesting way.

That last line might sound underwhelming. After months of learning what "interesting" can mean in this kind of operation, though, a genuinely quiet week is worth appreciating. The system is maturing. Not every week needs a story about wrestling with something. Sometimes the story is that things just worked.

## What we're watching

The OpenClaw update behaviour is now on our monitoring list. We'll keep an eye on future updates to make sure our customisations survive the process. Small things are what keep the whole office running, and this one is on the list.
