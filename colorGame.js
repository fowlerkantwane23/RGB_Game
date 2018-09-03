var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#restart");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");

easyBtn.addEventListener("click", function(){
	numOfSquares = 3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	numOfSquares = 6;
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	for(var i = 0; i < squares.length; i++){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i <squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	this.textContent = "New Colors";
	messageDisplay.textContent = "";
	h1.style.backgroundColor = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// adding colors to squares
	squares[i].style.backgroundColor = colors[i];
	// adding click listeners to squres
	squares[i].addEventListener("click", function() {
		// grab color of picked square
		var clickedColor = this.style.backgroundColor;
		// compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent ="Play Again?";

		}
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	//loop through all squares 
	for (var i = 0; i < squares.length; i++) {
	//change each square to match color
	squares[i].style.backgroundColor = color;
	}

}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[];
	for (var i = 0; i < num; i ++){
		// add num random colors
		arr.push(randomColor())
	}
	
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb("+ r + ", " + b +", " + g +")" 

}
