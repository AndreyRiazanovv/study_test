// Перша задача, Використовуючи колекцію Set написати функцію, яка перевірить чи всі елементи в масиві
function areElementsUnique(arr) {
    // Створюємо новий Set для збереження унікальних елементів
    const uniqueSet = new Set(arr);
  
    // Порівнюємо розмір масиву з розміром Set
    // Якщо вони різні, то масив містить дубльовані елементи
    return arr.length === uniqueSet.size;
  }
  
  // Приклад використання:
  const arr1 = [1, 2, 3, 4, 5];
  const result1 = areElementsUnique(arr1);
  console.log(result1); // Виведе true, оскільки всі елементи унікальні
  
  const arr2 = [1, 2, 2, 3, 4];
  const result2 = areElementsUnique(arr2);
  console.log(result2); // Виведе false, оскільки є повторення числа 2

  //Друга задача Дано масив імен [ "Alex", "Bob", "Peter", "Annie"]. За допомогою колекції Map дати кожному з елементів масиву унікальний числовий ідентифікатор (починаючи з 1ці) та повернути створену колекцію Map
 
  function assignUniqueIds(names) {
    const uniqueIdMap = new Map();
    let id = 1;
  
    for (const name of names) {
      uniqueIdMap.set(name, id);
      id++;
    }
  
    return uniqueIdMap;
  }
  
  const names = ["Alex", "Bob", "Peter", "Annie"];
  const uniqueIdMap = assignUniqueIds(names);
  
  console.log(uniqueIdMap);
  
  //Третя задача Дано обʼєкт obj з двома числовими властивостями та двома методами add та subtract
  function checkMethodAvaliability(funcName, object) {
    // Перевіряємо, чи існує метод з заданою назвою у об'єкті
    if (object.hasOwnProperty(funcName) && typeof object[funcName] === 'function') {
      // Викликаємо метод і повертаємо його результат
      return object[funcName]();
    } else {
      // Якщо метод не знайдено, повертаємо відповідне повідомлення
      return "There is no such function in object";
    }
  }
  
  const obj = {
    a: 5,
    b: 2,
    add: function () {
      return this.a + this.b;
    },
    subtract: function () {
      return this.a - this.b;
    },
  };
  
  // Приклади виклику функції:
  console.log(checkMethodAvaliability('add', obj)); // Результат: 7
  console.log(checkMethodAvaliability('multiply', obj)); // Результат: "There is no such function in object"
  
  //Четверта задача Дано обʼєкт obj1 з двома числовими властивостями та двома методами add та subtract які відповідно додають або віднімають властивості
  
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