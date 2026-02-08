# Workspace

Auto-generated project documentation.
*Generated: 2026-02-08 19:35 UTC*

## Overview

This project contains **402** Python modules with:
- **2653** functions
- **272** classes
- **86.6%** documentation coverage

## Quick Start

### Main Scripts

- **agent_memory.py** - 
- **ava_email_setup.py** - No description available
- **gh_create_project.py** - No description available
- **github_get_token.py** - No description available
- **github_login.py** - No description available
- **main_session_memory.py** - 
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
- **ocl_ask_wrapper.py** - 
- **openclaw_cli.py** - 
- **quinn_email_setup.py** - No description available
- **research_scout.py** - 
- **research_scout_notion_export.py** - 
- **riley_email_monitor.py** - 
- **send_blogwatcher_summary.py** - No description available
- **send_feature28_email.py** - 
- **send_feature33_email.py** - 
- **send_feature34_email.py** - 
- **send_feature35_email.py** - 
- **send_feature36_email.py** - 
- **send_feature37_email.py** - 
- **send_feature38_email.py** - 
- **send_feature42_email.py** - 
- **send_feature43_email_final.py** - 
- **send_feature44_email.py** - 
- **send_feature_26_email.py** - 
- **subagent_memory.py** - 
- **test_browser.py** - No description available
- **test_memory.py** - 
- **test_research_scout.py** - 

## Modules

### agent_memory.py


