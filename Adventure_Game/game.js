// Single line comment
/*
multi line comment
*/
//alert("Warning Will Robinson...Warning");
//confirm("do you like digimon?");
//prompt("what kind of digimon do you like?");
/*switch(var){
        case "option1":
            var(var) var = alert,prompt,comfirm();
        break;
        case "option2":
            alert,prompt,comfirm();
        break;
        case "option3":
            alert,prompt,comfirm();
        break;
        default: 
            alert(""+ var + "");
        break
}        */
//js objects
/*var inventory = {
        coin:1000,
        bread:0,
        sword:0,
        map:0,
        
}       
function Blacksmith(){
    alert(alert);
    
    var blacksmith = prompt("")
        if(blacksmith == "sword" || blacksmith == "buy sword" && inventory.coin >= 100){
            if(swordbuy){
            inventory.sword ++:
            alert();
            inventory.coins -= 100;
            alert("you have"+inventory.coin+"coins")
            Blacksmith();
            }
            else{
            alert("");
            Village;
            }
        }
}
*/
/* var wizardNames = ["bethazar", "mordac", "grendor"];    */
/*     
var checkInv = function(){
    alert("Gold Coins:"+inventory.coins.gold+"\n Silver Coins:"+inventory.coins.silver+"\n Copper Coins:"+inventory.coins.copper);
}
*/







// * = name placeholder
//UwU = story placeholder
//# = option placeholder
Game();

var inventory ={
    coin:0000,
    mana:0000,
}

function Game(){
    alert("The Crystalline Mists");
    alert("this game is in work in progress, so if there is any bugs or mistakes that I have made or have any ideas that I can add to the game, plz let me know.");
    var playerName = prompt("What Is Your Name, Outworlder?");
    alert("Welcome to the Continent of Utera "+ playerName);
    //level select/Afterlife
    Afterlife();
    
    function Afterlife(){
        var afterLife = prompt("You are in the afterlife, the world that you lived in is gone and you are all alone... for now. You will be sent to a new world to continue you life for it ended too short. the world that your being sent to is Alioria, a world full of magic but you wont be able to you the magic until you meet someone who will teach you how to use it and unlock you hidden potential. Now pick a place to start you adventure. \n - Centeria Wilds \n - Town of Centeria \n - The Stranger's house \n - The lost");
    }
    
    
    
    
    //Centeria Wilds
    Centeria_Wilds();
    
    function Centeria_Wilds(){
        var centeriaWilds = prompt("You wake up in the middle of a open grassy area. To your understanding of your surroundings your in a field, meaning that there is at least a town nearby. \n -look around").toLowerCase();
        
        if(centeriaWilds == "look around" || centeriaWilds == "look"){
            var centeriaWildsLook = prompt("You see a dirt path. When you look at the path you see that it has been recently used, you also see holes in the path. \n -go near the holes \n -follow the path to the right \n -follow the path to the left");
                if(centeriaWildsLook == "go near the holes"){
                prompt("You examine the holes, you feel heat coming off of the holes. You also sense a weird feeling coming off the holes also. \n -follow the path to the right \n -follow the path to the left");
                    alert("If you are reading this then you have encountered one of the problems that Im trying to fix.");
                }
    }
        if(centeriaWildsLook == "follow the path to the right" || centeriaWildsLook == "right"){
           Centeria_Guard_Enterence();
            
            function Centeria_Guard_Enterence(){
                var centeriaGuardEnterence = prompt("You go right on the dirt path. While walking on the path you see what looks like a stone wall with a arch way, when you get closer to the enterence the guards tell you to stop where you are. you stop as they said, the guards ask what you purpose of entering the town. \n -tell the truth \n -tell a lie");
                    if(centeriaGuardEnterence == "tell the truth" || centeriaGuardEnterence == "truth"){
                        alert("you tell the guards that you are from another world, you tell them that you died in you previous life and suddenly woke up in the middle of the field. The guards laugh and tell you to follow them into one of the rooms and wait inside while they can get you permission into the town.");
                        Town_of_Centeria();
                    }
                else if(centeriaGuardEnterence == "tell a lie"){
                    alert("you try to make up a story but the guards weren't buying it so the accused you of being a wanted criminal and was shot on site.");
                    Centeria_Wilds();
                }
            }
        }
        
    }
    //The Town Of Centeria
    function Town_of_Centeria(){
        alert("Congrats "+ playerName +" you have made it past the first part of your adventure. You may leave and start over or continue your adventure and see what this world is about" );
        alert("You have entered Centeria, town of excavation and study.");
        var townOfCenteriaWest = prompt("You got into the town, everyone that you see is walking around doing what they need to do for the day. You were thinging to yourself that you were lucky that the guards understood what you said but right now you need to find some information on what this world is. \n -talk to locals \n -walk around");
            if(townOfCenteriaWest == "talk to locals" || townOfCenteriaWest == "talk"){
                alert("You try to talk to the locals but they cant understand you. while you walk past them you heared them mumble something.");
        }   
        
            else if(townOfCenteriaWest == "walk around" || townOfCenteriaWest == "walk"){
                prompt("you walk around the town, the people around you start to stare and question why your there.\n -walk some more \n -relax by a wall \n -Whats in the alley");
                if(townOfCenteriaWest == "walk some more" || townOfCenteriaWest == "keep walking"){
                    alert("you keep walking but before you got any further someone grabbed you and was taking you somewhere \n -tell them to let go \n -ask where they're going \n -")
                }
        }
        
      
    }
    //the Strangers House
    function Strangers_House(){
        var strangersHouse = prompt("You followed the stranger to their home and they welcome you in. ");
    }
}

    
