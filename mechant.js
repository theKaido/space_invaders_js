function Mechant(x, y) {
  this.x = x;
  this.y = y;
  this.r = 50;
  this.hp = 1;
  this.xdir = 1;

  this.grow = function() {
     this.hp = this.hp - 1;
     if (this.hp === 0) {
       this.toDelete = true;
     }
  }

  this.shiftDown = function() {
    this.xdir *= -1;
    this.y += 80;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.show = function() {
    image(img3, this.x-100, this.y-90, this.r*4, this.r*4);
    //fill(255, 0, 200, 150);
    //ellipse(this.x, this.y, this.r*2, this.r*2);
  }
}
