// chiedre all'utente il numero di chilometri da percorrere
const km = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km);

//chiedere l'età dell'utente (passeggero) in anni
const age = parseInt(prompt("Quanti anni hai"));
console.log(age);

//calcolare il prezzo del biglietto
const ticketPrice = km * 0.21; 
console.log(ticketPrice);


//dichiaro variabile discount=0 (0 sta per l'età compresa tra 18 e 65, dove non si applica lo sconto) 
let discount = 0;
//determinare se applicare uno sconto
if (age > 65) {
  discount = ticketPrice * 0.4;
}
else if (age < 18) {
  discount = ticketPrice * 0.2;
}
else {
  discount = 0;
}

//calcolare il prezzo finale e stampare risultato
const finalPrice = ticketPrice - discount;
console.log(`Il prezzo finale è €${finalPrice.toFixed(2)}`);