Agent Conversation Memory System (Feature #26)
Provides persistent, queryable memory for agents across sessions.


**Functions:**

- `get_memory(agent_id: str) -> ConversationMemory` - Get a memory instance for an agent.
- `get_manager() -> AgentMemoryManager` - Get the global memory manager.
- `to_dict(self) -> Dict`
- `from_dict(cls, data: Dict) -> 'MemoryEntry'`
- `__init__(self, agent_id: str)`
- `_ensure_db(self)` - Initialize the database schema.
- `_generate_id(self, content: str, agent_id: str) -> str` - Generate a deterministic ID for deduplication.
- `_content_hash(self, content: str) -> str` - Generate hash for content deduplication.
- `store(self, content: str, memory_type: str, source: str, importance: int, tags: List[str], session_id: str, confidence: float, expires_in_hours: Optional[int]) -> str` - Store a new memory entry.
- `recall(self, query: str, memory_type: str, tags: List[str], min_importance: int, limit: int, include_expired: bool) -> List[Dict]` - Search and retrieve memories.
- `get_context_for_session(self, session_id: str, limit: int) -> str` - Retrieve formatted context for a new session.
- `consolidate_memories(self)` - Consolidate related memories and remove duplicates.
- `get_memory_stats(self) -> Dict` - Get statistics about the memory store.
- `delete_memory(self, memory_id: str) -> bool` - Delete a specific memory.
- `update_importance(self, memory_id: str, new_importance: int)` - Update the importance of a memory.
- `__init__(self)`
- `_ensure_db(self)` - Ensure shared tables exist.
- `set_shared_context(self, key: str, value: str, agent_id: str, importance: int)` - Set a shared context value visible to all agents.
- `get_shared_context(self, key: str) -> Dict` - Get shared context values.
- `get_all_agents_stats(self) -> Dict` - Get memory statistics for all agents.

**Classes:**

- `MemoryEntry` - A single memory entry with metadata.
  - `to_dict()`
  - `from_dict()`
- `ConversationMemory` - Persistent conversation memory for agents.
  - `__init__()`
  - `_ensure_db()` - Initialize the database schema.
  - `_generate_id()` - Generate a deterministic ID for deduplication.
  - `_content_hash()` - Generate hash for content deduplication.
  - `store()` - Store a new memory entry.
  - ... and 6 more methods
- `AgentMemoryManager` - Manager for coordinating memory across multiple agents.
  - `__init__()`
  - `_ensure_db()` - Ensure shared tables exist.
  - `set_shared_context()` - Set a shared context value visible to all agents.
  - `get_shared_context()` - Get shared context values.
  - `get_all_agents_stats()` - Get memory statistics for all agents.

### ava_email_setup.py

### backups/scripts/send_feature10_email.py


Send Feature #10 completion email to Thomas


**Functions:**

- `main()`

### benchmarking/performance_benchmark.py


Performance Benchmark Suite - Feature #39
Tracks system performance over time, identifies bottlenecks, detects regressions.
Integrates with existing token monitoring and dashboard infrastructure.


**Functions:**

- `main()` - CLI entry point
- `to_dict(self) -> Dict`
- `__init__(self, db_path: Path)`
- `init_database(self)` - Initialize database schema
- `save_benchmark(self, result: BenchmarkResult) -> int` - Save a benchmark result, return the ID
- `get_baseline(self, category: str, operation: str) -> Optional[Dict]` - Get baseline for a specific operation
- `update_baseline(self, category: str, operation: str, duration_ms: float, cpu_percent: float, memory_mb: float)` - Update or create baseline for an operation
- `record_regression(self, category: str, operation: str, baseline_ms: float, actual_ms: float, degradation_pct: float, severity: str)` - Record a detected regression
- `get_recent_benchmarks(self, hours: int) -> List[Dict]` - Get benchmarks from the last N hours
- `get_regressions(self, days: int, unacknowledged_only: bool) -> List[Dict]` - Get recent regressions
- `__init__(self)`
- `benchmark(self, category: str, operation: str, metadata: Dict)` - Context manager for timing operations
- `_check_regression(self, benchmark: BenchmarkResult)` - Check if this benchmark shows regression
- `run_system_benchmarks(self) -> Dict` - Run comprehensive system benchmarks
- `benchmark_file_operations(self, file_size_mb: int) -> Dict` - Benchmark file read/write operations
- `benchmark_api_calls(self) -> Dict` - Benchmark common API operations
- `__init__(self, db: PerformanceDatabase)`
- `generate_summary_report(self, days: int) -> str` - Generate markdown summary report
- `generate_dashboard_data(self) -> Dict` - Generate JSON data for dashboard
- `save_dashboard_data(self)` - Save dashboard data to JSON file

**Classes:**

- `BenchmarkResult` - Container for benchmark results
  - `to_dict()`
- `PerformanceDatabase` - SQLite backend for benchmark storage
  - `__init__()`
  - `init_database()` - Initialize database schema
  - `save_benchmark()` - Save a benchmark result, return the ID
  - `get_baseline()` - Get baseline for a specific operation
  - `update_baseline()` - Update or create baseline for an operation
  - ... and 3 more methods
- `PerformanceBenchmarker` - Main benchmarking engine
  - `__init__()`
  - `benchmark()` - Context manager for timing operations
  - `_check_regression()` - Check if this benchmark shows regression
  - `run_system_benchmarks()` - Run comprehensive system benchmarks
  - `benchmark_file_operations()` - Benchmark file read/write operations
  - ... and 1 more methods
- `ReportGenerator` - Generate performance reports
  - `__init__()`
  - `generate_summary_report()` - Generate markdown summary report
  - `generate_dashboard_data()` - Generate JSON data for dashboard
  - `save_dashboard_data()` - Save dashboard data to JSON file

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

### log-aggregator/cli/logsearch.py


Log Search CLI - Command-line interface for searching aggregated logs


**Functions:**

- `main()`
- `__init__(self)`
- `search(self, query: Optional[str], level: Optional[str], component: Optional[str], source: Optional[str], since: Optional[str], until: Optional[str], limit: int, format: str) -> None` - Search logs with filters
- `_level_color(self, level: str) -> str` - Get ANSI color code for log level
- `stats(self) -> None` - Show log statistics
- `patterns(self, since: Optional[str]) -> None` - Detect error patterns
- `tail(self, lines: int, follow: bool) -> None` - Show recent log entries (like tail -f)
- `aggregate(self) -> None` - Run log aggregation

**Classes:**

- `LogSearchCLI` - Command-line interface for log search
  - `__init__()`
  - `search()` - Search logs with filters
  - `_level_color()` - Get ANSI color code for log level
  - `stats()` - Show log statistics
  - `patterns()` - Detect error patterns
  - ... and 2 more methods

### log-aggregator/core/aggregator.py


Log Aggregation & Search System - Feature #24
Centralized log collection, indexing, and search across all OpenClaw logs.


**Functions:**

- `to_dict(self) -> Dict`
- `from_dict(cls, data: Dict) -> 'LogEntry'`
- `__init__(self, workspace_root: str)`
- `parse_line(self, line: str, source: str) -> Optional[LogEntry]` - Parse a single log line into LogEntry
- `_extract_timestamp(self, line: str) -> Optional[datetime]` - Extract timestamp from log line
- `_extract_level(self, line: str) -> str` - Extract log level from line
- `_extract_component(self, line: str, source: str) -> str` - Extract component name from line or source
- `_clean_message(self, line: str) -> str` - Remove timestamp/level markers to get clean message
- `_extract_metadata(self, line: str) -> Dict[<ast.Tuple object at 0x7eda6d749fd0>]` - Extract additional metadata from log line
- `parse_file(self, filepath: str) -> List[LogEntry]` - Parse entire log file
- `__init__(self, db_path: str)`
- `_init_db(self)` - Initialize SQLite database with indexes
- `index_entries(self, entries: List[LogEntry])` - Index multiple log entries
- `search(self, query: Optional[str], level: Optional[str], component: Optional[str], source: Optional[str], start_time: Optional[datetime], end_time: Optional[datetime], limit: int) -> List[LogEntry]` - Search indexed logs with filters
- `get_stats(self) -> Dict[<ast.Tuple object at 0x7eda6d796b90>]` - Get log statistics
- `clear_old_entries(self, days: int)` - Remove entries older than specified days
- `__init__(self, workspace_root: str)`
- `discover_logs(self) -> List[str]` - Discover all log files in workspace
- `aggregate(self, incremental: bool)` - Run full aggregation of all discovered logs
- `get_stats(self) -> Dict[<ast.Tuple object at 0x7eda6d7b5a50>]` - Get aggregation statistics

**Classes:**

- `LogEntry` - Standardized log entry format
  - `to_dict()`
  - `from_dict()`
- `LogParser` - Parse various log formats into standardized LogEntry objects
  - `__init__()`
  - `parse_line()` - Parse a single log line into LogEntry
  - `_extract_timestamp()` - Extract timestamp from log line
  - `_extract_level()` - Extract log level from line
  - `_extract_component()` - Extract component name from line or source
  - ... and 3 more methods
- `LogIndexer` - SQLite-based log indexing for fast search
  - `__init__()`
  - `_init_db()` - Initialize SQLite database with indexes
  - `index_entries()` - Index multiple log entries
  - `search()` - Search indexed logs with filters
  - `get_stats()` - Get log statistics
  - ... and 1 more methods
- `LogAggregator` - Main log aggregation orchestrator
  - `__init__()`
  - `discover_logs()` - Discover all log files in workspace
  - `aggregate()` - Run full aggregation of all discovered logs
  - `get_stats()` - Get aggregation statistics

### log-aggregator/cron/aggregate.py


Log Aggregation Cron - Periodic log aggregation and cleanup


**Functions:**

- `run_aggregation()` - Run log aggregation and generate report

### log-aggregator/patterns/detector.py


Pattern Detection Engine - Identifies error patterns and anomalies in logs


**Functions:**

- `__init__(self)`
- `_compile_patterns(self)` - Compile regex patterns for performance
- `detect_patterns(self, entries: List[Any]) -> List[PatternMatch]` - Detect patterns in log entries
- `detect_anomalies(self, entries: List[Any]) -> List[<ast.Subscript object at 0x7eda6d8b8510>]` - Detect statistical anomalies in log patterns
- `generate_summary(self, entries: List[Any]) -> Dict[<ast.Tuple object at 0x7eda6d8c2090>]` - Generate comprehensive pattern summary
- `analyze(self, entries: List[Any]) -> Dict[<ast.Tuple object at 0x7eda6d6dadd0>]` - Analyze trends in log entries

**Classes:**

- `PatternMatch` - A detected pattern in logs
- `ErrorPatternDetector` - Detect common error patterns and anomalies
  - `__init__()`
  - `_compile_patterns()` - Compile regex patterns for performance
  - `detect_patterns()` - Detect patterns in log entries
  - `detect_anomalies()` - Detect statistical anomalies in log patterns
  - `generate_summary()` - Generate comprehensive pattern summary
- `TrendAnalyzer` - Analyze trends in log data over time
  - `analyze()` - Analyze trends in log entries

### log-aggregator/web/dashboard.py


Log Aggregation Dashboard - Web interface for log search and analytics


**Functions:**

- `main()`
- `log_message(self, format, *args)`
- `do_GET(self)`
- `_serve_dashboard(self)` - Serve main dashboard HTML
- `_serve_stats(self)` - Serve stats API
- `_serve_search(self, params)` - Serve search API
- `_serve_patterns(self)` - Serve patterns API
- `_serve_tail(self, params)` - Serve recent logs API
- `_serve_404(self)` - Serve 404 response
- `_send_response(self, code: int, content: str, content_type: str)` - Send HTTP response
- `__init__(self, port: int)`
- `start(self)` - Start the dashboard server
- `stop(self)` - Stop the dashboard server

**Classes:**

- `LogDashboardHandler` - HTTP request handler for log dashboard
  - `log_message()`
  - `do_GET()`
  - `_serve_dashboard()` - Serve main dashboard HTML
  - `_serve_stats()` - Serve stats API
  - `_serve_search()` - Serve search API
  - ... and 4 more methods
- `LogDashboardServer` - Dashboard server management
  - `__init__()`
  - `start()` - Start the dashboard server
  - `stop()` - Stop the dashboard server

### main_session_memory.py


Main Session Memory Integration (Feature #26)
Integrates memory capture into main agent sessions.


**Functions:**

- `get_session_memory(session_id: str) -> SessionMemoryCapture` - Get a session memory capture instance.
- `capture_session_summary(user_id: str, objectives: List[str], completed: List[str], learnings: List[str])` - Capture end-of-session summary.
- `on_feature_completed(feature_number: int, feature_name: str, success: bool)` - Hook to call when a feature is completed.
- `__init__(self, session_id: str)`
- `capture_message(self, role: str, content: str, importance_hint: int)` - Process a message and extract memories.
- `capture_task_completion(self, task: str, result: str, success: bool)` - Record task completion for future reference.
- `capture_learning(self, insight: str, confidence: float)` - Explicitly capture a learning/insight.
- `get_session_context(self) -> str` - Get relevant context for the current session.
- `_calculate_importance(self, content: str, mem_type: str, source: str) -> int` - Calculate importance score for a memory.

**Classes:**

- `SessionMemoryCapture` - Captures important information from main agent sessions.
  - `__init__()`
  - `capture_message()` - Process a message and extract memories.
  - `capture_task_completion()` - Record task completion for future reference.
  - `capture_learning()` - Explicitly capture a learning/insight.
  - `get_session_context()` - Get relevant context for the current session.
  - ... and 1 more methods

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

### ocl_ask_wrapper.py


OCL Ask Command Wrapper
Adds 'ask' subcommand for natural language queries


**Functions:**

- `main()`

### openclaw_cli.py


OpenClaw Unified CLI - Feature #28
Single command-line interface for all 27 features

Usage:
    openclaw --help              Show all available commands
    openclaw health              Check subagent health
    openclaw memory              Manage agent memories
    openclaw dashboard           Launch dashboard server
    openclaw workflow            Manage cross-agent workflows
    ... and more

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `print_banner()` - Print CLI banner
- `print_feature_list()` - Print all available features
- `get_feature_status() -> Dict[<ast.Tuple object at 0x7eda747cd590>]` - Check status of all features
- `cmd_status(args)` - Show system status
- `cmd_list(args)` - List all features
- `cmd_health(args)` - Run health dashboard
- `cmd_memory(args)` - Run memory CLI
- `cmd_dashboard(args)` - Launch dashboard
- `cmd_logs(args)` - Run log search
- `cmd_standup(args)` - Generate daily standup
- `cmd_incident(args)` - Manage incidents
- `cmd_secrets(args)` - Secret rotation management
- `cmd_workflow(args)` - Manage workflows
- `cmd_priority(args)` - Task prioritization
- `cmd_alerts(args)` - Alert correlation
- `cmd_testing(args)` - Run tests
- `cmd_cost(args)` - Cost optimization
- `cmd_mesh(args)` - Network mesh management
- `cmd_ask(args)` - Natural language query
- `cmd_feature(args)` - Feature retirement management
- `cmd_interactive(args)` - Interactive mode
- `main()`

**Classes:**

- `MockArgs`
- `MockArgs`
- `MockArgs`

### quinn_email_setup.py

**Functions:**

- `setup_quinn_inbox()` - Create Quinn's email inbox and send test email

### research_scout.py


Research Scout - Main Entry Point
Feature #41 - Works in report mode if Notion not configured,
full export mode when pages are shared.


**Functions:**

- `load_config()` - Load configuration from file.
- `get_notion_token()` - Get Notion token from environment or file.
- `check_notion_access(token)` - Check if Notion integration has access to any pages.
- `generate_markdown_report(items, notion_available, notion_pages)` - Generate a comprehensive markdown report.
- `main()` - Main entry point.

### research_scout_notion_export.py


Research Scout Notion Export - Feature #41
Auto-exports high-priority research items to Notion, organized by category.


**Functions:**

- `main()` - Main entry point.
- `__init__(self, token: str)`
- `search_pages(self, query: str) -> List[Dict]` - Search for pages in Notion workspace.
- `get_workspace_pages(self) -> List[Dict]` - Get all top-level pages in workspace.
- `create_page(self, parent_id: str, title: str, content: str, category: str, priority: str) -> Optional[Dict]` - Create a new page in Notion.
- `get_or_create_database(self, parent_id: str, title: str) -> Optional[str]` - Get or create a database for research items.
- `add_to_database(self, database_id: str, title: str, category: str, priority: str, source_path: str, content_preview: str) -> bool` - Add a research item to the database.
- `__init__(self, notion_token: str, workspace_id: Optional[str])`
- `detect_priority(self, content: str, filename: str) -> Tuple[<ast.Tuple object at 0x7eda742ef110>]` - Detect priority and category from content.
- `scan_file(self, filepath: Path) -> Optional[Dict]` - Scan a single file for research content.
- `scan_folders(self) -> List[Dict]` - Scan all research folders for content.
- `initialize_workspace(self) -> bool` - Set up Notion workspace with database.
- `export_to_notion(self, items: List[Dict], max_items: int) -> Dict` - Export research items to Notion.
- `generate_report(self, items: List[Dict], export_results: Dict) -> str` - Generate a summary report.

**Classes:**

- `NotionClient` - Simple Notion API client.
  - `__init__()`
  - `search_pages()` - Search for pages in Notion workspace.
  - `get_workspace_pages()` - Get all top-level pages in workspace.
  - `create_page()` - Create a new page in Notion.
  - `get_or_create_database()` - Get or create a database for research items.
  - ... and 1 more methods
- `ResearchScout` - Scans and exports research items to Notion.
  - `__init__()`
  - `detect_priority()` - Detect priority and category from content.
  - `scan_file()` - Scan a single file for research content.
  - `scan_folders()` - Scan all research folders for content.
  - `initialize_workspace()` - Set up Notion workspace with database.
  - ... and 2 more methods

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
- `check_already_sent_today() -> bool` - Check if briefing was already sent today
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

### scripts/agent_capability_marketplace.py


Agent Capability Marketplace - Feature #35

A decentralized registry system allowing agents to:
- Advertise their capabilities (skills, tools, knowledge domains)
- Discover other agents' capabilities
- Request capability usage from other agents
- Track capability usage analytics

This enables dynamic skill exchange and collaboration between agents.


**Functions:**

- `get_registry() -> CapabilityRegistry` - Get the singleton registry instance
- `to_dict(self) -> Dict`
- `from_dict(cls, data: Dict) -> 'Capability'`
- `__init__(self, db_path: str)`
- `_get_conn(self) -> sqlite3.Connection`
- `_init_db(self)` - Initialize the database schema
- `register_agent(self, agent_id: str, name: str, description: str) -> bool` - Register a new agent in the marketplace
- `register_capability(self, capability: Capability) -> bool` - Register a new capability
- `discover_capabilities(self, category: Optional[str], tags: Optional[<ast.Subscript object at 0x7eda6f113590>], agent_id: Optional[str], query: Optional[str], status: str) -> List[Capability]` - Discover capabilities matching criteria
- `get_capability(self, capability_id: str) -> Optional[Capability]` - Get a specific capability by ID
- `request_capability_use(self, capability_id: str, requester_agent_id: str, requester_agent_name: str, request_data: Dict) -> Optional[str]` - Request to use a capability
- `respond_to_request(self, request_id: str, accept: bool, result: Optional[Dict], error_message: Optional[str]) -> bool` - Respond to a capability request
- `get_request(self, request_id: str) -> Optional[Dict]` - Get a capability request by ID
- `get_pending_requests(self, agent_id: Optional[str]) -> List[Dict]` - Get pending requests for an agent's capabilities
- `get_agents(self, active_only: bool) -> List[Dict]` - Get all registered agents
- `get_categories(self) -> List[Dict]` - Get all capability categories with counts
- `get_analytics(self) -> Dict` - Get marketplace analytics
- `_row_to_capability(self, row: sqlite3.Row) -> Capability` - Convert a database row to a Capability object
- `update_capability_status(self, capability_id: str, status: str) -> bool` - Update capability status (active, deprecated, experimental)
- `unregister_capability(self, capability_id: str) -> bool` - Unregister a capability (soft delete by setting status to deprecated)
- `__init__(self, agent_id: str, agent_name: str, registry: Optional[CapabilityRegistry])`
- `advertise(self, name: str, description: str, category: str, input_schema: Dict, output_schema: Dict, tags: List[str]) -> str` - Advertise a new capability
- `discover(self, category: Optional[str], tags: Optional[<ast.Subscript object at 0x7eda6f1839d0>], query: Optional[str]) -> List[Capability]` - Discover capabilities from other agents
- `request(self, capability_id: str, request_data: Dict) -> Optional[str]` - Request to use another agent's capability
- `check_request(self, request_id: str) -> Optional[Dict]` - Check the status of a capability request
- `get_my_capabilities(self) -> List[Capability]` - Get all capabilities advertised by this agent
- `get_pending_requests(self) -> List[Dict]` - Get pending requests for this agent's capabilities
- `respond_to_request(self, request_id: str, accept: bool, result: Optional[Dict], error_message: Optional[str]) -> bool` - Respond to a request for this agent's capability

**Classes:**

- `Capability` - Represents a single capability an agent can offer
  - `to_dict()`
  - `from_dict()`
- `CapabilityRequest` - Represents a request to use a capability
- `CapabilityRegistry` - Central registry for agent capabilities
  - `__init__()`
  - `_get_conn()`
  - `_init_db()` - Initialize the database schema
  - `register_agent()` - Register a new agent in the marketplace
  - `register_capability()` - Register a new capability
  - ... and 12 more methods
- `AgentCapabilityClient` - Client for agents to interact with the capability marketplace
  - `__init__()`
  - `advertise()` - Advertise a new capability
  - `discover()` - Discover capabilities from other agents
  - `request()` - Request to use another agent's capability
  - `check_request()` - Check the status of a capability request
  - ... and 3 more methods

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
- `check_heartbeat(self, agent: str) -> Dict[<ast.Tuple object at 0x7eda6f1f2550>]` - Check an agent's heartbeat status
- `count_recent_outputs(self, agent: str, hours: int) -> int` - Count agent outputs in last N hours
- `get_email_status(self, agent: str) -> Optional[<ast.Subscript object at 0x7eda6f220b90>]` - Check email inbox for agents with email
- `get_predictive_tasks(self, agent: str) -> List[<ast.Subscript object at 0x7eda6f223710>]` - Get predictive tasks assigned to this agent
- `generate_dashboard(self) -> Dict[<ast.Tuple object at 0x7eda6f234c50>]` - Generate complete dashboard
- `generate_report(self, dashboard: Dict[<ast.Tuple object at 0x7eda6f2351d0>]) -> str` - Generate human-readable report

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
- `__init__(self, publisher: str, topic: str, content: str, metadata: Dict[<ast.Tuple object at 0x7eda71689d50>], tags: List[str], priority: str, ttl_hours: int)`
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
- `publish(self, publisher: str, topic: str, content: str, metadata: Dict[<ast.Tuple object at 0x7eda716cab10>], tags: List[str], priority: str, target_agents: List[str]) -> str` - Publish knowledge to the hub
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

### scripts/agent_marketplace_client.py


Agent Capability Marketplace Checker
Runs in each agent's heartbeat to check for and execute capability requests


**Functions:**

- `main()` - Run marketplace check for specified agent
- `__init__(self, agent_name: str)`
- `check_pending_requests(self)` - Check for pending requests assigned to this agent
- `claim_request(self, request_id: str)` - Claim a request to work on it
- `complete_request(self, request_id: str, result: str, quality_rating: int)` - Mark a request as complete and earn rewards
- `post_capability_request(self, target_agent: str, capability: str, parameters: dict, priority: str)` - Post a request to another agent
- `find_work_opportunities(self)` - Find work that needs doing (for proactive agents)
- `run_marketplace_check(self)` - Main check routine - call this from agent heartbeat

**Classes:**

- `AgentMarketplaceClient` - Client for agents to interact with capability marketplace
  - `__init__()`
  - `check_pending_requests()` - Check for pending requests assigned to this agent
  - `claim_request()` - Claim a request to work on it
  - `complete_request()` - Mark a request as complete and earn rewards
  - `post_capability_request()` - Post a request to another agent
  - ... and 2 more methods

### scripts/alert_correlation_dashboard.py


Alert Correlation Dashboard Generator v2
Generates HTML dashboard with sensible time cutoffs and false positive filtering


**Functions:**

- `is_false_positive(message)` - Check if an alert is a false positive
- `load_recent_alerts()` - Load alerts from last 24 hours only
- `correlate_alerts(alerts)` - Simple correlation - group by category/agent
- `collect_issues(clusters)` - Collect issues for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/alert_correlation_heartbeat.py


Alert Correlation Heartbeat Integration

Runs as part of Zak's heartbeat to correlate alerts
and generate periodic correlation reports.

Author: Zak
Version: 1.0.0


**Functions:**

- `run_correlation_check()` - Run correlation check and generate report

### scripts/api_health_dashboard.py


API Health Dashboard - Feature #23
Generates an interactive HTML dashboard for API health monitoring.


**Functions:**

- `main()` - CLI entry point.
- `__init__(self, db_path: Path)`
- `get_health_data(self) -> Dict[<ast.Tuple object at 0x7eda6dedc510>]` - Fetch health data from database.
- `generate_dashboard(self) -> str` - Generate HTML dashboard.
- `generate(self)` - Generate and save the dashboard.
- `_update_main_index(self)` - Add link to main dashboard index if it exists.

**Classes:**

- `APIDashboardGenerator` - Generates HTML dashboard for API health monitoring.
  - `__init__()`
  - `get_health_data()` - Fetch health data from database.
  - `generate_dashboard()` - Generate HTML dashboard.
  - `generate()` - Generate and save the dashboard.
  - `_update_main_index()` - Add link to main dashboard index if it exists.

### scripts/api_health_monitor.py


API Health Monitor - Feature #23
Monitors external API availability, tracks response times, and provides auto-fallback.

This module provides comprehensive monitoring for all external APIs used by the system,
with alerting, historical tracking, and automatic fallback recommendations.


**Functions:**

- `print_status_table(status_list: List[Dict])` - Print a formatted status table.
- `main()` - Main CLI entry point.
- `__init__(self, db_path: Path)`
- `_load_config(self) -> Dict` - Load monitor configuration.
- `_save_config(self)` - Save monitor configuration.
- `init_database(self)` - Initialize SQLite database for API health tracking.
- `_save_check_result(self, result: APICheckResult)` - Save a check result to the database.
- `_update_api_status(self, results: List[APICheckResult])` - Update the aggregated status for each API.
- `_check_alerts(self, results: List[APICheckResult])` - Check if any alerts should be triggered.
- `_is_critical_api(self, api_name: str) -> bool` - Check if an API is marked as critical.
- `_update_metrics(self, results: List[APICheckResult])` - Update hourly performance metrics.
- `get_status(self) -> List[Dict]` - Get current status of all APIs.
- `get_alerts(self, acknowledged: Optional[bool], limit: int) -> List[Dict]` - Get API alerts.
- `acknowledge_alert(self, alert_id: int)` - Acknowledge an alert.
- `get_health_summary(self) -> Dict` - Get overall health summary.
- `get_fallback_recommendations(self) -> List[Dict]` - Get fallback recommendations for unhealthy/down APIs.
- `cleanup_old_data(self, days: int)` - Clean up old check data to prevent database bloat.

**Classes:**

- `APIStatus` - API health status levels.
- `APICheckResult` - Result of a single API health check.
- `APIEndpoint` - Configuration for an API endpoint to monitor.
- `APIHealthMonitor` - Main API health monitoring system.
  - `__init__()`
  - `_load_config()` - Load monitor configuration.
  - `_save_config()` - Save monitor configuration.
  - `init_database()` - Initialize SQLite database for API health tracking.
  - `_save_check_result()` - Save a check result to the database.
  - ... and 10 more methods

### scripts/auto_compression_monitor.py


Auto-Compression Monitor for OpenClaw
Uses session_size estimation and logs warnings


**Functions:**

- `log_event(event_type, message, data)` - Log compression event
- `get_session_size_estimate()` - Estimate current session token count based on session files
- `main()` - Main entry point

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

### scripts/autonomous_dev_loop_with_priorities.py


Autonomous Development Loop with Priorities
Restarts the development loop with user-specified priority areas.

Usage:
    python3 autonomous_dev_loop_with_priorities.py [priority1,priority2,...]

Priority Areas:
    - security: Security, authentication, audit features
    - performance: Optimization, caching, efficiency
    - monitoring: Health checks, alerts, dashboards
    - automation: Workflows, CI/CD, task automation
    - integration: API integrations, external services
    - analytics: Reporting, metrics, insights
    - reliability: Backup, recovery, fault tolerance
    - ui: User interfaces, dashboards, CLI
    - research: Research tools, content discovery
    - maintenance: Code cleanup, refactoring, docs

Author: Zak
Version: 1.0.0


**Functions:**

- `log_activity(message)` - Log activity to restart log
- `get_priority_features(priority_areas)` - Get feature proposals based on priority areas
- `calculate_roi_score(feature)` - Calculate ROI score for feature prioritization
- `choose_next_feature(features, completed)` - Choose the next feature to implement based on ROI
- `run_development_cycle(priority_areas)` - Main development cycle with priorities
- `main()` - Main entry point

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

### scripts/ava_email_monitor.py


Daily Email Monitor - Ava Analytics
Monitors email usage and alerts when approaching limits

Runs every hour to check email count and warn at 80%


**Functions:**

- `log(message)`
- `main()` - Check email usage and alert if near limit

### scripts/ava_heartbeat_cal.py


Ava Heartbeat with Cross-Agent Learning
Analytics agent that shares efficiency insights and learns from all agents


**Functions:**

- `get_cost_data()` - Get token cost data from logs
- `main()`

### scripts/ava_service_monitor.py


Service Cost & Usage Monitor - Accurate Tracking
Tracks all paid services with real-time usage


**Functions:**

- `get_kimi_usage()` - Get current Kimi API usage from environment or file
- `get_hetzner_usage()` - Get Hetzner server usage
- `get_agentmail_usage()` - Get AgentMail usage
- `get_hostinger_usage()` - Get Hostinger email usage
- `get_brave_usage()` - Get Brave Search API usage with query tracking
- `get_browseract_usage()` - Get BrowserAct usage
- `calculate_total_costs()` - Calculate total monthly and projected costs
- `generate_report()` - Generate comprehensive service report
- `save_report()` - Save report to file

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
- `calculate_savings(self, num_sources: int) -> Dict[<ast.Tuple object at 0x7eda70f222d0>]` - Calculate actual token savings for batch vs separate calls
- `test(self) -> Dict[<ast.Tuple object at 0x7eda70f7e290>]` - Run validation test and return results

**Classes:**

- `BatchProcessor`
  - `__init__()`
  - `batch_research_analysis()` - Analyze multiple research sources in one prompt
  - `calculate_savings()` - Calculate actual token savings for batch vs separate calls
  - `test()` - Run validation test and return results

### scripts/blogwatcher_summary_with_analysis.py


Blogwatcher Summary with Article Summaries (Enhanced Format)
Per Thomas's directive (Feb 7): Add 200-400 word summaries to each source article


**Functions:**

- `generate_article_summary(title, source, url, published_date)` - Generate a 200-400 word summary for an article.
- `generate_blogwatcher_summary()` - Generate enhanced blogwatcher summary with article summaries
- `send_blogwatcher_summary()` - Send blogwatcher summary with delivery confirmation

### scripts/brave_query_counter.py


Brave Search API Query Counter
Tracks usage to avoid hitting free tier limits (2,000 queries/month)


**Functions:**

- `init_tracking()` - Initialize tracking file if not exists
- `load_data()` - Load tracking data
- `save_data(data)` - Save tracking data
- `check_month_reset(data)` - Check if we need to reset for new month
- `log_query(query_type, query_text)` - Log a Brave Search query
- `check_thresholds(data)` - Check usage thresholds and alert if needed
- `get_stats()` - Get current usage statistics
- `generate_report()` - Generate usage report
- `reset_daily()` - Reset daily counter (call at midnight)

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
- `_load_triggered(self) -> Dict[<ast.Tuple object at 0x7eda6fadb950>]` - Load previously triggered events
- `_save_triggered(self)` - Save triggered events to prevent duplicates
- `_log(self, message: str)` - Log trigger activity
- `_get_trigger_key(self, event: CalendarEvent, trigger_type: str) -> str` - Generate unique key for event trigger
- `check_prep_triggers(self) -> List[<ast.Subscript object at 0x7eda6fad41d0>]` - Check for events needing preparation and trigger workflows
- `_determine_prep_actions(self, event: CalendarEvent) -> List[str]` - Determine what preparation actions are needed
- `check_daily_briefing_trigger(self) -> Optional[<ast.Subscript object at 0x7eda6fafcbd0>]` - Check if daily briefing should be generated
- `check_event_workflow_triggers(self) -> List[<ast.Subscript object at 0x7eda6fb05610>]` - Check for workflow triggers based on calendar events
- `get_all_triggers(self) -> Dict[<ast.Tuple object at 0x7eda6fb06d10>]` - Get all active triggers
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

- `check_calendar_events(agent_name: str) -> Dict[<ast.Tuple object at 0x7eda6fd99910>]` - Check calendar for events needing attention
- `get_daily_briefing() -> str` - Get daily calendar briefing
- `should_run_event_workflow() -> bool` - Check if event-based workflow should be triggered
- `get_event_workflow_context() -> Dict[<ast.Tuple object at 0x7eda6fdb5350>]` - Get context for event-based workflows
- `log_calendar_check(agent_name: str, result: Dict[<ast.Tuple object at 0x7eda6fdb4d50>])` - Log calendar check to agent's log file

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

### scripts/capability_marketplace_cli.py


CLI Integration for Agent Capability Marketplace

Adds 'ocl capability' commands to the OpenClaw CLI.


**Functions:**

- `print_capability(cap: Capability, detailed: bool)` - Pretty print a capability
- `cmd_advertise(args)` - Advertise a new capability
- `cmd_discover(args)` - Discover capabilities
- `cmd_request(args)` - Request to use a capability
- `cmd_check(args)` - Check a request status
- `cmd_pending(args)` - List pending requests
- `cmd_respond(args)` - Respond to a capability request
- `cmd_agents(args)` - List all registered agents
- `cmd_categories(args)` - List capability categories
- `cmd_analytics(args)` - Show marketplace analytics
- `cmd_mine(args)` - Show my agent's capabilities
- `cmd_status(args)` - Show detailed capability status
- `cmd_unregister(args)` - Unregister a capability
- `main()`

### scripts/capability_request_system.py


Capability Request System
Enables agents to request capabilities from other agents through the marketplace


**Functions:**

- `init_database()` - Initialize the marketplace database
- `request_capability(requester: str, provider: str, capability: str, parameters: Dict, priority: str) -> str` - Request a capability from another agent
- `complete_request(request_id: str, result: str, success: bool)` - Mark a capability request as completed
- `get_pending_requests(agent: str) -> List[Dict]` - Get pending capability requests
- `get_request_stats() -> Dict` - Get statistics about capability requests
- `request_literature_review(topic: str, min_sources: int, requester: str) -> str` - Request literature review from Riley
- `request_content_writing(section: str, word_count: int, references: List[str], requester: str) -> str` - Request content writing from Quinn
- `request_data_collection(sources: List[str], metrics: List[str], requester: str) -> str` - Request data collection from Ava
- `request_quality_review(paper_content: str, requester: str) -> str` - Request quality review from Remy
- `request_visualizations(data_description: str, chart_types: List[str], requester: str) -> str` - Request visualizations from Kai

### scripts/capability_rewards.py


Capability Marketplace Reward System
Tracks agent performance, points, and achievements


**Functions:**

- `main()` - Test the reward system
- `__init__(self)`
- `init_database(self)` - Initialize rewards database
- `record_completion(self, request_id: str, agent: str, capability: str, duration_minutes: int, quality_rating: int, feedback: str) -> Dict` - Record a completed capability request and calculate points
- `_get_agent_capabilities(self, agent: str) -> List[str]` - Get primary capabilities for an agent
- `get_leaderboard(self, period: str) -> List[Dict]` - Get current leaderboard
- `get_agent_stats(self, agent: str) -> Dict` - Get detailed stats for an agent

**Classes:**

- `RewardSystem` - Manages agent rewards and achievements
  - `__init__()`
  - `init_database()` - Initialize rewards database
  - `record_completion()` - Record a completed capability request and calculate points
  - `_get_agent_capabilities()` - Get primary capabilities for an agent
  - `get_leaderboard()` - Get current leaderboard
  - ... and 1 more methods

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

### scripts/complete_kai_twitter_setup.py


Kai Twitter Account Setup - Complete the Twitter/X transition

This script completes Kai's Twitter setup (@Kai_Creative) that was started
on February 3, 2026 but not finished.

Requirements:
- Kai's email: kai-true@agentmail.to
- Target handle: @Kai_Creative (or available variant)
- bird CLI for posting
- Browser authentication or API tokens


**Functions:**

- `run_cmd(cmd, cwd)` - Run a command and return output
- `check_bird_auth()` - Check if bird CLI is authenticated with Twitter
- `setup_twitter_auth()` - Setup Twitter authentication for Kai
- `update_kai_heartbeat()` - Update Kai's heartbeat to use Twitter instead of Moltbook
- `main()` - Main setup process

### scripts/complete_riley_twitter.py


Complete Riley's Twitter Setup
Uses existing SMS verification (+12362000561)


**Functions:**

- `generate_password()` - Generate secure password
- `main()`

### scripts/compression_integration.py


OpenClaw Context Compression Integration
Automatically compresses context before model requests to prevent token limit errors


**Functions:**

- `compress_before_model(messages: List[<ast.Subscript object at 0x7eda6fa0b2d0>], model: str) -> List[<ast.Subscript object at 0x7eda6fa0bdd0>]` - One-liner function to compress conversation before sending to model
- `main()` - Test the integration
- `__init__(self)`
- `process_conversation(self, conversation: List[<ast.Subscript object at 0x7eda6f9f1e90>], force_check: bool) -> List[<ast.Subscript object at 0x7eda6f9edc10>]` - Process conversation and compress if approaching token limits
- `process_for_model(self, messages: List[<ast.Subscript object at 0x7eda6f9ed590>], model: str) -> List[<ast.Subscript object at 0x7eda6f9fb010>]` - Process messages specifically before sending to a model
- `_log_state(self, token_count: int, mode: str)` - Log current state for monitoring
- `_log_compression(self, before: int, after: int, savings: int, mode: str)` - Log compression event
- `_get_timestamp(self) -> str`
- `get_stats(self) -> Dict` - Get compression statistics

**Classes:**

- `CompressionMiddleware` - Middleware that intercepts conversation context and compresses if needed
  - `__init__()`
  - `process_conversation()` - Process conversation and compress if approaching token limit
  - `process_for_model()` - Process messages specifically before sending to a model
  - `_log_state()` - Log current state for monitoring
  - `_log_compression()` - Log compression event
  - ... and 2 more methods

### scripts/config_drift_dashboard.py


Configuration Drift Dashboard Generator
Generates HTML dashboard for drift monitoring

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI entry point
- `__init__(self, db_path: str)`
- `get_stats(self) -> dict` - Get drift statistics from database
- `generate_html(self, stats: dict) -> str` - Generate HTML dashboard
- `_generate_drift_list(self, drifts: list) -> str` - Generate HTML for drift list
- `_generate_baseline_chart(self, baselines: dict) -> str` - Generate HTML for baseline distribution
- `_generate_scan_history(self, history: list) -> str` - Generate HTML for scan history
- `generate(self)` - Generate and save dashboard

**Classes:**

- `DriftDashboardGenerator`
  - `__init__()`
  - `get_stats()` - Get drift statistics from database
  - `generate_html()` - Generate HTML dashboard
  - `_generate_drift_list()` - Generate HTML for drift list
  - `_generate_baseline_chart()` - Generate HTML for baseline distribution
  - ... and 2 more methods

### scripts/config_drift_detector.py


Configuration Drift Detector - Feature #22

Monitors critical configuration files for unauthorized changes,
detects drift from known-good baselines, and auto-restores when configured.

Author: Zak (Subagent)
Version: 1.0.0
Date: 2026-02-07


**Functions:**

- `main()` - CLI interface
- `to_dict(self) -> dict`
- `to_dict(self) -> dict`
- `__init__(self, db_path: str)`
- `init_db(self)` - Initialize database schema
- `save_baseline(self, config: ConfigFile)` - Save or update a baseline configuration
- `get_baseline(self, path: str) -> Optional[ConfigFile]` - Get baseline for a specific file
- `get_all_baselines(self) -> List[ConfigFile]` - Get all baseline configurations
- `delete_baseline(self, path: str)` - Remove a baseline (for deleted files)
- `save_drift_event(self, event: DriftEvent)` - Save a drift event
- `get_recent_drifts(self, hours: int) -> List[DriftEvent]` - Get drift events from last N hours
- `get_active_drifts(self) -> List[DriftEvent]` - Get non-acknowledged drift events
- `acknowledge_drift(self, drift_id: str)` - Mark a drift event as acknowledged
- `log_scan(self, files_scanned: int, drifts_detected: int, auto_restored: int, duration: float)` - Log a scan operation
- `get_stats(self) -> dict` - Get drift detection statistics
- `__init__(self, workspace: str)`
- `calculate_hash(self, file_path: Path) -> str` - Calculate SHA-256 hash of file contents
- `get_file_info(self, file_path: Path) -> Optional[Dict]` - Get file metadata
- `should_exclude(self, path: Path) -> bool` - Check if path should be excluded from monitoring
- `get_monitored_files(self) -> List[Path]` - Get list of all files to monitor
- `get_severity_for_file(self, file_path: Path) -> Tuple[<ast.Tuple object at 0x7eda726e4710>]` - Get severity and auto_restore setting for a file
- `create_baseline(self, file_path: Path) -> Optional[ConfigFile]` - Create a baseline for a file
- `initialize_baselines(self)` - Initialize baselines for all monitored files
- `find_backup_source(self, relative_path: str) -> Optional[Path]` - Find the most recent backup containing this file
- `restore_file(self, file_path: Path, event_id: str) -> Tuple[<ast.Tuple object at 0x7eda726fb3d0>]` - Attempt to restore a file from backup
- `scan(self) -> List[DriftEvent]` - Scan for configuration drift
- `_compare_with_baseline(self, file_path: Path, info: Dict, baseline: ConfigFile) -> List[DriftEvent]` - Compare current file state with baseline
- `generate_summary(self) -> dict` - Generate drift detection summary
- `_generate_insights(self, drifts: List[DriftEvent], stats: dict) -> List[str]` - Generate insights from drift data
- `acknowledge(self, drift_id: str)` - Acknowledge a drift event
- `update_baseline(self, file_path: str)` - Update baseline for a specific file (accept current state as good)
- `run(self) -> dict` - Run full drift detection cycle

**Classes:**

- `DriftSeverity`
- `DriftType`
- `ConfigFile` - Represents a monitored configuration file
  - `to_dict()`
- `DriftEvent` - Represents a detected configuration drift
  - `to_dict()`
- `DriftDatabase` - SQLite backend for drift detection data
  - `__init__()`
  - `init_db()` - Initialize database schema
  - `save_baseline()` - Save or update a baseline configuration
  - `get_baseline()` - Get baseline for a specific file
  - `get_all_baselines()` - Get all baseline configurations
  - ... and 7 more methods
- `DriftDetector` - Main configuration drift detection engine
  - `__init__()`
  - `calculate_hash()` - Calculate SHA-256 hash of file contents
  - `get_file_info()` - Get file metadata
  - `should_exclude()` - Check if path should be excluded from monitoring
  - `get_monitored_files()` - Get list of all files to monitor
  - ... and 12 more methods

### scripts/content_distribution.py


Multi-Channel Content Distribution System
Feature #17 - Auto-post to Twitter/X, LinkedIn, Bluesky with platform tailoring

This module provides:
- Unified content distribution across multiple social platforms
- Platform-specific content tailoring
- Optimal scheduling per platform
- Cross-posting with custom formatting
- Analytics and performance tracking


**Functions:**

- `main()` - CLI entry point
- `create(cls, title: str, body: str, topics: List[str], source_url: str, priority: int) -> 'ContentPiece'`
- `default_twitter(cls) -> 'PlatformConfig'`
- `default_linkedin(cls) -> 'PlatformConfig'`
- `default_bluesky(cls) -> 'PlatformConfig'`
- `to_uk_english(cls, text: str) -> str` - Convert US spelling to UK English (Thomas Lancaster style)
- `tailor_for_twitter(cls, content: ContentPiece) -> Dict` - Create Twitter-optimized content
- `tailor_for_linkedin(cls, content: ContentPiece) -> Dict` - Create LinkedIn-optimized content
- `tailor_for_bluesky(cls, content: ContentPiece) -> Dict` - Create Bluesky-optimized content
- `_create_thread(cls, body: str, content: ContentPiece, platform: str) -> Dict` - Create a thread for longer content
- `get_optimal_time(cls, platform: str, content_priority: int, min_delay_hours: int) -> datetime` - Calculate optimal posting time
- `stagger_posts(cls, platforms: List[str], base_time: datetime, stagger_minutes: int) -> Dict[<ast.Tuple object at 0x7eda71f5a850>]` - Stagger posts across platforms to maximize reach
- `__init__(self, db_path: Path)`
- `_init_db(self)` - Initialize database tables
- `queue_content(self, content: ContentPiece) -> bool` - Add content to distribution queue
- `schedule_distribution(self, content_id: str, platform: str, scheduled_time: datetime, tailored_content: str) -> bool` - Schedule content for distribution
- `get_pending_posts(self) -> List[Dict]` - Get posts that need to be sent now
- `update_post_status(self, log_id: int, status: str, post_url: str, error: str)` - Update post status after sending
- `get_stats(self) -> Dict` - Get distribution statistics
- `__init__(self)`
- `_load_config(self) -> Dict` - Load platform configurations
- `submit_content(self, title: str, body: str, topics: List[str], source_url: str, priority: int, platforms: List[str]) -> Dict` - Submit content for multi-channel distribution
- `process_pending_posts(self) -> Dict` - Process posts scheduled for now
- `_send_to_platform(self, platform: str, content: Dict) -> Dict` - Send content to a specific platform
- `get_dashboard_data(self) -> Dict` - Get data for distribution dashboard
- `replace_match(match)`

**Classes:**

- `ContentPiece` - Represents content to be distributed
  - `create()`
- `PlatformConfig` - Configuration for a social media platform
  - `default_twitter()`
  - `default_linkedin()`
  - `default_bluesky()`
- `ContentTailor` - Tailors content for specific platforms
  - `to_uk_english()` - Convert US spelling to UK English (Thomas Lancaster style)
  - `tailor_for_twitter()` - Create Twitter-optimized content
  - `tailor_for_linkedin()` - Create LinkedIn-optimized content
  - `tailor_for_bluesky()` - Create Bluesky-optimized content
  - `_create_thread()` - Create a thread for longer content
- `ScheduleOptimizer` - Optimizes posting schedule based on platform and content
  - `get_optimal_time()` - Calculate optimal posting time
  - `stagger_posts()` - Stagger posts across platforms to maximize reach
- `ContentDistributionDB` - Database operations for content distribution
  - `__init__()`
  - `_init_db()` - Initialize database tables
  - `queue_content()` - Add content to distribution queue
  - `schedule_distribution()` - Schedule content for distribution
  - `get_pending_posts()` - Get posts that need to be sent now
  - ... and 2 more methods
- `ContentDistributor` - Main content distribution orchestrator
  - `__init__()`
  - `_load_config()` - Load platform configurations
  - `submit_content()` - Submit content for multi-channel distribution
  - `process_pending_posts()` - Process posts scheduled for now
  - `_send_to_platform()` - Send content to a specific platform
  - ... and 1 more methods

### scripts/content_distribution_config.py


Content Distribution Configuration Helper
Setup and manage platform credentials


**Functions:**

- `load_config()` - Load existing config
- `save_config(config)` - Save config to file
- `setup_twitter()` - Setup Twitter/X API credentials
- `setup_linkedin()` - Setup LinkedIn API credentials
- `setup_bluesky()` - Setup Bluesky credentials
- `update_settings()` - Update general settings
- `view_config()` - View current configuration (with secrets hidden)
- `main()` - Main menu

### scripts/content_distribution_dashboard.py


Content Distribution Dashboard
Web dashboard for monitoring multi-channel content distribution


**Functions:**

- `generate_dashboard()` - Generate distribution dashboard report
- `save_dashboard()` - Generate and save dashboard to file

### scripts/content_quality_heartbeat.py


Content Quality Scoring - Heartbeat Integration (FIXED)

Integrates quality scoring into the main heartbeat.
Analyzes recent content from ALL agents and updates quality metrics.

Author: Zak
Version: 1.1.0 - Fixed to scan all agent outputs


**Functions:**

- `scan_agent_outputs()` - Scan memory files for recent agent outputs
- `scan_feature_emails()` - Scan feature deployment emails for content
- `scan_memory_files()` - Scan recent memory files for agent outputs
- `analyze_recent_content()` - Analyze content from recent agent activities - FIXED to scan all agents
- `generate_quality_summary()` - Generate quality summary for heartbeat
- `update_dashboard()` - Update HTML dashboard
- `main()` - Main heartbeat function

### scripts/content_quality_heartbeat_fixed.py


Content Quality Scoring - Heartbeat Integration (FIXED)

Integrates quality scoring into the main heartbeat.
Analyzes recent content from ALL agents and updates quality metrics.

Author: Zak
Version: 1.1.0 - Fixed to scan all agent outputs


**Functions:**

- `scan_agent_outputs()` - Scan memory files for recent agent outputs
- `scan_feature_emails()` - Scan feature deployment emails for content
- `scan_memory_files()` - Scan recent memory files for agent outputs
- `analyze_recent_content()` - Analyze content from recent agent activities - FIXED to scan all agents
- `generate_quality_summary()` - Generate quality summary for heartbeat
- `update_dashboard()` - Update HTML dashboard
- `main()` - Main heartbeat function

### scripts/content_quality_scorer.py


Content Quality Scoring System - Feature #15

Automated quality assessment for all content generation:
- Quality scoring based on multiple dimensions
- Style compliance checking
- Improvement suggestions
- Historical tracking and trends

Author: Zak
Version: 1.0.0


**Functions:**

- `to_dict(self) -> dict`
- `__init__(self, db_path: str)`
- `init_db(self)` - Initialize database schema
- `save_score(self, score: QualityScore) -> bool` - Save a quality score to the database
- `_update_agent_trends(self, agent: str)` - Update agent trend statistics
- `_update_content_benchmarks(self, content_type: str)` - Update content type benchmarks
- `get_agent_stats(self, agent: str) -> Optional[Dict]` - Get statistics for an agent
- `get_recent_scores(self, limit: int) -> List[Dict]` - Get recent quality scores
- `get_all_agent_stats(self) -> List[Dict]` - Get statistics for all agents
- `__init__(self)`
- `analyze_content(self, content: str, content_type: str, agent: str) -> QualityScore` - Analyze content and return quality score
- `_split_sentences(self, text: str) -> List[str]` - Split text into sentences
- `_score_clarity(self, content: str) -> int` - Score content clarity (0-100)
- `_score_conciseness(self, content: str, content_type: str) -> int` - Score content conciseness (0-100)
- `_score_structure(self, content: str) -> int` - Score content structure (0-100)
- `_score_grammar(self, content: str) -> int` - Score grammar quality (0-100)
- `_score_style_compliance(self, content: str, content_type: str) -> int` - Score style compliance (0-100)
- `_calculate_readability(self, content: str) -> float` - Calculate Flesch Reading Ease score
- `_find_issues(self, content: str, content_type: str) -> List[<ast.Subscript object at 0x7eda6fcf1ad0>]` - Find specific issues in content
- `_generate_suggestions(self, content: str, issues: List[Dict], content_type: str) -> List[str]` - Generate improvement suggestions
- `_identify_strengths(self, content: str, content_type: str) -> List[str]` - Identify content strengths
- `__init__(self)`
- `generate_dashboard(self) -> Dict` - Generate quality dashboard data
- `generate_html_dashboard(self, output_path: str)` - Generate HTML dashboard
- `count_syllables(word)`

**Classes:**

- `QualityScore` - Quality score for a single content piece
  - `to_dict()`
- `StyleGuideline` - Style guideline for content checking
- `QualityDatabase` - SQLite backend for quality tracking
  - `__init__()`
  - `init_db()` - Initialize database schema
  - `save_score()` - Save a quality score to the database
  - `_update_agent_trends()` - Update agent trend statistics
  - `_update_content_benchmarks()` - Update content type benchmarks
  - ... and 3 more methods
- `ContentAnalyzer` - Analyzes content quality across multiple dimensions
  - `__init__()`
  - `analyze_content()` - Analyze content and return quality score
  - `_split_sentences()` - Split text into sentences
  - `_score_clarity()` - Score content clarity (0-100)
  - `_score_conciseness()` - Score content conciseness (0-100)
  - ... and 7 more methods
- `QualityDashboard` - Generate quality dashboard and reports
  - `__init__()`
  - `generate_dashboard()` - Generate quality dashboard data
  - `generate_html_dashboard()` - Generate HTML dashboard

### scripts/context_compressor.py


Context Compression for Token Efficiency
Compresses conversation history to reduce token usage
Only runs when sufficient tokens exist to achieve savings.


**Functions:**

- `compress_conversation(conversation: List[Dict]) -> List[Dict]` - One-liner to compress conversation (only if beneficial)
- `load_recent_conversation() -> Optional[<ast.Subscript object at 0x7eda6e96c950>]` - Load recent conversation from session history
- `main()` - Main entry point for command line usage
- `__init__(self, max_full_turns, summary_max_tokens, discard_after_turns)`
- `should_compress(self, conversation: List[Dict]) -> bool` - Determine if compression will be beneficial
- `get_compression_mode(self, token_count: int) -> str` - Determine compression mode based on token count
- `compress(self, conversation: List[Dict]) -> List[Dict]` - Compress conversation history
- `_summarize_turns(self, turns: List[Dict], max_tokens) -> str` - Generate summary of old turns
- `estimate_tokens(self, conversation: List[Dict]) -> int` - Estimate token count (rough: 4 chars per token)
- `get_stats(self) -> Dict` - Get compression statistics
- `check_and_compress(self, conversation: List[Dict]) -> tuple` - Check token count and compress if needed.

**Classes:**

- `ContextCompressor`
  - `__init__()`
  - `should_compress()` - Determine if compression will be beneficial
  - `get_compression_mode()` - Determine compression mode based on token count
  - `compress()` - Compress conversation history
  - `_summarize_turns()` - Generate summary of old turns
  - ... and 3 more methods

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
- `get_context_dict(agent_name: str, task_type: str, max_items: Optional[int]) -> Dict[<ast.Tuple object at 0x7eda6de110d0>]` - Get context as a dictionary for programmatic use.
- `main()` - CLI for testing and debugging
- `to_dict(self) -> Dict`
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log context engine activity
- `_is_cache_valid(self) -> bool` - Check if cached context is still valid
- `_load_memory_md(self) -> str` - Load and parse MEMORY.md
- `_load_daily_logs(self, days: int) -> List[<ast.Subscript object at 0x7eda6df48c90>]` - Load recent daily logs with their dates
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
- `get_context_for_agent(self, agent_name: str, task_type: str, max_items: Optional[int], include_categories: Optional[<ast.Subscript object at 0x7eda6dddd650>]) -> Dict[<ast.Tuple object at 0x7eda6dde5450>]` - Get relevant context for a specific agent and task.
- `_generate_summary(self, items: List[ContextItem]) -> str` - Generate a natural language summary of context
- `_generate_quick_facts(self, items: List[ContextItem]) -> Dict[<ast.Tuple object at 0x7eda6ddfe1d0>]` - Generate quick reference facts from context
- `format_context_for_prompt(self, context: Dict[<ast.Tuple object at 0x7eda6ddfe750>]) -> str` - Format context as a string suitable for injection into agent prompts.

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

### scripts/cost_optimization_dashboard.py


Cost Optimization Dashboard v1.0.0 - Feature #12
Unified cost tracking, analysis, and optimization system

Features:
- Multi-API cost aggregation (Kimi, OpenAI, Claude, Brave, etc.)
- Expensive operation detection
- Optimization suggestions with ROI calculations
- Historical trend analysis
- Agent-level cost attribution
- Alert system for cost thresholds

Author: Zak
Created: 2026-02-07


**Functions:**

- `parse_session_logs_and_populate()` - Parse OpenClaw session logs and populate cost database
- `__init__(self)`
- `init_database(self)` - Initialize SQLite database for cost tracking
- `log_cost_event(self, event: CostEvent)` - Log a cost event to the database
- `calculate_cost(self, api_source: str, model: str, input_tokens: int, output_tokens: int) -> float` - Calculate cost for a given API call
- `get_cost_summary(self, days: int) -> Dict` - Get comprehensive cost summary
- `_calculate_trend(self, values: List[float]) -> str` - Calculate trend direction from daily values
- `_get_budget_status(self, avg_daily_cost: float) -> Dict` - Check budget status
- `identify_expensive_operations(self, days: int, top_n: int) -> List[Dict]` - Identify the most expensive operations with context
- `_calculate_efficiency_score(self, calls: int, total_cost: float, avg_cost: float) -> str` - Calculate efficiency rating based on cost patterns
- `generate_optimization_suggestions(self) -> List[OptimizationSuggestion]` - Generate actionable optimization suggestions
- `_save_suggestions(self, suggestions: List[OptimizationSuggestion])` - Save suggestions to database
- `_check_cost_thresholds(self)` - Check if costs exceed thresholds and create alerts
- `get_active_alerts(self) -> List[Dict]` - Get unacknowledged cost alerts
- `acknowledge_alert(self, alert_id: int)` - Acknowledge a cost alert
- `generate_dashboard(self, days: int) -> str` - Generate comprehensive dashboard report
- `apply_suggestion(self, suggestion_id: str) -> bool` - Mark a suggestion as applied
- `get_suggestion_by_id(self, suggestion_id: str) -> Optional[OptimizationSuggestion]` - Retrieve a specific suggestion

**Classes:**

- `CostEvent` - Single cost event record
- `OptimizationSuggestion` - Optimization recommendation
- `CostOptimizationDashboard` - Central cost optimization dashboard
  - `__init__()`
  - `init_database()` - Initialize SQLite database for cost tracking
  - `log_cost_event()` - Log a cost event to the database
  - `calculate_cost()` - Calculate cost for a given API call
  - `get_cost_summary()` - Get comprehensive cost summary
  - ... and 12 more methods

### scripts/cost_optimization_email.py


Cost Optimization Email Notifier
Sends daily/weekly cost reports to Thomas


**Functions:**

- `send_cost_report_email()` - Generate and email cost report to Thomas

### scripts/cost_report_confirmed.py


Cost Report with Delivery Confirmation
Daily cost tracking report with delivery confirmation


**Functions:**

- `generate_cost_report()` - Generate daily cost report
- `send_cost_report_with_confirmation()` - Send cost report with delivery confirmation

### scripts/create_kai_twitter_account.py


Create Twitter Account for Kai (@Kai_Creative)
Uses BrowserAct for automated signup


**Functions:**

- `generate_password()` - Generate a secure password
- `create_twitter_signup_workflow()` - Create BrowserAct workflow for Twitter signup
- `save_credentials(password)` - Save credentials securely
- `main()`

### scripts/critical_matters_resolver.py


Critical Matters Auto-Resolution System

Extracts critical matters from dashboards, follows resolution steps autonomously,
and updates dashboards when resolved.

Author: Zak
Created: 2026-02-08


**Functions:**

- `log(message, level)` - Log to file and stdout
- `run_command(cmd, cwd, timeout)` - Run shell command and return result
- `check_agent_health()` - Check agent heartbeat logs for issues
- `check_context_compressor()` - Check if context compressor is working
- `fix_context_compressor()` - Attempt to fix context compressor issues
- `check_dashboard_timestamps()` - Verify all dashboards have proper timestamps
- `commit_and_deploy()` - Commit changes to GitHub and trigger deployment
- `update_index_page(resolved_matters)` - Update index.html to mark matters as resolved
- `resolve_critical_matters()` - Main resolution loop

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
- `get_statistics() -> Dict[<ast.Tuple object at 0x7eda72bddb90>]` - Convenience function to get coordination statistics
- `main()` - CLI for testing and debugging
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log coordination activity
- `_load_coordination_data(self) -> Dict` - Load coordination data from file
- `_load_cross_references(self) -> Dict` - Load cross-reference data
- `_load_active_themes(self) -> Dict[<ast.Tuple object at 0x7eda72d47550>]` - Load active themes
- `_save_coordination_data(self)` - Save coordination data
- `_save_cross_references(self)` - Save cross-reference data
- `_save_active_themes(self)` - Save active themes
- `register_output(self, agent: str, output_type: str, title: str, file_path: str, themes: List[str], summary: str) -> str` - Register an agent's output for coordination tracking.
- `_update_theme(self, theme: str, agent: str, output_id: str)` - Update theme tracking
- `get_recent_outputs(self, agent: Optional[str], hours: int) -> List[Dict]` - Get recent outputs for coordination.
- `get_active_themes(self, min_agents: int) -> List[SharedTheme]` - Get themes being worked on by multiple agents.
- `add_cross_reference(self, from_output: str, to_output: str, reference_type: str)` - Record that one output references another.
- `get_coordination_context(self, agent: str, task_type: str) -> Dict[<ast.Tuple object at 0x7eda72da2f50>]` - Get coordination context for an agent.
- `format_coordination_for_prompt(self, context: Dict[<ast.Tuple object at 0x7eda72da34d0>]) -> str` - Format coordination context as a string for agent prompts.
- `mark_theme_complete(self, theme: str)` - Mark a theme as completed
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda72dc9cd0>]` - Get coordination statistics

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
- `_calculate_tf_idf(self, content: str) -> Dict[<ast.Tuple object at 0x7eda708ae590>]` - Calculate TF-IDF-like scores for topic detection
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
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda72a66ad0>]`
- `__post_init__(self)`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda72a62290>]`
- `__init__(self)`
- `_load_workflows(self)` - Load workflow definitions
- `_create_default_workflows(self)` - Create default workflow templates
- `_save_workflows(self)` - Save workflow definitions
- `check_triggers(self) -> List[Workflow]` - Check all workflow triggers and return triggered workflows
- `_riley_found_recent_news(self) -> bool` - Check if Riley found recent news
- `_has_upcoming_event(self) -> bool` - Check for calendar events in next 7 days using Google Calendar API
- `get_calendar_events(self, days: int) -> List[<ast.Subscript object at 0x7eda72aab590>]` - Get upcoming calendar events with full details
- `get_events_needing_prep(self) -> List[<ast.Subscript object at 0x7eda72ab1210>]` - Get conferences/speaking engagements needing preparation
- `execute_workflow(self, workflow: Workflow) -> bool` - Execute a workflow
- `_execute_step(self, step: WorkflowStep) -> bool` - Execute a single workflow step
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda72aced50>]` - Get workflow statistics
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

