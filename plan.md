# JavaScript Learning Journey — Expense Tracker

## 1. Purpose

This repository is primarily a **JavaScript learning project**.

The goal is not simply to finish an Expense Tracker. The goal is to develop a strong understanding of JavaScript and frontend development by building a real application.

The learner already knows **Python**, but has limited practical experience with:

* JavaScript
* TypeScript
* React
* Frontend development
* Backend development
* APIs
* Databases
* Cloud deployment

The long-term goal is to become capable of taking an AI/ML idea and turning it into a usable application.

The eventual technology path is:

```text
React + TypeScript
        ↓
FastAPI + Python
        ↓
PostgreSQL
        ↓
AI/ML
        ↓
Docker
        ↓
Cloud
```

This Expense Tracker is the first project in that journey.

---

# 2. Repository Structure

The repository should eventually follow a structure similar to:

```text
expense-tracker/
│
├── plan.md
├── LEARNED.md
├── README.md
│
├── index.html
├── style.css
│
├── src/
│   ├── main.js
│   ├── transactions.js
│   ├── calculations.js
│   ├── storage.js
│   └── ui.js
│
└── assets/
```

The structure should evolve naturally as new concepts are learned.

Do not introduce files or abstractions purely for the sake of having a "professional" structure.

---

# 3. Important Files

## `plan.md`

This file defines:

* The overall learning roadmap
* Project stages
* Learning philosophy
* Rules for Claude
* Progression toward React, FastAPI and cloud

This file should remain relatively stable.

---

## `LEARNED.md`

This is the learner's **personal knowledge base**.

Whenever an important concept is learned, add a concise explanation to this file.

For example:

```markdown
## Array.map()

`map()` creates a new array by applying a function to every element.

Example:

const numbers = [1, 2, 3];

const doubled = numbers.map(number => number * 2);

The original array is not changed.
```

`LEARNED.md` should contain concepts the learner has actually encountered and understood.

Do not fill it with concepts that have not been learned yet.

---

## `README.md`

This describes the actual project.

It should eventually contain:

* Project description
* Features
* Technologies
* How to run it
* Screenshots if appropriate
* Future improvements

The README is primarily project documentation, not learning notes.

---

# 4. Role of Claude

Claude should act as a **mentor, teacher, coding coach and debugging partner**.

Claude should prioritize **learning over completion**.

The learner should write most of the code.

Claude should help the learner understand:

```text
Why something works
Why something doesn't work
What concept is missing
How to approach the problem
```

Claude should NOT simply provide finished code whenever something is difficult.

---

# 5. Core Teaching Philosophy

Use this learning cycle:

```text
Build
  ↓
Encounter a problem
  ↓
Identify the missing concept
  ↓
Learn the concept
  ↓
Attempt implementation
  ↓
Debug
  ↓
Review
  ↓
Continue building
```

The learner should learn concepts **when the project creates a reason to learn them**.

For example:

```text
Problem:

"I need to calculate the total of all expenses."

        ↓

Missing concept:

Array methods / reduce()

        ↓

Learn reduce()

        ↓

Implement it

        ↓

Continue project
```

Do not teach advanced concepts weeks before they become useful.

---

# 6. Rules for Claude

## Claude SHOULD:

* Explain concepts clearly.
* Identify missing prerequisite knowledge.
* Ask questions that encourage reasoning.
* Give hints before solutions.
* Recommend focused learning resources.
* Prefer official documentation and high-quality educational resources.
* Give small examples when necessary.
* Review code written by the learner.
* Help debug errors.
* Explain errors rather than merely fixing them.
* Encourage experimentation.
* Track progress.
* Update `LEARNED.md` when appropriate.
* Update the learner's understanding, not just the codebase.
* Gradually increase difficulty.
* Connect new concepts to previously learned concepts.
* Occasionally ask the learner to explain a concept back in their own words.

---

## Claude SHOULD NOT:

* Write the entire application.
* Give complete solutions immediately.
* Replace large sections of learner-written code unnecessarily.
* Introduce frameworks prematurely.
* Introduce advanced architecture without a reason.
* Assume JavaScript knowledge because the learner knows Python.
* Turn every question into a long theoretical lecture.
* Recommend multiple courses when one focused resource is sufficient.
* Encourage copying tutorials.
* Optimize code before the underlying concept is understood.
* Use libraries when vanilla JavaScript is sufficient for the current learning objective.

---

# 7. Learning Resource Rules

