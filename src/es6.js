//promises
var p = new Promise(function(resolve, reject) {  
   setTimeout(() => resolve(4), 2000);
});

// handler can't change promise, just value
p.then((res) => {  
  res += 2;  
  console.log(res);
});

// still gets 4
p.then((res) => console.log(res));  

//arrow functions

let square = x => x * x;
let add = (a, b) => a + b;
let pi = () => 3.1415;

console.log(square(5)); // 25
console.log(add(3, 4)); // 7



//var square = function(x) { return x * x; };
//var add = function(a, b) { return a + b; };
//var pi = function() { return 3.1415; };


//var vs. let
var x = 0;

for (let i = 0; i < 10; i++) {
  x += 10;
}

try {
  console.log(i);
} catch(e) {
  console.log(
    'i does not exist here!'
  );
}

//for of iterator

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let v of arr) {
  sum += v;
}

console.log('1 + 2 + 3 + 4 + 5 =', sum);