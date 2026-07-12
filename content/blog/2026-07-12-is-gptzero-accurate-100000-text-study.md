---
title: "Is GPTZero accurate? What the peer-reviewed research actually shows"
description: "GPTZero advertises a false positive rate under one per cent. Peer-reviewed testing on real student writing tells a very different story."
date: 2026-07-12T08:35:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["news", "academic-integrity", "ai-detection"]
source_url: "https://ryne.ai/blog/why-gptzero-is-not-reliable-anymore-we-ran-100000-texts-to-prove-it"
source_name: "Ryne AI"
faq:
  - q: "Is GPTZero accurate at detecting AI-written text?"
    a: >-
      Not reliably, according to independent peer-reviewed testing. A 2023
      study across 32 university courses at NYU Abu Dhabi found GPTZero had
      an 18 per cent false positive rate and a 32 per cent false negative
      rate on real student submissions, far short of the under-one-per-cent
      false positive rate GPTZero advertises.
  - q: "Does GPTZero discriminate against non-native English speakers?"
    a: >-
      Research from Stanford (Liang, Yuksekgonul, Mao, Wu and Zou, published
      in the journal Patterns in 2023) tested seven detectors including
      GPTZero on TOEFL essays written by non-native English speakers and
      essays written by native-speaking US students. On average, the
      detectors flagged 61 per cent of the non-native essays as
      AI-generated, against a rate close to zero for the native-English
      essays.
  - q: "What happened to the Yale student who sued over a GPTZero flag?"
    a: >-
      A Yale School of Management student was referred to the university's
      Honor Committee after GPTZero flagged his exam, and was suspended for
      a year. He sued Yale in February 2025; a federal judge declined to
      order his reinstatement that May, and the case has continued through
      the courts since.
  - q: "Did anyone really test GPTZero on 100,000 texts?"
    a: >-
      A widely shared blog post from the AI-writing company Ryne carries
      that claim in its headline, but the post itself contains no
      description of such a test, no sample, and no results from one. It
      draws instead on genuine peer-reviewed research, which is the
      evidence this piece relies on rather than the unverified headline
      figure.
---

![Is GPTZero accurate? What the peer-reviewed research actually shows](/images/hero/2026-07-12-is-gptzero-accurate-100000-text-study.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>GPTZero advertises a false positive rate under one per cent, but a peer-reviewed 2023 study across 32 university courses at NYU Abu Dhabi found an 18 per cent false positive rate and a 32 per cent false negative rate on real student work.</li>
<li>A separate Stanford study in the journal Patterns found seven detectors, including GPTZero, flagged an average of 61 per cent of non-native English speakers' TOEFL essays as AI-generated, against close to zero for native-English essays.</li>
<li>A Yale School of Management student was suspended for a year after a GPTZero flag on his exam; he sued Yale in February 2025 and a federal judge declined to reinstate him that May.</li>
<li>A widely shared blog post claiming to have tested GPTZero on 100,000 texts contains no methodology or results for that specific claim; it draws instead on the peer-reviewed research summarised here.</li>
</ul></div>

GPTZero, the AI-detection tool now used by thousands of schools and universities, advertises a false positive rate under one per cent. Independent, peer-reviewed testing on real student writing puts the real figure much higher, and the gap between the marketing number and the research has already cost at least one student a year of his degree.

GPTZero and tools like it work by measuring perplexity, a rough proxy for how predictable a passage's word choices are. Text that reads as smooth and statistically ordinary gets flagged as likely machine-written, while more unusual phrasing reads as human. It is a plausible idea, and it has an obvious blind spot. Predictable, correct prose is also what a careful writer, or a non-native speaker who learned formal English from a textbook, produces on purpose.

## What the research actually found

The clearest test of that blind spot came from a 2023 study, *Perception, performance, and detectability of conversational AI across 32 university courses*, which ran GPTZero and other detectors against roughly 1,680 real exam and assignment submissions across eight disciplines at New York University Abu Dhabi. GPTZero's false positive rate on genuine student work came out at 18 per cent. Its false negative rate, missing text that actually was AI-generated, was 32 per cent. Run a machine-written answer through a paraphrasing tool like Quillbot first, and the study found GPTZero's false negative rate climbed to 95 per cent.

A separate 2023 study in the journal Patterns, by Stanford researchers Weixin Liang, Mert Yuksekgonul, Yanhong Mao, Eric Wu and James Zou, found a sharper problem still. Testing seven widely used detectors, GPTZero among them, on TOEFL essays from non-native English speakers against comparable essays from native-speaking US students, the researchers found the detectors flagged an average of 61 per cent of the non-native essays as AI-generated. The equivalent figure for the native-English essays was close to zero. Only two of the ninety-one TOEFL essays in the study escaped being flagged by at least one detector.

The cost of that gap is not abstract. A GPTZero flag on an unusually long, carefully formatted exam sent one Yale School of Management student to the university's Honor Committee. He denied using AI and submitted GPTZero scans of writing by Yale's own scholars, including a former university president, to show the tool flagged their prose too. The committee did not clear him. It suspended him for a year, on a charge of not being fully forthcoming during the investigation rather than the AI-use allegation itself, and a federal judge declined to order his reinstatement in May 2025. He had sued Yale that February, and the case has continued since.

## Why the gap matters

None of this means GPTZero catches nothing, or that AI-assisted cheating in universities is not real. Both the NYU Abu Dhabi study and the Stanford one confirm the tool identifies a meaningful share of genuinely AI-written text before any obfuscation is applied. The trouble is what a false positive rate in double figures means once a single tool's score is treated as evidence in a disciplinary hearing. An 18 per cent false positive rate applied across a large lecture course, or a 61 per cent rate applied to a cohort of international students, is not a rounding error. It is enough honest students accused, and enough of the wrong students disproportionately accused, that an institution leaning on a detection score alone is making a bet the evidence does not support.

A widely shared blog post from the AI-writing company Ryne carries the headline "We Ran 100,000+ Texts to Prove It." The post itself never says what those 100,000 texts were, how they were tested, or what the results were; read closely, it is a synthesis of the studies above, not a study of its own. That gap between a confident headline and the evidence behind it is worth naming on its own terms, because it echoes the exact failure the underlying research describes: a number presented as settled fact, with no way for a reader to check it.

What the research actually supports is a narrower claim than either GPTZero's marketing or Ryne's headline. Detection tools built on perplexity catch some AI writing and miss plenty more, and they are measurably worse at telling the difference for anyone who does not write like a native English speaker with an average vocabulary. Universities that keep using them will need to decide what a false accusation is worth, and be honest that a single score from a single tool has never been proof of anything on its own.
