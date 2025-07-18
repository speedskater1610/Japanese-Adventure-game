/*

RULES 

- follow these (they apply to C but many things also apply to JS
https://spinroot.com/gerard/pdf/P10.pdf

- use TODO at the start of a comment to dennote that something has be be done and follow it with the person who has to do its name in parenthesises

- if you see a spelling or grammer mistake inside of a comment fix it 

- all varibles must be camelCased

- all classes must be PascalCased

- constants (const) {
  * must be SCREAMING_SNAKE_CASE if used like C++/C macros
  * must be lower_snake_cased if used as a normal variable (ex: func param)
}

- functions {
  * user defined functions must be snake_cased
  * p5js functiosn are normal camelCased 
  * must have doxygen comments (EX:     /// @breif     /// @param     /// @return)  
  * try to have them between 0 - 75 lines of code; up to 100 is acceptable BUT consider spliting them into diffrent parts
}

-  for functions classes and all sorts of calls and intits dont have a ton of magic numbers without a description 
  (EX: DONT - "my_func("hello", 7, 8, "diddy");" 
  DO - {
    if there are >3 params then do this 
    
    // pass info in about a person
    const greet  = "hello"; 
    let age = 7;
    let daysUntilBirthday = 8;
    let biggestFear = "diddy";
    my_func(greet, age, daysUntilBirthday, biggestFear);


    ------------------------------------
    OR if there is 3>= params then do this
    my_func("john", "47");    // name is john and is 47 years old
    
  })
*/

let WINDOW_WIDTH = window.innerWidth * 0.75;
let WINDOW_HEIGHT = window.innerHeight * 0.75;


function set_up_input_buttons () {
  // TODO (russel) set up the buttons to be in place
  // W
  button = createButton("W");
  button.position(WINDOW_WIDTH, WINDOW_HEIGHT);
  button.mousePressed(() => {
    console.log("W");
  });

  // A
  button = createButton("A");
  button.position(WINDOW_WIDTH, WINDOW_HEIGHT);
  button.mousePressed(() => {
    console.log("A");
  });

  // S
  button = createButton("S");
  button.position(WINDOW_WIDTH, WINDOW_HEIGHT);
  button.mousePressed(() => {
    console.log("S");
  });

  // D
  button = createButton("D");
  button.position(WINDOW_WIDTH, WINDOW_HEIGHT);
  button.mousePressed(() => {
    console.log("D");
  });
};

let levels = [
  [], // level 0
  [], // level 1
  [], // level 2
  [], // level 3
  [], // level 4
  [], // level 5
];


// create the player and set them up
let player = new Player("defualt", 1);
console.log(player);

/// @breif first thing to run (init)
function setup() {
  // set up the graphics window to be 75% of the users window 
  createCanvas(window.innerWidth * 0.75, window.innerHeight * 0.75);

  // set up input buttons
  set_up_input_buttons();
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
