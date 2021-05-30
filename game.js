var canvas, ctx, jumping;
const cWidth = window.innerWidth/2.7;
const cHeight = window.innerHeight/1.5;
const pWidth = cWidth / 10;
const pHeight = pWidth;
var myPlayer;

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = cWidth;
    this.canvas.height = cHeight;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[3]);
    this.interval = setInterval(updateGameArea, 10);
    document.addEventListener('keydown', function (e) {
        if(e.key == " ") {
            myGameArea.key = e.key
        }
    });
    document.addEventListener('keyup', (e) =>
        myGameArea.key = false
    );
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function hero(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.moveY = 0;
  this.x = x;
  this.y = y;
  this.update = function () {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
      this.y += this.moveY;
      console.log(this.y);
  }
}

function stopMove() {
    hero.moveY = 0;
}

function jump() {
    hero.moveY -=1;
}

function updateGameArea() {
  myGameArea.clear();
  if (myGameArea.key == " ") {
      jump()
  }
  myPlayer.newPos();
  myPlayer.update();
}

function startGame() {
  myGameArea.start();
  myPlayer = new hero( pWidth, pHeight, "black", cWidth / 2 - pWidth / 2, cHeight - pHeight);
}

 startGame();
