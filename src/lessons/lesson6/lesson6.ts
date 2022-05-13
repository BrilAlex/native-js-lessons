console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.

type StudentType = {
  firstName: string
  lastName: string
  groupNumber: number
  marks: number[]
};

const students: StudentType[] = [
  {firstName: "Bob", lastName: "First", groupNumber: 2, marks: [1, 2, 3, 4, 5]},
  {firstName: "Jack", lastName: "Second", groupNumber: 1, marks: [4, 5, 3, 3, 3]},
  {firstName: "Alex", lastName: "Third", groupNumber: 1, marks: [4, 5, 4, 5, 5]},
  {firstName: "Tom", lastName: "Fourth", groupNumber: 3, marks: [3, 3, 4, 4, 5]},
  {firstName: "Helen", lastName: "Fifth", groupNumber: 1, marks: [5, 5, 5, 5, 5]},
  {firstName: "John", lastName: "Sixth", groupNumber: 2, marks: [4, 4, 4, 4, 4]},
  {firstName: "Ann", lastName: "Seventh", groupNumber: 3, marks: [3, 1, 3, 3, 2]},
  {firstName: "Nick", lastName: "Eighth", groupNumber: 1, marks: [2, 2, 3, 4, 5]},
  {firstName: "Jane", lastName: "Ninth", groupNumber: 2, marks: [1, 2, 1, 3, 4]},
  {firstName: "Sam", lastName: "Tenth", groupNumber: 3, marks: [1, 2, 3, 2, 1]},
];

function sortByAvgMark(students: StudentType[]) {
  const getAvgMark = (marks: number[]) => {
    return marks.reduce((acc, el) => acc + el, 0) / marks.length;
  };

  return students.sort((a, b) => getAvgMark(a.marks) > getAvgMark(b.marks) ? 1 : -1);
}

console.log(sortByAvgMark(students));

function getStudentsWithMarksHigherThenTree(students: StudentType[]) {
  return students.filter(s => s.marks.every(m => m > 3)).map(s => ({
    name: s.firstName,
    group: s.groupNumber
  }));
}

console.log(getStudentsWithMarksHigherThenTree(students));

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?

class SomeClass {
  constructor(public name: string, public age: number) {
  };
}

const obj = new SomeClass("Name", 20);
console.log(obj);

// Task 03
// Составить описание класса для представления времени. Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений. В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию

interface ITime {
  hours: number
  minutes: number
  seconds: number
  setHours: (value: number) => void
  setMinutes: (value: number) => void
  setSeconds: (value: number) => void
  getCurrentTime: () => string
}

class Time implements ITime {
  constructor(public hours: number, public minutes: number, public seconds: number) {
  };

  setHours(value: number) {
    if (value >= 0 && value <= 23) {
      this.hours = value
    } else {
      throw new Error("Incorrect hours value.")
    }
  };

  setMinutes(value: number) {
    if (value >= 0 && value <= 59) {
      this.minutes = value;
    } else {
      throw new Error("Incorrect minutes value.")
    }
  };

  setSeconds(value: number) {
    if (value >= 0 && value <= 59) {
      this.seconds = value;
    } else {
      throw new Error("Incorrect seconds value.")
    }
  };

  getCurrentTime() {
    return `${this.hours}:${this.minutes}:${this.seconds}`;
  };
}

const timeInstance = new Time(0, 0, 0);
console.log(timeInstance);
timeInstance.setHours(21);
timeInstance.setMinutes(59);
timeInstance.setSeconds(17);
console.log(timeInstance.getCurrentTime());

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей, у которых номер кредитной карточки находится в заданном диапазоне.

type CustomerType = {
  firstName: string,
  lastName: string,
  address: string
  bankAccount: number
};

class Customer {
  constructor(private firstName: string, private lastName: string, private address: string, private bankAccount: number) {
  };

  getFirstName() {
    return this.firstName;
  };

  getLastName() {
    return this.lastName;
  };

  getAddress() {
    return this.address;
  };

  getBankAccount() {
    return this.bankAccount;
  };

  setData({firstName, lastName, address, bankAccount}: CustomerType) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.bankAccount = bankAccount;
  };

  printInfo() {
    return `Full name: ${this.firstName} ${this.lastName}. Address: ${this.address}. Bank account: ${this.bankAccount}`;
  };
}

const customers = [
  new Customer("Bob", "First", "Minsk", 212345),
  new Customer("Jack", "Second", "Minsk", 145333),
  new Customer("Alex", "Third", "Minsk", 145455),
  new Customer("Tom", "Fourth", "Minsk", 333445),
  new Customer("Helen", "Fifth", "Minsk", 155555),
  new Customer("John", "Sixth", "Minsk", 244444),
  new Customer("Ann", "Seventh", "Minsk", 331332),
  new Customer("Nick", "Eighth", "Minsk", 122345),
  new Customer("Jane", "Ninth", "Minsk", 212134),
  new Customer("Sam", "Tenth", "Minsk", 312321),
];

function sortCustomers(customers: Customer[]) {
  return customers.sort((a, b) => a.getFirstName() > b.getFirstName() ? 1 : -1);
}

function getBankAccounts(customers: Customer[], minAccountNumber: number, maxAccountNumber: number) {
  return customers.filter(c => c.getBankAccount() >= minAccountNumber && c.getBankAccount() <= maxAccountNumber);
}

console.log(sortCustomers(customers));
console.log(getBankAccounts(customers, 300000, 399999));

// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.

class Car {
  constructor(protected brand: string, protected cylindersNumber: number, protected horsePower: number) {
  };

  printCar() {
    return `Brand: ${this.brand}. Cylinders: ${this.cylindersNumber}. Power: ${this.horsePower}`;
  };
}

class Truck extends Car {
  constructor(brand: string, cylindersNumber: number, horsePower: number, protected loadCapacity: number) {
    super(brand, cylindersNumber, horsePower);
  };

  setBrand(value: string) {
    this.brand = value;
  };

  setLoadCapacity(value: number) {
    this.loadCapacity = value;
  };
}

const car = new Car("BMW", 4, 170);

console.log(car.printCar());

const truck = new Truck("Truck", 6, 300, 1000);
console.log(truck);

truck.setBrand("Volvo");
truck.setLoadCapacity(1500);
console.log(truck);

// just a plug
export default () => {
};