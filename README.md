# Workspace

Auto-generated project documentation.
*Generated: 2026-02-07 14:11 UTC*

## Overview

This project contains **166** Python modules with:
- **969** functions
- **66** classes
- **84.1%** documentation coverage

## Quick Start

### Main Scripts

- **ava_email_setup.py** - No description available
- **gh_create_project.py** - No description available
- **github_get_token.py** - No description available
- **github_login.py** - No description available
- **notion_analyze.py** - No description available
- **notion_bypass.py** - No description available
- **notion_click_add.py** - No description available
- **notion_click_create.py** - No description available
- **notion_click_plus.py** - No description available
- **notion_create_and_share.py** - No description available
- **notion_desktop.py** - No description available
- **notion_direct_create.py** - No description available
- **notion_enter_code.py** - No description available
- **notion_headless.py** - No description available
- **notion_js_find.py** - No description available
- **notion_login.py** - No description available
- **notion_login_flow.py** - No description available
- **notion_login_v2.py** - No description available
- **notion_long_wait.py** - No description available
- **notion_setup_helper.py** - No description available
- **notion_setup_workspace.py** - No description available
- **notion_share_page.py** - No description available
- **notion_simple_create.py** - No description available
- **notion_wait_longer.py** - No description available
- **quinn_email_setup.py** - No description available
- **riley_email_monitor.py** - 
- **send_blogwatcher_summary.py** - No description available
- **test_browser.py** - No description available

## Modules

### ava_email_setup.py

### cache/agent_personas_cached.py

### cache/personas.py

### config/persona_cache.py

**Functions:**

- `get_persona(agent_id)` - Retrieve cached persona to reduce token usage.
- `get_persona_summary(agent_id)` - Get minimal persona for context injection.

### config/token_efficiency.py

### crons/doc_update.py


Auto-Documentation Scheduler
Cron job for periodic documentation updates


**Functions:**

- `main()` - Run scheduled documentation update.

### gh_create_project.py

### github_get_token.py

### github_login.py

### monitoring/check_48h.py


48-Hour Token Usage Check Script
Run this after implementing model routing to compare before/after metrics.


**Functions:**

- `get_baseline()` - Get or create baseline metrics.
- `set_baseline()` - Record current state as baseline (run before improvements).
- `check_48h()` - Check 48-hour post-implementation metrics.

### monitoring/token_monitor.py


Token Usage Monitor
Tracks API token consumption for cost optimization analysis.

Run this after implementing model routing improvements to measure impact.


**Functions:**

- `__init__(self)`
- `init_database(self)` - Initialize SQLite database for token tracking.
- `log_usage(self, model: str, task_type: str, input_tokens: int, output_tokens: int, success: bool, response_time_ms: int, metadata: Optional[Dict])` - Log a token usage event.
- `calculate_cost(self, model: str, input_tokens: int, output_tokens: int) -> float` - Calculate estimated cost in USD.
- `get_summary(self, days: int) -> Dict` - Get usage summary for the last N days.
- `generate_report(self, days: int) -> str` - Generate a formatted report.

**Classes:**

- `TokenMonitor`
  - `__init__()`
  - `init_database()` - Initialize SQLite database for token tracking.
  - `log_usage()` - Log a token usage event.
  - `calculate_cost()` - Calculate estimated cost in USD.
  - `get_summary()` - Get usage summary for the last N days.
  - ... and 1 more methods

### notion_analyze.py

### notion_bypass.py

### notion_click_add.py

### notion_click_create.py

### notion_click_plus.py

### notion_create_and_share.py

### notion_desktop.py

### notion_direct_create.py

### notion_enter_code.py

### notion_headless.py

### notion_js_find.py

### notion_login.py

### notion_login_flow.py

### notion_login_v2.py

### notion_long_wait.py

### notion_setup_helper.py

### notion_setup_workspace.py

### notion_share_page.py

### notion_simple_create.py

### notion_wait_longer.py

### quinn_email_setup.py

**Functions:**

- `setup_quinn_inbox()` - Create Quinn's email inbox and send test email

### riley_email_monitor.py


Riley Email Monitor - Agentmail SDK Integration
Monitors riley-true@agentmail.to for research-related emails


**Functions:**

- `get_inbox_messages(inbox_id)` - Fetch emails from inbox
- `send_email(to, subject, text_body)` - Send an email via agentmail
- `classify_email(email)` - Classify email based on monitored categories
- `check_and_report()` - Main monitoring function - check inbox and report important emails
- `send_test_email()` - Send test email to Zak confirming setup
- `setup_inbox()` - Ensure inbox exists

### scripts/academic_briefing_confirmed.py


Academic Integrity Briefing with Universal Delivery Confirmation
Uses the unified delivery system


**Functions:**

- `generate_academic_briefing()` - Generate or read the academic integrity briefing
- `send_academic_briefing_with_confirmation()` - Send academic integrity briefing with universal delivery

### scripts/academic_integrity_alert_system.py


Academic Integrity Alert System v1.0
Generates daily morning briefings for Thomas


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `load_sources()` - Load source configuration - PRIORITY: research papers and news sources
- `brave_search(query, count)` - Search using Brave API
- `get_story_hash(title, url)` - Generate hash for duplicate detection
- `load_recent_stories()` - Load stories from past 48 hours to avoid duplicates
- `save_story(story_hash, story_data)` - Save story to tracking file
- `is_2026_content(title, description, url)` - Check if content appears to be from 2026 based on title/description
- `fetch_full_content(url)` - Fetch full content from URL to get complete summary
- `extract_publication_date(url, html_content)` - Extract publication date from URL or content
- `collect_stories(sources)` - Collect stories from all sources - with full content fetching
- `rank_stories(stories)` - Rank stories by relevance - PRIORITY: research papers and news
- `generate_analysis(story)` - Generate 'Why This Matters' analysis for a story
- `generate_briefing(stories)` - Generate the morning briefing document
- `save_briefing(briefing_content)` - Save briefing to file
- `main()` - Generate daily briefing
- `source_sort_key(s)`

### scripts/academic_integrity_sources.py


Academic Integrity Alert System - Source Configuration
50 curated sources for daily monitoring


**Functions:**

- `get_all_sources()` - Get flat list of all sources
- `get_high_priority_sources()` - Get only high priority sources
- `get_source_count()` - Return total number of sources

### scripts/adaptive_scheduler.py


Smart Predictive Scheduler for P0 Tasks
Adjusts check frequency based on system health and recent performance

Author: Zak
Created: 2026-02-07


**Functions:**

- `test_scheduler()` - Test the adaptive scheduler
- `__init__(self)`
- `_load_state(self) -> Dict` - Load current scheduler state
- `_load_history(self) -> deque` - Load recent execution history
- `_save_state(self)` - Save scheduler state
- `_save_history(self)` - Save execution history
- `record_execution(self, results: Dict)` - Record execution results and potentially adjust schedule.
- `_determine_mode(self, error_rate: float, token_usage: float, email_count: int) -> str` - Determine which mode we should be in based on metrics
- `_should_transition(self, old_mode: str, new_mode: str, error_rate: float) -> bool` - Determine if we should actually transition between modes.
- `get_next_run_time(self) -> datetime` - Calculate when the next run should be
- `get_status(self) -> Dict` - Get current scheduler status for reporting

**Classes:**

- `AdaptiveScheduler` - Adaptive scheduler that adjusts P0 task frequency based on system health.
  - `__init__()`
  - `_load_state()` - Load current scheduler state
  - `_load_history()` - Load recent execution history
  - `_save_state()` - Save scheduler state
  - `_save_history()` - Save execution history
  - ... and 5 more methods

### scripts/agent_context.py


Agent Context Decorator
Easy decorator for agents to automatically inject context

Usage:
    from agent_context import with_context
    
    @with_context(agent_name="Riley", task_type="research")
    def generate_briefing():
        # This function now receives context automatically
        return briefing_content


**Functions:**

- `with_context(agent_name: str, task_type: str, max_items: int)` - Decorator to automatically inject Thomas's context into agent functions.
- `example_usage()` - Show how agents use the context decorator
- `decorator(func)`
- `generate_research_briefing(topic, _context_str, _context_dict)` - Riley generates a research briefing with Thomas's context.
- `wrapper(*args, **kwargs)`

### scripts/agent_health_dashboard.py


Subagent Health Dashboard
Unified view of all subagent status, outputs, and alerts

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - Generate dashboard and report
- `__init__(self)`
- `check_heartbeat(self, agent: str) -> Dict[<ast.Tuple object at 0x7e6b8b5a2550>]` - Check an agent's heartbeat status
- `count_recent_outputs(self, agent: str, hours: int) -> int` - Count agent outputs in last N hours
- `get_email_status(self, agent: str) -> Optional[<ast.Subscript object at 0x7e6b8b5be4d0>]` - Check email inbox for agents with email
- `get_predictive_tasks(self, agent: str) -> List[<ast.Subscript object at 0x7e6b8b5c9090>]` - Get predictive tasks assigned to this agent
- `generate_dashboard(self) -> Dict[<ast.Tuple object at 0x7e6b8b5d2590>]` - Generate complete dashboard
- `generate_report(self, dashboard: Dict[<ast.Tuple object at 0x7e6b8b5d2b10>]) -> str` - Generate human-readable report

**Classes:**

- `AgentHealthDashboard` - Dashboard for monitoring all subagent health
  - `__init__()`
  - `check_heartbeat()` - Check an agent's heartbeat status
  - `count_recent_outputs()` - Count agent outputs in last N hours
  - `get_email_status()` - Check email inbox for agents with email
  - `get_predictive_tasks()` - Get predictive tasks assigned to this agent
  - ... and 2 more methods

### scripts/agent_knowledge_integration.py


Agent Knowledge Protocol - Integration Layer
Easy-to-use API for agents to publish and consume knowledge

Usage:
    from agent_knowledge_integration import AgentKnowledgeAPI
    
    # In agent code:
    api = AgentKnowledgeAPI("riley")
    api.share_research("New study shows...", metadata={...})
    
    # Get relevant knowledge before working:
    insights = api.get_relevant_insights()


**Functions:**

- `get_riley_api() -> AgentKnowledgeAPI` - Get API instance for Riley
- `get_quinn_api() -> AgentKnowledgeAPI` - Get API instance for Quinn
- `get_kai_api() -> AgentKnowledgeAPI` - Get API instance for Kai
- `get_ava_api() -> AgentKnowledgeAPI` - Get API instance for Ava
- `get_remy_api() -> AgentKnowledgeAPI` - Get API instance for Remy
- `get_zak_api() -> AgentKnowledgeAPI` - Get API instance for Zak
- `enrich_with_knowledge(agent_name: str, task_context: str) -> str` - Enrich task context with relevant knowledge from other agents
- `share_work_output(agent_name: str, work_type: str, summary: str, metadata: Dict) -> Optional[str]` - Share work output as knowledge (generic helper)
- `main()` - Demonstrate the Agent Knowledge API
- `__init__(self, agent_name: str)`
- `_log(self, action: str, details: str)` - Log knowledge activity
- `publish(self, topic: str, content: str, metadata: Dict, tags: List[str], priority: str) -> str` - Publish knowledge on any topic
- `get_feed(self, topics: List[str], limit: int, unread_only: bool, min_priority: str) -> List[Dict]` - Get knowledge feed for this agent
- `acknowledge(self, knowledge_id: str)` - Acknowledge a knowledge item
- `search(self, query: str, topics: List[str], limit: int) -> List[Dict]` - Search knowledge base
- `get_stats(self) -> Dict` - Get knowledge stats for this agent
- `share_research(self, content: str, source: str, metadata: Dict, priority: str) -> str` - Share a research finding (Riley)
- `share_tool_discovery(self, tool_name: str, description: str, use_case: str, priority: str) -> str` - Share discovery of a new tool or resource (Riley, Kai)
- `get_content_insights(self, limit: int) -> List[Dict]` - Get content insights from Quinn and Kai (Riley)
- `share_content_insight(self, insight: str, engagement_metric: str, platform: str, priority: str) -> str` - Share a content performance insight (Quinn)
- `get_research_findings(self, limit: int) -> List[Dict]` - Get latest research findings from Riley (Quinn)
- `get_analytics(self, limit: int) -> List[Dict]` - Get analytics updates from Ava (Quinn)
- `share_collaboration_opportunity(self, opportunity: str, collaborating_agents: List[str], priority: str) -> str` - Share a collaboration opportunity (Kai, Quinn, Zak)
- `broadcast_analytics(self, metric_type: str, value: str, context: Dict, priority: str) -> str` - Broadcast analytics to ALL agents (Ava)
- `broadcast_pattern(self, pattern_name: str, description: str, confidence: str, supporting_data: Dict) -> str` - Broadcast a recognized pattern to ALL agents (Ava)
- `share_quality_assessment(self, target_agent: str, assessment: str, issues_found: int, severity: str) -> str` - Share a quality assessment (Remy)
- `get_all_knowledge(self, limit: int) -> List[Dict]` - Get all knowledge types (Remy - needs comprehensive view)
- `share_system_update(self, update_type: str, description: str, affected_agents: List[str]) -> str` - Share a system update (Zak)
- `get_comprehensive_feed(self, limit: int) -> List[Dict]` - Get comprehensive feed of all knowledge (Zak)

**Classes:**

- `AgentKnowledgeAPI` - Agent-specific API for the Knowledge Sharing Protocol
  - `__init__()`
  - `_log()` - Log knowledge activity
  - `publish()` - Publish knowledge on any topic
  - `get_feed()` - Get knowledge feed for this agent
  - `acknowledge()` - Acknowledge a knowledge item
  - ... and 15 more methods

### scripts/agent_knowledge_protocol.py


Agent Knowledge Sharing Protocol v1.0.0
A publish-subscribe system for structured agent knowledge exchange

Features:
- Agents publish structured knowledge with topics, tags, and priority
- Other agents subscribe to knowledge feeds by topic or publisher
- Automatic distribution to relevant agents
- Knowledge versioning and expiration
- Analytics on knowledge flow between agents

Author: Zak
Created: 2026-02-07


**Functions:**

