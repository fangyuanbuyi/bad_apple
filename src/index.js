let image = new Image();
const image_width = 288*2;
const image_height = 216*2;
const video_len = 219 * 1000; // ms
const sprite_count = 2630;
const draw_interval = video_len / sprite_count * 2;



const canvas = document.getElementById("canvas");
canvas.width = image_width;
canvas.height = image_height;
const ctx = canvas.getContext("2d");

let canvas2 = document.createElement("canvas");
canvas2.width = image_width;
canvas2.height = image_height;
const ctx2 = canvas2.getContext("2d");

function print() {
	for(let x = 0; x * 6 < image_width; x++ ) {
		for(let y = 0; y * 6 < image_height; y++) {
			let imageData = ctx2.getImageData(x*6+2,y*6+2,1,1);
			ctx.fillStyle = `rgba(${imageData.data[0]},${imageData.data[1]},
				${imageData.data[2]},${imageData.data[3]})`;
			ctx.fillRect(x*6+2,y*6+2,1,1);
		}
	}
}

function draw(number) {
	if(number > sprite_count) return;
	let str = number + "";
	if(number < 100) str = "0" + str;
	if(number < 10) str = "0" + str;

	image.src = `resources/images/${str}.jpeg`;
	image.onload = ()=>{
		ctx2.drawImage(image,0,0, image_width, image_height);
		print();
	};
	number += 1;

	setTimeout(() => {
		draw(number + 1);
	}, draw_interval);  
}

