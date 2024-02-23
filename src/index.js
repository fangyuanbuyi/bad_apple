import { ImageReader } from "./component/ImageReader.js";

window.play = () => {
	if(!window.imageReader) {
		const imageReader = new ImageReader();
		window.imageReader = imageReader;
	}
	window.imageReader.play();
}

window.pause = () => {
	if(window.imageReader == null) {
		const imageReader = new ImageReader();
		window.imageReader = imageReader;
	}
	window.imageReader.pause();
}