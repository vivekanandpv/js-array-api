const scores = [9, 8, 7, 7, 5, 4, 9, 0];

//  reduce successively applies reduction on elements:

const answer = scores.reduce((a, b) => {
  console.log(`Reducer is called with a = ${a} and b = ${b}`);
  return a + b;
}); //  49

console.log(answer);
