alert("Clasificar que numero de los tres es menor");

function resetear(){
    document.getElementById('resetear').reset();
}

var menor = function(n1,n2,n3){
    var numero1 = Number(document.getElementById("primer").value);
    var numero2 = Number(document.getElementById("segundo").value);
    var numero3 = parseInt(document.getElementById("tercer").value);
    if (numero1 < numero2 && numero1 < numero3){
        alert(numero1 + "es menor");
    }else   if(numero2 < numero1 && numero2 < numero3){
        alert(numero2 + "es menor");
    }else if(numero3 < numero1 && numero3 < numero2){
        alert(numero3 + "es menor");
    }
} 