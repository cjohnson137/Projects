// Random Gallery Open Window
var aquaGallery = function(){
	
	


	navWin.openWindow(randomWin);
	
};	

var favFish = function(){
	

	navWin.openWindow(favWin);
	
	//  DATA LOOP

var types = {
	"tank":	{	
		"title": "My Fish",
		"footer": "Some of my favorite fish that I have had in my 55 gallon tank.",
		"fish": [
			 {title: "Black Ghost", images: "fish/blackghost.jpg", description: "It is considered a true bony fish. When properly cared for, the Black Ghost Knifefish can reach well over one foot in length. It possesses a weak electrical organ at the caudal peduncles which is used to locate food. It requires a minimum of a 150 gallon tank with excellent filtration. It is generally timid and reclusive, preferring a fine-gravel-bottom aquarium with plenty of roots and rocks for hiding places, as well as subdued to dark lighting."},
			 {title: "Figure 8 Puffer", images: "fish/puffer.jpg", description: "The Figure Eight Puffer is an entertaining fish that's full of personality.The question of tank mates for the Figure 8 Puffer is open to debate. Some have reported at least short-term success with mollies, bumblebee gobies, and others. But really most fish will be pestered and nipped often. Puffers appreciate a complex layout of decor to explore, as well as ample swimming room. If your puffer is just pacing the glass, it's probably bored! They are very personable creatures, and will come to recognize their owner and also the food container."}, 
			 {title: "Frontosa", images: "fish/frontosa.jpg", description: "The Frontosa African Cichlid is a fairly typical member of the Cichlidae family. Both sexes are characterized by a large frontal hump which will develop as the fish reaches maturity, or attains a length of around 4 inches.Although territorial, the Frontosa African Cichlid is generally not aggressive, but rather gentle and tolerant. It does well in a tank with plenty of rocks and caves for hiding and a sandy bottom."}, 
			 {title: "Flowerhorn", images: "fish/flowerhorn.jpg", description: "Flowerhorn cichlids are ornamental aquarium fish noted for their vivid colors and the distinctively shaped heads for which they are named. Criticism has also been made of placing flowerhorns, which are man-made fish, into fish taxa, which are reserved for the identification of species found in the wild."}, 
			 {title: "Electric Blue Jack", images: "fish/jackdempsey.jpg", description: "The Electric Blue Jack Dempsey is a freshwater fish that originates in the murky warm waters of Central America. It has a base color of electric blue to gray, and displays many iridescent blue and green spots, giving this fish a spectacular look.The Electric Blue Jack Dempsey requires an aquarium of at least 50 gallons, with a fine sand bottom. There should be rocks and roots for them to hide among. The plants should be hardy as the Jack Dempsey will burrow around and attack them."}
		 ]
	}
};


for(var lvl1 in types){
	
	for(var lvl2 in types[lvl1][lvl2])
	
		
		console.log(types[lvl1][lvl2]);

};

	
};	




// Random Gallery Generate Random Image

var randomImage = function() {
			
			do { // Start Do While loop to validate duplicates
				
			var checkValue = randValue;				

            var randValue = Math.floor(Math.random() * myPhotos.length); 


        	} while (randValue == checkValue);
        	
        		
        		projectContainer.image = "/gallery/" + myPhotos[randValue];
        	

        	
		};





var tankCustom = function() {
	
		navWin.openWindow(tankWin);
	
};

aquaButton.addEventListener("click", aquaGallery);

favoriteButton.addEventListener("click", favFish);

tankButton.addEventListener("click", tankCustom);
		
randButton.addEventListener("click" , randomImage);