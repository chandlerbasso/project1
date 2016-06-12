#pragma strict

//i eddited some old code i had to impliment the score board
static var currentScore : int = 0;
var offsetZ : float = 200;
var offsetY : float = 200;
var sizeX : float = 100;
var sizeY : float = 40;


function Start () {

currentScore = 0;
}

function OnGUI () {
//creates a graphical user interface

GUI.Box (new Rect (offsetY, Screen.width/2-sizeX/2, sizeX, sizeY), "Score " + currentScore);
}