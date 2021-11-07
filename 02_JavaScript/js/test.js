

let date1 = new Date(2021, 10, 1);
// date1 = new Date(Math.trunc(date1.getTime() + (1000 * 60 * 60* 24)));
let diff = date1 + (1000 * 60 * 60* 24);

console.log(date1,  diff);