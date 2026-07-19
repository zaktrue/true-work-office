---
title: "The EU AI Act and the Classroom: What Changes for Assessment and Detection"
description: "The EU AI Act treats exam monitoring and grading as high-risk, and the literacy duty is already live. What that means for assessment and AI detection tools."
date: 2026-07-16T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["reports"]
tags: ["ai-education", "policy", "eu-ai-act", "academic-integrity", "featured"]
faq:
  - q: "Does the EU AI Act ban AI detection tools or exam proctoring software?"
    a: >-
      No. It does not ban AI-text detectors or proctoring systems. It classifies
      "monitoring and detecting prohibited behaviour of persons during tests" as
      high-risk under Annex III, which means the tool has to meet accuracy,
      robustness and human-oversight requirements rather than run unchecked.
  - q: "When did the AI literacy duty (Article 4) start applying?"
    a: >-
      Article 4 has applied since 2 February 2025. It requires providers and
      deployers of any AI system, not only high-risk ones, to ensure staff who
      operate it have sufficient understanding of what it does and where it can
      go wrong. National supervision arrangements catch up in August 2026, but
      the underlying duty has been live for well over a year.
  - q: "Is emotion-recognition software banned in schools and universities?"
    a: >-
      Yes, since 2 February 2025. Article 5 prohibits AI systems that infer a
      person's emotions from biometric data in education and training
      institutions, with narrow medical or safety exceptions. That closes off a
      category of "engagement" or "confusion" detection some proctoring and
      learning-analytics vendors had been piloting.
  - q: "Has the December 2027 deadline made the Act less urgent?"
    a: >-
      No, and the analysts who cover this closely are blunt about it: a
      reprieve, not a pass. The Digital Omnibus pushed the deadline for
      standalone high-risk systems from August 2026 to 2 December 2027, but the
      substance of the obligations did not change, and some duties, including
      the literacy requirement and transparency rules landing from August 2026,
      arrive well before that date.
  - q: "Does this apply to UK universities that are not based in the EU?"
    a: >-
      It can. The Act reaches providers and deployers outside the EU whose AI
      systems affect people located in the EU, so a UK institution assessing or
      admitting EU-based students, or processing their data through an AI
      system, can fall within scope even without an EU campus.
  - q: "What should an institution actually do before the 2027 deadline?"
    a: >-
      Start with an honest inventory: which systems touch admissions,
      assessment, or exam monitoring, and which of those count as high-risk.
      From there, a defensible programme rests on a handful of evidence-based
      elements covering training, documentation and named oversight, built now
      rather than assembled in a rush closer to December 2027.
---

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>The EU AI Act classifies AI used for admissions, grading and exam monitoring as high-risk under Annex III, category 3, which brings a full set of obligations around data governance, human oversight, accuracy and documentation.</li>
<li>Article 4's AI literacy duty has applied since 2 February 2025 and binds every institution using AI, not just the high-risk cases; most programmes built around the ChatGPT moment of 2023 were not designed with this obligation in mind.</li>
<li>Article 5 has already banned emotion-recognition AI in education settings, and Article 50's transparency duties land from 2 August 2026, pointing institutions towards disclosure as the safer default.</li>
<li>The Digital Omnibus has pushed the main high-risk compliance deadline to 2 December 2027, described by analysts as "a reprieve, not a pass". UK and other non-EU institutions with EU students or EU data are not automatically exempt.</li>
</ul></div>

## A regulation built for exam halls, not just data centres

