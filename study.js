const scores = [9, 8, 7, 7, 5, 4, 9, 0];

//  every returns true if all elements pass the predicate
const er = scores.every((n) => n > 0); //  false

//  some returns true if at least one element passes the predicate
const sr = scores.some((n) => n > 0); //  true
