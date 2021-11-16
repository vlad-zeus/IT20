/*Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max*/
function randomise(min, max) {
  if (typeof min !== "number" || typeof max !== "number") {
    return null;
  }

  let result = Math.random * (max - min) + min;
  return result;
}
