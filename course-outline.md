# vSpringboard Specials — JavaScript Course Outline

> This file is your Bible before hitting record. Each video has what to explain, how to flow, what to show on screen, and what the task is. Don't script word by word — just glance at this while recording.

---

## Video 01 — Welcome to JavaScript

### What to Cover

- **Intro** — Who you are, what this course is, how it works (tasks, GitHub, certificate)
- **Why JavaScript exists** — HTML is structure, CSS is looks, JS is behaviour. The web was static before JS. Give a real example: a button that changes colour — HTML can't do that alone, CSS can't do that alone
- **Where JS runs** — Browser (client side). Every website they've ever used runs JS
- **How to run JS** — Two ways: Browser console (open DevTools → Console tab), and a `.js` file linked to HTML
- **Console** — `console.log()` is your best friend. Use it to see what's happening. Developers use it every single day
- **Variables** — A box that stores a value. You name the box, you put something in it
- **Numbers** — `let age = 20` — whole numbers, decimals, both work
- **Strings** — `let name = "Rahul"` — text always goes in quotes, single or double
- **Booleans** — Only two values: `true` or `false`. Is the user logged in? true/false. Is the form filled? true/false
- **typeof** — How to check what type a variable is. `typeof name` returns `"string"`. Show a few examples
- **Type Conversion** — `Number("42")` turns a string into a number. `String(42)` turns a number into a string. `Boolean(0)` is false, `Boolean(1)` is true. This matters later when taking user input

### Flow on Screen

- Start in browser console, type live
- Then switch to VS Code, create `index.html` + `script.js`, link them, show output in console

### Task

```
Store your full name, age, and isIndian in variables.
Print all three using console.log().
Also print the typeof each variable.
```

> Also explain in this video how to submit tasks — fork the repo, create their folder, make a folder video-01 inside it, put index.js there, push, done.

---

## Video 02 — Variables Properly + Strings + Math

### What to Cover

- **var vs let vs const** — `var` is old, has weird scope issues, avoid it. `let` is for values that change. `const` is for values that never change. Rule of thumb: always use `const` first, switch to `let` only if you need to reassign
- **Logging with variables** — Three ways:
  - Comma: `console.log("Name:", name)`
  - Concatenation: `console.log("Name: " + name)`
  - Template literals: ``console.log(`Name: ${name}`)`` — this is the modern way, use this
- **Arithmetic operators** — `+` `-` `*` `/` `**` (power) `%` (remainder). Show each with a live example
- **Compound assignment** — `+=` `-=` `*=` `/=` — shortcuts for updating a variable
- **Increment / Decrement** — `++` `--`. Show `count++` and when you'd use it
- **Order of operations** — JS follows BODMAS. Show `2 + 3 * 4` vs `(2 + 3) * 4`

### Flow on Screen

- All in VS Code + console
- Keep a single `script.js` file, build on it live

### Task

```
Take a static radius value (example: radius = 7).
Calculate and print:
- Area of circle
- Circumference of circle
Use const where possible, let where needed.
Use template literals for output.

```

---

## Video 03 — Taking Input + camelCase + tiny DOM intro

### What to Cover

- **camelCase** — JS naming convention. Variables and functions use camelCase: `firstName`, `totalMarks`, `isLoggedIn`. Not `firstname`, not `first_name`. Make this a habit now, saves confusion forever
- **prompt()** — `let name = prompt("Enter your name")` — browser pops a dialog, user types, value is stored. Simple but useful for learning
- **Input via HTML** — `<input type="text" id="nameInput">` in HTML. In JS: `document.getElementById("nameInput").value` — this is the real way websites take input
- **Why not document.write()** — It's deprecated, it overwrites the entire page if called after load, never used in real development. Mention the teacher might teach it — that's why you're here
- **Tiny DOM intro** — DOM means Document Object Model — JS's way of talking to HTML. `document.getElementById()` selects an element. `.innerHTML` changes what's inside it. `.value` gets input field value. Just these three for now — DOM gets its own full video later
- **Connecting it all** — Show a button that on click reads the input and shows the name on the page

### Flow on Screen

- HTML file with an input, a button, and a result div
- JS file that connects them
- Show prompt version first, then the input version

### Task

```
Create a page with:
- An input field for name
- A button
- When button is clicked, show "Hello, [name]!" on the page

Do it TWICE:
- Once using prompt()
- Once using an actual HTML input field
Both in the same file, clearly commented.
```

---

## Video 04 — Conditionals

