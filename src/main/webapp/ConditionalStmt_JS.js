//6.���ǹ�
//	� ���ǿ� ���� ���Ŀ� ������ �޶����� �ϴ�..
//		if�� - �ڹٿ� ����.
//		if - else if - else



//		switch-case�� -�ڹٿ� ����.
//			case�� �پ��� �� if�� ���� �����ϰ� ��Ÿ�� �� �ִ°� ����.
//				��� 100�� 
//				�ٳ��� 200��		
//				Ű�� 300��		
//				��� 500��		
//				���� 500��
//				��� ���� ������ �Է� �ؼ� �� ������ ���.

let apple=  100;
let banana= 200;
let kiwi= 	300;
let melon=	500;
let watermelon= 500;

let name = prompt("���ϰ��");

switch(name){
case "apple":alert('100��');
break;
case "banana":alert('200��');
break;
case "kiwi":alert('300��');
break;
case "melon":alert('500��');
break;
case "watermelon":alert('500��');
break;
default:
alert(`${name}..? �׷��� ����� �ٸ��Ű��`)
}