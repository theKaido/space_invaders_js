var ship;
var mechants = [];
var mechants1 = [];
var boss;
var drops = [];
var drops1 = [];
var drops3 = [];
var sound;
var sound1;
var sound2;
var sound3;
var sound4;
var sound5;
var bg;
var fond;
var music;
var music1;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var menu = true;
var start = false;
var img8;
var img9;
var img10;
var img11;
var img12;
var img13;
var img14;
var img15;
var img16;
var img17;
var img18;
var img19;
var lvl1 = "lvl 1"
var lvl2 = "lvl 2"
var lvl3 = "BOSS"
var score = 0;
var scor = "Score: ";

 function preload() {
   sound2 = loadSound('assets/children.mp3');
   music = loadSound('assets/music.mp3');
   music1 = loadSound('assets/vtictoire.mp3');
   font = loadFont('assets/Lady Radical.ttf');
 }

function setup() {
  createCanvas(1000, 800);
  ship = new Ship();
  img1 = loadImage("assets/ship.png");
  img2 = loadImage("assets/drop.png");
  img3 = loadImage("assets/mechant.png");
  img4 = loadImage("assets/START.png");
  img5 = loadImage("assets/bande.png");
  img6 = loadImage("assets/mechant1.png");
  img7 = loadImage("assets/drop1.png");
  img8 = loadImage("assets/ship1.png");
  img9 = loadImage("assets/ship2.png");
  img10 = loadImage("assets/gameover.png");
  img11 = loadImage("assets/menu.png");
  img12 = loadImage("assets/eye1.png");
  img13 = loadImage("assets/eye2.png");
  img14 = loadImage("assets/eye3.png");
  img15 = loadImage("assets/eye4.png");
  img16 = loadImage("assets/eye5.png");
  img17 = loadImage("assets/win.png");
  img18 = loadImage("assets/drop3.png");
  img19 = loadImage("assets/tuto.png");
  sound = loadSound('assets/invaderkilled.wav');
  sound1 = loadSound('assets/shoot.wav');
  sound3 = loadSound('assets/Tship.wav');
  sound4 = loadSound('assets/Eship.wav');
  sound5 = loadSound('assets/death.wav');
   sound2.loop();
  bg = loadImage("assets/space.jpg");
  fond = loadImage("assets/fond.png");
  for (var i = 0; i < 6; i++) {
    mechants[i] = new Mechant(i*150, 60);
  }
  for ( k = 0; k < 6; k++) {
    mechants1[k] = new Mechant1(k*150, 60);
  }
  boss = new Boss(150, 60);
  score = 0;
}

