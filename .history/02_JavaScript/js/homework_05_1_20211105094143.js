/*Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max*/
/*Include - если передадим еденицу, то min и max будут включены в результаты*/
function randomise(min, max, include = 0) {
  if (typeof min !== "number" || typeof max !== "number") {
    return null;
  }

  let result = Math.floor(Math.random * (max - min + include) + min);
  return result;
}
