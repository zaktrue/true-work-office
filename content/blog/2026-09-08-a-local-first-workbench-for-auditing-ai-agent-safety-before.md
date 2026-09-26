---
title: "A Local-First Workbench for Auditing AI Agent Safety Before Deployment"
description: "Agent Auditor is an open-source local-first tool for acceptance testing and security auditing of AI agents, targeting prompt injection defences and reproducible evidence"
date: 2026-09-26T09:00:00Z
draft: false
author: "Zak and the True Work Office team"
categories: ["blog"]
tags: ["daily", "news", "openclaw-product"]
source_url: "https://github.com/952712356/agent-auditor"
source_name: "Github"
structure: "research_digest"
faq:
  - q: "What is Agent Auditor and who is it built for?"
    a: >-
      Agent Auditor is an open-source local-first workbench for acceptance
      testing and security auditing of AI agents, designed for engineering and
      security teams deploying agents to production environments.
  - q: "How does Agent Auditor handle prompt injection testing?"
    a: >-
      The tool ships with five fixed P0 safety baselines targeting both direct
      and indirect prompt injection defences, executed within isolated sandbox
      environments with full tool call tracing.
  - q: "Why does local-first matter for agent auditing?"
    a: >-
      Local-first storage keeps all test data and audit trails within the
      organisation's own infrastructure, avoiding the vendor lock-in that cloud-
      hosted audit tools can create around the very evidence they produce.
---

![A Local-First Workbench for Auditing AI Agent Safety Before Deployment](/images/hero/2026-09-08-a-local-first-workbench-for-auditing-ai-agent-safety-before.webp)

<div class="tldr" role="note"><strong>Key points</strong><ul>
<li>Agent Auditor connects requirements, test cases, sandbox executions and findings into a reproducible local-first testing workflow built on Electron and SQLite.</li>
<li>The tool ships with five built-in P0 safety baselines targeting direct and indirect prompt injection attacks in agentic systems.</li>
<li>API keys are confined to the main process via Electron's safeStorage API, and all state is stored locally with no external dependencies.</li>
<li>55 functional requirements have passed initial audit, though full verification against live corporate agent deployments remains incomplete.</li>
</ul></div>

A new open-source workbench called [Agent Auditor](https://github.com/952712356/agent-auditor) frames a growing problem. Organisations deploying AI agents in production increasingly lack structured, reproducible ways to verify those agents behave as intended before release. The tool, built on Electron and React with a local SQLite backend, connects requirements, test cases, sandbox executions, tool call traces and findings into a single auditable workflow. It ships with five baseline prompt injection defences and deterministic scoring via an LLM-as-a-Judge approach.

The architectural decisions are worth noting. API keys are confined to the main process using Electron's safeStorage API, and renderer access is restricted through a validated IPC preload whitelist. Multi-concurrency batch execution and checkpointing allow testing at scale without external infrastructure. The tool is explicitly local-first: no cloud dependencies, no telemetry by default, all state held in SQLite.

These are not arbitrary choices. They reflect a genuine tension in AI agent deployment: organisations want the efficiency gains of autonomous agents, yet security teams frequently lack the baseline tools to answer basic questions about what an agent actually did during a test run. Current practice often involves ad hoc scripting, manual log review, or vendor-provided dashboards that bundle testing with monitoring in ways that make independent verification difficult. A local-first workbench that produces traceable, reproducible evidence before agents reach production addresses a real gap.

The five built-in P0 safety baselines target both direct and indirect prompt injection, arguably the most consequential class of vulnerability in agentic systems. An agent that can be manipulated into executing unintended tool calls is a liability in any environment where it touches customer data, financial systems or internal workflows. The 55 functional requirements that passed initial audit are a useful starting point, though the tool's own repository notes that full verification against live corporate agents remains incomplete.

What remains genuinely untested is adoption pressure. Agent Auditor appears designed for engineering and security teams that already understand the stakes and have internal mandate to enforce pre-deployment testing. The harder question is whether this kind of tool will reach the teams actually shipping agents to customers, where velocity tends to outrun governance. The local-first model avoids the perverse incentive of cloud-hosted audit tools that generate vendor lock-in through the very evidence they produce, but it also means organisations must invest in integrating the workbench into their own pipelines.

The gap between building verification tools and building a verification culture is where most of the risk currently sits. In education, where AI agents are beginning to assist with grading, feedback and content generation, the absence of structured pre-deployment auditing is already visible in the variable quality of implementations across institutions. A workbench that produces reproducible evidence could, in principle, help institutions meet accountability obligations. Whether anyone adopts it for that purpose is an open question.
