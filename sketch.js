let pos = 0;
let speedMod;
let rouletteStarted;
let rouletteIsStopping;

setup = () => {
	createCanvas(640, 480);
	speedMod = 2;
	rouletteStarted = false;
	rouletteIsStopping = false;
	noLoop();
}

draw = () => {
	if (int(speedMod) < 30) {
		if (rouletteIsStopping) {
			speedMod += 0.2;
		}
		if (frameCount % int(speedMod) === 0) {
			pos = (pos + 1) % 30;
		}
	} else {
		setup();
	}

	for (let i = 30; i <= 390; i += 12) {
		let j = 30 + pos * 12;
		arc(width / 2, height / 2, 300, 300, radians(i), radians(i + 12));
		if (i === j) {
			fill(255, 255, 0);
		} else {
			fill(255, 255, 255);
		}
	}
	noFill();

	circle(width / 2, height / 2, 250);

	fill(125,255,100);
  arc(width/2, height/2, 250, 250, radians(30), radians(66));
  fill(250, 250, 50);
  arc(width/2, height/2, 250, 250, radians(66), radians(102));
  fill(255,200,100);
  arc(width/2, height/2, 250, 250, radians(102), radians(138));
  fill(250, 200,0);
  arc(width/2, height/2, 250, 250, radians(138), radians(174));
  fill(255, 0, 0);
  arc(width/2, height/2, 250, 250, radians(174), radians(210));
  fill(255,0, 125);
  arc(width/2, height/2, 250, 250, radians(210), radians(246));
  fill(255,0, 255);
  arc(width/2, height/2, 250, 250, radians(246), radians(282));
  fill(0,0,255);
  arc(width/2, height/2, 250, 250, radians(282), radians(318));
  fill(0,125,255);
  arc(width/2, height/2, 250, 250, radians(318), radians(354));
  fill(0, 255, 0);
  arc(width/2, height/2, 250, 250, radians(354), radians(390));
	translate(width / 2, height / 2);
	strokeWeight(1);
	for (let i = 0; i <= 360; i += 12) {
		line(0, 125, 0, 150);
		rotate(PI / 15);
		noFill();
	}
  fill(0);
  textSize(40);
  text(1,8,75);
  text(2,-38,75);
  text(3,-69,55);
  text(4,-80,15);
  text(5,-73,-25);
  text(6,-35,-55);
  text(7,15,-50);
  text(8,50,-30);
  text(9,68,20);
  text(10,37,65);
}

mousePressed = () => {
	if (rouletteStarted) {
		rouletteIsStopping = true;
	}
	if (!rouletteIsStopping) {
		rouletteStarted = true;
		loop();
	}
}
