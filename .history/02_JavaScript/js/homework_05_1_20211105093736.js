/*Напишите функцию random(min, max), которая будет возвращать случае целое число от min до max*/
/**/ */
function randomise(min, max, include = 0) {
  if (typeof min !== "number" || typeof max !== "number") {
    return null;
  }

  let result = Math.random * (max - min + include) + min;
  return result;
}