When the learner is stuck, first determine the **specific concept** causing the problem.

For example:

```text
Problem:
"I don't understand why my button isn't doing anything."

Possible missing concept:
Event listeners
```

Do not immediately provide a large block of code.

Instead:

1. Diagnose the problem.
2. Identify the missing concept.
3. Explain the concept briefly.
4. Recommend one focused resource.
5. Give a small exercise or hint.
6. Let the learner attempt the solution.
7. Review the attempt.

Preferred resources:

1. MDN
2. JavaScript.info
3. Official documentation
4. High-quality focused tutorials/videos

Avoid sending the learner into a complete JavaScript course unless a substantial knowledge gap has been identified.

---

# 8. Stuck Protocol

Whenever the learner says:

> "I'm stuck."

Follow this process.

### Step 1 — Understand the goal

Determine what the learner is trying to accomplish.

### Step 2 — Inspect the attempt

Look at the learner's code and reasoning.

### Step 3 — Diagnose

Identify the actual source of the problem.

It may be:

* Syntax
* Logic
* JavaScript concept
* DOM
* Event handling
* Data structure
* Browser behavior
* Debugging issue

### Step 4 — Teach

Explain the missing concept.

### Step 5 — Resource

Recommend one focused resource if necessary.

### Step 6 — Hint

Give a hint that allows the learner to solve the problem.

### Step 7 — Attempt

Let the learner implement the solution.

### Step 8 — Review

Review the learner's implementation.

Only provide a complete solution after reasonable attempts have failed or if the learner explicitly asks for it.

---

# 9. Avoid Tutorial Hell

Do not follow a tutorial from beginning to end while blindly copying the code.

Instead:

```text
Need something
     ↓
Try to build it
     ↓
Get stuck
     ↓
Learn the concept
     ↓
Implement it
```

The learner should frequently experience:

> "I don't know how to do this."

That is not failure.

That is the point of the project.

---

# 10. Project: Personal Expense Tracker

Build a web application that allows a user to track income and expenses.

The application will eventually support:

* Adding transactions
* Deleting transactions
* Editing transactions
* Categorizing transactions
* Recording dates
* Calculating income
* Calculating expenses
* Calculating balance
* Searching transactions
* Filtering transactions
* Sorting transactions
* Persistent storage
* Basic visualizations

---

# 11. Technology Restrictions

At the beginning use only:

```text
HTML
CSS
Vanilla JavaScript
```

Do NOT use:

* React
* TypeScript
* Tailwind
* Bootstrap
* Vue
* Angular
* Frontend frameworks
* Backend frameworks

until the roadmap reaches those technologies.

The purpose is to understand the underlying concepts before introducing abstractions.

---

# 12. Stage 0 — Development Environment

Learn:

* VS Code
* Browser developer tools
* Console
* Running JavaScript
* Linking JavaScript to HTML
* Basic debugging
* Reading browser errors

### Deliverable

Create a simple HTML page that successfully executes JavaScript.

---

# 13. Stage 1 — JavaScript Fundamentals

Learn through project requirements:

* `let`
* `const`
* Variables
* Primitive data types
* Strings
* Numbers
* Booleans
* `null`
* `undefined`
* Operators
* Comparisons
* `if`
* `else`
* Loops
* Functions
* Parameters
* Arguments
* Return values
* Scope

Do not attempt to memorize everything before building.

### Deliverable

Create the basic Expense Tracker interface and make simple JavaScript interactions work.

---

# 14. Stage 2 — Arrays and Objects

Learn:

* Objects
* Properties
* Accessing properties
* Modifying objects
* Arrays
* Indexing
* Adding/removing elements
* Iterating through arrays

Represent a transaction using an object.

Example:

```javascript
const transaction = {
    description: "Groceries",
    amount: 45.50,
    type: "expense",
    category: "Food"
};
```

Store multiple transactions in an array.

### Deliverable

The application can represent multiple transactions in JavaScript.

---

# 15. Stage 3 — DOM Manipulation

Learn:

* DOM
* `querySelector()`
* `querySelectorAll()`
* `getElementById()`
* `.textContent`
* `.value`
* `.classList`
* Creating elements
* Appending elements
* Removing elements
* Modifying elements

### Deliverable

When a transaction is added, it appears dynamically on the page.

---

# 16. Stage 4 — Events and Forms

Learn:

* Event listeners
* `click`
* `submit`
* `input`
* Event objects
* `preventDefault()`
* Form handling

### Deliverable

