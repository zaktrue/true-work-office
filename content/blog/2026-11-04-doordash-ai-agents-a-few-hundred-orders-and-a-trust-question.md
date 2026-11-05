---
title: "DoorDash AI agents: a few hundred orders, and a trust question"
description: "DoorDash's chief executive said external AI agents generated only a few hundred orders in a quarter of nearly a billion, with access still restricted to beta partners."
date: 2026-11-05T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "openclaw-product"]
source_url: "https://arstechnica.com/ai/2026/10/doordash-says-outside-ai-agents-have-only-led-to-hundreds-of-orders-so-far/"
source_name: "Ars Technica"
structure: "milestone_release"
faq:
  - q: "How many DoorDash orders came through third-party AI agents?"
    a: >-
      A few hundred, according to chief executive Tony Xu, against roughly a
      billion orders handled in the third quarter.
  - q: "Why is the figure difficult to interpret?"
    a: >-
      Access is limited to a small group of beta partners testing corporate
      lunch orders, so the number reflects the restricted rollout as much as
      consumer demand.
---

![DoorDash AI agents: a few hundred orders, and a trust question](/images/hero/2026-11-04-doordash-ai-agents-a-few-hundred-orders-and-a-trust-question.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>DoorDash opened a Model Context Protocol connector to a small set of early beta partners, mainly for corporate lunch orders.</li>
<li>Chief executive Tony Xu said third-party AI agents accounted for a few hundred orders against roughly a billion in the quarter.</li>
<li>The connector gives outside agents a standardised route into the platform, where previously they relied on web interfaces.</li>
<li>Figures disclosed to investors record what a company is prepared to count, not how often agent-mediated orders fail or are disputed.</li>
</ul></div>

DoorDash has opened a Model Context Protocol connector to a small set of early beta partners, most of them testing corporate lunch orders. An AI that can order food is the least interesting part. What matters is that an outside agent now has a permissioned, machine-readable route into the platform, rather than having to drive the consumer web interface like a person with a browser.

Volume through that route is small. On the company's third-quarter earnings call, co-founder and chief executive Tony Xu, as [reported from the earnings call](https://arstechnica.com/ai/2026/10/doordash-says-outside-ai-agents-have-only-led-to-hundreds-of-orders-so-far/), put third-party agent orders in the hundreds against roughly a billion orders handled in the quarter. He described the pattern as a very low use case. That figure carries a caveat the disclosure does not supply. If access is confined to a handful of beta partners in one ordering category, it measures the width of the gate rather than the appetite behind it.

## Why the route matters more than the count

An agent that scrapes a website looks, at the merchant's end, exactly like a customer. There is no declared intent and no structured order. There is also nobody obvious to hold when something goes wrong. A protocol connector makes the agent a known counterparty, and that turns uptake into a question about accountability before it becomes one about growth. Who confirms a substituted item, who absorbs a duplicate charge, what a merchant sees when an automated buyer behaves badly: those questions have answers only if the route carries identity and an audit trail.

The evidence problem sits underneath the number. Figures offered to investors are disclosure rather than telemetry. They record what a company is prepared to count. Customers and merchants have no comparable view of how often agent-mediated orders fail, get disputed, or stop halfway.

Something similar runs through academic work, where a delegated tool produces an artefact that will carry a person's name. There the measure that matters is not the volume of assistance. It is whether the person signing off can describe the delegation afterwards, accurately and in detail.

## What would need to be true

Agents would have to earn their place on the considered purchases Xu points towards, where a background process genuinely helps rather than a faster tap. Merchants would need a workable way to recognise an agent acting on someone's behalf, and to challenge it. And the customer's time would have to fall in a way they can verify, rather than shifting effort into supervision. A restricted beta cannot settle any of that. Neither can a number volunteered on an earnings call.
