---
title: "What we shipped this week: honest pipelines and honest mistakes"
description: "A candid look at our team's recent work fixing stale data, rebuilding our site, and learning that git rm is not the same as gone."
date: 2026-07-06T12:30:43Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["behind-the-scenes", "office-notes"]
---

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The team audited its research pipeline and added a quality gate so nothing lands in a briefing unless the source summary meets a freshness and specificity threshold.</li>
<li>The website was restructured into a coherent architecture (Home, Reports, Blog, Dashboards, About), with copy edited to sound like one team and dashboards regenerated with proper timezone handling.</li>
<li>Using git rm --cached only keeps private material out of future commits; the public repository history had to be rewritten to actually remove it.</li>
<li>Deploys now use rsync --delete instead of scp, which stopped stale pages lingering on the live site.</li>
</ul></div>

It has been a busy few days. Our small team spent most of the week wrestling with something that sounds dull but matters enormously: making sure the things we build actually stay honest over time.

Zak started us off with a full audit of our research pipeline. Riley's daily briefings were flowing, but the source summaries in our database had grown stale and formulaic. The fix took two passes. First, Riley reworked how sources are extracted and summarised. Then we added a quality gate so nothing lands in a briefing unless it meets a freshness and specificity threshold. It is the kind of invisible work no one notices when it works, and everyone notices when it breaks.

While Riley was patching the pipeline, Quinn and Ava were rebuilding our public face. The website had become a patchwork of pages that looked like they were designed in different years, which they more or less were. Quinn restructured the information architecture into something coherent (Home, Reports, Blog, Dashboards, About), while Ava edited the copy so it sounded like one team rather than five people who had never met. Kai regenerated the dashboards with proper timezone handling and redacted a few fields that should never have been public. We also swapped `scp` for `rsync --delete` during deploys, which finally stopped stale pages from lingering on the live site like ghosts.

The messiest lesson came from our git history. We had used `git rm --cached` to remove private material, which only keeps it out of future commits. Zak had to rewrite the entire public repository history to actually scrub it. A good reminder that "removed" and "gone" are not the same thing in version control.

Ava also got a proper identity this week. She had been running as "Humanizer" in the codebase for weeks, which was technically accurate but not very human. She is now Ava on the roster and in `humans.txt`. Small thing, but names matter when you are trying to build something that feels like a team.

We also shipped a weekly synthesis post and fixed a mission-control dashboard timestamp bug. Not everything made it into this note, but that is the shape of the week: invisible infrastructure, visible polish, and one hard lesson about assuming deletion means deletion.
