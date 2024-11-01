// Задание 1: Основные алгоритмические задачи

// 1) Проверка на палиндром

function isPalindrome(str) {
  // 1) Декларируем переменную cleanStr
  let cleanStr = "";
  // 2) С помощью for loop приводим каждый из символов в нижний регистр и проверяем является ли символ буквойлатинского или киррилического альфавитов, а также учитываем цифры.
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (
      (char >= "a" && char <= "z") ||
      (char >= "а" && char <= "я") ||
      (char >= "0" && char <= "9")
    ) {
      // 3) На каждой итерации добавляем к cleanStr символ, если условие проверки соблюдено.
      cleanStr += char;
    }
  }

  // 4) Строка cleanStr в обратном порядке.
  let reversedStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reversedStr += cleanStr[i];
  }

  // 5) Сравниваем результат
  return cleanStr === reversedStr;
}

// 2) FizzBuzz

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // 1) Если кратно 3 или 5 выводим "FizzBuzz".
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      // 2) Если кратно 3 выводим "Fizz".
      console.log("Fizz");
    } else if (i % 5 === 0) {
      // 3) Если кратно 5 выводим "Buzz"
      console.log("Buzz");
    } else {
      // 4) Во всех остальных случаях выводим цифру
      console.log(i);
    }
  }
}

// 3) Разбиение массива на части

function chunkArray(array, size) {
  // 1) Декларируем переменную result. Мы можем использовать const декларацию, так как в следующем этапе будет использоваться метод массива "push", который мутирует данные.
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    // 2) Используем slice, чтобы взять подмассив длиной size и добавляем его в result при каждой итерации лупа.
    result.push(array.slice(i, i + size));
  }

  return result;
}
