import "./lesson_7";

console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают
interface IAnimal {
  name: string
  walk: () => void
  eat: () => void
  sleep: () => void
}

class Animal implements IAnimal {
  constructor(public name: string = "Animal") {
  };

  walk() {
    console.log(`${this.name} is walking`);
  };

  eat() {
    console.log(`${this.name} is eating`);
  };

  sleep() {
    console.log(`${this.name} is sleeping`);
  };
}

console.log("Task 01");
let animal = new Animal();
animal.walk();
animal.eat();
animal.sleep();


//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal {
  constructor(public name: string = "Monkey") {
    super();
  };

  roar() {
    console.log(`${this.name} is roaring`);
  };

  climb() {
    console.log(`${this.name} is climbing`);
  };
}

console.log("Task 02");
let monkey = new Monkey();
monkey.walk();
monkey.eat();
monkey.sleep();
monkey.roar();
monkey.climb();


//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey {
  constructor(public name: string = "Human") {
    super();
  };

  speak() {
    console.log(`${this.name} is speaking`);
  };

  think() {
    console.log(`${this.name} is thinking`);
  };
}

console.log("Task 03");
let human = new Human();
human.walk();
human.eat();
human.sleep();
human.roar();
human.climb();
human.speak();
human.think();

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование


// Task 05
// Используя метод Apply реализовать свой собственный метод bind


// just a plug
export default () => {
};
