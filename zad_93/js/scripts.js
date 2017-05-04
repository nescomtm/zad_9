var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';

var newStrAnimalUpperCase = animal.toUpperCase(animal); // zamian z małych liter na duze

console.log(newStrAnimalUpperCase); // sprawdzenie zamiany wielkosci liter

var replaceStrText = text.replace('Papugi',newStrAnimalUpperCase);

console.log(replaceStrText);

var halfText = (replaceStrText.length/2);

console.log(halfText);

var polowaTextu = replaceStrText.substr(0,halfText);

console.log(polowaTextu);
