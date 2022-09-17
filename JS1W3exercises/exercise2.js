// console.log(null == undefined);

console.log(1);
checkIsTrue(1);

console.log(-1);
checkIsTrue(-1);

console.log(true);
checkIsTrue(true);

console.log(false);
checkIsTrue(false);

console.log(0);
checkIsTrue(0);

console.log(null);
checkIsTrue(null);

console.log(NaN);
checkIsTrue(NaN);

console.log("[]");
checkIsTrue([]);

//All values are truthy unless they are defined as falsy.
//That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, and NaN.

function checkIsTrue(value1) {
  if (value1) {
    // "\x1b[32m%s\x1b[0m" will change console output to green
    console.log(
      "\x1b[32m%s\x1b[0m",
      "Yes, this expression evaluates to true! ✅"
    );
  } else {
    // "\x1b[31m%s\x1b[0m" will change console output to red
    console.log(
      "\x1b[31m%s\x1b[0m",
      "Sorry, this expression evaluates to false! ❌"
    );
  }
}
