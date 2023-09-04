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
 
  
  
  
  
  
  