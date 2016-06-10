//i refrenced http://docs.unity3d.com/ScriptReference/ for unityscript syntax



#pragma strict

var move = 5 ;

var rotationspeed = 45;


function start () {


}


function Update () {
//ship movment forward


if (Input.GetKey(KeyCode.W))
{
GetComponent.<Rigidbody2D>().velocity.y = move;

}
//ship moves backwards
else if (Input.GetKey(KeyCode.S))
{
GetComponent.<Rigidbody2D>().velocity.y = -move;

}
else{
GetComponent.<Rigidbody2D>().velocity.y = 0;
}
//ship turns right

 if (Input.GetKey(KeyCode.A)){
     GetComponent.<Rigidbody2D>().transform.Rotate(Vector3.forward * rotationspeed * Time.deltaTime);

}
//ship turns left
else if (Input.GetKey(KeyCode.D)){
     GetComponent.<Rigidbody2D>().transform.Rotate(Vector3.back * rotationspeed * Time.deltaTime);

}

}