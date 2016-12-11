/**
Sample
*/
var triple = function(x){
	return x * 3;
}

var waffle = triple;

//console.log(waffle(2));

/**
Fileter
*/

var carros = [
	{nome: "gol", 	marca: "volks"},
	{nome: "uno", 	marca: "fiat"},
	{nome: "palio", marca: "fiat"},
	{nome: "golf", 	marca: "volks"},
	{nome: "ka", 	marca: "ford"}
];

var isVolks = function(carro){
	return carro.marca === "volks";
}

var carrosVolks = carros.filter(isVolks);

//console.log(carrosVolks);

/**
Map
*/

var carros2 = [
	{nome: "gol", 	marca: "volks"},
	{nome: "uno", 	marca: "fiat"},
	{nome: "palio", marca: "fiat"},
	{nome: "golf", 	marca: "volks"},
	{nome: "ka", 	marca: "ford"}
];

var cNomes = carros.map((x) => x.nome);

//console.log(cNomes);

//console.log(carros.map((x) => x.nome));

/**
reduce
*/

var valores = [
	{valor: 10},
	{valor: 20},
	{valor: 30},
	{valor: 40},
	{valor: 50}
];

var total = valores.reduce((sum, x) => sum += x.valor, 0);

console.log(total);


var dataOrder = {
	'Renato Santos': [
		{name: 'produto1',	price:20,	quantity:10},
		{name: 'produto2',	price:20,	quantity:10}
	],
	'Marcelo Rosa': [
		{name: 'produto3',	price:20,	quantity:10},
		{name: 'produto4',	price:20,	quantity:10}
	]
}