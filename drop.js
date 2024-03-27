function Drop(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.toDelete = false;

  this.show = function() {
    image(img2, this.x-15, this.y-105, 30, 30);
    //ellipse(this.x, this.y, this.r*2, this.r*2);

  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(mechant) {
    var d = dist(this.x, this.y, mechant.x, mechant.y);
    if (d < this.r + mechant.r) {
      return true;
    } else {
      return false;
    }
  }
  
    this.hit = function(mechant1) {
    var d = dist(this.x, this.y, mechant1.x, mechant1.y);
    if (d < this.r + mechant1.r) {
      return true;
    } else {
      return false;
    }
  }
      this.hitss = function(boss) {
    var d = dist(this.x, this.y, boss.x, boss.y);
    if (d < this.r + boss.r) {
      return true;
    } else {
      return false;
    }
  }
  
  this.move = function() {
    this.y = this.y - 10;
  }

}
