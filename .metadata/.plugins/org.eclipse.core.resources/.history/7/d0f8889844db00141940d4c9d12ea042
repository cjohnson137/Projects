var hero = ["The Flash","Deadpool","Superman","Goku","Silver Surfer","Natusu","The Hulk"];
var x = 0;


var nextHero = function(){
	
	txtHero.text = hero[x];
	x++;
	
	
	if (x >6){
		
		x = 0;
	}
	
};

var prevHero = function(){
	
	x--;
	
	
	if (x < 0){
		
		x = 6;
	}
	txtHero.text = hero[x];
	
	
};


nextButton.addEventListener("click",nextHero);
prevButton.addEventListener("click",prevHero);