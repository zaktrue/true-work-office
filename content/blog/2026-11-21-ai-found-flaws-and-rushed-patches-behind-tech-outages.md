---
title: "AI-Found Flaws and Rushed Patches Behind Tech Outages"
description: "Officials link outages at Microsoft, JPMorgan, Schwab and US airports to AI-driven vulnerability discovery and under-tested patches."
date: 2026-11-22T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "ai-industry"]
source_url: "https://www.businessinsider.com/tech-outages-ai-explanation-cybersecurity-2026-11"
source_name: "Business Insider"
structure: "news_unpack"
faq:
  - q: "What explanation did officials give for the outages?"
    a: >-
      They pointed to organisations using AI to find software vulnerabilities
      and then deploying fixes faster than they could be fully tested, rather
      than to a coordinated attack.
  - q: "Does faster patching improve security over time?"
    a: >-
      Kevin Mandia predicted further outages in the near term while resilience
      improves in the longer term.
---

![AI-Found Flaws and Rushed Patches Behind Tech Outages](/images/hero/2026-11-21-ai-found-flaws-and-rushed-patches-behind-tech-outages.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Outages at Microsoft, JPMorgan Chase, Charles Schwab and US airport systems occurred across a five-day period.</li>
<li>Officials and security executives attributed the failures to AI-assisted vulnerability discovery followed by rushed patches.</li>
<li>Kevin Mandia of Armadin said fast updates can break systems because not every outcome can be tested beforehand.</li>
<li>Senator Mark Warner and other officials ruled out a coordinated attack by a foreign or malicious actor.</li>
</ul></div>

Four major systems failed inside five days: Microsoft's cloud services, JPMorgan Chase, Charles Schwab, and the software supporting US airport operations. No foreign actor has been blamed, nor has any coordinated campaign. Instead, [Business Insider's account of the AI patching explanation](https://www.businessinsider.com/tech-outages-ai-explanation-cybersecurity-2026-11) sets out what politicians and security executives told CNBC, which points at the speed of AI-assisted repair rather than the intent of an attacker.

The mechanism is mundane. AI tools scan large codebases for latent vulnerabilities, including flaws that have gone unnoticed for years. They do it faster than human review teams can triage the findings. Organisations are then left with a queue of defects and a volume of fixes well above their normal release rhythm. Kevin Mandia, chief executive of the cybersecurity firm Armadin, said patches shipped at that pace can break live systems, because the full range of consequences cannot be tested in advance. Senator Mark Warner, vice chairman of the Senate Intelligence Committee, described a mad rush to patch. Nicole Perlroth, a former cybersecurity reporter, warned that hurried fixes are more likely to produce cascading failures. An earlier episode had already shown the same dynamic, when AI surfaced flaws in a widely used programming language.

## Where the constraint moved

The shift is in where the bottleneck now sits. Finding defects has become cheap and quick. Validating a fix against production behaviour has not. Every patch is a change to a system that other systems depend on. The discipline governing change predates AI entirely: staged rollout, rollback plans, post-deployment monitoring. Speed at the discovery end presses hard against that discipline. Mandia expects rapid patching to continue, with further outages in the near term and improved resilience later. That may prove a reasonable trade. It is still a trade, though, and the cost falls on people who cannot choose when their balance becomes inaccessible or their flight is grounded.

The same shape appears in quieter settings. Where AI drafts feedback, generates code or checks citations, the output is only as sound as the verification behind it. A tool that finds more problems than a team can properly resolve does not create quality. It creates a longer queue. Institutions that treat AI output as a finished product rather than as a claim awaiting review tend to learn this at the least convenient moment.

Whether faster discovery justifies the disruption depends on questions the outage reports leave open: how many of these patches were reversible, how many were tested against realistic load, and who authorised shipping them. Those are governance questions that will outlast the specific failures.
