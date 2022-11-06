// Image variables representing objects
var new_highway;  // Taken from Google Earth (website version)
var old_highway;  // Taken from Google Earth Pro (I took a screenshot of it)

// https://www.walmart.com/ip/3-Hole-Winter-Ski-Mask-Balaclava-Black/48346342
var mask;

// https://www.nbcnews.com/id/wbna5911852
var insurgent;

// https://www.allaboutbirds.org/guide/Rock_Pigeon/id
var pigeon;

// https://www.businessinsider.com/fallujah-after-isis-2016-7
var building;

// Text about each of the objects that can be clicked

// https://www.youtube.com/watch?v=qPpRYm9iMto
var highway_text = "The image that you just clicked on is Highway 10 located in the center of Fallujah today."
+ "\n\nThis same highway was a main contender of trauma that U.S. Marines faced during combat."
+ "\n\nMarines had to cross this six lane highway in order to reach a weapon cache and insurgent headquarters."
+ "\n\nThis highway had multi-story buildings alongside it, all of which had numerous windows."
+ "\n\nMany U.S. Marines lost their lives trying to cross this highway as 'it seemed like fire was coming from everywhere.'";

// https://www.youtube.com/watch?v=sphSdmOusI0
var mask_text = "The image that you just clicked on is a black mask that many insurgents wore in Fallujah."
+ "\n\nThis black ski mask was usually paired with black clothing and other black apparel."
+ "\n\nThese insurgents were the main combatants that U.S. marines faced when fighting in the city of Fallujah."
+ "\n\nThese insurgents were extremely difficult to spot during nightime operations given their all-black outfits."
+ "\n\nAs previously mentioned on the first page, many U.S. Marines lost their lives because of these black outfits.";

// https://www.youtube.com/watch?v=sphSdmOusI0
var pigeon_text = "The pigeon that you clicked on represents on what Elliot Ackerman remembers to this day."
+ "\n\nElliot Ackerman was a Marine Platoon Leader during the second battle of Fallujah."
+ "\n\nHe and his platoon were holed up in a building, and there was only one way in and out."
+ "\n\nHe stuck out his head through the only doorway, and a machine gun (PKM) started shooting at him."
+ "\n\nHe tumbled back into the building unscathed, and saw pigeons trying to land on a head-height wall next to the doorway."
+ "\n\n\The pigeons were trying to land on the wall, but the PKM kept shooting small bursts at Ackerman so they couldn't land.";


// Creates a clickable image of a highway
function create_new_highway(made = false) {
    if (!made) {
        new_highway = createImg('highway_now.png');
    }
    new_highway.position(windowWidth/1.5 * (0.2), windowHeight/1.5 * (0.3));
    new_highway.size(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
}

// Creates a clickable image of a black ski mask
function create_mask(made = false) {
    if (!made) {
        mask = createImg('mask.png');
    }
    mask.position(windowWidth/1.5 * (0.8), windowHeight/1.5 * (0.3));
    mask.size(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
}

// Creates a clickable image of a pigeon
function create_pigeon(made = false) {
    if (!made) {
        pigeon = createImg('pigeon.png');
    }
    pigeon.position(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.9));
    pigeon.size(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
}


function setup() {
    createCanvas(windowWidth/1.5, windowHeight/1.5);
    background(0);  // BLack background

    textSize(windowHeight/50);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);

    fill(194, 178, 128);  // Changes fill to sand color (for text)

    rectMode(CENTER);

    // Draws all of the images on the main page
    create_new_highway();
    create_mask();
    create_pigeon();
}

function draw() {
    // Adds functionality to all the images
    // You can click on all of them and move to an info page
    new_highway.mousePressed(go_to_highway_info);
    mask.mousePressed(go_to_mask_info);
    pigeon.mousePressed(go_to_pigeon_info);
}

//
// START OF GO BACK TO IMAGES FUNCTIONS
//
// These functions back the text screens go back to the main screen with the 3 images of objects
function go_back_to_images() {
    // Hides the old image of the highway on screen
    old_highway.size(0,0);

    background(0);  // Hides the text on screen

    // Draw the images again because they were hidden previously
    create_new_highway(true);
    create_mask(true);
    create_pigeon(true);
}

function go_back_to_images_mask() {
    // Hides the old image of the mask on screen
    insurgent.size(0,0);

    background(0);  // Hides the text on screen

    // Draw the images again because they were hidden previously
    create_new_highway(true);
    create_mask(true);
    create_pigeon(true);
}

function go_back_to_images_pigeon() {
    // Hides the old image of the mask on screen
    building.size(0,0);

    background(0);  // Hides the text on screen

    // Draw the images again because they were hidden previously
    create_new_highway(true);
    create_mask(true);
    create_pigeon(true);
}
//
// END OF GO BACK TO MAIN PAGE FUNCTIONS
//


//
// START OF GO TO INFO FUNCTIONS
//
// These functions back to respective information pages if an image of an object is clicked
function go_to_highway_info() {
    // Hides the images on the screen
    new_highway.size(0,0);
    mask.size(0,0);
    pigeon.size(0,0);

    // Draws the text about the highway
    text(highway_text, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.05), windowWidth/1.5 - windowWidth/50);

    // Creates clickable image of highway 10 back in september, 2004
    old_highway = createImg('highway_2004.png');
    old_highway.position(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.9));
    old_highway.size(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
    old_highway.mousePressed(go_back_to_images);  // Go back to main page if clicked
}

function go_to_mask_info() {
    // Hides the images on the screen
    new_highway.size(0,0);
    mask.size(0,0);
    pigeon.size(0,0);

    // Draws the text about the mask
    text(mask_text, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.05), windowWidth/1.5 - windowWidth/50);

    // Creates a clickable image of an insurgent
    insurgent = createImg('insurgent.png');
    insurgent.position(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.9));
    insurgent.size(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.5));
    insurgent.mousePressed(go_back_to_images_mask);  // Go back to main page if clicked
}

function go_to_pigeon_info() {
    // Hides the images on the screen
    new_highway.size(0,0);
    mask.size(0,0);
    pigeon.size(0,0);

    // Draw text about the pigeon
    text(pigeon_text, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.05), windowWidth/1.5 - windowWidth/50);

    // Creates a clickable image of a building
    building = createImg('building.png');
    building.position(windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.95));
    building.size(windowWidth/1.5 * (0.45), windowHeight/1.5 * (0.45));
    building.mousePressed(go_back_to_images_pigeon);  // Go back to main page if clicked
}