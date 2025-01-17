

var myFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallery");
var myPhotos = myFolder.getDirectoryListing();


var winWidth = Ti.Platform.displayCaps.platformWidth;
var winHeight = Ti.Platform.displayCaps.platformHeight;

var buttonHeight = 35;
var rowCount = 4;
var margin = 10;
var canvasWidth = Ti.Platform.displayCaps.platformWidth + margin * (rowCount + 1);
var size = canvasWidth / rowCount;




// Create Intro Section

var introWin = Ti.UI.createWindow({
	
	title: "Crazy Over Fish",
	// backgroundColor: "#000",
	backgroundColor: "#3A00FF",
	backgroundImage: "/images/background.png",
	color: "#FFF"
	
});


var navWin = Ti.UI.iOS.createNavigationWindow({
	
	window: introWin,
	font: {fontSize: 12, fontFamily: "Futura-Medium", weight: "bold"},

	
	
});

var border = Ti.UI.createView({
	
	backgroundColor: "#85B200",
	color: "FFF",
	width: winWidth,
	height: 1,
	top: 20
	
});

var favoriteButton = Ti.UI.createLabel ({
	
	text: "Favorite Fish",
	backgroundImage: "/images/favorites.jpg",
		color: "#85B200",
	font: {fontSize: 25, fontFamily: "Futura-CondensedExtraBold"},
	textAlign: "center",
	verticalAlign: 230,
	top: border.top + border.height + 10,
	paddingTop: 270,
	width: 300,
	height: 140,
	borderRadius: 10
	
});

var aquaButton = Ti.UI.createLabel ({
	
	text: "Aquascaping",
	backgroundImage: "/images/favorites.jpg",
		color: "#85B200",
	font: {fontSize: 25, fontFamily: "Futura-CondensedExtraBold"},
	textAlign: "center",
	verticalAlign: 230,
	top: favoriteButton.top + favoriteButton.height + 10,
	width: 300,
	height: 140,
	borderRadius: 10
	
});

var tankButton = Ti.UI.createLabel ({
	
	text: "Your Tank",
	backgroundImage: "/images/favorites.jpg",
		color: "#85B200",
	font: {fontSize: 25, fontFamily: "Futura-CondensedExtraBold"},
	textAlign: "center",
	verticalAlign: 230,
	top: aquaButton.top + aquaButton.height + 10,
	width: 300,
	height: 140,
	borderRadius: 10
	
});



// Random Gallery 

var randButton = Ti.UI.createLabel({
		
	text: "Random Image",
	backgroundColor: "85B200",
	font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
	color: "#fff",		
	width: "100%",
	height: 35,
	textAlign: "center",
	bottom: 0
		
});


var returnButton = Ti.UI.createLabel({
		
	text: "Close Image",
	backgroundColor: "85B200",
	font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
	color: "#fff",		
	width: "100%",
	height: 35,
	bottom: 0,
	textAlign: "center"
		
});

	


		
// Open Gallery Button	




	
var randomWin = Ti.UI.createWindow({
	title: "Aquascaping",
	backgroundColor: "#3A00FF",
	backgroundImage: "/images/background.png",

});



var projectContainer = Ti.UI.createImageView({
	
	top:0,	bottom: 35,
	image: "/gallery/" + myPhotos[0],
	left: 10,
	right: 10	
	
});