Most coverage of the EU AI Act treats it as a story about large technology companies and general-purpose models. For anyone working in assessment or academic integrity, that framing misses the point. [Regulation (EU) 2024/1689](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689), the AI Act, names education directly. The [European Commission's own description](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai) of high-risk AI includes systems used in education that "may determine the access to education and course of someone's professional life", giving the scoring of exams as its example.

Under Annex III, category 3 of the Act, that reaches further than exam scoring alone. It covers systems used to determine admission to education or training, evaluate learning outcomes, decide the appropriate level of education for a person, and, in a phrase that will land squarely with anyone who has followed the detection-tool debate, "monitoring and detecting prohibited behaviour of persons during tests." Grading engines, adaptive learning platforms that steer a student's path, and exam-proctoring software that flags suspicious behaviour all sit inside that category, alongside admissions algorithms.

High-risk status does not mean banned. It means the provider has to build the system with a risk-management process, representative and error-checked training data, technical documentation, logging, human oversight and tested accuracy and robustness, and the institution using it has to run it as instructed, keep a human able to intervene, and (for Annex III systems) complete a Fundamental Rights Impact Assessment before first use. For an AI-text detector or a proctoring tool with a known false-positive problem, that accuracy and human-oversight bar is not a formality. [We have written before](/blog/2026-07-08-ai-detection-tools-flag-honest-students-at-scale/) about how often these tools flag honest students, and [followed the arms race between detectors and AI writing since](/blog/2026-07-12-ai-writing-detection-arms-race-mid-2026/). The Act gives that pattern a legal shape: a detection system that cannot demonstrate reliable accuracy across a real student population, and that leaves no meaningful room for a human to catch its mistakes, is not obviously defensible under Chapter III, whatever the marketing copy says.

## The duty almost nobody is watching: Article 4

If the high-risk classification is the headline, Article 4 is the obligation institutions are most likely to be quietly behind on. It has applied since 2 February 2025, among the very first provisions of the Act to take effect, and it binds every provider and deployer of any AI system, not only the high-risk ones. In plain terms: if a school or university uses AI anywhere, staff operating it need a level of understanding matched to their role and to what the tool actually does.

There is no single mandated course or certificate. [RegulatoryAI.eu's explainer](https://www.regulatoryai.eu/article-4-explained/) is clear that the standard is contextual rather than prescriptive, which is easy to read as low-stakes and is not. Regulators look for evidence, not good intentions, and a defensible literacy programme tends to share a handful of features in common: it starts from a real inventory of the AI tools in use, calibrates training to role and risk rather than issuing one course to everyone, reaches contractors as well as staff, keeps dated records of who was trained on what, and refreshes when a tool or a role changes. Institutions that built their 2023 and 2024 AI guidance around the arrival of ChatGPT, rather than as a structured compliance exercise, are the ones most likely to find gaps here. National supervision arrangements catch up from August 2026, but the underlying duty itself is not a future obligation. It is a current one.

## What gets closed off, and what gets asked for

Article 5 sits alongside Article 4 as one of the earliest-applying parts of the Act, in force since the same date. It bans a specific list of practices, and one is squarely aimed at education: AI systems that infer a person's emotions from biometric data are prohibited in workplaces and in education and training institutions, with only narrow exceptions for approved medical or safety uses. That closes the door on a category of "student engagement" or "confusion detection" analytics that some proctoring and learning-platform vendors had begun piloting through facial expression or keystroke analysis, on the basis that the underlying science does not reliably support it. [Our closer look at the emotion-recognition ban](/blog/2026-07-17-eu-ai-act-emotion-recognition-ban-education/) covers what those tools claimed to do and what institutions with one already deployed should consider.

Article 50 works in a different direction, adding disclosure rather than removing a practice. Its transparency duties, which apply from 2 August 2026, require that people are told when they are interacting with an AI system, among other specific cases. The Act does not turn every AI-assisted marking decision into a mandatory disclosure event, but the direction of travel is unmistakable: institutions that treat disclosure as the safe default, telling students plainly when an AI tool has played a part in feedback or grading, are moving with the regulation rather than waiting to be told they were on the wrong side of it.

<figure>
  <img src="/images/reports/eu-ai-act-education-ai-literacy-figure.png" alt="AI literacy framework diagram titled From Policy to Classroom Practice, showing four domains of AI competence with enablers including teacher training, process-based assessment redesign and policy, leading to responsible classroom use with human judgement central" loading="lazy" width="1024" height="1536">
  <figcaption>An AI literacy framework of the kind institutions need to evidence under Article 4: role-based training, documentation and named oversight, feeding into everyday classroom and assessment practice. Diagram produced by the True Work Office team.</figcaption>
</figure>

## A reprieve, not a pass

The most-cited recent development is the Digital Omnibus, a Commission package that has pushed the compliance deadline for standalone high-risk Annex III systems from August 2026 to 2 December 2027, following political agreement between Council and Parliament negotiators and formal adoption through the first half of 2026 (see the [Council's press release](https://www.consilium.europa.eu/en/press/press-releases/2026/05/07/artificial-intelligence-council-and-parliament-agree-to-simplify-and-streamline-rules/) on the agreement). [Kiteworks' analysis](https://www.kiteworks.com/regulatory-compliance/eu-ai-act-extension-deadline/) calls the extension "a reprieve, not a pass", and [Uniwise's assessment for assessment providers](https://uniwise.eu/resources/blog/the-eu-ai-act-and-assessment-december-2027-is-not-a-snooze-button) makes the same point from the university side: the substance of the obligations has not moved, only the date.

What that produces is closer to a staircase than a single cliff-edge. The Article 4 literacy duty and the Article 5 prohibitions have applied since February 2025. Article 50's transparency duties land in August 2026. The full Chapter III regime for high-risk assessment, admissions and monitoring systems, including the Fundamental Rights Impact Assessment, arrives on 2 December 2027. [Ogletree's rundown of the amendment](https://ogletree.com/insights-resources/blog-posts/eu-ai-act-amended-parliament-votes-to-delay-key-deadlines/) treats the later date as breathing room for a Commission that was not ready to receive the expected volume of conformity assessments, not as a signal that the underlying risk concerns have eased. Institutions that read December 2027 as permission to wait will reach it no better prepared than they would have been at the original deadline.

## A UK footnote that is not really a footnote

The UK has not passed an AI Act of its own, relying instead on existing regulators applying general principles within their own sectors. That does not put UK institutions outside this story. The Act's extraterritorial reach, under Article 2(1)(c), catches providers and deployers outside the EU whose systems affect people located in the EU. A UK university admitting or assessing EU-based students, or running AI over their data, can find itself inside the Act's scope regardless of where its servers sit. For institutions weighing whether this is someone else's compliance problem, that is the detail worth checking first. [We unpack the UK position separately](/blog/2026-07-17-eu-ai-act-uk-universities-scope/), scenario by scenario.

## The practical shape of a response

None of this points towards abandoning AI detection or automated marking outright. It points towards the same conclusion our own detection-arms-race reporting keeps arriving at: technology alone was never going to carry the weight of academic integrity, and the regulatory direction now agrees. Systems with real accuracy problems and no meaningful human check are the ones most exposed under Chapter III. Process-based responses, where AI use is declared, oversight is documented, and a named person can actually intervene, sit far more comfortably with what the Act asks for. Our [earlier report on turning AI literacy frameworks into classroom practice](/reports/ai-literacy-framework-classroom-practice/) covers the training side of that in more depth; Article 4 is the legal expression of the same idea, that literacy has to be built deliberately rather than assumed. For how leading institutions are handling the policy side in practice, see [our survey-based report on how top universities regulate generative AI](/reports/how-top-universities-regulate-generative-ai/), and for the impact-assessment duty itself, [our FRIA explainer for education](/blog/2026-07-17-fria-explainer-education/).

The honest summary is that the clock did not stop when the December 2027 date appeared. Two obligations that matter most to assessment and integrity work, literacy and the ban on emotion-inferring proctoring, are already live and have been for over a year. What the extension bought institutions is time to build the rest properly, not a reason to leave it until the deadline is close.
