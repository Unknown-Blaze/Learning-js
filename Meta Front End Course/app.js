// const btn = document.querySelector("#btn");
// const count = document.querySelector("#count");
// let answer = prompt("What is your name?")

// btn.addEventListener("click", () => {
    
//     let a = parseInt(count.textContent);
//     a += 1; 
//     count.textContent = `${a}: ${a.toString(2)}`;
// })
// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('input', function() {
//     if (input.value != '')
//         h1.innerText = input.value
//     else
//     h1.innerText = "Type into the input to make this text change"
// })

function add(...a) {
    return a.reduce((sum, num) => sum + num, 0);
}
module.exports = add;