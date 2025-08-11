//1-MASALA
function addToEnd(arr, value) {
  arr.push(value);
  return arr;
}
console.log(addToEnd(["nma", "yoq", "ha"], "tori kemisz"));

//2-MASALA
function removeLast(arr) {
  return arr.pop();
}

console.log(removeLast(["olma", "nok", "behi"]));

//3-MASALA
function addToStart(arr, value) {
  arr.unshift(value);
  return arr;
}

console.log(addToStart(["nma", "yoq", "ha"], "tori kemisz"));

//4-MASALA
function removeFirst(arr) {
  arr.shift();
  return arr;
}
console.log(removeFirst(["olma", "nok", "behi"]));

//5-MASALA
function cleanString(str) {
  return str.trim();
}

console.log(cleanString("       MirzoUlugbek         "));

//6-MASALA
function scream(str) {
  return str.toUpperCase();
}

console.log(scream("tori kemisz"));

//7-MASALA
function hasValueorNot(arr, value) {
  return arr.includes(value);
}

console.log(hasValueorNot(["nma", "yoq", "ha"], "tori kemisz"));

//9-MASALA
function containsApple(arr) {
  return arr.includes("olma");
}

console.log(containsApple(["olma", "nok", "behi"]));

//10-MASALA
function getKeys(obj) {
  return Object.keys, obj;
}

console.log(getKeys({ ism: "Faha", yosh: 17, rayon: "Rishtan" }));

//11-MASALA
function getValues(obj) {
  return Object.values, obj;
}

console.log(getValues({ ism: "Fedya", yosh: 18, Tuman: "Rishtan" }));

//12-MASALA
function removeSpaces(str) {
  return str.replaceAll(" ", "");
}

console.log(removeSpaces("tori   kemisz"));

//13-MASALA
function reverseArr(arr) {
  return arr.reverse();
}

console.log(reverseArr(["F", "a", "h", "r", "i", "d", "d", "i", "n"]));

//14-MASALA
function objectToEntries(obj) {
  return Object.entries(obj);
}

console.log(objectToEntries({ ism: "Faha", yosh: 17 }));

//15-MASALA
function hasAdmin(obj) {
  return obj.hasOwnProperty("admin");
}
console.log(hasAdmin({ name: "Ozim" }));

//18-MASALA
function addComma(str) {
  return str.replaceAll(" ", ", ");
}

console.log(addComma("jigar sz uchun zordan topib qoydimu"));

//19-MASALA
function findBanana(arr) {
  return arr.lastIndexOf("zordan");
}

console.log(findBanana(["jigar", "sz", "uchun", "zordan", "topib", "qoydimu"]));

//21-MASALA
function shortenJS(str) {
  return str.replaceAll("Java Script", "JS");
}

console.log(
  shortenJS("Nma bob o'lbdi deyishsa😱 : Java Script qiynab oldirdi deylar ;")
);

// sentyabr da 18 ga tolaman shunga 2 hil yosh yozganman 😊

//Nma bob olbdi deyishsa😱 : Java Script qiynab oldirdi deylar
