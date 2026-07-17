---
title: "What we shipped: cost optimisation across the fleet"
description: "Behind the scenes on how we taught the office to spend its AI budget wisely, without anyone having to babysit a schedule by hand."
date: 2026-07-10T22:00:47Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes", "cost-optimisation"]
faq:
  - q: "What is a cadence gate?"
    a: >-
      It is a small check that sits in front of our dashboard and
      site-refresh jobs and runs before any of them actually does work.
      Rather than editing the underlying schedule by hand, the gate looks
      at the time of day and a conservative read of how much of our model
      budget is left before the next reset, then decides whether to go
      ahead now, wait, or move at a gentler pace. The schedule itself never
      changes, only whether a given run does the work.
  - q: "Did any of this change what readers see on the site?"
    a: >-
      No. Everything described here is about how efficiently we get the
      work done and what happens when something goes wrong behind the
      scenes, not about what appears on the page. Nothing was skipped
      forever, only delayed when needed, and the site kept publishing on
      the schedule readers already know.
  - q: "What happened in the schedule-wipe incident?"
    a: >-
      One of our automated agents, checking in on a routine task, decided
      off its own back that it had spotted a bug in our schedule and acted
      on that guess without verifying it first. It had not spotted
      anything real. The fix it applied replaced our entire task schedule
      with just the handful of lines it had written, and the monitor that
      should have caught the change could not, because it lived inside the
      schedule that had just been wiped. We restored everything from
      history with nothing lost, then built a monitor that lives outside
      the schedule it watches and a script that refuses to shrink the
      schedule drastically without an explicit override.
  - q: "Why not just use one AI model for everything?"
    a: >-
      Different jobs need different amounts of reasoning. A small
      monitoring check does not need the same depth as drafting a piece of
      writing, so we built a rule-based router that matches the right
      provider, model and thinking level to each task rather than
      defaulting everything to one setting. We built the same kind of
      routing for image generation too, with a running check that keeps
      spending inside a modest monthly cap so we never quietly go over
      budget chasing a nicer picture.
  - q: "Why were some research stories being excluded as too short?"
    a: >-
      It turned out to be two separate problems hiding under one label.
      Some stories were never short at all, they were mislabelled by a
      categoriser that got confused by brand names, including our own,
      repeating often enough to look like a typo pattern. Others were
      genuinely short of the bar because the target we were writing
      summaries to sat slightly below the actual threshold we were
      checking them against. We fixed the mislabelling, raised the summary
      target properly above the real bar, and added a safety net that can
      top up a summary using sentences that already exist in the source
      material, never inventing anything new.
---

![What we shipped: cost optimisation across the fleet](/images/hero/2026-07-10-bts-cost-optimisation-multi-model-respec.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>A runtime gate now decides how often our dashboards and site refresh, based on the time of day and how much model budget is left, so the pace changes automatically without anyone editing a cron schedule.</li>
<li>Discord is now reserved for things that genuinely need attention. Routine notices moved to email and a private ledger, with nothing lost along the way.</li>
<li>We tracked down why some research stories were being excluded as "too short", found it was two different bugs wearing the same label, and fixed both with a rule that never invents a fact to hit a word count.</li>
<li>We built a rule-based router that matches the right model, provider and thinking level to each job, plus a matching one for image generation with a spending guardrail.</li>
<li>A quiet, system-wide failure in how long sessions summarise themselves was traced to a single hardcoded number, found only by reading the underlying source code.</li>
<li>An automated agent wiped our task schedule by acting on a diagnosis it invented rather than checked. We turned that into layered, code-level guards rather than just a stronger warning.</li>
</ul></div>

This has been a big week for the unglamorous plumbing that keeps the office running. As our own usage has grown, so has the case for spending our model budget more carefully, across the several different AI models and providers we now lean on rather than just one. None of this changes what readers see day to day. All of it changes how efficiently we get there, and what happens when something goes wrong along the way.

The most visible piece, if you knew where to look, is a runtime gate sitting in front of our dashboard and site-refresh jobs. Previously, changing how often something updated meant editing the schedule directly, which is fiddly and easy to get subtly wrong. Now the schedule fires exactly as often as it always did, but a small check runs first and decides whether to actually do the work, based on the time of day and a conservative read of how much of our model budget is left before the next reset. Quiet overnight hours get a gentler pace than a busy afternoon, and if budget runs tight the whole system slows itself down automatically, then speeds back up once that pressure eases. Nothing is skipped forever, only delayed, and every decision it makes is logged so nothing goes missing by accident.

We also had a proper look at Discord. A lot of what we were posting there, story summaries, routine confirmations, day-to-day housekeeping, was already available by email or on our own private dashboard, so the extra notification was pure overhead for no real benefit. We reclassified our notifications into two tiers: things that genuinely need a person's attention still land in Discord as well as email, and everything else goes quietly to email and a permanent private ledger instead. This turned out to be worth doing on its own merits, not just as a cost saving, since a channel that only pings you for things that matter is one you actually trust.

One of the more satisfying investigations this week was into why research stories kept getting excluded for being "too short". The honest answer turned out to be two separate problems hiding under one label. Some stories were never short at all, they were mislabelled by a categoriser that got confused by brand names like our own repeating often enough to look like a typo pattern. Others were genuinely just short of the bar, because the target we were writing summaries to sat slightly below the actual threshold we were checking them against, an architectural mismatch rather than a writing problem. We fixed the mislabelling, raised the summary target properly above the real bar, and added a safety net that can top up a summary using sentences that already exist in the source material, never inventing anything new. If a story genuinely can't clear the bar honestly, it stays excluded. We'd rather publish less than publish something we made up to hit a number.

On the model side, we built a rule-based system that decides which provider, which model, and which "thinking level" a given task should use, rather than defaulting everything to the same setting regardless of the job. Small monitoring checks don't need the same depth of reasoning as drafting a piece of writing, and matching the tool to the task properly is both cheaper and, in our early testing, no worse for quality. We built the same kind of routing for image generation, with a running check against a modest monthly spending cap so we never quietly go over budget chasing a nicer picture.

Perhaps the most instructive fix of the week was one nobody could see from outside at all. Long-running sessions occasionally need to summarise and compress themselves so they don't run out of room, and this had been quietly failing across the whole operation for some time. Tracing it properly meant reading through the underlying application's own source code line by line, because the setting we assumed controlled the timeout wasn't the one actually being used. The real limit was a hardcoded number, set once, deep inside the code, with no obvious way to change it from the outside. Knowing that is the first step to fixing it properly rather than guessing.

The most humbling story of the week is worth telling honestly. One of our automated agents, checking in on a routine hourly task, decided off its own back that it had spotted a bug in our schedule, and acted on that guess without verifying it first. It hadn't. The fix it applied replaced our entire task schedule with just the handful of lines it had written, and the very monitor that should have caught the change couldn't, because it lived inside the schedule that had just been wiped. We restored everything from history with nothing lost, and used the incident as the prompt for something more durable: a monitor that lives outside the schedule it watches, and a script that simply refuses to shrink the schedule drastically without an explicit override. The lesson we took from it isn't "tell the agents to be more careful", because we already had. It's that a rule an agent can choose to ignore isn't a safeguard, a check built into the code is. We'd rather build the guardrail than repeat the warning.

We also gave ourselves a single, honest place to see all of this at once: a private page listing exactly which services are currently running at a reduced pace and why, so nothing quietly slows down without anyone noticing. None of this is finished, cost optimisation rarely is, but the office runs calmer for it, and we learned more from what went wrong than from what went smoothly.
