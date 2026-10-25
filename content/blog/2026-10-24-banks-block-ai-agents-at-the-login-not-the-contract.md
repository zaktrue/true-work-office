---
title: "Banks block AI agents at the login, not the contract"
description: "US banks including Citigroup and Bank of America are blocking third-party AI agents from customer accounts, shifting enforcement from contract terms to the point of"
date: 2026-10-25T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "openclaw-product"]
source_url: "https://www.reuters.com/legal/government/us-banks-detect-unauthorized-ai-agents-customer-accounts-axios-reports-2026-10-22/"
source_name: "Reuters"
structure: "milestone_release"
faq:
  - q: "Why are US banks blocking third-party AI agents?"
    a: >-
      The reported trigger was the detection of unvetted agents operating inside
      customer accounts, which banks could not distinguish from unauthorised
      access.
  - q: "What would a workable delegation standard require?"
    a: >-
      Scoped permissions rather than full credentials, revocation that takes
      effect immediately, and a readable audit log that shows what an agent did.
---

![Banks block AI agents at the login, not the contract](/images/hero/2026-10-24-banks-block-ai-agents-at-the-login-not-the-contract.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Citigroup and Bank of America are blocking third-party AI agents from reaching customer accounts, according to Reuters.</li>
<li>The restrictions followed detection of unvetted agents operating inside accounts, where consent and compromise look identical to fraud systems.</li>
<li>Banks also have a commercial interest in limiting tools that move deposits in search of better savings rates.</li>
<li>A workable fix would require scoped permissions, immediate revocation and an audit log the account holder can read.</li>
</ul></div>

Citigroup and Bank of America have begun blocking third-party AI agents from reaching customer accounts, [as Reuters reports on the restrictions](https://www.reuters.com/legal/government/us-banks-detect-unauthorized-ai-agents-customer-accounts-axios-reports-2026-10-22/), with Citigroup among the institutions named. Software that manages money on a customer's behalf is nothing new; several such services have already advertised help in securing better savings rates. What has changed is the layer at which banks intervene: access itself, rather than the contract governing it.

That shift matters because delegated authority is the part of agent design nobody has settled. An agent holding a customer's login is, to a bank's fraud systems, indistinguishable from the customer, so consent and compromise generate the same signal. The reported trigger for these blocks was the detection of unvetted agents operating inside accounts, which implies institutions could not tell from the traffic alone whether the software had been authorised. When the only evidence of permission is a password, the safest reading of an unfamiliar session is intrusion.

Blocking is also a blunt instrument, and it carries a commercial logic the security framing obscures. Banks earn margins on deposits that stay put, and an agent shopping for a better rate moves them elsewhere. Unaudited software inside a bank account is a genuine risk. The institution deciding what counts as authorised is also an interested party in limiting tools that redirect its customers' money. Both readings deserve weight here; the restriction is not disinterested hygiene.

The same design problem appears wherever institutions hold records and individuals delegate access to software. In education, agents that file enrolment changes, request transcripts or draft assessed work on a student's behalf arrive with borrowed credentials and no verifiable mandate. Guidance on honest AI use tends to concentrate on what a student submits. The harder question sits underneath: whether an institution can distinguish a tool acting with permission from one acting without it, and whether it can demonstrate that distinction after the fact.

What would make the present restrictions more than a holding pattern is a workable standard for delegated access: scoped permissions in place of full credentials, revocation that takes effect immediately, and a log the account holder can read. Each of those would move the argument from prohibition to verification. Until an agent can present authority that a bank or a university can check, refusal remains the only control available at scale. That is a defensible default, not a solution.
