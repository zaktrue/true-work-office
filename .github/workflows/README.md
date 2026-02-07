# GitHub Actions CI/CD

This directory contains GitHub Actions workflows for automated testing, deployment, and repository management.

## Workflows

### 🔧 Main CI/CD Pipeline (`ci-cd-pipeline.yml`)
Triggered on push/PR to main and develop branches.

| Job | Purpose | Status |
|-----|---------|--------|
| 🔍 lint | Code quality (Black, Flake8, Bandit) | Required |
| 🐍 test-python | Python tests across versions 3.10-3.12 | Required |
| ⚙️ validate-config | JSON/YAML validation | Required |
| 🎯 test-skills | Skill system integrity checks | Required |
| 🌐 build-hugo | Hugo site build verification | Required |
| 🔗 integration-tests | Integration test suite | Required |
| 🚀 deploy | Production deployment (main only) | Manual trigger |

### 📅 Daily Health Checks (`daily-health-checks.yml`)
Scheduled daily at 06:00 UTC.

- Repository statistics
- Dependency vulnerability scanning
- Skill system health report
- Large file detection

### 🔀 PR Automation (`pr-automation.yml`)
Triggered on PR events.

- Semantic PR title validation
- PR size labeling (XS/S/M/L/XL)
- Automatic reviewer assignment
- Sensitive file detection

### 🏷️ Release Management (`release-management.yml`)
Triggered on version tags (`v*`).

- Automated changelog generation
- GitHub release creation
- Artifact building
- Production deployment

## Secrets Required

| Secret | Purpose |
|--------|---------|
| `HOSTINGER_SERVER` | Deployment server hostname |
| `HOSTINGER_SSH_USER` | SSH username |
| `HOSTINGER_SSH_KEY` | SSH private key |
| `HOSTINGER_PORT` | SSH port (default: 65002) |
| `GITHUB_TOKEN` | Auto-provided for GitHub API |

## Local Testing

Run the validation scripts locally:

```bash
# Python syntax check
python -m py_compile agent_memory.py

# JSON validation
python -c "import json; json.load(open('config.json'))"

# YAML validation
python -c "import yaml; yaml.safe_load(open('.github/workflows/ci-cd-pipeline.yml'))"
```

## Badges

Add to README.md:
```markdown
![CI/CD](https://github.com/zaktrue/true-work-office/actions/workflows/ci-cd-pipeline.yml/badge.svg)
```

## Feature #43

Implemented: 2026-02-07
- Comprehensive CI/CD pipeline
- Automated testing matrix
- Security scanning
- Daily health checks
- PR automation
- Release management
