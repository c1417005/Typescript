let hasValue: boolean = false;
let count: number = 10;
let float: number = 3.14;
let negative: number = -0.12;
let single: string = 'hello';

const person = {
    name : {
        first:'jack',
        last:'smith'
    },
    age : 31,
}

const fruits = ['Apple','Banana','Grape'];

const book:[string,number,boolean] = ['business',1500,false];

enum coffeeSize{
    SHORT = 'SHORT',
    TALL = 'TALL',
    GRANDE = 'GRANDE',
    VENTI = 'VENTI'
}

const coffee ={
    hot: true,
    size: coffeeSize.GRANDE
}
coffee.size = coffeeSize.SHORT;

let anything:any = true;
anything  = 'hello';
anything = ['hello',33,true];
anything = {};

let banana = 'banana';
banana = anything;

let unionType:number | string = 10;
unionType = 'hello'
let unionTypes : (number | string)[] = [21,'hello'];

let apple:'apple' = 'apple'; 


type ClothSize = 'small' | 'medium'| 'large';

let clothSize: ClothSize  = 'medium';

const colth :{
    color: string;
    size: ClothSize
}={
    color:'white',
    size:'medium'
}

function add(num1:number,num2:number):number{
    return num1 + num2
}
add(3,2);

function sayHello(){
    console.log('Hello');
}

const anotherAdd:(n1:number,n2:number)=> number = add;

const doubleNumber:(num:number) =>number = num => num * 2;