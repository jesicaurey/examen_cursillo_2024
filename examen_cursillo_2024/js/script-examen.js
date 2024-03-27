//Resolver el problema utilizando javascript, para identificar una figura geométrica:

//Teniendo una variable numérica que representa el número de lados de una figura geométrica, 
//mostrar por consola su tipo. 
//Los tipos son: "Círculo", "Triángulo", "Cuadrado", "Pentágono", "Hexágono" o "Polígono", según corresponda:

//Círculo: si el número de lados es 0.
//Triángulo: si el número de lados es 3.
//Cuadrado: si el número de lados es 4.
//Pentágono: si el número de lados es 5.
//Hexágono: si el número de lados es 6.
//Polígono: si el número de lados es mayor que 6.
//Asegúrate de incluir un mensaje de error si el número de lados es menor o igual a cero.

 function tipoFigura(lado){
    if(Number.isInteger(lado)) {
        if(lado==0){
            console.log("Círculo");
        }else if(lado==3){
            console.log("Triángulo");
        }else if(lado==4){
            console.log("Cuadrado");
        }else if(lado==5){
            console.log("Pentagono")
        }else if(lado==6){
            console.log("Hexágono")
        }else if(lado>6){
            console.log("Polígono")
        }else if(lado<0){
            console.log("Error, el nro de lados es menor que 0, no es correcto.")
        }
    }else{
        console.log("Error! ingrese un nro. entero porfavor.")
    }
}
let lado = 6
tipoFigura(lado);