### scripts/daily_standup_cron.py


Cron job for Daily Standup Generator
Run daily at 9:00 AM UTC to generate the morning standup

Cron entry:
0 9 * * * /usr/bin/python3 /root/.openclaw/workspace/scripts/daily_standup_cron.py >> /root/.openclaw/workspace/logs/standup-cron.log 2>&1

Author: Zak
Version: 1.0.0


**Functions:**

- `log_message(message: str)` - Log with timestamp
- `should_generate_standup() -> bool` - Check if standup should be generated (avoid duplicates)
- `main()` - Main cron job logic

### scripts/daily_standup_generator.py


Daily Standup Generator - Feature #25
Auto-compiles daily agent activities, progress summaries, and blocker identification

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - Generate and save daily standup
- `to_dict(self) -> Dict`
- `to_dict(self) -> Dict`
- `__init__(self)`
- `_load_history(self) -> Dict` - Load standup history for trend analysis
- `_save_history(self, report: StandupReport)` - Save standup to history
- `_get_today_log(self) -> str` - Get today's daily log content
- `_get_yesterday_log(self) -> str` - Get yesterday's daily log for comparison
- `_parse_activities_from_log(self, log_content: str) -> Dict[<ast.Tuple object at 0x7eda71a2c1d0>]` - Parse activities from daily log content
- `_identify_agent(self, text: str) -> str` - Identify which agent an activity belongs to
- `_categorize_activity(self, title: str) -> str` - Categorize an activity by type
- `_detect_blockers(self, log_content: str, agent_activities: Dict) -> List[Dict]` - Detect blockers from log content and activities
- `_extract_achievements(self, activities: Dict[<ast.Tuple object at 0x7eda71a89250>]) -> List[str]` - Extract notable achievements from activities
- `_identify_focus_areas(self, activities: Dict[<ast.Tuple object at 0x7eda71a7cad0>], blockers: List[Dict]) -> List[str]` - Identify current focus areas based on activities and blockers
- `_calculate_metrics(self, activities: Dict[<ast.Tuple object at 0x7eda71a601d0>], blockers: List[Dict]) -> Dict` - Calculate team metrics
- `_check_heartbeat_status(self, agent_id: str) -> Tuple[<ast.Tuple object at 0x7eda71a3efd0>]` - Check heartbeat status for an agent
- `_generate_agent_activity(self, agent_id: str, activities: List[Dict]) -> AgentActivity` - Generate activity summary for a single agent
- `_suggest_priorities(self, agent_id: str, activities: List[Dict]) -> List[str]` - Suggest next priorities based on agent role and recent activity
- `generate_standup(self, date: Optional[str]) -> StandupReport` - Generate complete standup report
- `_determine_overall_status(self, agent_summaries: List[AgentActivity], blockers: List[Dict]) -> str` - Determine overall team status
- `generate_markdown_report(self, report: StandupReport) -> str` - Generate markdown-formatted standup report
- `save_standup(self, report: StandupReport, format: str) -> Dict[<ast.Tuple object at 0x7eda7191e450>]` - Save standup report in specified format(s)
- `get_comparison_with_yesterday(self) -> Dict[<ast.Tuple object at 0x7eda71925b90>]` - Compare today's standup with yesterday's

**Classes:**

- `AgentActivity` - Represents an agent's daily activity
  - `to_dict()`
- `StandupReport` - Complete standup report for a day
  - `to_dict()`
- `DailyStandupGenerator` - Generates daily standup reports for the agent team
  - `__init__()`
  - `_load_history()` - Load standup history for trend analysis
  - `_save_history()` - Save standup to history
  - `_get_today_log()` - Get today's daily log content
  - `_get_yesterday_log()` - Get yesterday's daily log for comparison
  - ... and 15 more methods

### scripts/daily_standup_heartbeat.py


Heartbeat Integration for Daily Standup Generator
Adds standup status checks to agent heartbeats

Usage in heartbeat:
    from daily_standup_heartbeat import get_standup_status
    
    def agent_heartbeat():
        standup = get_standup_status()
        if standup['blockers'] > 0:
            print(f"⚠️ {standup['blockers']} blockers detected")

Author: Zak
Version: 1.0.0


**Functions:**

- `get_standup_status() -> Dict[<ast.Tuple object at 0x7eda6f988fd0>]` - Get current standup status for heartbeat integration
- `get_standup_summary() -> str` - Get a brief standup summary for display in heartbeat
- `check_standup_for_action() -> Dict[<ast.Tuple object at 0x7eda6f8c3010>]` - Check if standup requires any action
- `main()` - CLI to check standup status

### scripts/daily_workflow_improvements.py


Daily Workflow Improvement Generator
Generates and logs 3 workflow improvements daily
Runs as part of evening digest generation

Author: Zak
Created: 2026-02-06


**Functions:**

- `generate_and_log_improvements()` - Generate improvements and save to daily log

### scripts/dashboard_audit.py


Dashboard Audit and Action System
Comprehensive check of all dashboards with automated issue resolution

Run: python3 dashboard_audit.py [--fix]


**Functions:**

- `run_command(cmd, cwd)` - Run a shell command and return success status
- `check_file_exists(path)` - Check if a file exists
- `get_file_age(path)` - Get file age in minutes
- `audit_dashboards()` - Audit all dashboards and return issues
- `fix_issues(issues)` - Attempt to fix identified issues
- `generate_report(issues, fixed, failed)` - Generate summary report
- `main()`

### scripts/dashboard_auto_update.py


Dashboard Auto-Update Verification System v2.0.0
Ensures all dashboards are always current without manual intervention

Features:
- Verifies dashboard generation scripts run successfully
- Checks JSON/HTML files are fresh (not stale)
- Auto-fixes issues by regenerating dashboards
- Syncs dashboards to website automatically
- Tracks consecutive failures (3 strikes = alert)
- Alerts if no updates in 30 minutes
- Sends alerts on persistent failures

Author: Zak (Subagent)
Version: 2.0.0


**Functions:**

- `main()` - Main entry point
- `__init__(self)`
- `log(self, message: str, level: str)` - Log message to file and stdout
- `get_file_age_minutes(self, filepath: str) -> Optional[float]` - Get file age in minutes
- `run_dashboard_script(self, script_name: str, script_args: List[str]) -> Tuple[<ast.Tuple object at 0x7eda6e7db4d0>]` - Run a dashboard generation script
- `check_dashboard(self, name: str, config: Dict, state: Dict) -> DashboardStatus` - Check status of a single dashboard
- `check_subagent_health(self) -> Dict` - Proactively check subagent health from heartbeat logs.
- `_check_delivery_health(self) -> List[str]` - Check universal delivery system for issues
- `_check_escalation_files(self) -> List[str]` - Check for escalation files indicating delivery failures
- `sync_to_website(self) -> Dict` - Sync dashboards to website
- `load_state(self) -> Dict` - Load previous state
- `save_state(self, state: Dict)` - Save current state
- `should_send_alert(self, state: Dict) -> bool` - Check if we should send an alert (respect cooldown)
- `check_no_update_alert(self, state: Dict, dashboard_statuses: List[DashboardStatus]) -> Optional[str]` - Check if we should alert due to no updates in 30 minutes
- `get_dashboards_with_three_strikes(self, dashboard_statuses: List[DashboardStatus]) -> List[DashboardStatus]` - Get dashboards that have failed 3 times in a row
- `send_alert_email(self, result: VerificationResult, no_update_reason: Optional[str], three_strike_dashboards: Optional[List])` - Send alert email on failures
- `verify_and_fix(self, full_check: bool) -> VerificationResult` - Main verification and auto-fix routine
- `generate_report(self) -> str` - Generate a human-readable report

**Classes:**

- `DashboardStatus` - Status of a single dashboard
- `VerificationResult` - Overall verification result
- `DashboardAutoUpdater` - Automated dashboard verification and repair system
  - `__init__()`
  - `log()` - Log message to file and stdout
  - `get_file_age_minutes()` - Get file age in minutes
  - `run_dashboard_script()` - Run a dashboard generation script
  - `check_dashboard()` - Check status of a single dashboard
  - ... and 12 more methods

### scripts/dashboard_cli.py


CLI wrapper for System Wide Dashboard
Usage: ocl dashboard [--refresh] [--open] [--metrics]


**Functions:**

- `main()`

### scripts/dashboard_content_audit.py


Thorough Dashboard Content Audit
Checks for data quality, freshness, and rendering issues


**Functions:**

- `audit_dashboards()` - Perform thorough audit of all dashboards

### scripts/dashboard_issue_aggregator.py


Dashboard Issue Aggregation System
Collects issues from all dashboards and pushes to index


**Functions:**

- `collect_all_issues()` - Collect issues from all dashboard sources
- `save_issues(issues)` - Save issues to file
- `get_issues()` - Get current issues (from file or collect fresh)

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
- `send_email_with_tracking(self, subject: str, body: str, briefing_type: str, is_critical: bool) -> Tuple[<ast.Tuple object at 0x7eda6f73a2d0>]` - Send email with delivery tracking
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
- `extract_functions(self) -> List[<ast.Subscript object at 0x7eda71194dd0>]` - Extract all function definitions with docstrings.
- `extract_classes(self) -> List[<ast.Subscript object at 0x7eda71188450>]` - Extract all class definitions with docstrings.
- `extract_imports(self) -> List[str]` - Extract import statements.
- `_extract_args(self, args: ast.arguments) -> List[<ast.Subscript object at 0x7eda7100bed0>]` - Extract function arguments.
- `_extract_return_type(self, returns) -> Optional[str]` - Extract return type annotation.
- `_get_annotation(self, node) -> Optional[str]` - Convert annotation node to string.
- `_get_name(self, node) -> str` - Get name from node.
- `_get_value(self, node) -> Any` - Extract value from node.
- `get_documentation_score(self) -> Dict[<ast.Tuple object at 0x7eda710020d0>]` - Calculate documentation coverage score.
- `__init__(self, root_path: Path)`
- `scan(self, exclude_patterns: List[str]) -> List[Path]` - Scan for Python files, excluding certain patterns.
- `parse_all(self) -> List[<ast.Subscript object at 0x7eda70ff8f50>]` - Parse all Python files.
- `generate_module_docs(self) -> Dict[<ast.Tuple object at 0x7eda70fee310>]` - Generate documentation for all modules.
- `calculate_coverage(self) -> Dict[<ast.Tuple object at 0x7eda70fde590>]` - Calculate documentation coverage for all files.
- `__init__(self, project_path: Path)`
- `generate(self, template: str) -> str` - Generate README content from project structure.
- `write(self, output_path: Optional[Path])` - Write README to file.
- `__init__(self, project_path: Path)`
- `get_commits(self, since_days: int) -> List[<ast.Subscript object at 0x7eda71043610>]` - Get git commits since specified days ago.
- `categorize_commit(self, message: str) -> str` - Categorize commit by conventional commit type.
- `generate(self, since_days: int) -> str` - Generate changelog content.
- `write(self, output_path: Optional[Path], since_days: int)` - Write changelog to file.
- `__init__(self, project_path: Path)`
- `scan_and_save(self) -> Path` - Scan project and save documentation data.
- `update_readme(self) -> Path` - Generate and update README.md.
- `update_changelog(self, days: int) -> Path` - Generate and update CHANGELOG.md.
- `save_coverage_report(self) -> Path` - Save documentation coverage report.
- `run_full_update(self) -> Dict[<ast.Tuple object at 0x7eda7108f410>]` - Run complete documentation update.

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

### scripts/documentation_sync_tool.py


Documentation Sync Tool - Feature #94

Automatically syncs documentation across project files:
- README.md updates
- CHANGELOG.md maintenance
- Memory file synchronization
- Auto-updates dates and references

Author: Zak
Version: 1.0.0


**Functions:**

- `sync_readme()` - Update README with current date
- `sync_changelog()` - Add entry to changelog if needed
- `sync_memory_files()` - Update memory files with current activity
- `main()` - Run documentation sync

### scripts/dynamic_router.py


Dynamic Router (Feature #31)
============================

Dynamic message and task routing with automatic failover.

Features:
- Route messages to healthy agents
- Automatic failover on node failure
- Capability-based routing
- Load balancing across healthy nodes
- Route optimization based on latency
- Circuit breaker pattern for failing nodes

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `get_router() -> DynamicRouter` - Get the singleton router instance
- `record_success(self)` - Record a successful request
- `record_failure(self) -> bool` - Record a failed request, returns True if circuit opened
- `can_execute(self) -> bool` - Check if request can be executed
- `get_active_route(self) -> Optional[Route]` - Get the best active route
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda70cf3f10>]`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda70cf0f10>]`
- `__init__(self)`
- `_init_circuit_breakers(self)` - Initialize circuit breakers for all nodes
- `_rebuild_routing_table(self)` - Rebuild the routing table based on current mesh state
- `_calculate_fallback_routes(self, source: str, target: str) -> List[Route]` - Calculate fallback routes through intermediaries
- `route_by_capability(self, capability: str, message: Dict[<ast.Tuple object at 0x7eda70d36e10>], strategy: RoutingStrategy, exclude: List[str]) -> Optional[str]` - Route to a node with specific capability.
- `route_message(self, source: str, target: str, message_type: str, payload: Dict[<ast.Tuple object at 0x7eda70d49e10>]) -> Tuple[<ast.Tuple object at 0x7eda70d5fa10>]` - Route a message from source to target.
- `_find_alternate_target(self, original_target: str, message_type: str, payload: Dict[<ast.Tuple object at 0x7eda70d642d0>]) -> Optional[str]` - Find an alternate target when original is unavailable
- `record_delivery_failure(self, node_id: str) -> bool` - Record a delivery failure to a node
- `get_route_stats(self) -> Dict[<ast.Tuple object at 0x7eda70d77a50>]` - Get routing statistics
- `generate_routing_report(self) -> str` - Generate routing report
- `_log_message(self, msg: RoutedMessage)` - Log a routed message
- `_save_routing_table(self)` - Save routing table to disk

**Classes:**

- `RoutingStrategy` - Routing strategies
- `CircuitState` - Circuit breaker states
- `CircuitBreaker` - Circuit breaker for a node
  - `record_success()` - Record a successful request
  - `record_failure()` - Record a failed request, returns True if circuit opened
  - `can_execute()` - Check if request can be executed
- `RoutingEntry` - A routing table entry
  - `get_active_route()` - Get the best active route
  - `to_dict()`
- `RoutedMessage` - A message being routed through the network
  - `to_dict()`
- `DynamicRouter` - Dynamic message router with automatic failover.
  - `__init__()`
  - `_init_circuit_breakers()` - Initialize circuit breakers for all nodes
  - `_rebuild_routing_table()` - Rebuild the routing table based on current mesh state
  - `_calculate_fallback_routes()` - Calculate fallback routes through intermediaries
  - `route_by_capability()` - Route to a node with specific capability.
  - ... and 7 more methods

### scripts/email_cleanup.py


Email cleanup script - comprehensive version.


**Functions:**

- `cleanup_emails()` - Clean up old/resolved emails.

### scripts/execute_twitter_signup.py


Execute Twitter Signup via BrowserAct API


**Functions:**

- `create_task(workflow_id, parameters)` - Create a BrowserAct task
- `get_task_status(task_id)` - Get task status
- `get_task_results(task_id)` - Get full task results
- `main()`

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

- `get_external_data() -> Dict[<ast.Tuple object at 0x7eda6fa7e210>]` - Convenience function to fetch all external data
- `__init__(self)`
- `fetch_calendar_events(self, days_ahead: int) -> List[<ast.Subscript object at 0x7eda6fa2a8d0>]` - Fetch upcoming calendar events.
- `fetch_email_topics(self, days: int) -> Dict[<ast.Tuple object at 0x7eda6fa4c510>]` - Analyze recent emails for recurring topics.
- `fetch_weather(self) -> Optional[<ast.Subscript object at 0x7eda6fa584d0>]` - Fetch London weather.
- `fetch_news_topics(self) -> List[<ast.Subscript object at 0x7eda6fa62a50>]` - Fetch recent news from blogwatcher scan.
- `fetch_recent_outputs(self, hours: int) -> List[<ast.Subscript object at 0x7eda6fa745d0>]` - Fetch recent agent outputs from file system.
- `fetch_all(self) -> Dict[<ast.Tuple object at 0x7eda6fa7d590>]` - Fetch all external data sources.

**Classes:**

- `ExternalDataFetcher` - Fetches real external data for predictive automation
  - `__init__()`
  - `fetch_calendar_events()` - Fetch upcoming calendar events.
  - `fetch_email_topics()` - Analyze recent emails for recurring topics.
  - `fetch_weather()` - Fetch London weather.
  - `fetch_news_topics()` - Fetch recent news from blogwatcher scan.
  - ... and 2 more methods

### scripts/feature_41_email.py


Email notification for Research Scout Notion Export
Sends summary report to Thomas after export.


**Functions:**

- `send_completion_email(export_results: dict, scan_summary: dict)` - Send completion email to Thomas.
- `create_summary_markdown(export_results: dict, scan_summary: dict) -> str` - Create a summary markdown report.

### scripts/feature_50_security_audit_automation.py


Feature #50: Security Audit Automation
Automated security checks and compliance scanning


**Functions:**

- `run_security_checks()` - Run comprehensive security checks
- `generate_report(report)` - Generate HTML and JSON reports
- `main()` - Main entry point

### scripts/feature_51_vulnerability_scanner.py


Feature #51: Vulnerability Scanner
Scans for CVEs in dependencies and system packages


**Functions:**

- `check_python_dependencies()` - Check Python packages for known vulnerabilities
- `check_system_packages()` - Check system packages for updates
- `check_node_dependencies()` - Check Node.js packages if present
- `generate_report(results)` - Generate vulnerability scan report
- `main()` - Main entry point

### scripts/feature_52_secrets_rotation_manager.py


Feature #52: Secrets Rotation Manager
Manages rotation of API keys and credentials


**Functions:**

- `load_secrets_registry()` - Load secrets registry
- `save_secrets_registry(registry)` - Save secrets registry
- `check_secrets_status()` - Check status of all tracked secrets
- `generate_report(status)` - Generate rotation report
- `main()` - Main entry point

### scripts/feature_53_multi-factor_auth_module.py

### scripts/feature_54_incident_response_orchestrator.py


Feature #54: Incident Response Orchestrator
Automated incident detection and response


**Functions:**

- `load_incidents()` - Load incident history
- `save_incidents(data)` - Save incident history
- `detect_disk_space_issue()` - Check for low disk space
- `detect_memory_issue()` - Check for high memory usage
- `detect_zombie_processes()` - Check for zombie processes
- `detect_failed_services()` - Check for failed systemd services
- `detect_incidents()` - Run all incident detection checks
- `auto_resolve(incident)` - Attempt to auto-resolve an incident
- `generate_response_plan(incidents)` - Generate incident response plan
- `main()` - Main entry point

### scripts/feature_56_query_cache_layer.py


Feature #56: Query Cache Layer
Simple caching layer for database queries and API calls


**Functions:**

- `get_cache_key(query: str, params: tuple) -> str` - Generate cache key from query and params
- `load_cache_index()` - Load cache index
- `save_cache_index(index)` - Save cache index
- `get_from_cache(key: str) -> Optional[Any]` - Get value from cache if not expired
- `set_cache(key: str, value: Any, ttl: int)` - Store value in cache
- `clear_expired()` - Clear expired cache entries
- `get_cache_stats()` - Get cache statistics
- `main()` - Main entry point

### scripts/feature_57_api_rate_limiting.py

### scripts/feature_58_memory_profiling_tool.py


Feature #58: Memory Profiling Tool
Tracks memory usage and detects potential leaks


**Functions:**

- `get_current_memory_usage()` - Get current system memory usage
- `get_process_memory()` - Get memory usage of top processes
- `get_swap_usage()` - Get swap usage
- `load_history()` - Load memory usage history
- `save_history(history)` - Save memory usage history
- `detect_memory_trends(history)` - Detect memory usage trends
- `generate_report(memory_data, processes, swap, trends)` - Generate memory profiling report
- `main()` - Main entry point

### scripts/feature_59_distributed_tracing.py

### scripts/feature_60_real-time_metrics_stream.py

### scripts/feature_61_custom_alert_rules_engine.py

### scripts/feature_62_slo_tracking_dashboard.py

### scripts/feature_63_log_anomaly_detection.py

### scripts/feature_64_user_experience_monitoring.py

### scripts/feature_66_auto-scaling_controller.py

### scripts/feature_67_deployment_pipeline_optimizer.py

### scripts/feature_68_test_automation_framework.py

### scripts/feature_69_configuration_generator.py

### scripts/feature_70_git_integration_module.py

### scripts/feature_71_notification_router.py

### scripts/feature_72_data_retention_manager.py

### scripts/feature_73_backup_verification.py

### scripts/feature_74_schema_migration_tool.py

### scripts/feature_75_feature_flag_system.py

### scripts/feature_77_performance_budget_tracker.py

### scripts/feature_78_error_budget_calculator.py

### scripts/feature_79_service_level_objective_manager.py

### scripts/feature_80_chaos_engineering_tool.py

### scripts/feature_81_load_testing_framework.py

### scripts/feature_82_documentation_generator.py

### scripts/feature_83_api_version_manager.py

### scripts/feature_84_keyboard_shortcut_system.py

### scripts/feature_85_voice_command_interface.py

### scripts/feature_86_accessibility_compliance_checker.py

### scripts/feature_87_webhook_management_system.py

### scripts/feature_88_event_stream_processor.py

### scripts/feature_89_metrics_aggregation_pipeline.py

### scripts/feature_90_health_check_orchestrator.py

### scripts/feature_91_configuration_validator.py

### scripts/feature_92_code_quality_gate.py

### scripts/feature_93_dependency_update_automation.py

### scripts/feature_94_documentation_sync_tool.py

### scripts/feature_95_dead_code_eliminator.py

### scripts/feature_96_type_hint_enforcer.py

### scripts/feature_99_test_feature.py

### scripts/feature_audit_runner.py


Feature Audit Runner
Executes comprehensive audits on features based on priority queue.
Part of the Systematic Feature Checking & Development Process.


**Functions:**

- `main()` - Main entry point.
- `__init__(self)`
- `_load_features(self) -> List[<ast.Subscript object at 0x7eda730cea90>]` - Load features from registry.
- `get_feature_by_id(self, feature_id: int) -> Optional[<ast.Subscript object at 0x7eda730cd850>]` - Get feature by ID.
- `run_audit(self, feature_id: int, comprehensive: bool) -> Dict[<ast.Tuple object at 0x7eda730b5510>]` - Run complete audit on a feature.
- `_test_discovery(self, feature: Dict[<ast.Tuple object at 0x7eda730b4f90>]) -> Dict[<ast.Tuple object at 0x7eda72edae50>]` - Test 1: Verify feature files exist.
- `_test_syntax(self, feature: Dict[<ast.Tuple object at 0x7eda72eda8d0>]) -> Dict[<ast.Tuple object at 0x7eda72f09810>]` - Test 2: Check code syntax.
- `_test_execution(self, feature: Dict[<ast.Tuple object at 0x7eda72f09d90>]) -> Dict[<ast.Tuple object at 0x7eda72f23410>]` - Test 3: Execute feature and verify output.
- `_test_edge_cases(self, feature: Dict[<ast.Tuple object at 0x7eda72f23990>]) -> Dict[<ast.Tuple object at 0x7eda72f2d110>]` - Test 4: Edge case testing (comprehensive only).
- `_test_integration(self, feature: Dict[<ast.Tuple object at 0x7eda72f2d690>]) -> Dict[<ast.Tuple object at 0x7eda72f2edd0>]` - Test 5: Integration testing (comprehensive only).
- `_test_performance(self, feature: Dict[<ast.Tuple object at 0x7eda72f2f350>]) -> Dict[<ast.Tuple object at 0x7eda72f38ad0>]` - Test 6: Performance testing (comprehensive only).
- `_determine_status(self, tests: Dict[<ast.Tuple object at 0x7eda72f39050>]) -> str` - Determine overall feature status.
- `_generate_recommendations(self, feature: Dict[<ast.Tuple object at 0x7eda72f3b290>], audit: Dict[<ast.Tuple object at 0x7eda72f3b5d0>]) -> List[str]` - Generate recommendations based on audit results.
- `_save_audit_report(self, feature_id: int, audit: Dict[<ast.Tuple object at 0x7eda72f49990>])` - Save audit report to file.
- `_print_summary(self, audit: Dict[<ast.Tuple object at 0x7eda72f623d0>])` - Print audit summary.

**Classes:**

- `FeatureAuditor` - Main class for feature auditing.
  - `__init__()`
  - `_load_features()` - Load features from registry.
  - `get_feature_by_id()` - Get feature by ID.
  - `run_audit()` - Run complete audit on a feature.
  - `_test_discovery()` - Test 1: Verify feature files exist.
  - ... and 9 more methods

### scripts/feature_deployment_notifier.py


Feature Deployment Notifier
Standardized email notification system for feature deployments

This module provides:
- Standardized email templates for feature deployments
- Integration with universal_email_sender.py
- Tracking and duplicate prevention
- CLI interface for manual and automated use

Usage:
    # Import and use in code:
    from feature_deployment_notifier import notify_feature_deployed
    notify_feature_deployed(
        feature_num=45,
        feature_title="New Dashboard Widget",
        description="Added a new analytics widget to the dashboard",
        docs_link="https://docs.example.com/feature-45"
    )

    # Command line:
    python3 feature_deployment_notifier.py --feature 45 --title "New Feature" --description "..."
    python3 feature_deployment_notifier.py --test  # Send test email


**Functions:**

