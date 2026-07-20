---
title: "High-Risk by Classification: What the EU AI Act Actually Asks of Detection Tools"
description: "AI-text detectors and proctoring sit in the EU AI Act's high-risk category. What accuracy and human-oversight duties mean for tools with known false positives."
date: 2026-07-20T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["ai-education", "policy", "eu-ai-act", "academic-integrity"]
source_url: "https://www.thesify.ai/blog/generative-ai-policies-top-universities-2026"
source_name: "Thesify"
faq:
  - q: "Does 'high-risk' under the EU AI Act mean AI detectors are banned?"
    a: >-
      No. High-risk is a category of obligation, not a prohibition. Annex III,
      category 3 of the Act lists 'monitoring and detecting prohibited
      behaviour of persons during tests' as high-risk, which brings a set of
      duties around accuracy, robustness, data governance and human oversight
      rather than a ban on the tool itself.
  - q: "What is the difference between a provider's duties and a deployer's duties?"
    a: >-
      The provider, usually the vendor building the detection or proctoring
      tool, has to run a risk-management process, use representative training
      data, keep technical documentation and logs, and design the system for
      transparency and human oversight. The deployer, typically the university
      or school using it, has to run it as instructed, keep a competent human
      able to intervene, monitor its operation and, for Annex III systems,
      complete a Fundamental Rights Impact Assessment before first use.
  - q: "Why does the accuracy requirement matter specifically for AI-text detectors?"
    a: >-
      Article 15 requires appropriate accuracy and robustness for the system's
      intended purpose. Detectors with documented high false-positive rates
      have a harder case to make that they meet that bar when the stakes are
      an academic misconduct finding, which is precisely the kind of
      real-world use the requirement is meant to test against.
  - q: "Does the Act give students a right to challenge a detector's finding?"
    a: >-
      No. The Act requires deployers to keep a human able to review and
      intervene in high-risk decisions, but it does not create an individual,
      GDPR-style right for a student to challenge an AI-assisted decision
      directly. Institutional complaint and appeal procedures remain the route
      available to students.
  - q: "What should a university ask its detection vendor?"
    a: >-
      Concrete evidence rather than reassurance: published accuracy and
      false-positive figures across different student populations and writing
      styles, what the human-oversight workflow looks like in practice, what
      technical documentation the vendor can hand over for the institution's
      own compliance file, and whether the vendor has run or supports a
      Fundamental Rights Impact Assessment.
---

![High-Risk by Classification: What the EU AI Act Actually Asks of Detection Tools](/images/hero/2026-07-17-ai-detectors-high-risk-eu-ai-act.png)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Annex III, category 3 of the EU AI Act classifies AI systems that monitor and detect prohibited behaviour during tests, including AI-text detectors and proctoring tools, as high-risk, not banned.</li>
<li>High-risk status brings accuracy, robustness, data-governance and human-oversight duties that split between the vendor (provider) and the institution using the tool (deployer).</li>
<li>Detectors with documented high false-positive rates face a genuine test under Article 15's accuracy requirement, and Article 14's human-oversight duty means a purely automated flag is not enough on its own.</li>
<li>The Act does not give students an individual right to challenge a detector's finding; institutional appeal processes remain the mechanism, not a statutory redress right.</li>
</ul></div>

