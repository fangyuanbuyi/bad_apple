// let table = document.createElement("table");

// let max_number = 2630;
// let min_number = 1;

// let number = 1;
// function createImage() {
// 	let image = document.createElement("img");
// 	image.id = "image";
// }
// function run() {
// 	if(number == 2631) number = 1;
// 	let str = number + "";
// 	if(number < 100) str = "0" + str;
// 	if(number < 10) str = "0" + str;
// 	let image = document.getElementById("image");
// 	image.src = `resources/images/${str}.jpeg`;
// 	number += 1;

// 	setTimeout(() => {
// 		run();
// 	}, 80);
// }

//////////////////////////

// const canvas = document.getElementById("canvas");
// canvas.width = "240"
// canvas.height = "240";

// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "green";


// for(let i = 0; i < 20; i++) {
// 	for(let j = 0; j < 20; j++) {
// 		ctx.fillRect(12*i,12*j,10,10);
// 	}
// }

//////////////////////////

// const canvas = document.getElementById("canvas");
// let image = new Image();
// let text = document.createElement("a");
// document.body.appendChild(text);

// function init() {
// 	canvas.width = "288";
// 	canvas.height = "216";
// }

// function draw() {
// 	if(number == 2631) number = 1;
// 	let str = number + "";
// 	if(number < 100) str = "0" + str;
// 	if(number < 10) str = "0" + str;

// 	image.src = `resources/images/${str}.jpeg`;
// 	image.onload = ()=>{
// 		const ctx = canvas.getContext("2d");
// 		ctx.drawImage(image,0,0, 144*2, 108*2);
// 	};
// 	number += 1;

// 	setTimeout(() => {
// 		draw();
// 	}, 83);  
// }

///////////////////////