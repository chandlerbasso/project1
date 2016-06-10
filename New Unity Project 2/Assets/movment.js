//i refrenced http://docs.unity3d.com/ScriptReference/ for unityscript syntax



#pragma strict

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
GetComponent.<Rigidbody2D>().velocity.y = 0;
}



if (Input.GetKeyDown('space')){
//makes it so i can shoot the bullet
//quaternion.identity is pre made to account for physics

Instantiate(bullet, transform.position, Quaternion.identity);
}

}