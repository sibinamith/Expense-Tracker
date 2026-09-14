# Learned Concepts

## Linking JavaScript to HTML

JavaScript is connected to a webpage using a `<script>` tag with a `src` attribute pointing to a `.js` file.

Example:

```html
<body>
    <script src="src/main.js"></script>
</body>
```

The `<script>` tag is placed just before the closing `</body>` tag, not in `<head>`. This ensures the browser has already parsed all the HTML/DOM elements before the JavaScript runs. If the script ran earlier (e.g. from `<head>`), code trying to select DOM elements (like `document.querySelector(...)`) could run before those elements exist, returning `null` and breaking.

`console.log()` prints output to the browser's Developer Tools console (F12 → Console tab) — useful for checking that code is running and for debugging values.

## `let` vs `const`

`const` declares a variable that cannot be reassigned after it's set. `let` declares a variable that can be reassigned later.

Default to `const`. Only use `let` when the value genuinely needs to change during the program's run.

Example:

```javascript
const description = "Groceries";
const amount = 100;
const expense = false;
```

**Gotcha:** "this value could be different" is not the same as "this variable needs reassignment." A transaction's `amount` being different from *another* transaction's `amount` doesn't mean the same variable gets reassigned — each transaction would be its own separate value (later: its own object in an array). Reassignment only matters for changes happening to the *same* variable during a single run.

Python comparison: Python has no `const` — everything behaves like `let`. JS added `const` to express "this should never change" explicitly.

## Operators and Comparisons

Arithmetic (`+ - * / %`) works like Python, but JS `/` always gives a decimal result (no separate `//` integer division).

Comparison: use `===` and `!==` (strict equality — checks value AND type), never `==`/`!=` (loose equality — allows type coercion, e.g. `"5" == 5` is `true`, a common bug source).

Logical: `&&` (and), `||` (or), `!` (not) — same concept as Python's `and`/`or`/`not`.

**Gotcha:** `||` only needs one side true. For a "between X and Y" range check, use `&&` (both sides must hold), not `||` — e.g. `amount >= 50 && amount <= 200`, not `||`, since with `||` almost any number satisfies at least one side.

## Template Strings