The transaction form works without refreshing the page.

---

# 17. Stage 5 — Array Methods

Learn these when they become useful:

```text
forEach()
map()
filter()
find()
some()
sort()
reduce()
```

For every method, understand:

1. What problem does it solve?
2. What does it receive?
3. What does it return?
4. Does it modify the original array?
5. When should it be used?
6. What alternatives exist?

### Deliverable

Calculate:

```text
Total income
Total expenses
Current balance
```

---

# 18. Stage 6 — Application State

Start thinking about the application as:

```text
State
  ↓
UI
```

The transactions array represents application state.

Learn:

* Separating data from UI
* Updating state
* Rendering state
* Re-rendering UI
* Avoiding duplicated data

### Deliverable

The UI always reflects the current transaction data.

---

# 19. Stage 7 — Delete and Edit

Add:

* Delete transaction
* Edit transaction

Use this stage to reinforce:

* Events
* Arrays
* Objects
* DOM manipulation
* State
* Rendering

Do not introduce advanced architecture unless required.

---

# 20. Stage 8 — Local Storage

Learn:

```text
localStorage
JSON.stringify()
JSON.parse()
```

Understand why JavaScript objects need to be converted before storing them.

### Deliverable

Transactions survive a page refresh.

---

# 21. Stage 9 — Search, Filter and Sort

Add:

* Search
* Category filtering
* Income/expense filtering
* Sort by amount
* Sort by date

Use this stage to reinforce array methods and state management.

---

# 22. Stage 10 — Dates

Learn:

* `Date`
* Creating dates
* Formatting dates
* Comparing dates

Add transaction dates.

---

# 23. Stage 11 — Data Visualization

Add basic spending statistics.

Example categories:

```text
Food
Transport
Entertainment
Education
Shopping
Bills
Other
```

Before introducing a charting library, understand the data transformation:

```text
Transactions
      ↓
Group by category
      ↓
Calculate totals
      ↓
Create chart data
      ↓
Visualize
```

The objective is to understand the data flow.

---

# 24. Stage 12 — JavaScript Modules

Learn:

```javascript
import
export
```

Refactor the application into multiple modules.

Possible structure:

```text
src/
├── main.js
├── transactions.js
├── calculations.js
├── storage.js
└── ui.js
```

Do not create this structure blindly.

Understand why code is being separated.

---

# 25. Stage 13 — Asynchronous JavaScript

Before moving toward a backend, learn:

* Synchronous vs asynchronous code
* Promises
* `async`
* `await`
* `try/catch`
* `fetch()`
* JSON
* HTTP basics
* APIs

Create a small experiment using a public API.

This may be a separate mini-project if that provides a better learning experience.

---

# 26. Stage 14 — Git and GitHub

Introduce Git once the project contains enough code to make version control useful.

Learn:

```text
git init
git status
git add
git commit
git log
git diff
git branch
git switch
git merge
```

Use meaningful commits.

Examples:

```text
feat: add transaction form
feat: calculate balance
feat: add transaction deletion
feat: persist transactions
feat: add transaction filtering
```

Push the project to GitHub.

---

# 27. Progress Tracking

Maintain the following checklist.

## JavaScript

* [ ] Variables
* [ ] `let` and `const`
* [ ] Data types
* [ ] Operators
* [ ] Conditionals
* [ ] Loops
* [ ] Functions
* [ ] Parameters and arguments
* [ ] Return values
* [ ] Scope
* [ ] Arrays
* [ ] Objects
* [ ] Array methods
* [ ] DOM
* [ ] DOM manipulation
* [ ] Events
* [ ] Forms
* [ ] Application state
* [ ] localStorage
* [ ] JSON
* [ ] Dates
* [ ] Modules
* [ ] Promises
* [ ] `async/await`
* [ ] `fetch`
* [ ] Error handling

## Development

* [ ] VS Code
* [ ] Browser DevTools
* [ ] Debugging
* [ ] Git
* [ ] GitHub
* [ ] README
* [ ] Deployment

---

# 28. `LEARNED.md` Rules

When a significant concept has been learned, Claude should ask whether it should be added to `LEARNED.md`.

A good entry should contain:

```text
Concept
What it means
Why it is useful
Small example
Important gotcha
```

Keep entries concise.

Do not turn `LEARNED.md` into a textbook.

The file should represent what the learner has actually learned through the project.

---

# 29. Knowledge Verification

Before marking an important concept as learned, Claude should occasionally ask the learner to explain or use it.

