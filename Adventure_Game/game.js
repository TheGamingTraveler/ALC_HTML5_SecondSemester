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
    alert("Legend of the Helix Crystal");
    var playerName = prompt("What Is Your Name, Outworlder?");
    alert("Welcome to the Continent of *"+ playerName);
    
    Centeria_Wilds();
    
    function Centeria_Wilds(){
        var centeriaWilds = prompt("UwU").toLowerCase();
        
        if(centeriaWilds == "look around" || centeriaWilds == "look"){
            var centeriaWildsLook = prompt("UwU \n -#");
        }
        
        else if(centeriaWilds == "stop and think" || centeriaWilds == "think"){
            alert("UwU");
            var resume = confirm("Do You Wish To Continue?");
            
            if(resume){
                Centeria_Wilds();
            }
            else{
               alert("Game Over, Thanks For Playing!\(^v^)/"); 
            }
        }
        
    }
}

    
