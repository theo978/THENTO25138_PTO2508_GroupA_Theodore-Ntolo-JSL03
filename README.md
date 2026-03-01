

# Task Board Project (JavaScript)

## About This Project

This is a small JavaScript task board project.
It helps you keep track of tasks and their status: **todo**, **doing**, or **done**.

The project starts with a few tasks already added.
Then it allows the user to add new tasks using popup prompts.

At the end, it shows:

* All tasks
* Only the tasks that are completed

Everything is printed in the browser console.

---

## How It Works

1. The project starts with **3 default tasks**.
2. The user can add **up to 3 new tasks**.
3. For each new task, the user is asked to enter:

   * Task title
   * Task description
   * Task status (`todo`, `doing`, or `done`)
4. The status is checked to make sure it is valid.

   * If it’s not valid, the user is asked again.
5. Each new task gets a **unique ID** automatically.
6. When enough tasks are added, the user gets a message.
7. Completed tasks are filtered and shown in the console.
8. Finally, **all tasks** are logged in the console.

---

## Task Structure

Each task looks like this:

* **id** – a unique number
* **title** – the name of the task
* **description** – details about the task
* **status** – `todo`, `doing`, or `done`

---

## How to Run It

1. Open the file in a browser.
2. Open **DevTools** (Right-click → Inspect → Console).
3. Follow the popup prompts to add tasks.
4. Check the console to see:

   * Completed tasks
   * All tasks

---

## Example Output

* A list of completed tasks
* A full list of all tasks (old + new)

---

## Why This Project Is Useful

* I Practice working with arrays and objects
* I learnt how to use `prompt`, `alert`, and `console.log`
*I Understood filtering data in JavaScript
* I got comfortable with basic logic and loops

---
