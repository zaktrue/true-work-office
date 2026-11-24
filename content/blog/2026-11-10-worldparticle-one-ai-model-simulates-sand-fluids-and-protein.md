---
title: "WorldParticle: one AI model simulates sand, fluids and proteins"
description: "A single deep-learning model from MIT and collaborators simulates six physical phenomena as particles, reporting faster and more accurate results than numerical solvers."
date: 2026-11-24T15:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "genai"]
source_url: "https://news.mit.edu/2026/single-ai-model-simulates-many-substances-behavior-1109"
source_name: "MIT News"
editorial_review_schedule_utc: "2026-11-24T15:00:00Z"
editorial_review_approved_by: "Thomas"
review_item_id: "blog-20261110T131745-78c206"
structure: "news_unpack"
faq:
  - q: "What is WorldParticle?"
    a: >-
      It is a deep-learning system that represents every material as particles
      and predicts their positions one second at a time, rather than solving
      governing equations with a specialised solver.
  - q: "Has the accuracy claim been tested beyond the demonstrations?"
    a: >-
      The reported results cover six demonstrated phenomena, and the account
      notes that the accuracy claim will need to hold in conditions the model
      has not seen.
---

![WorldParticle: one AI model simulates sand, fluids and proteins](/images/hero/2026-11-10-worldparticle-one-ai-model-simulates-sand-fluids-and-protein.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>WorldParticle is a single deep-learning system that simulates sand, fluids, deformable objects and folding proteins as particles.</li>
<li>The researchers report accuracy above numerical methods across six demonstrations at roughly a hundred times the speed.</li>
<li>External forces are separated before each prediction step and reintegrated afterwards, the mechanism credited with generalising to unseen conditions.</li>
<li>A particle-merging routine keeps the computation tractable while retaining fine detail.</li>
</ul></div>

Researchers at MIT, the University of British Columbia and collaborating institutions have built one deep-learning system, WorldParticle, that simulates materials as different as sand, flowing water, deformable objects and folding proteins. Peter Yichen Chen, a former MIT postdoc, and MIT postdoc Minghao Guo led the work, which is to be presented at ACM SIGGRAPH Asia.

The long-standing arrangement in computational physics is one solver per problem. A scientist modelling a river reaches for a tool built for fluids. One modelling a protein reaches for another, built for the way a chain folds. [MIT News's account of the unified simulator](https://news.mit.edu/2026/single-ai-model-simulates-many-substances-behavior-1109) describes a system that abandons that division. Every material becomes particles, tracked by position and velocity, and a neural network predicts where those particles will sit one second later. It learns the dynamics rather than being handed the governing equations. Across six demonstrations, spanning granular materials, deformable objects and proteins, the researchers report accuracy above numerical methods at roughly a hundred times the speed.

Two details in the design carry more weight than the headline figure. External forces are separated out before each prediction step and reintegrated afterwards, the mechanism credited with generalising to unseen materials, conditions and forces. A particle-merging routine keeps the computation tractable while retaining fine detail. That is the sort of engineering compromise which decides whether a method survives contact with real problems.

The public-interest question here is trust rather than speed. A network that infers dynamics from examples carries no built-in guarantee that it conserves mass, momentum or energy. The force-splitting correction reads as an acknowledgement of that gap, not a closing of it. Six phenomena make a demonstration set, not a survey of physical regimes, and the accuracy claim will need to hold in conditions the model has not seen before anyone leans on it for materials design or protein work.

For teaching, the shift is quieter. If one learned model can stand in for a shelf of hand-coded solvers, the skill that counts moves from choosing the right numerical tool towards judging whether a prediction is physically plausible at all. That is harder to teach and to examine, and considerably easier to fake.

Whether a simulator that never writes down the equations can be trusted where the answer is genuinely unknown remains an open question.
