// 1) Функция для глубокого копирования простых объектов.

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 2) Пример использования.

// 2.1) Создание оригинального объекта.
const original = {
  name: "John",
  address: {
    city: "New Yourk",
    coutry: "USA",
  },
};

// 2.2) Создание глубокой копии.
const copy = deepClone(original);

// 3) Проверка.
copy.address.city = "Los Angeles";
console.log(original.address.city);
console.log(copy.address.city);