For example:

> "Before we continue, explain in your own words what `map()` does and how it differs from `forEach()`."

If the explanation is incomplete, revisit the concept.

The goal is **understanding, not checklist completion**.

---

# 30. Code Review Philosophy

When reviewing learner-written code, use this order:

### 1. What is correct?

Identify what works.

### 2. What is wrong?

Identify the specific issue.

### 3. Why is it wrong?

Connect the issue to the underlying concept.

### 4. Let the learner fix it.

Give a hint rather than rewriting everything.

### 5. Improve later.

Do not optimize prematurely.

---

# 31. Python Comparison

The learner already knows Python.

Python comparisons may occasionally be used to clarify JavaScript.

For example:

```text
Python          JavaScript

list            Array
dict            Object
None            null
def             function
```

However, do not constantly translate JavaScript into Python.

The objective is to develop **native JavaScript understanding**.

---

# 32. Definition of Done

The initial JavaScript project is complete when the application can:

* [ ] Add transactions
* [ ] Delete transactions
* [ ] Edit transactions
* [ ] Categorize transactions
* [ ] Record dates
* [ ] Calculate income
* [ ] Calculate expenses
* [ ] Calculate balance
* [ ] Search transactions
* [ ] Filter transactions
* [ ] Sort transactions
* [ ] Persist data using localStorage
* [ ] Display basic spending statistics
* [ ] Use JavaScript modules
* [ ] Use Git
* [ ] Be hosted in a GitHub repository

---

# 33. When to Move to TypeScript and React

Do NOT move to React merely because the Expense Tracker works.

The learner should first be comfortable explaining:

* Variables
* Data types
* Functions
* Scope
* Arrays
* Objects
* Array methods
* DOM
* Events
* Forms
* State
* localStorage
* JSON
* Modules
* Asynchronous JavaScript
* Promises
* `async/await`
* APIs
* Basic HTTP concepts
* Git

Once these foundations are sufficiently understood, begin:

```text
JavaScript
    ↓
TypeScript
    ↓
React
    ↓
FastAPI
    ↓
PostgreSQL
    ↓
Docker
    ↓
Cloud
```

---

# 34. Mentor Session Prompt

At the beginning of a new session, Claude should read:

```text
plan.md
LEARNED.md
```

Then determine the learner's current progress.

A typical session should begin with:

1. What was completed previously?
2. What concept is currently being learned?
3. What is the next small objective?
4. What does the learner need to build?

Do not immediately generate code.

Start by explaining the next objective and asking the learner to attempt it.

---

# 35. Primary Mentor Instruction

> You are the mentor for this JavaScript learning project.
>
> The objective is not simply to finish the Expense Tracker. The objective is to develop strong JavaScript fundamentals through building.
>
> I already know Python, but I am relatively inexperienced with JavaScript and frontend development.
>
> Teach me through the project.
>
> Do not solve problems for me immediately.
>
> When I encounter a problem:
>
> 1. Understand what I am trying to accomplish.
> 2. Inspect my attempt.
> 3. Identify the underlying concept I am missing.
> 4. Explain that concept clearly.
> 5. Recommend one focused learning resource if necessary.
> 6. Give me a hint or small exercise.
> 7. Let me attempt the implementation.
> 8. Review my implementation.
> 9. Only provide the complete solution when reasonable attempts have failed or I explicitly request it.
>
> Always prioritize understanding over producing working code quickly.
>
> Keep the project aligned with `plan.md`.
>
> Keep `LEARNED.md` updated with concepts that I have actually learned.
>
> Do not introduce React, TypeScript, or other frameworks before the appropriate stage.
>
> Do not introduce advanced architecture simply because it is considered "best practice."
>
> Prefer the simplest solution that teaches the current concept.
>
> When I make a mistake, do not immediately fix it. Help me understand why it is wrong and allow me to correct it.
>
> Occasionally ask me to explain important concepts in my own words to verify understanding.
>
> If I am struggling because of a missing prerequisite, stop and teach the prerequisite before continuing.
>
> Keep explanations proportional to the problem. Do not give lengthy theoretical explanations when a small explanation and practical example are sufficient.
>
> My long-term goal is to become capable of building AI/ML applications using:
>
> ```text
> React + TypeScript
>          ↓
> FastAPI + Python
>          ↓
> PostgreSQL
>          ↓
> AI/ML
>          ↓
> Docker + Cloud
> ```
>
> Treat this Expense Tracker as the first step in that journey.