### What to Cover

- **if / else** — Basic decision making. If this is true, do this. Otherwise do that
- **else if** — Multiple conditions chained. Don't overdo nesting
- **Nested if else** — if inside an if. Show one small example, warn them not to go more than 2 levels deep or it becomes unreadable
- **Comparison operators** — `==` vs `===` (always use `===`, explain why — `"5" == 5` is true but `"5" === 5` is false). Also `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Logical operators** — `&&` (both must be true), `||` (at least one must be true), `!` (flips true to false and vice versa)
- **Ternary operator** — `condition ? valueIfTrue : valueIfFalse` — one line if/else. Show when it's clean and when it's too much

### Flow on Screen

- Build the task live — start with hardcoded marks, then connect to an input field

### Task

```
Build a marks grade checker.
Input: marks out of 100
Output: Grade
  90 and above → A
  75 to 89     → B
  60 to 74     → C
  40 to 59     → D
  below 40     → Fail
Show the result on the page, not just in console.
```

---

## Video 05 — Loops

### What to Cover

- **Why loops exist** — You don't write `console.log()` 10 times. You write it once inside a loop
- **for loop** — `for (let i = 0; i < 10; i++)` — three parts: start, condition, step. Most common loop
- **while loop** — Runs as long as condition is true. Use when you don't know how many times in advance
- **do...while** — Runs at least once, checks condition after. Rare but worth knowing
- **break and continue** — `break` exits the loop entirely, `continue` skips to the next iteration. Show both
- **Loop with array preview** — `for (let i = 0; i < fruits.length; i++)` — don't go deep into arrays yet, just show this works

### Flow on Screen

- Start with printing 1 to 10
- Then build to the task live

### Task

```
Ask user for a number using an input field.
Print the full multiplication table of that number (1 to 10).
Display it on the page, not just console.
Each line: "7 x 1 = 7", "7 x 2 = 14" etc.
```

---

## Video 06 — Functions

### What to Cover

- **Why functions** — Reusable blocks of code. Write once, call many times. Keeps code clean
- **4 types to cover** (build each one live):
  - No argument, no return — just does something: `function greet() { console.log("Hello") }`
  - Argument, no return — takes input, does something with it: `function greet(name) { console.log("Hello " + name) }`
  - No argument, returns — does something and gives back a value: `function getYear() { return 2025 }`
  - Argument + return — takes input, gives back output: `function add(a, b) { return a + b }`
- **Calling a function** — just `greet()` or `let result = add(3, 4)`
- **return exits the function** — anything after return doesn't run
- **Function naming** — use camelCase, name it what it does: `calculateArea`, `getUserName`, `isEven`

### Flow on Screen

- Build all 4 types live with small examples
- Then build the task using a proper function

### Task

```
Write a function called calculateCircle that:
- Takes radius as an argument
- Returns an object with both area and circumference
Call it with at least 3 different radius values and display all results on the page.
```

> This revisits Video 02's task but now with functions — they'll feel the upgrade.

---

## Video 07 — String Methods

### What to Cover

- **Strings are objects in JS** — They have built-in methods you can call with a dot
- **Methods to cover:**
  - `.length` — number of characters
  - `.trim()` — removes spaces from start and end
  - `.toUpperCase()` / `.toLowerCase()`
  - `.charAt(index)` — character at position
  - `.slice(start, end)` — cut out a part of the string
  - `.substring(start, end)` — similar to slice, slight differences
  - `.split(separator)` — turns a string into an array: `"a,b,c".split(",")` → `["a", "b", "c"]`
  - `.includes(word)` — returns true/false
  - `.replace(old, new)` — replaces first match
  - `.padStart(length, char)` — pads beginning: `"5".padStart(3, "0")` → `"005"`
- **Chaining methods** — `name.trim().toLowerCase()` — methods can be chained

### Flow on Screen

- Show each method with a short live example in console
- Then build the task

### Task

```
The user types their full name in an input field — but messy:
extra spaces, random capitals, like: "  rAHUL   pATIL  "

