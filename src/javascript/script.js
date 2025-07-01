const kmInput = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const km = (kmInput);
console.log(km);

const ageInput = parseInt(prompt("Quanti anni hai"));
const age = (ageInput);
console.log(age);

const ticketPrice = km * 0.21; 
console.log(ticketPrice);

let discount = 0;

if (age > 65) {
  discount = ticketPrice * 0.4;
}
else if (age < 18) {
  discount = ticketPrice * 0.2;
}
else {
  discount = 0;
}
const finalPrice = ticketPrice - discount;
console.log(`Il prezzo finale è € ${finalPrice.toFixed(2)}`);
