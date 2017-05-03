var femaleNames = ['Asia','Kasia','Ola','Jola'];
var maleNames = ['Piotrek','Marek','Arek','Jarek','Marian'];
var allNames = [];
allNames = allNames.concat(femaleNames,maleNames);

var newName = 'Marian';

console.log(allNames);

if (allNames.indexOf(newName) === -1) {
    allNames = allNames.push(newName);

} else {
    console.log('nie mozna dodać nowego imienia'+newName)
}


// alert('wynik obliczen ' + wynik);
// console.log('wynik obliczeń ' + wynik);


//triangleArea = a*h/2;

//alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

//console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea); 