Your JS should:
- Remove extra spaces
- Extract and display just the first name
- Capitalize it properly (first letter upper, rest lower)
- Display: "Hello, Rahul!"
```

---

## Video 08 — Arrays

### What to Cover

- **What is an array** — A list of values in one variable. `let fruits = ["apple", "mango", "banana"]`
- **Indexing** — Arrays start at 0. `fruits[0]` is `"apple"`. `fruits[2]` is `"banana"`
- **length** — `fruits.length` gives the count
- **Changing values** — `fruits[1] = "grapes"` — direct assignment
- **Looping an array** — `for` loop with index, then show `for...of` loop (cleaner for simple loops)
- **Array of objects preview** — `let students = [{name: "Rahul", marks: 85}, {name: "Priya", marks: 92}]` — just show this exists, objects come next video
- **Nested arrays** — Brief mention, don't go deep

### Flow on Screen

- Create arrays live, access items, loop through them
- Mix of console and page output

### Task

```
Create an array of 5 fruits.
Display all of them on the page as a list.
Also display: the first fruit, the last fruit, and total count.
```

---

## Video 09 — Array Methods

### What to Cover

- **push() / pop()** — Add to end, remove from end
- **unshift() / shift()** — Add to start, remove from start
- **indexOf()** — Find index of a value. Returns -1 if not found
- **includes()** — true/false if value exists
- **join()** — `["a","b","c"].join(", ")` → `"a, b, c"`
- **reverse()**
- **map()** — Creates a new array by transforming each item. `[1,2,3].map(n => n * 2)` → `[2,4,6]`
- **filter()** — Creates a new array with only items that pass a condition. `[1,2,3,4].filter(n => n > 2)` → `[3,4]`
- **forEach()** — Loops through, doesn't return a new array. Use when you just want to do something per item
- **Difference between map and forEach** — map returns new array, forEach doesn't

### Flow on Screen

- Show each method live with short examples
- Arrow functions will appear naturally here — briefly explain `=>` syntax

### Task

```
Start with this array:
[1, 2, 3, 2, 4, 3, 5, 1, 6, 4]

Task:
- Remove duplicates (hint: use filter + indexOf)
- From the unique array, create a new array where every number is multiplied by 10
- Display both arrays on the page
```

---

## Video 10 — Objects

### What to Cover

- **What is an object** — A collection of key-value pairs. Real world: a student has a name, roll number, marks. That's an object
- **Creating an object** — `let student = { name: "Rahul", rollNo: 42, isMale: true }`
- **Accessing values** — Dot notation: `student.name`. Bracket notation: `student["name"]`
- **Adding / updating properties** — `student.city = "Pune"` adds a new key. `student.name = "Raj"` updates it
- **Deleting a property** — `delete student.city`
- **Nested objects** — `student.address = { city: "Pune", pin: 411001 }` — access as `student.address.city`
- **Object inside array** — `let students = [{...}, {...}]` — loop through with forEach or for...of
- **Object.keys() / Object.values()** — Get all keys or all values as arrays

### Flow on Screen

- Build a student object live
- Show all access patterns
- Build the task live

### Task

```
Create an object for yourself with:
- name, rollNo, isMale (or isFemale), city, favouriteSubject

Display it on the page as a clean card:
Name: Rahul Patil
Roll No: 42
Gender: Male   ← not "true", convert boolean to readable word
City: Pune
Favourite Subject: Web Technology
```

---

## Video 11 — Date, Math, document, window

### What to Cover

- **Math object** — Built-in. No need to import
  - `Math.round()`, `Math.floor()`, `Math.ceil()`
  - `Math.max()`, `Math.min()`
  - `Math.random()` — gives 0 to 1. For 1-100: `Math.floor(Math.random() * 100) + 1`
  - `Math.sqrt()`, `Math.abs()`, `Math.PI`
- **Date object** — `let now = new Date()`
  - `now.getFullYear()`, `now.getMonth()` (0-indexed, add 1), `now.getDate()`
  - `now.getHours()`, `now.getMinutes()`, `now.getSeconds()`
  - `now.toLocaleDateString()`, `now.toLocaleTimeString()` — human readable
- **window object** — The browser itself. `window.innerWidth`, `window.innerHeight`. `alert()`, `confirm()`, `prompt()` are actually `window.alert()` etc. — window is global so you skip it
- **document object** — Represents the HTML page. `document.title`, `document.URL`, `document.body`
- **Briefly:** `localStorage` exists on window — save data in browser. Just show `localStorage.setItem("name", "Rahul")` and `localStorage.getItem("name")` — don't go deep

### Flow on Screen

- Console for Math and Date
- Page display for the task

### Task

```
Display a live clock on the page that shows:
Current Date: Monday, 22 April 2025
Current Time: 14:35:07

