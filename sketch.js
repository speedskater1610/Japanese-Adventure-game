/// @breif first thing to run (init)
function setup() {
  // set up the graphics window to be 75% of the users window 
  createCanvas(window.innerWidth * 0.75, window.innerHeight * 0.75);
  
  //create the player and set them up
  let player = new Player("defualt", 1);
}

/// @breif draw things on the screen from here (main loop at 60fps)
function draw() {
  background(220);
}
