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

let object = {
    name: 'Chris',
    age: 17,
    eyes: 'Brown'
}

for(const property in object){
    console.log(property);
    console.log(object[property])
}

let num = 10;
if(num > 10){
    console.log('suurem');
} else if(num === 10){
    console.log('võrdne')
} else {
    console.log('väiksem')
}

let day = new Date('2023-10-18').getDay();
console.log(day);

switch(day){
    case 0:
        console.log('Pühapäev')
        break;
    case 1:
        console.log('Esmaspäev')
        break;
    case 2:
        console.log('Teisipäev')
        break;
    case 3:
        console.log('Kolmapäev')
        break;
    case 4:
        console.log('Neljapäev')
        break;
    case 5:
            console.log('Reede')
        break;
    case 6:
        console.log('Laupäev')
        break;
    default:
        console.log('Weirdday')
}

for(let i=1;i<=200;i++){
    let answer = '';
    if(i%5===0){
        answer += 'Foo';
    }
    if(i%7===0){
        answer += 'Bar';
    }
    if (answer === ''){
        answer = i;
    }
    console.log(answer);
}