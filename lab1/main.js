// Request username and greet
const userName = prompt("Please enter your name:", "Guest");
document.getElementById("welcome-message").textContent = `Hello ${userName}, welcome to the JavaScript task.`;

// Primary array setup
let colors = ['Red', 'Green', 'Blue', 'Yellow', 'Purple'];
alert(colors[2]);

colors[colors.length - 1] = 'Orange';
alert(colors[colors.length - 1]);

colors[5] = 'Pink';
colors.push('Brown');
colors.push('White', 'Black');
colors.unshift('Gold');
colors.unshift('Silver');

// Secondary array
const fruits = ['Apple', 'Banana', 'Cherry'];
const arrayDiv = document.getElementById("array-section");
arrayDiv.innerHTML += `<p>First fruit: <strong>${fruits[0]}</strong></p>`;
arrayDiv.innerHTML += `<p>Last fruit: <strong>${fruits[fruits.length - 1]}</strong></p>`;
fruits.unshift('Mango');
arrayDiv.innerHTML += `<p>Now first fruit: <strong>${fruits[0]}</strong></p>`;

// Show part of primary array using while
let count = 0;
const halfDiv = document.getElementById("half-array-output");
halfDiv.textContent = "First half of colors: ";
while (count < Math.floor(colors.length / 2)) {
    halfDiv.textContent += colors[count] + " ";
    count++;
}

// Show all of second array using for loop
const fullDiv = document.getElementById("full-array-output");
fullDiv.textContent = "All fruits: ";
for (let i = 0; i < fruits.length; i++) {
    fullDiv.textContent += fruits[i] + " ";
}

// Function to alert data
function revealData() {
    alert(`Hello ${userName},\nFirst color is: ${colors[0]}`);
}
