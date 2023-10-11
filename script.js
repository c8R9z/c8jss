for(let i=0; i<10; i++){
    console.log(i);
}
let i = 1;
while(i<1_000_000){
    console.log(i)
    i*=2
}

i = 1;
while(i>10){
    console.log('somestuff')
}

i = 1;
do {
    console.log('somestuff')
} while(i>10);

let fruits=['banana', 'cherry', 'apple', 'pear'];

for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}