// falsy values -> false, 0, -0, BigInt 0n, "", null, undefined, NaN
// exceptional truthy values-> "0", 'false'," ", [], {}, functio(){}


// if-- else if -- else
//switch statement
// ternary opearator


// nullish coalescing operator(??) -> to assign non null and non undefined values
const val1 = null ?? 10;
const val2 = 6 ?? 19;
const val3 = null ?? 10 ?? 15;
const val4 = null ?? undefined;
const val5 = undefined ?? null;
console.log(val1, val2, val3, val4, val5);