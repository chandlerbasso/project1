#pragma strict
var speed = 20;
function Start () {
GetComponent.<Rigidbody2D>().velocity.y = speed;
}

function OnBecomeInvisible() {
Destroy(gameObject);
}