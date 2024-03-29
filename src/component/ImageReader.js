export class ImageReader {
	image;
	draw_interval;
	canvas;
	canvas2;
	ctx;
	ctx2;
	image_width;
	image_height;
	video_len;
	video;
	draw_settime_out;
	is_paused;

	constructor() {
		this.image = new Image();
		this.image_width = 288*2;
		this.image_height = 216*2;

		this.video = document.createElement("video");
		this.video.src = "./resources/video/Bad Apple but it's in 4k 60fps.mp4";
		this.video.width = this.image_width;
		// document.body.appendChild(this.video);

		this.canvas = document.getElementById("canvas");
		this.canvas.width = this.image_width;
		this.canvas.height = this.image_height;
		this.ctx = this.canvas.getContext("2d");
		
		this.canvas2 = document.createElement("canvas");
		this.canvas2.width = this.image_width;
		this.canvas2.height = this.image_height;
		this.ctx2 = this.canvas2.getContext("2d");

		this.is_paused = true;
	}

	draw() {
		this.ctx.drawImage(this.video,0,0, this.image_width, this.image_height);

		if(this.is_paused == true) return;
		// console.log("!");
		this.draw_settime_out = setTimeout(() => {
			this.draw();
		}, 5);  
	}

	play() {
		this.video.play();
		this.is_paused = false;
		this.draw();
	}

	pause() {
		this.video.pause();
		this.is_paused = true;
	}

}

