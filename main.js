noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	jump_wave = loadSound("jump.wav");
	kick_wave = loadSound("kick.wav");
	mariodie_wave = loadSound("mariodie.wav");
	coin_wave = loadSound("coin.wav");
	gameover_wave = loadSound("gameover.wav");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(700, 400);
	video.parent('game_console');
	
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}
function modelLoaded(){
	console.log("Model is Loaded");
}

function gotPoses(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;

		console.log("nose X = " + noseX + "nose Y = " + noseY);
	}
}

function draw() {
	game()
}






