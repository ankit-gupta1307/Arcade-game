// Enemies our player must avoid
var Game = function() {
	this.gameOver = false;
	this.gameWin = false;
};


var Enemies = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/enemy-bug.png';
	this.multiplier = Math.floor((Math.random()*5) + 1);
	this.xo = x;
	this.yo = y;
};

var Enemo = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/enemy-bug1.png';
	this.multiplier = Math.floor((Math.random()*5) + 1);
	this.xo = x;
	this.yo = y;
};


// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemies.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	/*this.x = this.x + 101 * dt * this.multiplier;
	 if(this.y - 15 == player.y  && (this.x > player.x - 20 && this.x < player.x + 20)) {
		 player.lives--;
		 document.getElementsByClassName('lives')[0].innerHTML = 'Lives: ' + player.lives;
		 if(player.lives === 0) {
			 game.gameOver = true;
		 } else {
			 
		  player.reset();
		  
		 }
		 
	 } */
	 if (this.x > 705) {
		 this.reset();
	 }
	
	
};

Enemo.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	this.x = this.x  - 101 * dt * this.multiplier;
	 /* if(this.y - 15 == player.y  && (this.x > player.x - 20 && this.x < player.x + 20)) {
		 player.lives--;
		 document.getElementsByClassName('lives')[0].innerHTML = 'Lives: ' + player.lives;
		 if(player.lives === 0) {
			 game.gameOver = true;
		 } else {
			 
		  player.reset();
		  
		 }
		 
	 } */
	 if (this.x < -200) {
		 this.reset();
	 }
	
	
};

	Enemies.prototype.reset = function() {
	this.x =  -200;
	var yVals = [225, 305, 145, 65, 370];
	this.y = yVals[Math.floor((Math.random() * 4))];
	};
	
	Enemo.prototype.reset = function() {
	this.x =  705;
	var yVals = [225, 305, 145, 65, 370];
	this.y = yVals[Math.floor((Math.random() * 4))];
	};


// Draw the enemy on the screen, required method for game
Enemies.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
Enemo.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/char-boy.png';
	this.xo = x;
	this.yo = y;
	this.lives = 5;
};


Player.prototype.handleInput = function(key) {
	if(key === 'up') {
		this.y = this.y-80;
	} else if(key === 'down') {
		this.y = this.y+80;
	} else if(key === 'left') {
		this.x = this.x-101;
	} else if(key === 'right') {
		this.x = this.x+101;
	}
	
	if(this.x < 0) {
		this.x = 0;
	} else if (this.x > 404) {
		this.x = 404;
	} else if (this.y > 450) {
		this.y = 450;
	} else if(this.y < 0 && (this.x > 0 && this.x < 505)) {
		game.gameWin = true;
	}
	
	if(this.x == 99 && this.y == 450) {
		this.x = 200;
	} else if (this.x == 301 && this.y == 450) {
		this.x = 200;
	} else if(this.x < 99 && this.y == 370) {
		this.x = 99;
		this.y = 370;
	} else if(this.x == 402 && this.y == 370) {
		this.x = 301;
		this.y = 370;
	}
	
	if (this.y == 130 && this.x == 200) {
		this.x = 200;
		this.y = 210;
	} else if (this.y == 130 && this.x == 200) {
		this.x = 99;
		this.y = 210;
	} else if (this.y == 130 && (this.x > 99 && this.x < 301)) {
		this.x = 99;
		this.y = 130;
	}
}; 

Player.prototype.reset = function() {
	this.x = this.xo;
	this.y = this.yo;
	this.sprite = "images/char-boy.png";
	this.multiplier = Math.floor((Math.random()*5) + 1);
};

Player.prototype.update = function() {
	this.x = this.x;
	this.y = this.y;
};

Player.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Stones = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/stone-block.png';
	
};

Stones.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y);  
}; 

var Water = function(x,y) {
	this.x = x;
	this.y = y;
	this.sprite = 'images/water-block1.png';
};

Water.prototype.render = function() {
	ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

var allWater = [];
for (i=0; i<4; i++) {
	var x = [0, 101, 202, 303, 404];
	var y = 210;
	
	var water = new Water(x[0], y);
	var water1 = new Water(x[1], y);
	var water2 = new Water(x[2], y);
	
	allWater.push(water);
	allWater.push(water1);
	allWater.push(water2);
	
}



var allStones = [];
var yVal = [480];
for(i=0; i<4; i++) {
	var x = [0, 101, 303, 404];
	var y = 400;
	var yo = 480;
	
	var stones = new Stones(x[0],y);
	var stones3 = new Stones(x[3], y);
	var stones4 = new Stones(x[0],yo);
	var stones5 = new Stones(x[1],yo);
	var stones6 = new Stones(x[2],yo);
	var stones7 = new Stones(x[3],yo);
	allStones.push(stones);
	
	
	allStones.push(stones3);
	allStones.push(stones4);
	allStones.push(stones5);
	allStones.push(stones6);
	allStones.push(stones7);
}




var player = new Player(200, 450);

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
yVals = [225, 305, 145, 65, 370];
for (i =0; i <3; i++) {
  var x = Math.floor((Math.random()*-1000)+1);
  
  var y = yVals[Math.floor(Math.random()*5)];
  var enemy = new Enemies(x, y);
  allEnemies.push(enemy); }

var allEnemo = [];

for (i =0; i <2; i++) {
  var x = Math.floor((Math.random()*+1000)+1);
  var yVals = [145, 65]
  var y = yVals[Math.floor(Math.random()*2)];
  var enemy = new Enemo(x, y);
allEnemo.push(enemy); }

for (i =0; i <2; i++) {
  var x = Math.floor((Math.random()*+1000)+1);
   var yVals = [225, 305, 370];
 
  var y = yVals[Math.floor(Math.random()*3)];
  var enemy = new Enemo(x, y);
allEnemo.push(enemy); }



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

var game = new Game();


