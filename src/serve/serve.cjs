const path = require("path");
const express = require("express");

const port = 8077;

const app = express();
app.use(express.static(path.resolve(__dirname, "../../")));  
app.listen(port, ()=>{
	console.log("app is listening to port " + port);
})