---
title: "The Fundamental Rights Impact Assessment, Explained for Education"
description: "Article 27 requires a Fundamental Rights Impact Assessment before first use of high-risk AI. What it covers, who completes it, and how it relates to a DPIA."
date: 2026-07-21T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["ai-education", "policy", "eu-ai-act", "academic-integrity"]
source_url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689"
source_name: "EUR-Lex"
faq:
  - q: "What is a Fundamental Rights Impact Assessment (FRIA)?"
    a: >-
      A FRIA is the assessment Article 27 of the EU AI Act requires certain
      deployers to complete before putting a high-risk AI system into use. It
      documents how the system will be used, who it affects, what risks to
      fundamental rights that use creates, and what measures the deployer has
      put in place to address them.
  - q: "Who has to complete one?"
    a: >-
      Deployers, meaning the organisation actually using the system rather
      than the vendor that built it, and specifically deployers who are bodies
      governed by public law, private operators providing public services, or
      deployers of the high-risk systems Annex III lists for credit scoring
      and insurance risk assessment. Most universities and schools using
      Annex III education systems, such as admissions, assessment or exam
      monitoring tools, fall into that population as bodies providing a public
      or publicly-regulated service.
  - q: "When does the FRIA need to be done?"
    a: >-
      Before the first use of the high-risk system, not retrospectively.
      Article 27 frames it as a pre-deployment step, so a system already
      running without one needs the assessment completed as soon as
      practicable rather than treated as optional going forward.
  - q: "How is a FRIA different from a Data Protection Impact Assessment (DPIA)?"
    a: >-
      A DPIA, required under GDPR for high-risk data processing, focuses on
      data protection and privacy risk. A FRIA has a wider lens, covering
      fundamental rights more broadly, including non-discrimination and access
      to education, not only data handling. Where a DPIA already exists for
      the same system, Article 27 provides for the FRIA to complement that
      existing assessment rather than duplicate it.
  - q: "What does a sensible education FRIA actually cover?"
    a: >-
      In practice: a plain description of the system and its intended
      education use, the categories of people affected and any groups at
      particular risk of disadvantage, the specific rights at stake such as
      non-discrimination and access to education, the human-oversight
      arrangements in place, and the concrete steps taken to mitigate the
      risks identified, all documented well enough to stand up to later
      review.
---

