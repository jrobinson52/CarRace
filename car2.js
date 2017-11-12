var winner = false;
var redcar = makeCar("red");
var yellowcar = makeCar("yellow");
var greencar = makeCar("green")
go();

function makeCar(col) {

  var car =
  {
    speed: 0,
    color: col,
    topspeed: Math.floor(Math.random() * 50) + 50,
    acceleration: Math.floor(Math.random() * 5) + 1,
    position: 0,

    race: function() {
      var me = document.getElementById(this.color);
      this.speed += this.acceleration;
      this.position += this.speed;
      if(this.speed > this.topspeed)  {
        this.speed = this.topspeed;
      }
      var goal = document.getElementById("finish").getBoundingClientRect().left;
      if(goal <= this.position + 200 && !winner) {
        winner  = true;
      }
      me.style.paddingLeft = this.position + "px";
    },

    statsOut: function() {
  //    document.getElementById("lbl" + this.color).text = "Speed: " + this.speed;
    }
  };
  return car;
}

function go() {
  redcar.race();
//  redcar.statsOut();
  yellowcar.race();
//  yellowcar.statsOut();
  greencar.race();
//  greencar.statsOut();

  if(!winner) {
    setTimeout("go()", 50);

  }
}
