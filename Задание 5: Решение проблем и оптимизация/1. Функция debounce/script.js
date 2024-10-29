// 1) Функция debounce.

function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// 2) Пример использования.

// Так как мы декларировали функцию в глобальном скоупе, нам нужно вручную переназначить this keyword, чтобы сохранить возможность ссылаться на скоуп места вызова функици. Если бы мы этого не сделали, вне зависимости от того, где бы вызывалась функция 'debounce', this всегда бы ссылалось на глобальный объект 'window' или в строгом режиме было бы 'undefined'.

const obj = {
  name: "My Object",
  printName: debounce(function () {
    console.log(this.name);
  }, 2000),
};

obj.printName();
