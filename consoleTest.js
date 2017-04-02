"strict mode";
/*
var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function toOrdinal (num) {
  switch (num){
    case 1:
    case 21:
    case 31:
      return num.toString() + "st";
    case 2:
    case 22:
      return num.toString() + "nd";
    case 3:
    case 23:
      return num.toString() + "rd";
    default:
      return num.toString() + "th";
  }
}

function monthAndDay (md) {
  return monthNames[md.getMonth()] + " " + toOrdinal(md.getDate());
}

function fullDate(md) {
  return monthAndDay(md) + ", " + md.getFullYear();
}

function makeFriendlyDates(arr) {
  var getCurrentYear = new Date().getFullYear();
  var startIndex = new Date(Date.parse(arr[0]));
  var endIndex = new Date(Date.parse(arr[1]));
  var yearInMS = 31536000000;

  if (endIndex - startIndex === 0) {
    return [fullDate(startIndex)];
  }

  if (startIndex.getFullYear() === getCurrentYear && startIndex.getMonth() === endIndex.getMonth()) {
    return [monthAndDay(startIndex), toOrdinal(endIndex.getDate())];
  }

  if (startIndex.getFullYear() === getCurrentYear && endIndex - startIndex < yearInMS) {
    return [monthAndDay(startIndex), monthAndDay(endIndex)];
  }

  if (endIndex - startIndex < yearInMS) {
    return [fullDate(startIndex), monthAndDay(endIndex)];
  }

  if (endIndex - startIndex >= yearInMS) {
    return [fullDate(startIndex), fullDate(endIndex)];
  }

}

makeFriendlyDates(['2016-07-01', '2016-07-04']);

for (;;){
  break;
}

const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for(let i in player) {
if(!player.hasOwnProperty(i)) continue; // see explanation below
}

const hand = [randFace(), randFace(), randFace()];
for(i = 0; i < hand.length; i++)



const doIt = false;
const result = doIt ? "Did it" : "Didn't do it";

console.log(result);


const num = [1,2,3,4,5,6];

for (var i = 0; i < num.length; i++){
console.log(num[i]);
}

const num = [3,5,15,7,5];
let n,i =0;

while((n = num[i])<10, i++ < num.length) {
  console.log(`Number less than 10: ${n}.`);
}
console.log(`Number greater than 10 found: ${i}.`);
console.log(`${num.length} numbers remain.`);

const arr = [1,2,3,4,5,6];

let [x,y,...z] = arr;
console.log(z);
------------------------------------------------------
function isPrime(n){
  if (n%2 === 0){
    return true;
  }
}

label = isPrime(100) ? "Prime" : "Non-prime";

console.log(label);
--------------------------------------------------------

options = true;

options = options || {};
console.log(options);
-------------------------------------------------------


function getGreeing() {

  return ["Hello World","Hello Man", "Good Day", "Well Done"]
}

console.log(getGreeing);
---------------------------------------------------------

function getGreeing() {

  return "Hello World";
}

const arr = [1,2,3];
arr[1] = getGreeing;

console.log(arr[1]());
-----------------------------------------------------------

function f(x){
  console.log(`inside f: x=${x}`);
  x = 5;
  console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);
-----------------------------------------------------------

function f1() {
  console.log('one');
}
function f2() {
  console.log('two');
}
f2();
f1();
f2();
-----------------------------------------------------------

const x = 3;
function f() {
  console.log(x); // this will work
  console.log(y); // this will cause a crash
}
const y = 4;
f();
-----------------------------------------------------------

console.log('before block');
{
  console.log('inside block');
  const x = 3;
  console.log(x);
}
//console.log(`outside block; x=${x}`); : Crashed as expect!
--------------------------------------------------------------
{
// block 1
  const x = 'blue';
  console.log(x); // logs "blue"
}
console.log(typeof x); // logs "undefined"; x out of scope
---------------------------------------------------------------

let f;
{
  let o = { note: 'Safe' };
  f = function() {
    return o;
  };
}

let oRef = f();

oRef.note = "Not so safe after all!";

console.log(oRef.note);
-------------------------------------------------------------------
const message = function() {
  const secret = "I'm a secret!";
  return `The secret is ${secret.length} characters long.`;
};
console.log(message());
---------------------------------------------------------------------
const f = (function() {
  let count = 0;
  return function() {
    return `I have been called ${++count} time(s).`;
  };
})();
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
---------------------------------------------------------------------
const arr = [1,2,3,4,5,6,7,8];

console.log(arr.fill("a",-6,-2));
---------------------------------------------------------------------
*/
const arr = [{name:"James"}, {name:"Paul"}, {name:"Trevor"}, {name:"Amanda"}];
//console.log(arr.sort());
console.log(arr.sort((b,a) => a.name > b.name));
//console.log(arr.sort((a,b) => a.name[1] > b.name[1]));
