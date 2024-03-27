function Boss(x, y) {
  this.x = x;
  this.y = y;
  this.r = 200;
  this.hp = 50;
  this.xdir = 2;
  this.ydir = 2;
  var change = false;
  var change1 = true;
  
  this.grow = function() {
    this.hp = this.hp - 1;
    if (this.hp === 0) {
      this.toDelete = true;
    }
  }

  
  
  this.shiftDown = function() {
    this.xdir *= -1;
    change = true;
    change1 = false;
  }
    this.shiftDown1 = function() {
    this.ydir *= -1;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
    this.y = this.y + this.ydir;
  }
  

  this.show = function() {

  if (this.hp <= 50){
    image(img12, this.x-110, this.y-110, this.r+20, this.r+50);
  }
  if (this.hp <= 40){
     image(img13, this.x-110, this.y-110, this.r+20, this.r+50);
  }
  if (this.hp <= 30){
     image(img14, this.x-110, this.y-110, this.r+20, this.r+50);
  }
  if (this.hp <= 20){
     image(img15, this.x-110, this.y-110, this.r+20, this.r+50);
  }
  if (this.hp <=10){
     image(img16, this.x-110, this.y-110, this.r+20, this.r+50);
  }
 
  }
  
  
}