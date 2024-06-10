/* Execution context -> this
1. Global Execution Context
2. Functional Execution Context
3. eval Execution Context -. in case of mongoose etc


Whenever a program is created, following are the stages:
1. Memory creation phase
2. Execution phase

Consider following program: 
const val1 = 10;
const val2 =20;
const addNum = (num1, num2) => {
  return num1+num2;
}
const result1 = addNum(val1, val2);
const result2= addNum(11, 12);


Execution steps: 
1. Global execution -> this
2. Memory creation -> val1 = undefined, val2 = undefined, addNum = definition, result1 = undefined, result2 = undefined
3. Execution phase-> val1 = 10, val2 = 20, addNum = function execution context(new variable env. + execution thread) -> 
  first addNum : 3.1 Memory phase -> val1 = undefined, val2 = undefined, total = undefined
  3.2 Execution phase -> num1 = 10, nums2 = 20, total = 30 and this total will be returned to global execution result1
  3.3 delete first addNum thread 
  second addNum:  3.1 Memory phase -> val1 = undefined, val2 = undefined, total = undefined
  3.2 Execution phase -> num1 = 11, nums2 = 12, total = 23 and this total will be returned to global execution result2
  3.3 delete second addNum thread
*/