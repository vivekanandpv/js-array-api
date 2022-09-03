const scores = [9, 8, 7, 7, 5, 4, 9, 0];

//  push adds the element at the end
scores.push(10);

//  unshift adds the element at the beginning
scores.unshift(67);

//  splice to add at a random index
scores.splice(3, 0, 34, 35, 36);

//  pop to remove at then end (returns the removed element)
const e1 = scores.pop(); //  e1 = 10

//  shift to remove from the beginning (returns the removed element)
const e2 = scores.shift(); //  e2 = 67;

//  splice to remove at the random index
scores.splice(3, 2); //  removes 2 elements starting from 3rd index
