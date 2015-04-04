Ti.UI.setBackgroundColor('#040985');

var heroWindow = Ti.UI.createWindow({
	
	backgroundColor: "#040985",
	backgroundImage: "background.jpg"
	
});

var favHeros = Ti.UI.createView({

	backgroundColor: "#000",
	top: 40,
	bottom: 100,
	left: 20,
	right: 20,
	borderRadius: 10
});

heroWindow.add(favHeros);
heroWindow.open();



