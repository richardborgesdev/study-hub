# AI

## Claude Code Course
[[course link]](https://anthropic.skilljar.com/claude-code-in-action)

### Introduction
1. coding assistant
![image](https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2Fa46l9irobhg0f5webscixp0bs%2Fpublic%2F1750967940%2F002_-_What_is_a_Coding_Assistant%3F_02.1750967940100.png)
1. claude code in action
    1. use case: transform a sheet in a dashboard system
    1. use case: browsing in the internet to get benchmarks
    1. use case: use terraform files to view infrastructure (github integration)

### Getting hands on
1. Claude setup
1. Project setup
1. Adding context
    1. /init > CLAUDE.md files (project, local, machine)
    1. using @
    1. screenshot to prompt
    1. plan mode
    1. thinking modes
    1. git assistant
1. Custom commands
    1. \# to add memory
    1. @ to reference a file
    1. escape + escape to access previous conversations
    1. compact to sumarize context
    1. clear to start free up of context
    1. custom \/ commands .claude/commands/audit.md
        1.  can receive arguments with $
1. MCP servers with claude code
    1. claude mcp add playwright
    1. permissions on mcp
1. Github
    1. /install-git-hub-app
    1. configure api

### Hooks nad SDK
1. /hooks to execute scripts in the project
    1. PreToolUse, PostToolUse
    1. matcher, type, command
1. Command feedback to Claude 0 - ok, 2 - tool blocked
1. matcher: Read|Grep, command: node ...
1. security is important here use envs in the hooks instead of sensive information
1. useful hook
    1. create schema
    1. query hook
