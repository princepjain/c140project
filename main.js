function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvass")
	video = createCapture(VIDEO)
	video.size(1240,336)
	video.hide();
	poseNet = ml5.poseNet(video,modalloaded)
}

function draw() {
	game()
	image(video,0,0,1240,336)
}

function modalloaded(){
	console.log("modalloaded")

}






