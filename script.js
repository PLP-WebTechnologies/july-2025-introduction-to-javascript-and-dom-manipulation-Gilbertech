// ------------------------------
// Part 1: Variables + Conditionals
// ------------------------------
let userName = "Gilbert";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// ------------------------------
// Part 2: Functions
// ------------------------------
function greetUser(name) {
  return `Hello, ${name}! Welcome back.`;
}

function calculateTotal(items) {
  let total = 0;
  for (let price of items) {
    total += price;
  }
  return total;
}

// ------------------------------
// Part 3: Loops
// ------------------------------
const prices = [100, 200, 300];
console.log("Item Prices:");
prices.forEach((price, index) => {
  console.log(`Item ${index + 1}: KSh ${price}`);
});

let countdown = 3;
while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}

// ------------------------------
// Part 4: DOM Manipulation
// ------------------------------

// 1. Change text content
document.getElementById("message").textContent = greetUser(userName);

// 2. Button click event
document.getElementById("greetBtn").addEventListener("click", function () {
  alert("You clicked the greet button!");
});

// 3. Dynamic list creation
const listElement = document.getElementById("loopList");
prices.forEach(price => {
  const li = document.createElement("li");
  li.textContent = `Price: KSh ${price}`;
  listElement.appendChild(li);
});
