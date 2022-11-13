let convertButton = document.querySelector('.convert-button');
let inputBar = document.querySelector('.input');
let newButton = document.querySelector('.new-button');
let answer = document.querySelector('.answer');
let userInput = inputBar.value ; 



let binaryToDecimal = function (userInput){
    // console.log(userInput) ; 
    let array = Array.from(String(userInput), Number) ; 
 //    console.log(`Here is the array ${array}`) ; 
    let tally = 0 ; 
     for (let i = 1 , multi = 1 ; i <= array.length ; i++ , multi*=2){
         result = (array[array.length-i]) * multi ; 
         // console.log(result) ; 
         tally += result ; 
         }console.log(tally) ; 
         answer.innerHTML = tally ; 
 }

 newButton.addEventListener('click', () =>{
    inputBar.value = "" ; 
    answer.innerHTML = " " ; 
 })


 


