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
