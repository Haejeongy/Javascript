// 객체를 손쉽게 만들 수 있는 템플릿
// 1. 생성자 함수 (신경 ㄴㄴ)
// 2. 클래스 (중요)


//생성자 함수를 클래스로 바꾸는 방법

class Fruit {
    constructor(name, emoji) {
        this.name = name; //객체를 지칭해주는 this 키워드
        this.emoji = emoji;
    }
        
        display = () => { //객체 안에서 사용하는 멤버함수가 있다면?
        console.log(`${this.name}: ${this.emoji}`);
    };
}

// apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit ('apple', '🍎');
// orange는 Fruit 클래스의 인스턴스이다.
const orange = new Fruit ('orange', '🍊');

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(orange.name);
apple.display() //객체 형식으로 반환되는군.

// 객체와 인스턴스는 다르다!
// 객체는 그냥 변수에 할당 되어지는 값,
// 인스턴스는 클래스로 만들어진 객체이다