//11. �迭

//�⺻����
let student = ["������","�ٴ�","����"];
console.log(student[2]);


//�� ����������ִ�
let arr=["�ٴ�",3,false,{name:"ŰŰ",age:4,},function(){console.log("test");}]
console.log(arr);


//�迭�� ����
console.log(student.length);


//�迭�� ����߰�
let days = ["��","ȭ","��"];
days.push("��");
console.log(days);


//�迭�� ��� ����
days.pop();
console.log(days);


//�迭���� ���� ���� ū ������ �ϳ��� �ݺ��� ����ϱ� ���ؼ�
for(let i=0; i<days.length; i++){
console.log(days[i]);
}


//�ݺ��� �� ��ġ������ �� 
for (let day of days){
console.log(day);
}