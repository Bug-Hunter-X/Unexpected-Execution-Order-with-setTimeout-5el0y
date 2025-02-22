# Unexpected setTimeout Execution

This repository demonstrates a common JavaScript issue related to asynchronous operations and the `setTimeout` function.

## The Problem

Many developers new to JavaScript expect `setTimeout` with a delay of 0 to execute immediately.  However, it's placed in the event queue and executes after the current call stack is cleared.

## The Code

The `bug.js` file contains the problematic code.  It shows that `console.log("This will execute first.")` executes before the `setTimeout` callback, despite the 0 delay.

## The Solution

The `bugSolution.js` file does not change the functionality but adds a comment explaining why the code runs the way it does.