const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

const age = parseInt(prompt("Quanti anni hai"));
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
console.log(`Il prezzo finale è €${finalPrice.toFixed(2)}`);
