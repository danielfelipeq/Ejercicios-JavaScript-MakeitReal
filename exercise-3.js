/* Ejercicio 3
Escribe una función llamada likes que reciba un número y
devuelva un string utilizando el formato de K para miles
y M para millones.

Por ejemplo:

1400 se convierte en 1K
34,567 se convierte en 34K
7’456,345 se convierte en 7M.
Si el número es menor a 1000 se debe devolver el mismo
número como un string. */

const likes = (numCom) => {
    let abr = String(numCom)
    if(numCom>=1000 && numCom<10000){
        abr = abr.charAt(0) + 'K'
    } else if (numCom>=10000 && numCom<100000){
        abr = abr.substring(0,2) + 'K'
    } else if (numCom>=100000 && numCom<1000000){
        abr = abr.substring(0,3) + 'K'
    }
    else if (numCom>=1000000 && numCom<10000000){
        abr = abr.charAt(0) + 'M'
    }
    else if (numCom>=10000000 && numCom<100000000){
        abr = abr.substring(0,2) + 'M'
    }
    return (abr)
}
console.log(likes(983)) // "983"
console.log(likes(1900)) // "1K"
console.log(likes(54000)) // "54K"
console.log(likes(120800)) // "120K"
console.log(likes(25222444)) // "25M"