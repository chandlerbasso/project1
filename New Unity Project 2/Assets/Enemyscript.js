
var speed = -10;

// sets the falling spped
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;

GetComponent.<Rigidbody2D>().angularVelocity = Random.Range(-200, 200);
}

function Update () {

}
// should destroy the object when it leaves lign of sight
function OnBecomeInvisible() {
Destroy(gameObject);
}
function OnTriggerEnter2D(obj) {
   
    var name = obj.gameObject.name;

   
    if (name == "bullet(Clone)") {
        
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

   
    if (name == "New Prefab(Clone)") {
       
        Destroy(gameObject);
    }
} 