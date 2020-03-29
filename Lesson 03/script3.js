const arr = [
    {animal: 'cat', feature: 'black'},
    {animal: 'dog', feature: 'angry'},
    {animal: 'pappy', feature: 'sleepy'},
];

console.table(arr);

console.time('for');

let a = 1;

for (let i = 0; i < 5000; i++) {
    a += (a + i);
}

console.timeEnd('for');

const b = ['1', '2', '5', '8', '10', '98'];
b.length = 5;
console.log(b);
b.push(888);
console.log(b);

