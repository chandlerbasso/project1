
var speed = -10;

// sets the falling spped
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;


}

function Update () {
if(transform.position.y<-10)
{
Destroy(gameObject);
}

}
// should destroy the object when it leaves lign of sight
function OnBecomeInvisible() {
Destroy(gameObject);
}
function OnTriggerEnter2D(obj) {
   
    var name = obj.gameObject.name;

   //destroys the bullet and the object the bullet hits
    if (name == "bullet(Clone)") {
        
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

   
    if (name == "New Prefab(Clone)") {
       
        Destroy(gameObject);
    }
} 