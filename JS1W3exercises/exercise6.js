function getIndex(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      return i;
    }
  }
  //   return array.indexOf(item); it also works basically.
}
const arr = [1, 3, 5, 7, 9, 100];
console.log(getIndex(arr, 5)); // 2
console.log(getIndex(arr, 100)); // 5
console.log(getIndex(arr, 1)); // 0
