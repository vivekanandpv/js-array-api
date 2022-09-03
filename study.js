const cities = [
  {
    city: 'Mumbai',
    population: 12.44,
  },
  {
    city: 'Delhi',
    population: 11.0,
  },
  {
    city: 'Bengaluru',
    population: 8.42,
  },
  {
    city: 'Hyderabad',
    population: 6.8,
  },
];

//  find returns the first element that passes the predicate
const ac = cities.find((c) => c.population < 10); //  Bengaluru
