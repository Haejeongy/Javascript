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
