
//10 ��ü Object
//���� Ű��� ������ �ɲ� 7��
let dog={
name:"�ɲ�",
age	:3
}
console.log(dog.name);
console.log(dog.age);

//�߰�
dog.gender = "Male";
dog.furColor = "White";

//����
delete dog.furColor;

function hi(name,age){
return {
name: name,
age:age,
gender : "male"
}
}
let a = hi("dani",4);
console.log(a);