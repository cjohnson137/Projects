// Random Gallery Open Window
var aquaGallery = function(){
	


	navWin.openWindow(randomWin);
	
};	

var favFish = function(){
	

	navWin.openWindow(favWin);
	
};	

aquaButton.addEventListener("click", aquaGallery);

favoriteButton.addEventListener("click", favFish);



// Random Gallery Generate Random Image

var randomImage = function() {
			
			do { // Start Do While loop to validate duplicates
				
			var checkValue = randValue;				

            var randValue = Math.floor(Math.random() * myPhotos.length); 


        	} while (randValue == checkValue);
        	
        		
        		projectContainer.image = "/gallery/" + myPhotos[randValue];
        	

        	
		};
		
randButton.addEventListener("click" , randomImage);