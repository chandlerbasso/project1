#pragma implicit
var speed = 20;

//sets the bullets speed to my variable
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;
}
//removes game object

function Update(){

var name = gameObject.Name;
if(transform.position.y>=6){

Destroy(gameObject);
}

}