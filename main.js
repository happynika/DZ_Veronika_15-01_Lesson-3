function numbers(number1, number2) {
    if (number1 < number2) {
        console.log('Первое меньше')
    } else if (number1 > number2) {
        console.log('Второе меньше')
    } else {
        console.log('Числа равны')
    }
}
let number  = {
    number1: prompt("Укажи число"),
    number2: prompt("Укажи число")
}
numbers(number.number1, number.number2)


function countChar (arr1, arr2) {
    if(arr1.length > arr2.length) {
        alert("Первое больше")
    } else if(arr1.length < arr2.length){
        alert("Второе больше")
    }else {
        alert("равны")
    }
}

const arr1 = [135, 357, 579]
const arr2 = [246, 468, 682, 824, 2468, 4682, 6824]

countChar(arr2, arr1)

