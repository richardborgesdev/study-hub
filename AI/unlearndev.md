# Unlearn dev course

## Workflows

### Spec a Product Before AI Builds It
1. Why planning beats vibe coding
    1. Spec development + example reference
1. Turn a vague idea into a structured spec
    1. create initial specification file (claude, chatGPT, gemini)
    1. add supporting docs (files, examples, references)
    1. source of truth
1. Shaping the Specification
1. Give AI Technical Constraints from Day One
    1. stack definition
1. Tell AI what its not allowed to build
1. Use AI Mockups to Expose Gaps in Your Spec
1. Have AI Poke Holes in Your Plan
1. What Might We Have Missed?
1. From Spec to Features
    1. https://github.com/unlearndev/skills/tree/main/skills
    1. https://unlearn-specaudit.on-forge.com/
1. Scaffolding the Boilerplate
    ```text
    Generate a Claude Code prompt to create an overall app layout for our project, including logo (text based), menu items, new suggestion button, and main slot content area. This should be design based only and not functional yet. We're scaffolding our boilerplate.
    ```
### Design a Feature AI Can Execute Without Guessing
1. Give every feature its own spec
    ```markdown
    Extract the feature [feature] from features.md into its own markdown document, feature-[FEATURE_NAME].md.
    Instructions:
    - Preserve the original intent of the feature
    - Pull in any relevant requirements, constraints, assumptions, dependencies, edge cases, and related notes from elsewhere in features.md or spec.md
    - Exclude unrelated features or implementation details that do not directly support this feature
    - Rewrite the extracted feature into a clean, structured spec that is easier to plan in detail
    Output format:
    # [Feature Name]
    ## Summary
    A short plain-English summary of the feature and its purpose.
    ## Goals
    Clear outcomes this feature should achieve.
    ## Requirements
    Functional requirements only for this feature.
    Do not start designing the solution yet
    Do not propose any low level technical decisions
    ```
1. Lock In Technical Decisions Before AI Makes Them for You
1. Choosing What's Out of Scope
1. Break the Feature into Steps You Can Review
1. Preview How AI Will Build Each Step
1. Why Add Tests Before Features?
1. Write Your Test Plan Before the Code

### Build Featurse with an AI Agent
1. Guardrails Before AI Generated Code
    1. lint, static analysis, testing framework
1. Navigating Your AI Agent
    1. permissions
    1. plan mode
    1. context
    1. targeted file selection
    1. model and effort selection
1. Start with AGENTS.md
    1. coding standards
    1. development philosophy
    1. preferred tools and packages
    1. the project stack
    1. https://github.com/unlearndev/agent-starters
1. Implementing Tests Before AI Generated Code
    1. TDD
1. Using Hooks as Part of Our Workflow
    1. instructions in AGENTS.md to define the expected checks
    1. project-level hooks to run those checks after changes are made
1. Reviewing and Refining Agent Decisions
    1. update defined rules when getting errors during generation
1. Rapid Review and Refine Cycle
    1. fix and add rules to AGENTS.md (conventions)
1. Planning Inside Your Agent
    1. Removing anything out of scope
    1. Clarifying what vague steps actually mean
    1. Simplifying the UI
    1. Catching scope creep before it turns into extra work
1. Small, Focused Branches
    1. Small changes for easy review
    1. Release PR idea
1. Picking up Where You Left Off
    1. Create plan based on PR breaks, save the plan
    1. Create checklists
    1. Create other types of status that help the plan execution
    1. Agent should be able to continue the plan without the previous context
1. Local Code Reviews Without Humans
    1. Skill to review code
1. Using Checklists
    1. https://github.com/unlearndev/skills
    1. Review skill should create a backlog of fixes

### Reviewing AI Written Code
1. Why AI Code Fails (and Where to Always Look First)
    1. Error handling
    1. Input boundaries
    1. External or API calls
    1. State mutations
    1. Assumed dependencies
1. Structure a Code Review So Nothing Slips Through
    1. Types and interfaces first
    1. Data flow second
    1. Business logic third
    1. Edge cases last
    1. method: Claim -> Verify -> Trace
1. Break Code Before Users Do
    1. ZOMBIES heuristic
        1. Zero — what happens with nothing? Zero items, zero length, zero value
        1. One — what about exactly one? One character, one item, one result
        1. Many — what about too many? Hundreds, thousands, or more
        1. Boundaries — what about the edges? Just over the limit, just under, exactly at
        1. Interfaces — what about the handoffs? Does data survive crossing from one component to another?
        1. Exceptions — what errors can occur? Are they handled?
        1. Simple — does the basic happy path even work?
1. Reverse-Engineer Code You Didn't Write
    1. ask AI to explain the code
    1. questions: reason, happy path, one shot or modified
    1. what, why, how
1. Decide What Not to Review
    1. https://github.com/unlearndev/skills/blob/main/skills/triage/SKILL.md
    1. High risk → deep review. Business logic, auth, data mutations, payments, user data. Full Claim → Verify → Trace. Spend 80% of your time here.
    1. Medium risk → scan and verify. Route handlers, validation, state management. Run the First Five checklist.
    1. Low risk → skim for red flags. Config, boilerplate, CRUD, styling. Look for hardcoded secrets and obviously wrong values.
1. Identify Dangerous Side Effects
    1. Intentional? Should this function be doing this, or did AI sneak it in?
    1. Idempotent? If it runs twice (retry, race condition, double-click), does it cause duplicate emails, double charges, or duplicate records?
    1. Guarded? If the side effect fails, does the rest of the operation continue in a broken state?
1. AI Code Security: The Five Checks That Matter
    1. Unsanitized user input. Data from the user goes straight into queries or templates without cleaning. This is how injection attacks happen, and AI produces it constantly.
    1. Overly permissive auth. CORS set to , API routes with no auth, middleware that checks login but not whether the user can access this specific resource.
    1. Hardcoded secrets. API keys and credentials sitting in the source code. AI doesn't think about secret management.
    1. Missing rate limiting. Endpoints wide open to brute force, scraping, and abuse.
    1. Auth ≠ authorization. Code checks who you are but not what you're allowed to do. A user can access another user's data by changing an ID in the URL.
1. AI-Generated Tests: When Green Doesn't Mean Good
    1. Tautological tests. Sets up a mock to return a value, then asserts that value was returned. The test is testing itself, not the code. Delete the implementation and the test still passes.
    1. Happy-path-only. Every test uses valid, well-formed input. No edge cases, no error scenarios. Proves the code works when everything goes right — the one scenario you don't need tests for.
    1. Implementation-coupled. Breaks when you refactor, doesn't break when the code produces wrong results. Tests how the code works instead of what it does.
    1. Snapshot/copy-paste. Nearly identical test blocks with minor variations. Looks comprehensive, covers very little.
1. Reviewing AI's Dependency Choices
