'use strict'

console.log('Hello World!');
console.info("this is info");
console.warn("this is a warning");
console.error("this is an error");

const variable = 'This is a variable called variable';
console.log(variable);

let string = '1 + 1 = ';
let number = 1 + 1;
console.log(string + number);

for (let i = 0; i < 10;i++)
{
	console.log(i);
}

let condition = true;
let increment = 0;

while (condition)
{
	increment++;
	console.log(increment);
	if (increment == 3) condition = false;
}

const notThis = false;

do
{
    console.log('this is a do-while loop');
}while(notThis)

let num = 1;

switch (num)
{
    case 0  : console.log('zero');break;
    case 1  : console.log('one');break;
    case 2  : console.log('two');break;
    default : console.log('default');
}

if ('') 
{
    console.log(true);
} else {
    console.log(false);
}

if (' ')
{
    console.log(true);
} else {
console.log(false);
}

let str = 'hello';

if (str == 'hello')
{
    console.log('string is equal to hello');
}

let sts = 'goodbye';

if (sts == 'hello')
{
    console.log('string is equal to hello');
}
else if (sts == 'goodbye')
{
    console.log('string is equal to ' + sts);
}

let stb = ' ';

if (stb == 'hello')
{
    console.log('string is equal to hello');
}
else if (sts == 'goodbye')
{
    console.log('string is equal to goodbye');
}
else
{
    console.log('string is not equal to hello or goodbye');
}

let x = 1;
x == 1 ? console.log('x is 1') : console.log('x is not 1');





42 == `42` ? console.log(true) : console.log(false);
42 === `42` ? console.log(true) : console.log(false);


for (let i = 1; i <= 100; i++)
{
    if (i % 3 == 0 && i % 5 == 0)
    {
        console.log(i + ': FizzBuzz');
    }
    else if (i % 3 == 0)
    {
        console.log(i + ': Fizz');
    }
    else if (i % 5 == 0)
    {
        console.log(i + ': Buzz');
    }
    else
    {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++)
{
    i % 3 == 0 && i % 5 == 0 ? console.log(i + ': FizzBuzzzzz'): i % 3 == 0 ? console.log(i + ': Fizzzzz'):i % 5 == 0 ? console.log(i + ': Buzzzzz'):console.log(i);

}

let petDog = {name: "Clifford", type: "Dog", size: "Big"}

let pets = [];
let petCat = {};

pets.push(petDog);
pets.push(petCat);

let y = ['a','b','c','d','e'];
for (let i in y)
{
    console.log(y[i]);
}

y.reverse(); 
let out = '';

for (let i in y)
{
    i == y.length-1 ? out += y[i] : out += y[i] + '-';
}
console.log(out);


const j = '{"tom": "is", "an": "idiot"}';

let o = JSON.parse(j);

console.log(o.an);

let jj = JSON.stringify(petDog);

function output(a)
{
    console.log(a);
}

output('spectrum is green');

function request()
{
    return 'response';
}

console.log(request());

function sum(a,b)
{
    return a * b;
}

console.log(sum(5,2));

let log = (str) => {console.log(str)}

log('green arrow');

const button = document.getElementById('button').value;

function change()
{
    if (document.getElementById('button').value == 'press me')
    {
        document.getElementById('button').value = 'I have been pressed';
    }
    else
    {
        document.getElementById('button').value = 'press me';
    }
    
}

