#pragma implicit
var enemyValue =1;
//if a bullet colides with an object it should give x ammount of points to the score board
function OnTriggerEnter2D(obj) {
   
    var name = obj.gameObject.name;

   
    if (name == "bullet(Clone)") {
        
       gamescore.currentScore += enemyValue;

        }
        }