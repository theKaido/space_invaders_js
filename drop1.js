function Drop1(x, y) {
  this.x = x;
  this.y = y-730;
  this.r = 10;
  this.toDelete = false;

  this.show = function() {
    image(img7, this.x-27, this.y-7, 50, 50);
    // ellipse(this.x, this.y, this.r*2, this.r*2);

  }

   this.evaporate = function() {
     this.toDelete = true;
   }

   this.hits = function(ship) {
     var d = dist(this.x, this.y, ship.x, ship.y);
     if (d < this.r + ship.r) {
       return true;
     } else {
       return false;
     }
   }
  
  this.move = function() {
    this.y = this.y + 5;
  }
  

}