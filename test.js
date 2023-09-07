function createExtendedObject(obj1) {
  // Створюємо новий об'єкт, який успадковує прототип об'єкту obj1
  const extendedObj = Object.create(obj1);

  // Додаємо метод multiply до нового об'єкту
  extendedObj.multiply = function (x, y) {
    return x * y;
  };

  // Додаємо метод divide до нового об'єкту
  extendedObj.divide = function (x, y) {
    if (y === 0) {
      throw new Error("Ділення на нуль не допускається");
    }
    return x / y;
  };

  return extendedObj;
}

// Створюємо об'єкт obj1 з числовими властивостями та методами add та subtract
const obj1 = {
  prop1: 10,
  prop2: 5,
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
};

// Створюємо новий об'єкт, який успадковує прототип obj1 та має методи multiply та divide
const extendedObj = createExtendedObject(obj1);

// Приклад використання нового об'єкту
console.log(extendedObj.prop1); // 10
console.log(extendedObj.add(5, 2)); // 7
console.log(extendedObj.multiply(3, 4)); // 12
console.log(extendedObj.divide(10, 2)); // 5