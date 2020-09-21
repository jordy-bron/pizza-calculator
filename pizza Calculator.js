/*jordy bron
software development*/

const Pizzaklein = 2; 
const Pizzamedium = 5;
const Pizzagroot = 7;

var Aantalklein = prompt('welkom bij op pizzakopen.nl, hoeveel kleine pizzas wilt u bestellen?', '0');       
document.write ('Kleine pizza : ' + Aantalklein + '<br>' + 'prijs :  ' + parseInt(Aantalklein) * Pizzaklein + '<br>');
var Aantalmedium = prompt('En hoeveel medium pizzas wilt u hebben?', '0');
document.write ('Medium pizzas : ' + Aantalmedium + '<br>' + 'prijs :  ' + parseInt(Aantalmedium) * Pizzamedium + '<br>');
var Aantalgroot = prompt('En hoeveel Grote pizzas wilt u hebben?', '0');
document.write ('Grote pizzas : ' + Aantalgroot + '<br>' + 'prijs :  ' + parseInt(Aantalgroot) * Pizzagroot + '<br>');

var totaal = Aantalklein * Pizzaklein + Aantalmedium * Pizzamedium + Aantalgroot * Pizzagroot; 

document.write('totaal bedrag :  ' + totaal); 