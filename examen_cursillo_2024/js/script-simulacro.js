function Prommedio (Nota1,Nota2,Nota3) {
    let nota = 0
    nota = (Nota1+Nota2+Nota3) / 3
    //console.log ("La nota resultante del promedio es: " + nota)
    //Nota es menor a 4 - LIBRE
    //Nota es menor a 7 y no es LIBRE - REGULAR 
    //Nota mayor que 6  - PROMOCIONADO.
    if (nota>=1 && nota<4){ //(nota<4)
        console.log("LIBRE")
    }else if (nota>= 4 && nota<=6){
        console.log("REGULAR")
    }else if (nota>6 && nota<=10){ //(nota>6)
        console.log("PRMOCIONADO")
    }else if (Nota1<1 || Nota2<1 || Nota3<1){
        console.log("Error, no es válido se ingreso nota menor a 1.")
    }else if (Nota1>10 || Nota2>10 || Nota3>10){
        console.log("Error, no es válido se ingreso nota mayor a 10.")
    }
}
Prommedio(6,9,8)