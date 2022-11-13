let binaryToDecimal = function (number){
   let array = Array.from(String(number), String) ; 
//    console.log(`Here is the array ${array}`) ; 
   let tally = 0 ; 
    for (let i = 1 , multi = 1 ; i <= array.length ; i++ , multi*=2){
        result = (array[array.length-i]) * multi ; 
        // console.log(result) ; 
        tally += result ; 
        }console.log(tally) ; 
}

binaryToDecimal(('011111')); 