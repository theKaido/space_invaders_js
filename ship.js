function Ship() {
  this.x = width/2;
  this.xdir = 0;
  this.r = 30;
  this.y = height-70;
  this.hp = 0;
  
  this.show = function() {
  if (this.hp === 3){
    image(img1, this.x-35, this.y, 70, 70);
  }
  else if (this.hp === 2){
     image(img8, this.x-35, this.y, 70, 70);
  }
  else if (this.hp === 1){
     image(img9, this.x-35, this.y, 70, 70);
  }
  }
  
  this.grow = function() {
    this.hp = this.hp - 1;
  }
  
  this.setDir = function(dir) {
    this.xdir = dir;
  }

  this.move = function(dir) {
    this.x += this.xdir*5;
  }

}