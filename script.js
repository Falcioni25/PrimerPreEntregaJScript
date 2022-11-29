

alert("Bienvenido a ‘Prestamos Usuretti’")


let solicitar = Number(prompt(" Desea acceder a algun prestamo?\n-Ingrese 1 si la respuesta es SI\n-Ingrese 2 si la respueta es NO "))



let tasa = 0
let montoSolicitado = 0


if(solicitar == 1){
    
    montoSolicitado = parseFloat(prompt("Por favor ingrese el monto del prestamo que desea Solicitar"))
    alert("La tasa anual es de : \n 25% devolviendolo en 10 cuotas\n 35% devolviendolo en 15 cuotas\n 50% devolviendolo en 20 cuotas\n 75% devolviendolo en 25 cuotas\n 100% devolviendolo en 30 cuotas")
    tasa = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea abonar el prestamo"))

    while(tasa != 10 &&  tasa != 15 && tasa != 20 && tasa != 25 && tasa != 30){
        alert("La cantidad de cuotas ingresadas es incorrecta")
        alert("La tasa anual es de : \n 25% devolviendolo en 10 cuotas\n 35% devolviendolo en 15 cuotas\n 50% devolviendolo en 20 cuotas\n 75% devolviendolo en 25 cuotas\n 100% devolviendolo en 30 cuotas")
        tasa = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea abonar el prestamo"))

    }

    if(tasa == 10){
        
        resultado = (montoSolicitado*0.25)+montoSolicitado
        cuotas = resultado/tasa

        alert("Usted recibirá $" + montoSolicitado + " a pagar en " + tasa + " cuotas de $" + cuotas.toFixed(2) + ". Devolviendo asi un total de $" + resultado + ".")
        alert("Gracias por elegirnos!!!")
        }

    
        else if (tasa == 15){
        resultado = (montoSolicitado*0.35)+montoSolicitado
        cuotas = resultado/tasa

        alert("Usted recibirá $" + montoSolicitado + " a pagar en " + tasa + " cuotas de $" + cuotas.toFixed(2) + ". Devolviendo asi un total de $" + resultado + ".")
        alert("Gracias por elegirnos!!!")
        }

    
        else if (tasa == 20){
        resultado = (montoSolicitado*0.5)+montoSolicitado
        cuotas = resultado/tasa

        alert("Usted recibirá $" + montoSolicitado + " a pagar en " + tasa + " cuotas de $" + cuotas.toFixed(2) + ". Devolviendo asi un total de $" + resultado + ".")
        alert("Gracias por elegirnos!!!")
        }

    
        else if (tasa == 25){
        resultado = (montoSolicitado*0.75)+montoSolicitado
        cuotas = resultado/tasa

        alert("Usted recibirá $" + montoSolicitado + " a pagar en " + tasa + " cuotas de $" + cuotas.toFixed(2) + ". Devolviendo asi un total de $" + resultado + ".")
        alert("Gracias por elegirnos!!!")
        }

    
        else if (tasa == 30){
        resultado = montoSolicitado*2
        cuotas = resultado/tasa

        alert("Usted recibirá $" + montoSolicitado + " a pagar en " + tasa + " cuotas de $" + cuotas.toFixed(2) + ". Devolviendo asi un total de $" + resultado + ".")
        alert("Gracias por elegirnos!!!")
        }
    
        else{
            alert("Usted ha elegido una cantidad de cuotas incorrecta")
        }

       
       

    }else if (solicitar == 2){
        alert("Gracias por la visita. Lo esperamos nuevamente")

    }else{
        alert("Usted ha elegido una opcion Incorrecta. Reintente nuevamente mas tarde")
    }



    
    









/* 
let cantidadCuotas = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea abonar el prestamo"))
do {

    alert("Eligió una opción incorrecta")
    let solicitar = Number(prompt(" Desea acceder a algun prestamo?\n-Ingrese 1 si la respuesta es SI\n-Ingrese 2 si la respueta es NO\n-Ingrese 3 para SALIR "))
    if(solicitar == 3){
        break
    }      
}
while (solicitar !== 2 && solicitar !== 1); 

if(solicitar == 1){

let montoSolicitado = parseFloat("Por favor ingrese el monto del prestamo que desea Solicitar")

let cantidadCuotas = parseInt("Ingrese la cantidad de cuotas en las que desea abonar el prestamo")
} */
