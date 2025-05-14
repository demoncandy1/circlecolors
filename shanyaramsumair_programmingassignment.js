let colorPool; //Array to store possible background colors
let currentColor; // The current background

// Function to select a random color from the colorPool
function getRandomColor() {
  let randomIndex = Math.floor(Math.random() * colorPool.length);
  let item = colorPool[randomIndex];
  
  return item;
}

// This function runs once when the mouse is pressed
function mousePressed() {
  currentColor = getRandomColor(); // Change the background color
}
// This function runs once at the start
function setup() {
  createCanvas(800, 800); // Set up canvas size
  background('#7ca884'); // Initial background color
  
 

  // The array of colors
  colorPool = ['#a58ed1', '#d18eca', '#d1ca8e', '#843939', '#7295ad', '#4f2a4a', '#5b6d5b', '#6ea3a2'];

 // Pick a random color
  currentColor = getRandomColor();
}


// This function runs continously in a loop
function draw() {
  background(currentColor); // Set the background to the current color
  circle(mouseX, mouseY, 50); // Draw a circle that follows the mouse
  
  textSize(40); // Sets text size
  text('Shanya\'s Assignment', 400, 50); // Display the assignment title
}
