alert("convierte tus cm en in");

function resetear(){
    document.getElementById('resetear').reset();
}

var convercion = function(n1,n2){
    var numero1 = Number(document.getElementById("numero").value);
    var In = numero1* 0.39370;
    return In;
}
