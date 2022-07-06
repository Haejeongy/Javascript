// Arrow Function

// function printMyName(name) {
//   console.log(name);
// }

// const printMyName = (name) => {
//   return console.log(name);
// };

// const printMyName = (name) => console.log(name)
// printMyName("Max");

// Exports & Imports (모듈방식)

// 다른 파일에서 컨텐츠를 불러올 수 있고,자바스크립트 파일은 그 컨텐츠가 어디서 온건지 알 수 있음
// default vs {}
// default로 export를 해줬다면, import를 어떤 변수로 받든지 default 값으로 받아온다
// 하지만, const 나 변수로 export를 해줬다면, 꼭 {}로 import 해줘야 한다

//Classes

class Human {
  constructor() {
    this.gender = "female";
  }
  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.name = "Max";
  }
  printMyName() {
    console.log(this.name);
  }
}

// const person = new Person ();
// person.printMyName();
// person.printGender();

// 상속 해주는 방법 -> extends & super keywords

// Classes, Properties & Methods

// class Human {
//     gender = 'male';

//     printGender = () => {
//         console.log(this.gender);
//     }
// }

// class Person extends Human {
//     name : 'max';
//     gender : 'female';

//     printMyName = () => {
//         console.log(this.name);
//     }
// }

//spread & rest operators
// spread 배열이나 객체를 펼처 놓는당
// 깊은 복사

// rest -> 함수의 전달인자를 배열로 바꿔준다

const number = [1, 2, 3];
const newNumber = [...number, 4];
// 스프레드 연산자, 그 다음 변수는 배열에 더해준다 !!

console.log(newNumber);

const person = {
  name: "Max",
};

const newPerson = {
  ...person,
  age: 28,
};

console.log(newPerson);

const filter = (...args) => {
  return args.filter((el) => el !== 1);
}; //스프레드를 써줬기 때문에 args는 배열 배소드인 필터를 사용할 수 있다

console.log(filter(1, 2, 3));

//구조분해할당
//원소 프로퍼티 하나만 가져와서 변수에 저장한다

const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num2);

//참조형 & 기본형 자료타입
// 배열, 객체 -> 참조형 자료타입 (주솟값 복사)
// 참조형 자료타입의 값을 바꾸면, 원래 값을 바꾸니 조심히 사용해야합니다

const people = {
    name : 'Max'
};

const secondPerson = {
    ...people 
};
// 원래 값이 객체이기 때문에 {...spread}를 사용해준것

people.name = 'john';

console.log(secondPerson);


// map 

const double = [1,2,3];
const doubleNumArray = double.map((el)=> {
    return el * 2 ;
});

console.log(double); // [1,2,3]
console.log(doubleNumArray); // [2,4,6]



