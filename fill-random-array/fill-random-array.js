/*Формирование массива заданной длины (numberElements), заполненного
псевдослучайными целыми числами в диапазоне от (min) до (max)*/
function getFillArrayNumbers(numberElements, min, max) {
  const array = [];
  for (let i = 0; i < numberElements; i++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
  }
  return array;
}

/*Формирование массива заданной длины (numberElements), заполненного
псевдослучайными датами в диапазоне от (start) до (end)*/
function getFillArrayDates(numberElements, start, end) {
  const array = [];
  for (let i = 0; i < numberElements; i++) {
    const date = new Date(+start + Math.random() * (end - start));
    array.push(date);
  }
  return array;
}
module.exports = { getFillArrayNumbers, getFillArrayDates };
