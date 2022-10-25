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
var time_remaining;  // Time to be displayd on countdown
var died = false;  // Game state to see if the player is still alive

var sound_slider;  // Volume slider
var battle_fodder;  // Background noise (gunshots, explosions, etc.)

// Loads all the necessary images and sounds
function preload() {
    marine_image = loadImage('./soldier.png');
    soldier_image = loadImage('./soldier_2.png');
    battle_fodder = loadSound('./battle_sound.mp3');
}

function setup() {
    createCanvas(windowWidth/1.5, windowHeight/1.5);

    sound_slider = createSlider(0, 1, 1, 0.05);  // Create a slider to control sound volume
    sound_slider.addClass("Slider");
    
    battle_fodder.loop();  // Starts playing the sound

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

    battle_fodder.setVolume(sound_slider.value());  // Adjusts the sound based on slider value
    
    var current_time = int(millis() / 1000);  // Seconds since the sketch began
    time_remaining = time_limit - current_time;  // Time on countdown is 20 - current seconds passed

    // Text styling
    textSize(windowWidth/20);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    // If the player hit an incoming soldier, end the game.
    // Also, display "YOU DIED!" on screen to notify the player they lost.
    if (died) {
        background(0);
        fill('red');
        textSize(windowHeight/15);
        text("You Died!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
    
    // The player is still playing the game.
    // (The player has not hit an incoming soldier);
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
                
                // Check to see if the player hits one of the 3 incoming soldiers
                // if so, then it will end the game next interation.
                } else if (soldier_array[i].y_cord >= Marine.y_cord - Marine.height/2 
                           && (soldier_array[i].x_cord > Marine.x_cord - Marine.width/2
                               && soldier_array[i].x_cord < Marine.x_cord + Marine.width/2)) {
                                died = true;
    
                }
            }
            
            // Gray box housing the countdown
            fill(25, 25, 25);
            rect(CENTER);
            rect(0, windowHeight/1.5 * (0.001), windowWidth/1.2, windowHeight/10);
            fill('red');

            // Time remaining display on the top of the screen.
            if (time_remaining == 1) {
                text("Survive for: " + time_remaining + " second!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.08));
            } else {
                text("Survive for: " + time_remaining + " seconds!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.08));
            }
        
        // The player survived (did not get hit) for 20 seconds.
        // This means the player beat the game!
        // Displays "YOU SURVIVED!" on a the screen.
        } else {
            time_remaining = 0;
            background(0);
            fill('green');
            textSize(windowHeight/15);
            text("You Survived!", windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
        }
    }

}