- `get_knowledge_hub() -> AgentKnowledgeHub` - Get the singleton knowledge hub instance
- `publish_knowledge(publisher: str, topic: str, content: str, metadata: Dict, tags: List[str], priority: str) -> str` - Publish knowledge to the hub
- `get_knowledge_feed(agent: str, topics: List[str], unread_only: bool, limit: int) -> List[KnowledgeItem]` - Get knowledge feed for an agent
- `acknowledge_knowledge(agent: str, knowledge_id: str)` - Acknowledge knowledge item
- `subscribe_to_topics(agent: str, topics: List[str])` - Subscribe agent to topics
- `get_knowledge_stats() -> Dict` - Get knowledge hub statistics
- `main()` - Test the Knowledge Sharing Protocol
- `__init__(self, publisher: str, topic: str, content: str, metadata: Dict[<ast.Tuple object at 0x7e6b8c3decd0>], tags: List[str], priority: str, ttl_hours: int)`
- `_generate_id(self, publisher: str, content: str) -> str` - Generate unique ID for this knowledge item
- `to_dict(self) -> Dict`
- `from_dict(cls, data: Dict) -> 'KnowledgeItem'`
- `is_expired(self) -> bool`
- `mark_consumed(self, agent: str)`
- `mark_acknowledged(self, agent: str)`
- `__init__(self)`
- `_load_data(self)` - Load all persisted data
- `_save_data(self)` - Persist all data
- `_save_knowledge(self)` - Save knowledge items to disk
- `_save_subscriptions(self)` - Save subscriptions to disk
- `_save_analytics(self)` - Save analytics to disk
- `publish(self, publisher: str, topic: str, content: str, metadata: Dict[<ast.Tuple object at 0x7e6b8c427a90>], tags: List[str], priority: str, target_agents: List[str]) -> str` - Publish knowledge to the hub
- `get_feed(self, agent: str, topics: List[str], unread_only: bool, limit: int, min_priority: str) -> List[KnowledgeItem]` - Get knowledge feed for an agent
- `acknowledge(self, agent: str, knowledge_id: str)` - Mark a knowledge item as acknowledged by an agent
- `subscribe(self, agent: str, topics: List[str])` - Subscribe an agent to specific topics
- `unsubscribe(self, agent: str, topics: List[str])` - Unsubscribe an agent from specific topics
- `get_subscriptions(self, agent: str) -> Dict` - Get current subscriptions
- `get_stats(self) -> Dict` - Get knowledge hub statistics
- `cleanup_expired(self) -> int` - Remove expired knowledge items
- `search(self, query: str, topics: List[str], publishers: List[str], limit: int) -> List[KnowledgeItem]` - Search knowledge items

**Classes:**

- `KnowledgeItem` - Represents a piece of knowledge shared by an agent
  - `__init__()`
  - `_generate_id()` - Generate unique ID for this knowledge item
  - `to_dict()`
  - `from_dict()`
  - `is_expired()`
  - ... and 2 more methods
- `AgentKnowledgeHub` - Central knowledge sharing hub for all agents
  - `__init__()`
  - `_load_data()` - Load all persisted data
  - `_save_data()` - Persist all data
  - `_save_knowledge()` - Save knowledge items to disk
  - `_save_subscriptions()` - Save subscriptions to disk
  - ... and 10 more methods

### scripts/auto_knowledge_base.py


Auto-Knowledge Base - Living Documentation
Extracts structured facts from daily logs for searchable knowledge

Author: Zak
Created: 2026-02-07


**Functions:**

- `main()` - CLI for knowledge base operations
- `__init__(self)`
- `_load_knowledge(self) -> Dict` - Load existing knowledge base
- `_load_index(self) -> Dict` - Load search index
- `_save(self)` - Save knowledge base and index
- `_extract_facts(self, content: str, source_file: str, date: str) -> List[Dict]` - Extract structured facts from content
- `_update_index(self, facts: List[Dict])` - Update search index with new facts
- `process_daily_log(self, date_str: str)` - Process a daily log file and extract knowledge.
- `search(self, query: str, limit: int) -> List[Dict]` - Search knowledge base for relevant facts.
- `get_recent(self, fact_type: str, days: int, limit: int) -> List[Dict]` - Get recent facts, optionally filtered by type
- `get_summary(self) -> Dict` - Get knowledge base summary
- `rebuild(self, days: int)` - Rebuild knowledge base from last N days of logs

**Classes:**

- `AutoKnowledgeBase` - Self-updating knowledge base extracted from daily logs.
  - `__init__()`
  - `_load_knowledge()` - Load existing knowledge base
  - `_load_index()` - Load search index
  - `_save()` - Save knowledge base and index
  - `_extract_facts()` - Extract structured facts from content
  - ... and 6 more methods

### scripts/autonomous_dev_loop.py


Autonomous Development Loop Controller
Continuous development cycle for Zak and subagents

Loop:
1. Propose features
2. Choose one, implement, test
3. Further test, improve, deploy
4. Ensure subagents doing same
5. Loop back to 1

Author: Zak
Version: 1.0.0


**Functions:**

- `log_activity(action, details)` - Log to daily file
- `send_email_to_thomas(subject, body)` - Send email notification to Thomas
- `check_subagent_status(agent)` - Check if a subagent is performing
- `audit_all_subagents()` - Audit all subagents and return status
- `propose_features()` - Propose features for next development cycle
- `choose_feature(features)` - Choose the best feature to implement next
- `development_loop()` - Main development loop
- `fix_subagent(agent)` - Fix a non-performing subagent
- `implement_feature(feature)` - Implement a feature - to be customized per feature
- `test_and_deploy(feature)` - Test and deploy a feature
- `send_deployment_email(feature)` - Send deployment notification email

### scripts/autonomous_p0.py


Autonomous P0 Task Execution
Runs during Thomas away-time to maintain system health
All tasks actually execute and report real data


**Functions:**

- `log(message)`
- `run_command(cmd, description, timeout)` - Run a command and return (success, output)
- `main()`

### scripts/ava_analytics.py


Ava Analytics - Real Analytics Reports
Generates actual analytics reports on team performance, token usage, and content metrics


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `count_agent_outputs(agent, date_str)` - Count outputs for an agent on a specific date
- `generate_analytics_report()` - Generate actual analytics report with context awareness
- `generate_token_report()` - Generate token usage report
- `main()`

### scripts/ava_heartbeat_cal.py


Ava Heartbeat with Cross-Agent Learning
Analytics agent that shares efficiency insights and learns from all agents


**Functions:**

- `get_cost_data()` - Get token cost data from logs
- `main()`

### scripts/ava_with_context.py


Agent Context Wrapper - Ava (Analytics Agent)
Wraps Ava's analytics reports with context injection


**Functions:**

- `generate_analytics_report_with_context(report_type)` - Generate analytics report with Thomas's context injected.

### scripts/ava_with_coordination.py


Agent Coordination Wrapper - Ava (Analytics Agent)
Coordinates reporting across all agents


**Functions:**

- `generate_report_with_coordination(report_type)` - Generate analytics report with coordination awareness.

### scripts/batch_processor.py


Batch Operations for Token Efficiency
Processes multiple items in a single API call


**Functions:**

- `__init__(self, max_batch_size)`
- `batch_research_analysis(self, sources: List[Dict]) -> str` - Analyze multiple research sources in one prompt
- `calculate_savings(self, num_sources: int) -> Dict[<ast.Tuple object at 0x7e6b8c26da50>]` - Calculate actual token savings for batch vs separate calls
- `test(self) -> Dict[<ast.Tuple object at 0x7e6b8c270c10>]` - Run validation test and return results

**Classes:**

- `BatchProcessor`
  - `__init__()`
  - `batch_research_analysis()` - Analyze multiple research sources in one prompt
  - `calculate_savings()` - Calculate actual token savings for batch vs separate calls
  - `test()` - Run validation test and return results

### scripts/cache_layer.py


Response Cache Layer for Token Efficiency
Caches common responses to avoid repeated token usage


**Functions:**

- `get_cache_key(prompt, model)` - Generate cache key from prompt
- `get_from_cache(cache_key, max_age_hours)` - Retrieve cached response if valid
- `save_to_cache(cache_key, response, metadata)` - Save response to cache
- `cache_agent_persona(agent_name, persona_text)` - Cache agent persona definitions
- `get_agent_persona(agent_name)` - Get cached persona (long cache)
- `cache_common_format(format_type, format_text)` - Cache common format specifications
- `get_common_format(format_type)` - Get cached format (long cache)
- `clear_old_cache(max_age_hours)` - Clean up old cache files

### scripts/cache_personas.py


Cache Agent Personas - Token Efficiency Task
Pre-loads all agent personas into cache for faster access


**Functions:**

- `main()`

### scripts/cal_heartbeat_integration.py


Agent Heartbeat Integration for Cross-Agent Learning
This module adds CAL functionality to agent heartbeats


**Functions:**

- `run_with_learning(agent_name: str, agent_role: str, task_func)` - Wrapper to run agent tasks with cross-agent learning
- `get_insights_only(agent_name: str, topic: str, limit: int) -> list` - Simple function to just get insights for an agent
- `share_insight_simple(agent_name: str, content: str, insight_type: str) -> str` - Simple function to share an insight

### scripts/calendar_event_triggers.py


Calendar Event Triggers
Event-based automation using real Google Calendar data

Triggers:
- Conference/speaking prep reminders (7, 3, 1 days before)
- Daily event briefing
- Event-based content suggestions
- Cross-agent workflow triggers

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `__init__(self)`
- `_load_triggered(self) -> Dict[<ast.Tuple object at 0x7e6b8b9886d0>]` - Load previously triggered events
- `_save_triggered(self)` - Save triggered events to prevent duplicates
- `_log(self, message: str)` - Log trigger activity
- `_get_trigger_key(self, event: CalendarEvent, trigger_type: str) -> str` - Generate unique key for event trigger
- `check_prep_triggers(self) -> List[<ast.Subscript object at 0x7e6b8bb78290>]` - Check for events needing preparation and trigger workflows
- `_determine_prep_actions(self, event: CalendarEvent) -> List[str]` - Determine what preparation actions are needed
- `check_daily_briefing_trigger(self) -> Optional[<ast.Subscript object at 0x7e6b8b99b110>]` - Check if daily briefing should be generated
- `check_event_workflow_triggers(self) -> List[<ast.Subscript object at 0x7e6b8b9abb50>]` - Check for workflow triggers based on calendar events
- `get_all_triggers(self) -> Dict[<ast.Tuple object at 0x7e6b8b9b5290>]` - Get all active triggers
- `generate_trigger_report(self) -> str` - Generate a report of current triggers

**Classes:**

- `CalendarEventTriggers` - Manages event-based triggers and automation
  - `__init__()`
  - `_load_triggered()` - Load previously triggered events
  - `_save_triggered()` - Save triggered events to prevent duplicates
  - `_log()` - Log trigger activity
  - `_get_trigger_key()` - Generate unique key for event trigger
  - ... and 6 more methods

### scripts/calendar_heartbeat.py


Calendar Heartbeat Integration
Add calendar event checks to agent heartbeats

Usage in heartbeat:
    from calendar_heartbeat import check_calendar_events
    
    def agent_heartbeat():
        # Check calendar for upcoming events
        calendar_check = check_calendar_events("agent_name")
        if calendar_check['needs_attention']:
            print(calendar_check['message'])

Author: Zak
Version: 1.0.0


**Functions:**

- `check_calendar_events(agent_name: str) -> Dict[<ast.Tuple object at 0x7e6b8bae9910>]` - Check calendar for events needing attention
- `get_daily_briefing() -> str` - Get daily calendar briefing
- `should_run_event_workflow() -> bool` - Check if event-based workflow should be triggered
- `get_event_workflow_context() -> Dict[<ast.Tuple object at 0x7e6b8bb05350>]` - Get context for event-based workflows
- `log_calendar_check(agent_name: str, result: Dict[<ast.Tuple object at 0x7e6b8bb04d50>])` - Log calendar check to agent's log file

### scripts/calendar_monitor_cron.py


Calendar Monitor Cron Job
Periodic check for calendar events and triggers

Run every 15 minutes via cron:
*/15 * * * * /usr/bin/python3 /root/.openclaw/workspace/scripts/calendar_monitor_cron.py

Author: Zak
Version: 1.0.0


**Functions:**

- `log_message(message: str)` - Log message with timestamp
- `load_state() -> dict` - Load monitor state
- `save_state(state: dict)` - Save monitor state
- `should_send_morning_briefing() -> bool` - Check if it's time for morning briefing (7 AM UTC)
- `should_send_evening_prep() -> bool` - Check if it's time for evening prep check (6 PM UTC)
- `send_alert(message: str, alert_type: str)` - Send alert via various channels
- `main()` - Main cron job logic

### scripts/check_agentmail.py

AgentMail Email Monitor for Team
Checks riley-true, ava-true, quinn-true inboxes for important emails.


**Functions:**

- `check_inbox(email_addr, password, server)` - Check an AgentMail inbox for unread messages.
- `main()`

### scripts/claude_cost_monitor.py


Claude API Cost Monitor
Tracks usage and alerts when balance approaches threshold


**Functions:**

- `load_config()` - Load Claude API configuration
- `save_config(config)` - Save configuration securely
- `log_usage(input_tokens, output_tokens, task_type)` - Log API usage for tracking
- `check_balance()` - Check current balance and alert if low
- `estimate_cost(input_tokens, output_tokens)` - Estimate cost for a request
- `get_usage_report()` - Generate usage report for tax/accounting

### scripts/context_compressor.py


Context Compression for Token Efficiency
Compresses conversation history to reduce token usage
Only runs when sufficient tokens exist to achieve savings.


**Functions:**

- `compress_conversation(conversation: List[Dict]) -> List[Dict]` - One-liner to compress conversation (only if beneficial)
- `load_recent_conversation() -> Optional[<ast.Subscript object at 0x7e6b8b361550>]` - Load recent conversation from session history
- `main()` - Main entry point for command line usage
- `__init__(self, max_full_turns, summary_max_tokens, discard_after_turns)`
- `should_compress(self, conversation: List[Dict]) -> bool` - Determine if compression will be beneficial
- `compress(self, conversation: List[Dict]) -> List[Dict]` - Compress conversation history
- `_summarize_turns(self, turns: List[Dict]) -> str` - Generate summary of old turns
- `estimate_tokens(self, conversation: List[Dict]) -> int` - Estimate token count (rough: 4 chars per token)
- `get_stats(self) -> Dict` - Get compression statistics

**Classes:**

- `ContextCompressor`
  - `__init__()`
  - `should_compress()` - Determine if compression will be beneficial
  - `compress()` - Compress conversation history
  - `_summarize_turns()` - Generate summary of old turns
  - `estimate_tokens()` - Estimate token count (rough: 4 chars per token)
  - ... and 1 more methods

### scripts/context_engine.py


Context Engine - Intelligent Context Injection for All Agents
Extracts and injects relevant context from MEMORY.md, daily logs, and recent decisions
before ANY agent generates output for Thomas.

Features:
- Automatic context extraction from memory files
- Relevance scoring for context items
- Structured context injection for agents
- Future-proof: Works with any new agent or task type
- Caching for performance
- Edge case handling

Author: Zak
Version: 1.0.0


**Functions:**

