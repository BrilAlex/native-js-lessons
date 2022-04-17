console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a: number) {
  return (b: number) => a + b;
}

console.log("Task 01");
console.log(sum(3)(6));

// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
  let count = 0;
  return function () {
    return count += 1;
  };
}

console.log("Task 02");
const counter = makeCounter();
console.log(counter());
console.log(counter());
const counter2 = makeCounter();
console.log(counter2());
console.log(counter());

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function makeCounter2(startValue: number) {
  let count = startValue;
  return {
    increase() {
      return count += 1;
    },
    decrease() {
      return count -= 1;
    },
    reset() {
      return count = 0;
    },
    set(value: number) {
      return count = value;
    }
  };
}

console.log("Task 03");
const counterAlt = makeCounter2(1);
console.log(counterAlt.increase()); // 2
console.log(counterAlt.decrease()); // 1
const counterAlt2 = makeCounter2(100);
console.log(counterAlt2.increase()); // 101
console.log(counterAlt.reset()); // 0
console.log(counterAlt.set(9)); // 9

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

function superSum(n: number) {
  if (n <= 0) return 0;
  if (n === 1) return (num: number) => num;

  let outerArgs: number[] = [];
  const inner = (...args: number[]) => {
    outerArgs = [...outerArgs, ...args];
    if (outerArgs.length >= n) {
      outerArgs.length = n;
      return outerArgs.reduce((acc, el) => acc + el);
    } else {
      return inner;
    }
  };
  return inner;
}

console.log("Task 04");
console.log(superSum(0)); // 0
// @ts-ignore
console.log(superSum(3)(2)(5)(3)); // 10
// @ts-ignore
console.log(superSum(3)(2)(5, 3)); // 10
// @ts-ignore
console.log(superSum(3)(2, 5, 3)); // 10
// @ts-ignore
console.log(superSum(3)(2, 5)(3)); // 10
// @ts-ignore
console.log(superSum(3)(2, 5)(3, 9)); // 10

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// Вычислить сумму чисел до данного
// Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// Например:
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:
// 1) С использованием цикла.
// 2) Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.
// 3) С использованием формулы арифметической прогрессии.

// Пример работы вашей функции:
// function sumTo(n) { /*... ваш код ... */ }
// alert( sumTo(100) ); // 5050

// P.S. Какой вариант решения самый быстрый? Самый медленный? Почему?
// P.P.S. Можно ли при помощи рекурсии посчитать sumTo(100000)?

console.log("Task 05");

function sumTo(n: number) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

console.log("5.1 sumTo Cycle: ", sumTo(100));

function sumToRecur(n: number): number {
  if (n === 1) return n;
  return n + sumToRecur(n - 1);
}

console.log("5.1 sumTo Recursion: ", sumToRecur(100));

function sumToArif(n: number) {
  return n * (1 + n) / 2;
}

console.log("5.1 sumTo Arithmetic progression: ", sumToArif(100));


// Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на "себя минус два", и так далее до 1. Факториал n обозначается как n!
// Определение факториала можно записать как:
//   n! = n * (n - 1) * (n - 2) * ...*1

// Примеры значений для разных n:
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120

// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120

// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

function factorial(n: number): number {
  return n === 1 ? 1 : n * factorial(n - 1);
}

console.log("5.2 factorial: ", factorial(5));


// Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2.
// То есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5, 8, 13, 21....

// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных явлений вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

// Пример работы:
// function fib(n) { /* ваш код */ }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77) должен занимать не более доли секунды.

function fibRecursion(n: number): number {
  return n <= 1 ? n : fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log("5.3 fibRecursion: ", fibRecursion(3));
console.log("5.3 fibRecursion: ", fibRecursion(7));
// console.log("5.3 fibRecursion: ", fib(77)); // вычисляется очень долго

// При больших значениях n такое решение будет работать очень долго.
// Например, fib(77) может повесить браузер на некоторое время, съев все ресурсы процессора.
// Это потому, что функция порождает обширное дерево вложенных вызовов.
// При этом ряд значений вычисляется много раз снова и снова.

// Можно заметить, что fib(3) вычисляется дважды, а fib(2) – трижды.
// Общее количество вычислений растёт намного быстрее, чем n, что делает его огромным даже для n=77.
// Можно это оптимизировать, запоминая уже вычисленные значения: если значение, скажем,
// fib(3) вычислено однажды, затем мы просто переиспользуем это значение для последующих вычислений.
// Другим вариантом было бы отказаться от рекурсии и использовать совершенно другой алгоритм на основе цикла.
// Вместо того, чтобы начинать с n и вычислять необходимые предыдущие значения,
// можно написать цикл, который начнёт с 1 и 2, затем из них получит fib(3) как их сумму,
// затем fib(4)как сумму предыдущих значений, затем fib(5) и так далее, до финального результата.
// На каждом шаге нам нужно помнить только значения двух предыдущих чисел последовательности.

function fib(n: number) {
  let a = 1;
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log("5.3 fib: ", fib(3));
console.log("5.3 fib: ", fib(7));
console.log("5.3 fib: ", fib(77)); // вычисляется очень долго


// Вывод односвязного списка
// Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

// Напишите функцию printList(list), которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.
// Как лучше: с рекурсией или без?

console.log("5.4 printList Cycle: ");

function printList(list: any) {
  // let currentValue = list.value;
  // let nextItem = list.next;
  // while (nextItem) {
  //   console.log(currentValue);
  //   currentValue = nextItem.value;
  //   nextItem = nextItem.next;
  //   if (!nextItem) {
  //     console.log(currentValue);
  //   }
  // }

  let temp = list;
  while (temp) {
    console.log(temp.value);
    temp = temp.next;
  }
}

printList(list);

function printListRecur(list: any): any {
  // if (!list.next) {
  //   console.log(list.value);
  //   return;
  // }
  // else {
  //   console.log(list.value);
  //   return printListRecur(list.next);
  // }

  console.log(list.value);

  if (list.next) {
    printListRecur(list.next);
  }
}

console.log("5.4 printList Recursion: ");
printListRecur(list);


// Вывод односвязного списка в обратном порядке
// Выведите односвязный список из предыдущего задания Вывод односвязного списка в обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.

// Нет способа сразу получить последнее значение в списке list.
// Мы также не можем «вернуться назад», к предыдущему элементу списка.
// Поэтому мы можем сначала перебрать элементы в прямом порядке и запомнить их в массиве,
// а затем вывести то, что мы запомнили, в обратном порядке.

function printReversedList(list: any) {
  let temp = list;
  let arr = [];

  while (temp) {
    arr.push(temp.value);
    temp = temp.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

console.log("5.5 printReversedList Cycle: ");
printReversedList(list);

// Сначала надо вывести оставшуюся часть списка, а затем текущий элемент.
function printReversedListRecur(list: any) {
  if (list.next) {
    printReversedListRecur(list.next);
  }
  console.log(list.value);
}

console.log("5.5 printReversedList Recursion: ");
printReversedListRecur(list);

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
const arr = [1, 2, [3, 4, [5, 6]]];

function deepFlat(arr: any[], depth: number = 1): any[] {
  return depth > 0 ?
    arr.reduce((acc, el) => acc.concat(Array.isArray(el) ? deepFlat(el, depth - 1) : el), [])
    :
    arr.slice();
}

console.log("Task 06 deepFlat: ", deepFlat(arr, Infinity));

function flatten(arr: any[]) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.push(next);
    }
  }
  return result.reverse();
}

console.log("Task 06 flatten: ", flatten(arr));

// just a plug
export default () => {
};