function draw() {
   if (menu){
   background(fond);
   image(img19, 290, 400, 400, 400);
     image(img4, 382, 200, 200, 200);
     if ( mouseX >= 382 && mouseX <= 582 && mouseY >= 200 && mouseY <= 400) {
     image(img5, 382, 200, 200, 200);
   }
   }
  //--------------------------------START----------------------------------------- 
   if (start){
   background(bg);
   fill(150, 102, 153);
   textSize(30);
   text(scor, 50, 780);
   textFont(font);
   fill(150, 102, 153);
   textSize(30);
   text(score, 150, 780);
   textFont(font);
   ship.show();
   ship.move();
   var win = false;
   var gameover = false;
   if (ship.hp === 0){
     sound5.play();
     gameover = true;
   }
    
  if (mechants.length > 0){
    fill(0, 102, 153, 51);
    textSize(100);
   text(lvl1, 400, 400);
   textFont(font);
  for (var i = 0; i < drops.length; i++) {
        drops[i].show();
        drops[i].move();
    for (var j = 0; j < mechants.length; j++) {
      if (drops[i].hits(mechants[j])) {
        mechants[j].grow();
        drops[i].evaporate();
        score = score + 10;
      }
    }
  }
}
   var edge = false;

  for ( i = 0; i < mechants.length; i++) {
    mechants[i].show();
    mechants[i].move();
    if (mechants[i].x > width || mechants[i].x < 0) {
      edge = true;
    }
  }
  
    if (edge) {
    for ( i = 0; i < mechants.length; i++) {
      mechants[i].shiftDown();
    }
  }

 
  for ( i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
    for ( i = mechants.length-1; i >= 0; i--) {
    if (mechants[i].toDelete) {
      mechants.splice(i, 1);
      sound.play();
    }
  }
  

//-------------------------------------------------LEVEL 2 --------------------------------------------------------------------------------  

   if (mechants.length === 0){
  for ( k = 0; k < mechants1.length; k++) {
        fill(0, 102, 153, 51);
    textSize(100);
   text(lvl2, 400, 400);
   textFont(font);
    mechants1[k].show();
    mechants1[k].move();
     if (mechants1[k].x > width || mechants1[k].x < 0) {
       edge = true;
     }
    }
   
   
 for ( i = 0; i < drops.length; i++) {
     drops[i].show();
     drops[i].move();
     for ( l = 0; l < mechants1.length; l++) {
       if (drops[i].hit(mechants1[l])) {
         sound4.play();
         mechants1[l].grow();
         drops[i].evaporate();
         score = score + 5;
       }
     }
   }
   
     if (random(0, 100) > 98){
       for ( k = 0; k < mechants1.length; k++) {
       var drop1 = new Drop1(mechants1[k].x, height);
       drops1.push(drop1);
      }
     }
    
    
    
    for ( m = 0; m < drops1.length; m++) {
     drops1[m].show();
     drops1[m].move();
       if (drops1[m].hits(ship)) {
         score = score - 50;
         sound3.play();
         ship.grow();
        drops1[m].evaporate();
     }
    }
   
     if (edge) {
     for ( k = 0; k < mechants1.length; k++) {
       mechants1[k].shiftDown();
     }
   }


  for ( i = drops.length-1; i >= 0; i--) {
    if (drops[i].toDelete) {
      drops.splice(i, 1);
    }
  }
  
    for ( m = drops1.length-1; m >= 0; m--) {
    if (drops1[m].toDelete) {
      drops1.splice(m, 1);
    }
  }
  
   for ( k = mechants1.length-1; k >= 0; k--) {
     if (mechants1[k].toDelete) {
       mechants1.splice(k, 1);
       sound.play();
       score = score + 10;
      }
   }
   }
// ---------------------------------------------BOSS--------------------------------------------------
   if (mechants1.length === 0){
    fill(0, 102, 153, 51);
    textSize(100);
   text(lvl3, 400, 400);
   textFont(font);
    boss.show();
    boss.move();
     if (boss.x > width || boss.x < 0) {
       edge = true;
     }
     if (boss.y > 200 || boss.y < 0) {
       boss.shiftDown1();
     }
     if (edge) {
       boss.shiftDown();
     }
     
      if (random(0, 100) > 98){
       var drop3 = new Drop3(boss.x, boss.y);
       drops3.push(drop3);
     }
     
     for ( i = 0; i < drops.length; i++) {
     drops[i].show();
     drops[i].move();
       if (drops[i].hitss(boss)) {
         score = score + 5;
         sound4.play();
         boss.grow();
         drops[i].evaporate();
       }
     }
   
      for ( i = 0; i < drops3.length; i++) {
     drops3[i].show();
     drops3[i].move();
       if (drops3[i].hits(ship)) {
         score = score - 50;
         sound3.play();
         ship.grow();
         drops3[i].evaporate();
     }
   }
    for ( m = drops3.length-1; m >= 0; m--) {
    if (drops3[m].toDelete) {
      drops3.splice(m, 1);
    }
  }

  if (boss.toDelete) {
       sound.play();
       score = score + 40;
       win = true;
      }
   
}
   
   
  // -------------------------------------------------------------------------------------------------------
    if(win){
      start = false;
      music1.loop();
      music.pause();
      background(0);
      image(img17, width/4, 150, 500, 200);
      image(img11, 382, 500, 200, 100);
   fill(255, 0, 0);
   textSize(60);
   text(scor, 350, 450);
   textFont(font);
   fill(255, 0, 0);
   textSize(60);
   text(score, 550, 450);
   textFont(font);
    }
    if (gameover){
      start = false;
      sound5.play();
      music.pause();
      background(0);
      image(img10, width/4, 150, 500, 200);
      image(img11, 382, 500, 200, 100);
    fill(255, 0, 0);
   textSize(60);
   text(scor, 350, 450);
   textFont(font);
   fill(255, 0, 0);
   textSize(60);
   text(score, 550, 450);
   textFont(font);
      }
    }
}
function mousePressed() {
    if ( mouseX >= 400 && mouseX <= 600 &&
    mouseY >= 200 && mouseY <= 400) {
      start = true;
      menu = false;
      music.loop();
      sound2.pause();
      score = 0;
      ship.hp = 3;
        for (var i = 0; i < 6; i++) {
    mechants[i] = new Mechant(i*150, 60);
  }
    for ( k = 0; k < 6; k++) {
    mechants1[k] = new Mechant1(k*150, 60);
  }
  boss = new Boss(150, 60);
  for ( m = drops3.length-1; m >= 0; m--) {
      drops3.splice(m, 1);
  }
  for ( m = drops1.length-1; m >= 0; m--) {
      drops1.splice(m, 1);
  }
    for ( i = drops.length-1; i >= 0; i--) {
      drops.splice(i, 1);
      }
  }
    if ( mouseX >= 382 && mouseX <= 582 &&
    mouseY >= 500 && mouseY <= 600){
      menu = true;
      win = false;
      music1.pause();
      sound5.pause();
      gameover = false;
      sound2.play();
    }
}


function keyReleased() {
  if (key != ' ') {
    ship.setDir(0);
  }
}


function keyPressed() {
  if (key === ' ') {
    var drop = new Drop(ship.x, height);
    drops.push(drop);
    sound1.play();
  }
  

  if (keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if (keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }
}