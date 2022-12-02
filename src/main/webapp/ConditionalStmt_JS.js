//6.조건문
//	어떤 조건에 따라서 이후에 실행이 달라지게 하는..
//		if문 - 자바와 같다.
//		if - else if - else



//		switch-case문 -자바와 같다.
//			case가 다양할 때 if문 보다 간결하게 나타낼 수 있는게 장점.
//				사과 100원 
//				바나나 200원		
//				키워 300원		
//				멜론 500원		
//				수박 500원
//				사고 싶은 과일을 입력 해서 그 가격을 출력.

let apple=  100;
let banana= 200;
let kiwi= 	300;
let melon=	500;
let watermelon= 500;

let name = prompt("과일골라");

switch(name){
case "apple":alert('100원');
break;
case "banana":alert('200원');
break;
case "kiwi":alert('300원');
break;
case "melon":alert('500원');
break;
case "watermelon":alert('500원');
break;
default:
alert(`${name}..? 그런거 없어요 다른거골라`)
}