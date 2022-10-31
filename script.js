const myName = (name) => {
    return `This is my ${name}`;
}
let name_1 = myName('Trang');
console.log(name_1);


const canGetPrize = (number) => {
    if (number > 5) {
        return 'Bingo'
    } 
}

let number_1 = canGetPrize(10);
console.log(number_1);

let number_2 = canGetPrize(4);
console.log(number_2);