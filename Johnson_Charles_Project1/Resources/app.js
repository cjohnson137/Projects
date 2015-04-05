Ti.UI.setBackgroundColor('#040985');

var heroWindow = Ti.UI.createWindow({
	
	backgroundColor: "#040985",
	backgroundImage: "background.jpg"
	
});

var favHeros = Ti.UI.createView({

	backgroundColor: "#000",
	top: 40,
	left: 20,
	right: 20,
	height: 450,
	borderRadius: 10
});

var txtHero = Ti.UI.createLabel({
	
	text: "Comic Heroes",
	font: {fontSize: 40, fontFaimily: "Arial Black", fontWeight: "bold"},
	color: "#FFF",
	top: "35%"

});

var nextButton = Ti.UI.createView ({
	
	backgroundColor: "#6DD900",
	top: 505,
	right: 20,
	left: 195,
	width: 160,
	height: 50,
	borderRadius: 10
	
	
	
});

var nextLabel = Ti.UI.createLabel({
	
	text: "Next",
	font: {fontSize: 20, fontFaimily: "Arial Black", fontWeight: "bold"},
	color: "#FFF",
	top: 15
	
});

var prevButton = Ti.UI.createView ({
	
	backgroundColor: "#6DD900",
	top: 505,
	right: 20,
	left: 20,
	width: 160,
	height: 50,
	borderRadius: 10
});

var prevLabel = Ti.UI.createLabel({
	
	text: "Previous",
	font: {fontSize: 20, fontFaimily: "Arial Black", fontWeight: "bold"},
	color: "#FFF",
	top: 15
	
});

var loadfile = require("heroes");

heroWindow.add(favHeros,nextButton,prevButton);
heroWindow.add(txtHero);
nextButton.add(nextLabel);
prevButton.add(prevLabel);
heroWindow.open();



