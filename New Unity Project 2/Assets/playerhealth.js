#pragma implicit

function Start () {

}

function Update () {

}
function OnTriggerEnter2D(obj) {
   
    var name = obj.gameObject.name;

   
    if (name == "New Prefab(Clone") {
        
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

   
    if (name == "New Prefab 1(Clone)") {
       
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

     if (name == "New Prefab 2(Clone)") {
        
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

   
    if (name == "New Prefab 3(Clone)") {
       
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }

    if (name == "New Prefab 4(Clone)") {
       
        Destroy(gameObject);
        Destroy(obj.gameObject);
    }
    }