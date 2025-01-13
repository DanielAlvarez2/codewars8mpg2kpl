// convert miles per gallon (mpg) into kilometers per liter (kpl).
// based on the number of mpg (input)
// display the number of kpl (output) 
// Your answer should be accurate within 0.01 kpl.
// 1 Mile = 1.609344 km
// 1 Gallon = 4.54609188 L

// 1mpg = 0.43 kpl

function mpg2kpl(mpg){
    return mpg * (1.609344/4.54609188)
}

console.log("1mpg = 0.43kpl", mpg2kpl(1))
console.log("60mpg = 25.51kpl", mpg2kpl(60))
console.log("100mpg = 42.51kpl", mpg2kpl(100))