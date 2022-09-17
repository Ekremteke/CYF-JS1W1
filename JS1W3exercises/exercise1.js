const getTruthiness = (value) => (value ? "Truthy!" : "Falsy");

console.log(getTruthiness(null));

console.log(getTruthiness(getTruthiness(0)));

console.log(getTruthiness("falsy"));