Update it every second using setInterval (briefly explain setInterval here).
```

---

## Video 12 — DOM, BOM & Event Listeners

### What to Cover

- **DOM recap** — Document Object Model. JS sees the HTML as a tree of objects. Every element is a node
- **Selecting elements:**
  - `getElementById()` — by id
  - `getElementsByClassName()` — returns a collection
  - `querySelector()` — CSS selector style, returns first match
  - `querySelectorAll()` — returns all matches as a NodeList
- **Manipulating elements:**
  - `.innerHTML` — read/write HTML inside an element
  - `.textContent` — read/write plain text (safer)
  - `.style.property` — change CSS: `el.style.backgroundColor = "red"`
  - `.classList.add()`, `.classList.remove()`, `.classList.toggle()` — cleaner than inline style
  - `.setAttribute()`, `.getAttribute()`
- **Creating & removing elements:**
  - `document.createElement("div")`
  - `parent.appendChild(child)`
  - `element.remove()`
- **Event Listeners:**
  - `element.addEventListener("click", function)` — the proper way
  - Inline `onclick=""` in HTML — the old way, mention it exists but prefer addEventListener
  - Common events: `click`, `mouseover`, `mouseout`, `keydown`, `keyup`, `input`, `change`, `submit`
- **BOM** — Browser Object Model. `window.location` (redirect: `window.location.href = "..."`), `window.history.back()`, `navigator.userAgent`
- **Event object** — `addEventListener("click", function(e) { })` — `e.target` is what was clicked, `e.preventDefault()` stops default behaviour (important for forms)

### Flow on Screen

- Build the task live from scratch — start with HTML skeleton, add JS step by step

### Task

```
Build a page with:
- A button that changes the body background colour on each click
- Each click picks a different colour (make an array of colours, cycle through)
- Also display the current colour name on the page as text
```

---

## Video 13 — The Bigger World (Awareness Video)

### What to Cover

> This is not a coding video. This is a "show them the map" video. No tasks. Just open their eyes.

- **What you've built so far** — In 12 videos they went from zero to DOM manipulation. That's real
- **The browser is not everything** — JS also runs outside the browser. That's where Node.js comes in
- **V8 Engine** — JS is just text. Something has to read it and execute it. V8 is Google's engine that does that. Chrome uses it. Node.js uses it. That's why JS runs both in browser and on server
- **Node.js** — JS on the server. Show: install Node, create a `.js` file, run it with `node file.js` in terminal — no browser needed. Just show it, don't teach it
- **npm** — Node Package Manager. The world's largest collection of free code packages. Show `npm install` briefly
- **Express.js** — A Node.js framework to build backends and APIs. Show a 5 line "Hello World" server. Don't explain line by line, just show it exists
- **React.js** — A JS library for building UIs. Show a React component. Explain: instead of manually updating DOM like they've been doing, React handles it automatically. This is what companies use
- **JSON** — JavaScript Object Notation. How data travels between frontend and backend. Show a `.json` file — it looks exactly like a JS object. `JSON.stringify()` and `JSON.parse()`
- **.env files** — Storing secrets (API keys, passwords) outside your code. Never push to GitHub
- **.gitignore** — Tell Git which files to ignore. `node_modules/` and `.env` always go here. Show a real `.gitignore`
- **What comes next** — The roadmap: Vanilla JS (done) → DOM projects → ES6 deeper → Node.js → Express → React → full stack. They're at the start of something real

### Flow on Screen

- VS Code + terminal side by side
- Show Node running, show an Express server in browser, show a React component
- Don't pause to explain every line — the point is the view, not the detail

### Task

```
No task for this video.
Just watch. Let it sink in.
```

---

## Quick Reference — All 13 Tasks

| Video | Task Summary                                                 |
| ----- | ------------------------------------------------------------ |
| 01    | Store name, age, city — log with typeof                      |
| 02    | Calculate area and circumference from static radius          |
| 03    | Greet user by name — once with prompt, once with input field |
| 04    | Marks grade checker — A, B, C, D, Fail                       |
| 05    | Multiplication table of any number on page                   |
| 06    | Function that returns area + circumference as object         |
| 07    | Clean dirty name input, extract and display first name       |
| 08    | Array of 5 fruits — display all, first, last, count          |
| 09    | Remove duplicates from array, map each × 10                  |
| 10    | Object of yourself — display as readable card                |
| 11    | Live clock — date and time updating every second             |
| 12    | Background colour changer — cycles through colour array      |
| 13    | No task — awareness video                                    |

---

_vSpringboard Specials — JavaScript Course_
_Built with the belief that nobody should hate web development because of how it was taught._
