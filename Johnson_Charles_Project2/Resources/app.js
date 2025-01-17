Ti.UI.setBackgroundColor('#3A00FF');

var gamesPS4 = [{title: "Destiny", images: "images/destiny.png", description: "Destiny is a first-person shooter video game developed by Bungie and published by Activision. Released on September 9, 2014, Destiny marked Bungie's first new franchise since the Halo series. Set in a 'mythic science fiction' setting, the game features a massively-multiplayer 'shared-world' environment with elements of role-playing games."},
 {title: "Injustice: Gods Among Us", images: "images/injustice.jpg", description: "What if our greatest heroes became our greatest threat? Injustice: Gods Among Us introduces a bold new franchise to the fighting game genre from NetherRealm Studios, creators of the definitive fighting game Mortal Kombat. Featuring DC Comics icons such Batman, Cyborg, The Flash, Harley Quinn, Nightwing, Solomon Grundy, Superman and Wonder Woman, the latest title from the award-winning studio presents a deep original story."}, 
 {title: "Assassin's Creed: Black Flag", images: "images/creed.jpg", description: "Assassin's Creed 4 takes place in 1715 in the Caribbean, featuring new locations. Assassin's Creed 4 stars a new protagonist, pirate and Assassin named Edward Kenway, grandfather of Connor and father of Haytham Kenway of Assassin's Creed 3. Ubisoft Montreal has traditionally developed Assassin's Creed games, but a new team developed Assassin's Creed 4."}, 
 {title: "NBA 2K15", images: "images/2k15.jpg", description: "On the heels of NBA 2K14’s 70 Game of the Year Award Nominations, the NBA 2K franchise is the ultimate basketball simulation experience. Featuring NBA MVP Kevin Durant on the cover, NBA 2K15 hits the court with unprecedented life-like graphics, ultra-realistic NBA gameplay, and more."}, 
 {title: "GTA 5", images: "images/gta5.jpg", description: "Amidst the turmoil, three very different criminals plot their own chances of survival and success: Franklin, a street hustler looking for real opportunities and serious money; Michael, a professional ex-con whose retirement is a lot less rosy than he hoped it would be; and Trevor, a violent maniac driven by the chance of a cheap high and the next big score. Running out of options, the crew risks everything in a series of daring and dangerous heists that could set them up for life."}];

var gamesXbox = [{title: "TitanFall", images: "images/titanfall.jpg", description: "Crafted by one of the co-creators of Call of Duty, Titanfall is among the most highly anticipated games of 2014, The visionaries at Respawn have drawn inspiration from their proven experience in first-person action gaming, and are building on that pedigree by taking a new approach to game design and creating an all-new universe with Titanfall."}, 
{title: "Minecraft", images: "images/minecraft.jpg", titanfall: "Minecraft is a sandbox construction game created by Mojang AB founder Markus Persson, and inspired by the Infiniminer, Dwarf Fortress and Dungeon Keeper games. Gameplay involves players interacting with the game world by placing and breaking various types of blocks in a three-dimensional environment. In this environment, players can build creative structures, creations, and artwork on multiplayer servers and singleplayer worlds across multiple game modes."}, 
{title: "Saints Row: The Third", images: "images/saints.jpg", description: "The story centers around the conflict between the Saints and the Syndicate, a rival crime group who seek to take advantage of the Saints' influence. Steelport is run by three gangs, much like Stilwater was in Saints Row and Saints Row 2, yet these gangs—Morning Star, the Deckers and the Luchadores—are all under the control of the Syndicate."}, 
{title: "Halo Reach", images: "images/halo.jpg", description: "We've all seen the carnage that one Spartan can produce. Imagine what a whole squadron of them can do. We all know how this one ends up, too. So the story has a fittingly darker, grittier edge to it as the brave Spartans go to meet their destiny. But you can make sure they go out in a blaze of glory in epic battles against the Covenant on a backdrop of jaw-dropping environments, powered by an all-new engine."}, 
{title: "Dark Souls", images: "images/dark.jpg", description: "Dark Souls takes place in the fictional kingdom of Lordran. Players assume the role of a cursed human character who has been chosen to make a pilgrimage out of the Undead Asylum to discover the fate of the Undead. The plot of Dark Souls is primarily told through descriptions of in-game items and dialogue with non-playable characters (NPCs)."}];


var mainWindow = Ti.UI.createWindow({
	
	backgroundColor: "#3A00FF",
	backgroundImage: "background.png",
		

});

var headerSection = Ti.UI.createView({
	//backgroundColor: "#000000",
	backgroundImage: "headerBg.png",
	height: 75,
	top: 30,
	shadow:{
        shadowRadius:10,
        shadowOpacity:0.5,
        shadowOffset:{x:5, y:10}
    }
});

var headerText = Ti.UI.createLabel({
	
	text: "Game Consoles",
	font: {fontSize: 45, fontFamily: "Futura-CondensedExtraBold"},
	color: "#FFF"
	
	
});

var border = Ti.UI.createView({
	backgroundColor: "#FFF",
	height: 1,
	top: headerSection.top + headerSection.height
});




// PLAYSTATION TITLE VIEWS

