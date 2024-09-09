// //• باستعمال `for loop` قم بطباعة الاعداد الزوجيه الموجودة في نطاق من 25- الى 0.

console.log("even numbers");

for (let i = 0; i < 25; i++) {
    if (i % 2 === 0) {
        console.log(i)
        continue;
    }
}

// • باستعمال `loop` قم بطباعة الاعداد الفردية من 1 - 20 .

console.log("odd numbers");

for (let i = 0; i < 25; i++) {
    if (i % 2 !== 0) {
        console.log(i)
        continue;
    }
}

//2

console.log("Fibonacci sequence:")

let N = 10
let fn1 = 0, fn2 = 1, next;

for (let i = 1; i <= N; i++) {
   console.log(fn1);
   next = fn1 + fn2;
   fn1 = fn2;
   fn2 = next;
}
//3
console.log("square");
for (let i = 0; i <= 10; i++) {
    let j=i*i
    console.log(j);
}

//4

