// U.S. Marine object that holds the x pos, y pos, height, and width of image
// I am just assigning the values of each of these to 0 as placeholders for initialization.
var Marine = {
    x_cord: 0,
    y_cord: 0,
    width: 0,
    height: 0,
};

// Three Soldier objects that holds the x pos, y pos, height, and width of solder images
var Soldier = {
    x_cord: 0,
    y_cord: 0,
    width: 0,
    height: 0,
    speed: 0  // How fast the solider will move down the screen
};

var Soldier2 = {
    x_cord: 0,
    y_cord: 0,
    width: 0,
    height: 0,
    speed: 0  // How fast the solider will move down the screen
};

var Soldier3 = {
    x_cord: 0,
    y_cord: 0,
    width: 0,
    height: 0,
    speed: 0 // How fast the solider will move down the screen
};

// Array holding the three soldiers that wil be coming at the marine in the game
var soldier_array = new Array(Soldier, Soldier2, Soldier3);

var time_limit = 20;  // Need to survive 10 seconds to beat the game
var time_remaining;
var died = false;

// Assigns the marine object's img value to the image passed in
function preload() {
    marine_image = loadImage('./soldier.png');
    soldier_image = loadImage('./soldier_2.png');
}

function setup() {
    createCanvas(windowWidth/1.5, windowHeight/1.5);

    // Assigning the member variavles of Marine to their appropiate values based on window size
    Marine.x_cord = windowWidth/1.5 * (0.5);
    Marine.y_cord = windowHeight/1.5 * (0.85);
    Marine.width = windowWidth/1.5 * (0.35);
    Marine.height = windowHeight/1.5 * (0.35);

    // Loop that initializing the 3 soldier objects with appropiate values
    for (var i = 0; i < 3; i++) {
        soldier_array[i].x_cord = random(windowWidth/1.5 * (0.20) / 4, windowWidth/1.5 - (windowWidth/1.5 * (0.20)/ 4));
        soldier_array[i].width = windowWidth/1.5 * (0.20);
        soldier_array[i].height = windowHeight/1.5 * (0.20);
        soldier_array[i].speed = random(1, 5);
    }
}

function keyPressed(){
    // Max and Min x coordinates that the solder image can go to before going off-screen
    max_right_edge = windowWidth/1.5 - (windowWidth/1.5 * (0.35)/ 4);
    min_left_edge = windowWidth/1.5 * (0.35) / 4;
    
    // If the LEFT arrow key is pressed, move the marine image to the left
    if (keyCode == LEFT_ARROW && keyIsPressed && Marine.x_cord >= min_left_edge) {
        Marine.x_cord -= 5;

    // If the RIGHT arrow key is pressed, move the marine image to the right 
    } else if (keyCode == RIGHT_ARROW && keyIsPressed && Marine.x_cord <= max_right_edge) {
        Marine.x_cord += 5;
    }
}

function draw() {
    background(194, 178, 128);  // Draws the sand colored background
    
    var current_time = int(millis() / 1000);
    time_remaining = time_limit - current_time;

    textSize(windowWidth/20);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    if (died) {
        background(0);
        fill('red');
        textSize(windowHeight/15);
        text("You Died!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));

    } else {
        if (time_remaining > 0) {
            imageMode(CENTER);
    
            keyPressed();  // Call of keyPressed to enable movement of the marine on the sketch
    
            // Draws the marine image on the screen at specified location
            image(marine_image, Marine.x_cord, Marine.y_cord, Marine.width, Marine.height);
    
            // Loops through the soldier array, which has all three soldiers inside of it.
            // It will move the soldiers down the sketch reset the soldier if off screen.
            for (var i = 0; i < 3; i++) {
                image(soldier_image, soldier_array[i].x_cord, soldier_array[i].y_cord, soldier_array[i].width, soldier_array[i].height);
    
                // Makes the soldier move down the screen at its given speed value
                soldier_array[i].y_cord += soldier_array[i].speed;
                
                // Checks if the any of the soldiers have gone off screen.
                // if off screen, then I reset the soldier back to the top of the sketch.
                // I also randomly spawn the soldier in a different location and change their speed randomly.
                if (soldier_array[i].y_cord >= windowHeight/1.5 + soldier_array[i].height/2) {
                    soldier_array[i].x_cord = random(windowWidth/1.5 * (0.20) / 4, windowWidth/1.5 - (windowWidth/1.5 * (0.20)/ 4));
                    soldier_array[i].y_cord = 0;
                    soldier_array[i].speed = random(1, 5);
                } else if (soldier_array[i].y_cord >= Marine.y_cord - Marine.height/2 
                           && (soldier_array[i].x_cord > Marine.x_cord - Marine.width/2
                               && soldier_array[i].x_cord < Marine.x_cord + Marine.width/2)) {
                                died = true;
    
                }
            }
    
            fill(25, 25, 25);
            rect(CENTER);
            rect(0, windowHeight/1.5 * (0.001), windowWidth/1.2, windowHeight/10);
    
            fill('red');
            if (time_remaining == 1) {
                text("Survive for: " + time_remaining + " second!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.08));
            } else {
                text("Survive for: " + time_remaining + " seconds!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.08));
            }
        } else {
            time_remaining = 0;
            background(0);
            fill('green');
            textSize(windowHeight/15);
            text("You Survived!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
        }
    }

}