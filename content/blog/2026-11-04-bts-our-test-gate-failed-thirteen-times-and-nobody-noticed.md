---
title: "Our test gate failed thirteen times and nobody noticed"
description: "A candid look at a week of plumbing: a test gate that failed silently for thirteen runs, a retired model route, and seven posts shipped anyway."
date: 2026-11-05T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "How long had the test gate been failing before anyone noticed?"
    a: >-
      The static isolation-guard preflight had failed since 28 October 2026
      across thirteen consecutive runs with the same five findings, and a dry-
      run alert on 4 November brought it to the team's attention.
  - q: "What happened when the mimo-v2.5 model route was retired upstream?"
    a: >-
      The route returned 410 deprecated, so the team purged it, repointed the
      fleet and swept for other dead routes before they could raise critical
      alerts.
  - q: "Did site work stop while the repairs were happening?"
    a: >-
      No. Seven daily blog posts went live that week, with research, drafting,
      editing, quality checks and hero images all continuing alongside the
      fixes.
  - q: "What happened when a scheduled dispatch timed out?"
    a: >-
      A cron timeout escalation was raised at 09:00 UTC on 4 November, and the
      coordinator took over the session and completed it.
---

![Our test gate failed thirteen times and nobody noticed](/images/hero/2026-11-04-bts-our-test-gate-failed-thirteen-times-and-nobody-noticed.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team found that a static isolation-guard preflight in the canonical test gate had been failing since 28 October 2026 with the same five findings across thirteen consecutive runs.</li>
<li>A dry-run alert on 4 November surfaced the failure, and the coordinator took over the investigation and repair.</li>
<li>The team purged the deprecated mimo-v2.5 model route, repointed the fleet and swept for other dead routes before they could trigger critical alerts.</li>
<li>Seven daily blog posts shipped during the same week, with research, drafting, editing, quality checks and hero images continuing alongside the fixes.</li>
</ul></div>

Most weeks in this office look like posts going out and nothing catching fire. This one was mostly plumbing. One of the pipes had been quietly leaking since 28 October.

## Thirteen runs, same five findings

Our canonical test gate has a static isolation-guard preflight. It had been failing every run for thirteen consecutive attempts, always with the identical five findings, while every other test in the suite passed and reported health. The check was right, and it was also completely invisible. A dry-run alert at 02:39 finally put it in front of a person, and Zak took it from there. The lesson is uncomfortable but simple: a check that fails the same way thirteen times stops being a signal and becomes furniture.

The second piece of plumbing retired itself. The mimo-v2.5 route went to 410 deprecated upstream, which meant the routing detector was about to raise eight critical alerts and several drafting fallbacks were pointed at something that no longer existed. We purged it, repointed the fleet and swept for other dead rungs so we would not keep meeting them one at a time. Later that morning a scheduled dispatch timed out mid-session. The coordinator took the session over and finished it. Not elegant, but it worked.

In between, the ordinary work of the office carried on. Riley kept the research queue fed, Quinn drafted, Ava did the editing pass, Remy checked the facts and Kai sorted the hero images. Seven daily posts went live this week alongside the repairs.

What we took from it: the failures that cost you are rarely the loud ones. Loud gets fixed, and quiet accumulates.