![The Fundamental Rights Impact Assessment, Explained for Education](/images/hero/2026-07-17-fria-explainer-education.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Article 27 of the EU AI Act requires certain deployers, including most public-sector and publicly-regulated education institutions, to complete a Fundamental Rights Impact Assessment before first using a high-risk AI system.</li>
<li>A FRIA is broader than a Data Protection Impact Assessment, covering fundamental rights generally rather than data protection alone, though where a DPIA already covers part of the ground, Article 27 lets the FRIA complement it rather than start again.</li>
<li>The assessment is a pre-deployment step, not a retrospective one, though systems already running without one need the work completed rather than skipped.</li>
<li>A working education FRIA covers the system's purpose, who it affects, the specific rights at stake, the human-oversight arrangements, and the concrete steps taken to address identified risks.</li>
</ul></div>

Our [assessment of the EU AI Act's impact on education](/reports/eu-ai-act-education-assessment/) mentions the Fundamental Rights Impact Assessment as one of the deployer duties attached to high-risk systems. It deserves a fuller treatment on its own, because it is one of the more concrete pieces of paperwork the Act actually asks institutions to produce, and one that education providers are well placed to get right if they start from the process they likely already run for data protection.

## What Article 27 requires

Article 27 of [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689) requires certain deployers of high-risk AI systems to carry out an assessment of the impact on fundamental rights that use of the system may produce, before putting that system into use for the first time. The obligation sits with the deployer, meaning the organisation actually using the system in its own operations, not the vendor that built it. A university running an AI-based admissions tool or exam-monitoring system is the deployer for that system; the EdTech company that sold it is the provider, with its own separate obligations under Chapter III.

Article 27's own text confines the obligation to a specific population of deployers: bodies governed by public law, private entities providing public services, and deployers of the Annex III systems used for credit scoring or insurance risk assessment. Most universities and schools sit inside that population, either directly as public bodies or as private institutions providing what is, functionally, a publicly-regulated education service, which is why the obligation reaches so much of the sector rather than a narrow slice of it.

## What actually goes in one

Article 27 itself lists the substance a FRIA needs to cover, and the list reads less like a checkbox exercise and more like a structured, honest accounting of what a system does and to whom. A working assessment needs a clear description of the deployer's processes in which the system will be used, matched to its intended purpose. It needs the period of time and frequency the system is intended to be used for. It needs the categories of natural persons and groups likely to be affected by the specific use, which in an education context means naming the actual population, prospective applicants, enrolled students, a particular year group, rather than describing them in the abstract. It needs the specific risks of harm likely to affect those categories, and the human-oversight measures put in place according to the instructions for use. It also needs the measures to be taken in the case those risks materialise, including internal governance and complaint mechanisms.

For an admissions system, that means naming the specific groups who could be disadvantaged by biased training data and setting out what checks exist to catch it. For an exam-monitoring or detection tool, it means confronting the false-positive question directly rather than leaving it implicit: which students are more likely to be wrongly flagged, and what stands between a flag and a misconduct finding. A FRIA that describes the system's intended purpose in glowing terms without naming who could be harmed by its failure modes has not really done the job the Article asks for.

## Before first use, not after

The Act frames the FRIA as a pre-deployment requirement: the assessment happens before the system is put into use, not as a retrospective justification once it is already running. That timing matters practically. An institution already using an Annex III system, an admissions ranking tool, an AI-based grading system, an exam-monitoring product, without having completed a FRIA has a live gap rather than a completed obligation to note for the file. The sensible response is to complete the assessment now, treating the system as if it were about to go live, rather than waiting for a natural pause point that may not arrive on its own.

## How it sits alongside a DPIA

Education institutions are not starting from nothing here. Most have already run Data Protection Impact Assessments under GDPR for systems that process significant personal data, and a FRIA covers overlapping but not identical ground. A DPIA's lens is data protection and privacy risk specifically: what data is collected, how it is processed, what safeguards protect it. A FRIA's lens is fundamental rights more broadly, which includes data protection but also reaches non-discrimination, access to education, and other rights a system might affect even where the data-handling itself is unremarkable.

Article 27 recognises the overlap directly: where any of its requirements are already met through an existing DPIA, the FRIA complements that assessment rather than duplicating it. In practice, that means the most efficient route for most institutions is to extend an existing DPIA framework and template with the additional fundamental-rights questions a FRIA requires, rather than building a second, parallel assessment process. An institution's data protection team and its AI governance lead working from the same document, rather than two disconnected ones, is the shape that tends to produce a genuinely useful assessment rather than two thinner ones.

## Where this fits alongside everything else

A FRIA is one piece of a wider compliance picture, not a substitute for the rest of it. It sits alongside the Article 4 literacy duty already in force, the accuracy and human-oversight obligations that apply to detection and proctoring tools specifically, which [our companion piece on high-risk detection systems](/blog/2026-07-17-ai-detectors-high-risk-eu-ai-act/) covers, and the scope question UK institutions in particular need to settle first, set out in [our piece on the Act's reach into UK universities](/blog/2026-07-17-eu-ai-act-uk-universities-scope/). For the fuller regulatory picture the FRIA sits inside, [our EU AI Act education assessment](/reports/eu-ai-act-education-assessment/) remains the starting point, and our forthcoming [comparative look at how top universities are regulating generative AI](/reports/how-top-universities-regulate-generative-ai/) will set institutional FRIA practice against the wider landscape of institutional AI governance once published.

The honest summary is that a FRIA is not a hurdle designed to slow institutions down. It is closer to due diligence made explicit: name who a system affects, name what could go wrong for them, and write down what stands in the way of that happening. Institutions already running a rigorous DPIA process have most of the muscle memory this needs. What remains is widening the lens from data protection to fundamental rights, and doing the work before the system goes live rather than after.
