// Single line comment
/*
multi line comment
*/
//alert("Warning Will Robinson...Warning");
//confirm("do you like digimon?");
//prompt("what kind of digimon do you like?");








// * = name placeholder
//UwU = story placeholder
//# = option placeholder
Game();

function Game(){
    alert("Helix Spire");
    var playerName = prompt("What Is Your Name, Outworlder?");
    alert("Welcome to the Continent of Utera"+ playerName);
    
    Centeria_Wilds();
    
    function Centeria_Wilds(){
        var centeriaWilds = prompt("You wake up in the middle of the field. To your understanding of your suuroundings your in a field, meaning that there is at least a town nearby.").toLowerCase();
        
        if(centeriaWilds == "look around" || centeriaWilds == "look"){
            var centeriaWildsLook = prompt("You see a dirt path. When you look at the path you see that it has been recently used, also see holes in the path. \n -go near the holes \n -fallow the path to the right \n -follow the path to the right");
        }
        
        else if(centeriaWilds == ""){
            alert("You examine the holes, you feel heat coming off of the holes. You also feel a weird feeling coming off the hole also.");
            Centeria_Wilds();
        }
        
    }
    function Town_of_Centeria(){
        var townOfCenteriaWest = prompt("You have entered Centeria, town of relics and study.")
        
        if(townOfCenteriaWest == "talk" || townOfCenteriaWest == "talk to locals"){
            alert("You try to talk to a local of the town but they cant understand what your saying but you hear them mumble something");
        }
        else if(townOfCenteriaWest == "walk around" || townOfCenteriaWest == "walk around and look"){
            var centeriaPath = prompt("- ask locals \n - keep walking");
            
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
}

    
