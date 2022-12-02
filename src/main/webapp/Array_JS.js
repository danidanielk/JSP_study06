//11. 배열

//기본사용법
let student = ["곽두팔","다니","세니"];
console.log(student[2]);


//다 집어넣을수있다
let arr=["다니",3,false,{name:"키키",age:4,},function(){console.log("test");}]
console.log(arr);


//배열의 길이
console.log(student.length);


//배열에 요소추가
let days = ["월","화","수"];
days.push("목");
console.log(days);


//배열에 요소 삭제
days.pop();
console.log(days);


//배열ㅇ르 쓰는 가장 큰 이유중 하나는 반복문 사용하기 위해서
for(let i=0; i<days.length; i++){
console.log(days[i]);
}


//반복문 포 이치문으로 도 
for (let day of days){
console.log(day);
}