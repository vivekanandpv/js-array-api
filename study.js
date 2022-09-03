//  Arrays follow the reference semantics
//  that means, the variable holds the reference to the actual array in the memory
//  Therefore, the copy of the variable is a copy of the reference, not the copy of the array

const scores = [9, 8, 7, 7, 5, 4, 9, 0];

const numbers = scores;

//  Now, numbers and scores are two references to the same array in the memory

numbers[0] = 899;

console.log(scores[0]); //  899
