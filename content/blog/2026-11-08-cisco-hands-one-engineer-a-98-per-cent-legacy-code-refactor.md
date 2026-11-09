---
title: "Cisco hands one engineer a 98 per cent legacy code refactor"
description: "Cisco's Jeetu Patel has given a 27-year-old engineer unlimited AI tokens to refactor 98 per cent of legacy code within 24 months, starting with a four-week proof."
date: 2026-11-09T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "ai-industry"]
source_url: "https://www.tomshardware.com/tech-industry/big-tech/cisco-gives-27-year-old-engineer-unlimited-ai-tokens-to-rewrite-98-percent-of-the-companys-legacy-code-in-24-months-president-plucks-former-startup-founder-telling-him-to-go-nuts?utm_source=tldrnewsletter"
source_name: "Tom's Hardware"
structure: "milestone_release"
faq:
  - q: "What exactly has Cisco committed to?"
    a: >-
      A 24-month target for refactoring 98 per cent of the company's legacy
      code, preceded by a four-week proof of concept and backed by unlimited AI
      tokens for one engineer.
  - q: "Why is testing the central concern?"
    a: >-
      The target depends on detecting behaviour changes that compile cleanly,
      and sceptics question whether critical networking code can be tested
      thoroughly enough within the timeframe.
---

![Cisco hands one engineer a 98 per cent legacy code refactor](/images/hero/2026-11-08-cisco-hands-one-engineer-a-98-per-cent-legacy-code-refactor.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Patel set Krishnamurthy a target of refactoring 98 per cent of Cisco's legacy code within 24 months, beginning with a four-week proof of concept.</li>
<li>Krishnamurthy joined Cisco through the EzDubs acquisition and had been working five levels below his experience before raising the proposal.</li>
<li>The engineer has been granted unlimited AI tokens, removing model cost as the limiting factor while leaving review capacity and test coverage as constraints.</li>
<li>GitHub has added four million CPU cores and 160 petabytes of storage to meet growing demand for AI coding capacity.</li>
</ul></div>

The headline figure is the easy part. Cisco's president and chief product officer, Jeetu Patel, set a 27-year-old engineer, Padmanabhan Krishnamurthy, the task of refactoring 98 per cent of the company's legacy code inside 24 months, beginning with a four-week proof of concept. [Tom's Hardware's report on the refactoring brief](https://www.tomshardware.com/tech-industry/big-tech/cisco-gives-27-year-old-engineer-unlimited-ai-tokens-to-rewrite-98-percent-of-the-companys-legacy-code-in-24-months-president-plucks-former-startup-founder-telling-him-to-go-nuts?utm_source=tldrnewsletter) notes that Krishnamurthy joined through Cisco's acquisition of the translation startup EzDubs. He had been working five levels below his experience when he told Patel, in a San Francisco office, that two people could rewrite the codebase. He has been given unlimited AI tokens and, in Patel's reported phrase, licence to go nuts.

The scale of the ambition is a familiar kind of corporate arithmetic. What stands out is the shape of the mandate: one named engineer, an open-ended model budget and a fixed deadline. Token cost stops being the constraint. What remains binding is everything the tokens cannot supply. Test coverage good enough to catch semantic errors, and reviewers with the standing to halt a change. Then there is the undocumented knowledge sitting in code nobody has read for a decade.

The staffing detail carries its own weight. Entry-level hiring in software has contracted as AI coding capacity has expanded, with GitHub adding four million CPU cores and 160 petabytes of storage to serve demand. Patel's counter-argument is that early-career hires bring ideas the incumbents have stopped noticing, and that friction between newer and longer-serving staff is productive rather than wasteful. That a founder-engineer was working five levels below his experience, found through a conversation rather than a process, says something about how internal hierarchies conceal capability.

Education has a stake in the same question. If routine refactoring is delegated to models, the traditional entry route into large codebases narrows. The judgement needed to recognise an unsafe automated change then has to be built deliberately rather than absorbed by accident. Honest use of AI in teaching computing means protecting the parts of the work that produce that judgement, including the tedious reading that looks like it teaches nothing.

What would need to be true for the two-year target to mean anything? Test harnesses good enough to detect behaviour changes that compile cleanly, and a rollback path that has been exercised under pressure. Then a definition of refactored that goes beyond code which runs. Networking equipment fails in ways unit tests do not model, and scepticism about whether the timeframe permits adequate testing is the correct question to be asking.