var tableHeaderPs = Ti.UI.createView ({
	
	backgroundColor: "#000",
	height: 45
});

var tableTextPs = Ti.UI.createLabel ({
	
	text: "PS4 Console Games",
	font: {fontSize: 22, fontFamily: "Futura-CondensedExtraBold", weight: "bold"},
	color: "#3A00FF",
	top: 9,
	left: 10
	
});

var tableFooterPs = Ti.UI.createView ({
	
	height: 65
});

var tableFTextPs = Ti.UI.createLabel ({
	
	text: "Just got the PS4 recently and started building up my playstation collection immediately",
	font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
	color: "#FFF",
	top: 9,
	left: 10
	
});



// XBOX TITLE VIEWS
var tableHeaderXb = Ti.UI.createView ({
	
	backgroundColor: "#000",
	height: 45
});


var tableTextXb = Ti.UI.createLabel ({
	
	text: "Xbox Console Games",
	font: {fontSize: 22, fontFamily: "Futura-CondensedExtraBold", weight: "bold"},
	color: "#6DD900",
	top: 9,
	left: 10
	
});

var tableFooterXb = Ti.UI.createView ({
	
	height: 65
});

var tableFTextXb = Ti.UI.createLabel ({
	
	text: "Normally not a fan of Xbox, but I really enjoy these titles.",
	font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
	color: "#6DD900",
	top: 9,
	left: 10
	
});

tableHeaderPs.add(tableTextPs);
tableFooterPs.add(tableFTextPs);
tableHeaderXb.add(tableTextXb);
tableFooterXb.add(tableFTextXb);





// BUILD TABLE VIEW FOR MY GAME CONSOLES
var console = Ti.UI.createTableView ({
	
	top: headerSection.top + headerSection.height + 10,
	backgroundColor: "#3A00FF",
});

if (Ti.Platform.name === "iPhone OS") {
	console.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
	
}



var ps4Section = Ti.UI.createTableViewSection ({
	
	headerView: tableHeaderPs,
	footerView: tableFooterPs
	
});
var xboxSection = Ti.UI.createTableViewSection ({
	
	headerView: tableHeaderXb,
	footerView: tableFooterXb
});



// PLAYSTATION DESCRIPTION FUNCTION

var descGame = function(){
	
	var descGameWindow = Ti.UI.createWindow({
		
		backgroundColor: "#3A00FF"
		
		
	});
	
	var descHeaderSection = Ti.UI.createView({
		//backgroundColor: "#000000",
		backgroundImage: "headerBg.png",
		height: 75,
		top: 30,
		shadow:{
	        shadowRadius:10,
	        shadowOpacity:0.5,
	        shadowOffset:{x:5, y:10}
	    }
	});
	
	var descHeaderText = Ti.UI.createLabel({
		
		text: this.title,
		font: {fontSize: 30, fontFamily: "Futura-CondensedExtraBold"},
		color: "#FFF"
		
		
	});
	
	var descBorder = Ti.UI.createView({
		backgroundColor: "#FFF",
		height: 1,
		top: descHeaderSection.top + descHeaderSection.height
	});
	
	var descGameText = Ti.UI.createLabel({
		
		text: this.desc,
		font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
		color: "#fff",
		top: descHeaderSection.top + descHeaderSection.height + 20,
		height: 200,
		left: 20,
		right: 20
	});
	
	var descImage = Ti.UI.createImageView ({
		
		image: this.img,
		top: descGameText.top + descGameText.height + 10
		
	});
	
	var returnButton = Ti.UI.createLabel({
		
		text: "Return To List",
		backgroundColor: "000",
		font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},
		color: "#fff",		
		borderRadius: 20,
		width: 200,
		height: 35,
		bottom: 5,
		textAlign: "center"
		
	});
	
	var closeWindow = function() {
		
		descGameWindow.close();
		
	};
	
	returnButton.addEventListener("click" , closeWindow);
	
	descHeaderSection.add(descHeaderText);	
	descGameWindow.add(descHeaderSection, descGameText, descImage, returnButton);
	
	descGameWindow.open();
	
};



// PLAYSTATION DATA LOOP
for  (x=0, t=gamesPS4.length; x<t; x++) {
	
	var consoleRow = Ti.UI.createTableViewRow ({
		color: "fff",
		font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},		
		title: gamesPS4[x].title,
		desc: gamesPS4[x].description,
		img: gamesPS4[x].images,
		hasChild: true
	});
	ps4Section.add(consoleRow);
	consoleRow.addEventListener("click" , descGame);
	
};




// XBOX DATA LOOP
for  (x=0, t=gamesXbox.length; x<t; x++) {
	
	var consoleRow = Ti.UI.createTableViewRow ({
		color: "fff",
		font: {fontSize: 15, fontFamily: "Futura-Medium", weight: "bold"},		
		title: gamesXbox[x].title,
		desc: gamesXbox[x].description,
		img: gamesXbox[x].images,	
		hasChild: true

	});
	xboxSection.add(consoleRow);
	consoleRow.addEventListener("click" , descGame);

};


var consoleSections = [ps4Section,xboxSection];

console.setData (consoleSections);


mainWindow.add(headerSection, console);
headerSection.add(headerText);
mainWindow.open();


