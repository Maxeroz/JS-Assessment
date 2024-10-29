class Calculator {
  // 1) Метод конструктора вызывается при создании экземпляра класса.
  constructor() {}

  // 2) Метод сложения.
  add(a, b) {
    return a + b;
  }

  // 3) Метод вычитания.
  subtract(a, b) {
    return a - b;
  }

  // 4) Метод умножения.
  multiply(a, b) {
    return a * b;
  }

  // 5) Метод деления.
  divide(a, b) {
    if (b === 0) {
      throw new Error("Error: деление на ноль невозможно.");
    }
    return a / b;
  }
}

// 6) TEST.
const calculator = new Calculator();

console.log("Сложение:", calculator.add(5, 3));
console.log("Вычитание:", calculator.subtract(9, 4));
console.log("Умножение:", calculator.multiply(7, 2));

try {
  console.log("Деление:", calculator.divide(10, 2));
  console.log("Деление на ноль:", calculator.divide(10, 0));
} catch (error) {
  console.error(error.message);
}
