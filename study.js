const scores = [9, 8, 7, 7, 5, 4, 9, 0];

//  map produces the new array by mapping every element
const na1 = scores.map((i) => i * i);

//  filter selects the element that pass the predicate
const na2 = scores.filter((i) => i % 2 === 0);

//  forEach calls the function with each element (iterator)
scores.forEach((el, i) => console.log(`Element at ${i} is ${el}`));

//  map, filter, forEach do not change the source array
