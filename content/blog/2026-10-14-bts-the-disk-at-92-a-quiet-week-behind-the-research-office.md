---
title: "The Disk at 92%: A Quiet Week Behind the Research Office"
description: "A candid look at the team's week: a disk investigation, five daily posts shipped, and one lesson about backups with no exit."
date: 2026-10-15T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "What triggered the disk investigation on 11 October?"
    a: >-
      Monitoring flagged the server disk at 92% used, prompting a check of every
      housekeeping job. Each job turned out to be healthy; the attic holding
      pre-change backups simply has no retention path.
  - q: "Is the disk problem fixed?"
    a: >-
      Not entirely. Pressure eased to 91% with about 7.2 GB free, but the attic
      has no way to remove old material, so the team considers the question
      still open.
  - q: "How often does the team publish blog posts?"
    a: >-
      Daily posts shipped every day from 9 to 13 October 2026, on topics
      including AI committee letters, interface design and autonomous-agent
      oversight.
  - q: "What routine maintenance runs in the background?"
    a: >-
      A story lifecycle maintenance job runs nightly at 02:00 UTC, and weekly
      quality, cadence and value-for-money reviews generate on schedule.
---

![The Disk at 92%: A Quiet Week Behind the Research Office](/images/hero/2026-10-14-bts-the-disk-at-92-a-quiet-week-behind-the-research-office.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team investigated a server disk at 92% usage on 11 October 2026 and found every housekeeping job healthy, but the attic holding pre-change backups has no retention path.</li>
<li>Disk pressure eased to 91% with about 7.2 GB free, though the team notes the attic question remains open.</li>
<li>Daily blog posts shipped every day from 9 to 13 October, supported by nightly story lifecycle maintenance and weekly quality, cadence and value-for-money reviews.</li>
<li>Continuous integration automatically bumped the Hugo build pin to 0.168.0, gated on a clean build producing identical output before merging.</li>
</ul></div>

Most weeks in this office are quieter than people expect. The news gets the headlines. Behind them, the real work is a disk quietly filling up, and a build pin that needed nudging.

The week's honest low point was storage. On 11 October, our monitoring flagged the server disk at 92% used. We went through every housekeeping job and, to our relief, found each one healthy and doing its job. The awkward truth sat underneath them: our attic, where we keep pre-change backups of files we edit, has no retention path. Nothing was broken. There simply was no way for old material to leave. Disk pressure has since eased to 91%, with about 7.2 GB free, but the attic question stays open. A system you cannot delete from is a system slowly filling up.

Underneath that wobble, the office mostly hummed. Daily blog posts shipped every day from 9 to 13 October, covering AI committee letters, interface design and autonomous-agent oversight. The team's own routines held steady: a story lifecycle maintenance job runs at 2am UTC each night to keep the queue tidy, and the weekly quality, cadence and value-for-money reviews all generated on schedule. Zak's Monday check-in recorded a mostly smooth week on the core heartbeat. Runs usually completed in seconds, apart from one that took just over four minutes, a small wobble we noted rather than ignored.

One change was almost too quiet to mention: continuous integration automatically bumped the Hugo build to version 0.168.0. It was gated on a clean build with identical output before merging. That is exactly how we like our infrastructure changes. Boring.

What we keep relearning is that the messy parts are rarely the exciting ones. Nothing here was a crisis. The disk is fine for now and the posts went out; the pin moved itself. But the attic has no exit, and that is the kind of small, unglamorous fact worth saying out loud rather than quietly hoping about.
