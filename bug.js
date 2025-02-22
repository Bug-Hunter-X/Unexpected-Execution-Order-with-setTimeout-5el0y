function myFunc() {
  setTimeout(() => {
    console.log("This is a test.");
  }, 0);

  console.log("This will execute first.");
}

myFunc();