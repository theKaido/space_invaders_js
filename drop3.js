function Drop3(x, y) {
  this.x = x;
  this.y = y;
  this.r = 50;
  this.xx = this.x-50;
  this.yy = this.y;
  
  this.toDelete = false;

  this.show = function() {
    image(img18, this.xx, this.yy, this.r*2, this.r*3);
  // fill(255, 0, 200, 150);
  // ellipse(this.x, this.y+55, this.r*2, this.r*2);

  }
  if (boss.hp <= 40){
     this.r = 75;
     this.xx = this.x-75;
     this.yy = this.y-30;
  }
  if (boss.hp <= 30){
     this.r = 100;
     this.xx = this.x-100;
     this.yy = this.y-60;
  }
  if (boss.hp <= 20){
     this.r = 125;
     this.xx = this.x-125;
     this.yy = this.y-80;
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
    this.yy = this.yy + 5;
    this.y = this.y + 5;
  }
  

}