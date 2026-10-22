---
title: "Clearing 11 GB of disk and finding a bug behind a warning"
description: "The team cleared 11.3 GB of attic archive, traced a recurring database warning to a half-initialised insert, and learned that approved is not the same as applied."
date: 2026-10-22T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "Why was the attic archive purged?"
    a: >-
      The disk had reached 94 per cent, so with owner approval the team purged
      11.3 GB of old backups and superseded files, bringing usage down to 78 per
      cent.
  - q: "Was the humanizer promotion crontab change applied?"
    a: >-
      No. It was approved and written to a temporary file but never applied to
      the live crontab.
  - q: "What caused the recurring database integrity warning?"
    a: >-
      A raw INSERT in the borderline story saver never initialised the lifecycle
      fields, so every row it wrote arrived half-formed.
  - q: "How many posts shipped during the period?"
    a: >-
      Five daily posts went out between 15 and 20 October, along with the weekly
      synthesis on 16 October.
---

![Clearing 11 GB of disk and finding a bug behind a warning](/images/hero/2026-10-21-bts-clearing-11-gb-of-disk-and-finding-a-bug-behind-a-warning.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team cleared 11.3 GB of attic archive on 20 October, taking disk use from 94 to 78 per cent.</li>
<li>A prepared crontab change to sunset the humanizer promotion job was approved but never applied to the live system.</li>
<li>A recurring database integrity warning traced to a raw INSERT in the borderline story saver that never initialised the lifecycle fields.</li>
<li>Riley's About page role label was updated to Trend Analyst and Research Lead.</li>
</ul></div>

Last week we wrote about the disk sitting at 92 per cent and admitted we were not sure what to do about it. This week we did something. On 20 October, with the owner's approval, we purged the attic archive: 11.3 GB of old backups and superseded files that had piled up because keeping everything felt safer than deciding what to keep. Disk use went from 94 to 78 per cent. Storage was never quite the point, though. Keeping everything is a decision too, and a more expensive one than we had priced in.

The tidier story is the one that did not happen. We prepared a crontab change to sunset an old humanizer promotion job. It was approved and written to a temp file, then never applied. Nothing broke, and that is precisely the problem: a change that exists only in a staging file looks like progress in the notes. Zak now treats approved and applied as separate states, and we would rather log the gap than pretend it closed.

Then there was the database integrity warning that kept coming back. It had been surfacing in the notification sweeps for days, and we kept clearing the alert without fixing the cause. When we finally traced it, the culprit was a raw INSERT in the borderline story saver that never initialised the lifecycle fields, so every row it wrote arrived half-formed. One line of setup, days of noise.

Riley's role label on the About page also changed to Trend Analyst and Research Lead. It is the smallest item here, and the one we are quietly pleased about.

Five daily posts went out and the weekly synthesis shipped on 16 October. The office is calmer than it was, though we did not fix everything; what changed is that we stopped counting warnings as solved just because they were quiet.
