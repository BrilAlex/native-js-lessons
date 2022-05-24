function Animal(name = "Animal") {
  this.name = name;
}

Animal.prototype.walk = function () {
  console.log(`${this.name} is walking`);
};
Animal.prototype.eat = function () {
  console.log(`${this.name} is eating`);
};
Animal.prototype.sleep = function () {
  console.log(`${this.name} is sleeping`);
};

console.log("Task 04.1 alt");
let animal = new Animal();
animal.walk();
animal.eat();
animal.sleep();

function Monkey(name = "Monkey") {
  Animal.call(this, name);
}

Monkey.prototype = Object.create(Animal.prototype, {
  constructor: {
    value: Monkey,
  },
  roar: {
    value: function () {
      console.log(`${this.name} is roaring`);
    },
  },
  climb: {
    value: function () {
      console.log(`${this.name} is climbing`);
    },
  },
});

console.log("Task 04.2 alt");
let monkey = new Monkey();
monkey.walk();
monkey.eat();
monkey.sleep();
monkey.roar();
monkey.climb();

function Human(name = "Human") {
  Monkey.call(this, name);
}

Human.prototype = Object.create(Monkey.prototype, {
  constructor: {
    value: Human,
  },
  speak: {
    value: function () {
      console.log(`${this.name} is speaking`);
    },
  },
  think: {
    value: function () {
      console.log(`${this.name} is thinking`);
    },
  },
});

console.log("Task 04.3 alt");
let human = new Human();
human.walk();
human.eat();
human.sleep();
human.roar();
human.climb();
human.speak();
human.think();

console.log("Task 05");
let obj1 = {name: 'Obj 1'};
let obj2 = {
  name: 'Obj 2', sayName: function () {
    console.log(this.name, ...arguments);
  }
};
let obj3 = {name: 'Obj 3'};

Function.prototype.customBind = function (context, ...args) {
  const _self = this;
  return function (...args2) {
    _self.apply(context, [...args, ...args2]);
  };
};

obj2.sayName.customBind(obj1)();

console.log("Task 05 alt");
Function.prototype._bind = function (context, ...args) {
  context._self = this;
  return function (...args2) {
    context._self(...args, ...args2);
  };
};

obj2.sayName._bind(obj1)();
obj2.sayName._bind(obj3, 50)._bind(obj1, 100)();

console.log("Task 06");
let obj = {
  _a: 1,
  get a() {
    return this._a++;
  },
}
if (obj.a === 1 && obj.a === 2 && obj.a === 3) {
  console.log('Bingo');
}

console.log("Task 07");
const f = () => {
  const a = {
    a: 5,
  };

  // a.valueOf = function () {
  //   return this.a++;
  // }

  a.toString = function () {
    return this.a++;
  }

  if (a == 5 && a == 6 && a == 7) {
    console.log('It works');
  }
};

console.log(f());
