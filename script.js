    let nota1 = parseFloat(prompt("Ingrese la primera nota"))
    let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
    let nota3 = parseFloat(prompt("Ingrese la tercer nota"))
    let promedio = (nota1 + nota2 + nota3)/3


    if(promedio >=1 && promedio <=5) {
        alert("El trimestre esta DESAPROBADO con : " +promedio)
    } else if (promedio >= 6 && promedio <=10) {
        alert("El trimestre esta AROBADO con :" + promedio)
    }else if(promedio >11){
        alert("Nota no valida")
    }else{
        alert("Nota no valida")
    }
