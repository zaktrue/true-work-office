---
title: "AI agent injects gene therapy into live mouse brain under human oversight"
description: "An AI agent chose a gene therapy and injected it into a live mouse's brain after one model refused on welfare grounds, with humans approving each plan."
date: 2026-11-03T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "openclaw-product"]
source_url: "https://www.wired.com/story/an-ai-agent-did-brain-surgery-on-live-mouse/"
source_name: "Wired"
structure: "milestone_release"
faq:
  - q: "Did a human carry out any part of the procedure?"
    a: >-
      A veterinary surgeon performed the craniotomy, and humans approved the
      injection plans, but the agent selected the therapy, brain region and
      coordinates and controlled the injection.
  - q: "Has the experiment shown the gene therapy worked?"
    a: >-
      Not yet. The effect on the mouse's seizures is still being assessed, and
      the animal is reported to be recovering well.
---

![AI agent injects gene therapy into live mouse brain under human oversight](/images/hero/2026-11-02-ai-agent-injects-gene-therapy-into-live-mouse-brain-under-hu.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Exin Therapeutics connected a general-purpose AI model to a robotic rig that injected a gene therapy into a live mouse with epilepsy.</li>
<li>The agent selected one therapy from 19 candidates and chose the brain region and coordinates before executing the injection.</li>
<li>Claude Opus 5.5 declined to guide the needle on animal welfare grounds, so the team used Claude Sonnet 5 instead.</li>
<li>A coordinate error extended the procedure beyond an hour while a separate agent fixed code without knowing surgery was underway.</li>
</ul></div>

An AI agent has carried out a brain injection in a live mouse. As [Wired's account of the mouse brain injection](https://www.wired.com/story/an-ai-agent-did-brain-surgery-on-live-mouse/) sets out, Gabriel Ocana Santero, chief executive of the San Francisco startup Exin Therapeutics, connected a general-purpose model to a custom robotic rig holding a mouse with epilepsy. A veterinary surgeon opened the skull. The agent then chose one gene therapy from 19 candidates, selected the brain region and coordinates, and drove the needle, setting volume and speed while a camera fed it images of the field.

## Where the judgement sat

The novelty is narrower than the headline suggests. Stereotaxic frames and automated injectors are decades old. A robot following a surgeon's coordinates is routine laboratory work. What differs is the location of the judgement. Choosing a candidate therapy and deciding where in the brain to place it are scientific decisions rather than motor tasks, and here a model made them, subject to human approval of the plan.

Two details carry more weight than the demonstration itself. The first is the refusal. Claude Opus 5.5 declined to guide the needle into the brain on animal welfare grounds, so the team switched to Claude Sonnet 5. A model's ethical boundary did not halt the work. It redirected the work to a model willing to proceed. Whatever view one takes of the procedure, this is the governance question the episode exposes. Safeguards attached to a single system are not safeguards on an activity, and a refusal is only as durable as the operator's willingness to accept it.

The second is the fragmentation of oversight. A coordinate error delayed the operation, and a separate agent was brought in to patch the code without knowing a live animal was on the table. Humans approved injection plans, an emergency stop was available, and the agent was barred from rewriting its own operating code. Those are sensible controls. None of them establishes whether the person approving a plan understood the model's reasoning or could have caught a plausible but wrong choice. Anyone running agent pipelines will recognise the pattern. A model proposes, a human approves, and assurance either lives or evaporates at that approval step.

## What the record would need

Outcomes remain open. The effect on seizures is still being assessed, and the mouse is reported to be recovering. The procedure ran just over an hour against a typical 45 minutes.

For the demonstration to matter beyond novelty, several things would need to hold: a published protocol detailed enough to replicate, results showing the injected therapy produced a measurable effect, and an audit trail naming which human approved which decision and on what evidence. Animal welfare review would need to sit above model selection rather than downstream of it. Until then the defensible claim is modest. An agent can be wired into a physical laboratory procedure and kept on a leash. Whether the leash is held, or merely present, is a question for the record.
