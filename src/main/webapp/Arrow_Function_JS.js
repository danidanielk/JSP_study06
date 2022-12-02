//함수 표현 식 순서가 지나야 쓸 수있음 함수 선언문과 다름.
/*
let sayHello = function(){
console.log("Hello");
}
sayHello();
*/


//함수 선언문은 어디서든지 호출해서 사용할 수 있음...;;;; 만들기 전에 선언해도 나옴 "호이스팅" 이라고한다.
hello();
function hello(){
console.log("hello");
}


//화살표 함수 : 여지껏 봤던 함수들 보다 더 간결하게 작성할 수 있는 함수.

let add = function (num1,num2){
return num1+num2;
}
// 위 함수표현식을 줄여보자
// function 대신 화살표 들어가고 리턴 생략가능.

let add2=(num1,num2) =>{
 num1+num2;
}