var types = {
	"tank":	{	
		"title": "My Fish",
		"footer": "Some of my favorite fish that I have had in my 55 gallon tank.",
		"fish": [
			 {name: "Black Ghost", agg: "1", images: "fish/blackghost.jpg", description: "It is considered a true bony fish. When properly cared for, the Black Ghost Knifefish can reach well over one foot in length. It possesses a weak electrical organ at the caudal peduncles which is used to locate food. It requires a minimum of a 150 gallon tank with excellent filtration. It is generally timid and reclusive, preferring a fine-gravel-bottom aquarium with plenty of roots and rocks for hiding places, as well as subdued to dark lighting."},
			 {name: "Figure 8 Puffer", agg: "6", images: "fish/puffer.jpg", description: "The Figure Eight Puffer is an entertaining fish that's full of personality.The question of tank mates for the Figure 8 Puffer is open to debate. Some have reported at least short-term success with mollies, bumblebee gobies, and others. But really most fish will be pestered and nipped often. Puffers appreciate a complex layout of decor to explore, as well as ample swimming room. If your puffer is just pacing the glass, it's probably bored! They are very personable creatures, and will come to recognize their owner and also the food container."}, 
			 {name: "Frontosa", agg: "4", images: "fish/frontosa.jpg", description: "The Frontosa African Cichlid is a fairly typical member of the Cichlidae family. Both sexes are characterized by a large frontal hump which will develop as the fish reaches maturity, or attains a length of around 4 inches.Although territorial, the Frontosa African Cichlid is generally not aggressive, but rather gentle and tolerant. It does well in a tank with plenty of rocks and caves for hiding and a sandy bottom."}, 
			 {name: "Flowerhorn", agg: "9", images: "fish/flowerhorn.jpg", description: "Flowerhorn cichlids are ornamental aquarium fish noted for their vivid colors and the distinctively shaped heads for which they are named. Criticism has also been made of placing flowerhorns, which are man-made fish, into fish taxa, which are reserved for the identification of species found in the wild."}, 
			 {name: "Electric Blue Jack", agg: "6", images: "fish/jackdempsey.jpg", description: "The Electric Blue Jack Dempsey is a freshwater fish that originates in the murky warm waters of Central America. It has a base color of electric blue to gray, and displays many iridescent blue and green spots, giving this fish a spectacular look.The Electric Blue Jack Dempsey requires an aquarium of at least 50 gallons, with a fine sand bottom. There should be rocks and roots for them to hide among. The plants should be hardy as the Jack Dempsey will burrow around and attack them."}
		 ]
	}
};




var favWin = Ti.UI.createWindow({
	title: "Favorite Fish",
	backgroundColor: "#3A00FF",
	backgroundImage: "background.png",
	
	
	
		

});

var headerSection = Ti.UI.createView({


});

var headerText = Ti.UI.createLabel({
	
color: "#fff"
	
});







var tableHeaderFish = Ti.UI.createView ({
	
	backgroundColor: "#000",
	height: 45
});

var tableTextFish = Ti.UI.createLabel ({
	
	text: "MY FAVORITE FISH SPECIES",
	font: {fontSize: 16, fontFamily: "Futura-CondensedExtraBold", weight: "bold"},
	color: "#3A00FF",
	top: 9,
	left: 10
	
});

var tableFooterFish = Ti.UI.createView ({
	
	height: 65
});

var tableFTextFish = Ti.UI.createLabel ({
	
	text: "It's quite amazing how fish actually have different personalities and agression levels. Some actually learn who their owner is and recognize the bag of fish food.",
	font: {fontSize: 11, fontFamily: "Futura-Medium", weight: "bold"},
	color: "#FFF",
	top: 9,
	left: 10
	
});



tableHeaderFish.add(tableTextFish);
tableFooterFish.add(tableFTextFish);




// BUILD TABLE VIEW
var tankTable = Ti.UI.createTableView ({
	
	top: headerSection.top + headerSection.height + 10,
	backgroundColor: "#3A00FF",
});

if (Ti.Platform.name === "iPhone OS") {
	tankTable.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}



var fishSection = Ti.UI.createTableViewSection ({
	
	headerView: tableHeaderFish,
	footerView: tableFooterFish
	
});


//  DESCRIPTION FUNCTION

var descFish = function(){
	
	var descFishWin = Ti.UI.createWindow({
		title: this.title,
		backgroundColor: "#3A00FF"
		
		
	});
	

	var descBorder = Ti.UI.createView({
		backgroundColor: "#FFF",
		height: 1,

	});
	
	var descFishText = Ti.UI.createLabel({
		
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Futura-Medium", weight: "bold"},
		color: "#fff",
		top: 20,
		height: 200,
		left: 20,
		right: 20
	});
	
		

	var descFishAggText = Ti.UI.createLabel({

		top: descFishText.top + descFishText.height + 10,

		text: "Fish Aggression Level",
		color: "#fff"
		
	});
	

	var descFishAgg = Ti.UI.createView ({
		
		image: "images/aggression.png",
		top: descFishAggText.top + 25,
		width: this.aggress * 10 + "%",
		height: 35,
		backgroundColor: "#C20000"

		
	});


	descFishPer = Ti.UI.createLabel ({
		font: {fontSize: 12, fontFamily: "Futura-Medium", weight: "bold"},
		text: this.aggress * 10 + "%",
		color: "#FFF",
		
		
	});
	
	descFishAgg.add(descFishPer);
	
	var descImage = Ti.UI.createImageView ({
		
		image: this.img,
		top: descFishAgg.top + descFishAgg.height + 10,
		bottom: 20
		
	});
	

	
	
	descFishWin.add(descFishText, descFishAgg, descFishAggText, descImage);
	
	navWin.openWindow(descFishWin);
	
};


	
//  DATA LOOP



