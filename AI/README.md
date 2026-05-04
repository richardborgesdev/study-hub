# AI

## Claude Code 101

# What is claue code?
1. agentic tool
1. access resources
1. context window (working memory)
1. permissions
1. agentic loop
1. compacting context

### Your first prompt
1. installing claude code
    1. vs code extension
1. claude desktop
1. web
1. auto-accept, approval, plan-mode

### Daily workflows
1. explore > plan > code > commit
1. claude code chrome extension
1. context window (compacting, /compact, /clear, /context)
1. removing bias
1. skills are better than mcps
1. code reviews

### Customizing Claude Code
1. the claude.md file
    1. levels (user, project)
    1. add topics as memoires
    1. keep it compact

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
    1. notification
    1. stop
1. Claude Code SDK
    1. runs Claude Code programmatically
    ```typescript
    import { query } from "@anthropic-ai/claude-code";

    const prompt = "Look for duplicate queries in the ./src/queries dir";

    for await (const message of query({
      prompt,
    })) {
      console.log(JSON.stringify(message, null, 2));
    }
    ```

### Certificate
![claude code in action certificate](https://cc.sj-cdn.net/certificate/3n2veylcj0hl/certificate-oz8zvexkybod-1776429938.jpg?Expires=1776433642&Signature=i6cuWW72TDsQNO1HSiQChqvF-LqClVFBHZ4po44szxMh4nSEWeX8l8fRWEwKDhVqgI6DNi83kMqHot-~9zzi3uwEx0C5JDegwf16imjJ1kwrJrchvqJBg7OnUH~E602Kk2j1eKYNHfVddcRXcVEUVvxmPiHTXOrLmFcYyTjvjLfoKAVmLaMi5Ahn7mK~~HPcff41wrYj3S0rDMd1ViMR-6aR9vmupdhVHKkXwlppqjNQMJSCWpicC5IWuoiZgnC4K1gjHpiUss2pmmlYcJHgJ7u3IRTeNZ7DhuapVP-LbIkbhK~OXx8NaqjjZHyC~RNSGYLphN1-cwTn3Q0gCjUOXg__&Key-Pair-Id=APKAI3B7HFD2VYJQK4MQ)