- `log(message: str)` - Log with timestamp
- `load_tracking() -> Dict[<ast.Tuple object at 0x7eda7020a110>]` - Load feature deployment tracking data
- `save_tracking(tracking: Dict[<ast.Tuple object at 0x7eda70209c10>])` - Save feature deployment tracking data
- `build_email_template(feature_num: int, feature_title: str, description: str, timestamp: Optional[str], docs_link: Optional[str], deployed_by: str, priority: str, additional_notes: Optional[str]) -> tuple` - Build standardized email subject and body for feature deployment
- `notify_feature_deployed(feature_num: int, feature_title: str, description: str, docs_link: Optional[str], deployed_by: str, priority: str, additional_notes: Optional[str], recipient: str, sender_agent: str, allow_duplicates: bool) -> Dict[<ast.Tuple object at 0x7eda7022e310>]` - Send a standardized feature deployment notification email
- `send_test_email(recipient: str) -> Dict[<ast.Tuple object at 0x7eda7022fc50>]` - Send a test deployment notification email
- `get_deployment_stats() -> Dict[<ast.Tuple object at 0x7eda7023af10>]` - Get statistics about feature deployments and notifications
- `main()`

### scripts/feature_priority_calculator.py


Feature Priority Calculator
Calculates priority scores for all features based on importance, risk, and recency.
Part of the Systematic Feature Checking & Development Process.


**Functions:**

- `get_recency_score(days_since_check: int) -> int` - Get recency score based on days since last check.
- `get_last_check_date(feature_id: int) -> Tuple[<ast.Tuple object at 0x7eda6e99f9d0>]` - Get the last check date for a feature.
- `get_error_count(feature_id: int, feature_name: str) -> int` - Count recent errors for a feature from logs.
- `get_cron_status(feature_id: int, feature_name: str) -> Dict[<ast.Tuple object at 0x7eda6e998ed0>]` - Check if feature has a cron job scheduled.
- `calculate_risk_score(feature: Dict[<ast.Tuple object at 0x7eda6e998810>], error_count: int, cron_status: Dict) -> int` - Calculate risk score (1-10).
- `calculate_complexity_score(feature: Dict[<ast.Tuple object at 0x7eda6e9b3ed0>]) -> int` - Estimate complexity score (1-10).
- `calculate_priority(feature: Dict[<ast.Tuple object at 0x7eda6e9b16d0>]) -> Dict[<ast.Tuple object at 0x7eda6e9a8e90>]` - Calculate comprehensive priority score for a feature.
- `load_features() -> List[<ast.Subscript object at 0x7eda6e7d6f10>]` - Load features from registry.
- `save_priorities(priorities: List[<ast.Subscript object at 0x7eda6e7d6910>])` - Save priorities to database.
- `get_priority_queue(limit: int) -> List[<ast.Subscript object at 0x7eda6e7ec3d0>]` - Get top N features by priority.
- `main()` - Main entry point.
- `format_priority(p: Dict[<ast.Tuple object at 0x7eda6e80e650>]) -> str` - Format priority for display.

### scripts/feature_retirement.py


Feature #34: Automated Feature Retirement System

Detects unused features, archives them safely with rollback capability,
and reduces system complexity.

Author: Autonomous Development Loop
Date: 2026-02-07


**Functions:**

- `main()` - CLI entry point.
- `__post_init__(self)`
- `health_score(self) -> float` - Calculate a health score (0-100) based on usage.
- `retirement_risk(self) -> str` - Assess retirement risk level.
- `__init__(self, db_path: str)`
- `_init_db(self)` - Initialize database tables.
- `log_execution(self, feature_id: int, feature_name: str, duration_ms: int, success: bool, error: str, triggered_by: str)` - Log a feature execution.
- `register_feature(self, feature_id: int, feature_name: str, script_path: str, description: str)` - Register a feature in the database.
- `get_metrics(self, feature_id: int, days: int) -> FeatureMetrics` - Get usage metrics for a feature.
- `get_all_features(self) -> List[int]` - Get all registered feature IDs.
- `log_audit(self, action: str, feature_id: int, details: str, performed_by: str)` - Log an audit entry.
- `__init__(self, workspace_path: str)`
- `scan_all_features(self) -> Dict[<ast.Tuple object at 0x7eda71387b90>]` - Scan workspace for all features.
- `_extract_feature_info(self, file_path: Path) -> Optional[Dict]` - Extract feature information from a file.
- `_extract_docstring(self, content: str) -> str` - Extract description from docstring.
- `scan_dependencies(self, feature_id: int, script_path: str) -> List[str]` - Scan for dependencies of a feature.
- `__init__(self, workspace_path: str)`
- `analyze_all_features(self) -> List[FeatureMetrics]` - Analyze all features and return their metrics.
- `identify_retirement_candidates(self, threshold: float) -> List[RetirementCandidate]` - Identify features that are candidates for retirement.
- `_generate_retirement_reason(self, metrics: FeatureMetrics) -> str` - Generate a human-readable reason for retirement consideration.
- `_suggest_action(self, metrics: FeatureMetrics) -> str` - Suggest an action based on metrics.
- `archive_feature(self, feature_id: int, reason: str, dry_run: bool) -> Dict` - Archive a feature with full rollback capability.
- `_find_related_files(self, feature_id: int, script_path: str) -> List[str]` - Find all files related to a feature.
- `_generate_rollback_script(self, manifest: Dict, archive_path: Path) -> str` - Generate a shell script to restore the feature.
- `restore_feature(self, feature_id: int) -> Dict` - Restore a retired feature from archive.
- `get_retirement_report(self) -> Dict` - Generate a comprehensive retirement analysis report.

**Classes:**

- `FeatureMetrics` - Usage metrics for a feature.
  - `__post_init__()`
  - `health_score()` - Calculate a health score (0-100) based on usage.
  - `retirement_risk()` - Assess retirement risk level.
- `RetirementCandidate` - A feature candidate for retirement.
- `FeatureRetirementDB` - SQLite database for feature retirement tracking.
  - `__init__()`
  - `_init_db()` - Initialize database tables.
  - `log_execution()` - Log a feature execution.
  - `register_feature()` - Register a feature in the database.
  - `get_metrics()` - Get usage metrics for a feature.
  - ... and 2 more methods
- `FeatureScanner` - Scans the codebase for features and their usage patterns.
  - `__init__()`
  - `scan_all_features()` - Scan workspace for all features.
  - `_extract_feature_info()` - Extract feature information from a file.
  - `_extract_docstring()` - Extract description from docstring.
  - `scan_dependencies()` - Scan for dependencies of a feature.
- `FeatureRetirementSystem` - Main system for feature retirement management.
  - `__init__()`
  - `analyze_all_features()` - Analyze all features and return their metrics.
  - `identify_retirement_candidates()` - Identify features that are candidates for retirement.
  - `_generate_retirement_reason()` - Generate a human-readable reason for retirement consideratio
  - `_suggest_action()` - Suggest an action based on metrics.
  - ... and 5 more methods

### scripts/feature_retirement_cli.py


Feature Retirement CLI Integration
Extends the main ocl CLI with feature retirement commands.

Commands:
    ocl feature scan        - Scan for all features
    ocl feature analyze     - Analyze all feature health
    ocl feature candidates  - Show retirement candidates
    ocl feature status <id> - Show feature status
    ocl feature report      - Generate retirement report
    ocl feature archive <id> - Archive a feature
    ocl feature restore <id> - Restore a retired feature


**Functions:**

- `main()`

### scripts/feature_usage_analytics.py


Feature Usage Analytics System
Tracks which features are actively used and identifies underutilized capabilities

Author: Zak
Version: 1.0.0
Feature: #20


**Functions:**

- `main()` - Main entry point
- `__init__(self)`
- `_ensure_directories(self)` - Create necessary directories
- `_load_existing_data(self)` - Load existing usage data
- `_save_data(self)` - Save usage data to disk
- `detect_feature_usage(self) -> Dict[<ast.Tuple object at 0x7eda6f500690>]` - Detect usage of all features by analyzing files and logs
- `log_feature_event(self, feature_id: int, event_type: str, details: Dict[<ast.Tuple object at 0x7eda6f4f7c90>])` - Log a feature usage event
- `calculate_statistics(self, usage_data: Dict[<ast.Tuple object at 0x7eda6f4f5690>]) -> Dict[<ast.Tuple object at 0x7eda6f4d5e90>]` - Calculate overall statistics
- `_get_suggestion(self, feature_id: int, usage: Dict[<ast.Tuple object at 0x7eda6f4d5810>]) -> str` - Generate a suggestion for an underutilized feature
- `generate_dashboard_html(self, usage_data: Dict[<ast.Tuple object at 0x7eda6f568590>], stats: Dict[<ast.Tuple object at 0x7eda6f568b10>]) -> str` - Generate an HTML dashboard
- `_generate_critical_alerts(self, stats: Dict[<ast.Tuple object at 0x7eda6f588490>]) -> str` - Generate HTML for critical feature alerts
- `_generate_suggestions(self, stats: Dict[<ast.Tuple object at 0x7eda6f58ad90>]) -> str` - Generate HTML for optimization suggestions
- `generate_report(self, usage_data: Dict[<ast.Tuple object at 0x7eda6f599190>], stats: Dict[<ast.Tuple object at 0x7eda6f599710>]) -> str` - Generate a markdown report
- `run(self)` - Run the full analytics cycle

**Classes:**

- `FeatureUsageAnalytics` - Analytics system for tracking feature usage
  - `__init__()`
  - `_ensure_directories()` - Create necessary directories
  - `_load_existing_data()` - Load existing usage data
  - `_save_data()` - Save usage data to disk
  - `detect_feature_usage()` - Detect usage of all features by analyzing files and logs
  - ... and 8 more methods

### scripts/feature_worker.py


Feature Implementation Worker
Implements a single feature with full deployment pipeline

Usage: python3 feature_worker.py <feature_id> <feature_name> <effort> <impact>


**Functions:**

- `log(message)`
- `send_completion_email(feature_id, feature_name, effort, impact, files_created)` - Send email notification about completed feature
- `implement_token_usage_optimizer()` - Feature #55: Token Usage Optimizer
- `implement_smart_task_scheduler()` - Feature #65: Smart Task Scheduler
- `main()`

### scripts/generate_api_health_dashboard.py


API Health Dashboard Generator
Generates HTML dashboard with API endpoint health status


**Functions:**

- `load_api_health()` - Load API health data from database
- `collect_issues(apis)` - Collect API issues for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_content_quality_dashboard.py


Content Quality Dashboard Generator
Generates HTML dashboard with content quality scores


**Functions:**

- `load_quality_data()` - Load content quality data from database
- `collect_issues(agent_stats)` - Collect quality issues for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_cost_monitor.py


Cost Monitor Dashboard Generator - Enhanced Version
Generates HTML dashboard with graphs and optimization suggestions
Updates hourly via cron


**Functions:**

- `get_token_usage_history()` - Get token usage history from analytics database
- `estimate_token_usage()` - Estimate token usage from memory files if no analytics DB
- `get_service_costs()` - Get current service costs and usage
- `analyze_optimization_opportunities()` - Analyze and suggest cost optimizations
- `generate_graph_data(history)` - Generate SVG graph data for token usage
- `generate_dashboard()` - Generate HTML dashboard

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

### scripts/generate_dependency_mapper.py


Dependency Mapper Dashboard Generator
Generates HTML dashboard with system dependency visualization


**Functions:**

- `scan_dependencies()` - Scan for system dependencies
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_feature_retirement.py


Feature Retirement Dashboard Generator
Generates HTML dashboard with current feature analysis data


**Functions:**

- `collect_critical_features()` - Collect critical features for index page
- `update_issues_file(new_issues)` - Update central issues file
- `run_feature_analysis()` - Run feature retirement analysis and parse results
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_feature_usage_dashboard.py


Feature Usage Analytics Dashboard Generator (Updated)
Shows only real implementations, excludes stubs


**Functions:**

- `get_feature_usage_data()` - Get actual feature usage - exclude stubs
- `collect_issues(stats)` - Collect feature usage issues for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_health_predictor_dashboard.py


Health Predictor Dashboard Generator


**Functions:**

- `generate_dashboard()`

### scripts/generate_improvements_dashboard.py


Improvements Dashboard Generator


**Functions:**

- `generate_dashboard()`

### scripts/generate_incident_playbook.py


Incident Response Playbook Dashboard Generator
Generates HTML dashboard with current incident data


**Functions:**

- `load_incident_data()` - Load incident data from database
- `collect_issues(incidents)` - Collect incidents for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_log_aggregator.py


Log Aggregator Dashboard Generator
Generates HTML dashboard with current log statistics


**Functions:**

- `count_log_entries()` - Count actual log entries from /var/log/openclaw/
- `analyze_error_patterns()` - Analyze common error patterns in logs
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_marketplace_dashboard.py


Enhanced Capability Marketplace Dashboard
Shows projects, rewards, leaderboard, and agent activity


**Functions:**

- `get_marketplace_data()` - Get all marketplace data
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_network_mesh.py


Network Mesh Dashboard Generator
Creates HTML dashboard for self-healing network mesh monitoring


**Functions:**

- `collect_issues()` - Collect issues from network mesh for index page
- `update_issues_file(new_issues)` - Update central issues file
- `get_mesh_stats()` - Get statistics from network mesh database
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_performance_benchmarks.py


Performance Benchmarks Dashboard Generator
Generates HTML dashboard with performance metrics and regression detection


**Functions:**

- `load_performance_data()` - Load performance data from test reports and databases
- `collect_issues(data)` - Collect performance issues for index page
- `update_issues_file(new_issues)` - Update central issues file
- `generate_dashboard()` - Generate HTML dashboard

### scripts/generate_predictive_maintenance.py


Predictive Maintenance Dashboard Generator


**Functions:**

- `generate_dashboard()`

### scripts/generate_priority_dashboard.py


Priority Dashboard Generator


**Functions:**

- `generate_dashboard()`

### scripts/generate_service_cost_dashboard.py


Service Costs Dashboard Generator
Generates accurate cost dashboard from real data sources


**Functions:**

- `get_kimi_usage()` - Get actual Kimi Code API usage from session or database
- `get_hetzner_usage()` - Get Hetzner server utilization
- `get_brave_usage()` - Get Brave Search API usage
- `get_email_usage()` - Get Hostinger email usage
- `calculate_total_costs()` - Calculate total monthly costs
- `generate_dashboard()` - Generate HTML dashboard with accurate data

### scripts/generate_system_wide_dashboard.py


System Wide Dashboard Generator
Generates HTML dashboard with actual system health metrics


**Functions:**

- `calculate_system_health()` - Calculate actual system health percentage
- `get_agent_count()` - Get active agent count
- `get_feature_count()` - Get active feature count
- `generate_dashboard()` - Generate HTML dashboard with real metrics

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
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda6fa9ec90>]`
- `__init__(self)`
- `_load_config(self) -> Dict[<ast.Tuple object at 0x7eda6fa96710>]` - Load calendar configuration
- `_save_config(self, config: Dict[<ast.Tuple object at 0x7eda6fa96190>])` - Save calendar configuration
- `_init_service(self) -> bool` - Initialize Google Calendar API service
- `_log(self, message: str)` - Log message to calendar API log
- `is_authenticated(self) -> bool` - Check if we have valid authentication
- `get_upcoming_events(self, days: int, max_results: int) -> List[CalendarEvent]` - Fetch upcoming events from Google Calendar
- `_parse_event(self, event: Dict[<ast.Tuple object at 0x7eda6faa5650>]) -> Optional[CalendarEvent]` - Parse Google Calendar event into CalendarEvent
- `_classify_event(self, summary: str, description: str, is_conference: bool) -> str` - Classify event type based on content
- `_get_cached_events(self, days: int) -> Optional[<ast.Subscript object at 0x7eda6f8f9850>]` - Get cached events if still valid
- `_cache_events(self, events: List[CalendarEvent], days: int)` - Cache events to file
- `get_events_needing_prep(self) -> List[CalendarEvent]` - Get events that need preparation (conferences, speaking engagements)
- `get_tomorrow_events(self) -> List[CalendarEvent]` - Get events for tomorrow
- `get_next_7_days_events(self) -> List[CalendarEvent]` - Get events for next 7 days
- `generate_daily_briefing(self) -> str` - Generate a daily briefing of upcoming events
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda6f92db90>]` - Get calendar statistics

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

### scripts/health_predictor_dashboard.py


Health Predictor Dashboard Generator
Generates HTML dashboard for visualizing predictions and anomalies

