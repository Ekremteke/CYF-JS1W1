const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (const item of daysOfWeek) {
  // other way of the for loop
  console.log(item);
}

function getDay(index) {
  if (index < 5) {
    return `${daysOfWeek[index]} is a business day`;
  } else if (index < 7) {
    return `${daysOfWeek[index]} is a weekend day`;
  } else {
    return "Uh-oh, the week comprises of just 7 days";
  }
}

for (let i = 0; i < daysOfWeek.length; i++) {
  const dayMessage = "day is: " + daysOfWeek[i];
  const indexMessage = "index is: " + i;
  console.log(indexMessage, dayMessage);
}
console.log(getDay(5));
