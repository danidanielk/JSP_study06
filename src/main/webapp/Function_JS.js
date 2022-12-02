//8 함수.


/**
function hello(name){
let msg= "hello";
if (name)	{
msg += `,${name}`;
}
alert(msg);
}
hello();
hello('dani');
**/

let msg = "hello";  //전역변수
console.log("함수 호출 전");
console.log(msg);

function sayHello(name){
let msg = "Hello";
if (name){
msg+= `,${name}`;
}
console.log("함수 내부");
console.log(msg);
}

sayHello("dani");
console.log("함수 호출 후");
console.log(msg);

function hi(name){
let newname= name ||'yoseq';
let ms = `hello, ${newname}`;
}
hi();
hi("dani");


function add(num1,num2){
return num1+num2;
}
let result = add(2,3);
console.log(result);




