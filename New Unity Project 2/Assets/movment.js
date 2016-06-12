//i refrenced http://docs.unity3d.com/ScriptReference/ for unityscript syntax



#pragma implicit

var move = 5 ;


public var bullet: GameObject;

function start () {


}


function Update () {
//ship movment forward


if (Input.GetKey(KeyCode.D))
{
GetComponent.<Rigidbody2D>().velocity.x = move;

}
//ship moves backwards
else if (Input.GetKey(KeyCode.A))
{
GetComponent.<Rigidbody2D>().velocity.x = -move;

}
else{
GetComponent.<Rigidbody2D>().velocity.x = 0;
}
if(transform.position.x<-9.5)
{
GetComponent.<Rigidbody2D>().velocity.x = 1;
}
if(transform.position.x>9.5)
{
GetComponent.<Rigidbody2D>().velocity.x = -1;
}


if (Input.GetKeyDown('space')){
//makes it so i can shoot the bullet
//quaternion.identity is pre made to account for rotation

Instantiate(bullet, transform.position, Quaternion.identity);
}
if (transform.position.x == 6)
{
GetComponent.<Rigidbody2D>().velocity.x = 0;
}
if (transform.position.x == -6)
{
GetComponent.<Rigidbody2D>().velocity.x = 0;
}

}
