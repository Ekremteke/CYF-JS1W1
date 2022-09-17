// console.log(null == undefined);

console.log(1);
chekIsTrue(1);

console.log(true);
chekIsTrue(true);

console.log(0);
chekIsTrue(0);

//All values are truthy unless they are defined as falsy.
//That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

function chekIsTrue(value) {
  if (value) {
    console.log("♥");
  } else {
    console.log(false);
  }
}
