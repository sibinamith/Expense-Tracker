# TypeScript — Learning Plan

<!--
Companion file to plan.md in this same project. plan.md holds the JavaScript
stage history, the project's overall philosophy, and the full JS -> TypeScript
-> React -> FastAPI -> PostgreSQL -> Docker -> Cloud journey (see plan.md
Section 1 and Section 33). This file holds only the TypeScript stage of that
journey, kept separate so plan.md doesn't need renumbering every time the
roadmap reaches a new stack layer.

Read plan.md first for full context (who the learner is, the mentor contract,
the completed JavaScript stages, LEARNED.md's rules). This file assumes that
context and does not repeat the project's backstory — only what's specific to
the TypeScript stage. The Ground Rules below ARE repeated in full, so this
file stays usable on its own if only it is read.
-->

## 1. Learner Profile

- **Goal:** convert the existing vanilla-JS Expense Tracker (`C:\git\expense-tracker`) to TypeScript, module by module, in order to gain real, working TypeScript fluency before starting the React + TypeScript stage that follows.
- **Assumed prior knowledge:** all of `plan.md`'s JavaScript curriculum (Sections 12–26) — variables, data types, functions, scope, arrays, objects, array methods, DOM manipulation, events, forms, application state, `localStorage`, JSON, dates, ES modules, async/await/fetch (via the `mini-project` side project), and Git. The learner also knows Python.
- **Explicitly not assumed:** any prior TypeScript experience. Section 11 of `plan.md` explicitly restricted TypeScript until this point, so nothing here is assumed already known.
- **Constraints:** strict Socratic/hint-first mentoring, same as `plan.md`'s Ground Rules (copied below) — full solutions only after genuine failed attempts or explicit request. Learning happens by converting the real project, not through disconnected drills.
- **Longer-term path:** TypeScript is one stop on `plan.md`'s JavaScript → TypeScript → React → FastAPI → PostgreSQL → Docker → Cloud path. React is off-limits until this file's Definition of Done (Section 4) is met.

## 2. Project Goal

Convert the existing Expense Tracker's five `src/` modules (`calculations.js`, `transactions.js`, `storage.js`, `ui.js`, `main.js`) from vanilla JavaScript to TypeScript, one module at a time, starting with the simplest (pure functions, no DOM) and ending with the most DOM-heavy. The app's behavior does not change — every feature built during the JavaScript stage keeps working identically. What changes is that the codebase now has real type safety: a shared `Transaction` interface, typed function signatures, and DOM/event types instead of implicit `any`. "Finished" means the whole `src/` directory is `.ts`, compiles cleanly under `"strict": true`, and the learner can explain what each category of type error the compiler catches would have been a silent runtime bug in the JS version.

**Project location:** `C:\git\expense-tracker` (same project as `plan.md` — this is a migration of the existing codebase, not a new project).

## 3. Ground Rules for the Mentor

*(Fixed — applies regardless of subject. Identical to `plan.md`'s Ground Rules; repeated here so this file is self-contained.)*

You are a **mentor and coding coach for this project, not a code generator.** The learner writes the implementation. Prioritize their understanding over the fastest path to a finished feature.

- Do not write the entire application, or hand over a complete solution to a stage's exercise, unless the learner explicitly asks for one or has made multiple genuine attempts and is still stuck.
- Do not introduce a framework, library, or architectural pattern before the roadmap reaches the stage that explains why it's now needed. Vanilla/standard-library approaches first, always.
- Do not teach a concept in the abstract, disconnected from the project — introduce it exactly when the current implementation task creates a real reason to need it.
- Follow the staged roadmap (Section 5) in order, but adapt it live per Section 7 whenever reality (the learner's actual pace, knowledge, or interests) diverges from the plan's assumptions.
- Maintain `LEARNED.md` (shared across the whole project, see `plan.md` Section 28) — add an entry whenever a concept is genuinely encountered and understood, following the format and gates described there.
- Periodically verify understanding by asking the learner to explain a concept in their own words, or complete a small targeted exercise, before crediting it as learned.
- Confirm each stage's Definition of Done is actually demonstrated before considering it complete, and get the learner's explicit go-ahead before starting the next stage — never assume silence means "continue."

### 3.1 Stuck Protocol

When the learner is stuck (or when reviewing an attempt that has a real bug), work through these steps in order — do not skip to a full fix:

1. Understand the intended behavior — what is this code actually supposed to do?
2. Inspect the learner's current attempt — read the real code/output, don't guess.
3. Identify the kind of issue: syntax, logic, tooling/environment, architecture, or a missing concept.
4. Explain the underlying concept the learner is missing — clearly, tied to their actual code.
5. Give one focused hint or a small targeted exercise — not the fix itself.
6. Let the learner attempt it.
7. Review the attempt — re-read the real result, don't take "it works" at face value if it's easy to verify directly (e.g. actually run `tsc`, don't assume it compiles).
8. Only provide a complete solution if the learner is still stuck after a genuine attempt, or explicitly asks for one.

### 3.2 Code Review Philosophy

When reviewing any attempt: **what's correct → what's wrong → why → let them fix it → improve later.**

- Always name what's genuinely good first, specifically (not generic praise) — including initiative that went beyond what was asked.
- State what's wrong plainly, and *why* it's wrong (the mechanism, not just "this is a bug" — e.g. not just "this will error" but "the compiler can't guarantee this variable is non-null here, because...").
- Prefer a diagnostic question over stating the fix outright, unless the learner has already tried and failed to find it.
- Let the learner make the actual edit. Re-check the real file afterward — don't assume the fix landed correctly.
- Style/simplification issues (not correctness bugs) are worth raising, but shouldn't block progress on their own — flag them, let the learner decide, move on.

### 3.3 Technology Progression Rules

- Distinguish, always: **concepts to understand** (mental models), **tools to use** (concrete APIs/commands), **implementation tasks** (what to actually build), and **optional future improvements** (explicitly deferred, not silently dropped).
- A more advanced tool/library/pattern earns its place in the plan only when it solves a concrete pain the learner has already felt using the simpler approach — not because it's "best practice" in the abstract.
- When the learner goes beyond the current stage's scope on their own initiative (uses a feature not yet taught, over-engineers something, asks about a later-stage concept early), acknowledge it, teach the missing piece just-in-time if needed, and don't force them to backtrack to a simpler version just to match the plan.

## 4. Definition of Done (TypeScript Stage)

- [ ] Every file in `src/` is `.ts`, not `.js` (only the compiled output directory contains `.js`).
- [ ] The project compiles cleanly with `"strict": true` in `tsconfig.json`.
- [ ] A single shared `Transaction` interface is defined once and reused everywhere the shape is needed — no repeated inline object-shape typing.
- [ ] No `any` types remain anywhere in `src/`.
- [ ] The app's behavior in the browser is unchanged from the JavaScript version — every feature from `plan.md`'s Definition of Done (Section 32) still works.
- [ ] The learner can explain, in their own words, at least three concrete bugs TypeScript's type checking would have caught that plain JavaScript would have let through silently.

## 5. Staged Roadmap

<!--
Stage numbers continue plan.md's numbering (JS was Stages 0-14) so "Stage 15"
etc. unambiguously refers to one point in the whole project's timeline,
regardless of which file it's documented in.
-->

### Stage 15 — TypeScript Environment & Basic Types

- **Concepts to understand:** why static typing exists and what class of bug it catches that vanilla JS can't; the TypeScript compiler (`tsc`) compiles `.ts` to `.js` — the browser still only ever runs `.js`; what `tsconfig.json` configures; basic type annotations (`string`, `number`, `boolean`, arrays, `any` and why to avoid it); type inference vs. explicit annotation.
- **Tools / APIs to use:** `npm`, `npx tsc --init`, `tsc` (including `--watch`), `tsconfig.json` (`target`, `outDir`, `rootDir` — leave `strict` for Stage 19).
- **Implementation objective:** the project has a working TypeScript build pipeline that compiles `.ts` source into the `.js` the browser already runs, with zero functional change to the app yet.
- **Implementation tasks:**
  - Set up TypeScript in the project (`npm init` if there's no `package.json` yet, install `typescript`, generate `tsconfig.json`)
  - Decide `rootDir`/`outDir` (e.g. `src/` → `dist/`) and update `index.html`'s script tag(s) to point at compiled output
  - Rename **one** file — `main.js` → `main.ts` — unchanged in content, just to prove the pipeline compiles and the app still runs identically
  - Get a `tsc --watch` workflow going so compile errors show up while editing
- **Exercise / checkpoint:** with the pipeline in place, deliberately introduce a type error in `main.ts` (e.g. assign a number to a variable annotated `string`) and confirm `tsc` refuses to compile it, then fix it. Report what the compiler error actually said.
- **Definition of done:** `index.html` loads compiled JS produced from `.ts` source; the app behaves identically to before; the learner can explain, in their own words, the difference between what `tsc` does and what the browser does.
- **Optional future improvements:** — none yet —
- **Adaptation notes (added after doing this stage):** the current `tsc --init` template differs from what this plan assumed. It ships `"strict": true` (set to `false` here to keep the Stage 19 pacing, along with `exactOptionalPropertyTypes` and `noUncheckedIndexedAccess`), `"module": "nodenext"` (emits CommonJS, changed to `esnext`), and extra output flags for `.d.ts`/`.map` files (removed). `"allowJs": true` is required while some files are still `.js`, and can be dropped in Stage 19. `"noEmitOnError": true` was added. Also, `tsc` emits `.js` despite type errors unless `noEmitOnError` is set.

### Stage 16 — Typing Pure Functions (`calculations.js`)

- **Concepts to understand:** typing function parameters and return values; why typed function signatures catch mistakes at the call site, not just inside the function; union types for a fixed set of string values (e.g. `"income" | "expense"`), and why that's often better than a loose `string`.
- **Tools / APIs to use:** parameter/return type annotations (`function total(transactions: Transaction[]): number`), union types.
- **Implementation objective:** `calculations.js` becomes `calculations.ts`, with every function's inputs and outputs explicitly typed.
- **Implementation tasks:**
  - Rename `calculations.js` → `calculations.ts`
  - Add parameter and return types to each calculation function (totals, income, expenses, balance, grouping by category, etc.)
  - Where a function expects "a transaction-shaped object," use an inline type for now — the shared `Transaction` interface arrives in Stage 17, don't jump ahead
- **Exercise / checkpoint:** call one of the newly-typed functions with a deliberately wrong argument shape (e.g. a typo'd property name) and read what the compiler says before fixing it.
- **Definition of done:** `calculations.ts` compiles with no `any` types, and every function signature documents its own inputs/outputs without needing to read the function body.
- **Optional future improvements:** — none yet —

### Stage 17 — Interfaces & the Transaction Type (`transactions.js`, `storage.js`)

- **Concepts to understand:** `interface` — defining the shape of the core `Transaction` object once and reusing it everywhere; why a shared interface beats repeating an inline object shape in every file; `unknown` vs. `any` — why data coming back from `JSON.parse()` isn't safely typed by default; basic narrowing/validation when trusting external data.
- **Tools / APIs to use:** `interface Transaction { ... }`, imported and reused across modules; `unknown` at the `JSON.parse()` boundary, narrowed before use.
- **Implementation objective:** the app has one canonical `Transaction` interface, and both the in-memory transaction operations and the `localStorage` read/write path are fully typed against it.
- **Implementation tasks:**
  - Define `interface Transaction` (in `transactions.ts` or a small shared types file — the learner's call; discuss the tradeoff)
  - Rename `transactions.js` → `transactions.ts`; type the add/delete/edit/find operations against `Transaction[]`
  - Rename `storage.js` → `storage.ts`; type the save function (`Transaction[] → void`) and the load function, handling the `JSON.parse()` boundary safely rather than casting straight to `Transaction[]`
- **Exercise / checkpoint:** explain, in your own words, why `JSON.parse()`'s return type can't just be trusted as `Transaction[]` — what could go wrong if `localStorage` data were malformed or from an older version of the app?
- **Definition of done:** `transactions.ts` and `storage.ts` compile with no `any`; the `Transaction` interface is defined once and imported everywhere it's needed; the `localStorage` read path doesn't blindly assert its result is well-typed.
- **Optional future improvements:** runtime validation of `localStorage` data (checking shape before trusting it) — worth a note, not required yet.

### Stage 18 — Typing the DOM Layer (`ui.js`, `main.js`)

- **Concepts to understand:** DOM element types (`HTMLElement`, `HTMLInputElement`, `HTMLFormElement`, etc.) and why `querySelector` alone doesn't give you the specific one you want; `strictNullChecks` in practice — why `document.querySelector()` returns `Element | null`, and what that forces you to handle; typing event objects (`Event`, `SubmitEvent`, `MouseEvent`) and `event.target`/`event.currentTarget`; non-null assertion (`!`) vs. an actual null check — when each is honest and when it's a shortcut that hides a real bug.
- **Tools / APIs to use:** DOM lib types (ship with TypeScript, no install needed); type assertions on `querySelector` results (`querySelector<HTMLInputElement>(...)` or `as HTMLInputElement`); typed event handler parameters.
- **Implementation objective:** `ui.js` and `main.js` are converted to `.ts`, with every DOM lookup and event handler properly typed instead of falling back to `any`.
- **Implementation tasks:**
  - Rename `ui.js` → `ui.ts`; type every DOM query and every function that builds/updates elements
  - Rename `main.js` → `main.ts` for real this time (Stage 15 only proved the pipeline); type the event listeners and form handling
  - Resolve every place `strictNullChecks` complains about a possibly-null DOM lookup — decide, per case, whether a null check or a justified assertion is correct
- **Exercise / checkpoint:** pick one place where a DOM element lookup could genuinely be null (e.g. a typo'd selector) and explain what would have happened at runtime in the old JS version vs. what TypeScript does now.
- **Definition of done:** `ui.ts` and `main.ts` compile with no `any`; every DOM lookup's nullability is handled deliberately, not silently ignored.
- **Optional future improvements:** — none yet —

### Stage 19 — Strict Mode and Wrap-Up

- **Concepts to understand:** what `"strict": true` actually turns on (it's a bundle of several flags, not one switch); reading and resolving the kind of errors strict mode surfaces that non-strict TypeScript lets slide.
- **Tools / APIs to use:** `tsconfig.json`'s `"strict": true`.
- **Implementation objective:** the entire `src/` directory is TypeScript, compiles cleanly under full strict mode, and no `.js` source files remain.
- **Implementation tasks:**
  - Enable `"strict": true` in `tsconfig.json`
  - Fix every error strict mode surfaces across all five modules
  - Confirm no `.js` files remain in `src/` (only the compiled output directory should contain `.js`)
  - Update `README.md` to mention TypeScript as part of the stack
- **Exercise / checkpoint:** before fixing them, list the new errors strict mode introduced and guess which specific flag (e.g. `noImplicitAny`, `strictNullChecks`) caused each one — then check.
- **Definition of done:** `tsc` compiles the whole project with `strict: true` and zero errors; the app's behavior is unchanged from the JS version; every item in Section 4's Definition of Done above holds true.
- **Optional future improvements:** generics (e.g. a generic `groupBy` helper) — worth revisiting once React introduces more reasons to need them; enums vs. the union-type approach used here — a discussion, not a required change.

## 6. LEARNED.md Rules

*(Fixed — applies regardless of subject. `LEARNED.md` is shared across this whole project, not per stack layer — see `plan.md` Section 28 for the full rules. Summary repeated here for self-containment.)*

- Only add an entry for a concept genuinely encountered and understood while working through these stages. Never pre-populate from the roadmap ahead of time.
- Each entry: the concept, what it means, why it's useful, a small TypeScript example, and a gotcha or misconception that actually came up.
- Before logging a major concept, occasionally ask the learner to explain it back or complete a small exercise proving understanding — see `plan.md` Section 29 (Knowledge Verification).
- Append; never rewrite or delete existing JavaScript-stage entries.

## 7. Roadmap-Adaptation Rules

*(Fixed — applies regardless of subject.)*

This plan is a living document, not a fixed contract written once.

- If the learner already knows something a stage assumed needed teaching, mark it "assumed known" in Section 1 and skip straight to application.
- If a prerequisite concept is missing that the roadmap didn't anticipate, insert a short side-step to cover it before continuing the current stage — note it in the roadmap rather than teaching it invisibly.
- If a topic is large/tangential enough to risk stalling the main project for a long stretch, offer to split it into a standalone mini-project (as `plan.md` did for async/await — see its Section 25 and `C:\git\mini-project\`), mark the stage "deferred" here, and continue with the rest of the roadmap.
- If the learner's actual goal, pace, or interests turn out to differ from what intake assumed, revise Section 1 and the remaining stages in Section 5 accordingly — say what changed and why, don't silently improvise around a stale plan.
- Keep Section 8's checklist in sync with reality after every stage.

## 8. Progress Checklist

- [x] Stage 15 — TypeScript Environment & Basic Types
- [ ] Stage 16 — Typing Pure Functions (`calculations.ts`)
- [ ] Stage 17 — Interfaces & the Transaction Type (`transactions.ts`, `storage.ts`)
- [ ] Stage 18 — Typing the DOM Layer (`ui.ts`, `main.ts`)
- [ ] Stage 19 — Strict Mode and Wrap-Up

**Current status:** Stage 15 complete — awaiting the learner's go-ahead to start Stage 16.
