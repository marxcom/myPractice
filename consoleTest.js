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
const arr = [{name:"James"}, {name:"Paul"}, {name:"Trevor"}, {name:"Amanda"}];
//console.log(arr.sort());
console.log(arr.sort((b,a) => a.name > b.name));
//console.log(arr.sort((a,b) => a.name[1] > b.name[1]));
---------------------------------------------------------------------
const o = { name: "Jerry" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];
console.log(arr.indexOf(5,3));
---------------------------------------------------------------------
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
console.log(arr.findIndex(o => o.id === "Francis"));
---------------------------------------------------------------------
const arr = [{ id: 5, name: "Judith" }, { id: 7, name: "Francis" }];
//console.log(arr.find(o => o.id === 5));
console.log(arr.find(o => o.id === 2));
---------------------------------------------------------------------
const arr = [5, 7, 11, 15, 16, 17, 18, 20];
console.log(arr.every(x => x%2 === 0));
//console.log(arr.every(x => Number.isInteger(Math.sqrt(x))));
---------------------------------------------------------------------
const cart = [{name: "Computer", price: 90.00}, {name: "Phone", price: 50.00}];
//const names = cart.map(x => x.name);
const names = cart.map(function (x){
  return x.name;
});
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x * 0.8);
const lcnames = names.map(x => x.toUpperCase());
console.log(lcnames);
console.log(discountPrices);
console.log(names);
console.log(prices);
---------------------------------------------------------------------
const items = ["Headphone", "Keyboard", "Charger"];
const prices = [100, 55, 70];
const cart = items.map((x,e) => ({name: x , price: prices[e]}));
console.log(cart);
---------------------------------------------------------------------
const cards = [];
//const deck = ["H", "C", "D", "S"];
for (let suit of ["H", "C", "D", "S"]){
  for (let value = 1; value <= 13; value++){
    cards.push({suit, value});
  }
}
//console.log(cards.filter(x => x.value === 2));
//console.log(cards.filter(x => x.i === "Diamond"));
//console.log(cards.filter(x => x.value > 10));
//console.log(cards.filter(x => x.value > 10 && x.suit === "Diamond"));

function cardToString (c){
  const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
  const values = {1: "A", 11: "Q", 12: "K", 13: "J"};

  for (let i =2; i <= 10; i++) values[i] = i;
  return values [c.value] + suits[c.suit];
}

//console.log(cards.filter(c => c.value === 2).map(cardToString));
//console.log(cards.filter(c => c.value > 10 && c.suit ==="H").map(cardToString).reverse());
---------------------------------------------------------------------
*/
