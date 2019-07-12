//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const multiplier = 20;

function number() {
    const decimal=Math.random();
    const times10 = decimal * multiplier;
    const final = Math.floor (times10);
    return final

}
console.log(number());

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function letter () {
    const len = alphabet.length -1;
    const num = Math.random() * len;
    const roundNum=Math.floor(num);
    const final = alphabet[roundNum]
    return alphabet[roundNum]
    //console.log ("len:" , len);
    //console.log("leg:", len);
    
}
console.log(letter())





const foods = [

   "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
   "macaroni and cheese",
    "baked potatoes"
];
function randomFoods() {
  const len = foods.length;
  const food =Math.random() * len;
  const roundNum=Math.floor(food)
  const final = foods[roundNum]
  return final

}

console.log(randomFoods())







const students = [
   "Bob",
   "Martin",
  "Danny",
    "Mahdi",
   "Harry",
    "Sean",
   "Robert"
  ];
  function student() {
   const len = students.length;
    const kids = Math.random() * len ;
    const roundNum=Math.floor(kids);
    const final = students[roundNum]
    return final

  }
  console.log(student())
  
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////