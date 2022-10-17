let sum = 0 // declare a variable for the total of the sum of the numbers
for(i = 1; i < 1000; i++) { // run a for loop going through each number between 1 and 1000
    if (i % 3 === 0 || i % 5 === 0) { // check if that number is a multiple of 3 OR 5
        sum += i                // if it is a multiple, add to the total
    } 
}
console.log(sum) // print total of the sum of all the numbers that met the conditions