#pragma strict
var speed = 20;

//sets the bullets speed to my variable
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;
}
//removes game object
function OnBecomeInvisible() {
Destroy(gameObject);
}