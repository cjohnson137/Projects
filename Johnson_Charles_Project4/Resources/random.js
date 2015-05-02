var myFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "gallery");
var myPhotos = myFolder.getDirectoryListing();


// Random Gallery Open Window



// Random Gallery Generate Random Image

var randomImage = function() {
			
			do { // Start Do While loop to validate duplicates
				
							
				console.log("1st checkValue = " + checkValue);
        		console.log("1st randValue = " + randValue);


            var randValue = Math.floor(Math.random() * myPhotos.length); 


        	} while (randValue == checkValue);
        	
        	var checkValue = randValue;
        		
        		projectContainer.image = "/gallery/" + myPhotos[randValue];
        	
        		console.log("randValue = " + randValue);
				console.log("2nd checkValue = " + checkValue);

        	
		};
		


var projectContainer = Ti.UI.createImageView({
	
	top:0,	bottom: 35,
	image: "/gallery/" + myPhotos[0],
	margin: 10
	
});



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

exports.pContainer = projectContainer;
exports.rButton = randButton;
exports.openRand = randomGallery;




randButton.addEventListener("click" , randomImage);	