/*Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max*/

/*Include - если передадим еденицу, то min и max будут включены в результаты*/

function randomise(min, max, include = 0) {
  console.log(typeof min, typeof max, typeof include);

  if (
    typeof min !== "number" ||
    typeof max !== "number" ||
    typeof include !== "number"
  ) {
    return null;
  }

  let result = Math.random * (max - min) + min;
  console.log(result);
  return result;
}

let random_result = randomise(25, 105);
console.log(random_result);
