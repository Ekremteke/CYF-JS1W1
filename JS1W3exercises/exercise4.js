const fruits = ["banana", "apple", "strawberry", "kiwi", "fig", "orange"];
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits[5]);
console.log(fruits[0]);
fruits[1] = "raspberry";
fruits[4] = "pineapple";
console.log(fruits);

function secondMatchesAmy(array) {
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === "Amy") {
      return "Second element matched!";
    }
    return "Second element not matched";
  }
}
// it need to complete . It has not be completed yet.
