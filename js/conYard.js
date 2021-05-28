alert("convierte tus metros a yardas");

function resetear(){
    document.getElementById('resetear').reset();
}

var cvMtsYard = function(n1){
    var mts = Number(document.getElementById("metro").value);
    var yar = mts*1.0936;
    return yar; 
}