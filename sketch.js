let s5;

function setup() {

  // Background information about my project
  let s = 'The First and Second Battles of Fallujah took place during the Iraq War. '
  + 'The first battle took place from April 4 - May 1 2004. '
  + 'The second battle took place from November 7 - December 23, 2004. ';

  let s2 = 'The catalyst for these battles was the brutal killing and mutilation of four Blackwater PMCs. '
  + 'These mutilations were broadcasted and spread all over the media at the time.'

  let s3 = 'I will be focusing primarily on the second battle which caused 95 U.S. deaths and around 1500 local deaths. '
  + 'Around 600 of these local deaths were civilians, while the rest were insurgents/militants.';

  let s4 = 'The fighting during this battle was super dense urban combat which led to the massive percentage '
  + 'of civilian casualties. This second battle was especially traumatizing given the circumstances and led '
  + 'to the public opinions severely declining regarding the Iraq war.';

  s5 = 'CONTENT WARNING';

  createCanvas(windowWidth/1.5, windowHeight/1.5);
  background(194, 178, 128);

  textSize(windowHeight/50);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  rectMode(CENTER);

  fill(25, 25, 25);

  text(s, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.05), windowWidth/1.5 - windowWidth/50);

  text(s2, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.25), windowWidth/1.5 - windowWidth/50);

  text(s3, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.45), windowWidth/1.5 - windowWidth/50);

  text(s4, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.65), windowWidth/1.5 - windowWidth/50);
}

function draw() {
  // Makes the CONTENT WARNING flash red a few times second
  if (frameCount % 12 == 0) {
    fill('red');
  } else {
    fill(25, 25, 25);
  }
  // Draws the content warning
  text(s5, windowWidth/1.5 * (0.5), windowHeight/1.5 * (0.90), windowWidth/1.5 - windowWidth/50);
}