Our [assessment of the EU AI Act's impact on education](/reports/eu-ai-act-education-assessment/) sets out the high-risk classification in outline, alongside the literacy duty and the Digital Omnibus deadline shift. This piece stays with one part of that picture and goes further into it: what "high-risk" concretely requires of the AI-text detectors and proctoring systems universities already have running, and what that leaves for institutions to check for themselves.

## The classification, precisely

Annex III, category 3 of [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689) lists education-specific high-risk use cases: determining access or admission to education, evaluating learning outcomes, assessing the appropriate level of education for a person, and, in the phrase that matters most here, "monitoring and detecting prohibited behaviour of persons during tests." That last category reaches both the older generation of proctoring tools, webcam monitoring, browser lockdown, eye tracking, and the newer class of AI-text detectors that scan submitted work for signs of AI generation.

High-risk status triggers Chapter III of the Act, a set of obligations that runs from the system's design through to how it is used day to day. It does not ban the practice it applies to. A grading engine, an admissions ranking tool and a plagiarism detector all sit inside this category alongside detection and proctoring software, and all of them can keep operating provided the obligations are met.

## What providers have to do

The provider, ordinarily the company selling the detection or proctoring product, carries most of the technical obligations. Article 9 requires a risk-management process across the system's lifecycle rather than a one-off check before launch. Article 10 requires that training and validation data be relevant, representative and free of the kind of errors that could produce discriminatory outcomes, a meaningful bar for a detector trained predominantly on one style, language variety or student population and then sold for use across a far more varied one. Article 11 requires technical documentation, Article 12 requires automatic logging, Article 13 requires the system to be designed transparently enough that a deployer can actually understand how it reaches an output, and Article 14 requires the system to be designed so a human can exercise effective oversight over it, not merely receive its output as a fait accompli.

Article 15 is the one with the most direct bearing on detection specifically: the system has to achieve accuracy, robustness and cybersecurity appropriate to its intended purpose. For a tool whose intended purpose is flagging a student for academic misconduct, "appropriate" is not a low bar, and it is measured against real-world performance rather than a vendor's marketing claims. This is where the pattern our own reporting has tracked becomes legally relevant rather than merely a source of frustration: [we have written before about how often detection tools flag honest students](/blog/2026-07-08-ai-detection-tools-flag-honest-students-at-scale/), and a documented false-positive problem is precisely the evidence an accuracy requirement is designed to weigh against a product's continued high-risk use.

## What deployers, meaning the institution, have to do

Universities and schools are deployers under the Act, and deployer duties are separate from, and additional to, whatever the vendor has done. Under Articles 26 and 27, a deployer has to use the system in accordance with the provider's instructions rather than repurpose it, ensure human oversight by staff who are actually competent to exercise it rather than a name on a policy document, monitor how the system is operating in practice, and keep the required logs. For Annex III systems specifically, the deployer additionally has to complete a Fundamental Rights Impact Assessment before first use, a step our companion explainer on that process covers in full.

Human oversight is worth dwelling on, because it is doing real work here rather than functioning as a formality. Article 14 requires the system to be designed so a human can genuinely intervene before a high-risk decision takes effect, not simply review a decision after the fact with limited practical ability to reverse it. A detection flag that routes straight into an academic misconduct process, with a human signing off in name only, sits uncomfortably with what the obligation asks for. A workflow where a trained reviewer genuinely examines the flagged submission, has the authority and the practical means to dismiss a false positive, and documents that review, sits much closer to it.

## Provider and deployer duties are not interchangeable

[Thesify's 2026 survey of generative-AI policies at the world's top universities](https://www.thesify.ai/blog/generative-ai-policies-top-universities-2026) found that institutions are already leaning away from relying on automated detectors alone, favouring permission, disclosure and human-accountability frameworks instead, a shift that lines up closely with what the accuracy and oversight duties above actually ask for. One of the more common confusions in how institutions read this part of the Act is treating "the vendor is high-risk compliant" as covering the university's own obligations. It does not. A provider's conformity assessment, technical documentation and CE marking address the provider's side of Chapter III. The deployer's duties, running the system correctly, maintaining human oversight, completing a FRIA, monitoring operation, sit with the institution regardless of what the vendor has done. A university that buys a compliant tool and then runs it without a genuine oversight workflow has not discharged its own obligations by relying on the vendor's paperwork.

That distinction is what a procurement conversation needs to surface early. A university evaluating a detection vendor should be asking for published accuracy and false-positive figures across different student populations and writing styles rather than a single headline accuracy number, a concrete description of what the human-oversight workflow looks like once a flag is raised, the technical documentation the vendor can hand over for the institution's own compliance file, and whether the vendor has run or will support a Fundamental Rights Impact Assessment for the deployment. None of that is exotic. It is the ordinary due diligence a high-risk classification is designed to force into the open.

## What the Act does not give students

It is worth being precise about a limit here, because it is easy to overstate. The Act's human-oversight and transparency duties are aimed at the institution's process, not at creating a new individual right. Students do not gain a GDPR-style statutory right to challenge an AI-assisted decision directly under the Act itself; that avenue remains institutional complaint and appeal procedures, whatever those already provide. The regulatory pressure here falls on the university to build a genuine, documented human check into the process, not on handing students a new legal lever against the outcome.

For the wider regulatory picture this classification sits inside, [our EU AI Act education assessment](/reports/eu-ai-act-education-assessment/) covers the literacy duty and the deadline timetable; for the emotion-recognition prohibition that sits alongside it as a separate, earlier-applying rule, see our [piece on the ban affecting engagement-detection tools](/blog/2026-07-17-eu-ai-act-emotion-recognition-ban-education/); and for how the detection landscape itself has moved through 2026, [our arms-race update](/blog/2026-07-12-ai-writing-detection-arms-race-mid-2026/) tracks the technology side of the same story.