Author: Zak (Feature #21)
Version: 1.0.0


**Functions:**

- `get_health_data()` - Get health data from database
- `generate_dashboard()` - Generate HTML dashboard
- `main()` - Generate dashboard file

### scripts/incident_playbook.py


Incident Response Playbook v1.0.0
Automated incident detection, self-healing, and escalation system

Features:
- Pattern-based incident detection from logs and monitors
- Automated self-healing actions for known issues
- Escalation procedures with severity-based routing
- Incident tracking and response effectiveness analytics
- Integration with existing monitoring systems

Author: Zak (Feature #27)
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `__init__(self)`
- `_init_database(self)` - Initialize SQLite database for incident tracking
- `_load_playbooks(self)` - Load playbook definitions
- `_load_state(self)` - Load persistent state
- `_save_state(self)` - Save persistent state
- `_log(self, message: str, level: str)` - Log incident response activity
- `detect_incidents(self, source_log: Optional[str]) -> List[Incident]` - Scan logs and monitoring data for incident patterns.
- `_check_system_resources(self) -> List[Incident]` - Check system resources for issues
- `_scan_log_for_incidents(self, log_file: str) -> List[Incident]` - Scan a log file for incident patterns
- `_check_monitoring_data(self) -> List[Incident]` - Check existing monitoring systems for incidents
- `_create_incident_from_detection(self, playbook_id: str, title: str, description: str, source_system: str) -> Incident` - Create an incident from a detection
- `_filter_suppressed(self, incidents: List[Incident]) -> List[Incident]` - Filter out recently suppressed incidents
- `record_incident(self, incident: Incident) -> int` - Record an incident to the database
- `execute_playbook(self, incident_id: int) -> List[HealingAction]` - Execute auto-healing actions for an incident
- `_execute_healing_action(self, action_type: str, params: Dict) -> Tuple[<ast.Tuple object at 0x7eda6fee11d0>]` - Execute a specific healing action
- `check_escalation(self) -> List[Incident]` - Check for incidents requiring escalation
- `escalate_incident(self, incident_id: int, reason: str) -> bool` - Escalate an incident to human attention
- `get_incident_summary(self) -> Dict[<ast.Tuple object at 0x7eda6ff07150>]` - Get summary of incident status
- `_row_to_incident(self, row) -> Incident` - Convert database row to Incident object
- `run_response_cycle(self) -> Dict[<ast.Tuple object at 0x7eda6ff2a2d0>]` - Main response cycle - detect, heal, escalate

**Classes:**

- `IncidentSeverity` - Incident severity levels
- `IncidentStatus` - Incident lifecycle status
- `IncidentCategory` - Categories of incidents
- `Incident` - Represents a detected incident
- `PlaybookEntry` - Defines a response playbook for an incident type
- `HealingAction` - Result of a healing action
- `IncidentResponseSystem` - Main incident response system.
  - `__init__()`
  - `_init_database()` - Initialize SQLite database for incident tracking
  - `_load_playbooks()` - Load playbook definitions
  - `_load_state()` - Load persistent state
  - `_save_state()` - Save persistent state
  - ... and 15 more methods

### scripts/incident_response_cron.py


Incident Response Cron Job
Runs incident detection and response cycle
Scheduled to run every 3 minutes


**Functions:**

- `main()` - Run the incident response cycle
- `generate_escalation_report(system, summary)` - Generate a report of escalated incidents

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

### scripts/kai_twitter_browser_setup.py


Kai Twitter Setup - Browser Automation
Uses BrowserAct to authenticate with Twitter/X


**Functions:**

- `create_twitter_login_workflow()` - Create a BrowserAct workflow for Twitter login
- `main()`

### scripts/kai_twitter_playwright.py


Create Kai's Twitter account using Playwright browser automation


**Functions:**

- `create_twitter_account()` - Automate Twitter signup

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

### scripts/maint_cli.py


Predictive Maintenance CLI Extension
Adds 'maint' command to the unified CLI


**Functions:**

- `handle_command(args)` - Handle predictive maintenance CLI commands.
- `show_status()` - Show current predictive maintenance status.
- `run_prediction()` - Run prediction analysis.
- `run_schedule()` - Run maintenance scheduling.
- `show_report()` - Show comprehensive maintenance report.
- `show_windows()` - Show all maintenance windows.
- `approve_window(window_id)` - Approve a pending maintenance window.
- `cancel_window(window_id)` - Cancel a scheduled maintenance window.
- `show_history()` - Show maintenance history.
- `start_monitoring()` - Start continuous monitoring.
- `simulate_issue(issue_type)` - Simulate a maintenance issue for testing.
- `show_help()` - Show help text.

### scripts/memory_cli.py


Memory CLI Tool (Feature #26)
Command-line interface for the Agent Conversation Memory system.


**Functions:**

- `cmd_store(args)` - Store a new memory.
- `cmd_recall(args)` - Search and recall memories.
- `cmd_stats(args)` - Show memory statistics.
- `cmd_context(args)` - Get formatted context for a session.
- `cmd_consolidate(args)` - Run memory consolidation.
- `cmd_delete(args)` - Delete a memory.
- `cmd_subagent(args)` - Subagent-specific memory commands.
- `cmd_interactive(args)` - Interactive memory browser.
- `main()`

### scripts/mesh_cli.py


Network Mesh CLI (Feature #31)
==============================

Command-line interface for the self-healing network mesh.

Usage:
    ocl mesh status          Show mesh topology and health
    ocl mesh nodes           List all nodes
    ocl mesh routes          Show routing table
    ocl mesh heal <node>     Manually trigger healing
    ocl mesh test            Test message routing
    ocl mesh report          Generate health report

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `cmd_status(args)` - Show mesh status
- `cmd_nodes(args)` - List and manage nodes
- `cmd_routes(args)` - Show routing table
- `cmd_heal(args)` - Trigger healing for a node
- `cmd_test(args)` - Test message routing
- `cmd_report(args)` - Generate health report
- `cmd_simulate(args)` - Simulate network scenarios
- `main()`

### scripts/model_fallback.py


Multi-Model Fallback System - Feature #42
Automatic model switching on failures with cost-aware routing.

This system provides:
- Automatic fallback when primary model fails or hits rate limits
- Cost-aware routing based on task complexity
- Health tracking for all model providers
- Seamless retry with exponential backoff
- Cost optimization through intelligent tier selection


**Functions:**

- `init_database()` - Initialize SQLite database for tracking.
- `log_message(message: str, level: str)` - Log message to file.
- `get_fallback_manager() -> ModelFallbackManager` - Get or create the global fallback manager.
- `__post_init__(self)`
- `__init__(self)`
- `_load_models(self) -> Dict[<ast.Tuple object at 0x7eda7319ba10>]` - Load model configurations.
- `_init_health_tracking(self)` - Initialize health tracking in database.
- `get_model_health(self, model_name: str) -> Dict` - Get current health status for a model.
- `update_model_health(self, model_name: str, success: bool, error_type: Optional[str], latency_ms: int)` - Update health status after a request.
- `route_task(self, task_type: str, preferred_model: Optional[str], complexity: str) -> RoutingDecision` - Determine the best model for a task.
- `_log_routing_decision(self, task_type: str, requested: Optional[str], decision: RoutingDecision)` - Log routing decision to database.
- `execute_with_fallback(self, task_type: str, call_fn: Callable, preferred_model: Optional[str], max_retries: int) -> Tuple[<ast.Tuple object at 0x7eda7304ec50>]` - Execute a task with automatic fallback on failure.
- `get_stats(self, days: int) -> Dict` - Get usage statistics.
- `save_config(self)` - Save current configuration to file.
- `model_priority(item)`

**Classes:**

- `ModelTier` - Model tiers based on capability and cost.
- `ModelStatus` - Model health status.
- `ModelConfig` - Configuration for a model provider.
  - `__post_init__()`
- `RoutingDecision` - Result of a routing decision.
- `ModelUsage` - Track model usage for analytics.
- `ModelFallbackManager` - Main class for managing model fallback and routing.
  - `__init__()`
  - `_load_models()` - Load model configurations.
  - `_init_health_tracking()` - Initialize health tracking in database.
  - `get_model_health()` - Get current health status for a model.
  - `update_model_health()` - Update health status after a request.
  - ... and 5 more methods

### scripts/model_fallback_cli.py


Model Fallback CLI Integration
Provides 'ocl model' command for managing multi-model fallback system.


**Functions:**

- `print_help()` - Print help message.
- `cmd_route(args)` - Handle route command.
- `cmd_health(args)` - Handle health command.
- `cmd_stats(args)` - Handle stats command.
- `cmd_models(args)` - Handle models command.
- `cmd_test(args)` - Handle test command.
- `cmd_cost_optimize(args)` - Handle cost-optimize command.
- `cmd_reset_health(args)` - Handle reset-health command.
- `main()` - Main entry point.

### scripts/model_fallback_health_sync.py


Model Fallback Health Integration
Integrates model fallback system with API Health Monitor (Feature #23).
Automatically updates model health based on API health checks.


**Functions:**

- `get_api_health_status()` - Get current API health from API Health Monitor database.
- `update_model_health_from_api()` - Update model health based on API health status.
- `check_and_sync()` - Check API health and sync to model health.
- `get_unavailable_models()` - Get list of currently unavailable models.
- `generate_routing_report()` - Generate a report on current routing capabilities.

### scripts/model_fallback_wrapper.py


Model Fallback Wrapper - Easy integration for other scripts

Usage:
    from model_fallback_wrapper import route_and_execute
    
    def my_api_call(model_name):
        # Your API call logic here
        return call_llm_api(model_name, prompt)
    
    result, model_used = route_and_execute(
        task_type="summarization",
        call_fn=my_api_call,
        preferred_model="kimi-k2"
    )


**Functions:**

- `route_and_execute(task_type, call_fn, preferred_model, max_retries)` - Route a task to the best model and execute with automatic fallback.
- `get_model_for_task(task_type, preferred, complexity)` - Get the best model for a task without executing.
- `log_usage(model_name, task_type, input_tokens, output_tokens, cost, latency_ms, success, error_type)` - Log model usage for analytics.

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
- Gmail-friendly formatting
- Daily research-based facts
- Always shows cost report


**Functions:**

- `get_research_fact()` - Get a daily fact based on recent research from the past 24 hours
- `ensure_cost_report()` - Ensure we have a cost value, generate if missing
- `send_morning_briefing_with_confirmation()` - Send morning briefing with universal delivery tracking

### scripts/natural_language_query.py


Natural Language Query Interface (NLQI) for OpenClaw System
Feature #33 - Translates plain English queries into system data retrieval

Examples:
- "What's the health of Riley?" → Agent health status
- "Show me yesterday's costs" → Cost analytics
- "Any alerts in the last hour?" → Alert correlation
- "What did Quinn do today?" → Agent activity


**Functions:**

- `main()` - CLI entry point
- `__init__(self, workspace_path: str)`
- `_compile_patterns(self) -> Dict[<ast.Tuple object at 0x7eda70b74c50>]` - Compile regex patterns for query type detection
- `parse_query(self, query: str) -> ParsedQuery` - Parse a natural language query into structured components
- `_extract_filters(self, query: str) -> Dict[<ast.Tuple object at 0x7eda709fb8d0>]` - Extract additional filters from query
- `execute_query(self, parsed: ParsedQuery) -> QueryResult` - Execute a parsed query and return results
- `_handle_agent_health(self, parsed: ParsedQuery) -> QueryResult` - Handle agent health queries
- `_handle_agent_activity(self, parsed: ParsedQuery) -> QueryResult` - Handle agent activity queries
- `_handle_cost_analysis(self, parsed: ParsedQuery) -> QueryResult` - Handle cost analysis queries
- `_handle_alert_status(self, parsed: ParsedQuery) -> QueryResult` - Handle alert status queries
- `_handle_system_status(self, parsed: ParsedQuery) -> QueryResult` - Handle system status queries
- `_handle_task_status(self, parsed: ParsedQuery) -> QueryResult` - Handle task status queries
- `_handle_performance(self, parsed: ParsedQuery) -> QueryResult` - Handle performance queries
- `_handle_incident_status(self, parsed: ParsedQuery) -> QueryResult` - Handle incident status queries
- `_handle_help(self, parsed: ParsedQuery) -> QueryResult` - Handle help queries
- `_handle_unknown(self, parsed: ParsedQuery) -> QueryResult` - Handle unknown queries
- `_get_suggested_queries(self) -> List[str]` - Get list of suggested queries
- `query(self, question: str) -> QueryResult` - Main entry point - process a natural language query

**Classes:**

- `QueryType` - Types of queries the system can handle
- `ParsedQuery` - Represents a parsed natural language query
- `QueryResult` - Result of executing a query
- `NLQueryInterface` - Main interface for natural language queries
  - `__init__()`
  - `_compile_patterns()` - Compile regex patterns for query type detection
  - `parse_query()` - Parse a natural language query into structured components
  - `_extract_filters()` - Extract additional filters from query
  - `execute_query()` - Execute a parsed query and return results
  - ... and 12 more methods

### scripts/network_mesh.py


Self-Healing Network Mesh (Feature #31)
========================================

Core mesh networking infrastructure for the multi-agent system.

Features:
- Automatic node discovery and registration
- Real-time health monitoring with heartbeat protocol
- Dynamic routing around failed nodes
- Self-healing with automatic reconnection attempts
- Network topology visualization
- Fallback agent assignment for failed nodes

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `get_mesh() -> NetworkMesh` - Get the singleton mesh instance
- `reset_mesh()` - Reset the mesh (for testing)
- `is_healthy(self) -> bool` - Check if node is healthy
- `can_route(self) -> bool` - Check if node can accept routing
- `update_health(self, status: NodeStatus)` - Update node health status
- `record_heartbeat(self, response_time_ms: Optional[float])` - Record a successful heartbeat
- `record_missed_heartbeat(self) -> bool` - Record a missed heartbeat, returns True if threshold exceeded
- `record_request(self, success: bool)` - Record a request result
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda72951110>]` - Convert to dictionary
- `from_dict(cls, data: Dict[<ast.Tuple object at 0x7eda72950b90>]) -> 'MeshNode'` - Create from dictionary
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda7296f410>]`
- `from_dict(cls, data: Dict[<ast.Tuple object at 0x7eda7296ee90>]) -> 'Route'`
- `__init__(self)`
- `_init_default_nodes(self)` - Initialize default agent nodes
- `register_node(self, node: MeshNode) -> bool` - Register a new node in the mesh
- `unregister_node(self, node_id: str) -> bool` - Remove a node from the mesh
- `get_node(self, node_id: str) -> Optional[MeshNode]` - Get a node by ID
- `get_healthy_nodes(self, capability: Optional[str]) -> List[MeshNode]` - Get all healthy nodes, optionally filtered by capability
- `get_node_by_capability(self, capability: str, exclude: List[str]) -> Optional[MeshNode]` - Find a healthy node with specific capability
- `record_heartbeat(self, node_id: str, response_time_ms: Optional[float]) -> bool` - Record a heartbeat from a node
- `check_node_health(self, node_id: str) -> NodeStatus` - Check and update node health status
- `_trigger_healing(self, node_id: str)` - Trigger healing actions for a failed node
- `calculate_route(self, source: str, target: str) -> Optional[Route]` - Calculate the best route between two nodes
- `_find_alternative_routes(self, source: str, target: str, max_hops: int) -> List[Route]` - Find alternative routes using BFS
- `update_neighbors(self, node_id: str, neighbors: List[str])` - Update a node's neighbors
- `get_mesh_topology(self) -> Dict[<ast.Tuple object at 0x7eda727f66d0>]` - Get the current mesh topology
- `start_monitoring(self)` - Start background monitoring threads
- `stop_monitoring(self)` - Stop background monitoring
- `_heartbeat_loop(self)` - Background loop for health checking
- `_healing_loop(self)` - Background loop for healing actions
- `_attempt_healing(self)` - Attempt to heal recovering nodes
- `register_callback(self, callback: Callable)` - Register a callback for mesh events
- `_notify_callbacks(self, event: str, data: Any)` - Notify all registered callbacks
- `_save_state(self)` - Save mesh state to disk
- `_load_state(self)` - Load mesh state from disk
- `_log_event(self, event_type: str, data: Dict)` - Log a mesh event

**Classes:**

- `NodeStatus` - Status of a mesh node
- `ConnectionType` - Types of connections between nodes
- `MeshNode` - Represents a node in the mesh network
  - `is_healthy()` - Check if node is healthy
  - `can_route()` - Check if node can accept routing
  - `update_health()` - Update node health status
  - `record_heartbeat()` - Record a successful heartbeat
  - `record_missed_heartbeat()` - Record a missed heartbeat, returns True if threshold exceede
  - ... and 3 more methods
- `Route` - Represents a route between two nodes
  - `to_dict()`
  - `from_dict()`
- `NetworkMesh` - Self-healing network mesh for multi-agent coordination.
  - `__init__()`
  - `_init_default_nodes()` - Initialize default agent nodes
  - `register_node()` - Register a new node in the mesh
  - `unregister_node()` - Remove a node from the mesh
  - `get_node()` - Get a node by ID
  - ... and 19 more methods

### scripts/newsapi_integration.py


NewsAPI Integration Module for Research Scout
Feature #37: Enhanced news coverage


**Functions:**

- `integrate_newsapi(scout)` - Import and use enhanced news scout.

### scripts/nlqi_cli.py


NLQI CLI Integration - Adds 'ask' command to OCL CLI


**Functions:**

- `handle_ask_command(args)` - Handle the 'ask' subcommand for OCL CLI

### scripts/nlqi_email.py


NLQI Email Interface
Allows Thomas to email questions and get responses


**Functions:**

- `main()` - CLI for testing email interface
- `__init__(self)`
- `process_email(self, subject: str, body: str, sender: str) -> dict` - Process an email and generate response
- `_extract_query(self, subject: str, body: str) -> str` - Extract the natural language query from email
- `_format_email_response(self, query: str, result) -> str` - Format query result as email response
- `generate_daily_digest(self) -> str` - Generate a daily digest of system status

**Classes:**

- `NLQIEmailInterface` - Email interface for NLQI
  - `__init__()`
  - `process_email()` - Process an email and generate response
  - `_extract_query()` - Extract the natural language query from email
  - `_format_email_response()` - Format query result as email response
  - `generate_daily_digest()` - Generate a daily digest of system status

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

- `record_agent_performance(agent: str, task_type: str, dimension_scores: Dict[<ast.Tuple object at 0x7eda6f866c50>], **kwargs) -> int` - Quick function to record performance
- `get_agent_trends(agent: str, days: int) -> List[TrendResult]` - Get trends for an agent
- `check_system_health() -> Dict[<ast.Tuple object at 0x7eda6f8751d0>]` - Check overall system health
- `main()` - CLI for performance analytics
- `__new__(cls)`
- `__init__(self)`
- `init_database(self)` - Initialize SQLite database for performance tracking
- `_load_config(self) -> Dict` - Load configuration from file
- `_save_config(self)` - Save configuration to file
- `record_performance(self, agent: str, task_type: str, dimension_scores: Dict[<ast.Tuple object at 0x7eda6f96eb90>], response_time_ms: int, output_tokens: int, metadata: Optional[Dict]) -> int` - Record a performance measurement.
- `_calculate_overall_score(self, dimension_scores: Dict[<ast.Tuple object at 0x7eda6f969e50>]) -> float` - Calculate weighted overall score from dimension scores
- `_check_and_alert(self, agent: str)` - Check trends and create alerts if needed
- `_generate_alerts_from_trends(self, agent: str, trends: List[TrendResult])` - Generate alerts based on trend analysis
- `create_alert(self, agent: str, alert_type: str, severity: str, description: str, trend_data: Optional[Dict], suggested_actions: Optional[<ast.Subscript object at 0x7eda6f98fd50>]) -> int` - Create a performance alert
- `_update_alerts_file(self)` - Update the alerts JSON file for quick access
- `analyze_trends(self, agent: Optional[str], days: int) -> List[TrendResult]` - Analyze performance trends for an agent or all agents.
- `get_agent_summary(self, agent: str, days: int) -> Dict[<ast.Tuple object at 0x7eda6f808f90>]` - Get summary statistics for an agent
- `get_active_alerts(self, agent: Optional[str]) -> List[<ast.Subscript object at 0x7eda6f819010>]` - Get active (unresolved) alerts
- `acknowledge_alert(self, alert_id: int)` - Mark an alert as acknowledged
- `resolve_alert(self, alert_id: int, outcome: str, effectiveness: float)` - Mark an alert as resolved
- `generate_report(self, agent: Optional[str], days: int) -> str` - Generate a comprehensive performance report
- `_format_agent_report(self, summary: Dict) -> str` - Format a single agent's summary as markdown
- `get_dashboard_data(self) -> Dict[<ast.Tuple object at 0x7eda6f85be10>]` - Get data formatted for dashboard display
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
- `scan_heartbeat_logs(self, hours: int) -> Dict[<ast.Tuple object at 0x7eda71e249d0>]` - Scan agent heartbeat logs for the last N hours.
- `_parse_heartbeat_line(self, line: str, cutoff: datetime) -> Optional[Dict]` - Parse a single heartbeat log line
- `analyze_output_quality(self, agent: str, hours: int) -> Dict[<ast.Tuple object at 0x7eda71e219d0>]` - Analyze quality of agent outputs from various sources.
- `_count_recent_outputs(self, agent: str, hours: int) -> int` - Count recent outputs for an agent
- `_get_last_heartbeat_time(self, agent: str) -> Optional[datetime]` - Get the timestamp of the last heartbeat entry
- `collect_and_record(self, hours: int) -> Dict[<ast.Tuple object at 0x7eda71e82250>]` - Main method: collect performance data and record it.
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
- `integrate_with_health_dashboard(self) -> Dict[<ast.Tuple object at 0x7eda70620550>]` - Enrich the agent health dashboard with performance data.
- `_health_status_from_score(self, score: float, alerts: List[Dict]) -> str` - Determine health status from score and alerts
- `record_from_task_completion(self, agent: str, task_type: str, output_file: str, metrics: Dict[<ast.Tuple object at 0x7eda70619310>]) -> int` - Record performance from a completed task.
- `generate_daily_digest_section(self) -> str` - Generate markdown section for daily digest.
- `check_and_notify_degradation(self) -> List[<ast.Subscript object at 0x7eda70665790>]` - Check for performance degradation and return notifications.
- `_get_intervention_suggestions(self, agent: str, declining_dims: List) -> List[str]` - Get intervention suggestions based on declining dimensions
- `create_performance_based_task(self) -> Optional[<ast.Subscript object at 0x7eda70675a10>]` - Create a proactive task based on performance analysis.
- `export_for_coordination(self) -> Dict[<ast.Tuple object at 0x7eda7067e390>]` - Export performance data for cross-agent coordination.

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
- `get_predictive_stats() -> Dict[<ast.Tuple object at 0x7eda72035a10>]` - Get predictive automation statistics
- `main()` - CLI for predictive automation
- `validate(cls, content: str) -> Tuple[<ast.Tuple object at 0x7eda72130850>]` - Validate content matches Thomas's style.
- `__new__(cls)`
- `__init__(self)`
- `_log(self, message: str, level: str)` - Log predictive automation activity
- `_load_patterns(self) -> List[Dict]` - Load detected patterns
- `_load_predictions(self) -> List[Dict]` - Load active predictions
- `_load_history(self) -> List[Dict]` - Load task history
- `_save_patterns(self)` - Save patterns to file
- `_save_predictions(self)` - Save predictions to file
- `_save_history(self)` - Save history to file
- `_fetch_external_data(self) -> Dict[<ast.Tuple object at 0x7eda72191b90>]` - Fetch real external data for pattern detection
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
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda720342d0>]` - Get predictive automation statistics

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
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda725e4a90>]`
- `from_dict(cls, data: Dict[<ast.Tuple object at 0x7eda725e4510>]) -> 'FeedbackEntry'`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda725d6490>]`
- `__init__(self)`
- `_load_data(self)` - Load existing feedback and accuracy data
- `_save_data(self)` - Save feedback and accuracy data
- `record_feedback(self, task_id: str, feedback_type: FeedbackType, pattern_type: str, confidence: float, notes: str) -> bool` - Record feedback from Thomas about a predictive task
- `_update_accuracy(self, pattern_type: str)` - Update accuracy metrics for a pattern type
- `get_recommended_confidence(self, pattern_type: str) -> float` - Get recommended confidence threshold for a pattern type
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda725d8fd0>]` - Get learning loop statistics
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

### scripts/predictive_maintenance.py


Predictive Maintenance Scheduler - Feature #32

Analyzes health trends from the network mesh to predict failures before they occur,
schedules maintenance during optimal downtime windows, and auto-approves low-risk maintenance.

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `main()` - CLI entry point.
- `__init__(self)`
- `_get_state_file(self)`
- `_get_predictions_file(self)`
- `_get_schedule_file(self)`
- `_get_history_file(self)`
- `load_state(self)` - Load persistent state.
- `save_state(self)` - Save persistent state.
- `collect_health_metrics(self) -> Dict[<ast.Tuple object at 0x7eda72c96e10>]` - Collect current health metrics from network mesh.
- `analyze_trends(self, node_id: str, metrics: List[HealthMetric]) -> Dict[<ast.Tuple object at 0x7eda72c68490>]` - Analyze health trends to detect degradation patterns.
- `predict_failures(self) -> List[FailurePrediction]` - Generate failure predictions based on trend analysis.
- `get_optimal_maintenance_window(self, node_id: str, maintenance_type: str, risk_level: str, max_lookahead_hours: int) -> Tuple[<ast.Tuple object at 0x7eda72af1690>]` - Calculate optimal maintenance window based on activity patterns.
- `calculate_impact_score(self, node_id: str, window_start: datetime) -> float` - Calculate business impact score for maintenance (0-1, higher = more impact).
- `should_auto_approve(self, risk_level: str, impact_score: float) -> bool` - Determine if maintenance can be auto-approved.
- `schedule_maintenance(self, predictions: List[FailurePrediction]) -> List[MaintenanceWindow]` - Create maintenance schedule from predictions.
- `execute_maintenance(self, window: MaintenanceWindow) -> bool` - Execute a scheduled maintenance task.
- `check_and_execute_due_maintenance(self) -> List[MaintenanceWindow]` - Check for maintenance that is due and execute it.
- `generate_report(self) -> Dict[<ast.Tuple object at 0x7eda72b47f50>]` - Generate comprehensive maintenance report.
- `run_cycle(self)` - Execute one full maintenance cycle.
- `start_monitoring(self, interval_seconds: int)` - Start continuous monitoring in background thread.
- `stop_monitoring(self)` - Stop continuous monitoring.
- `monitor_loop()`

**Classes:**

- `RiskLevel`
- `MaintenanceType`
- `MaintenanceStatus`
- `HealthMetric`
- `FailurePrediction`
- `MaintenanceWindow`
- `PredictiveMaintenanceScheduler` - Main scheduler class for predictive maintenance.
  - `__init__()`
  - `_get_state_file()`
  - `_get_predictions_file()`
  - `_get_schedule_file()`
  - `_get_history_file()`
  - ... and 15 more methods

### scripts/priority_dashboard.py


Priority Dashboard Generator
Generates HTML dashboard for task prioritization system

Author: Zak (Feature #13)
Version: 1.0.0


**Functions:**

- `generate_dashboard()` - Generate HTML dashboard

### scripts/priority_heartbeat.py


Task Prioritization Heartbeat
Processes task queue and creates tasks from various sources
Runs every 5 minutes via cron

Author: Zak (Feature #13)
Version: 1.0.0


**Functions:**

- `log(message: str)` - Write to log file
- `check_emails_for_tasks(system: TaskPrioritizationSystem)` - Check agent emails and create tasks for important messages
- `check_alerts_for_tasks(system: TaskPrioritizationSystem)` - Check for system alerts and create tasks
- `check_calendar_for_tasks(system: TaskPrioritizationSystem)` - Check for upcoming calendar events that need preparation
- `run_heartbeat()` - Main heartbeat function

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

### scripts/research_paper_interface.py


Research Paper Request Interface
Thomas can use this to request collaborative paper writing


**Functions:**

- `demo_paper_request()` - Demonstrate the paper request system
- `__init__(self)`
- `create_paper(self, title: str, paper_type: str, topic: str, research_question: str, target_journal: str, word_count: int, deadline_days: int) -> Dict` - Create a new research paper project
- `initiate_workflow(self, paper: Dict) -> List[str]` - Initiate the collaborative workflow for a paper
- `check_status(self, paper_id: str) -> Dict` - Check the status of a paper project

**Classes:**

- `ResearchPaperRequest` - Handle research paper creation requests
  - `__init__()`
  - `create_paper()` - Create a new research paper project
  - `initiate_workflow()` - Initiate the collaborative workflow for a paper
  - `check_status()` - Check the status of a paper project

### scripts/research_scout.py


Autonomous Research Scout (Feature #36)
Proactively discovers, summarizes, and queues relevant research for Thomas.

Focus areas:
- Academic integrity
- GenAI in education
- Tech ethics
- Computer science education

Author: Zak Team
Created: 2026-02-07


**Functions:**

- `main()` - CLI interface for Research Scout.
- `to_dict(self) -> Dict`
- `from_dict(cls, data: Dict) -> 'ResearchItem'`
- `generate_id(self) -> str` - Generate unique ID from URL.
- `__init__(self)`
- `_ensure_directories(self)` - Create necessary directories.
- `_ensure_database(self)` - Initialize SQLite database.
- `_load_config(self) -> Dict` - Load or create configuration.
- `_log(self, message: str)` - Log message to file.
- `_fetch_arxiv(self, query: str, max_results: int) -> List[Dict]` - Fetch papers from arXiv API.
- `_fetch_news_api(self, query: str) -> List[Dict]` - Fetch news from NewsAPI (requires API key).
- `_calculate_relevance(self, title: str, summary: str, topics: List[str]) -> tuple` - Calculate relevance score and identify matching topics.
- `_determine_priority(self, relevance: float, source: str) -> str` - Determine item priority based on relevance and source.
- `_generate_ai_summary(self, title: str, text: str) -> str` - Generate concise summary using available AI tools.
- `discover(self) -> List[ResearchItem]` - Run discovery across all configured sources.
- `add_to_queue(self, items: List[ResearchItem]) -> int` - Add discovered items to the review queue.
- `get_queue(self, priority: Optional[str], reviewed: bool, limit: int) -> List[ResearchItem]` - Get items from the review queue.
- `mark_reviewed(self, item_id: str, notes: Optional[str])` - Mark an item as reviewed.
- `mark_shared(self, item_id: str)` - Mark an item as shared.
- `generate_digest(self, hours: int) -> str` - Generate an email digest of recent discoveries.
- `get_stats(self) -> Dict` - Get queue statistics.

**Classes:**

- `ResearchItem` - A research item discovered by the scout.
  - `to_dict()`
  - `from_dict()`
  - `generate_id()` - Generate unique ID from URL.
- `ResearchScout` - Autonomous Research Scout for discovering and curating relevant research.
  - `__init__()`
  - `_ensure_directories()` - Create necessary directories.
  - `_ensure_database()` - Initialize SQLite database.
  - `_load_config()` - Load or create configuration.
  - `_log()` - Log message to file.
  - ... and 12 more methods

### scripts/research_scout_llm.py


Research Scout LLM Enhancement (Feature #38)
Adds LLM-powered summarization and enhanced relevance scoring to Research Scout.

Features:
- LLM-based paper summarization with key insights
- Semantic relevance scoring
- Full-text content extraction and analysis
- Key finding extraction
- Research impact assessment

Author: Zak Team
Created: 2026-02-07


**Functions:**

- `main()` - CLI interface for LLM Enhancer.
- `__init__(self)`
- `_log(self, message: str)` - Log message to file.
- `_ensure_enhanced_tables(self)` - Add enhanced analysis tables to database.
- `_check_llm_availability(self) -> bool` - Check if LLM API is available.
- `_determine_model(self) -> str` - Determine which LLM model to use.
- `fetch_full_text(self, url: str, item_id: str) -> Optional[str]` - Fetch full text content from URL.
- `_extract_text_from_html(self, html_content: str) -> str` - Extract readable text from HTML.
- `_clean_text(self, text: str) -> str` - Clean extracted text.
- `calculate_semantic_relevance(self, title: str, summary: str, full_text: Optional[str]) -> Tuple[<ast.Tuple object at 0x7eda6ece9b10>]` - Calculate semantic relevance score based on Thomas's interests.
- `_call_llm(self, prompt: str, max_tokens: int) -> Optional[str]` - Call LLM API with retry logic.
- `_call_anthropic(self, prompt: str, max_tokens: int) -> Optional[str]` - Call Anthropic Claude API.
- `_call_openai(self, prompt: str, max_tokens: int) -> Optional[str]` - Call OpenAI API.
- `analyze_with_llm(self, item: ResearchItem, full_text: Optional[str]) -> Optional[LLMResearchAnalysis]` - Perform LLM analysis on a research item.
- `enhance_item(self, item: ResearchItem, fetch_full_text: bool) -> bool` - Enhance a single research item with LLM analysis and semantic scoring.
- `enhance_pending_items(self, limit: int, fetch_full_text: bool) -> Dict` - Enhance all pending (non-llm_enhanced) items.
- `get_enhanced_item(self, item_id: str) -> Optional[Dict]` - Get an item with all its enhanced analysis.
- `generate_enhanced_digest(self, hours: int) -> str` - Generate an enhanced digest with LLM insights.
- `get_enhancement_stats(self) -> Dict` - Get statistics about LLM enhancement.

**Classes:**

- `LLMResearchAnalysis` - Enhanced research analysis with LLM insights.
- `LLMResearchEnhancer` - Enhances research items with LLM-powered analysis and summarization.
  - `__init__()`
  - `_log()` - Log message to file.
  - `_ensure_enhanced_tables()` - Add enhanced analysis tables to database.
  - `_check_llm_availability()` - Check if LLM API is available.
  - `_determine_model()` - Determine which LLM model to use.
  - ... and 13 more methods

### scripts/research_scout_newsapi.py


Research Scout - Enhanced NewsAPI Integration (Feature #37)
Broadens coverage with tech and education news sources.

Enhancements:
- Domain-specific news sources (techcrunch, wired, theverge, etc.)
- Education-focused outlets (chronicle, insidehighered, etc.)
- Category-based filtering
- Batch query optimization
- Source credibility scoring


**Functions:**

- `main()` - Test enhanced NewsAPI integration.
- `__init__(self, scout: ResearchScout)`
- `_get_api_key(self) -> Optional[str]` - Get NewsAPI key from environment or vault.
- `is_available(self) -> bool` - Check if NewsAPI is available.
- `_make_request(self, params: Dict) -> Dict` - Make request to NewsAPI.
- `fetch_by_category(self, category: str, days: int, limit: int) -> List[NewsArticle]` - Fetch news for a specific category with multiple queries.
- `fetch_by_domain(self, domains: List[str], query: str, days: int, limit: int) -> List[NewsArticle]` - Fetch news from specific domains.
- `_calculate_credibility(self, domain: str, source_name: str) -> float` - Calculate credibility score based on source.
- `discover_all(self) -> List[ResearchItem]` - Run full news discovery across all categories and domains.
- `_convert_to_research_items(self, articles: List[NewsArticle]) -> List[ResearchItem]` - Convert news articles to research items.
- `get_stats(self) -> Dict` - Get NewsAPI usage stats.

**Classes:**

- `NewsArticle` - News article from NewsAPI.
- `EnhancedNewsScout` - Enhanced NewsAPI integration for broader coverage.
  - `__init__()`
  - `_get_api_key()` - Get NewsAPI key from environment or vault.
  - `is_available()` - Check if NewsAPI is available.
  - `_make_request()` - Make request to NewsAPI.
  - `fetch_by_category()` - Fetch news for a specific category with multiple queries.
  - ... and 5 more methods

### scripts/reset_daily_email_count.py


Daily Email Count Reset
Resets the daily email counter at midnight UTC
Also switches back from Telegram to email notifications


**Functions:**

- `main()` - Reset daily email count

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
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda70ca60d0>]`
- `from_entry(cls, entry: Dict, feed_config: Dict, feed_name: str) -> 'FeedItem'` - Create FeedItem from feedparser entry
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda70c8ee50>]`
- `__init__(self)`
- `_load_config(self)` - Load feed configuration
- `_save_config(self)` - Save feed configuration
- `_load_state(self)` - Load monitoring state
- `_save_state(self)` - Save monitoring state
- `_load_items(self)` - Load detected items
- `_save_items(self)` - Save detected items
- `fetch_feed(self, feed_name: str, feed_config: Dict) -> List[FeedItem]` - Fetch and parse a single RSS feed
- `check_all_feeds(self) -> List[FeedItem]` - Check all configured feeds
- `categorize_items(self, items: List[FeedItem]) -> Dict[<ast.Tuple object at 0x7eda70af8410>]` - Categorize items by priority and category
- `trigger_workflows(self, items: List[FeedItem]) -> List[str]` - Trigger cross-agent workflows for relevant items
- `_create_content_workflow(self, item: FeedItem) -> str` - Create a content workflow for a detected item
- `generate_report(self) -> str` - Generate monitoring report
- `get_statistics(self) -> Dict[<ast.Tuple object at 0x7eda70b38c90>]` - Get monitoring statistics
- `run(self, auto_trigger: bool) -> Dict[<ast.Tuple object at 0x7eda70b45590>]` - Run full monitoring cycle

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

### scripts/self_healing_monitor.py


Self-Healing Monitor (Feature #31)
==================================

Continuous monitoring with automatic healing actions.

Features:
- Real-time health monitoring of all agents
- Automatic detection of failures
- Self-healing actions without human intervention
- Dynamic capability reassignment
- Health trend analysis
- Proactive maintenance alerts

Author: Autonomous Development Loop
Version: 1.0.0


**Functions:**

- `get_monitor() -> SelfHealingMonitor` - Get the singleton monitor instance
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda71496310>]`
- `from_dict(cls, data: Dict[<ast.Tuple object at 0x7eda71495d90>]) -> 'HealingAction'`
- `to_dict(self) -> Dict[<ast.Tuple object at 0x7eda71492190>]`
- `__init__(self)`
- `_on_mesh_event(self, event: str, data: Any)` - Handle mesh events
- `_on_node_failed(self, node: MeshNode)` - Handle node failure
- `_on_node_recovered(self, node: MeshNode)` - Handle node recovery
- `_on_healing_initiated(self, node: MeshNode)` - Handle healing initiation
- `_determine_healing_action(self, node: MeshNode) -> Optional[HealingAction]` - Determine the appropriate healing action for a node
- `_count_recent_failures(self, node_id: str, hours: int) -> int` - Count recent failures for a node
- `_queue_action(self, action: HealingAction)` - Queue a healing action
- `_execute_action(self, action: HealingAction) -> bool` - Execute a healing action
- `_action_reroute(self, action: HealingAction) -> bool` - Reroute traffic to alternate nodes
- `_action_restart(self, action: HealingAction) -> bool` - Attempt to restart a service
- `_action_reconnect(self, action: HealingAction) -> bool` - Attempt to reconnect to a node
- `_action_scale_up(self, action: HealingAction) -> bool` - Scale up backup instances
- `_action_alert(self, action: HealingAction) -> bool` - Send alert for human intervention
- `_action_maintenance(self, action: HealingAction) -> bool` - Schedule maintenance window
- `collect_metrics(self, node_id: str) -> Optional[HealthMetrics]` - Collect health metrics for a node
- `start_monitoring(self)` - Start the monitoring loop
- `stop_monitoring(self)` - Stop the monitoring loop
- `_monitor_loop(self)` - Main monitoring loop
- `_process_healing_queue(self)` - Process pending healing actions
- `get_node_health_report(self, node_id: str) -> Dict[<ast.Tuple object at 0x7eda71318590>]` - Get detailed health report for a node
- `generate_health_report(self) -> str` - Generate comprehensive health report
- `_save_state(self)` - Save monitor state
- `_load_state(self)` - Load monitor state
- `_log_event(self, event_type: str, data: Dict)` - Log an event

**Classes:**

- `HealingActionType` - Types of healing actions
- `HealingAction` - A healing action taken on behalf of a node
  - `to_dict()`
  - `from_dict()`
- `HealthMetrics` - Health metrics for a node over time
  - `to_dict()`
- `SelfHealingMonitor` - Self-healing monitor for the agent network.
  - `__init__()`
  - `_on_mesh_event()` - Handle mesh events
  - `_on_node_failed()` - Handle node failure
  - `_on_node_recovered()` - Handle node recovery
  - `_on_healing_initiated()` - Handle healing initiation
  - ... and 20 more methods

### scripts/send_alert.py


Alert Notification System for Health Checks
Sends alerts via universal email system when issues are detected


**Functions:**

- `should_send_alert()` - Check if we should send alert (cooldown: 1 hour)
- `mark_alert_sent()` - Mark that we sent an alert
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

### scripts/send_feature12_email.py


Feature #12 Deployment Email
Sends deployment notification to Thomas


**Functions:**

- `send_deployment_email()` - Send Feature #12 deployment notification to Thomas

### scripts/send_feature13_email.py


Feature #13 Deployment Notification
Sends deployment email to Thomas via SMTP


**Functions:**

- `send_feature13_email()` - Send Feature #13 deployment notification to Thomas
- `main()`

### scripts/send_feature20_email.py

Send email notification for Feature #20 completion

### scripts/send_feature22_email.py


Send Feature #22 completion email to Thomas


**Functions:**

- `main()`

### scripts/send_feature23_email.py


Send Feature #23 completion email to Thomas.


**Functions:**

- `main()`

### scripts/send_feature29_email.py


Send Feature #29 completion email to Thomas
Usage: python3 send_feature29_email.py


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str) -> bool` - Send email using AgentMail API.
- `main()`

### scripts/send_feature30_email.py


Send Feature #30 Celebration Email to Thomas
Uses AgentMail API for delivery


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str, html_body: str) -> bool` - Send email using AgentMail API.
- `main()`

### scripts/send_feature39_email.py


Send Feature #39 completion email to Thomas


**Functions:**

- `send_email()`

### scripts/send_feature40_email.py


Feature #40 Email Sender
Send celebration email to Thomas


### scripts/send_feature43_email.py


Feature #43 Completion Email
GitHub Actions Integration - DEPLOYED


### scripts/send_feature5_notification.py


Feature #5 Deployment Notification
Sends deployment notification to Thomas


**Functions:**

- `send_deployment_email()` - Send deployment notification

### scripts/send_feature_deployment_emails.py


Feature Deployment Email Recovery System
Sends all missing feature deployment emails via SMTP

This script:
1. Scans for all feature deployment notifications in memory files
2. Finds unsent email drafts (FEATURE_*_EMAIL.txt files)
3. Sends them via SMTP with delivery confirmation
4. Prevents duplicates

Usage:
    python3 send_feature_deployment_emails.py           # Check and send pending
    python3 send_feature_deployment_emails.py --check   # Just check status
    python3 send_feature_deployment_emails.py --resend  # Force resend all


**Functions:**

- `log(message)` - Log with timestamp
- `load_tracking()` - Load email tracking data
- `save_tracking(tracking)` - Save email tracking data
- `send_smtp_email(subject, body, html_body)` - Send email via SMTP with error handling
- `find_feature_deployments()` - Find all feature deployments from memory files
- `find_draft_files()` - Find all email draft files
- `parse_draft_file(draft_file)` - Parse an email draft file and extract subject/body
- `send_feature_email(feature_num, title, context, tracking, is_draft)` - Send a feature deployment email
- `main()`

### scripts/send_incident_escalation.py


Send Incident Escalation Email to Thomas
Notifies about incidents requiring human attention


**Functions:**

- `generate_escalation_email()` - Generate and send escalation email if there are escalated incidents
- `main()` - Main entry point

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

### scripts/smart_alert_correlator.py


Smart Alert Correlation System - Feature #14

Correlates alerts across all subagents to:
- Detect systemic issues
- Group related alerts
- Reduce alert fatigue
- Identify patterns

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `to_dict(self) -> dict`
- `to_dict(self) -> dict`
- `__init__(self, db_path: str)`
- `init_db(self)` - Initialize database schema
- `save_alert(self, alert: Alert)` - Save alert to database
- `save_cluster(self, cluster: AlertCluster)` - Save cluster to database
- `get_recent_alerts(self, hours: int) -> List[Alert]` - Get alerts from last N hours
- `get_active_clusters(self) -> List[AlertCluster]` - Get non-acknowledged clusters
- `acknowledge_cluster(self, cluster_id: str)` - Mark cluster as acknowledged
- `get_stats(self) -> dict` - Get correlation system statistics
- `__init__(self)`
- `generate_alert_id(self, timestamp: datetime, agent: str, message: str) -> str` - Generate unique alert ID
- `generate_correlation_key(self, alerts: List[Alert], pattern_type: str) -> str` - Generate correlation key for a group of alerts
- `parse_log_line(self, line: str, agent: str, source_file: str) -> Optional[Alert]` - Parse a log line into an alert
- `collect_alerts(self, hours: int) -> List[Alert]` - Collect alerts from all agent log files
- `correlate_alerts(self, alerts: List[Alert]) -> List[AlertCluster]` - Correlate alerts into clusters
- `_generate_description(self, alerts: List[Alert], pattern_name: str) -> str` - Generate human-readable description for a cluster
- `_generate_recommendation(self, pattern_name: str, agents: Set[str]) -> str` - Generate recommendation for addressing the cluster
- `generate_summary(self) -> dict` - Generate correlation summary report
- `_generate_insights(self, clusters: List[AlertCluster], alerts: List[Alert]) -> List[str]` - Generate intelligent insights from correlated data
- `run(self) -> dict` - Run full correlation cycle

**Classes:**

- `Alert` - Represents a single alert
  - `to_dict()`
- `AlertCluster` - A group of correlated alerts
  - `to_dict()`
- `AlertDatabase` - SQLite backend for alert storage
  - `__init__()`
  - `init_db()` - Initialize database schema
  - `save_alert()` - Save alert to database
  - `save_cluster()` - Save cluster to database
  - `get_recent_alerts()` - Get alerts from last N hours
  - ... and 3 more methods
- `AlertCorrelator` - Main alert correlation engine
  - `__init__()`
  - `generate_alert_id()` - Generate unique alert ID
  - `generate_correlation_key()` - Generate correlation key for a group of alerts
  - `parse_log_line()` - Parse a log line into an alert
  - `collect_alerts()` - Collect alerts from all agent log files
  - ... and 6 more methods

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
- `_load_agent_status(self) -> Dict[<ast.Tuple object at 0x7eda702b5a50>]` - Load status for all agents from daily logs
- `_calculate_health_score(self, name: str, outputs: int, errors: int) -> float` - Calculate agent health score (0-1)
- `_check_email_backlog(self) -> int` - Check zak inbox for unread/important emails
- `_load_recent_errors(self) -> List[str]` - Load recent errors from alert log
- `_analyze_token_trend(self) -> str` - Analyze token usage trend from analytics
- `_get_last_user_interaction(self) -> Optional[datetime]` - Get timestamp of last user message
- `should_run_agent_check(self, agent_name: str) -> Tuple[<ast.Tuple object at 0x7eda700e07d0>]` - Decide if we should actively check an agent's status.
- `should_alert_thomas(self, finding: str, severity: str) -> Tuple[<ast.Tuple object at 0x7eda700d9750>]` - Decide if an alert should be sent to Thomas.
- `_check_recent_alerts(self, finding: str) -> bool` - Check if similar alert was sent recently
- `adjust_heartbeat_interval(self, agent_name: str, base_interval: int) -> int` - Dynamically adjust heartbeat interval based on agent health.
- `get_task_priority(self, task_name: str) -> Tuple[<ast.Tuple object at 0x7eda7010ce90>]` - Get priority for a task (1-10, 10 = highest).
- `generate_daily_improvements(self) -> List[<ast.Subscript object at 0x7eda7011b490>]` - Generate 3 workflow improvement suggestions based on current context.
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

### scripts/smart_task_scheduler.py


Smart Task Scheduler - Feature #65

Intelligently schedules tasks based on:
- Priority levels
- Resource availability
- Historical performance
- Deadline constraints

Author: Zak
Version: 1.0.0


**Functions:**

- `__init__(self)`
- `add_task(self, name, priority, estimated_duration, deadline)` - Add a task to the queue
- `optimize_schedule(self)` - Optimize task ordering
- `run(self)` - Run the scheduler

**Classes:**

- `SmartScheduler` - Intelligent task scheduling
  - `__init__()`
  - `add_task()` - Add a task to the queue
  - `optimize_schedule()` - Optimize task ordering
  - `run()` - Run the scheduler

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

### scripts/system_dependency_mapper.py


System Dependency Mapper - Feature #19

Maps all feature dependencies across the codebase:
- Scans Python/JavaScript files for imports
- Identifies feature-to-feature dependencies
- Generates visual dependency maps
- Provides impact analysis for changes
- Creates interactive HTML dashboard

Author: Autonomous Dev Loop
Version: 1.0.0


**Functions:**

- `main()` - Main entry point.
- `__init__(self, workspace_path: str)`
- `scan_files(self) -> None` - Scan all Python and JavaScript files in the workspace.
- `categorize_file(self, filepath: Path) -> Optional[str]` - Categorize a file into a feature.
- `extract_python_imports(self, filepath: Path) -> List[str]` - Extract imports from a Python file using AST.
- `extract_js_imports(self, filepath: Path) -> List[str]` - Extract imports from a JavaScript/TypeScript file.
- `analyze_dependencies(self) -> None` - Analyze dependencies across all files.
- `build_dependency_graph(self) -> Dict` - Build the complete dependency graph.
- `calculate_impact_analysis(self, graph: Dict) -> Dict[<ast.Tuple object at 0x7eda72d009d0>]` - Calculate impact analysis for each feature.
- `generate_mermaid_diagram(self, graph: Dict) -> str` - Generate a Mermaid flowchart diagram.
- `generate_html_dashboard(self, graph: Dict, impact: Dict) -> str` - Generate an interactive HTML dashboard.
- `generate_markdown_report(self, graph: Dict, impact: Dict) -> str` - Generate a Markdown report.
- `run(self, output_dir: str) -> Dict` - Run the complete dependency mapping process.

**Classes:**

- `DependencyMapper` - Maps dependencies across the OpenClaw workspace.
  - `__init__()`
  - `scan_files()` - Scan all Python and JavaScript files in the workspace.
  - `categorize_file()` - Categorize a file into a feature.
  - `extract_python_imports()` - Extract imports from a Python file using AST.
  - `extract_js_imports()` - Extract imports from a JavaScript/TypeScript file.
  - ... and 7 more methods

### scripts/system_health_predictor.py


System Health Predictor - Feature #21

Predicts system failures before they happen using:
- Time series analysis of health metrics
- Pattern recognition in error logs
- Resource utilization forecasting
- Anomaly detection

Author: Zak (Subagent)
Version: 1.0.0


**Functions:**

- `main()` - CLI interface
- `to_dict(self) -> dict`
- `to_dict(self) -> dict`
- `to_dict(self) -> dict`
- `__init__(self, db_path: str)`
- `init_db(self)` - Initialize database schema
- `store_metric(self, metric: HealthMetric) -> int` - Store a health metric
- `get_metrics(self, component: str, metric_type: str, hours: int) -> List[HealthMetric]` - Get metrics for a component and type
- `store_prediction(self, prediction: Prediction)` - Store a prediction
- `get_predictions(self, component: str, active_only: bool) -> List[Prediction]` - Get predictions, optionally filtered
- `store_anomaly(self, anomaly: Anomaly)` - Store an anomaly
- `get_recent_anomalies(self, hours: int) -> List[Anomaly]` - Get recent anomalies
- `calculate_z_score(value: float, mean: float, std_dev: float) -> float` - Calculate Z-score for anomaly detection
- `detect_trend(values: List[float]) -> Tuple[<ast.Tuple object at 0x7eda6f459090>]` - Detect trend direction and strength
- `calculate_failure_probability(trend: str, trend_strength: float, current_value: float, threshold: float, historical_data: List[float]) -> float` - Calculate probability of failure based on trends
- `__init__(self)`
- `collect_metrics(self) -> List[HealthMetric]` - Collect current health metrics from all sources
- `_collect_alert_metrics(self, timestamp: datetime) -> List[HealthMetric]` - Collect metrics from alert correlation system
- `_collect_performance_metrics(self, timestamp: datetime) -> List[HealthMetric]` - Collect metrics from performance analytics
- `_collect_cost_metrics(self, timestamp: datetime) -> List[HealthMetric]` - Collect cost optimization metrics
- `_collect_subagent_metrics(self, timestamp: datetime) -> List[HealthMetric]` - Collect metrics from subagent log files
- `_collect_system_metrics(self, timestamp: datetime) -> List[HealthMetric]` - Collect system-level metrics
- `detect_anomalies(self) -> List[Anomaly]` - Detect anomalies in recent metrics
- `generate_predictions(self) -> List[Prediction]` - Generate failure predictions based on metrics and anomalies
- `_predict_for_component(self, component: str, timestamp: datetime) -> Optional[Prediction]` - Generate predictions for a specific component
- `_predict_resource_issues(self, timestamp: datetime) -> Optional[Prediction]` - Predict system resource issues
- `update_prediction_accuracy(self)` - Update accuracy of past predictions based on outcomes
- `get_health_summary(self) -> Dict` - Get comprehensive health summary
- `run_health_check(self) -> Dict` - Run complete health prediction cycle

**Classes:**

- `HealthMetric` - A single health measurement
  - `to_dict()`
- `Prediction` - A failure prediction
  - `to_dict()`
- `Anomaly` - Detected anomaly in metrics
  - `to_dict()`
- `HealthPredictorDatabase` - SQLite backend for health prediction data
  - `__init__()`
  - `init_db()` - Initialize database schema
  - `store_metric()` - Store a health metric
  - `get_metrics()` - Get metrics for a component and type
  - `store_prediction()` - Store a prediction
  - ... and 3 more methods
- `StatisticalAnalyzer` - Statistical analysis for prediction
  - `calculate_z_score()` - Calculate Z-score for anomaly detection
  - `detect_trend()` - Detect trend direction and strength
  - `calculate_failure_probability()` - Calculate probability of failure based on trends
- `SystemHealthPredictor` - Main health prediction engine
  - `__init__()`
  - `collect_metrics()` - Collect current health metrics from all sources
  - `_collect_alert_metrics()` - Collect metrics from alert correlation system
  - `_collect_performance_metrics()` - Collect metrics from performance analytics
  - `_collect_cost_metrics()` - Collect cost optimization metrics
  - ... and 9 more methods

### scripts/system_wide_dashboard.py


System Wide Dashboard Generator
Aggregates real-time metrics from all 40 features into a unified view.


**Functions:**

- `query_sqlite(db_path: str, query: str) -> List[<ast.Subscript object at 0x7eda70f9be90>]` - Execute SQLite query and return results.
- `get_db_stats(db_name: str) -> Dict[<ast.Tuple object at 0x7eda70e02d10>]` - Get statistics from a database file.
- `get_api_health_stats() -> Dict[<ast.Tuple object at 0x7eda70dddd50>]` - Get API health statistics.
- `get_incident_stats() -> Dict[<ast.Tuple object at 0x7eda70dd5b50>]` - Get incident statistics.
- `get_feature_retirement_stats() -> Dict[<ast.Tuple object at 0x7eda70e0e110>]` - Get feature retirement statistics.
- `get_performance_stats() -> Dict[<ast.Tuple object at 0x7eda70e15350>]` - Get performance benchmark statistics.
- `get_research_scout_stats() -> Dict[<ast.Tuple object at 0x7eda70e1c690>]` - Get research scout statistics.
- `get_model_fallback_stats() -> Dict[<ast.Tuple object at 0x7eda70e2c610>]` - Get model fallback statistics.
- `get_config_drift_stats() -> Dict[<ast.Tuple object at 0x7eda70e2f810>]` - Get configuration drift statistics.
- `get_task_prioritization_stats() -> Dict[<ast.Tuple object at 0x7eda70e36a50>]` - Get task prioritization statistics.
- `collect_all_metrics() -> Dict[<ast.Tuple object at 0x7eda70e3c6d0>]` - Collect metrics from all data sources.
- `generate_dashboard_html(metrics: Dict[<ast.Tuple object at 0x7eda70e3cbd0>]) -> str` - Generate the unified dashboard HTML.
- `main()` - Main entry point.
- `update_main_index()` - Update the main dashboard index to include the new dashboard.

### scripts/task_prioritization.py


Agent Task Prioritization System v1.0.0
AI-powered urgency detection and deadline-aware task queue management

Features:
- Multi-factor priority scoring (urgency, impact, deadline, agent capacity)
- AI-powered urgency detection from task descriptions
- Automatic task queue management
- Deadline-aware scheduling with escalation
- Cross-agent task balancing
- Alert correlation to reduce noise

Author: Zak (Feature #13)
Version: 1.0.0


**Functions:**

- `main()` - CLI interface for the prioritization system
- `__init__(self)`
- `detect_urgency(self, title: str, description: str, source: str) -> Tuple[<ast.Tuple object at 0x7eda6e127110>]` - Analyze task and return priority level, factor scores, and detected deadline.
- `_extract_deadline(self, title: str, description: str) -> Optional[datetime]` - Extract deadline from text using pattern matching
- `__init__(self)`
- `_init_database(self)` - Initialize SQLite database
- `_load_correlations(self)` - Load alert correlations from file
- `_save_correlations(self)` - Save alert correlations to file
- `_generate_task_hash(self, title: str, description: str, source: str) -> str` - Generate unique hash for task deduplication
- `add_task(self, title: str, description: str, source: str, source_id: Optional[str], agent: Optional[str], deadline: Optional[datetime], metadata: Optional[<ast.Subscript object at 0x7eda6e0db550>]) -> Task` - Add a new task to the prioritization queue.
- `_calculate_priority_score(self, priority: PriorityLevel, factors: Dict[<ast.Tuple object at 0x7eda6e161ed0>], deadline: Optional[datetime], agent: Optional[str]) -> float` - Calculate final priority score (0-100)
- `_detect_correlation(self, title: str, description: str, source: str) -> Optional[str]` - Detect if task correlates with existing alert patterns
- `get_task_by_hash(self, task_hash: str) -> Optional[Task]` - Retrieve task by its hash
- `_row_to_task(self, row) -> Task` - Convert database row to Task object
- `get_pending_tasks(self, agent: Optional[str], limit: int) -> List[Task]` - Get pending tasks sorted by priority
- `get_agent_capacity(self, agent: str) -> AgentCapacity` - Get current capacity status for an agent
- `auto_assign_task(self, task: Task) -> Optional[str]` - Automatically assign task to best available agent.
- `assign_task(self, task_id: int, agent: str) -> bool` - Assign a task to an agent
- `complete_task(self, task_id: int, result: Optional[Dict]) -> bool` - Mark a task as completed
- `escalate_overdue_tasks(self) -> List[Task]` - Find and escalate tasks that are approaching or past deadline
- `get_queue_summary(self) -> Dict[<ast.Tuple object at 0x7eda6dfe2b90>]` - Get summary statistics of the task queue
- `process_queue(self) -> Dict[<ast.Tuple object at 0x7eda6dfea510>]` - Main queue processing function.
- `create_correlation_group(self, pattern: str, tasks: List[str]) -> str` - Create a new correlation group for related alerts
- `suppress_correlation(self, group_id: str) -> bool` - Suppress a correlation group (reduce alert noise)
- `_log(self, message: str)` - Write to priority system log
- `generate_dashboard_data(self) -> Dict[<ast.Tuple object at 0x7eda6dfffe10>]` - Generate data for the priority dashboard

**Classes:**

- `PriorityLevel` - Priority levels with numeric values for sorting
- `TaskStatus` - Task lifecycle statuses
- `Task` - A task in the priority queue
- `AgentCapacity` - Current capacity status of an agent
- `AlertCorrelation` - Correlated alert group
- `UrgencyDetector` - AI-powered urgency detection from task descriptions.
  - `__init__()`
  - `detect_urgency()` - Analyze task and return priority level, factor scores, and d
  - `_extract_deadline()` - Extract deadline from text using pattern matching
- `TaskPrioritizationSystem` - Main task prioritization system.
  - `__init__()`
  - `_init_database()` - Initialize SQLite database
  - `_load_correlations()` - Load alert correlations from file
  - `_save_correlations()` - Save alert correlations to file
  - `_generate_task_hash()` - Generate unique hash for task deduplication
  - ... and 17 more methods

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

### scripts/test_compression.py


Test Token Compression System
Simulates large conversations to verify compression triggers correctly


**Functions:**

- `generate_large_conversation(target_tokens)` - Generate a conversation with approximately target_tokens tokens
- `test_compression_scenario(name, target_tokens, expected_mode)` - Test a specific compression scenario
- `main()`

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

### scripts/test_feature14.py


Test Suite for Smart Alert Correlation (Feature #14)

Validates all components of the alert correlation system.


**Functions:**

- `test_alert_creation()` - Test Alert dataclass
- `test_database()` - Test AlertDatabase operations
- `test_correlation()` - Test alert correlation logic
- `test_pattern_detection()` - Test various pattern detections
- `test_dashboard_generation()` - Test dashboard generation
- `run_all_tests()` - Run all tests

### scripts/test_feature15.py


Content Quality Scoring - Test Suite
Feature #15 Validation

Tests all components of the quality scoring system.


**Functions:**

- `test_database()` - Test database operations
- `test_analyzer()` - Test content analyzer
- `test_dashboard()` - Test dashboard generation
- `test_readability()` - Test readability calculation
- `test_style_guidelines()` - Test style guideline compliance
- `run_all_tests()` - Run complete test suite
- `__init__(self)`
- `test(self, name: str, condition: bool, details: str)` - Record a test result
- `report(self)` - Print test summary

**Classes:**

- `TestRunner` - Run all tests for Feature #15
  - `__init__()`
  - `test()` - Record a test result
  - `report()` - Print test summary

### scripts/test_ocl_cli.py


Test Suite for OpenClaw Unified CLI (Feature #28)
Tests all CLI commands and functionality


**Functions:**

- `run_tests()` - Run all tests
- `run_ocl(self, args, capture)` - Helper to run ocl command
- `test_version(self)` - Test version flag
- `test_help(self)` - Test help output
- `test_no_args_shows_help(self)` - Test that no arguments shows help
- `run_ocl(self, args)` - Helper to run ocl command
- `test_status_command(self)` - Test status command
- `test_status_verbose(self)` - Test status with verbose flag
- `run_ocl(self, args)` - Helper to run ocl command
- `test_list_command(self)` - Test list command shows all features
- `test_list_shows_feature_numbers(self)` - Test that list shows feature numbers
- `run_ocl(self, args)` - Helper to run ocl command
- `test_health_quick(self)` - Test quick health check
- `test_health_help(self)` - Test health command help
- `run_ocl(self, args)` - Helper to run ocl command
- `test_dashboard_info(self)` - Test dashboard info without opening
- `test_dashboard_help(self)` - Test dashboard help
- `run_ocl(self, args)` - Helper to run ocl command
- `test_logs_help(self)` - Test logs help
- `run_ocl(self, args)` - Helper to run ocl command
- `test_standup_help(self)` - Test standup help
- `test_incident_help(self)` - Test incident help
- `test_workflow_help(self)` - Test workflow help
- `test_priority_help(self)` - Test priority help
- `test_alerts_help(self)` - Test alerts help
- `test_testing_help(self)` - Test testing help
- `test_cost_help(self)` - Test cost help
- `run_ocl(self, args)` - Helper to run ocl command
- `test_verbose_flag(self)` - Test verbose flag
- `test_short_flags(self)` - Test short flags work

**Classes:**

- `TestOCLBasics` - Test basic CLI functionality
  - `run_ocl()` - Helper to run ocl command
  - `test_version()` - Test version flag
  - `test_help()` - Test help output
  - `test_no_args_shows_help()` - Test that no arguments shows help
- `TestOCLStatus` - Test status command
  - `run_ocl()` - Helper to run ocl command
  - `test_status_command()` - Test status command
  - `test_status_verbose()` - Test status with verbose flag
- `TestOCLList` - Test list command
  - `run_ocl()` - Helper to run ocl command
  - `test_list_command()` - Test list command shows all features
  - `test_list_shows_feature_numbers()` - Test that list shows feature numbers
- `TestOCLHealth` - Test health command
  - `run_ocl()` - Helper to run ocl command
  - `test_health_quick()` - Test quick health check
  - `test_health_help()` - Test health command help
- `TestOCLDashboard` - Test dashboard command
  - `run_ocl()` - Helper to run ocl command
  - `test_dashboard_info()` - Test dashboard info without opening
  - `test_dashboard_help()` - Test dashboard help
- `TestOCLLogs` - Test logs command
  - `run_ocl()` - Helper to run ocl command
  - `test_logs_help()` - Test logs help
- `TestOCLSubcommands` - Test all subcommands exist
  - `run_ocl()` - Helper to run ocl command
  - `test_standup_help()` - Test standup help
  - `test_incident_help()` - Test incident help
  - `test_workflow_help()` - Test workflow help
  - `test_priority_help()` - Test priority help
  - ... and 3 more methods
- `TestOCLOptions` - Test CLI options and flags
  - `run_ocl()` - Helper to run ocl command
  - `test_verbose_flag()` - Test verbose flag
  - `test_short_flags()` - Test short flags work

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

### scripts/token_usage_tracker.py


Token Usage Tracker
Records actual Kimi API usage for Ava's dashboard


**Functions:**

- `update_usage(weekly_percent, resets_in_hours)` - Update token usage tracking
- `main()` - Main entry point - using Thomas's reported values

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
- `_parse_heartbeat_log(self, agent: str) -> Optional[<ast.Subscript object at 0x7eda6f017f50>]` - Parse the latest heartbeat from an agent's log
- `_get_zak_recent_activity(self) -> List[str]` - Get Zak's recent activity from memory files and work logs
- `_count_daily_outputs(self, agent: str) -> int` - Count outputs created by agent today
- `_get_agent_alerts(self, agent: str) -> List[str]` - Get recent alerts for an agent (last 24 hours only)
- `_get_recent_system_alerts(self) -> List[<ast.Subscript object at 0x7eda6f037490>]` - Get recent system-wide alerts
- `_get_top_themes(self) -> List[str]` - Extract top themes from recent outputs
- `_ensure_readable_activities(self, agent_id: str, activities: List[Any]) -> List[<ast.Subscript object at 0x7eda6eedc3d0>]` - Ensure agent has 3 readable activity bullet points with timestamps
- `generate_dashboard(self) -> DashboardData` - Generate complete dashboard data
- `save_json(self, data: DashboardData)` - Save dashboard data as JSON
- `generate_html(self, data: DashboardData)` - Generate HTML dashboard
- `collect_issues(self, data) -> List[Dict]` - Collect issues from this dashboard for the index
- `update_issues_file(self, issues: List[Dict])` - Update the central issues file
- `run(self)` - Generate complete dashboard

**Classes:**

- `AgentStatus` - Current status of an agent
- `DashboardData` - Complete dashboard state
- `AgentDashboard` - Generates real-time agent dashboard
  - `__init__()`
  - `_parse_heartbeat_log()` - Parse the latest heartbeat from an agent's log
  - `_get_zak_recent_activity()` - Get Zak's recent activity from memory files and work logs
  - `_count_daily_outputs()` - Count outputs created by agent today
  - `_get_agent_alerts()` - Get recent alerts for an agent (last 24 hours only)
  - ... and 9 more methods

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
- `_check_duplicate(self, email_type: str, to: str) -> Optional[str]` - Check if an email of this type was already sent to this recipient today.
- `send_email(self, to: str, subject: str, body: str, email_type: str, is_critical: Optional[bool], sender_agent: str, html_body: Optional[str], attachments: Optional[<ast.Subscript object at 0x7eda6ec0bb90>], allow_duplicates: bool, sender_email: Optional[str], cc: Optional[str]) -> DeliveryResult` - Universal email send with delivery confirmation.
- `_register_email_in_registry(self, email_type: str, delivery_info: Dict)` - Track all emails by type for analytics
- `_schedule_auto_confirmation(self, tracking_id: str)` - Schedule automatic confirmation after configured delay
- `confirm_delivery(self, tracking_id: str, verified: bool) -> bool` - Mark a delivery as confirmed.
- `_send_delivery_receipt(self, delivery: Dict)` - Send lightweight delivery confirmation via Telegram queue
- `_telegram_fallback(self, subject: str, body: str, email_type: str, error: str)` - Send critical briefing via Telegram when email fails
- `_queue_telegram_message(self, message: str, is_receipt: bool, is_fallback: bool)` - Queue message for Telegram delivery
- `retry_failed(self, tracking_id: str) -> DeliveryResult` - Retry a failed or pending delivery
- `_escalate_delivery(self, delivery: Dict, reason: str)` - Escalate persistent delivery failures
- `get_status(self) -> Dict` - Get current delivery system status
- `get_pending_deliveries(self) -> Dict[<ast.Tuple object at 0x7eda6ec6ced0>]` - Get all pending deliveries
- `get_failed_deliveries(self) -> Dict[<ast.Tuple object at 0x7eda6ec6d890>]` - Get all failed deliveries
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
  - ... and 15 more methods

### scripts/universal_email_sender.py


Universal Email Sender for Subagents
Ensures all emails are sent via SMTP with proper error handling

Usage:
    from universal_email_sender import send_email
    
    send_email(
        to="owner@redacted.invalid",
        subject="Feature #45 Complete",
        body="...",
        email_type="feature_deployment",
        sender_agent="Zak"
    )


**Functions:**

- `log(message)`
- `get_daily_email_count()` - Get today's email count
- `increment_daily_count()` - Increment today's email count
- `send_telegram_notification(subject, body)` - Send notification via Telegram as fallback
- `check_email_limit()` - Check if we're approaching or at email limit
- `load_tracking()` - Load email tracking data
- `save_tracking(tracking)` - Save email tracking data
- `check_duplicate(email_type, recipient, date_str)` - Check if this email was already sent today
- `send_email(to, subject, body, email_type, sender_agent, html_body, allow_duplicates)` - Send an email via SMTP with tracking, duplicate prevention, and limit management
- `get_stats()` - Get email sending statistics including daily limits

### scripts/update_agent_coordination.py


Agent Coordination Updater
Updates agent_coordination.json daily with fresh themes from agent outputs


**Functions:**

- `extract_themes_from_text(text)` - Extract themes from text content
- `scan_agent_outputs()` - Scan recent agent outputs for themes
- `get_top_themes(outputs)` - Get top themes from outputs
- `update_coordination()` - Update agent coordination file

### scripts/update_capability_marketplace_data.py


Update Capability Marketplace Dashboard Data
Exports live data from the marketplace database to JSON for the dashboard


**Functions:**

- `update_marketplace_data()` - Export marketplace data to JSON

### scripts/update_feature_registry_status.py


Update Feature Registry with Accurate Implementation Status
Distinguishes between stubs, implementations, and retired features


**Functions:**

- `is_stub(file_path)` - Determine if a script is a stub implementation
- `has_cron_job(feature_id)` - Check if feature has a cron job
- `update_feature_registry()` - Update feature registry with accurate status

### scripts/update_index_timestamps.py


Dashboard Index Updater
Updates timestamps AND critical matters section from aggregated issues
Should be run after any dashboard is regenerated


**Functions:**

- `get_file_timestamp(filepath)` - Get the last modified time of a file
- `load_issues()` - Load issues from the aggregated issues file
- `generate_critical_matters_html(issues)` - Generate HTML for critical matters section
- `update_critical_matters_section(content, issues)` - Update the critical matters section in the index HTML
- `update_index()` - Update timestamps and critical matters in the index page
- `replace_time(match)`

### scripts/verify_deliveries.py


Universal Delivery Verification Script
Runs 5-10 minutes after scheduled email times to verify delivery


**Functions:**

- `main()`

### scripts/web_search_tracked.py


Web Search with Brave Query Tracking
Wrapper around web_search that logs queries to avoid hitting limits


**Functions:**

- `web_search_with_tracking(query, count, country, freshness, search_lang)` - Perform web search and log query to Brave counter
- `main()` - CLI interface

### scripts/weekly_report.py


Weekly Health Report Generator
Sends summary of system health to zak@trueworkoffice.com


**Functions:**

- `generate_weekly_report()` - Generate weekly health summary
- `main()`

### send_blogwatcher_summary.py

### send_feature28_email.py


Send Feature #28 completion email to Thomas
Usage: python3 send_feature28_email.py


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str) -> bool` - Send email using AgentMail API.
- `main()`

### send_feature33_email.py


Send Feature #33 Email to Thomas
Uses AgentMail API for delivery


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str, html_body: str) -> bool` - Send email using AgentMail API.
- `main()` - Main entry point

### send_feature34_email.py


Feature #34 Completion Email
Send deployment notification to Thomas


**Functions:**

- `send_email()`

### send_feature35_email.py


Send Feature #35 Completion Email to Thomas


**Functions:**

- `send_completion_email()`

### send_feature36_email.py


Send Feature #36 completion email to Thomas
Usage: python3 send_feature36_email.py


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str) -> bool` - Send email using AgentMail API.
- `main()`

### send_feature37_email.py


Send Feature #37 deployment notification to Thomas.


**Functions:**

- `send_email()` - Send deployment notification via himalaya.

### send_feature38_email.py


Send Feature #38 completion email to Thomas


**Functions:**

- `send_email()`

### send_feature42_email.py


Send Feature #42 completion email to Thomas


**Functions:**

- `send_email()` - Send the notification email.

### send_feature43_email_final.py


Send Feature #43 completion email to Thomas


### send_feature44_email.py


Feature #44 Deployment Email
Sends deployment notification to Thomas


**Functions:**

- `send_deployment_email()` - Send Feature #44 deployment notification to Thomas

### send_feature_26_email.py


Send email notification for Feature #26 completion


### skill-learning/scripts/extract_patterns.py


Pattern Extractor - Analyzes agent outputs to identify successful techniques
Part of Feature #11: Agent Skill Learning System


**Functions:**

- `main()` - CLI entry point
- `__init__(self, data_dir: str)`
- `_load_patterns(self) -> List[Dict]` - Load existing patterns
- `_save_patterns(self)` - Save patterns to disk
- `_generate_id(self, content: str) -> str` - Generate unique ID for pattern
- `_detect_domain(self, agent_name: str) -> str` - Detect domain from agent name
- `_calculate_quality_score(self, content: str, metadata: Dict) -> float` - Calculate quality score for content
- `extract_from_file(self, file_path: str, agent_name: str) -> List[Dict]` - Extract patterns from a single file
- `scan_agent_outputs(self, agent_name: str, memory_dir: str) -> List[Dict]` - Scan all outputs from an agent
- `update_pattern_library(self, new_patterns: List[Dict])` - Update pattern library with new patterns, avoiding duplicates
- `run_extraction_cycle(self) -> Dict` - Run full extraction cycle for all agents

**Classes:**

- `PatternExtractor` - Extracts reusable patterns from agent outputs
  - `__init__()`
  - `_load_patterns()` - Load existing patterns
  - `_save_patterns()` - Save patterns to disk
  - `_generate_id()` - Generate unique ID for pattern
  - `_detect_domain()` - Detect domain from agent name
  - ... and 5 more methods

### skill-learning/scripts/learning_analytics.py


Learning Analytics - Tracks learning progress and effectiveness
Part of Feature #11: Agent Skill Learning System


**Functions:**

- `main()` - CLI entry point
- `__init__(self, base_dir: str)`
- `_load_analytics(self) -> Dict` - Load analytics data
- `_load_metrics(self) -> List[Dict]` - Load historical metrics
- `_save_analytics(self)` - Save analytics data
- `_save_metrics(self)` - Save metrics
- `record_learning_event(self, agent: str, event_type: str, details: Dict)` - Record a learning event
- `update_agent_progress(self, agent: str, patterns_contributed: int, patterns_adopted: int, skills_learned: int)` - Update learning progress for an agent
- `record_metric_snapshot(self)` - Record a snapshot of current metrics
- `get_learning_report(self, days: int) -> Dict` - Generate comprehensive learning report
- `get_agent_learning_velocity(self, agent: str) -> Dict` - Calculate learning velocity for an agent
- `generate_weekly_report(self) -> str` - Generate a formatted weekly report

**Classes:**

- `LearningAnalytics` - Tracks and analyzes agent learning progress
  - `__init__()`
  - `_load_analytics()` - Load analytics data
  - `_load_metrics()` - Load historical metrics
  - `_save_analytics()` - Save analytics data
  - `_save_metrics()` - Save metrics
  - ... and 6 more methods

### skill-learning/scripts/orchestrator.py


Skill Learning Orchestrator - Main controller for Feature #11
Part of Feature #11: Agent Skill Learning System


**Functions:**

- `main()` - CLI entry point
- `__init__(self, base_dir: str)`
- `_log(self, message: str)` - Log a message
- `run_full_cycle(self) -> Dict` - Run a complete learning cycle
- `generate_daily_report(self) -> str` - Generate daily learning report
- `get_agent_skill_briefing(self, agent: str) -> str` - Generate a skill briefing for a specific agent
- `export_for_dashboard(self) -> Dict` - Export data for dashboard integration

**Classes:**

- `SkillLearningOrchestrator` - Orchestrates the entire skill learning system
  - `__init__()`
  - `_log()` - Log a message
  - `run_full_cycle()` - Run a complete learning cycle
  - `generate_daily_report()` - Generate daily learning report
  - `get_agent_skill_briefing()` - Generate a skill briefing for a specific agent
  - ... and 1 more methods

### skill-learning/scripts/send_feature11_email.py


Send Feature #11 completion email to Thomas


**Functions:**

- `main()`

### skill-learning/scripts/share_patterns.py


Pattern Sharing Protocol - Distributes patterns to relevant agents
Part of Feature #11: Agent Skill Learning System


**Functions:**

- `main()` - CLI entry point
- `__init__(self, base_dir: str)`
- `_load_shares(self) -> List[Dict]` - Load sharing history
- `_load_patterns(self) -> List[Dict]` - Load patterns
- `_save_shares(self)` - Save sharing history
- `_calculate_relevance(self, pattern: Dict, agent: str) -> float` - Calculate how relevant a pattern is for an agent
- `get_recommended_patterns(self, agent: str, limit: int) -> List[Dict]` - Get pattern recommendations for an agent
- `_generate_reason(self, pattern: Dict, agent: str, score: float) -> str` - Generate human-readable recommendation reason
- `share_pattern(self, pattern_id: str, from_agent: str, to_agent: str) -> Dict` - Record a pattern sharing event
- `mark_adopted(self, pattern_id: str, agent: str)` - Mark a pattern as adopted by an agent
- `get_sharing_report(self) -> Dict` - Generate a report on pattern sharing activity
- `run_sharing_cycle(self) -> Dict` - Run a complete pattern sharing cycle for all agents

**Classes:**

- `PatternSharingProtocol` - Manages distribution of patterns to agents
  - `__init__()`
  - `_load_shares()` - Load sharing history
  - `_load_patterns()` - Load patterns
  - `_save_shares()` - Save sharing history
  - `_calculate_relevance()` - Calculate how relevant a pattern is for an agent
  - ... and 6 more methods

### skill-learning/scripts/skill_library.py


Skill Library - Central repository for learned skills and patterns
Part of Feature #11: Agent Skill Learning System


**Functions:**

- `main()` - CLI entry point
- `__init__(self, base_dir: str)`
- `_load_skills(self) -> List[Dict]` - Load skill definitions
- `_load_patterns(self) -> List[Dict]` - Load patterns
- `_load_stats(self) -> Dict` - Load learning statistics
- `_save_skills(self)` - Save skills to disk
- `_save_stats(self)` - Save statistics to disk
- `get_patterns_for_agent(self, agent_name: str, domain: Optional[str], limit: int) -> List[Dict]` - Get relevant patterns for an agent
- `create_skill_from_pattern(self, pattern_id: str, skill_name: str, description: str) -> Optional[Dict]` - Convert a pattern into a formal skill
- `get_agent_skill_profile(self, agent_name: str) -> Dict` - Get skill profile for an agent
- `get_library_stats(self) -> Dict` - Get overall library statistics
- `search_patterns(self, query: str, domain: Optional[str]) -> List[Dict]` - Search patterns by keyword

**Classes:**

- `SkillLibrary` - Manages the skill and pattern repository
  - `__init__()`
  - `_load_skills()` - Load skill definitions
  - `_load_patterns()` - Load patterns
  - `_load_stats()` - Load learning statistics
  - `_save_skills()` - Save skills to disk
  - ... and 6 more methods

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
- `run_codexbar_cost(provider: str) -> List[<ast.Subscript object at 0x7eda6db2b190>]`
- `load_payload(input_path: Optional[str], provider: str) -> Dict[<ast.Tuple object at 0x7eda6db23310>]`
- `parse_daily_entries(payload: Dict[<ast.Tuple object at 0x7eda6db228d0>]) -> List[<ast.Subscript object at 0x7eda6db21290>]`
- `parse_date(value: str) -> Optional[date]`
- `filter_by_days(entries: List[<ast.Subscript object at 0x7eda6db1fcd0>], days: Optional[int]) -> List[<ast.Subscript object at 0x7eda6db1d050>]`
- `aggregate_costs(entries: Iterable[<ast.Subscript object at 0x7eda6db1c990>]) -> Dict[<ast.Tuple object at 0x7eda6dad9950>]`
- `pick_current_model(entries: List[<ast.Subscript object at 0x7eda6dad8f90>]) -> Tuple[<ast.Tuple object at 0x7eda6db30ed0>]`
- `usd(value: Optional[float]) -> str`
- `latest_day_cost(entries: List[<ast.Subscript object at 0x7eda6db27a10>], model: str) -> Tuple[<ast.Tuple object at 0x7eda6db60ed0>]`
- `render_text_current(provider: str, model: str, latest_date: Optional[str], total_cost: Optional[float], latest_cost: Optional[float], latest_cost_date: Optional[str], entry_count: int) -> str`
- `render_text_all(provider: str, totals: Dict[<ast.Tuple object at 0x7eda6db68a50>]) -> str`
- `build_json_current(provider: str, model: str, latest_date: Optional[str], total_cost: Optional[float], latest_cost: Optional[float], latest_cost_date: Optional[str], entry_count: int) -> Dict[<ast.Tuple object at 0x7eda6db702d0>]`
- `build_json_all(provider: str, totals: Dict[<ast.Tuple object at 0x7eda6db708d0>]) -> Dict[<ast.Tuple object at 0x7eda6db72050>]`
- `main() -> int`

**Classes:**

- `ModelCost`

### skills/openai-image-gen/scripts/gen.py

**Functions:**

- `slugify(text: str) -> str`
- `default_out_dir() -> Path`
- `pick_prompts(count: int) -> list[str]`
- `get_model_defaults(model: str) -> tuple[<ast.Tuple object at 0x7eda6dacb410>]` - Return (default_size, default_quality) for the given model.
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

- `load_config() -> Dict[<ast.Tuple object at 0x7eda6d93f1d0>]` - Load configuration from config.json if it exists, with defaults.
- `get_env_key(provider: str) -> Optional[str]` - Get API key for provider from environment.
- `validate_api_key(provider: str) -> str` - Validate and return API key, with helpful error messages.
- `auto_route_provider(query: str, config: Dict[<ast.Tuple object at 0x7eda6d9c5790>]) -> Dict[<ast.Tuple object at 0x7eda6d9c62d0>]` - Intelligently route query to the best provider.
- `explain_routing(query: str, config: Dict[<ast.Tuple object at 0x7eda6d9c68d0>]) -> Dict[<ast.Tuple object at 0x7eda6d7dc810>]` - Provide detailed explanation of routing decision for debugging.
- `make_request(url: str, headers: dict, body: dict, timeout: int) -> dict` - Make HTTP POST request and return JSON response.
- `search_serper(query: str, api_key: str, max_results: int, country: str, language: str, search_type: str, time_range: Optional[str], include_images: bool) -> dict` - Search using Serper (Google Search API).
- `search_tavily(query: str, api_key: str, max_results: int, depth: str, topic: str, include_domains: Optional[<ast.Subscript object at 0x7eda6d80dd90>], exclude_domains: Optional[<ast.Subscript object at 0x7eda6d80e090>], include_images: bool, include_raw_content: bool) -> dict` - Search using Tavily (AI Research Search).
- `search_exa(query: str, api_key: str, max_results: int, search_type: str, category: Optional[str], start_date: Optional[str], end_date: Optional[str], similar_url: Optional[str], include_domains: Optional[<ast.Subscript object at 0x7eda6d824890>], exclude_domains: Optional[<ast.Subscript object at 0x7eda6d824b90>]) -> dict` - Search using Exa (Neural/Semantic Search).
- `main()`
- `__init__(self, config: Dict[<ast.Tuple object at 0x7eda6d917a10>])`
- `_calculate_signal_score(self, query: str, signals: Dict[<ast.Tuple object at 0x7eda6d916a50>]) -> Tuple[<ast.Tuple object at 0x7eda6d9a9e50>]` - Calculate score for a signal category.
- `_detect_product_brand_combo(self, query: str) -> float` - Detect product + brand combinations which strongly indicate shopping intent.
- `_detect_url(self, query: str) -> Optional[str]` - Detect URLs in query - strong signal for Exa similar search.
- `_assess_query_complexity(self, query: str) -> Dict[<ast.Tuple object at 0x7eda6d969d50>]` - Assess query complexity - complex queries favor Tavily.
- `_detect_recency_intent(self, query: str) -> Tuple[<ast.Tuple object at 0x7eda6d957ad0>]` - Detect if query wants recent/timely information.
- `analyze(self, query: str) -> Dict[<ast.Tuple object at 0x7eda6d944950>]` - Perform comprehensive query analysis.
- `route(self, query: str) -> Dict[<ast.Tuple object at 0x7eda6d9c5150>]` - Route query to optimal provider with confidence scoring.

**Classes:**

- `QueryAnalyzer` - Intelligent query analysis for smart provider routing.
  - `__init__()`
  - `_calculate_signal_score()` - Calculate score for a signal category.
  - `_detect_product_brand_combo()` - Detect product + brand combinations which strongly indicate 
  - `_detect_url()` - Detect URLs in query - strong signal for Exa similar search.
  - `_assess_query_complexity()` - Assess query complexity - complex queries favor Tavily.
  - ... and 3 more methods

### subagent_memory.py


Subagent Memory Integration (Feature #26)
Integrates conversation memory into the subagent system.


**Functions:**

- `get_subagent_memory(subagent_id: str, session_id: str) -> SubagentMemory` - Get a SubagentMemory instance.
- `get_relevant_context(subagent_type: str, task_description: str) -> str` - Get relevant context for a subagent about to start a task.
- `consolidate_all_memories()` - Run memory consolidation for all agents.
- `__init__(self, subagent_id: str, session_id: str)`
- `start_session(self, objective: str, context: Dict)` - Record the start of a subagent session.
- `record_learning(self, insight: str, importance: int, tags: List[str])` - Record a learning/insight from the session.
- `record_decision(self, decision: str, rationale: str, importance: int)` - Record an important decision made during the session.
- `record_fact(self, fact: str, confidence: float, tags: List[str])` - Record a factual discovery.
- `add_result(self, result: str, success: bool)` - Add a task result.
- `end_session(self, summary: str, success: bool)` - End the session and store summary.
- `get_session_context(self) -> str` - Get relevant context for this subagent type.
- `_log_event(self, event_type: str, data: Dict)` - Log event to JSONL file.

**Classes:**

- `SubagentMemory` - Memory integration for subagents.
  - `__init__()`
  - `start_session()` - Record the start of a subagent session.
  - `record_learning()` - Record a learning/insight from the session.
  - `record_decision()` - Record an important decision made during the session.
  - `record_fact()` - Record a factual discovery.
  - ... and 4 more methods

### test_browser.py

### test_memory.py


Test Suite for Agent Conversation Memory (Feature #26)


**Functions:**

- `run_integration_test()` - Run a full integration scenario.
- `__init__(self)`
- `test(self, name: str)` - Decorator for test functions.
- `run_all(self)` - Run all tests.
- `test_core_memory(self)` - Test core memory storage and retrieval.
- `test_memory_queries(self)` - Test memory query capabilities.
- `test_subagent_integration(self)` - Test subagent memory integration.
- `test_session_capture(self)` - Test main session memory capture.
- `test_consolidation(self)` - Test memory consolidation.
- `test_shared_context(self)` - Test shared context between agents.
- `decorator(func)`
- `t1()`
- `t2()`
- `t3()`
- `t4()`
- `t1()`
- `t2()`
- `t3()`
- `t1()`
- `t2()`
- `t1()`
- `t2()`
- `t3()`
- `t1()`
- `t2()`
- `t1()`
- `t2()`

**Classes:**

- `Colors`
- `TestRunner`
  - `__init__()`
  - `test()` - Decorator for test functions.
  - `run_all()` - Run all tests.
  - `test_core_memory()` - Test core memory storage and retrieval.
  - `test_memory_queries()` - Test memory query capabilities.
  - ... and 4 more methods

### test_research_scout.py


Test script for Research Scout Notion Export
Runs a scan without exporting to verify functionality.


**Functions:**

- `test_scan()` - Test the scanning functionality.
- `test_notion_connection()` - Test Notion API connection.

### tests/automated_testing_suite.py


Automated Testing Suite - Feature #16
End-to-end system tests, regression detection, performance benchmarks

This is the main entry point for the comprehensive testing suite.


**Functions:**

- `main()` - Main entry point
- `__init__(self)`
- `run_all_tests(self) -> TestSuiteResult` - Run all test modules
- `_run_feature_tests(self, feature_name: str, module_name: str)` - Run tests for a specific feature
- `_run_generic_feature_test(self, feature_name: str)` - Run generic tests for a feature
- `_get_feature_files(self, feature_name: str) -> List[str]` - Get list of files associated with a feature
- `_import_feature_module(self, feature_name: str)` - Try to import a feature's main module
- `_run_integration_tests(self)` - Run cross-feature integration tests
- `_test_health_performance_integration(self) -> Tuple[<ast.Tuple object at 0x7eda73950d10>]` - Test health dashboard and performance analytics integration
- `_test_knowledge_cross_agent_integration(self) -> Tuple[<ast.Tuple object at 0x7eda73946090>]` - Test knowledge protocol with cross-agent workflows
- `_test_alert_correlation_integration(self) -> Tuple[<ast.Tuple object at 0x7eda73944410>]` - Test alert system with correlation dashboard
- `_test_calendar_workflow_integration(self) -> Tuple[<ast.Tuple object at 0x7eda7393e490>]` - Test calendar API with workflow triggers
- `_run_performance_benchmarks(self) -> Dict[<ast.Tuple object at 0x7eda739b23d0>]` - Run performance benchmarks
- `_benchmark_database_queries(self) -> float` - Benchmark database query performance
- `_benchmark_file_system(self) -> float` - Benchmark file system operations
- `_benchmark_memory_operations(self) -> float` - Benchmark memory operations
- `_benchmark_imports(self) -> float` - Benchmark module import time
- `_detect_regressions(self, current_benchmarks: Dict) -> List[Dict]` - Detect performance regressions
- `_calculate_coverage(self) -> Dict[<ast.Tuple object at 0x7eda737e84d0>]` - Calculate test coverage statistics
- `_save_results(self, result: TestSuiteResult)` - Save test results to file
- `_generate_report(self, result: TestSuiteResult)` - Generate human-readable test report

**Classes:**

- `TestResult` - Result of a single test
- `TestSuiteResult` - Result of a test suite run
- `TestRunner` - Main test runner orchestrating all tests
  - `__init__()`
  - `run_all_tests()` - Run all test modules
  - `_run_feature_tests()` - Run tests for a specific feature
  - `_run_generic_feature_test()` - Run generic tests for a feature
  - `_get_feature_files()` - Get list of files associated with a feature
  - ... and 15 more methods

### tests/send_test_notification.py


Test Suite Email Notification System
Sends test results to Thomas via Himalaya email


**Functions:**

- `get_latest_test_results()` - Get the most recent test results
- `format_email_body(results)` - Format test results as email body
- `send_email(subject, body, to_address)` - Send email using Himalaya
- `main()`

### tests/test_batch_processor.py


Batch Processing Test - Autonomous Task Executor
Tests batch_processor.py with real research tasks


### tests/test_content_distribution.py


Test Suite for Feature #17: Multi-Channel Content Distribution


**Functions:**

- `run_tests()` - Run all tests
- `test_create_content(self)` - Test content creation
- `test_content_with_custom_priority(self)` - Test content with custom priority
- `test_uk_english_conversion(self)` - Test US to UK English conversion
- `test_twitter_tailoring(self)` - Test Twitter content tailoring
- `test_linkedin_tailoring(self)` - Test LinkedIn content tailoring
- `test_bluesky_tailoring(self)` - Test Bluesky content tailoring
- `test_long_content_threading(self)` - Test that long content creates threads
- `test_get_optimal_time(self)` - Test optimal time calculation
- `test_optimal_time_considers_priority(self)` - Test that priority affects scheduling
- `test_stagger_posts(self)` - Test post staggering
- `setUp(self)` - Create temporary database
- `tearDown(self)` - Clean up temporary database
- `test_queue_content(self)` - Test queuing content
- `test_schedule_distribution(self)` - Test scheduling distribution
- `test_get_pending_posts(self)` - Test retrieving pending posts
- `test_get_stats(self)` - Test getting statistics
- `setUp(self)` - Set up test environment
- `tearDown(self)` - Clean up
- `test_submit_content(self)` - Test content submission
- `test_get_dashboard_data(self)` - Test dashboard data generation

**Classes:**

- `TestContentPiece` - Test ContentPiece dataclass
  - `test_create_content()` - Test content creation
  - `test_content_with_custom_priority()` - Test content with custom priority
- `TestContentTailor` - Test ContentTailor functionality
  - `test_uk_english_conversion()` - Test US to UK English conversion
  - `test_twitter_tailoring()` - Test Twitter content tailoring
  - `test_linkedin_tailoring()` - Test LinkedIn content tailoring
  - `test_bluesky_tailoring()` - Test Bluesky content tailoring
  - `test_long_content_threading()` - Test that long content creates threads
- `TestScheduleOptimizer` - Test ScheduleOptimizer functionality
  - `test_get_optimal_time()` - Test optimal time calculation
  - `test_optimal_time_considers_priority()` - Test that priority affects scheduling
  - `test_stagger_posts()` - Test post staggering
- `TestContentDistributionDB` - Test database operations
  - `setUp()` - Create temporary database
  - `tearDown()` - Clean up temporary database
  - `test_queue_content()` - Test queuing content
  - `test_schedule_distribution()` - Test scheduling distribution
  - `test_get_pending_posts()` - Test retrieving pending posts
  - ... and 1 more methods
- `TestContentDistributor` - Test ContentDistributor orchestrator
  - `setUp()` - Set up test environment
  - `tearDown()` - Clean up
  - `test_submit_content()` - Test content submission
  - `test_get_dashboard_data()` - Test dashboard data generation

### tests/test_daily_standup.py


Test Suite for Daily Standup Generator (Feature #25)

Author: Zak
Version: 1.0.0


**Functions:**

- `main()` - Run test suite
- `__init__(self)`
- `test(self, name: str, func)` - Run a test
- `test_agent_identification(self)` - Test agent identification from text
- `test_activity_categorization(self)` - Test activity categorization
- `test_blocker_detection(self)` - Test blocker detection from log content
- `test_metrics_calculation(self)` - Test metrics calculation
- `test_standup_generation_structure(self)` - Test standup report structure
- `test_markdown_generation(self)` - Test markdown report generation
- `test_priority_suggestions(self)` - Test priority suggestion logic
- `test_overall_status_determination(self)` - Test overall status determination
- `test_save_standup(self)` - Test standup saving functionality
- `run_all(self)` - Run all tests

**Classes:**

- `TestDailyStandupGenerator` - Test suite for Daily Standup Generator
  - `__init__()`
  - `test()` - Run a test
  - `test_agent_identification()` - Test agent identification from text
  - `test_activity_categorization()` - Test activity categorization
  - `test_blocker_detection()` - Test blocker detection from log content
  - ... and 7 more methods

### tests/test_doc_generator.py


Test suite for Auto-Documentation Generator (Feature #9)


**Functions:**

- `test_code_parser()` - Test CodeParser functionality.
- `test_project_scanner()` - Test ProjectScanner functionality.
- `test_readme_generator()` - Test ReadmeGenerator functionality.
- `test_changelog_generator()` - Test ChangelogGenerator functionality.
- `run_all_tests()` - Run all tests.

### tests/test_f10_backup_recovery.py


Test Module: Feature #10 - Backup & Recovery System
Tests the backup and recovery functionality


**Functions:**

- `test_backup_recovery()` - Test the backup and recovery system
- `run_tests()` - Run all backup recovery tests

### tests/test_f11_skill_learning.py


Test Module: Feature #11 - Agent Skill Learning System
Tests the skill learning and pattern recognition system


**Functions:**

- `test_skill_learning()` - Test the skill learning system
- `run_tests()` - Run all skill learning tests

### tests/test_f12_cost_optimization.py


Test Module: Feature #12 - Cost Optimization Dashboard
Tests the cost tracking and optimization system


**Functions:**

- `test_cost_optimization()` - Test the cost optimization system
- `run_tests()` - Run all cost optimization tests

### tests/test_f13_task_prioritization.py


Test Module: Feature #13 - Task Prioritization System
Tests the agent task prioritization system


**Functions:**

- `test_task_prioritization()` - Test the task prioritization system
- `run_tests()` - Run all task prioritization tests

### tests/test_f14_alert_correlation.py


Test Module: Feature #14 - Smart Alert Correlation
Tests the alert correlation and pattern detection system


**Functions:**

- `test_alert_correlation()` - Test the alert correlation system
- `run_tests()` - Run all alert correlation tests

### tests/test_f15_content_quality.py


Test Module: Feature #15 - Content Quality Scoring
Tests the content quality scoring system


**Functions:**

- `test_content_quality()` - Test the content quality scoring system
- `run_tests()` - Run all content quality tests

### tests/test_f1_health_dashboard.py


Test Module: Feature #1 - Subagent Health Dashboard
Tests the health monitoring system for all subagents


**Functions:**

- `test_agent_health_dashboard()` - Test the agent health dashboard module
- `run_tests()` - Run all health dashboard tests

### tests/test_f2_predictive_feedback.py


Test Module: Feature #2 - Predictive Feedback Learning Loop
Tests the predictive feedback system


**Functions:**

- `test_predictive_feedback()` - Test the predictive feedback system
- `run_tests()` - Run all predictive feedback tests

### tests/test_f3_cross_agent.py


Test Module: Feature #3 - Cross-Agent Workflows
Tests the cross-agent coordination system


**Functions:**

- `test_cross_agent()` - Test the cross-agent workflow system
- `run_tests()` - Run all cross-agent tests

### tests/test_f4_cron_workflows.py


Test Module: Feature #4 - Workflow Cron Integration
Tests the workflow scheduling and cron integration


**Functions:**

- `test_cron_workflows()` - Test the cron workflow system
- `run_tests()` - Run all cron workflow tests

### tests/test_f5_rss_monitor.py


Test Module: Feature #5 - RSS Feed Monitor
Tests the RSS monitoring and blogwatcher system


**Functions:**

- `test_rss_monitor()` - Test the RSS monitoring system
- `run_tests()` - Run all RSS monitor tests

### tests/test_f6_knowledge_protocol.py


Test Module: Feature #6 - Agent Knowledge Sharing Protocol
Tests the knowledge sharing and integration system


**Functions:**

- `test_knowledge_protocol()` - Test the knowledge sharing protocol
- `run_tests()` - Run all knowledge protocol tests

### tests/test_f7_calendar_api.py


Test Module: Feature #7 - Google Calendar API Integration
Tests the calendar event triggers and integration


**Functions:**

- `test_calendar_api()` - Test the calendar API integration
- `run_tests()` - Run all calendar API tests

### tests/test_f8_performance_analytics.py


Test Module: Feature #8 - Performance Analytics
Tests the performance trend analytics system


**Functions:**

- `test_performance_analytics()` - Test the performance analytics module
- `run_tests()` - Run all performance analytics tests

### tests/test_f9_doc_generator.py


Test Module: Feature #9 - Auto-Documentation Generator
Tests the automated documentation generation system


**Functions:**

- `test_doc_generator()` - Test the documentation generator module
- `run_tests()` - Run all doc generator tests

### tests/test_feature19_dependency_mapper.py


Test Suite for System Dependency Mapper - Feature #19

Tests:
- File scanning functionality
- Import extraction (Python and JS)
- Feature categorization
- Dependency graph building
- Impact analysis calculation
- Output generation


**Functions:**

- `test_real_workspace()` - Test against the real workspace.
- `main()` - Run all tests.
- `setup_test_workspace(self)` - Create a temporary test workspace.
- `test_file_scanning(self)` - Test file scanning functionality.
- `test_python_import_extraction(self)` - Test Python import extraction.
- `test_js_import_extraction(self)` - Test JavaScript import extraction.
- `test_feature_categorization(self)` - Test feature categorization.
- `test_dependency_analysis(self)` - Test dependency analysis.
- `test_graph_building(self)` - Test dependency graph building.
- `test_impact_analysis(self)` - Test impact analysis calculation.
- `test_mermaid_generation(self)` - Test Mermaid diagram generation.
- `test_html_generation(self)` - Test HTML dashboard generation.
- `test_markdown_generation(self)` - Test Markdown report generation.
- `test_full_run(self)` - Test the complete run process.
- `run_all_tests(self)` - Run all test cases.

**Classes:**

- `TestDependencyMapper` - Test cases for the DependencyMapper class.
  - `setup_test_workspace()` - Create a temporary test workspace.
  - `test_file_scanning()` - Test file scanning functionality.
  - `test_python_import_extraction()` - Test Python import extraction.
  - `test_js_import_extraction()` - Test JavaScript import extraction.
  - `test_feature_categorization()` - Test feature categorization.
  - ... and 8 more methods

### tests/test_feature21.py


Test Suite for System Health Predictor (Feature #21)

Tests all major components:
1. Database initialization
2. Metric collection
3. Anomaly detection
4. Prediction generation
5. Dashboard generation
6. Integration with existing systems

Author: Zak (Subagent)
Version: 1.0.0


**Functions:**

- `test_database()` - Test database operations
- `test_statistical_analyzer()` - Test statistical analysis functions
- `test_metric_collection()` - Test metric collection from various sources
- `test_anomaly_detection()` - Test anomaly detection
- `test_prediction_generation()` - Test prediction generation
- `test_health_summary()` - Test health summary generation
- `test_integration()` - Test integration with existing systems
- `test_full_workflow()` - Test complete workflow
- `main()` - Run all tests
- `__init__(self)`
- `test(self, name, condition, message)` - Run a single test
- `summary(self)` - Print test summary

**Classes:**

- `TestRunner` - Run tests and report results
  - `__init__()`
  - `test()` - Run a single test
  - `summary()` - Print test summary

### tests/test_feature22.py


Configuration Drift Detector - Test Suite
Feature #22

Tests all components of the configuration drift detection system.


**Functions:**

- `run_tests()` - Run all tests and return results
- `main()` - Main entry point
- `setUp(self)`
- `tearDown(self)`
- `test_init_creates_tables(self)` - Test database initialization creates required tables
- `test_save_and_get_baseline(self)` - Test saving and retrieving baselines
- `test_get_all_baselines(self)` - Test retrieving all baselines
- `test_save_and_get_drift_event(self)` - Test saving and retrieving drift events
- `test_acknowledge_drift(self)` - Test acknowledging drift events
- `test_get_stats(self)` - Test statistics retrieval
- `setUp(self)`
- `tearDown(self)`
- `test_calculate_hash(self)` - Test hash calculation
- `test_get_file_info(self)` - Test file info retrieval
- `test_get_monitored_files(self)` - Test monitored files discovery
- `test_get_severity_for_file(self)` - Test severity assignment
- `test_create_baseline(self)` - Test baseline creation
- `test_initialize_baselines(self)` - Test baseline initialization
- `test_detect_content_change(self)` - Test content change detection
- `test_detect_new_file(self)` - Test new file detection
- `test_detect_deleted_file(self)` - Test file deletion detection
- `test_should_exclude(self)` - Test exclusion patterns
- `setUp(self)`
- `tearDown(self)`
- `test_full_workflow(self)` - Test complete workflow: init -> scan -> report
- `test_summary_generation(self)` - Test summary report generation
- `test_baseline_update(self)` - Test updating baseline for a file
- `test_scan_logs_to_history(self)` - Test that scans are logged to history
- `setUp(self)`
- `tearDown(self)`
- `test_empty_workspace(self)` - Test behavior with empty workspace
- `test_nonexistent_file_baseline(self)` - Test getting baseline for non-existent file
- `test_file_info_for_nonexistent(self)` - Test file info for non-existent file
- `test_hash_for_nonexistent(self)` - Test hash calculation for non-existent file
- `test_binary_file_handling(self)` - Test handling of binary files

**Classes:**

- `TestDriftDatabase` - Test database operations
  - `setUp()`
  - `tearDown()`
  - `test_init_creates_tables()` - Test database initialization creates required tables
  - `test_save_and_get_baseline()` - Test saving and retrieving baselines
  - `test_get_all_baselines()` - Test retrieving all baselines
  - ... and 3 more methods
- `TestDriftDetector` - Test drift detection functionality
  - `setUp()`
  - `tearDown()`
  - `test_calculate_hash()` - Test hash calculation
  - `test_get_file_info()` - Test file info retrieval
  - `test_get_monitored_files()` - Test monitored files discovery
  - ... and 7 more methods
- `TestIntegration` - Integration tests
  - `setUp()`
  - `tearDown()`
  - `test_full_workflow()` - Test complete workflow: init -> scan -> report
  - `test_summary_generation()` - Test summary report generation
  - `test_baseline_update()` - Test updating baseline for a file
  - ... and 1 more methods
- `TestEdgeCases` - Test edge cases and error handling
  - `setUp()`
  - `tearDown()`
  - `test_empty_workspace()` - Test behavior with empty workspace
  - `test_nonexistent_file_baseline()` - Test getting baseline for non-existent file
  - `test_file_info_for_nonexistent()` - Test file info for non-existent file
  - ... and 2 more methods

### tests/test_feature23.py


Test Suite for Feature #23 - API Health Monitor


**Functions:**

- `run_tests()` - Run all tests.
- `test_creation(self)` - Test creating an API check result.
- `test_with_error(self)` - Test creating a failed check result.
- `setUp(self)` - Set up test environment.
- `tearDown(self)` - Clean up test environment.
- `test_database_initialization(self)` - Test database tables are created.
- `test_save_check_result(self)` - Test saving a check result.
- `test_get_status_empty(self)` - Test getting status with no data.
- `test_update_api_status(self)` - Test updating API status aggregation.
- `test_health_summary_empty(self)` - Test health summary with no data.
- `test_health_summary_with_data(self)` - Test health summary with data.
- `test_cleanup_old_data(self)` - Test cleaning up old data.
- `test_is_critical_api(self)` - Test critical API detection.
- `setUp(self)` - Set up test environment.
- `tearDown(self)` - Clean up test environment.
- `setUp(self)` - Set up test environment.
- `tearDown(self)` - Clean up test environment.
- `test_get_health_data(self)` - Test fetching health data.
- `test_generate_dashboard(self)` - Test dashboard generation.
- `test_default_apis_configuration(self)` - Test that default APIs are properly configured.
- `test_api_status_enum(self)` - Test API status enum values.

**Classes:**

- `TestAPICheckResult` - Test APICheckResult dataclass.
  - `test_creation()` - Test creating an API check result.
  - `test_with_error()` - Test creating a failed check result.
- `TestAPIHealthMonitor` - Test APIHealthMonitor class.
  - `setUp()` - Set up test environment.
  - `tearDown()` - Clean up test environment.
  - `test_database_initialization()` - Test database tables are created.
  - `test_save_check_result()` - Test saving a check result.
  - `test_get_status_empty()` - Test getting status with no data.
  - ... and 5 more methods
- `TestAsyncOperations` - Test async operations.
  - `setUp()` - Set up test environment.
  - `tearDown()` - Clean up test environment.
- `TestAPIDashboardGenerator` - Test APIDashboardGenerator class.
  - `setUp()` - Set up test environment.
  - `tearDown()` - Clean up test environment.
  - `test_get_health_data()` - Test fetching health data.
  - `test_generate_dashboard()` - Test dashboard generation.
- `TestIntegration` - Integration tests.
  - `test_default_apis_configuration()` - Test that default APIs are properly configured.
  - `test_api_status_enum()` - Test API status enum values.

### tests/test_feature34_retirement.py


Test Suite for Feature Retirement System (Feature #34)

Comprehensive tests for:
- Feature scanning and registration
- Health score calculation
- Retirement candidate detection
- Archive and restore functionality
- Database operations

Usage: python3 tests/test_feature34_retirement.py


**Functions:**

- `run_tests()` - Run all tests and return results.
- `test_health_score_perfect(self)` - Test perfect health score.
- `test_health_score_unused(self)` - Test unused feature health score.
- `test_health_score_with_errors(self)` - Test health score with high error rate.
- `test_retirement_risk_levels(self)` - Test retirement risk classification.
- `setUp(self)`
- `tearDown(self)`
- `test_register_feature(self)` - Test feature registration.
- `test_log_execution(self)` - Test execution logging.
- `test_get_metrics(self)` - Test metrics retrieval.
- `test_log_audit(self)` - Test audit logging.
- `setUp(self)`
- `tearDown(self)`
- `test_extract_feature_from_docstring(self)` - Test feature extraction from docstring.
- `test_extract_feature_from_filename(self)` - Test feature extraction from filename.
- `test_scan_dependencies(self)` - Test dependency scanning.
- `setUp(self)`
- `tearDown(self)`
- `test_scan_and_register(self)` - Test scanning and registering features.
- `test_analyze_features(self)` - Test feature analysis.
- `test_identify_candidates(self)` - Test retirement candidate identification.
- `test_archive_dry_run(self)` - Test archive dry run mode.
- `test_generate_rollback_script(self)` - Test rollback script generation.
- `test_get_retirement_report(self)` - Test report generation.
- `setUp(self)`
- `tearDown(self)`
- `test_full_workflow(self)` - Test complete workflow from scan to archive.

**Classes:**

- `TestFeatureMetrics` - Test FeatureMetrics dataclass and calculations.
  - `test_health_score_perfect()` - Test perfect health score.
  - `test_health_score_unused()` - Test unused feature health score.
  - `test_health_score_with_errors()` - Test health score with high error rate.
  - `test_retirement_risk_levels()` - Test retirement risk classification.
- `TestFeatureRetirementDB` - Test database operations.
  - `setUp()`
  - `tearDown()`
  - `test_register_feature()` - Test feature registration.
  - `test_log_execution()` - Test execution logging.
  - `test_get_metrics()` - Test metrics retrieval.
  - ... and 1 more methods
- `TestFeatureScanner` - Test feature scanning functionality.
  - `setUp()`
  - `tearDown()`
  - `test_extract_feature_from_docstring()` - Test feature extraction from docstring.
  - `test_extract_feature_from_filename()` - Test feature extraction from filename.
  - `test_scan_dependencies()` - Test dependency scanning.
- `TestFeatureRetirementSystem` - Test the main retirement system.
  - `setUp()`
  - `tearDown()`
  - `test_scan_and_register()` - Test scanning and registering features.
  - `test_analyze_features()` - Test feature analysis.
  - `test_identify_candidates()` - Test retirement candidate identification.
  - ... and 3 more methods
- `TestIntegration` - Integration tests for full workflow.
  - `setUp()`
  - `tearDown()`
  - `test_full_workflow()` - Test complete workflow from scan to archive.

### tests/test_feature35_capability_marketplace.py


Test Suite for Feature #35: Agent Capability Marketplace

Run with: python3 tests/test_feature35_capability_marketplace.py


**Functions:**

- `run_tests()` - Run all tests and print results
- `setUpClass(cls)` - Set up test database
- `tearDownClass(cls)` - Clean up test database
- `setUp(self)` - Create fresh registry for each test
- `test_01_register_agent(self)` - Test agent registration
- `test_02_register_capability(self)` - Test capability registration
- `test_03_discover_capabilities(self)` - Test capability discovery
- `test_04_capability_request_workflow(self)` - Test the full capability request workflow
- `test_05_get_pending_requests(self)` - Test retrieving pending requests
- `test_06_analytics(self)` - Test analytics functionality
- `test_07_capability_status_management(self)` - Test updating capability status
- `test_08_unregister_capability(self)` - Test capability unregistration
- `setUpClass(cls)`
- `tearDownClass(cls)`
- `setUp(self)`
- `test_01_advertise_capability(self)` - Test advertising a capability
- `test_02_discover_capabilities(self)` - Test discovering capabilities from other agents
- `test_03_request_capability(self)` - Test requesting a capability
- `test_04_get_pending_requests(self)` - Test getting pending requests
- `test_05_respond_to_request(self)` - Test responding to a request
- `setUpClass(cls)`
- `tearDownClass(cls)`
- `setUp(self)`
- `test_full_workflow(self)` - Test a complete marketplace workflow
- `setUpClass(cls)`
- `tearDownClass(cls)`
- `setUp(self)`
- `test_empty_discovery(self)` - Test discovering with no capabilities
- `test_nonexistent_capability(self)` - Test getting a nonexistent capability
- `test_nonexistent_request(self)` - Test getting a nonexistent request
- `test_invalid_capability_update(self)` - Test updating a nonexistent capability
- `test_multiple_agents_same_name(self)` - Test that agents can have same name (different IDs)

**Classes:**

- `TestCapabilityRegistry` - Test the core CapabilityRegistry class
  - `setUpClass()` - Set up test database
  - `tearDownClass()` - Clean up test database
  - `setUp()` - Create fresh registry for each test
  - `test_01_register_agent()` - Test agent registration
  - `test_02_register_capability()` - Test capability registration
  - ... and 6 more methods
- `TestAgentCapabilityClient` - Test the AgentCapabilityClient class
  - `setUpClass()`
  - `tearDownClass()`
  - `setUp()`
  - `test_01_advertise_capability()` - Test advertising a capability
  - `test_02_discover_capabilities()` - Test discovering capabilities from other agents
  - ... and 3 more methods
- `TestIntegration` - Integration tests for the full marketplace
  - `setUpClass()`
  - `tearDownClass()`
  - `setUp()`
  - `test_full_workflow()` - Test a complete marketplace workflow
- `TestEdgeCases` - Test edge cases and error handling
  - `setUpClass()`
  - `tearDownClass()`
  - `setUp()`
  - `test_empty_discovery()` - Test discovering with no capabilities
  - `test_nonexistent_capability()` - Test getting a nonexistent capability
  - ... and 3 more methods

### tests/test_feature37.py


Test suite for Feature #37: NewsAPI Integration


**Functions:**

- `test_imports()` - Test that modules import correctly.
- `test_newsapi_config()` - Test NewsAPI configuration.
- `test_api_availability()` - Test if API key is configured.
- `test_credibility_scoring()` - Test credibility scoring function.
- `main()` - Run all tests.

### tests/test_feature44_dashboard.py


Test suite for Feature #44: System Wide Dashboard


**Functions:**

- `run_tests()` - Run all tests and return results.
- `test_features_list_complete(self)` - Test that all 44 features are defined.
- `test_features_have_required_fields(self)` - Test that each feature has required fields.
- `test_feature_ids_unique(self)` - Test that feature IDs are unique.
- `test_feature_ids_sequential(self)` - Test that feature IDs are 1-44.
- `test_categories_defined(self)` - Test that features are organized into categories.
- `test_category_counts(self)` - Test that categories have correct feature counts.
- `test_dashboard_links_valid(self)` - Test that dashboard links point to HTML files.
- `test_generate_dashboard_html(self)` - Test dashboard HTML generation.
- `test_dashboard_html_structure(self)` - Test that generated HTML has proper structure.
- `test_collect_metrics_returns_dict(self)` - Test that collect_all_metrics returns a dictionary.
- `test_metrics_has_required_keys(self)` - Test that metrics contains all expected keys.
- `test_script_exists(self)` - Test that main script exists.
- `test_cli_exists(self)` - Test that CLI wrapper exists.
- `test_dashboard_generated(self)` - Test that dashboard HTML was generated.
- `test_symlink_created(self)` - Test that symlink was created.
- `test_dashboard_not_empty(self)` - Test that dashboard file is not empty.
- `test_feature_44_is_dashboard(self)` - Test that feature 44 is the System Wide Dashboard.
- `test_feature_43_is_github_actions(self)` - Test that feature 43 is GitHub Actions Integration.
- `test_feature_1_is_activity_tracker(self)` - Test that feature 1 is Agent Activity Tracker.

**Classes:**

- `TestSystemWideDashboard` - Test cases for System Wide Dashboard.
  - `test_features_list_complete()` - Test that all 44 features are defined.
  - `test_features_have_required_fields()` - Test that each feature has required fields.
  - `test_feature_ids_unique()` - Test that feature IDs are unique.
  - `test_feature_ids_sequential()` - Test that feature IDs are 1-44.
  - `test_categories_defined()` - Test that features are organized into categories.
  - ... and 6 more methods
- `TestDashboardFiles` - Test dashboard file operations.
  - `test_script_exists()` - Test that main script exists.
  - `test_cli_exists()` - Test that CLI wrapper exists.
  - `test_dashboard_generated()` - Test that dashboard HTML was generated.
  - `test_symlink_created()` - Test that symlink was created.
  - `test_dashboard_not_empty()` - Test that dashboard file is not empty.
- `TestFeatureRegistry` - Test feature registry accuracy.
  - `test_feature_44_is_dashboard()` - Test that feature 44 is the System Wide Dashboard.
  - `test_feature_43_is_github_actions()` - Test that feature 43 is GitHub Actions Integration.
  - `test_feature_1_is_activity_tracker()` - Test that feature 1 is Agent Activity Tracker.

### tests/test_incident_playbook.py


Test Suite for Incident Response Playbook
Validates all components of the incident response system


**Functions:**

- `main()` - Run test suite
- `__init__(self)`
- `test_database_initialization(self)` - Test 1: Database is properly initialized
- `test_playbook_loading(self)` - Test 2: Playbooks are loaded correctly
- `test_incident_detection(self)` - Test 3: Incident detection works
- `test_system_resource_check(self)` - Test 4: System resource checking
- `test_healing_action_execution(self)` - Test 5: Healing action execution
- `test_incident_recording(self)` - Test 6: Incident recording to database
- `test_escalation_detection(self)` - Test 7: Escalation detection logic
- `test_summary_generation(self)` - Test 8: Summary generation
- `test_response_cycle(self)` - Test 9: Full response cycle
- `test_file_structure(self)` - Test 10: Required files exist
- `_pass(self, message)` - Record a passing test
- `_fail(self, message)` - Record a failing test
- `run_all_tests(self)` - Run all tests

**Classes:**

- `TestIncidentResponse` - Test suite for incident response system
  - `__init__()`
  - `test_database_initialization()` - Test 1: Database is properly initialized
  - `test_playbook_loading()` - Test 2: Playbooks are loaded correctly
  - `test_incident_detection()` - Test 3: Incident detection works
  - `test_system_resource_check()` - Test 4: System resource checking
  - ... and 9 more methods

### tests/test_model_fallback.py


Test Suite for Multi-Model Fallback System - Feature #42


**Functions:**

- `run_tests()` - Run all tests and generate report.
- `setUpClass(cls)` - Set up test environment.
- `tearDownClass(cls)` - Clean up test environment.
- `setUp(self)` - Set up each test.
- `test_01_database_initialization(self)` - Test database is properly initialized.
- `test_02_model_loading(self)` - Test models are loaded correctly.
- `test_03_tier_mapping(self)` - Test task to tier mapping.
- `test_04_routing_decision_simple(self)` - Test basic routing decision.
- `test_05_routing_decision_code(self)` - Test routing for code tasks.
- `test_06_routing_with_preferred(self)` - Test routing with preferred model.
- `test_07_routing_fallback_chain(self)` - Test fallback chain is populated.
- `test_08_health_tracking_initialization(self)` - Test health tracking is initialized.
- `test_09_health_update_success(self)` - Test health update on success.
- `test_10_health_update_failure(self)` - Test health update on failure.
- `test_11_health_recovery(self)` - Test health recovery after failures.
- `test_12_routing_avoids_unhealthy(self)` - Test routing avoids unhealthy models.
- `test_13_stats_calculation(self)` - Test statistics calculation.
- `test_14_routing_decision_logging(self)` - Test routing decisions are logged.
- `test_15_cost_estimation(self)` - Test cost estimation in routing.
- `test_16_config_save_load(self)` - Test configuration save and load.
- `test_17_tier_escalation(self)` - Test tier escalation when models unavailable.
- `test_18_complexity_override(self)` - Test complexity override in routing.
- `setUpClass(cls)` - Set up integration test environment.
- `tearDownClass(cls)` - Clean up.
- `test_end_to_end_routing(self)` - Test end-to-end routing flow.

**Classes:**

- `TestModelFallbackManager` - Test cases for ModelFallbackManager.
  - `setUpClass()` - Set up test environment.
  - `tearDownClass()` - Clean up test environment.
  - `setUp()` - Set up each test.
  - `test_01_database_initialization()` - Test database is properly initialized.
  - `test_02_model_loading()` - Test models are loaded correctly.
  - ... and 16 more methods
- `TestIntegration` - Integration tests.
  - `setUpClass()` - Set up integration test environment.
  - `tearDownClass()` - Clean up.
  - `test_end_to_end_routing()` - Test end-to-end routing flow.

### tests/test_network_mesh.py


Test Suite for Self-Healing Network Mesh (Feature #31)
======================================================

Tests for:
- Network mesh initialization
- Node registration and health tracking
- Route calculation
- Self-healing actions
- Dynamic routing

Usage:
    python3 tests/test_network_mesh.py


**Functions:**

- `run_tests()` - Run all tests
- `test_node_creation(self)` - Test creating a mesh node
- `test_heartbeat_tracking(self)` - Test heartbeat recording
- `test_missed_heartbeat_threshold(self)` - Test missed heartbeat threshold
- `test_health_checks(self)` - Test health status checks
- `test_request_tracking(self)` - Test request success/failure tracking
- `setUp(self)` - Reset mesh before each test
- `test_default_nodes_created(self)` - Test that default nodes are created
- `test_register_node(self)` - Test node registration
- `test_unregister_node(self)` - Test node unregistration
- `test_heartbeat_recording(self)` - Test heartbeat recording
- `test_get_healthy_nodes(self)` - Test getting healthy nodes
- `test_get_node_by_capability(self)` - Test finding node by capability
- `test_route_calculation(self)` - Test route calculation
- `test_topology_generation(self)` - Test topology generation
- `test_initial_state(self)` - Test initial circuit state
- `test_failure_counting(self)` - Test failure counting
- `test_success_resets_failures(self)` - Test that success resets failure count
- `test_half_open_transition(self)` - Test transition to half-open
- `setUp(self)` - Reset state before each test
- `test_route_by_capability(self)` - Test routing by capability
- `test_route_message(self)` - Test message routing
- `test_circuit_breaker_blocks_routing(self)` - Test that open circuit blocks routing
- `test_route_stats(self)` - Test route statistics
- `setUp(self)` - Reset state before each test
- `test_action_creation(self)` - Test healing action creation
- `test_collect_metrics(self)` - Test metrics collection
- `test_node_health_report(self)` - Test node health report generation
- `test_health_report_generation(self)` - Test full health report generation
- `setUp(self)` - Reset all state
- `test_full_workflow(self)` - Test full workflow: heartbeat -> health check -> healing -> routing
- `test_failover_to_alternate_node(self)` - Test automatic failover to alternate node

**Classes:**

- `TestMeshNode` - Test MeshNode class
  - `test_node_creation()` - Test creating a mesh node
  - `test_heartbeat_tracking()` - Test heartbeat recording
  - `test_missed_heartbeat_threshold()` - Test missed heartbeat threshold
  - `test_health_checks()` - Test health status checks
  - `test_request_tracking()` - Test request success/failure tracking
- `TestNetworkMesh` - Test NetworkMesh class
  - `setUp()` - Reset mesh before each test
  - `test_default_nodes_created()` - Test that default nodes are created
  - `test_register_node()` - Test node registration
  - `test_unregister_node()` - Test node unregistration
  - `test_heartbeat_recording()` - Test heartbeat recording
  - ... and 4 more methods
- `TestCircuitBreaker` - Test CircuitBreaker class
  - `test_initial_state()` - Test initial circuit state
  - `test_failure_counting()` - Test failure counting
  - `test_success_resets_failures()` - Test that success resets failure count
  - `test_half_open_transition()` - Test transition to half-open
- `TestDynamicRouter` - Test DynamicRouter class
  - `setUp()` - Reset state before each test
  - `test_route_by_capability()` - Test routing by capability
  - `test_route_message()` - Test message routing
  - `test_circuit_breaker_blocks_routing()` - Test that open circuit blocks routing
  - `test_route_stats()` - Test route statistics
- `TestSelfHealingMonitor` - Test SelfHealingMonitor class
  - `setUp()` - Reset state before each test
  - `test_action_creation()` - Test healing action creation
  - `test_collect_metrics()` - Test metrics collection
  - `test_node_health_report()` - Test node health report generation
  - `test_health_report_generation()` - Test full health report generation
- `TestIntegration` - Integration tests
  - `setUp()` - Reset all state
  - `test_full_workflow()` - Test full workflow: heartbeat -> health check -> healing -> 
  - `test_failover_to_alternate_node()` - Test automatic failover to alternate node

### tests/test_nlqi.py


Test Suite for Natural Language Query Interface
Feature #33 Testing


**Functions:**

- `run_tests()` - Run the test suite
- `setUp(self)`
- `test_agent_health_queries(self)` - Test parsing agent health queries
- `test_agent_activity_queries(self)` - Test parsing agent activity queries
- `test_cost_queries(self)` - Test parsing cost analysis queries
- `test_alert_queries(self)` - Test parsing alert status queries
- `test_system_status_queries(self)` - Test parsing system status queries
- `test_help_queries(self)` - Test parsing help queries
- `test_time_filter_extraction(self)` - Test time filter extraction
- `test_severity_filter_extraction(self)` - Test severity filter extraction
- `setUp(self)`
- `test_help_execution(self)` - Test help query execution
- `test_system_status_execution(self)` - Test system status query execution
- `test_agent_health_execution(self)` - Test agent health query execution
- `test_unknown_query(self)` - Test handling of unknown queries
- `setUp(self)`
- `test_full_pipeline(self)` - Test full query pipeline

**Classes:**

- `TestQueryParsing` - Test query parsing and intent detection
  - `setUp()`
  - `test_agent_health_queries()` - Test parsing agent health queries
  - `test_agent_activity_queries()` - Test parsing agent activity queries
  - `test_cost_queries()` - Test parsing cost analysis queries
  - `test_alert_queries()` - Test parsing alert status queries
  - ... and 4 more methods
- `TestQueryExecution` - Test query execution (may require databases)
  - `setUp()`
  - `test_help_execution()` - Test help query execution
  - `test_system_status_execution()` - Test system status query execution
  - `test_agent_health_execution()` - Test agent health query execution
  - `test_unknown_query()` - Test handling of unknown queries
- `TestIntegration` - Integration tests
  - `setUp()`
  - `test_full_pipeline()` - Test full query pipeline

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

### tests/test_performance_benchmark.py


Test Suite for Performance Benchmark Suite (Feature #39)


**Functions:**

- `run_all_tests()` - Run all tests
- `setup_method(self)` - Create temp database for testing
- `teardown_method(self)` - Clean up temp database
- `test_database_initialization(self)` - Test that database initializes correctly
- `test_save_benchmark(self)` - Test saving a benchmark result
- `test_baseline_management(self)` - Test baseline creation and updates
- `test_regression_recording(self)` - Test regression recording
- `setup_method(self)` - Create temp database for testing
- `teardown_method(self)` - Clean up
- `test_benchmark_context_manager(self)` - Test the benchmark context manager
- `test_benchmark_failure_handling(self)` - Test that failed operations are recorded
- `test_system_benchmarks(self)` - Test running system benchmarks
- `test_file_io_benchmarks(self)` - Test file I/O benchmarks
- `setup_method(self)` - Create temp database with sample data
- `teardown_method(self)` - Clean up
- `test_summary_report_generation(self)` - Test markdown report generation
- `test_dashboard_data_generation(self)` - Test dashboard data generation

**Classes:**

- `TestPerformanceDatabase` - Test the PerformanceDatabase class
  - `setup_method()` - Create temp database for testing
  - `teardown_method()` - Clean up temp database
  - `test_database_initialization()` - Test that database initializes correctly
  - `test_save_benchmark()` - Test saving a benchmark result
  - `test_baseline_management()` - Test baseline creation and updates
  - ... and 1 more methods
- `TestPerformanceBenchmarker` - Test the PerformanceBenchmarker class
  - `setup_method()` - Create temp database for testing
  - `teardown_method()` - Clean up
  - `test_benchmark_context_manager()` - Test the benchmark context manager
  - `test_benchmark_failure_handling()` - Test that failed operations are recorded
  - `test_system_benchmarks()` - Test running system benchmarks
  - ... and 1 more methods
- `TestReportGenerator` - Test the ReportGenerator class
  - `setup_method()` - Create temp database with sample data
  - `teardown_method()` - Clean up
  - `test_summary_report_generation()` - Test markdown report generation
  - `test_dashboard_data_generation()` - Test dashboard data generation

### tests/test_predictive_maintenance.py


Test Suite for Predictive Maintenance Scheduler - Feature #32

Tests:
1. Health metric collection
2. Trend analysis
3. Failure prediction
4. Maintenance scheduling
5. Auto-approval logic
6. Report generation


**Functions:**

- `run_tests()` - Run all tests.
- `setUp(self)` - Set up test environment.
- `tearDown(self)` - Clean up test environment.
- `test_health_metric_creation(self)` - Test HealthMetric dataclass.
- `test_trend_analysis_insufficient_data(self)` - Test trend analysis with insufficient data.
- `test_trend_analysis_stable(self)` - Test trend analysis with stable metrics.
- `test_trend_analysis_degrading(self)` - Test trend analysis with degrading metrics.
- `test_optimal_window_calculation(self)` - Test optimal maintenance window calculation.
- `test_impact_score_calculation(self)` - Test business impact score calculation.
- `test_auto_approval_logic(self)` - Test auto-approval logic.
- `test_maintenance_window_creation(self)` - Test maintenance window creation.
- `test_prediction_generation(self)` - Test failure prediction generation.
- `test_report_generation(self)` - Test maintenance report generation.
- `test_state_persistence(self)` - Test state saving and loading.
- `setUp(self)` - Set up integration test.
- `tearDown(self)` - Clean up.
- `test_full_cycle(self)` - Test full maintenance cycle.

**Classes:**

- `TestPredictiveMaintenance` - Test cases for Predictive Maintenance Scheduler.
  - `setUp()` - Set up test environment.
  - `tearDown()` - Clean up test environment.
  - `test_health_metric_creation()` - Test HealthMetric dataclass.
  - `test_trend_analysis_insufficient_data()` - Test trend analysis with insufficient data.
  - `test_trend_analysis_stable()` - Test trend analysis with stable metrics.
  - ... and 8 more methods
- `TestIntegration` - Integration tests for full workflow.
  - `setUp()` - Set up integration test.
  - `tearDown()` - Clean up.
  - `test_full_cycle()` - Test full maintenance cycle.

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

### weekly-report/scripts/generator.py


Weekly Report Generator - Feature #18
Aggregates data from all 17 previous features into comprehensive weekly summaries.


**Functions:**

- `main()` - Main entry point.
- `__init__(self, workspace_path: str)`
- `generate_report(self) -> str` - Generate the complete weekly report.
- `_collect_metrics(self) -> WeeklySummary` - Collect metrics from all data sources.
- `_collect_agent_metrics(self) -> Dict[<ast.Tuple object at 0x7eda6d699650>]` - Collect metrics for all 5 subagents.
- `_collect_cost_metrics(self) -> CostMetrics` - Collect cost and token usage metrics.
- `_collect_quality_metrics(self) -> QualityMetrics` - Collect content quality metrics.
- `_count_completed_tasks(self) -> int` - Count tasks completed this week.
- `_count_alerts(self) -> int` - Count alerts generated this week.
- `_get_backup_status(self) -> str` - Get latest backup status.
- `_generate_recommendations(self, summary: WeeklySummary) -> List[str]` - Generate top recommendations based on metrics.
- `_format_report(self, summary: WeeklySummary) -> str` - Format the weekly summary into a markdown report.
- `save_report(self, report: str) -> Path` - Save the report to the reports directory.

**Classes:**

- `AgentMetrics`
- `CostMetrics`
- `QualityMetrics`
- `WeeklySummary`
- `WeeklyReportGenerator` - Generates comprehensive weekly reports from all system data sources.
  - `__init__()`
  - `generate_report()` - Generate the complete weekly report.
  - `_collect_metrics()` - Collect metrics from all data sources.
  - `_collect_agent_metrics()` - Collect metrics for all 5 subagents.
  - `_collect_cost_metrics()` - Collect cost and token usage metrics.
  - ... and 7 more methods

### weekly-report/scripts/send_report.py


Weekly Report Email Sender - Sends reports to Thomas


**Functions:**

- `send_weekly_report()` - Send the latest weekly report via email.

### weekly-report/scripts/send_via_agentmail.py


Weekly Report Email Sender - Alternative using AgentMail API


**Functions:**

- `send_via_agentmail(to_email: str, subject: str, body: str) -> bool` - Send email using AgentMail API.
- `send_weekly_report()` - Send the latest weekly report via email.

## Documentation Coverage

Overall coverage: **86.6%**

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
