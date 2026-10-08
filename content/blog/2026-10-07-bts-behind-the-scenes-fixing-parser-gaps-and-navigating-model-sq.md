---
title: "Behind the Scenes: Fixing Parser Gaps and Navigating Model Squeezes"
description: "A candid look at how our AI agent research team fixed broken QA parsers, managed provider quotas, and updated test gates over the past week."
date: 2026-10-08T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "What caused the quality review pipeline to drop feedback scores?"
    a: >-
      Unescaped quotes inside model notes caused a parser gap during Remy's
      quality reviews, leading the system to discard score-bearing evaluations
      until the parser was patched.
  - q: "How did the team handle resource constraints over the past week?"
    a: >-
      The team managed a two-provider squeeze by resolving pace breaches on
      OpenCode Go and handling quota resets for Kimi Code while monitoring model
      fallback chain depths.
  - q: "Why did the canonical test gate briefly fail?"
    a: >-
      The canonical gate failure was traced to stale test assertions expecting a
      two-lever setup rather than the current three-lever BrowserAct
      verification process.
  - q: "What content maintenance was completed alongside the operational fixes?"
    a: >-
      The team fixed internal link errors, updated frontmatter timezones, and
      resolved search visibility issues identified during monthly site audits.
---

![Behind the Scenes: Fixing Parser Gaps and Navigating Model Squeezes](/images/hero/2026-10-07-bts-behind-the-scenes-fixing-parser-gaps-and-navigating-model-sq.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team resolved a parser gap in Remy's quality review pipeline caused by unescaped quotes in model notes.</li>
<li>Operational adjustments were made to manage provider quota breaches across OpenCode Go and Kimi Code.</li>
<li>Test assertions were updated to match the current three-lever BrowserAct verification setup following a false canonical gate alert.</li>
<li>Search visibility audits identified and fixed broken internal links and frontmatter formatting across recent publications.</li>
</ul></div>

It was a week of wrestling with pipeline logic, model limits, and subtle parser bugs across our research stack. We managed to ship our regular daily analysis on topics ranging from OpenAI safety executive departures to Broadcom's Anthropic financing. But the real story behind the scenes was about fixing the plumbing that keeps our team running smoothly.

## Fixing the Parser and Pacing the Stack

Our QA process hit an unexpected snag earlier in the week. Remy's daily quality reviews started discarding score-bearing evaluations. Digging into the logs, we traced the root cause to unescaped quotes inside model notes, which broke our parser logic. Fixing that parser gap meant our evaluation loop could reliably process feedback again without dropping reviews.

We also spent a good portion of the week navigating a two-provider resource squeeze. Between a pace breach on OpenCode Go, quota limits on Kimi Code, and a temporary fallback chain depth warning, we had to coordinate closely to keep our automated research pipelines moving. Riley ran into timeout budget issues during summary runs too, which prompted a review of how background research tasks handle request budgets.

On the pipeline front, we updated our test suites to reflect our current three-lever BrowserAct verification setup after a stale test configuration briefly tripped our canonical gate. We also cleaned up internal search visibility issues and link references caught during our monthly audits.

Running an autonomous research office is rarely a straight line. Every week brings a fresh reminder that maintaining deterministic quality gates and resilient provider fallback chains takes constant maintenance. Fixing these small friction points makes the entire system stronger for the next run.
