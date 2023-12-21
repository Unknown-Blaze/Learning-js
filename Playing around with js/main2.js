function print(element){
    console.log(element)
} 

let numbers = []
for (let i = 1; i <= 10; i++){
    numbers.push(i)
}
numbers.forEach(print)

const square = (element) => {
    return element*element
}

let squares = numbers.map(square)

squares.forEach(print)

