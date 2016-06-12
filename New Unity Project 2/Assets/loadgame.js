import UnityEngine.SceneManagement;
#pragma implicit

function update(){


if(Input.GetMouseButtonDown(0)){
SceneManager.LoadScene('code_panic');
}
}