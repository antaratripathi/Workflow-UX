Problem Statement

Target users come to the Socialtrait platform knowing what they want to test, but lack the market research vocabulary or framework to translate their business intent into a study. This creates below compounding pain points:

Users come to the platform knowing what they want to test — “I need to pick the best ad creative” or “Is this ready to go live?” — but they don’t have a formal research objective or a formal context brief or

 they don’t know which tool to use for the concerned study. They know the use case, not the methodology.

Criteria selection and weightage for Creative Ranking is so complex that users were raising support tickets to get use cases built — a completely unscalable flow.

The result: high friction at setup, low confidence in outputs, and a platform that feels like it requires a market researcher to operate.

Solution

That user picks a use case which is the intent with which he has come on the platform, from a pre-built list. Behind the scenes, each use case maps to a pre-coded sequence of tools. This capability is called as Workflow Driven User Journey. The user only provides their assets and audience — the system handles the rest.

1. Why It Matters

For the user, this removes the single biggest barrier to getting value from the platform — the burden on the user to set up the study - formulating the RO in a specific way, selecting the right tool. 

For the business, this is a contract-renewal-level deliverable. Target's renewal is in July; the feature is targeted for end of May / early June. If Target can get quality insights with minimal effort, it is a material factor in renewal. It also unlocks the Survey tool for self-serve users for the first time, expanding the platform's qualitative-quantitative combined output capability — a frequently requested capability at Target.

2. Functional Requirements

The system must:

Step 1 — Use Case Selection

Present users with a pre-built list of use cases (initially: Pick a Winner, with Strategic Concepting as the second to build).

Each use case must display a brief one-liner description to help users self-identify the right workflow without needing MR knowledge.

For eg: Pick a Winner - Helps teams identify the strongest creative from 2 or more assets, and understand why it wins

Step 2 — Scenario / Context Selection

After selecting a use case, the user must be presented with a card-based list of scenario/context options (e.g., Email Body Creative, Social Media Post, Paid Social Ad, Landing Page, Weekly Ad, Email Subject Line).

Selecting a scenario/context provides the system with enough context to pre-configure the study

An optional Context Brief upload (PDF/DOCX) must also be available at this step.

Step 3 — Asset Upload & Audience Selection

User uploads creative asset variants (images, video, text/copy).

System must detect asset type and count automatically — this will drive tool selection in the backend.

User selects the target audience.

Step 4 — Criteria Review & Submit

Based on use case, scenario, and uploaded assets, the system must auto-suggest up to 5 evaluation criteria.

Criteria must be presented as a priority-ranked list (1st, 2nd, 3rd most important), not as percentage weights — the backend translates rankings to weights.

System should suggest criteria weightage (not default to equal weighting); user must be able to adjust.

The auto-generated research objective should be surfaced to the user for review and optional editing before submission.

User submits; the system determines and executes the appropriate tool sequence in the background.

Backend Execution Logic & Insight Report should be implemented as defined by MR team here:

https://docs.google.com/spreadsheets/d/1i6MhIYaXUnfbFW7IoRTNFkI5cICIwG8X/edit?gid=541801218#gid=541801218

Report

Report must lead with insights and recommendations — not methodology.

Methodology detail must appear as a footnote/brief appendix only (for credibility, not as the primary content).

Report format must adapt based on asset count: 2 assets = side-by-side head-to-head; 3+ assets = highlighted winner with summarised runner-up analysis.

Sample reports must be reviewed and signed off by Jyoti and Anuradha before finalisation.

UI Consistency

The 4-step flow must remain structurally identical across all use cases. Only the scenario list and recommended criteria change dynamically per use case.

3. Use Case Examples (Target confirmed use case A, rest to be confirmed by Target)

Use Case A — Pick a Winner — A/B Email Decision (2 assets) & Multi-asset Weekly Ad Selection (6 assets): 

A Target marketer is preparing a Back-to-School promotional email and has two creative options: a price-led layout vs. a lifestyle/editorial layout. She selects Pick a Winner → Email Body Creative, uploads both images, selects Busy Parents as the audience, and reviews the system-suggested criteria (Clarity of Message, Drive Conversion, Value Communication). She reorders priority to make Clarity her #1. She submits. The system runs a forced-choice survey across the persona community and returns a report leading with: "Option A wins on clarity and conversion intent; Option B scores higher on emotional resonance but does not drive click intent for this audience."

 A Target media planner has 6 creative directions for a grocery essentials weekly ad. She selects Pick a Winner → Weekly Ad, uploads all 6 assets, selects General Population. System auto-suggests 4 criteria including Capture Attention and Value Communication. She submits. The system runs Creative Ranking across all 6 to shortlist the top 3, then runs a forced-choice survey on the shortlist. The report leads with a ranked recommendation and flags that the #2 asset would outperform if the price callout were made more prominent.

Use Case B  — Launch Readiness Check (single asset) A Target designer has a near-final paid social ad for a holiday gifting campaign. She selects Launch Readiness Check → Paid Social Ad, uploads the single image, selects Busy Parents. System suggests criteria including Clarity, Trust & Credibility, Confusion Risk, and Brand Safety. She submits. FGD runs as the default tool, with Heatmap triggered because Clarity is a selected criterion. The report returns: "CONDITIONAL READY — headline registers clearly, but 'under $25' is being interpreted by some respondents as a minimum, not a cap. Recommend copy tweak before go-live."

Edge Cases to consider: @suraj 

What if a user wants to modify or re-upload a context brief after criteria have been suggested?

What if the user manually changes the criteria after the brief has shaped them, creating a conflict? 

What if user uploads a context brief which contradicts with Research objective of the use case?

Short-term solution proposed by Anushika: Add a disclaimer/warning at the point of context brief upload, instructing users to ensure the brief is aligned with the selected use case and contains no contradictions.

Longer-term solution discussed with Gomathy: Build a prompt/parsing mechanism to review the uploaded brief and flag contradictions or misalignments before the study runs. This was acknowledged as a more complex feature, likened to "MR Agent" capability, and deferred to a future version.