Template strings let you build strings with embedded variables using backticks (`` ` ``) instead of regular quotes. Any JavaScript expression inside `${}` is evaluated and inserted into the string.

```javascript
const description = "Groceries";
const amount = 100;

console.log(`Transaction: ${description} - $${amount}`);
```

This prints:

```javascript
Transaction: Groceries - $100
```

Use template strings when you want cleaner output or string formatting than chaining strings with `+`. They are especially handy for user messages, logs, and HTML text built from variables.

**Gotcha:** template strings require backticks, not single quotes or double quotes. If you write `'${amount}'` or `"${amount}"`, the variable will not be interpolated.

## if / else

```javascript
if (condition) {
    // ...
} else if (anotherCondition) {
    // ...
} else {
    // ...
}
```

Parentheses around the condition are required; curly braces define the block (unlike Python's colon + indentation).

## Loops

`for` loop (counter-based):
```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
```
Three parts: starting value, loop condition, action after each iteration. `i++` is shorthand for `i = i + 1`.

`while` loop: loops while a condition is true; counter must be declared and incremented manually.
```javascript
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
```

## Functions, Parameters, Return Values

```javascript
function categorizeTransaction(amount) {
    if (amount < 50) {
        return "Small Transaction";
    } else if (amount >= 50 && amount <= 200) {
        return "Medium Transaction";
    } else {
        return "Large Transaction";
    }
}
```

`amount` in the function signature is a **parameter**; the actual value passed in when calling (`categorizeTransaction(100)`) is the **argument**. `return` sends a value back to the caller — without it, the function returns `undefined`.

## Scope

Variables declared with `let`/`const` inside a block (`{}` — a function, loop, or if-statement) only exist within that block. This is why a function parameter can reuse the same name as an outer variable (e.g. both called `amount`) without conflict — the inner one is local and "shadows" the outer one only within that block.

## Selecting elements and listening for clicks (preview)

`document.querySelector(selector)` finds an element in the DOM using a CSS selector string, e.g. `"#add-btn"` for an id. It returns `null` if no match is found.

`element.addEventListener("click", function)` runs the given function whenever that element is clicked.

```javascript
const btn = document.querySelector("#add-btn");
btn.addEventListener("click", () => console.log("Add button clicked"));
```

**Gotchas hit while wiring this up:**
1. CSS selector syntax: `"#add-btn"` selects by id. `"button.#add-btn"` is invalid — `.` prefixes a class, `#` prefixes an id, they can't be chained like that.
2. Script placement matters in practice, not just in theory: when `<script>` was placed *before* the button/input elements in `<body>`, `querySelector("#add-btn")` returned `null` (the button didn't exist in the DOM yet when the script ran), and calling `.addEventListener()` on `null` threw `Cannot read properties of null`. Moving `<script>` to after the elements fixed it — this is exactly why script tags go at the end of `<body>`.

(Full depth on DOM manipulation and events comes in Stage 3/4 — this was just enough to wire up a basic interaction.)

## Objects

An object groups related data as key-value pairs (like a Python `dict`, but with a dot-notation shortcut Python doesn't have).

```javascript
const transaction = {
    description: "Groceries",
    amount: 100,
    expense: false
};
```

- Access: `transaction.description` (dot notation, most common) or `transaction["description"]` (bracket notation, needed when the key is dynamic/stored in a variable).
- Modify a property: `transaction.amount = 150;` — works even though `transaction` is `const`. `const` only prevents reassigning the variable to a *different* object; it doesn't freeze the object's contents.

**Gotchas hit:**
- Object literals use `key: value` (colon), not `key = value` (equals) — easy to mix up with regular assignment syntax.
- `expense: "false"` (a string) is a bug, not the same as `expense: false` (a boolean) — any non-empty string, including `"false"`, is truthy in JS. `if (transaction.expense)` would wrongly evaluate to `true`.
- JS is case-sensitive with variable names. Declaring `const Transaction = {...}` and later referencing lowercase `transaction` elsewhere throws `ReferenceError: transaction is not defined` — no autocorrection, it just breaks. Consistent naming matters.

## Arrays

An ordered list of values, same concept as a Python `list`.

```javascript
const transactions = [transaction1, transaction2, transaction3];
```

- Zero-based indexing: `transactions[0]` is the first element (same as Python).
- `.push(item)` adds to the end; `.pop()` removes the last element.
- `.length` is a property, not a function — no parentheses (unlike Python's `len(list)`).
- Combine with a `for` loop and indexing to access each item's properties: `transactions[i].description`.

**Gotcha:** assigning to a variable with no `const`/`let`/`var` in front (e.g. `transaction1 = {...}`) is invalid/unsafe — always declare variables explicitly.

## DOM Manipulation — creating and inserting elements

Creating an element doesn't put it on the page — it just builds it in memory until it's attached somewhere:

```javascript
const el = document.createElement("p");   // create (unattached)
el.textContent = "Hello";                  // set its visible text
container.appendChild(el);                 // attach it — now it's visible
```

`.textContent` sets/reads plain text inside an element. (`.innerHTML` also exists and parses HTML tags in the string, but it's avoided for now — it opens up security issues (XSS) that aren't worth worrying about yet when `.textContent` covers the need.)

Pattern for rendering a list from an array: loop over the array, and for each item create + fill + append an element to a container:

```javascript
const list = document.querySelector("#transaction-list");
for (let i = 0; i < transactions.length; i++) {
    const el = document.createElement("p");
    el.textContent = `${transactions[i].description} — £${transactions[i].amount}`;
    list.appendChild(el);
}
```

## Reading input values and factory functions

An input element's current typed value is read via `.value`. It always comes back as a **string**, even for `type="number"` inputs — convert with `Number(someString)` before using it as a number.

A **factory function** is a plain function that returns a new object — a lighter alternative to a `class` when you just need repeatable object creation without shared methods:

```javascript
function createTransaction(description, amount = 0, expense = true) {
    return { description, amount, expense };
}
```

Two things used here:
- **Default parameters** (`amount = 0`) — used automatically if no argument is passed for that parameter.
- **Property shorthand** — `{ description, amount, expense }` is shorthand for `{ description: description, amount: amount, expense: expense }`, valid whenever the variable name matches the property name you want.

## Re-rendering after state changes

Since the DOM doesn't automatically update when a JS array changes, the pattern is: wrap the render logic in a function, and call it again every time the underlying data (`transactions`) changes — e.g. after `.push()`-ing a new transaction. The render function should clear the container first (e.g. `container.textContent = ""`) before rebuilding it, or old and new entries would both pile up.

```javascript
function renderTransactions() {
    t_list.textContent = "";
    for (let i = 0; i < transactions.length; i++) {
        // create + append each transaction's element
    }
}
renderTransactions(); // once, for initial page load
// and again inside addTransaction(), after pushing the new transaction
```

**Gotcha (recursion bug hit while building this):** calling `renderTransactions()` from *inside its own function body* (rather than after it, at the top level) causes the function to call itself over and over with no stopping condition — infinite recursion, which crashes with `RangeError: Maximum call stack size exceeded`. Watch where a function call sits relative to its enclosing braces.

## Hoisting

Function declarations (`function name() {...}`) are hoisted — the JS engine registers the whole function before executing any code top-to-bottom. This means you can call a function *earlier in the file* than where it's defined, and it still works, because the definition is already registered by the time execution reaches that call. This does **not** apply to `const`/`let` variables the same way — those still must be declared before use.

## Forms, `submit`, and `event.preventDefault()`

Wrapping inputs and a button in a `<form>` means: pressing **Enter** in any input inside it, or clicking a `<button>` inside it (which defaults to `type="submit"`), both trigger the form's `submit` event — one handler covers both interactions.

```javascript
form.addEventListener("submit", addTransaction);

function addTransaction(event) {
    event.preventDefault(); // stops the default page reload on submit
    // ...
}
```

Every event handler automatically receives an **event object** as its first argument. `event.preventDefault()` stops the browser's default behavior for that event — for a form's `submit`, the default is reloading/navigating the page, which isn't wanted in a JS-driven app like this.

**Gotcha hit:** a `<button>` must be **inside** the `<form>` tags to be treated as part of that form and trigger its `submit` event. A button placed outside the form (even right next to it) is not associated with it — clicking it does nothing form-related.

**Callback vs function call gotcha:** `addEventListener("click", callback)` expects a function reference, not the result of calling a function immediately. Writing

```javascript
button.addEventListener("click", console.log("hh"));
```

runs `console.log("hh")` immediately when the script is evaluated, before any click happens. The correct version is to pass a function instead:

```javascript
button.addEventListener("click", () => {
    console.log("hh");
});
```

or

```javascript
button.addEventListener("click", handleClick);

function handleClick() {
    console.log("hh");
}
```

This is a classic beginner bug: `fn()` executes now; `fn` gives the browser something to call later.

## Array Methods — `forEach()` and `reduce()`

`forEach()` replaces a manual `for` loop when you just want to "do something" with every item — no index management needed:
```javascript
transactions.forEach((trans) => {
    // runs once per item, no return value used
});
```
Returns `undefined`; doesn't modify the original array; used for side effects (DOM updates, logging), not for producing a new value.

`reduce()` collapses an array down into a single accumulated value — the tool for totals, counts, or any "combine everything into one result" problem:
```javascript
const totalIncome = transactions.reduce((total, trans) => {
    if (trans.expense === false) {
        return total + trans.amount;
    }
    return total;
}, 0); // 0 is the starting value for the accumulator
```
The callback receives `(accumulator, currentItem)`; whatever it `return`s becomes the accumulator for the next iteration. Doesn't modify the original array.

**Note:** values calculated this way (like `totalIncome`) are only computed once, at the moment the code runs — they don't automatically update when `transactions` changes later (e.g. after adding a new transaction via the form). Keeping derived values in sync with changing data is what Stage 6 (Application State) addresses.

## Application State — keeping the UI in sync

`transactions` (the array) is the app's **state** — the single source of truth. Everything else (the rendered list, the totals) is a **view** derived from that state. Whenever state changes, re-derive and re-render everything from scratch rather than trying to patch pieces individually:

```javascript
function addTransaction(event) {
    event.preventDefault();
    transactions.push(createTransaction(...));
    renderTransactions(); // re-render is triggered by every state change
}

function renderTransactions() {
    // ... rebuild the list ...
    renderTotals(); // totals are re-derived from the same state, every time
}

function renderTotals() {
    const total = FindTotal(); // recalculates fresh from current `transactions`
    // ... rebuild the totals display ...
}
```

This is why calling the render function again after every state change (rather than only once at page load) matters — it's what makes "the UI always reflects current data" true.

**Gotcha:** `.textContent` is a **property**, not a method — assign with `=`, don't call it like a function (`el.textContent(...)` throws `TypeError`).

**Gotcha:** `\n` inside a string does not create a line break when rendered as HTML text — the browser collapses whitespace in HTML. To get separate visible lines, create separate block-level elements (like multiple `<p>` tags) rather than relying on `\n` inside one element's text.

## Delete — index, `.splice()`, and closures

`forEach` (and other array methods) can receive `(item, index)` — the second parameter is the item's position in the array:
```javascript
transactions.forEach((trans, index) => {
    // index is 0, 1, 2, ...
});
```

`.splice(startIndex, deleteCount)` removes elements **in place** — unlike `forEach`/`reduce`, it mutates the original array rather than returning a new one:
```javascript
transactions.splice(2, 1); // removes 1 element at index 2
```

Pattern for a per-item delete button: create the button *inside* the loop, and attach its click listener right there too — the listener function "remembers" that iteration's `index` value even though it runs later, on click (a **closure**). No need to look the element back up via an id — hold onto the direct reference (e.g. `b_el`) you already have from `document.createElement()`.

```javascript
transactions.forEach((trans, index) => {
    const b_el = document.createElement("button");
    b_el.addEventListener("click", () => {
        transactions.splice(index, 1);
        renderTransactions(); // re-render after mutating state
    });
});
```

**Gotcha:** the comma operator (`expr1, expr2`) technically runs both expressions left to right and works as a shortcut, but it's confusing to read — prefer two plain statements separated by `;` inside a proper `{}` block.

## Edit — tracking "editing state"

Reusing the same form for both "add" and "edit" needs one new piece of state: which transaction (if any) is currently being edited.

```javascript
let editingIndex = null; // null = not editing, otherwise the index being edited
```

An "Edit" button (same closure pattern as Delete) pre-fills the form with that transaction's current values and records its index:
```javascript
editButton.addEventListener("click", () => {
    inp_desc.value = trans.description;
    inp_amount.value = trans.amount;
    editingIndex = index;
});
```

The form's submit handler then branches on whether `editingIndex` is `null` (add — push a new transaction) or not (edit — replace `transactions[editingIndex]`, then reset `editingIndex = null` so the next submit goes back to "add" mode).

**Gotcha:** a value not explicitly carried over during an edit silently falls back to its default. Building the edited transaction with `createTransaction(description, amount)` (only 2 args) meant `expense` always defaulted to `true` — editing an income transaction's amount silently flipped it to an expense. Fix: read the original value (`transactions[editingIndex].expense`) *before* overwriting that slot, and pass it through explicitly. General lesson: when only *some* fields of a record are being changed, make sure to explicitly preserve the fields that aren't — don't let defaults silently overwrite them.

## Local Storage — persisting data across refreshes

`localStorage` is a browser key-value store that survives page refreshes (and closing the browser). It only stores **strings**, so saving anything other than a string (like an array or object) needs converting first.

```javascript
localStorage.setItem("key", "some string"); // save
localStorage.getItem("key");                // read back the string (or null if unset)
localStorage.removeItem("key");             // delete
```

`JSON.stringify()` and `JSON.parse()` bridge the gap between real JS values and the strings `localStorage` requires:

```javascript
localStorage.setItem("TRANSACTIONS", JSON.stringify(transactions)); // array -> string
const saved = JSON.parse(localStorage.getItem("TRANSACTIONS"));     // string -> array
```

**Load-with-fallback pattern:** on startup, try to load saved data, and fall back to defaults if there isn't any yet:

```javascript
const transactions = JSON.parse(localStorage.getItem("TRANSACTIONS")) || [defaultTransaction1, defaultTransaction2];
```

This works because `localStorage.getItem` returns `null` when the key was never set, and `JSON.parse(null)` also comes back as `null` — which is falsy, so `||` falls through to the defaults.

**Save-on-every-mutation pattern:** rather than adding a `localStorage.setItem` call to every place that adds/edits/deletes a transaction, save once inside the function that already runs after *every* mutation (here, `renderTransactions()`, since add/edit/delete all call it).

**Gotcha:** an empty array `[]` is still **truthy** in JavaScript (unlike Python, where an empty list is falsy). So if all transactions are deleted, `[] || [defaults]` evaluates to `[]`, *not* the defaults — the fallback only ever triggers when there's genuinely nothing saved (`null`), not when what's saved happens to be empty. Don't use `if (someArray)` to check "does this array have items" — use `someArray.length` instead.

## Search / Filter — `.filter()`, and array index vs. object identity

`Array.prototype.filter()` builds a **new array** containing only the elements where a callback returns `true` — like `forEach`/`reduce`, it runs once per element, but its job is specifically to select a subset. It does **not** mutate the original array.

```javascript
const filtered = transactions.filter((trans) => trans.description.toLowerCase().includes(searchTerm));
```

**Gotcha #1:** an arrow function with `{}` braces does *not* auto-return the last expression — it needs an explicit `return`, same rule as `forEach`/`reduce`. Forgetting it means the callback returns `undefined` for every element, which is falsy, so `filter()` silently returns an empty array every time.

**Gotcha #2 — the big one:** `filter()` copies *references* into the new array, not the objects themselves. Each element in `filtered_transactions` is the exact same object in memory as the matching element in `transactions` — nothing is cloned. That has a real consequence: once you're looping over a *filtered* array, the loop's `index` only tells you a position *within that filtered array* — it no longer matches that item's position in the real `transactions` array. Using it directly (e.g. `transactions.splice(index, 1)`) deletes the wrong item whenever the two arrays diverge.

The fix is **`Array.prototype.indexOf()`**, which finds an item's real position by comparing object references (`===`), not by content:

```javascript
transactions.indexOf(trans) // the true index inside the full array, regardless of what's currently filtered
```

Since `trans` (from `filtered_transactions.forEach((trans, index) => ...)`) is the same object reference either way, `transactions.indexOf(trans)` always resolves correctly, whether search is active or not.

**Extra subtlety — closures and *when* to resolve the index:** a Delete button's click handler runs immediately, still closed over that render's `trans`, so `transactions.indexOf(trans)` can be called right there inline. But Edit's flow is split across two events: the click on "Edit" (which only records `editingIndex`) and the later form `submit` (handled by a *separate function*, `addTransaction`) — and `trans` is a local variable that doesn't exist outside that specific `forEach` iteration, so `addTransaction` has no way to reach it. The fix: resolve `transactions.indexOf(trans)` to a real index *immediately*, inside the Edit click handler (while `trans` is still in scope), and store *that* — so by the time `addTransaction` runs later, it only ever deals with a plain number, never needing `trans` itself.

**General lesson:** array *position* is a fragile way to identify a record, especially once a UI can show a filtered/reordered view of the data — it's part of why real applications give each record a stable, unique `id` and look things up by `id` instead of by position.

## Filtering by category and mode — combining filters, and optional chaining (`?.`)

Multiple filters (search text, category dropdown, income/expense radio buttons) can chain together by reassigning `filtered_transactions` through more than one `.filter()` call in sequence — each pass narrows the array further, using the result of the previous pass as its input.

`document.querySelector('input[name="mode"]:checked')` returns the currently-checked radio in a group, or **`null`** if none is checked (e.g. before the user has picked one). Reading a property directly off that, like `radio_btn.value`, throws a `TypeError` the instant `radio_btn` is `null` — because `null` has no properties at all. Since this line runs near the top of `renderTransactions()` (which fires on every keystroke/change), that crash would stop the *entire* function early — no re-render, no totals update, no `localStorage` save — any time no radio happened to be checked.

**Optional chaining (`?.`)** guards against exactly this: `radio_btn?.value` checks whether `radio_btn` is `null`/`undefined` *before* trying to access `.value`. If it is, the whole expression short-circuits to `undefined` instead of throwing — letting the rest of the function keep running normally.

```javascript
const radio_btn = document.querySelector('input[name="mode"]:checked'); // null if nothing checked
const selectedExpense = radio_btn?.value === "1"; // undefined === "1" -> false, no crash
```

**Gotcha:** `?.` only helps with property *access* — it doesn't remove the need to think about what a "no selection" state should mean logically. Here, an explicit third option (an "All" radio) was still needed so the UI could represent "don't filter by mode at all," distinct from "Income" or "Expense" being chosen.

## Sort — `.sort()` and its in-place mutation

`Array.prototype.sort()` reorders an array using a **comparator function** `(a, b) => ...` — the return value tells `sort()` how to order each pair:

```javascript
transactions.sort((a, b) => a.amount - b.amount); // ascending
transactions.sort((a, b) => b.amount - a.amount); // descending
```

- Negative return → `a` comes first
- Positive return → `b` comes first
- `0` → order between them doesn't matter

**Gotcha (important):** unlike `.filter()`, `.sort()` mutates the array **in place** — it doesn't return a new, separately-ordered copy; it reorders the original and also returns that same reference. This matters when a variable is just an alias for another array rather than a fresh copy: in this project, `filtered_transactions = transactions` (no filter active) means they're literally the same array in memory, so sorting `filtered_transactions` also reorders `transactions` itself. Here that turned out to be harmless — nothing in the app depends on `transactions`' order (rendering, totals, and the Edit/Delete lookups all key off object identity via `transactions.indexOf(trans)`, never position) — but it's exactly the kind of side effect worth deliberately checking for, not assuming away.

**Gotcha:** a ternary (`cond ? a : b`) is meant to evaluate to *one of two values* — using it purely to pick which of two *statements* (like two different `.sort()` calls) to run works, but reads oddly, similar to the comma-operator gotcha from Delete. When both branches are side effects rather than values, a plain `if`/`else` communicates the intent more clearly.

## Dates — `Date`, `localStorage` round-tripping, and timezones

`Date` is JavaScript's built-in type for representing a moment in time.

```javascript
const now = new Date();               // right now
const specific = new Date("2026-08-09"); // a specific date, parsed from a string
```

Useful methods:
- `date.getTime()` — milliseconds since Jan 1 1970, a plain number good for comparing/sorting dates
- `date.toLocaleDateString()` — a human-readable string in the *browser's locale format* (e.g. `"8/9/2026"` for US locale) — meant for **display**
- `date.toISOString()` — a machine-readable string like `"2026-08-09T00:00:00.000Z"` — meant for **storage/interop**, not showing to users

**Gotcha — `Date` doesn't survive `localStorage` round-trips as a `Date`.** `JSON.stringify()` converts a `Date` into an ISO string automatically (it has a built-in `toJSON()`), but `JSON.parse()` does **not** convert it back — it comes back as a plain string. Calling `.toLocaleDateString()` on that string would fail, since strings don't have that method. Fix: detect and repair it after loading, using the `instanceof` check learned from the object-identity lesson:

```javascript
if (!(trans.date instanceof Date)) {
    trans.date = new Date(trans.date); // string -> real Date object again
}
```

Because `trans` here is the same object reference living inside the main array (not a copy), this repair persists for the rest of the app's lifetime — it only needs to happen once per object, the first time it's rendered after loading.

**Gotcha — ISO-format strings and US-locale strings for the *same date* look completely different, and that's not a bug.** `"2026-08-09"` (ISO, year-month-day) and `"8/9/2026"` (US locale, month/day/year) both describe August 9th, 2026 — just formatted differently for different audiences (machine vs. human). Don't assume a difference in *appearance* means a difference in the underlying *value* — check what the two formats actually mean before concluding something's wrong.

**Gotcha — the real timezone bug:** a date-only string like `"2026-08-09"` is parsed as **midnight UTC**, not midnight in the browser's local timezone. If the viewer's local timezone is *behind* UTC (a negative offset — most of the Americas), that UTC midnight moment is actually still the *previous evening* locally — so `.toLocaleDateString()` would display one day earlier than what was actually picked. If the local timezone is at or *ahead of* UTC (zero or positive offset — the UK for most of the year, most of Europe, Asia), that shift never happens, since UTC midnight is never earlier than the intended local day. This is why the same code can look perfectly correct in one timezone and be silently wrong by a day in another — worth knowing about, even without fully solving it here. A full fix generally means avoiding UTC-based parsing entirely for values that only represent a calendar day, not a precise moment in time.

## Data Visualization, part 1 — grouping with `reduce()` and dynamic object keys

Every reduce so far collapsed an array down to a single *number*. `reduce()` can just as easily build up an **object** instead — the accumulator doesn't have to be a number, it can be any value, including `{}`.

```javascript
function getCategoryTotals(transactions) {
  const category_totals = {};
  transactions.reduce((category_totals, trans) => {
    if (!trans.expense) return category_totals;              // guard clause: skip income
    if (!category_totals[trans.category]) {
      category_totals[trans.category] = 0;                   // first time seeing this category
    }
    category_totals[trans.category] += trans.amount;
    return category_totals;
  }, category_totals);
  return category_totals;
}
```

The key idea is **bracket notation with a variable**: `category_totals[trans.category]` uses whatever string `trans.category` currently holds as the property name, so the function works for *any* category value that shows up in the data — nothing needs to be hardcoded in advance. Hardcoding known category names instead (`if (trans.category === "Food") ...`) breaks the moment a new, unanticipated category appears — it either gets dropped or silently miscounted into the wrong bucket.

**Gotcha:** a property on an object that's never been set isn't `0` — it's `undefined`. `category_totals[trans.category] += trans.amount` on a category seen for the first time would evaluate as `undefined + trans.amount`, which is `NaN`. Hence the `if (!category_totals[trans.category]) { category_totals[trans.category] = 0; }` guard immediately before it — initialize before accumulating.

**Gotcha:** a guard clause like `if (!trans.expense) return category_totals;` is much clearer than repeating the same condition inside every branch of an `if`/`else if`/`else` chain — handle the case you want to skip first and return early, then write the rest of the function assuming that case can't happen.

## Data Visualization, part 2 — `Object.entries()` and building a bar chart with plain `div`s

Array methods (`forEach`, `filter`, `map`, `sort`) don't work directly on plain objects — `Object.entries()` bridges the gap by turning an object into an array of `[key, value]` pairs, which array methods (and array destructuring) can then operate on normally:

```javascript
Object.entries({ Food: 145.50, Rent: 550 })
// -> [ ["Food", 145.50], ["Rent", 550] ]

Object.entries(category_totals).forEach(([category, amount]) => { ... });
```

Sorting those pairs by value (`.sort((a, b) => b[1] - a[1])`) puts the largest category first — useful for both display order and finding the max value to scale everything else against (`category_totals[0][1]`, since after sorting descending, index `0` holds the biggest pair, and `[1]` is that pair's *value*, not its *key* — mixing those two up produces `NaN` when later used in arithmetic).

A bar chart without a charting library is just `<div>`s sized proportionally via the `.style` property (not seen before now — only `.textContent`/`.appendChild` had been used):

```javascript
d_el.style.width = `${(amount / high_value) * 100}%`; // proportional to the largest value, as a percentage
d_el.style.height = "20px";
d_el.style.backgroundColor = "orange";
```

**Gotcha:** setting only `width` on an empty `<div>` renders nothing visible — a block element with no content and no explicit `height` collapses to `0px` tall by default. A bar needs an explicit `height` *and* a visible fill (`backgroundColor`, or a border) to actually show up as a box on the page; `width` alone just sizes an invisible sliver. Caught by inspecting the element in dev tools and seeing its computed height was `0`.

**Gotcha:** an empty array is still truthy (this project's second run-in with that exact gotcha, first seen in the Local Storage stage). A guard meant to catch "there's no data to chart" needs to check `category_totals.length === 0`, not `!category_totals` — the array reference itself is always truthy, empty or not, so a truthiness check on the array silently does nothing.

## JavaScript Modules — `export`/`import`, and everything that goes wrong the first time

Splitting one large file into several lets each file have its own private scope — nothing is shared between files unless explicitly `export`ed and `import`ed.

```javascript
// calculations.js
export function findTotal(transactions) { ... }

// main.js
import { findTotal } from "./calculations.js";
```

To use modules in the browser, the `<script>` tag needs `type="module"`. This project ended up with:

```
main.js          — owns the `transactions` array, DOM refs it alone needs, event-listener wiring
transactions.js  — createTransaction, convert_to_date   (shape/repair a single record)
calculations.js  — FindTotal, getCategoryTotals          (derive stats from many records — fully self-contained, no imports)
storage.js       — saveTransactions, loadTransactions    (talk to localStorage, nothing else)
ui.js            — renderTransactions, renderTotals, renderChart, filterTransaction, addTransaction
```

The design principle behind the split: group code by *what it depends on and what it does*, not by superficial similarity. `createTransaction` (builds a record) and `FindTotal` (derives a statistic) both "do math-ish things with transactions," but one shapes a single object and the other summarizes many — different enough to deserve separate files. A function that reads the DOM or triggers a re-render (`addTransaction`) is a different responsibility again from a function that's pure data-in-data-out (`FindTotal`) — pure functions are easier to test and reason about precisely because they don't reach outside their own parameters.

**Gotcha — missing file extensions.** Unlike bundler-based setups (webpack, Vite), native browser ES modules require the full `.js` extension in every import path: `import { x } from "./file"` 404s, `import { x } from "./file.js"` works.

**Gotcha — `file://` and modules don't mix.** Browsers block loading ES modules over the `file://` protocol as a security measure. Testing requires an actual local server (Live Server, `python -m http.server`, etc.), not just double-clicking `index.html`.

**Gotcha — module `<script>` tags are deferred by default.** A classic `<script>` tag runs the instant the parser reaches it (hence "always put it at the end of `<body>`," learned all the way back in Stage 0). A `<script type="module">` tag behaves as if it always has the `defer` attribute — it waits for the whole document to finish parsing before running, regardless of where it sits in the HTML. So a module script can safely sit at the very top of `<body>` and still find every element it queries.

**Gotcha — a function parameter always shadows an import of the same name, silently.** `calculations.js` had `import { transactions } from "./main.js"` sitting above two functions that *also* took `transactions` as a parameter — the parameter always wins inside the function body, so the import was pure dead code that did nothing except create an unnecessary circular dependency. If a function already receives its data as an argument, it has no need to additionally import that same data from elsewhere.

**Gotcha — circular imports "work" only by accident, via lazy access.** `main.js` importing from `ui.js`, while `ui.js` imports back from `main.js`, is a cycle. It *can* still function correctly, but only because JS evaluates a whole module's top-level code before returning control to whatever imported it — in a cycle, the second module to be reached gets a live binding to an *as-yet-uninitialized* export (in the temporal dead zone) if that export is a `const`/`let` not yet assigned. It only avoids crashing here because nothing reads the shared value until *inside a function body*, called later, by which point everything has finished initializing. This is fragile, not a design to rely on — the fix is to pass the needed value in as a **parameter** instead of importing it, which flips the dependency to one direction only.

**Gotcha — `addEventListener(event, someFunction(x))` calls `someFunction` immediately, not later.** `addEventListener`'s second argument must be a function *reference* — something to call later, when the real event fires. Writing `addTransaction(transactions)` (with parentheses) calls it **right now**, synchronously, as that line of code runs, and passes whatever `addTransaction` *returns* (here, `undefined`) as the actual listener — so the real click/submit event would never do anything, and the immediate call itself crashes because `event.preventDefault()` runs against `transactions` (whatever was mistakenly passed as the first argument) instead of a real event object.

**Gotcha — a wrapper arrow function's own parameter shadows an outer variable of the same name.** The fix for the above isn't just "wrap it in an arrow function" — it's specifically using a closure, not a same-named parameter:

```javascript
// WRONG: "transactions" here is a new parameter, filled by whatever addEventListener
// actually passes in (the Event object) — it shadows the real outer `transactions` entirely.
search_bar.addEventListener("input", (transactions) => renderTransactions(transactions));

// RIGHT: no parameter named `transactions` at all — it's resolved via closure,
// reaching out to the already-existing outer `const transactions`.
search_bar.addEventListener("input", () => renderTransactions(transactions));

// For an event that needs the real Event object too, only name the parameter that IS the event:
form_transaction.addEventListener("submit", (event) => addTransaction(event, transactions));
```

A parameter's value comes only from what the *caller* supplies when invoking the function — naming it the same as some outer variable doesn't connect them, it just shadows the outer one inside that function's body. To actually reuse an outer variable inside a callback, don't declare a parameter for it at all; reference it directly and let closure do the work — exactly the pattern already used correctly for `transactions` inside the Delete button's click handler back in Stage 7.

**Gotcha — one single source of truth.** A tempting-but-wrong fix along the way was giving `ui.js` its own independent `loadTransactions("TRANSACTIONS")` call, separate from `main.js`'s. That would have created two unrelated copies of the transaction data that could silently drift out of sync — worse than the circular-import problem it was meant to dodge. Only one place should ever own and load the real data; everywhere else should receive it as a parameter.

## Git Basics — `init`, `status`, `add`, `commit`

A git repository is just a hidden `.git/` folder that tracks snapshots of everything alongside it. `git init` creates that folder (turns the current directory into a repo) but doesn't track or save anything by itself.

`git status` reports the current state: untracked files (git sees them but isn't watching them), staged changes (ready to be committed), and unstaged changes (tracked files that were modified since the last commit).

The **staging area** is a draft of the next commit — a spot to deliberately choose exactly which changes go into that snapshot, rather than committing everything on disk automatically. `git add <file>` (or `git add .` for everything in and below the current directory) moves a file's current state into that draft.

`git commit -m "message"` takes a permanent snapshot of whatever is currently staged.

```
git init
git status
git add .
git commit -m "docs: add git notes to LEARNED.md"
git log
```

`git log` shows the commit history — each entry has a unique hash (a fingerprint of that snapshot), the author/date (pulled from git config, not typed manually), and the message. `(HEAD -> main)` next to the newest commit means `HEAD` — "where you currently are" — is pointing at the tip of the `main` branch.

**Commit message convention** (Conventional Commits): `type: short description`, e.g. `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`. The description is imperative mood ("add X", not "added X"), lowercase, no trailing period, and specific enough that `git log --oneline` alone tells a reader what happened — a message like `add LEARNED.md` is too vague once the file already exists; `add git notes to LEARNED.md` says what actually changed.

**Gotcha:** nothing is tracked automatically just because `git init` was run — a file has to be explicitly `git add`ed (and then committed) before git records anything about it. An empty repo with real files sitting in it still reports "No commits yet."

## Git — `diff`, branches, and merging

`git diff` shows exactly what changed in tracked-but-unstaged files, line by line — not the whole file, just the difference between the last commit's version and what's currently on disk:

```
--- a/LEARNED.md    ← the version in the last commit
+++ b/LEARNED.md    ← the version currently on disk
@@ -590,3 +590,27 @@   ← "starting at line 590, old had 3 lines, new has 27"
```

Lines starting with `+` were added; `-` means removed. A pure addition (like adding a new section) shows only `+` lines.

A **branch** is a movable pointer to a commit — nothing more. `git branch` lists them; `git switch -c <name>` (or the older, more general `git checkout -b <name>`) creates a new one and switches to it in one step. `HEAD` always points at whichever branch you currently have checked out, so committing while on a new branch only moves *that* branch's pointer forward — the branch you came from doesn't move until you explicitly bring the new work back into it.

`git merge <branch>` brings another branch's commits into the one you're currently on. Two different things can happen:

- **Fast-forward merge:** if the current branch hasn't moved since the other branch split off from it, git just slides the pointer forward to match — no new commit, no conflict possible, since there's nothing to reconcile.
- **Three-way merge:** if both branches gained commits since splitting, git combines both histories into a new **merge commit** with two parents. This is where conflicts can happen, if both branches changed the same lines.

Once a branch is fully merged in, it's safe to delete: `git branch -d <name>` (lowercase — *safe* delete, refuses if there's unmerged work). `-D` (uppercase) force-deletes regardless, which can genuinely lose commits if used on a branch that wasn't actually merged — reserve it for branches you deliberately want to discard.

## Git — remotes and pushing to GitHub

A **remote** is a named pointer to a repository hosted elsewhere; `origin` is the conventional name for "the main hosted copy." `git remote add origin <url>` connects a *new* remote name to a URL — it fails with "remote origin already exists" if one is already set. To change an *existing* remote's URL, use `git remote set-url origin <url>` instead.

`git push -u origin main` uploads local commits to the remote. The `-u` (`--set-upstream`) links the local `main` branch to `origin/main`, so future `git push`/`git pull` on this branch don't need the remote/branch spelled out again.

**Two ways to authenticate with GitHub, and why one failed:**

- **SSH** (`git@github.com:user/repo.git`) requires an SSH key pair already generated on the machine, with the *public* half uploaded to your GitHub account beforehand. Without that, push fails immediately with `Permission denied (publickey)` — GitHub never even gets to check whether the repo exists.
- **HTTPS** (`https://github.com/user/repo.git`) prompts for a username and password at push time — but GitHub stopped accepting real account passwords here in 2021. The "password" prompt actually expects a **Personal Access Token**. The username field barely matters (an actual username or the account's email both work); authentication succeeds or fails based entirely on whether the token in the password field is valid.

**Gotcha:** pushing to a freshly created GitHub repo that was initialized with its own README/license/`.gitignore` would fail (or need a merge) on first push, because the remote would already have commit history unrelated to the local repo's. Creating the remote repo *empty* avoids that entirely when local history already exists.
