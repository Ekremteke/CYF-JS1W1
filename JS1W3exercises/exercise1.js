const getTruthiness = (value) => (value ? "Truthy!" : "Falsy");

console.log(getTruthiness(getTruthiness(undefined)));
