// function sumar(num1, num2) {
//     return num1 + num2
// }

// sumar(1, 3)

// console.log(sumar(2, 3))
// console.log(sumar(7, 3))

// let obj = {
//     name: "Marco",
//     age: 36
// }

// let arrayNum = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9]

// // agrega un elemento al final del array
// arrayNum.push(10)

// arrayNum.pop()

// console.log(arrayNum)

// // map recorre los elementos y hace lo que le indico que haga con cada uno
// let arrayNombres = ["Tatiana", "Alejandra", "Jenny", "Marco"]

// let arrayConcatenado = arrayNombres.map(elem => elem + "Hola")
// console.log(arrayConcatenado)

// // filter busca los elementos indicados
// let otroArray = arrayNombres.filter(elem => elem.includes("Tati"))
// console.log(otroArray)

// // find encuentra y devuelve el primer elemento que cumpla la condición
// // si no devuelve undefined
// let encontrados = arrayNum.find(elem => elem > 3)
// console.log(encontrados)
// console.log(arrayNum.find(elem => elem > 3))

// // una array puede contener objetos, pero sigue siendo una lista de elementos
// let eventos = [{
//     nombre: "librería",
//     fecha: 12541,
//     capacidad: 1000,
//     valor: 500,
//     category: "cine"
// },
// {
//     nombre: "cine",
//     fecha: 12541,
//     capacidad: 1000,
//     valor: 500,
//     category: "comida"
// },
// {
//     nombre: "comida",
//     fecha: 12541,
//     capacidad: 1000,
//     valor: 500,
//     category: "música"
// },
// ]

// let fechas = eventos.map(evento => evento.category)
// console.log(fechas)

// ejercicio 8

// function juegoNumeros() {
//     alert(`Adivina el número incógnito del 1 al 10! Tienes 3 intentos!`)
//     let numeroIncognita = 5
//     let numeroIngresado
//     numeroIngresado = Number(prompt(`Primer Intento: ingresa un número`))
//     if (numeroIngresado == numeroIncognita) {
//         alert(`Felicidades! haz encontrado el número correcto!`)
//     } else if (numeroIngresado != numeroIncognita) {
//         alert(`Incorrecto, prueba otra vez!`)
//         if (numeroIngresado < numeroIncognita) {
//             alert(`El número incógnito es mayor`)
//         } else if (numeroIngresado > numeroIncognita) {
//             alert(`El número incógnito es menor`)
//         }
//         numeroIngresado = Number(prompt(`Segundo Intento: ingresa un número`))
//         if (numeroIngresado == numeroIncognita) {
//             alert(`Felicidades, haz encontrado el número correcto!`)
//         } else if (numeroIngresado != numeroIncognita) {
//             alert(`Incorrecto, prueba otra vez!`)
//             if (numeroIngresado < numeroIncognita) {
//                 alert(`El número incógnito es mayor`)
//             } else if (numeroIngresado > numeroIncognita) {
//                 alert(`El número incógnito es menor`)
//             }
//             numeroIngresado = Number(prompt(`Segundo Intento: ingresa un número`))
//             if (numeroIngresado == numeroIncognita) {
//                 alert(`Felicidades, haz encontrado el número correcto!`)
//             } else if (numeroIngresado != numeroIncognita) {
//                 alert(`Haz perdido`)
//             }
//         }
//     }
// }

let { createApp } = Vue;
createApp({
    data() {
        return {
        }
    },
    created() {
    },
    methods: {
        juegoNumeros() {
            alert(`Adivina el número incógnito del 1 al 10! Tienes 3 intentos!`)
            let numeroIncognita = Math.floor(Math.random() * 11)
            if (numeroIncognita != 0) {
                let numeroIngresado
                numeroIngresado = Number(prompt(`Primer Intento: ingresa un número`))
                if (numeroIngresado == numeroIncognita) {
                    alert(`Felicidades! haz encontrado el número correcto!`)
                } else if (numeroIngresado != numeroIncognita) {
                    alert(`Incorrecto, prueba otra vez!`)
                    if (numeroIngresado < numeroIncognita) {
                        alert(`El número incógnito es mayor`)
                    } else if (numeroIngresado > numeroIncognita) {
                        alert(`El número incógnito es menor`)
                    }
                    numeroIngresado = Number(prompt(`Segundo Intento: ingresa un número`))
                    if (numeroIngresado == numeroIncognita) {
                        alert(`Felicidades, haz encontrado el número correcto!`)
                    } else if (numeroIngresado != numeroIncognita) {
                        alert(`Incorrecto, prueba otra vez!`)
                        if (numeroIngresado < numeroIncognita) {
                            alert(`El número incógnito es mayor`)
                        } else if (numeroIngresado > numeroIncognita) {
                            alert(`El número incógnito es menor`)
                        }
                        numeroIngresado = Number(prompt(`Segundo Intento: ingresa un número`))
                        if (numeroIngresado == numeroIncognita) {
                            alert(`Felicidades, haz encontrado el número correcto!`)
                        } else if (numeroIngresado != numeroIncognita) {
                            alert(`Haz perdido`)
                        }
                    }
                }
            } else {
                alert(`Error en el juego, comienza de nuevo!`)
            }
        }
    },
}).mount("#app")