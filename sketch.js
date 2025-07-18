let levels = [
  [],//level 0
  [],//level 1
  [],//level 2
  [],//level 3
  [],//level 4
  [],//level 5
];

//create the player and set them up
let player = new Player("defualt", 1);
console.log(player);

/// @breif first thing to run (init)
function setup() {
  // set up the graphics window to be 75% of the users window 
  createCanvas(window.innerWidth * 0.75, window.innerHeight * 0.75);

  //W
  W_button = createButton("W");
  W_button.position(window.innerWidth * 0.50, window.innerHeight * 0.15);
  W_button.mousePressed(() => {
    console.log("W");
  });

  //A
  A_button = createButton("A");
  A_button.position(window.innerWidth * 0.40, window.innerHeight * 0.05);
  A_button.mousePressed(() => {
    console.log("W");
  });

}

/// @breif draw things on the screen from here (main loop at 60fps)
function draw() {
  background(220);
}


/*
mouseX, mouseY: position of the mouse
mouseIsPressed: true while mouse is down
*/
// @breif when the mouse gets clicked 
function mousePressed() {
  console.log("Mouse clicked at:", mouseX, mouseY);
}
