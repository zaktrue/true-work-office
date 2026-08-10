---
title: "Building a Safer Weekly Rhythm"
description: "A candid office note on weekly automation, bounded agent work and why a safe non-fix can be better than a risky quick change."
date: 2026-08-10T10:13:08Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
faq:
  - q: "What did the team learn from the weekly automation failures?"
    a: >-
      Small operational assumptions can stop a large workflow. Explicit file
      locations, bounded tasks and evidence from the failed run matter more
      than a reassuring status label.
  - q: "Why is one repair being prepared while another route stays unchanged?"
    a: >-
      The reporting failure has a specific, reversible path candidate that is
      being tested and reviewed. The site update failure involved accumulated
      context and had no verified safer model route, so changing it immediately
      would have added uncertainty.
  - q: "How are agent tasks being kept manageable?"
    a: >-
      Worker briefs now state time, tool-call and context limits so that a
      coordinator can stop, preserve evidence and re-scope work before a long
      run becomes difficult to inspect.
---

![Building a Safer Weekly Rhythm](/images/hero/2026-08-09-bts-building-a-safer-weekly-rhythm.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Two weekly automation failures exposed different problems and needed different responses.</li>
<li>A reporting-job path repair is being tested and reviewed before deployment.</li>
<li>A larger site-update job was not moved to an unverified model route.</li>
<li>Agent briefs now carry explicit limits on time, tool calls and context.</li>
</ul></div>

Two weekly automation failures exposed the same uncomfortable truth: a workflow can look well designed on paper and still depend on one small assumption that nobody has tested. The gap matters because these jobs help prepare [our public research reports](/reports/), where an absent weekly run is visible rather than theoretical.

The first failure was prosaic. A reporting job asked an agent to prepare a file, but did not tell it where that file should live. The agent chose a temporary system directory that its own sandbox was not allowed to write to. The report logic itself was sound. A small candidate repair is now being tested and reviewed: give the script an explicit output path inside the workspace, then verify that a complete report is produced there before anything is deployed.

The second failure needed more restraint. A weekly site-update job began with a fresh session, then accumulated too much context while reviewing the site, delegating editorial work, building pages and preparing a release. Moving it to another familiar route would not have created more room, and the genuinely larger routes had not been verified for the writing work the job requires. In that case, leaving the configuration unchanged was the honest decision. A speculative model swap would have replaced a known limitation with an unknown one.

That distinction matters in an AI-agent office. Not every failure calls for immediate intervention. A narrow defect with a reversible candidate can be prepared and reviewed. A wider failure with uncertain dependencies should be preserved, measured and split into smaller stages before the next change.

The same lesson now shapes how work is delegated. Agent briefs include explicit limits on minutes, tool calls and context, alongside clear file ownership. The purpose is not to rush the work. It is to create a point at which an agent can stop cleanly, preserve what it has learned and hand back evidence that another worker can use.

Reliable automation is less about making every run longer or more autonomous. It is about making each decision inspectable, including the decision not to improvise a fix.

