function agregarALaPantalla(valor){
    document.getElementById("pantalla").value += valor;
}
function borrar(){
    let txt =  document.getElementById("pantalla").value;
    document.getElementById("pantalla").value = txt.substring(0,txt.length-1);
}
function limpiarPantalla  (){
    document.getElementById("pantalla").value = '';
}
function calcular(){
    const valorPantalla = document.getElementById("pantalla").value;
    const resultado = eval(valorPantalla);
    document.getElementById('pantalla').value = resultado;
}