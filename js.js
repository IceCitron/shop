let input = document.querySelector('input')
let button = document.querySelector('button')
let example = document.createElement('span')
let wrapper = document.querySelector('.wrapper')
example.classList.add('example')

let number1 = Math.floor(Math.random() * 1000)
let number2 = Math.floor(Math.random() * 1000)
let symbols_array = ['+', '-', '*', '/']
let symbols = symbols_array[Math.floor(Math.random()*4)]
let correct = `${number1} ${symbols} ${number2}`

function math_example(){
    switch(symbols){
        case symbols_array[0]:console.log(number1+number2);
        break;
        case symbols_array[1]:console.log(number1-number2);
        break;
        case symbols_array[2]:console.log(number1*number2);
        break;
        case symbols_array[3]:console.log(Math.floor(number1/number2));
    }
}
math_example();
example.innerHTML = `${correct}`
console.log(example)
wrapper.lastChild = `

<span></>${number1}+${number2}=?
`


button.addEventListener('click', ()=>{
    let btn = input.value
    console.log(btn)
})