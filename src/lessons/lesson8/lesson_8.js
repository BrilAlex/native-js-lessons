console.log('Lesson 8');

// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
const str_t1 = 'fgfggg';
console.log("Task 01:", str_t1[0]);

// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
Number.prototype.plus = function (num) {
  return this + num;
};
Number.prototype.minus = function (num) {
  return this - num;
};

console.log("Task 02:", (2).plus(3).minus(1));

// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function task03(separator, ...args) {
  return args.join(separator);
}

function task03_alt() {
  return [].slice.call(arguments, 1).join(arguments[0]);
}

console.log("Task 03:", task03("*", "1", "b", "1c"));
console.log("Task 03 alt:", task03_alt("*", "1", "b", "1c"));

// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
  valueNode: 3,
  next: [
    {
      valueNode: 1,
      next: null
    },
    {
      valueNode: 3,
      next: null
    },
    {
      valueNode: 2,
      next: null
    },
    {
      valueNode: 2,
      next: [
        {
          valueNode: 1,
          next: null
        },
        {
          valueNode: 5,
          next: null
        }
      ]
    }
  ]
};

function sumNodeValues(tree) {
  let sum = 0;

  function helper(obj) {
    sum += obj.valueNode;
    if (obj.next) {
      obj.next.forEach(item => helper(item));
    }
  }

  helper(tree);

  return sum;
}

function sumNodeValuesAlt(tree) {
  let sum = 0;
  let arr = [tree];
  let current;

  while (arr.length > 0) {
    current = arr.shift();
    sum += current.valueNode;

    if (current.next) {
      for (let i = 0; i < current.next.length; i++) {
        arr.push(current.next[i]);
      }
    }
  }

  return sum;
}

console.log("Task 04 recursion:", sumNodeValues(tree));
console.log("Task 04 cycle:", sumNodeValuesAlt(tree));

// Task 5
// исправить код, что бы работал правильно
for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log("Task 05:", i);
  }, 100);
}

for (var i = 0; i < 10; i++) {
  (i => {
    setTimeout(function () {
      console.log("Task 05 alt:", i);
    }, 100);
  })(i)
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало
function Book(name, author) {
  this.name = name;
  this.author = author;
  return this;
}

function Foo(Book, name, author) {
  return new Book(name, author);
}

function FooAlt(Book, name, author) {
  return Book.call({}, name, author);
}

var book = Foo(Book, 'js', 'petr');
var bookAlt = FooAlt(Book, 'js', 'petr');
console.log("Task 06:", book.name);
console.log("Task 06 alt:", bookAlt.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
function f_t7(a, b) {
  if (b === undefined) {
    return (b) => a + b;
  } else {
    return a + b;
  }
}

console.log("Task 07:", f_t7(2, 3), f_t7(2)(3));

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
function f_t8(arg) {
  var value = arg;

  return function (innerArg) {
    if (innerArg !== undefined) {
      return f_t8(value + innerArg);
    } else {
      return value;
    }
  }
}

console.log("Task 08:", f_t8(1)(2)(3)(), f_t8(0)(3)(1)(5)());

// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function seven(arg) {
  return arg !== undefined ? 7 + arg : 7;
}

function five(arg) {
  return arg !== undefined ? 5 + arg : 5;
}

function two(arg) {
  return arg !== undefined ? 2 + arg : 2;
}

function one(arg) {
  return arg !== undefined ? 1 + arg : 1;
}

function plus(arg) {
  return arg;
}

function minus(arg) {
  return -arg;
}

function oneAlt(arg) {
  return typeof arg === 'function' ? arg(1) : 1;
}

function twoAlt(arg) {
  return typeof arg === 'function' ? arg(2) : 2;
}

function fiveAlt(arg) {
  return typeof arg === 'function' ? arg(5) : 5;
}

function sevenAlt(arg) {
  return typeof arg === 'function' ? arg(7) : 7;
}

function plusAlt(arg) {
  return function (a) {
    return a + arg;
  }
}

function minusAlt(arg) {
  return function (a) {
    return a - arg;
  }
}

console.log("Task 09:", seven(plus(one())), five(minus(two())));
console.log("Task 09 alt:", sevenAlt(plusAlt(oneAlt())), fiveAlt(minusAlt(twoAlt())));

// Task 10
// Реализовать функцию сортировки массива пузырьком
let arr_t10 = [0, 9, 8, 100, 2, 5, 1, 15, -1, -5];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function bubbleSortAlt(arr) {
  let count = arr.length - 1;
  let max = null;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < count - i; j++) {
      if (arr[j] > arr[j + 1]) {
        max = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = max;
      }
    }
  }
  return arr;
}

console.log("Task 10:", bubbleSort(arr_t10));
console.log("Task 10 alt:", bubbleSortAlt(arr_t10));

// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
const str = "())({}}{()][][";
const strAtl = "()({}{()})[]";

function checkBrackets(str) {
  const config = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const helper = str => {
    if (str.length === 0) {
      return true;
    }
    if ((str.length + 1) % 2 === 0) {
      return false;
    }
    // create subFunctions which check bracket is opening or closing
    const isOpenBrackets = char => Object.keys(config).includes(char);
    const getClosingBracket = char => config[char];

    for (let i = 0; i < str.length; i++) {
      if (isOpenBrackets(str[i]) && getClosingBracket(str[i]) === str[i + 1]) {
        // delete from str correct pair of brackets
        let newString = `${str.slice(0, i)}${str.slice(i + 2)}`;
        return helper(newString);
      }
    }
    return false;
  };
  return helper(str);
}

console.log("Task 11:", checkBrackets(str));
console.log("Task 11 alt:", checkBrackets(strAtl));

// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
let arr_t12 = [1, 2, 5, 5, 3, 9, 0, 0, 4];

function getUniqueValues(arr) {
  let result = [];

  arr.forEach((el) => {
    if (result.indexOf(el) === -1) {
      result.push(el);
    }
  });

  return result;
}

function getUniqueValuesAlt(arr) {
  let result = {};

  arr.forEach((el) => {
    result[el] = "";
  });

  return Object.keys(result).map(el => Number(el));
}

console.log("Task 12:", getUniqueValues(arr_t12));
console.log("Task 12 alt:", getUniqueValuesAlt(arr_t12));

// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
function f_t13(arr) {
  return arr.filter(el => el !== null).map(el => el * 2);
}

console.log("Task 13:", f_t13([1, 2, null, 7, 8, null, 3]));

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {value: 4},
        {value: 5},
      ]
    },
    {
      value: 3,
      children: [
        {value: 6},
        {value: 7},
      ]
    }
  ]
};

function getTreeValues(tree) {
  let result = [tree.value];

  if (Array.isArray(tree.children)) {
    tree.children.forEach(el => result = result.concat(getTreeValues(el)));
  }

  return result;
}

function getTreeValuesAlt(tree) {
  let result = [];
  let tempTree = [tree];
  let current;

  while (tempTree.length > 0) {
    current = tempTree.shift();
    result.push(current.value);

    if (current.children) {
      current.children.forEach(el => tempTree.push(el));
    }
  }

  return result;
}

console.log("Task 14:", getTreeValues(tree2));
console.log("Task 14 alt:", getTreeValuesAlt(tree2));

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14
function sumTreeValues(tree) {
  let result = tree.value;

  if (Array.isArray(tree.children)) {
    tree.children.forEach(el => result += sumTreeValues(el));
  }

  return result;
}

function sumTreeValuesAlt(tree) {
  let result = 0;
  let tempTree = [tree];
  let current;

  while (tempTree.length > 0) {
    current = tempTree.shift();
    result += current.value;

    if (current.children) {
      current.children.forEach(el => tempTree.push(el));
    }
  }

  return result;
}

console.log("Task 15:", sumTreeValues(tree2));
console.log("Task 15 alt:", sumTreeValuesAlt(tree2));

// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function Bomb(delay, sound) {
  this.sound = sound;
  setTimeout(this.blowUp.bind(this), delay * 1000);
}

Bomb.prototype.blowUp = function () {
  console.log(this.sound);
};

new Bomb(3, "Task 16: Boom!");

// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
function rle(str) {
  const result = [str[0]];
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;

      if (i === str.length - 1) {
        result.push(str[i]);
        if (count > 1) {
          result.push(count);
        }
      }
    } else {
      if (i > 1) {
        result.push(str[i - 1]);
      }

      if (i === str.length - 1) {
        result.push(str[i]);
      }

      if (count > 1) {
        result.push(count);
      }

      count = 1;
    }
  }

  return result.join('');
}

console.log("Task 17:", rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD"));
console.log("Task 17 check:", rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD") === "AV3B3V2XDHJF4D6HA4J3D2SLS3D4");

// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
let arr_t18 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr_t18_2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function isSorted(arr) {
  if (arr.length <= 1) return true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }

  return true;
}

function isSortedAlt(arr) {
  if (arr.length <= 1) return true;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

console.log("Task 18:", isSorted(arr_t18));
console.log("Task 18:", isSorted(arr_t18_2));
console.log("Task 18 alt:", isSortedAlt(arr_t18));
console.log("Task 18 alt:", isSortedAlt(arr_t18_2));

// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
// missing([])                         // undefined
// missing([1, 4, 3])                  // 2
// missing([2, 3, 4])                  // 1
// missing([5, 1, 4, 2])               // 3
// missing([1, 2, 3, 4])               // undefined
function missing(arr) {
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    if (!arr.includes(i)) result.push(i);
  }

  return result.length === 0 ? undefined : result;
}

console.log("Task 19:", missing([]));
console.log("Task 19:", missing([1, 4, 3]));
console.log("Task 19:", missing([2, 3, 4]));
console.log("Task 19:", missing([5, 1, 4, 2]));
console.log("Task 19:", missing([1, 2, 3, 4]));

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
// class LinkedList {...}
// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// list.has(4)                           // true
// list.has(6)                           // false
class LinkedList {
  constructor() {
    return LinkedList.createItem(0, arguments, this);
  }

  static createItem(index, args, obj) {
    if (!args[index]) {
      return null;
    }
    obj.value = args[index];
    obj.next = LinkedList.createItem(index + 1, args, { });
    return obj;
  }

  add(v) {
    let currentList = this;
    while (currentList.next !== null) {
      currentList = currentList.next;
    }
    currentList.next = {
      value: v,
      next: null,
    }
  }

  has(v) {
    let currentList = this;
    while (currentList) {
      if (currentList.value === v) return true;
      currentList = currentList.next;
    }
    return false;
  }
}

let list = new LinkedList(1, 2, 3)
console.log("Task 20:", list.add(4));
console.log("Task 20:", list.add(5));
console.log("Task 20:", list.has(1));
console.log("Task 20:", list.has(4));
console.log("Task 20:", list.has(6));

// Task 21
// Что выведет консоль?
// 1
// 4
// 2
// 5
// 3
// 6

Promise
  .resolve()
  .then(() => console.log("Task 21:", 1))
  .then(() => console.log("Task 21:", 2))
  .then(() => console.log("Task 21:", 3));

Promise
  .resolve()
  .then(() => console.log("Task 21:", 4))
  .then(() => console.log("Task 21:", 5))
  .then(() => console.log("Task 21:", 6));