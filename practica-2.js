//Practica #1
/* function multiplesOf3Or5(number) {
    let suma = 0;

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            suma += i;
        }
    }

    return suma;
}

console.log(multiplesOf3Or5(1000)); */

//Practica #2
function fiboEvenSum(n) {

    let a = 1
    let b = 2
    let total = 0

    while (a <= n) {
        if (a % 2 === 0) {
            total = total + a


        }
        let next = a + b
        a = b
        b = next
    }
    return total;
}
fiboEvenSum(10)