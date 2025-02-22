function myFunc() {
  // setTimeout(func, 0) adds func to the event queue.  The event queue is processed AFTER
  // the current execution stack is complete.
  setTimeout(() => {
    console.log("This is a test.");
  }, 0);

  console.log("This will execute first.");
}

myFunc();