for(var lvl1 in types){
	
	for(var lvl2 in types[lvl1]){
		
		if(lvl2 === "fish"){
			
			for(var lvl3=0; lvl3<types[lvl1].fish.length; lvl3++){
				
				// console.log(types[lvl1].fish[lvl3]);
				// console.log(types[lvl1].fish[lvl3].description);
				

					
					var fishRow = Ti.UI.createTableViewRow ({
							color: "fff",
							font: {fontSize: 12, fontFamily: "Futura-Medium", weight: "bold"},		
							title: types[lvl1].fish[lvl3].name,
							aggress: types[lvl1].fish[lvl3].agg,
							desc: types[lvl1].fish[lvl3].description,
							img: types[lvl1].fish[lvl3].images,
							hasChild: true
						});
						fishSection.add(fishRow);
						console.log(types[lvl1].fish[lvl3].name);
						fishRow.addEventListener("click" , descFish);
						
					};

				
			}
			
		
	}
			
	
		
	}
			


	


var fishSections = [fishSection];

tankTable.setData (fishSections);


favWin.add(tankTable);





// CUSTOM WIND0W - FISH FOR YOUR TANK



var tankWin = Ti.UI.createWindow({
	
	title: "Your Type of Fish",
	backgroundColor: "#3A00FF",
	backgroundImage: "/images/background.png",
	color: "#FFF",

	
});


var tankInfo = Ti.UI.createLabel ({
	
	text: "Fill in the form to build your Fish Tank. You can enter your tank size and types of fish.",
	top:20,
	height: 50,
	color: "#fff",
	font: {fontSize: 12, fontFamily: "Futura-Medium", weight: "bold"},
	left: 10,
	right: 10
	
	
});

var tankName = Ti.UI.createTextField({
	
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#BBBBBB",
	backgroundColor: "#85B200",
	width: "100%",
	left: 10,
	right: 10,
	value: "Enter your name",
	top: tankInfo.top + tankInfo.height + 10,
	height: 35
	
	
	
});

var tankSize = Ti.UI.createTextField({
	
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#BBBBBB",
	width: "100%",
	left: 10,
	right: 10,
	value: "55 Gallon",
	top: tankName.top + tankName.height + 10,
	height: 35
	
	
	
});

var tankType = Ti.UI.createTextField({
	
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color: "#BBBBBB",
	width: "100%",
	left: 10,
	right: 10,
	value: "ex: Black Ghost",
	top: tankSize.top + tankSize.height + 10,
	height: 35
	
	
	
});


var tankSubmit = Ti.UI.createButton ({
	
	bottom: 0,
	backgroundColor: "#3A00FF",
	width: "100%"

	
	
});

var submitText = Ti.UI.createLabel ({
		font: {fontSize: 14, fontFamily: "Futura-Medium", weight: "bold"},
	text: "Build Tank",
	color: "#fff",
	
});



var dataWin = Ti.UI.createWindow ({
	
		title: "My Custom Tank",
	backgroundColor: "#3A00FF",
	backgroundImage: "/images/background.png",
	
});


var line1 = Ti.UI.createLabel ({
	
	
	
});
var submitTank = function(){
	
			navWin.openWindow(dataWin);
		
	
	
};





tankSubmit.add(submitText);



tankWin.add(tankName,tankSize,tankType,tankInfo, tankSubmit);


tankSubmit.addEventListener("click", submitTank);

var loadfile = require("functions");
var loadrandom = require("random");
var loadfavorites = require("favorites");
var loadcustom = require("custom");


introWin.add(aquaButton,favoriteButton,tankButton);

	randomWin.add(projectContainer);
	randomWin.add(randButton);
	

navWin.open();
	
