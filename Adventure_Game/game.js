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
        coins:1000,
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







// * = name placeholder
//UwU = story placeholder
//# = option placeholder
Game();

function Game(){
    alert("Helix Spire");
    alert("this game is in work in progress, so if there is any bugs or mistakes that I have made or have any ideas that I can add to the game, plz let me know.");
    var playerName = prompt("What Is Your Name, Outworlder?");
    alert("Welcome to the Continent of Utera "+ playerName);
    //Centeria Wilds
    Centeria_Wilds();
    
    function Centeria_Wilds(){
        var centeriaWilds = prompt("You wake up in the middle of a open grassy area. To your understanding of your surroundings your in a field, meaning that there is at least a town nearby. \n -look around").toLowerCase();
        
        if(centeriaWilds == "look around" || centeriaWilds == "look"){
            var centeriaWildsLook = prompt("You see a dirt path. When you look at the path you see that it has been recently used, you also see holes in the path. \n -go near the holes \n -follow the path to the right \n -follow the path to the left");
                if(centeriaWildsLook == "go near the holes"){
                prompt("You examine the holes, you feel heat coming off of the holes. You also sense a weird feeling coming off the holes also. \n -follow the path to the right \n -follow the path to the left");
                }
    }
        if(centeriaWildsLook == "follow the path to the right"){
           Centeria_Guard_Enterence();
            
            function centeriaGuardEnterence(){
                
            }
        }
        
    }
    //The Town Of Centeria
    function Town_of_Centeria(){
        var townOfCenteriaWest = prompt("You have entered Centeria, town of excavation and study.")
        
        if(townOfCenteriaWest == "talk" || townOfCenteriaWest == "talk to locals"){
            alert("You try to talk to a local of the town but they cant understand what your saying but you hear them mumble something");
        }
        else if(townOfCenteriaWest == "walk around" || townOfCenteriaWest == "walk around and look"){
            var centeriaPath = prompt(" \n -ask locals \n -keep walking");
            
            if(centeriaPath == "ask locals"){
                alert("the local looks at you strangly.");
            }
            else if(centeriaPath == "keep walking" || centeriaPath == "walk"){
                alert("You keep walking, while on your walk you encounter someone that looks like they're from your world. The stranger spots you and asks you to follow them.");
                Strangers_House();
            }
        }
        else{
            alert("I dont understand" + townOfCenteriaWest);
            townOfCenteriaWest();
        }
    }
    //the Strangers House
    function Strangers_House(){
        var strangersHouse = prompt("You followed the stranger to their house and they welcome you in. ");
    }
}

    
