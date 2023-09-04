// Перша задача вивести масив слів

function sortMonths(inputString) {
  // Створюємо масив назв місяців
  const months = [ "січень", "лютий", "березень", "квітень", "травень", "червень", "липень", "серпень", "вересень", "жовтень", "листопад", "грудень"];

  // Розбиваємо вхідний рядок на слова
  const words = inputString.split(" ");

  // Вибираємо лише слова, які є назвами місяців
  const monthWords = words.filter(word => months.includes(word));

  // Сортуємо масив назв місяців за алфавітним порядком
  monthWords.sort();

  return monthWords;
}

const inputString = "січень лютий березень квітень травень червень липень серпень вересень жовтень листопад грудень" ;
const sortedMonths = sortMonths(inputString);
console.log(sortedMonths);

// Друга задача вивід масива без дублікатів
function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }
  
  let strings = [ 1, 4, 5, 6, 6, 7, 8, 5, 11, 5, 10, 6, 1, 2, 21, 6, 7, 1, 5, 9, 7, 1, 20 ];
  
  console.log( unique(strings) ); // вивід результату

  // Третя задача вивід парних чисел

  var arr = [12, 21, 26, 29, 31, 35, 38, 42, 61, 68, 34, 51, 54,  55, 121, 17, 116, 25, 647, 720, 966];

for (var i = 0; i < arr.length; i++)
{
  if ((arr[i] % 2) === 0)
  {
  	console.log(arr[i]);
  }
}

// Четверта задача масив з послідовності чисел

function generateSequence(start, length) {
  const sequence = [];
  let currentValue = start;

  for (let i = 0; i < length; i++) {
    // Перевіряємо, чи наступний елемент не перевищує 30
    if (currentValue <= 30) {
      sequence.push(currentValue);
      currentValue += 5; // Збільшуємо поточне значення на самого себе
    } else {
      break; // Якщо перевищили 30, завершуємо генерацію
    }
  }

  return sequence;
}

// Приклад виклику функції:
const startValue = 1; // Початкове значення
const sequenceLength = 10; // Довжина послідовності

const result = generateSequence(startValue, sequenceLength);
console.log(result); // Виведе масив чисел