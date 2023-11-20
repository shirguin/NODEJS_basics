//Формирование массива заданной длины (numberElements), заполненного
// псевдослучайными целыми числами в диапазоне от (min) до (max)
function getFillArrayNumbers(numberElements, min, max) {
  const array = [];
  for (let i = 0; i < numberElements; i++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
  }
  return array;
}

console.log(getFillArrayNumbers(23, 10, 90));