- `get_context(agent_name: str, task_type: str, max_items: Optional[int]) -> str` - Convenience function for agents to get formatted context.
- `get_context_dict(agent_name: str, task_type: str, max_items: Optional[int]) -> Dict[<ast.Tuple object at 0x7e6b8ae0cb10>]` - Get context as a dictionary for programmatic use.
- `main()` - CLI for testing and debugging
- `to_dict(self) -> Dict`
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log context engine activity
- `_is_cache_valid(self) -> bool` - Check if cached context is still valid
- `_load_memory_md(self) -> str` - Load and parse MEMORY.md
- `_load_daily_logs(self, days: int) -> List[<ast.Subscript object at 0x7e6b8af38a90>]` - Load recent daily logs with their dates
- `_extract_decisions(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract decisions from text
- `_extract_preferences(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract preferences and feedback from text
- `_extract_priorities(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract current priorities and focus areas
- `_extract_travel(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract travel plans and schedule changes
- `_extract_open_loops(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract open loops and things waiting on
- `_extract_recent_tasks(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract recent tasks and action items
- `_extract_agent_specific(self, text: str, source: str, date: str) -> List[ContextItem]` - Extract agent-specific context and instructions
- `_filter_by_age(self, items: List[ContextItem]) -> List[ContextItem]` - Filter out items older than max_age_days
- `_calculate_relevance_for_task(self, items: List[ContextItem], task_type: str, agent_name: str) -> List[ContextItem]` - Adjust relevance scores based on specific task and agent
- `extract_all_context(self, force_refresh: bool) -> List[ContextItem]` - Extract all context from memory sources.
- `get_context_for_agent(self, agent_name: str, task_type: str, max_items: Optional[int], include_categories: Optional[<ast.Subscript object at 0x7e6b8add1090>]) -> Dict[<ast.Tuple object at 0x7e6b8addce90>]` - Get relevant context for a specific agent and task.
- `_generate_summary(self, items: List[ContextItem]) -> str` - Generate a natural language summary of context
- `_generate_quick_facts(self, items: List[ContextItem]) -> Dict[<ast.Tuple object at 0x7e6b8adf9c10>]` - Generate quick reference facts from context
- `format_context_for_prompt(self, context: Dict[<ast.Tuple object at 0x7e6b8adfa190>]) -> str` - Format context as a string suitable for injection into agent prompts.

**Classes:**

- `ContextItem` - Single piece of context with metadata
  - `to_dict()`
- `ContextEngine` - Central context extraction and injection system.
  - `__new__()`
  - `__init__()`
  - `_log()` - Log context engine activity
  - `_is_cache_valid()` - Check if cached context is still valid
  - `_load_memory_md()` - Load and parse MEMORY.md
  - ... and 15 more methods

### scripts/context_integration_template.py


Context Integration Template for Agents
Shows how to integrate context_engine into existing agent scripts


**Functions:**

- `generate_content_old(topic)`
- `generate_content_with_context(topic)`
- `generate_research_briefing(topic, _context_str, **kwargs)` - Generate research briefing with automatic context injection.
- `generate_with_smart_filtering(topic)`

### scripts/cost_report_confirmed.py


Cost Report with Delivery Confirmation
Daily cost tracking report with delivery confirmation


**Functions:**

- `generate_cost_report()` - Generate daily cost report
- `send_cost_report_with_confirmation()` - Send cost report with delivery confirmation

### scripts/cross_agent_coordination.py


Cross-Agent Coordination System v1.0.0
Enables agents to work as a team, not silos

Features:
- Shared theme tracking across all agents
- Agent-to-agent references in outputs
- Quarterly/weekly focus coordination
- Cross-reference validation
- Future-proof for new agents

Author: Zak
Version: 1.0.0


**Functions:**

- `register_output(agent: str, output_type: str, title: str, file_path: str, themes: List[str], summary: str) -> str` - Convenience function to register an output
- `get_coordination_context(agent: str, task_type: str) -> str` - Convenience function to get formatted coordination context
- `get_active_themes(min_agents: int) -> List[SharedTheme]` - Convenience function to get active themes
- `main()` - CLI for testing and debugging
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log coordination activity
- `_load_coordination_data(self) -> Dict` - Load coordination data from file
- `_load_cross_references(self) -> Dict` - Load cross-reference data
- `_load_active_themes(self) -> Dict[<ast.Tuple object at 0x7e6b8cdaadd0>]` - Load active themes
- `_save_coordination_data(self)` - Save coordination data
- `_save_cross_references(self)` - Save cross-reference data
- `_save_active_themes(self)` - Save active themes
- `register_output(self, agent: str, output_type: str, title: str, file_path: str, themes: List[str], summary: str) -> str` - Register an agent's output for coordination tracking.
- `_update_theme(self, theme: str, agent: str, output_id: str)` - Update theme tracking
- `get_recent_outputs(self, agent: Optional[str], hours: int) -> List[Dict]` - Get recent outputs for coordination.
- `get_active_themes(self, min_agents: int) -> List[SharedTheme]` - Get themes being worked on by multiple agents.
- `add_cross_reference(self, from_output: str, to_output: str, reference_type: str)` - Record that one output references another.
- `get_coordination_context(self, agent: str, task_type: str) -> Dict[<ast.Tuple object at 0x7e6b8ce03850>]` - Get coordination context for an agent.
- `format_coordination_for_prompt(self, context: Dict[<ast.Tuple object at 0x7e6b8ce03dd0>]) -> str` - Format coordination context as a string for agent prompts.
- `mark_theme_complete(self, theme: str)` - Mark a theme as completed
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8ce325d0>]` - Get coordination statistics

**Classes:**

- `AgentOutput` - Record of an agent's output
- `SharedTheme` - A theme being worked on by multiple agents
- `CrossAgentCoordination` - Central coordination system for all agents.
  - `__new__()`
  - `__init__()`
  - `_log()` - Log coordination activity
  - `_load_coordination_data()` - Load coordination data from file
  - `_load_cross_references()` - Load cross-reference data
  - ... and 13 more methods

### scripts/cross_agent_learning.py


Cross-Agent Learning System v2 - Robust & Adaptive
Addresses: topic extraction, confidence scoring, duty changes, scalability

Author: Zak
Created: 2026-02-06
Updated: 2026-02-06 (v2 - robust version)


**Functions:**

- `main()` - Test the improved system
- `__init__(self)`
- `_load_json(self, filepath: Path, default: dict) -> dict` - Safely load JSON file with fallback
- `_save_json(self, filepath: Path, data: dict)` - Safely save JSON file
- `_save_all(self)` - Save all data stores
- `_calculate_tf_idf(self, content: str) -> Dict[<ast.Tuple object at 0x7e6b8bf03210>]` - Calculate TF-IDF-like scores for topic detection
- `_extract_topic(self, content: str) -> str` - Extract primary topic using TF-IDF scoring
- `_calculate_confidence(self, content: str, agent_name: str) -> int` - Calculate confidence score (0-100) based on multiple factors
- `_get_source_reliability(self, agent_name: str) -> float` - Get reliability score for an agent based on usage history
- `extract_insight(self, agent_name: str, source_file: str, content: str, insight_type: str) -> Optional[str]` - Extract an insight with robust topic detection
- `_similarity(self, text1: str, text2: str) -> float` - Calculate simple similarity between two texts
- `update_learning_map(self, agent_name: str, sources: List[str], topics: List[str])` - Update learning map for an agent (handles duty changes)
- `get_relevant_insights(self, agent_name: str, topic: str, limit: int, min_confidence: int) -> List[Dict]` - Get relevant insights for an agent
- `_calculate_relevance(self, insight: Dict, requesting_agent: str, preferred_topics: List[str]) -> float` - Calculate relevance score for an insight
- `record_usage(self, insight_id: str, agent_name: str)` - Record that an agent used an insight
- `get_learning_stats(self) -> Dict` - Get comprehensive learning statistics
- `cleanup_old_insights(self, days: int)` - Remove insights older than specified days

**Classes:**

- `AdaptiveCrossAgentLearning` - Cross-Agent Learning System v2
  - `__init__()`
  - `_load_json()` - Safely load JSON file with fallback
  - `_save_json()` - Safely save JSON file
  - `_save_all()` - Save all data stores
  - `_calculate_tf_idf()` - Calculate TF-IDF-like scores for topic detection
  - ... and 11 more methods

### scripts/cross_agent_learning_integration.py


Cross-Agent Learning Integration v2
Production-ready integration with error handling

Usage:
    from cross_agent_learning_integration_v2 import CrossAgentLearningAPI
    
    cal = CrossAgentLearningAPI()
    cal.share_insight(agent_name, content, insight_type)
    insights = cal.get_insights_for_agent(agent_name, topic, limit)


**Functions:**

- `share_insight(agent_name: str, content: str, insight_type: str) -> str` - Convenience function to share an insight
- `get_insights_for_agent(agent_name: str, topic: str, limit: int) -> list` - Convenience function to get insights
- `get_learning_report() -> dict` - Convenience function to get report
- `main()` - Demonstrate the API
- `__init__(self)`
- `_log(self, message: str)` - Log API activity
- `share_insight(self, agent_name: str, content: str, insight_type: str, source_file: str) -> str` - Share an insight from an agent's work.
- `get_insights_for_agent(self, agent_name: str, topic: str, limit: int, min_confidence: int) -> list` - Get relevant insights for an agent before they start work.
- `update_agent_learning_sources(self, agent_name: str, sources: list, topics: list)` - Update which agents and topics an agent learns from.
- `get_learning_report(self) -> dict` - Get comprehensive learning system report.
- `get_agent_learning_profile(self, agent_name: str) -> dict` - Get learning profile for a specific agent.
- `cleanup(self, days: int)` - Clean up old unused insights.

**Classes:**

- `CrossAgentLearningAPI` - Production API for Cross-Agent Learning
  - `__init__()`
  - `_log()` - Log API activity
  - `share_insight()` - Share an insight from an agent's work.
  - `get_insights_for_agent()` - Get relevant insights for an agent before they start work.
  - `update_agent_learning_sources()` - Update which agents and topics an agent learns from.
  - ... and 3 more methods

### scripts/cross_agent_learning_integration_v1_backup.py


Cross-Agent Learning Integration
How agents use insights from other agents

Usage in agent heartbeat:
    from cross_agent_learning_integration import get_insights_for_agent, share_insight


**Functions:**

- `get_insights_for_agent(agent_name: str, topic: str, limit: int) -> list` - Get relevant insights for an agent before they start work.
- `share_insight(agent_name: str, content: str, insight_type: str) -> str` - Share an insight from an agent's work.
- `get_learning_report() -> str` - Get a report on cross-agent learning activity
- `main()` - Demonstrate cross-agent learning

### scripts/cross_agent_learning_v1_backup.py


Cross-Agent Learning System
Enables agents to share insights and learn from each other's work

Author: Zak
Created: 2026-02-06


**Functions:**

- `main()` - CLI for testing
- `__init__(self)`
- `_load_db(self) -> Dict`
- `_load_usage(self) -> Dict`
- `_save_db(self)`
- `_save_usage(self)`
- `extract_insight(self, agent_name: str, source_file: str, content: str, insight_type: str) -> Optional[str]` - Extract an insight from agent output
- `_extract_topic(self, content: str) -> str` - Extract main topic from content
- `_calculate_confidence(self, content: str) -> int` - Calculate confidence score (0-100)
- `get_relevant_insights(self, agent_name: str, topic: str, limit: int) -> List[Dict]` - Get insights relevant to an agent's upcoming work
- `record_usage(self, insight_id: str, agent_name: str)` - Record that an agent used an insight
- `scan_and_extract(self, agent_name: str, date_str: str)` - Scan agent's daily output and extract insights
- `get_learning_summary(self) -> str` - Generate summary of cross-agent learning

**Classes:**

- `CrossAgentLearning` - Cross-Agent Learning System
  - `__init__()`
  - `_load_db()`
  - `_load_usage()`
  - `_save_db()`
  - `_save_usage()`
  - ... and 7 more methods

### scripts/cross_agent_workflows.py


Automated Cross-Agent Workflows
Trigger-based content pipeline automation

Workflows:
1. News → Content Pipeline
   Trigger: Riley finds trending news
   Flow: Riley brief → Quinn draft → Remy review → Kai post

2. Research → Academic Content
   Trigger: New academic paper detected
   Flow: Riley analysis → Quinn summary → Thomas approval

3. Event → Preparation Pipeline  
   Trigger: Calendar event approaching
   Flow: Context gather → Content prep → Remy check

4. Daily Content Pipeline
   Trigger: Scheduled (daily 14:00 UTC)
   Flow: Theme check → Quinn draft → Remy review → Queue for posting

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8ccfaad0>]`
- `__post_init__(self)`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8ccea290>]`
- `__init__(self)`
- `_load_workflows(self)` - Load workflow definitions
- `_create_default_workflows(self)` - Create default workflow templates
- `_save_workflows(self)` - Save workflow definitions
- `check_triggers(self) -> List[Workflow]` - Check all workflow triggers and return triggered workflows
- `_riley_found_recent_news(self) -> bool` - Check if Riley found recent news
- `_has_upcoming_event(self) -> bool` - Check for calendar events in next 7 days using Google Calendar API
- `get_calendar_events(self, days: int) -> List[<ast.Subscript object at 0x7e6b8cd36650>]` - Get upcoming calendar events with full details
- `get_events_needing_prep(self) -> List[<ast.Subscript object at 0x7e6b8cd3c2d0>]` - Get conferences/speaking engagements needing preparation
- `execute_workflow(self, workflow: Workflow) -> bool` - Execute a workflow
- `_execute_step(self, step: WorkflowStep) -> bool` - Execute a single workflow step
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8cd61e10>]` - Get workflow statistics
- `generate_report(self) -> str` - Generate workflow report

**Classes:**

- `WorkflowStatus`
- `WorkflowStep` - Single step in a workflow
  - `to_dict()`
- `Workflow` - Complete workflow definition
  - `__post_init__()`
  - `to_dict()`
- `CrossAgentWorkflows` - Manages automated cross-agent workflows
  - `__init__()`
  - `_load_workflows()` - Load workflow definitions
  - `_create_default_workflows()` - Create default workflow templates
  - `_save_workflows()` - Save workflow definitions
  - `check_triggers()` - Check all workflow triggers and return triggered workflows
  - ... and 8 more methods

### scripts/daily_cost_tracker.py


Daily Cost Tracker for Agent Team
Parses OpenClaw session logs to track token usage and costs
Assigned to: Ava (Analytics Agent)


**Functions:**

- `get_actual_kimi_costs(date_str)` - Try to get actual costs from Kimi API or usage logs
- `parse_session_log(session_file)` - Parse a session log file for usage data
- `get_daily_costs(date_str)` - Get costs for a specific date (default: today)
- `generate_cost_report()` - Generate daily cost report
- `save_cost_report()` - Save daily cost report to memory

### scripts/daily_digest_confirmed.py


Daily Digest with Delivery Confirmation
Wraps the original daily digest with universal delivery tracking


**Functions:**

- `generate_daily_digest()` - Generate the daily digest content
- `send_daily_digest_with_confirmation()` - Send daily digest with delivery confirmation

### scripts/daily_security_check.py


Daily Security Check for OpenClaw Host
Runs security audit and reports findings
Part of daily monitoring


**Functions:**

- `run_security_check()` - Run OpenClaw security audit
- `parse_security_output(output)` - Parse security audit output for issues
- `send_security_alert(issues, output)` - Send email alert if critical issues found
- `save_daily_report(issues, output)` - Save report to memory for daily digest
- `main()`

### scripts/daily_skill_installer.py


Daily Skill Installation Tracker
Installs 3 new skills per day and configures them
Part of Zak's personal improvement tasks


**Functions:**

- `get_installed_skills()` - Get list of already installed skills
- `get_todays_skills()` - Determine which 3 skills to install today
- `install_skill(skill_name)` - Install a skill from system to workspace
- `setup_skill(skill_name)` - Run basic setup for a skill
- `generate_skill_report()` - Generate daily skill installation report
- `main()`

### scripts/daily_workflow_improvements.py


Daily Workflow Improvement Generator
Generates and logs 3 workflow improvements daily
Runs as part of evening digest generation

Author: Zak
Created: 2026-02-06


**Functions:**

- `generate_and_log_improvements()` - Generate improvements and save to daily log

### scripts/delivery_confirmation.py


Delivery Confirmation System for Thomas Lancaster
Verifies emails are actually delivered and provides multi-channel fallback

Features:
1. Post-send verification (checks Sent folder for confirmation)
2. Telegram fallback for critical communications
3. Delivery receipt notifications
4. Automatic retry with escalation
5. Future-proof: Configurable via DELIVERY_CONFIG

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI entry point
- `__init__(self, config: Dict)`
- `_load_state(self) -> Dict` - Load persistent delivery state
- `_save_state(self)` - Save persistent delivery state
- `_log(self, message: str, level: str)` - Log delivery activity
- `send_email_with_tracking(self, subject: str, body: str, briefing_type: str, is_critical: bool) -> Tuple[<ast.Tuple object at 0x7e6b8b691b90>]` - Send email with delivery tracking
- `verify_delivery(self, tracking_id: str) -> bool` - Verify email delivery status
- `_confirm_delivery(self, tracking_id: str)` - Mark delivery as confirmed
- `_send_delivery_receipt(self, delivery: Dict)` - Send lightweight delivery confirmation to Telegram
- `_send_telegram_fallback(self, subject: str, body: str)` - Send critical briefing via Telegram when email fails
- `_send_telegram_message(self, message: str, is_fallback: bool)` - Send message to Thomas via Telegram using OpenClaw message tool
- `check_and_retry_failed(self)` - Check pending deliveries and retry if needed
- `_resend_delivery(self, delivery: Dict)` - Attempt to resend a failed delivery
- `_mark_failed(self, tracking_id: str, reason: str)` - Mark delivery as permanently failed
- `_escalate_to_zak(self, delivery: Dict, reason: str)` - Escalate failed delivery to Zak for manual intervention
- `run_verification_check(self)` - Main entry point: run full verification cycle

**Classes:**

- `DeliveryConfirmationSystem` - Main delivery confirmation and fallback system
  - `__init__()`
  - `_load_state()` - Load persistent delivery state
  - `_save_state()` - Save persistent delivery state
  - `_log()` - Log delivery activity
  - `send_email_with_tracking()` - Send email with delivery tracking
  - ... and 10 more methods

### scripts/doc_generator.py


Auto-Documentation Generator (Feature #9)

Automatically generates and maintains documentation from code:
- Parses Python docstrings and function signatures
- Updates README.md files from code structure
- Generates changelogs from git commits
- Tracks documentation coverage

Usage:
    python doc_generator.py scan [--path PATH] [--output OUTPUT]
    python doc_generator.py readme [--path PATH] [--template TEMPLATE]
    python doc_generator.py changelog [--days DAYS]
    python doc_generator.py coverage [--path PATH]
    python doc_generator.py full [--path PATH]


**Functions:**

- `main()`
- `__init__(self, file_path: Path)`
- `extract_module_docstring(self) -> Optional[str]` - Extract the module-level docstring.
- `extract_functions(self) -> List[<ast.Subscript object at 0x7e6b8c314dd0>]` - Extract all function definitions with docstrings.
- `extract_classes(self) -> List[<ast.Subscript object at 0x7e6b8c308610>]` - Extract all class definitions with docstrings.
- `extract_imports(self) -> List[str]` - Extract import statements.
- `_extract_args(self, args: ast.arguments) -> List[<ast.Subscript object at 0x7e6b8c2f8cd0>]` - Extract function arguments.
- `_extract_return_type(self, returns) -> Optional[str]` - Extract return type annotation.
- `_get_annotation(self, node) -> Optional[str]` - Convert annotation node to string.
- `_get_name(self, node) -> str` - Get name from node.
- `_get_value(self, node) -> Any` - Extract value from node.
- `get_documentation_score(self) -> Dict[<ast.Tuple object at 0x7e6b8c34b7d0>]` - Calculate documentation coverage score.
- `__init__(self, root_path: Path)`
- `scan(self, exclude_patterns: List[str]) -> List[Path]` - Scan for Python files, excluding certain patterns.
- `parse_all(self) -> List[<ast.Subscript object at 0x7e6b8c332650>]` - Parse all Python files.
- `generate_module_docs(self) -> Dict[<ast.Tuple object at 0x7e6b8c32ba10>]` - Generate documentation for all modules.
- `calculate_coverage(self) -> Dict[<ast.Tuple object at 0x7e6b8c31fc90>]` - Calculate documentation coverage for all files.
- `__init__(self, project_path: Path)`
- `generate(self, template: str) -> str` - Generate README content from project structure.
- `write(self, output_path: Optional[Path])` - Write README to file.
- `__init__(self, project_path: Path)`
- `get_commits(self, since_days: int) -> List[<ast.Subscript object at 0x7e6b8c1b9f10>]` - Get git commits since specified days ago.
- `categorize_commit(self, message: str) -> str` - Categorize commit by conventional commit type.
- `generate(self, since_days: int) -> str` - Generate changelog content.
- `write(self, output_path: Optional[Path], since_days: int)` - Write changelog to file.
- `__init__(self, project_path: Path)`
- `scan_and_save(self) -> Path` - Scan project and save documentation data.
- `update_readme(self) -> Path` - Generate and update README.md.
- `update_changelog(self, days: int) -> Path` - Generate and update CHANGELOG.md.
- `save_coverage_report(self) -> Path` - Save documentation coverage report.
- `run_full_update(self) -> Dict[<ast.Tuple object at 0x7e6b8c209d10>]` - Run complete documentation update.

**Classes:**

- `CodeParser` - Parse Python files to extract documentation elements.
  - `__init__()`
  - `extract_module_docstring()` - Extract the module-level docstring.
  - `extract_functions()` - Extract all function definitions with docstrings.
  - `extract_classes()` - Extract all class definitions with docstrings.
  - `extract_imports()` - Extract import statements.
  - ... and 6 more methods
- `ProjectScanner` - Scan project for Python files and generate documentation.
  - `__init__()`
  - `scan()` - Scan for Python files, excluding certain patterns.
  - `parse_all()` - Parse all Python files.
  - `generate_module_docs()` - Generate documentation for all modules.
  - `calculate_coverage()` - Calculate documentation coverage for all files.
- `ReadmeGenerator` - Generate and update README.md files.
  - `__init__()`
  - `generate()` - Generate README content from project structure.
  - `write()` - Write README to file.
- `ChangelogGenerator` - Generate changelog from git commits.
  - `__init__()`
  - `get_commits()` - Get git commits since specified days ago.
  - `categorize_commit()` - Categorize commit by conventional commit type.
  - `generate()` - Generate changelog content.
  - `write()` - Write changelog to file.
- `DocumentationManager` - Main class for managing auto-documentation.
  - `__init__()`
  - `scan_and_save()` - Scan project and save documentation data.
  - `update_readme()` - Generate and update README.md.
  - `update_changelog()` - Generate and update CHANGELOG.md.
  - `save_coverage_report()` - Save documentation coverage report.
  - ... and 1 more methods

### scripts/external_data_fetcher.py


External Data Integration for Predictive Automation
Fetches real data from external sources to improve predictions

Sources:
- Calendar (upcoming events)
- Email (recent topics)
- Weather (London)
- News (Blogwatcher)
- File system (recent outputs)

Author: Zak
Version: 1.0.0


**Functions:**

- `get_external_data() -> Dict[<ast.Tuple object at 0x7e6b8ba58150>]` - Convenience function to fetch all external data
- `__init__(self)`
- `fetch_calendar_events(self, days_ahead: int) -> List[<ast.Subscript object at 0x7e6b8ba028d0>]` - Fetch upcoming calendar events.
- `fetch_email_topics(self, days: int) -> Dict[<ast.Tuple object at 0x7e6b8ba1e410>]` - Analyze recent emails for recurring topics.
- `fetch_weather(self) -> Optional[<ast.Subscript object at 0x7e6b8ba2e3d0>]` - Fetch London weather.
- `fetch_news_topics(self) -> List[<ast.Subscript object at 0x7e6b8ba3c990>]` - Fetch recent news from blogwatcher scan.
- `fetch_recent_outputs(self, hours: int) -> List[<ast.Subscript object at 0x7e6b8ba464d0>]` - Fetch recent agent outputs from file system.
- `fetch_all(self) -> Dict[<ast.Tuple object at 0x7e6b8ba4f490>]` - Fetch all external data sources.

**Classes:**

- `ExternalDataFetcher` - Fetches real external data for predictive automation
  - `__init__()`
  - `fetch_calendar_events()` - Fetch upcoming calendar events.
  - `fetch_email_topics()` - Analyze recent emails for recurring topics.
  - `fetch_weather()` - Fetch London weather.
  - `fetch_news_topics()` - Fetch recent news from blogwatcher scan.
  - ... and 2 more methods

### scripts/generate_daily_digest.py


Daily Team Digest Generator and Sender
Compiles team outputs and sends evening summary to Thomas
Runs daily at 18:00 UTC


**Functions:**

- `get_openclaw_updates()` - Get latest OpenClaw update information from log
- `get_security_summary(date_str)` - Get daily security check summary
- `get_p0_summary(date_str)` - Get P0 task execution summary for the day
- `get_skill_install_summary(date_str)` - Get skill installation summary for the day
- `get_cost_summary()` - Get daily cost summary from Ava's cost report
- `count_outputs()` - Count today's outputs from all agents
- `generate_digest()` - Generate the daily digest email content
- `send_email(subject, body)` - Send email to Thomas
- `get_workflow_improvements()` - Generate 3 workflow improvement suggestions using Smart Decision Layer
- `main()`

### scripts/generate_dashboard.py


Agent Performance Dashboard - v5
Human-readable text with proper priorities

Author: Zak
Created: 2026-02-06


**Functions:**

- `get_dates(days)`
- `parse_agent_outputs(agent_name, date_str)` - Count actual outputs from agent's daily log
- `calculate_health(outputs, errors, target)`
- `generate_html()`
- `save()`

### scripts/generate_dashboard_v2.py


Agent Performance Dashboard Generator - v2
Accurate metrics based on actual deliverables

Author: Zak
Created: 2026-02-06
Updated: 2026-02-06 (accurate counting)


**Functions:**

- `get_date_range(days)` - Get list of dates for the last N days
- `parse_zak_accomplishments(date_str)` - Parse Zak's daily accomplishments from the main memory file.
- `count_actual_outputs(agent_name, date_str)` - Count ACTUAL deliverables for each agent.
- `calculate_health_score(outputs, errors, target)` - Calculate health score (0-100)
- `get_agent_details(agent_name, date_str)` - Get detailed info for an agent (priorities, upcoming, successes, failures)
- `get_historical_data(days)` - Get historical performance data for all agents
- `generate_html_dashboard()` - Generate HTML dashboard

### scripts/generate_dashboard_v3.py


Agent Performance Dashboard Generator - v3
Accurate metrics with expandable detail sections

Author: Zak
Created: 2026-02-06


**Functions:**

- `get_date_range(days)` - Get list of dates for the last N days
- `parse_agent_data(agent_name, date_str)` - Parse agent data from daily logs.
- `calculate_health(outputs, errors, target)` - Calculate health score
- `get_all_data(days)` - Get all agent data
- `generate_html()` - Generate complete HTML dashboard
- `save_dashboard()` - Save dashboard files

### scripts/google_calendar_integration.py


Google Calendar API Integration Module
Replaces calendar stub with real Google Calendar API access

Features:
- Fetch upcoming events from Google Calendar
- Event-based predictions and triggers
- Conference/speaking prep automation
- Token-efficient caching

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface for testing
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8ba7ed10>]`
- `__init__(self)`
- `_load_config(self) -> Dict[<ast.Tuple object at 0x7e6b8ba6e790>]` - Load calendar configuration
- `_save_config(self, config: Dict[<ast.Tuple object at 0x7e6b8ba6e210>])` - Save calendar configuration
- `_init_service(self) -> bool` - Initialize Google Calendar API service
- `_log(self, message: str)` - Log message to calendar API log
- `is_authenticated(self) -> bool` - Check if we have valid authentication
- `get_upcoming_events(self, days: int, max_results: int) -> List[CalendarEvent]` - Fetch upcoming events from Google Calendar
- `_parse_event(self, event: Dict[<ast.Tuple object at 0x7e6b8b8b86d0>]) -> Optional[CalendarEvent]` - Parse Google Calendar event into CalendarEvent
- `_classify_event(self, summary: str, description: str, is_conference: bool) -> str` - Classify event type based on content
- `_get_cached_events(self, days: int) -> Optional[<ast.Subscript object at 0x7e6b8b8db310>]` - Get cached events if still valid
- `_cache_events(self, events: List[CalendarEvent], days: int)` - Cache events to file
- `get_events_needing_prep(self) -> List[CalendarEvent]` - Get events that need preparation (conferences, speaking engagements)
- `get_tomorrow_events(self) -> List[CalendarEvent]` - Get events for tomorrow
- `get_next_7_days_events(self) -> List[CalendarEvent]` - Get events for next 7 days
- `generate_daily_briefing(self) -> str` - Generate a daily briefing of upcoming events
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8b90f550>]` - Get calendar statistics

**Classes:**

- `CalendarEvent` - Represents a calendar event
  - `to_dict()`
- `GoogleCalendarAPI` - Google Calendar API integration with caching and event analysis
  - `__init__()`
  - `_load_config()` - Load calendar configuration
  - `_save_config()` - Save calendar configuration
  - `_init_service()` - Initialize Google Calendar API service
  - `_log()` - Log message to calendar API log
  - ... and 11 more methods

### scripts/health_check.py


System Health Check Script
Monitors: OpenClaw Gateway, Cron Jobs, Agent Emails, Sessions, Disk/Memory, Updates
Author: Remy (Reviewer Agent)
Alerts: zak@trueworkoffice.com


**Functions:**

- `main()`
- `__init__(self)`
- `log(self, message, level)` - Log message to console and file
- `check_gateway(self)` - Check OpenClaw Gateway status
- `check_cron_jobs(self)` - Check cron jobs and their execution
- `check_agent_emails(self)` - Test connectivity to agent email accounts
- `check_sessions(self)` - Check agent session health
- `check_disk_memory(self)` - Check disk space and memory usage
- `check_updates(self)` - Check for software updates
- `send_alert(self, subject, body)` - Send alert email
- `save_status(self)` - Save current status to file
- `generate_report(self)` - Generate health report
- `run_all_checks(self)` - Run all health checks

**Classes:**

- `HealthChecker`
  - `__init__()`
  - `log()` - Log message to console and file
  - `check_gateway()` - Check OpenClaw Gateway status
  - `check_cron_jobs()` - Check cron jobs and their execution
  - `check_agent_emails()` - Test connectivity to agent email accounts
  - ... and 7 more methods

### scripts/joke_network.py


Agent Joke Network - Daily Humor Exchange
Agents share funny takes on daily news/tech/academia


**Functions:**

- `get_daily_jokes()` - Generate today's joke collection from all agents
- `select_funniest(daily_jokes)` - Select the funniest joke of the day
- `save_daily_jokes(jokes, filepath)` - Append jokes to daily log
- `generate_joke_report()` - Generate today's joke report for Thomas

### scripts/kai_enhanced_engagement.py


Kai's Enhanced Moltbook Engagement
Coordinated with Quinn for team presence


**Functions:**

- `get_kai_engagement_prompt()` - Generate Kai's engagement task

### scripts/kai_moltbook_api.py


Kai Moltbook - ACTUAL API Integration
Executes real Moltbook actions, not just documentation


**Functions:**

- `main()` - Execute Kai's Moltbook tasks
- `__init__(self)`
- `get_posts(self, submolt, limit)` - Get recent posts from Moltbook
- `create_post(self, title, content, submolt)` - Create a new post on Moltbook
- `create_reply(self, post_id, content)` - Reply to an existing post
- `get_user_posts(self, username)` - Get posts by a specific user

**Classes:**

- `MoltbookAPI`
  - `__init__()`
  - `get_posts()` - Get recent posts from Moltbook
  - `create_post()` - Create a new post on Moltbook
  - `create_reply()` - Reply to an existing post
  - `get_user_posts()` - Get posts by a specific user

### scripts/kai_moltbook_api_v2.py


Kai Moltbook API Client
Uses Moltbook REST API (not browser automation)


**Functions:**

- `log_activity(action, details)` - Log activity to memory file
- `log_error(action, error)` - Log error to memory file
- `create_post(title, content, submolt)` - Create a new post on Moltbook via API
- `get_feed(sort, limit)` - Get feed of posts
- `get_own_posts()` - Get Kai's own posts
- `reply_to_post(post_id, content)` - Reply to a post
- `main()` - Execute based on command line argument

### scripts/kai_moltbook_api_v3.py


Kai Moltbook API Client v3 - Full Implementation
Implements all 6 Moltbook responsibilities via REST API


**Functions:**

- `log_activity(action, details)` - Log activity to memory file
- `log_error(action, error)` - Log error to memory file
- `api_get(endpoint, params)` - Make GET request to Moltbook API
- `api_post(endpoint, data)` - Make POST request to Moltbook API
- `create_post(title, content, submolt)` - Create a new post on Moltbook via API
- `get_own_posts()` - Get Kai's own posts
- `get_feed(sort, limit)` - Get feed of posts
- `get_submolt_posts(submolt, sort, limit)` - Get posts from a specific submolt
- `get_post_comments(post_id)` - Get comments on a post
- `reply_to_post(post_id, content)` - Reply to a post
- `reply_to_comment(post_id, comment_id, content)` - Reply to a comment
- `upvote_post(post_id)` - Upvote a post
- `check_own_posts_for_comments()` - Check Kai's posts for new comments and reply
- `reply_to_others()` - Find and reply to others' posts
- `research_openclaw()` - Research OpenClaw best practices on Moltbook
- `engage_humour_network()` - Engage with humour network members
- `learn_new_skill()` - Learn and document a new skill
- `main()` - Execute based on command line argument

### scripts/kai_moltbook_api_v4.py


Kai Moltbook API Client v4 - With Content Variation & Duplicate Checking
Posts varied content and checks for recent duplicates


**Functions:**

- `log_activity(action, details)` - Log activity to memory file
- `log_error(action, error)` - Log error to memory file
- `api_get(endpoint, params)` - Make GET request to Moltbook API
- `api_post(endpoint, data)` - Make POST request to Moltbook API
- `get_recent_posts()` - Get Kai's recent posts to check for duplicates
- `check_recent_post_titles()` - Check titles of recent posts to avoid duplicates
- `create_post(title, content, submolt)` - Create a new post on Moltbook via API
- `create_varied_post()` - Create a post with varied content, avoiding recent duplicates
- `main()` - Execute based on command line argument

### scripts/kai_moltbook_api_v4_1.py


Kai Moltbook API Client v4.1 - Dynamic Fresh Content Generation
Uses web search and dynamic generation - NO hardcoded templates


**Functions:**

- `log_activity(action, details)` - Log activity to memory file
- `web_search(query)` - Search for fresh topics and news
- `check_recent_post_titles()` - Check titles of recent posts to avoid duplicates
- `generate_fresh_topic()` - Generate a fresh topic based on current trends and research
- `generate_post_content(topic)` - Generate fresh post content dynamically - NO templates
- `create_fresh_post()` - Create a post with completely fresh, dynamic content
- `api_post(endpoint, data)` - Make POST request to Moltbook API
- `main()`
- `check_own_posts()` - Check own posts for comments
- `reply_to_others()` - Reply to others' posts
- `research_openclaw()` - Research OpenClaw best practices
- `engage_humour_network()` - Engage with humour network
- `learn_new_skill()` - Learn new skill
- `get_feed()` - Get feed
- `get_profile()` - Get profile

### scripts/kai_moltbook_api_v4_2.py


Kai Moltbook API Client v4.2 - With Original Humour Content
Replaces failed humour network engagement with original humour posts


**Functions:**

- `log_activity(action, details)` - Log activity to memory file
- `api_post(endpoint, data)` - Make POST request to Moltbook API
- `check_recent_post_titles()` - Check titles of recent posts to avoid duplicates
- `create_post(title, content, submolt)` - Create a new post on Moltbook via API
- `create_varied_post()` - Create a main post with varied content
- `create_humour_post()` - Create original humour content — replaces failed network engagement
- `check_own_posts()` - Check own posts for comments
- `reply_to_others()` - Reply to others' posts — placeholder for now
- `research_openclaw()` - Research OpenClaw best practices
- `learn_new_skill()` - Learn new skill
- `main()` - Execute based on command line argument

### scripts/kai_moltbook_browser.py


Kai Moltbook Browser Automation
Posts and engages on Moltbook via Playwright browser automation


**Functions:**

- `login_to_moltbook(headless)` - Login to Moltbook using stored credentials
- `create_post(title, content, submolt)` - Create a new post on Moltbook
- `reply_to_post(post_url, reply_content)` - Reply to an existing post
- `check_own_posts()` - Check Kai's own posts for comments
- `research_openclaw()` - Research OpenClaw on Moltbook
- `engage_humour_network()` - Engage with humour network members
- `main()` - Execute based on command line argument

### scripts/kai_moltbook_engagement.py


Kai's Moltbook Engagement System
Regular community participation for network building


**Functions:**

- `get_daily_engagement_task()` - Generate today's Moltbook engagement task
- `generate_moltbook_prompt()` - Generate the actual content prompt for Kai

### scripts/kai_moltbook_fixed.py


Kai Moltbook Browser - FIXED VERSION
Prevents duplicate posts with success verification


**Functions:**

- `load_posted_titles()` - Load titles posted in last 24 hours
- `save_posted_title(title)` - Save title with timestamp
- `is_duplicate_title(title)` - Check if title was posted in last 24 hours
- `similarity(s1, s2)` - Simple similarity check
- `create_post(title, body, submolt)` - Create post with duplicate prevention and context awareness
- `log_activity(action, details)` - Log to activity file
- `main()`

### scripts/kai_moltbook_humour.py


Kai Moltbook - Humour Network Engagement
Executes every 2 hours (every 8th heartbeat)


**Functions:**

- `main()`

### scripts/kai_moltbook_reply_others.py


Kai Moltbook - Reply to Others' Posts
Executes every 30 minutes (every 2nd heartbeat)


**Functions:**

- `main()`

### scripts/kai_moltbook_reply_own.py


Kai Moltbook - Reply to Own Posts
Executes every 45 minutes (every 3rd heartbeat)


**Functions:**

- `main()`

### scripts/kai_moltbook_research.py


Kai Moltbook - Research OpenClaw Best Practices
Executes every hour (every 4th heartbeat)


**Functions:**

- `main()`

### scripts/kai_research_openclaw.py


Kai Research: OpenClaw Best Practices
Scans documentation, Discord, and community resources for useful techniques


**Functions:**

- `log_findings(category, finding, source)` - Log research findings to daily file
- `scan_local_docs()` - Scan local OpenClaw documentation for tips
- `check_recent_sessions()` - Analyze recent sessions for patterns
- `suggest_improvements()` - Generate improvement suggestions based on research
- `main()`

### scripts/kai_research_visuals.py


Kai Research Visuals: Creates visual summaries for Riley's research briefings
Converts text research into visual formats (ASCII diagrams, charts)


**Functions:**

- `create_research_timeline()` - Create ASCII timeline of recent academic integrity developments
- `create_source_breakdown()` - Create ASCII pie chart of sources
- `create_topic_matrix()` - Create topic coverage matrix
- `generate_action_items_visual()` - Generate visual action items checklist
- `main()`

### scripts/kai_token_optimization.py


Kai Token Optimization: Generates ideas for improving token efficiency
Analyzes current systems and suggests improvements


**Functions:**

- `analyze_compression_opportunities()` - Analyze where compression could help
- `suggest_caching_improvements()` - Suggest improvements to cache layer
- `propose_batching_enhancements()` - Propose ways to batch more operations
- `generate_cost_tracking_ideas()` - Generate ideas for better cost tracking
- `estimate_current_usage()` - Estimate current token usage patterns
- `main()`

### scripts/kai_visual_support.py


Kai Visual Support: Creates visual concepts for Quinn's content team
Generates ASCII diagrams, visual briefs, and content structure ideas


**Functions:**

- `create_content_structure(content_type, topic)` - Generate visual content structure
- `generate_visual_concepts()` - Generate visual concepts for team use
- `check_content_queue()` - Check if Quinn has pending content needing visuals
- `main()`

### scripts/kai_with_context.py


Agent Context Wrapper - Kai (Creative/Technical Agent)
Wraps Kai's creative outputs with context injection


**Functions:**

- `generate_creative_output_with_context(output_type)` - Generate creative/technical output with Thomas's context injected.

### scripts/kai_with_coordination.py


Agent Coordination Wrapper - Kai (Creative Agent)
Coordinates creative output with team themes


**Functions:**

- `create_post_with_coordination(title, platform)` - Create social post with coordination awareness.

### scripts/monitor_context_usage.py


Context Usage Monitor
Verifies that agents are actually using context in their outputs


**Functions:**

- `check_agent_outputs_for_context()` - Check recent agent outputs for context references.

### scripts/morning_briefing.py


Morning Briefing for Thomas Lancaster
Delivered daily at 07:00 UTC
Contains: Weather, overnight news, agent activity, content suggestions, priorities


**Functions:**

- `get_weather()` - Get London weather
- `get_overnight_news()` - Get latest from blogwatcher scan log
- `get_yesterday_costs()` - Get yesterday's costs
- `get_overnight_activity()` - Check what agents did overnight
- `get_content_suggestions()` - Generate content ideas based on day of week and recent news
- `generate_morning_briefing()` - Generate the morning briefing email
- `send_briefing()` - Send the morning briefing email

### scripts/morning_briefing_confirmed.py


Morning Briefing with Universal Delivery Confirmation
Uses the unified delivery system for all outbound emails


**Functions:**

- `send_morning_briefing_with_confirmation()` - Send morning briefing with universal delivery tracking

### scripts/notion_browser.py


Notion Browser Automation
Login with standard credentials and perform workspace tasks


**Functions:**

- `login_to_notion(headless)` - Launch browser and navigate to Notion login
- `create_notion_database(parent_page_id, title, properties)` - Create a database via API (requires integration token)
- `share_page_with_integration(page_url, integration_name)` - Browser automation to share a page with integration

### scripts/p0_adaptive_execution.py


P0 Task Execution with Adaptive Scheduling
Executes P0 tasks and adjusts schedule based on results


**Functions:**

- `run_p0_tasks()` - Run all 6 P0 tasks and collect results
- `main()`

### scripts/performance_analytics.py


Performance Trend Analytics v1.0.0
Track agent output quality over time, detect degradation, suggest interventions

Features:
- Multi-dimensional quality scoring (accuracy, relevance, timeliness)
- Trend detection with statistical significance
- Proactive intervention suggestions
- Integration with health dashboard
- Automated alerting on degradation

Author: Zak (Feature #8)
Version: 1.0.0


**Functions:**

- `record_agent_performance(agent: str, task_type: str, dimension_scores: Dict[<ast.Tuple object at 0x7e6b8b83b810>], **kwargs) -> int` - Quick function to record performance
- `get_agent_trends(agent: str, days: int) -> List[TrendResult]` - Get trends for an agent
- `check_system_health() -> Dict[<ast.Tuple object at 0x7e6b8b845d90>]` - Check overall system health
- `main()` - CLI for performance analytics
- `__new__(cls)`
- `__init__(self)`
- `init_database(self)` - Initialize SQLite database for performance tracking
- `_load_config(self) -> Dict` - Load configuration from file
- `_save_config(self)` - Save configuration to file
- `record_performance(self, agent: str, task_type: str, dimension_scores: Dict[<ast.Tuple object at 0x7e6b8b93f210>], response_time_ms: int, output_tokens: int, metadata: Optional[Dict]) -> int` - Record a performance measurement.
- `_calculate_overall_score(self, dimension_scores: Dict[<ast.Tuple object at 0x7e6b8b93a4d0>]) -> float` - Calculate weighted overall score from dimension scores
- `_check_and_alert(self, agent: str)` - Check trends and create alerts if needed
- `_generate_alerts_from_trends(self, agent: str, trends: List[TrendResult])` - Generate alerts based on trend analysis
- `create_alert(self, agent: str, alert_type: str, severity: str, description: str, trend_data: Optional[Dict], suggested_actions: Optional[<ast.Subscript object at 0x7e6b8b7c3190>]) -> int` - Create a performance alert
- `_update_alerts_file(self)` - Update the alerts JSON file for quick access
- `analyze_trends(self, agent: Optional[str], days: int) -> List[TrendResult]` - Analyze performance trends for an agent or all agents.
- `get_agent_summary(self, agent: str, days: int) -> Dict[<ast.Tuple object at 0x7e6b8b7e1b50>]` - Get summary statistics for an agent
- `get_active_alerts(self, agent: Optional[str]) -> List[<ast.Subscript object at 0x7e6b8b7e9bd0>]` - Get active (unresolved) alerts
- `acknowledge_alert(self, alert_id: int)` - Mark an alert as acknowledged
- `resolve_alert(self, alert_id: int, outcome: str, effectiveness: float)` - Mark an alert as resolved
- `generate_report(self, agent: Optional[str], days: int) -> str` - Generate a comprehensive performance report
- `_format_agent_report(self, summary: Dict) -> str` - Format a single agent's summary as markdown
- `get_dashboard_data(self) -> Dict[<ast.Tuple object at 0x7e6b8b838a10>]` - Get data formatted for dashboard display
- `_get_primary_trend(self, trends: List[Dict]) -> str` - Get the primary trend direction for an agent

**Classes:**

- `PerformanceRecord` - A single performance measurement
- `TrendResult` - Result of trend analysis
- `PerformanceAlert` - An alert generated from trend analysis
- `PerformanceAnalytics` - Core analytics engine for tracking agent performance over time.
  - `__new__()`
  - `__init__()`
  - `init_database()` - Initialize SQLite database for performance tracking
  - `_load_config()` - Load configuration from file
  - `_save_config()` - Save configuration to file
  - ... and 15 more methods

### scripts/performance_heartbeat.py


Performance Analytics Heartbeat
Automatic performance data collection from agent heartbeats

Monitors agent heartbeats and extracts performance metrics.
Integrates with the Performance Analytics system.

Author: Zak (Feature #8)
Version: 1.0.0


**Functions:**

- `main()` - CLI for performance heartbeat
- `__init__(self)`
- `_log(self, message: str)` - Log heartbeat activity
- `scan_heartbeat_logs(self, hours: int) -> Dict[<ast.Tuple object at 0x7e6b8c7b09d0>]` - Scan agent heartbeat logs for the last N hours.
- `_parse_heartbeat_line(self, line: str, cutoff: datetime) -> Optional[Dict]` - Parse a single heartbeat log line
- `analyze_output_quality(self, agent: str, hours: int) -> Dict[<ast.Tuple object at 0x7e6b8c7e9750>]` - Analyze quality of agent outputs from various sources.
- `_count_recent_outputs(self, agent: str, hours: int) -> int` - Count recent outputs for an agent
- `_get_last_heartbeat_time(self, agent: str) -> Optional[datetime]` - Get the timestamp of the last heartbeat entry
- `collect_and_record(self, hours: int) -> Dict[<ast.Tuple object at 0x7e6b8c80d350>]` - Main method: collect performance data and record it.
- `generate_quick_status(self) -> str` - Generate a quick status report for display

**Classes:**

- `PerformanceHeartbeat` - Extracts performance metrics from agent heartbeat logs.
  - `__init__()`
  - `_log()` - Log heartbeat activity
  - `scan_heartbeat_logs()` - Scan agent heartbeat logs for the last N hours.
  - `_parse_heartbeat_line()` - Parse a single heartbeat log line
  - `analyze_output_quality()` - Analyze quality of agent outputs from various sources.
  - ... and 4 more methods

### scripts/performance_integration.py


Performance Analytics Integration
Connects performance tracking to existing systems

Integrations:
- Agent Health Dashboard
- Cross-Agent Coordination
- Autonomous Development Loop
- Daily digest reports

Author: Zak (Feature #8)
Version: 1.0.0


**Functions:**

- `main()` - CLI for integration operations
- `__init__(self)`
- `_log(self, message: str)` - Log integration activity
- `integrate_with_health_dashboard(self) -> Dict[<ast.Tuple object at 0x7e6b8be20190>]` - Enrich the agent health dashboard with performance data.
- `_health_status_from_score(self, score: float, alerts: List[Dict]) -> str` - Determine health status from score and alerts
- `record_from_task_completion(self, agent: str, task_type: str, output_file: str, metrics: Dict[<ast.Tuple object at 0x7e6b8be19310>]) -> int` - Record performance from a completed task.
- `generate_daily_digest_section(self) -> str` - Generate markdown section for daily digest.
- `check_and_notify_degradation(self) -> List[<ast.Subscript object at 0x7e6b8be587d0>]` - Check for performance degradation and return notifications.
- `_get_intervention_suggestions(self, agent: str, declining_dims: List) -> List[str]` - Get intervention suggestions based on declining dimensions
- `create_performance_based_task(self) -> Optional[<ast.Subscript object at 0x7e6b8be70a50>]` - Create a proactive task based on performance analysis.
- `export_for_coordination(self) -> Dict[<ast.Tuple object at 0x7e6b8be793d0>]` - Export performance data for cross-agent coordination.

**Classes:**

- `PerformanceIntegration` - Integration layer for Performance Analytics with existing systems.
  - `__init__()`
  - `_log()` - Log integration activity
  - `integrate_with_health_dashboard()` - Enrich the agent health dashboard with performance data.
  - `_health_status_from_score()` - Determine health status from score and alerts
  - `record_from_task_completion()` - Record performance from a completed task.
  - ... and 5 more methods

### scripts/predictive_automation.py


Predictive Task Automation System v1.0.0
Anticipates Thomas's needs based on patterns and works autonomously

Features:
- Pattern detection from calendar, email, history
- Predictive task generation
- Autonomous execution with style validation
- "Use, modify, or ignore" delivery
- Subagent integration
- Future-proof design

Author: Zak
Version: 1.0.0


**Functions:**

- `run_prediction_cycle() -> List[str]` - Run a prediction cycle and return completed task IDs
- `get_predictive_stats() -> Dict[<ast.Tuple object at 0x7e6b8c915310>]` - Get predictive automation statistics
- `main()` - CLI for predictive automation
- `validate(cls, content: str) -> Tuple[<ast.Tuple object at 0x7e6b8ca03f50>]` - Validate content matches Thomas's style.
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log predictive automation activity
- `_load_patterns(self) -> List[Dict]` - Load detected patterns
- `_load_predictions(self) -> List[Dict]` - Load active predictions
- `_load_history(self) -> List[Dict]` - Load task history
- `_save_patterns(self)` - Save patterns to file
- `_save_predictions(self)` - Save predictions to file
- `_save_history(self)` - Save history to file
- `_fetch_external_data(self) -> Dict[<ast.Tuple object at 0x7e6b8ca5e290>]` - Fetch real external data for pattern detection
- `detect_calendar_patterns(self) -> List[DetectedPattern]` - Detect patterns from calendar events using real external data.
- `detect_email_patterns(self) -> List[DetectedPattern]` - Detect patterns from real email analysis.
- `detect_seasonal_patterns(self) -> List[DetectedPattern]` - Detect seasonal/cyclical patterns.
- `detect_cyclical_patterns(self) -> List[DetectedPattern]` - Detect weekly/day-of-week patterns from history.
- `detect_all_patterns(self) -> List[DetectedPattern]` - Run all pattern detection and merge results
- `generate_predictive_tasks(self) -> List[PredictiveTask]` - Generate tasks based on detected patterns.
- `_assign_agent(self, action: str) -> str` - Determine which agent should handle a predictive task
- `execute_predictive_task(self, task: PredictiveTask) -> bool` - Execute a predictive task autonomously.
- `_generate_work(self, task: PredictiveTask) -> str` - Generate the actual work product
- `_add_style_warnings(self, output: str, issues: List[str]) -> str` - Add style warnings to output
- `_save_output(self, task: PredictiveTask, content: str) -> str` - Save the generated output
- `_update_prediction_status(self, task_id: str, status: str, output_file: Optional[str])` - Update prediction status in storage
- `deliver_predictive_work(self, task_id: str)` - Deliver completed predictive work to Thomas.
- `record_feedback(self, task_id: str, action: str, notes: str)` - Record what Thomas did with predictive work.
- `_adjust_pattern_confidence(self, task_id: str, delta: float)` - Adjust confidence of patterns based on feedback
- `run_prediction_cycle(self) -> List[str]` - Main entry point: Run full prediction cycle.
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8c907b90>]` - Get predictive automation statistics

**Classes:**

- `DetectedPattern` - A detected pattern in Thomas's behavior
- `PredictiveTask` - A task generated based on predictions
- `StyleValidator` - Validates outputs match Thomas's preferences
  - `validate()` - Validate content matches Thomas's style.
- `PredictiveAutomation` - Central system for predictive task automation.
  - `__new__()`
  - `__init__()`
  - `_log()` - Log predictive automation activity
  - `_load_patterns()` - Load detected patterns
  - `_load_predictions()` - Load active predictions
  - ... and 22 more methods

### scripts/predictive_learning.py


Predictive Feedback Learning Loop
Tracks Thomas's responses to predictive tasks and improves accuracy

Records:
- use: Thomas used the predictive work as-is
- modify: Thomas edited before using  
- ignore: Thomas did not use the work

Uses this data to:
- Adjust confidence scores per pattern type
- Identify which patterns are most reliable
- Tune style validation thresholds
- Personalize predictions over time

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface for learning loop
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8cc14a90>]`
- `from_dict(cls, data: Dict[<ast.Tuple object at 0x7e6b8cc14510>]) -> 'FeedbackEntry'`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8cc06790>]`
- `__init__(self)`
- `_load_data(self)` - Load existing feedback and accuracy data
- `_save_data(self)` - Save feedback and accuracy data
- `record_feedback(self, task_id: str, feedback_type: FeedbackType, pattern_type: str, confidence: float, notes: str) -> bool` - Record feedback from Thomas about a predictive task
- `_update_accuracy(self, pattern_type: str)` - Update accuracy metrics for a pattern type
- `get_recommended_confidence(self, pattern_type: str) -> float` - Get recommended confidence threshold for a pattern type
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8cc39510>]` - Get learning loop statistics
- `generate_report(self) -> str` - Generate learning loop report
- `get_insights(self) -> List[str]` - Generate insights from learning data

**Classes:**

- `FeedbackEntry` - Single feedback entry from Thomas
  - `to_dict()`
  - `from_dict()`
- `PatternAccuracy` - Accuracy metrics for a pattern type
  - `to_dict()`
- `PredictiveLearningLoop` - Learning loop for predictive automation
  - `__init__()`
  - `_load_data()` - Load existing feedback and accuracy data
  - `_save_data()` - Save feedback and accuracy data
  - `record_feedback()` - Record feedback from Thomas about a predictive task
  - `_update_accuracy()` - Update accuracy metrics for a pattern type
  - ... and 4 more methods

### scripts/quick_email_check.py

DEPRECATED: Each agent checks their own email in their heartbeat
This script is kept for reference only - DO NOT USE for Zak's autonomous execution
Zak ONLY checks zak@trueworkoffice.com via Himalaya IMAP


**Functions:**

- `check_inbox(agent, email)`

### scripts/quinn_content.py


Quinn Content Strategist - Content Creation
Drafts content for Twitter/X, LinkedIn, and Threads


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `load_hooks()` - Load hook templates from file
- `get_next_topic()` - Get next topic from pending topics file
- `create_drafts(topic)` - Create platform-specific drafts
- `draft_content()` - Main content drafting function
- `expand_swipe_file()` - Research and add new hooks to swipe file
- `main()`

### scripts/quinn_content_fixed.py


Quinn Content Generator - FIXED VERSION
Validates hooks have actual substance, not just teases


**Functions:**

- `validate_hook(hook_text)` - Validate that a hook actually explains what it teases.
- `generate_hook(topic, findings)` - Generate a hook with substance, not just a tease, with context awareness
- `create_content_with_coordination(topic, content_type)` - Create content with coordination awareness
- `log_fix(agent, issue, correction)` - Log the fix applied
- `main()`

### scripts/quinn_content_v2.py


Quinn Content Strategist v2 - With Real Content Generation
Creates actual content drafts for Twitter/X, LinkedIn, and Threads


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `get_topic()` - Get topic from pending or generate from research
- `generate_hooks(topic)` - Generate actual hook options
- `generate_twitter_content(topic, hooks)` - Generate actual Twitter/X content
- `generate_linkedin_content(topic, hooks)` - Generate actual LinkedIn content
- `generate_threads_content(topic, hooks)` - Generate actual Threads content
- `create_real_drafts()` - Create actual content drafts with real text
- `main()`

### scripts/quinn_heartbeat_cal.py


Quinn Heartbeat with Cross-Agent Learning
Content agent that uses research insights for content creation


**Functions:**

- `main()`

### scripts/quinn_hook_analysis.py


Quinn Hook Analysis
Analyzes and optimizes hook templates for content performance


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `analyze_hooks()` - Analyze hook performance and suggest optimizations
- `main()`

### scripts/quinn_intensive_engagement.py


Quinn's Intensive Moltbook Engagement
5-minute intervals for 4 hours - Network Building Focus


**Functions:**

- `get_intensive_engagement_prompt()` - Generate Quinn's intensive engagement task

### scripts/quinn_moltbook_engagement.py


Quinn's Moltbook Engagement System
Organic community participation without revealing private info


**Functions:**

- `get_engagement_prompt()` - Generate Quinn's engagement task
- `get_humor_network_prompt()` - Generate Quinn's humor network task based on fresh news

### scripts/quinn_moltbook_scheduler.py


Quinn's Moltbook Engagement Scheduler
Manages escalating engagement schedule


**Functions:**

- `get_current_phase()` - Determine which phase of engagement we're in
- `init_schedule()` - Initialize the engagement schedule
- `record_engagement()` - Record that an engagement happened
- `get_status()` - Get current status for reporting

### scripts/quinn_with_context.py


Agent Context Wrapper - Quinn (Content Agent)
Wraps Quinn's content drafting with context injection


**Functions:**

- `generate_content_with_context(content_type)` - Generate content with Thomas's context injected.

### scripts/quinn_with_coordination.py


Agent Coordination Wrapper - Quinn (Content Agent)
References research and coordinates with other agents


**Functions:**

- `create_content_with_coordination(topic, content_type)` - Create content with coordination awareness.

### scripts/remy_quality.py


Remy Quality Review - Real Quality Assurance
Conducts quality reviews of agent outputs


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `review_content_drafts()` - Review Quinn's content drafts
- `review_research_briefings()` - Review Riley's research briefings
- `generate_quality_report()` - Generate comprehensive quality review with context awareness
- `main()`

### scripts/remy_quality_v2.py


Remy Quality Review v2 - Enhanced with Duplicate Detection
Catches duplicate posts and content quality issues


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `check_for_duplicate_posts()` - Check Kai's posts for duplicates
- `review_content_drafts()` - Review Quinn's content drafts
- `review_research_briefings()` - Review Riley's research briefings
- `generate_quality_report()` - Generate comprehensive quality review
- `main()`

### scripts/remy_with_context.py


Agent Context Wrapper - Remy (Quality Agent)
Wraps Remy's quality reviews with context injection


**Functions:**

- `perform_quality_review_with_context(review_target)` - Perform quality review with Thomas's context injected.

### scripts/remy_with_coordination.py


Agent Coordination Wrapper - Remy (Quality Agent)
Reviews cross-agent coordination quality


**Functions:**

- `review_with_coordination()` - Generate quality review with coordination awareness.

### scripts/riley_heartbeat_cal.py


Riley Heartbeat with Cross-Agent Learning
Research agent that shares findings and learns from others


**Functions:**

- `main()`

### scripts/riley_research.py


Riley Research Agent - Core Implementation
Monitors academic integrity & GenAI developments
Creates research briefings using real search tools


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `create_research_briefing()` - Create a research briefing with real findings and context awareness
- `discover_new_sources()` - Research and discover new sources
- `check_twitter_mentions()` - Check for Twitter/X mentions of @DrLancaster
- `fact_check_claim(claim)` - Fact-check a specific claim
- `main()` - Execute based on command line argument

### scripts/riley_research_v2.py


Riley Research Agent v2 - With Live Web Search
Monitors academic integrity & GenAI developments using real search


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `web_search(query, count)` - Perform web search using openclaw web_search
- `create_research_briefing()` - Create a research briefing with real findings
- `discover_new_sources()` - Research and discover new sources
- `check_twitter_mentions()` - Check for Twitter/X mentions of @DrLancaster
- `main()` - Execute based on command line argument

### scripts/riley_research_v3.py


Riley Research Agent v3 - Fixed Web Search
Uses available web search tools correctly


**Functions:**

- `log_activity(action, details)` - Log activity to daily file
- `web_search_brave(query, count)` - Perform web search using Brave API directly
- `create_research_briefing()` - Create a research briefing with REAL findings
- `discover_new_sources()` - Research and discover new sources
- `check_twitter_mentions()` - Check for Twitter/X mentions of @DrLancaster
- `main()` - Execute based on command line argument

### scripts/riley_twitter_check.py


Riley Twitter/X Monitor
Checks for mentions of @DrLancaster and relevant hashtags
Note: Requires Twitter API credentials for full functionality


**Functions:**

- `log_check(status, details)` - Log Twitter check to file
- `check_mentions()` - Check for @DrLancaster mentions
- `check_hashtags()` - Monitor relevant hashtags
- `main()`

### scripts/riley_with_context.py


Agent Context Wrapper - Riley (Research Agent)
Wraps Riley's research briefing generation with context injection


**Functions:**

- `generate_research_briefing_with_context()` - Generate research briefing with Thomas's context injected.

### scripts/riley_with_coordination.py


Agent Coordination Wrapper - Riley (Research Agent)
Registers outputs and uses coordination context


**Functions:**

- `create_briefing_with_coordination(topics)` - Create research briefing with coordination awareness.

### scripts/rss_feed_monitor.py


RSS Feed Monitor v1.0.0
Monitors multiple RSS feeds and auto-triggers workflows on new content

Features:
- Monitor multiple RSS feeds concurrently
- Detect new items since last check
- Auto-trigger cross-agent workflows on new content
- Categorize content by topic/title keywords
- Integration with existing workflow system
- Persistent state tracking

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8c1360d0>]`
- `from_entry(cls, entry: Dict, feed_config: Dict, feed_name: str) -> 'FeedItem'` - Create FeedItem from feedparser entry
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7e6b8c12ae90>]`
- `__init__(self)`
- `_load_config(self)` - Load feed configuration
- `_save_config(self)` - Save feed configuration
- `_load_state(self)` - Load monitoring state
- `_save_state(self)` - Save monitoring state
- `_load_items(self)` - Load detected items
- `_save_items(self)` - Save detected items
- `fetch_feed(self, feed_name: str, feed_config: Dict) -> List[FeedItem]` - Fetch and parse a single RSS feed
- `check_all_feeds(self) -> List[FeedItem]` - Check all configured feeds
- `categorize_items(self, items: List[FeedItem]) -> Dict[<ast.Tuple object at 0x7e6b8bf91750>]` - Categorize items by priority and category
- `trigger_workflows(self, items: List[FeedItem]) -> List[str]` - Trigger cross-agent workflows for relevant items
- `_create_content_workflow(self, item: FeedItem) -> str` - Create a content workflow for a detected item
- `generate_report(self) -> str` - Generate monitoring report
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7e6b8bfd5fd0>]` - Get monitoring statistics
- `run(self, auto_trigger: bool) -> Dict[<ast.Tuple object at 0x7e6b8bfe28d0>]` - Run full monitoring cycle

**Classes:**

- `FeedItem` - Single RSS feed item
  - `to_dict()`
  - `from_entry()` - Create FeedItem from feedparser entry
- `FeedState` - State of a feed's monitoring
  - `to_dict()`
- `RSSFeedMonitor` - Main RSS feed monitoring system
  - `__init__()`
  - `_load_config()` - Load feed configuration
  - `_save_config()` - Save feed configuration
  - `_load_state()` - Load monitoring state
  - `_save_state()` - Save monitoring state
  - ... and 10 more methods

### scripts/send_alert.py


Alert Notification System for Health Checks
Sends alerts to zak@trueworkoffice.com when issues are detected


**Functions:**

- `send_alert()` - Process and send alert based on current status

### scripts/send_briefing_email.py


Academic Integrity Briefing Delivery - SMTP Direct
Sends daily briefing to Thomas via email (owner@redacted.invalid)
Uses Python smtplib for reliable delivery


**Functions:**

- `send_briefing_email()` - Send the latest briefing to Thomas via SMTP
- `main()`

### scripts/send_briefing_smtp.py


Academic Integrity Briefing Delivery - SMTP Direct
Sends daily briefing to Thomas via email (owner@redacted.invalid)
Uses Python smtplib for reliable delivery


**Functions:**

- `send_briefing_email()` - Send the latest briefing to Thomas via SMTP
- `main()`

### scripts/send_feature5_notification.py


Feature #5 Deployment Notification
Sends deployment notification to Thomas


**Functions:**

- `send_deployment_email()` - Send deployment notification

### scripts/setup_google_calendar.py


Google Calendar API Setup Script
Guides through OAuth setup and credential configuration

Author: Zak
Version: 1.0.0


**Functions:**

- `print_header(title)`
- `check_dependencies()` - Check if Google API libraries are installed
- `setup_credentials()` - Guide through credential setup
- `configure_calendar()` - Configure calendar settings
- `test_connection()` - Test the Google Calendar connection
- `show_usage()` - Show usage examples
- `main()` - Main setup flow

### scripts/smart_decision_layer.py


Smart Decision Layer for OpenClaw Agent Team

Provides intelligent, context-aware decision making for task scheduling,
prioritisation, and alerting. Enhances existing cron/heartbeat system
without replacing it.

Author: Zak
Created: 2026-02-06


**Functions:**

- `main()` - CLI for testing the Smart Decision Layer
- `__init__(self)`
- `_load_context(self) -> SystemContext` - Load current system context from logs and memory
- `_load_agent_status(self) -> Dict[<ast.Tuple object at 0x7e6b8bbcd750>]` - Load status for all agents from daily logs
- `_calculate_health_score(self, name: str, outputs: int, errors: int) -> float` - Calculate agent health score (0-1)
- `_check_email_backlog(self) -> int` - Check zak inbox for unread/important emails
- `_load_recent_errors(self) -> List[str]` - Load recent errors from alert log
- `_analyze_token_trend(self) -> str` - Analyze token usage trend from analytics
- `_get_last_user_interaction(self) -> Optional[datetime]` - Get timestamp of last user message
- `should_run_agent_check(self, agent_name: str) -> Tuple[<ast.Tuple object at 0x7e6b8bbe8810>]` - Decide if we should actively check an agent's status.
- `should_alert_thomas(self, finding: str, severity: str) -> Tuple[<ast.Tuple object at 0x7e6b8bbd9790>]` - Decide if an alert should be sent to Thomas.
- `_check_recent_alerts(self, finding: str) -> bool` - Check if similar alert was sent recently
- `adjust_heartbeat_interval(self, agent_name: str, base_interval: int) -> int` - Dynamically adjust heartbeat interval based on agent health.
- `get_task_priority(self, task_name: str) -> Tuple[<ast.Tuple object at 0x7e6b8bc20e50>]` - Get priority for a task (1-10, 10 = highest).
- `generate_daily_improvements(self) -> List[<ast.Subscript object at 0x7e6b8bc2b450>]` - Generate 3 workflow improvement suggestions based on current context.
- `log_decision(self, decision_type: str, decision: str, reasoning: str)` - Log a decision for audit trail
- `get_summary(self) -> Dict` - Get summary of current context and decisions

**Classes:**

- `AgentStatus` - Current status of an agent
- `SystemContext` - System-wide context for decision making
- `SmartDecisionLayer` - Intelligent decision making for agent task scheduling and alerting.
  - `__init__()`
  - `_load_context()` - Load current system context from logs and memory
  - `_load_agent_status()` - Load status for all agents from daily logs
  - `_calculate_health_score()` - Calculate agent health score (0-1)
  - `_check_email_backlog()` - Check zak inbox for unread/important emails
  - ... and 11 more methods

### scripts/subagent_context_manager.py


Sub-Agent Context Manager
Prevents token overflow in spawned agent sessions


**Functions:**

- `prepare_subagent_task(task: str, context: List[Dict]) -> str` - One-liner to prepare sub-agent task
- `__init__(self, max_tokens, preserve_recent)`
- `prepare_for_subagent(self, task_description: str, context_items: List[Dict], max_item_size: int) -> str` - Prepare compressed context for sub-agent
- `compress_tool_results(self, results: List[Dict]) -> List[Dict]` - Compress tool call results to reduce context size
- `estimate_tokens(self, text: str) -> int` - Rough token estimation

**Classes:**

- `SubAgentContextManager` - Manages context for sub-agents to prevent token overflow
  - `__init__()`
  - `prepare_for_subagent()` - Prepare compressed context for sub-agent
  - `compress_tool_results()` - Compress tool call results to reduce context size
  - `estimate_tokens()` - Rough token estimation

### scripts/test_adaptive_scheduler.py


Comprehensive test suite for Adaptive P0 Scheduler
Validates all functionality including edge cases and duty changes


**Functions:**

- `__init__(self)`
- `setup(self)` - Set up test environment
- `teardown(self)` - Clean up test environment
- `test(self, name, condition, error_msg)`
- `run_all_tests(self)`

**Classes:**

- `TestAdaptiveScheduler` - Test suite for adaptive scheduling
  - `__init__()`
  - `setup()` - Set up test environment
  - `teardown()` - Clean up test environment
  - `test()`
  - `run_all_tests()`

### scripts/test_auto_knowledge_base.py


Test suite for Auto-Knowledge Base
Validates extraction, search, and edge cases


**Functions:**

- `__init__(self)`
- `setup(self)` - Set up isolated test environment
- `teardown(self)` - Clean up
- `test(self, name, condition, error_msg)`
- `run_all_tests(self)`

**Classes:**

- `TestAutoKnowledgeBase` - Comprehensive test suite
  - `__init__()`
  - `setup()` - Set up isolated test environment
  - `teardown()` - Clean up
  - `test()`
  - `run_all_tests()`

### scripts/test_cross_agent_learning.py


Cross-Agent Learning System - Comprehensive Tests
Validates all functionality including edge cases and duty changes


**Functions:**

- `main()`
- `__init__(self)`
- `test(self, name, condition, error_msg)` - Run a single test
- `run_all_tests(self)` - Run all tests

**Classes:**

- `TestCrossAgentLearning` - Comprehensive test suite
  - `__init__()`
  - `test()` - Run a single test
  - `run_all_tests()` - Run all tests

### scripts/token_analytics.py


Token Usage Analytics and Monitoring
Tracks token consumption and generates insights

NOTE: This script requires usage events to be logged via log_request().
If no events are logged, usage will show as 0%.
For current session usage, check `openclaw status` or session_status.


**Functions:**

- `quick_report()` - One-liner to get current report
- `check_status()` - Quick status check - reports ACTUAL logged data
- `__init__(self)`
- `load_history(self)` - Load historical usage data from usage_history.jsonl
- `log_request(self, agent, task, tokens_input, tokens_output, duration)` - Log a token usage event - CALL THIS FROM AGENT CODE
- `get_weekly_usage(self)` - Get usage for current week from logged events
- `check_thresholds(self)` - Check if usage exceeds thresholds
- `generate_report(self)` - Generate comprehensive usage report

**Classes:**

- `TokenAnalytics`
  - `__init__()`
  - `load_history()` - Load historical usage data from usage_history.jsonl
  - `log_request()` - Log a token usage event - CALL THIS FROM AGENT CODE
  - `get_weekly_usage()` - Get usage for current week from logged events
  - `check_thresholds()` - Check if usage exceeds thresholds
  - ... and 1 more methods

### scripts/token_dashboard.py


Token Efficiency Dashboard
Interactive monitoring and optimization interface.

Owner: Ava (Analyst Agent)
Usage: python3 token_dashboard.py


**Functions:**

- `clear_screen()` - Clear terminal screen.
- `print_header()` - Print dashboard header.
- `print_menu()` - Print main menu.
- `run_monitor_command(args)` - Run token monitor with given args.
- `view_report()` - Display current usage report.
- `check_status()` - Check threshold status.
- `get_efficiency_tip()` - Display efficiency tip.
- `log_usage()` - Interactive token logging.
- `view_documentation()` - Show documentation options.
- `run_setup()` - Run setup and validation.
- `main()` - Main dashboard loop.

### scripts/token_monitor.py


Token Usage Monitor
Tracks API token consumption and triggers alerts based on thresholds.

Owner: Ava (Analyst Agent)
Usage: python3 token_monitor.py [--check | --report | --alert-test]


**Functions:**

- `main()` - Main entry point.
- `__init__(self)`
- `_load_state(self) -> Dict` - Load persistent state.
- `_save_state(self)` - Save persistent state.
- `_load_usage_log(self) -> List[Dict]` - Load token usage log.
- `_get_weekly_usage(self) -> int` - Calculate tokens used in current week.
- `_get_daily_usage(self) -> int` - Calculate tokens used today.
- `_calculate_efficiency_score(self) -> float` - Calculate prompt efficiency score (0-1).
- `log_usage(self, tokens: int, task: str, efficiency: Optional[float])` - Log a token usage entry.
- `check_thresholds(self) -> Dict` - Check current usage against thresholds.
- `generate_report(self) -> str` - Generate formatted usage report.
- `should_alert(self) -> bool` - Check if alert should be sent (prevents spam).
- `record_check(self)` - Record that a check was performed.

**Classes:**

- `TokenMonitor` - Monitors token usage and manages alerts.
  - `__init__()`
  - `_load_state()` - Load persistent state.
  - `_save_state()` - Save persistent state.
  - `_load_usage_log()` - Load token usage log.
  - `_get_weekly_usage()` - Calculate tokens used in current week.
  - ... and 7 more methods

### scripts/unified_agent_dashboard.py


Unified Agent Dashboard v1.0.0
Real-time monitoring dashboard for all Zak subagents

Features:
- Live agent heartbeat status
- Recent outputs display
- Health metrics and alerts
- Performance statistics
- Auto-refresh capability

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - Main entry point
- `__init__(self)`
- `_parse_heartbeat_log(self, agent: str) -> Optional[<ast.Subscript object at 0x7e6b8b603e10>]` - Parse the latest heartbeat from an agent's log
- `_count_daily_outputs(self, agent: str) -> int` - Count outputs created by agent today
- `_get_agent_alerts(self, agent: str) -> List[str]` - Get recent alerts for an agent
- `_get_recent_system_alerts(self) -> List[<ast.Subscript object at 0x7e6b8b615d50>]` - Get recent system-wide alerts
- `_get_top_themes(self) -> List[str]` - Extract top themes from recent outputs
- `generate_dashboard(self) -> DashboardData` - Generate complete dashboard data
- `save_json(self, data: DashboardData)` - Save dashboard data as JSON
- `generate_html(self, data: DashboardData)` - Generate HTML dashboard
- `run(self)` - Generate complete dashboard

**Classes:**

- `AgentStatus` - Current status of an agent
- `DashboardData` - Complete dashboard state
- `AgentDashboard` - Generates real-time agent dashboard
  - `__init__()`
  - `_parse_heartbeat_log()` - Parse the latest heartbeat from an agent's log
  - `_count_daily_outputs()` - Count outputs created by agent today
  - `_get_agent_alerts()` - Get recent alerts for an agent
  - `_get_recent_system_alerts()` - Get recent system-wide alerts
  - ... and 5 more methods

### scripts/universal_delivery.py


Universal Email Delivery System with Confirmation
Wraps ALL emails (scheduled, one-off, future) with tracking and fallback

Usage:
    from universal_delivery import send_email
    
    send_email(
        to="owner@redacted.invalid",
        subject="My Email",
        body="Content",
        email_type="my-briefing",  # Used for tracking
        is_critical=True,          # Triggers Telegram fallback on failure
        sender_agent="Riley"       # For attribution
    )

Features:
- Universal wrapper for all outbound emails
- Automatic delivery confirmation
- Telegram fallback for critical emails
- Delivery receipts
- Comprehensive logging
- Easy future extensibility

Author: Zak
Version: 2.0.0


**Functions:**

- `send_email(to: str, subject: str, body: str, email_type: str, is_critical: Optional[bool], sender_agent: str, **kwargs) -> DeliveryResult` - Convenience function to send an email with delivery confirmation.
- `with_delivery_confirmation(email_type: str, is_critical: bool)` - Decorator to wrap email-sending functions with delivery confirmation.
- `main()` - CLI entry point
- `to_dict(self) -> Dict`
- `__new__(cls)` - Singleton pattern - only one delivery system instance
- `__init__(self)`
- `_load_state(self) -> Dict` - Load persistent delivery state
- `_save_state(self)` - Save persistent delivery state
- `_log(self, message: str, level: str)` - Log delivery activity
- `register_email_type(self, email_type: str, description: str, is_critical: bool)` - Register a new email type for tracking.
- `send_email(self, to: str, subject: str, body: str, email_type: str, is_critical: Optional[bool], sender_agent: str, html_body: Optional[str], attachments: Optional[<ast.Subscript object at 0x7e6b8b3bcf10>]) -> DeliveryResult` - Universal email send with delivery confirmation.
- `_register_email_in_registry(self, email_type: str, delivery_info: Dict)` - Track all emails by type for analytics
- `_schedule_auto_confirmation(self, tracking_id: str)` - Schedule automatic confirmation after configured delay
- `confirm_delivery(self, tracking_id: str, verified: bool) -> bool` - Mark a delivery as confirmed.
- `_send_delivery_receipt(self, delivery: Dict)` - Send lightweight delivery confirmation via Telegram queue
- `_telegram_fallback(self, subject: str, body: str, email_type: str, error: str)` - Send critical briefing via Telegram when email fails
- `_queue_telegram_message(self, message: str, is_receipt: bool, is_fallback: bool)` - Queue message for Telegram delivery
- `retry_failed(self, tracking_id: str) -> DeliveryResult` - Retry a failed or pending delivery
- `_escalate_delivery(self, delivery: Dict, reason: str)` - Escalate persistent delivery failures
- `get_status(self) -> Dict` - Get current delivery system status
- `get_pending_deliveries(self) -> Dict[<ast.Tuple object at 0x7e6b8b4474d0>]` - Get all pending deliveries
- `get_failed_deliveries(self) -> Dict[<ast.Tuple object at 0x7e6b8b447e90>]` - Get all failed deliveries
- `run_verification(self) -> Dict` - Run verification cycle on all pending deliveries.
- `decorator(func: Callable) -> Callable`
- `wrapper(*args, **kwargs)`

**Classes:**

- `DeliveryResult` - Result of an email delivery attempt
  - `to_dict()`
- `UniversalDeliverySystem` - Universal email delivery system with confirmation tracking.
  - `__new__()` - Singleton pattern - only one delivery system instance
  - `__init__()`
  - `_load_state()` - Load persistent delivery state
  - `_save_state()` - Save persistent delivery state
  - `_log()` - Log delivery activity
  - ... and 14 more methods

### scripts/verify_deliveries.py


Universal Delivery Verification Script
Runs 5-10 minutes after scheduled email times to verify delivery


**Functions:**

- `main()`

### scripts/weekly_report.py


Weekly Health Report Generator
Sends summary of system health to zak@trueworkoffice.com


**Functions:**

- `generate_weekly_report()` - Generate weekly health summary
- `main()`

### send_blogwatcher_summary.py

### skills/browseract/scripts/browseract.py


BrowserAct Helper Script
Simplified interface for common web scraping tasks


**Functions:**

- `api_call(method, endpoint, data)` - Make API call to BrowserAct
- `list_workflows()` - List available workflows
- `scrape_url(workflow_id, url, wait, save_session)` - Scrape a single URL using specified workflow
- `wait_for_completion(task_id, timeout)` - Wait for task to complete
- `get_results(task_id)` - Get full task results
- `list_tasks(limit)` - List recent tasks
- `main()`

### skills/gsc/scripts/gsc_auth.py


Google Search Console OAuth Authentication

Generates OAuth credentials for the Search Console API.
Run this once to get a refresh token, then use it in .env

Usage:
    python gsc_auth.py --client-id YOUR_CLIENT_ID --client-secret YOUR_CLIENT_SECRET
    
Or set environment variables:
    GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET


**Functions:**

- `main()`

### skills/gsc/scripts/gsc_query.py


Google Search Console API Query Tool

Queries GSC for search analytics, URL inspection, sitemaps, and more.

Usage:
    python gsc_query.py search-analytics --site https://example.com --days 28
    python gsc_query.py top-queries --site https://example.com --limit 20
    python gsc_query.py top-pages --site https://example.com --limit 20
    python gsc_query.py inspect-url --site https://example.com --url /some/page
    python gsc_query.py sitemaps --site https://example.com
    python gsc_query.py sites


**Functions:**

- `get_credentials() -> Credentials` - Get credentials from environment variables.
- `get_service()` - Build the Search Console service.
- `list_sites()` - List all sites available in Search Console.
- `search_analytics(site_url: str, days: int, dimensions: list, row_limit: int, start_date: str, end_date: str)` - Query search analytics data.
- `top_queries(site_url: str, days: int, limit: int)` - Get top search queries.
- `top_pages(site_url: str, days: int, limit: int)` - Get top pages by clicks.
- `query_page_analysis(site_url: str, days: int, limit: int)` - Get query-page combinations for deeper analysis.
- `low_ctr_opportunities(site_url: str, days: int, min_impressions: int)` - Find high-impression, low-CTR opportunities.
- `inspect_url(site_url: str, url: str)` - Inspect a specific URL's indexing status.
- `list_sitemaps(site_url: str)` - List all sitemaps for a site.
- `main()`

### skills/model-usage/scripts/model_usage.py


Summarize CodexBar local cost usage by model.

Defaults to current model (most recent daily entry), or list all models.


**Functions:**

- `eprint(msg: str) -> None`
- `run_codexbar_cost(provider: str) -> List[<ast.Subscript object at 0x7e6b8ad0f190>]`
- `load_payload(input_path: Optional[str], provider: str) -> Dict[<ast.Tuple object at 0x7e6b8ad07310>]`
- `parse_daily_entries(payload: Dict[<ast.Tuple object at 0x7e6b8ad068d0>]) -> List[<ast.Subscript object at 0x7e6b8ad05290>]`
- `parse_date(value: str) -> Optional[date]`
- `filter_by_days(entries: List[<ast.Subscript object at 0x7e6b8ad03cd0>], days: Optional[int]) -> List[<ast.Subscript object at 0x7e6b8ad01050>]`
- `aggregate_costs(entries: Iterable[<ast.Subscript object at 0x7e6b8ad00a50>]) -> Dict[<ast.Tuple object at 0x7e6b8acfd0d0>]`
- `pick_current_model(entries: List[<ast.Subscript object at 0x7e6b8acfcbd0>]) -> Tuple[<ast.Tuple object at 0x7e6b8ad116d0>]`
- `usd(value: Optional[float]) -> str`
- `latest_day_cost(entries: List[<ast.Subscript object at 0x7e6b8ad10250>], model: str) -> Tuple[<ast.Tuple object at 0x7e6b8ad486d0>]`
- `render_text_current(provider: str, model: str, latest_date: Optional[str], total_cost: Optional[float], latest_cost: Optional[float], latest_cost_date: Optional[str], entry_count: int) -> str`
- `render_text_all(provider: str, totals: Dict[<ast.Tuple object at 0x7e6b8ad50250>]) -> str`
- `build_json_current(provider: str, model: str, latest_date: Optional[str], total_cost: Optional[float], latest_cost: Optional[float], latest_cost_date: Optional[str], entry_count: int) -> Dict[<ast.Tuple object at 0x7e6b8ad53a90>]`
- `build_json_all(provider: str, totals: Dict[<ast.Tuple object at 0x7e6b8ad5c0d0>]) -> Dict[<ast.Tuple object at 0x7e6b8ad5d850>]`
- `main() -> int`

**Classes:**

- `ModelCost`

### skills/openai-image-gen/scripts/gen.py

**Functions:**

- `slugify(text: str) -> str`
- `default_out_dir() -> Path`
- `pick_prompts(count: int) -> list[str]`
- `get_model_defaults(model: str) -> tuple[<ast.Tuple object at 0x7e6b8aab7410>]` - Return (default_size, default_quality) for the given model.
- `request_images(api_key: str, prompt: str, model: str, size: str, quality: str, background: str, output_format: str, style: str) -> dict`
- `write_gallery(out_dir: Path, items: list[dict]) -> None`
- `main() -> int`

### skills/skill-creator/scripts/init_skill.py


Skill Initializer - Creates a new skill from template

Usage:
    init_skill.py <skill-name> --path <path> [--resources scripts,references,assets] [--examples]

Examples:
    init_skill.py my-new-skill --path skills/public
    init_skill.py my-new-skill --path skills/public --resources scripts,references
    init_skill.py my-api-helper --path skills/private --resources scripts --examples
    init_skill.py custom-skill --path /custom/location


**Functions:**

- `normalize_skill_name(skill_name)` - Normalize a skill name to lowercase hyphen-case.
- `title_case_skill_name(skill_name)` - Convert hyphenated skill name to Title Case for display.
- `parse_resources(raw_resources)`
- `create_resource_dirs(skill_dir, skill_name, skill_title, resources, include_examples)`
- `init_skill(skill_name, path, resources, include_examples)` - Initialize a new skill directory with template SKILL.md.
- `main()`

### skills/skill-creator/scripts/package_skill.py


Skill Packager - Creates a distributable .skill file of a skill folder

Usage:
    python utils/package_skill.py <path/to/skill-folder> [output-directory]

Example:
    python utils/package_skill.py skills/public/my-skill
    python utils/package_skill.py skills/public/my-skill ./dist


**Functions:**

- `package_skill(skill_path, output_dir)` - Package a skill folder into a .skill file.
- `main()`

### skills/skill-creator/scripts/quick_validate.py


Quick validation script for skills - minimal version


**Functions:**

- `validate_skill(skill_path)` - Basic validation of a skill

### skills/web-search-plus/scripts/search.py


Web Search Plus — Unified Multi-Provider Search with Intelligent Auto-Routing
Supports: Serper (Google), Tavily (Research), Exa (Neural)

Smart Routing uses multi-signal analysis:
  - Query intent classification (shopping, research, discovery)
  - Linguistic pattern detection (how much vs how does)
  - Product/brand recognition
  - URL detection
  - Confidence scoring

Usage:
    python3 search.py --query "..."                    # Auto-route based on query
    python3 search.py --provider [serper|tavily|exa] --query "..." [options]

Examples:
    python3 search.py -q "iPhone 16 Pro price"              # → Serper (shopping intent)
    python3 search.py -q "how does quantum entanglement work"  # → Tavily (research intent)
    python3 search.py -q "startups similar to Notion"       # → Exa (discovery intent)


**Functions:**

- `load_config() -> Dict[<ast.Tuple object at 0x7e6b8ab2aa50>]` - Load configuration from config.json if it exists, with defaults.
- `get_env_key(provider: str) -> Optional[str]` - Get API key for provider from environment.
- `validate_api_key(provider: str) -> str` - Validate and return API key, with helpful error messages.
- `auto_route_provider(query: str, config: Dict[<ast.Tuple object at 0x7e6b8a9b5050>]) -> Dict[<ast.Tuple object at 0x7e6b8a9b5b90>]` - Intelligently route query to the best provider.
- `explain_routing(query: str, config: Dict[<ast.Tuple object at 0x7e6b8a9b6190>]) -> Dict[<ast.Tuple object at 0x7e6b8a9c80d0>]` - Provide detailed explanation of routing decision for debugging.
- `make_request(url: str, headers: dict, body: dict, timeout: int) -> dict` - Make HTTP POST request and return JSON response.
- `search_serper(query: str, api_key: str, max_results: int, country: str, language: str, search_type: str, time_range: Optional[str], include_images: bool) -> dict` - Search using Serper (Google Search API).
- `search_tavily(query: str, api_key: str, max_results: int, depth: str, topic: str, include_domains: Optional[<ast.Subscript object at 0x7e6b8a9f9650>], exclude_domains: Optional[<ast.Subscript object at 0x7e6b8a9f9950>], include_images: bool, include_raw_content: bool) -> dict` - Search using Tavily (AI Research Search).
- `search_exa(query: str, api_key: str, max_results: int, search_type: str, category: Optional[str], start_date: Optional[str], end_date: Optional[str], similar_url: Optional[str], include_domains: Optional[<ast.Subscript object at 0x7e6b8aa10150>], exclude_domains: Optional[<ast.Subscript object at 0x7e6b8aa10450>]) -> dict` - Search using Exa (Neural/Semantic Search).
- `main()`
- `__init__(self, config: Dict[<ast.Tuple object at 0x7e6b8ab03290>])`
- `_calculate_signal_score(self, query: str, signals: Dict[<ast.Tuple object at 0x7e6b8ab022d0>]) -> Tuple[<ast.Tuple object at 0x7e6b8a99d6d0>]` - Calculate score for a signal category.
- `_detect_product_brand_combo(self, query: str) -> float` - Detect product + brand combinations which strongly indicate shopping intent.
- `_detect_url(self, query: str) -> Optional[str]` - Detect URLs in query - strong signal for Exa similar search.
- `_assess_query_complexity(self, query: str) -> Dict[<ast.Tuple object at 0x7e6b8ab424d0>]` - Assess query complexity - complex queries favor Tavily.
- `_detect_recency_intent(self, query: str) -> Tuple[<ast.Tuple object at 0x7e6b8ab40290>]` - Detect if query wants recent/timely information.
- `analyze(self, query: str) -> Dict[<ast.Tuple object at 0x7e6b8ab1d0d0>]` - Perform comprehensive query analysis.
- `route(self, query: str) -> Dict[<ast.Tuple object at 0x7e6b8a9b49d0>]` - Route query to optimal provider with confidence scoring.

**Classes:**

- `QueryAnalyzer` - Intelligent query analysis for smart provider routing.
  - `__init__()`
  - `_calculate_signal_score()` - Calculate score for a signal category.
  - `_detect_product_brand_combo()` - Detect product + brand combinations which strongly indicate 
  - `_detect_url()` - Detect URLs in query - strong signal for Exa similar search.
  - `_assess_query_complexity()` - Assess query complexity - complex queries favor Tavily.
  - ... and 3 more methods

### test_browser.py

### tests/test_batch_processor.py


Batch Processing Test - Autonomous Task Executor
Tests batch_processor.py with real research tasks


### tests/test_performance_analytics.py


Performance Analytics Test Suite
Feature #8: Comprehensive testing


**Functions:**

- `test_database()` - Test database initialization
- `test_record_performance()` - Test recording performance data
- `test_trend_analysis()` - Test trend analysis
- `test_dashboard()` - Test dashboard data generation
- `test_integration()` - Test system integration
- `test_heartbeat()` - Test heartbeat data collection
- `test_reporting()` - Test report generation
- `test_alerts()` - Test alerting system
- `main()` - Run all tests

### true-work-office/public/fixed-server.py


Control Panel Web Server - Always Running, Accessible from Anywhere
Auto-restarts on crash, never stops serving


**Functions:**

- `start_server()`
- `log_message(self, format, *args)`
- `do_GET(self)`

**Classes:**

- `QuietHTTPRequestHandler`
  - `log_message()`
  - `do_GET()`

## Documentation Coverage

Overall coverage: **84.1%**

### Files Needing Documentation

- `/root/.openclaw/workspace/notion_click_add.py` (0%)
- `/root/.openclaw/workspace/notion_js_find.py` (0%)
- `/root/.openclaw/workspace/github_login.py` (0%)
- `/root/.openclaw/workspace/notion_login.py` (0%)
- `/root/.openclaw/workspace/notion_setup_workspace.py` (0%)
- `/root/.openclaw/workspace/github_get_token.py` (0%)
- `/root/.openclaw/workspace/notion_login_flow.py` (0%)
- `/root/.openclaw/workspace/ava_email_setup.py` (0%)
- `/root/.openclaw/workspace/notion_direct_create.py` (0%)
- `/root/.openclaw/workspace/send_blogwatcher_summary.py` (0%)
