
var triangleArea = 0;
var a = 0; //prompt('Podaj Wartość dla : a');
var h = 0; //prompt('Podaj Wartość dla : h');
var wynik = 0;

function getTriangleArea(a, h) {
    if ( a < 0 ) {
       // alert('nie prawidłowe dane - zmienna a mniejsza od zera ma wartosc ' + a);
        console.log('nie prawidłowe dane - zmienna a mniejsza od zera ma wartosc ' + a);
    } else if ( a === 0) {
       // alert('nie prawidłowe dane - zmienna a jest rowna 0 ma wartosc ' + a);
        console.log('nie prawidłowe dane - zmienna a jest rowna 0 im wartosc ' + a);
    } else if (h < 0) {
        //alert('nie prawidłowe dane - zmienna h mniejsza od zera ma wartosc ' + a);
        console.log('nie prawidłowe dane - zmienna h mniejsza od zera ma wartosc ' + h);
    } else if ( h === 0) {
        //alert('nie prawidłowe dane - zmienna h jest rowna 0 ma wartosc ' + a);
        console.log('nie prawidłowe dane - zmienna h jest rowna 0 ma wartosc ' + h);
    } 

    wynik = a*h/2;
    
    return wynik;
}

console.log(getTriangleArea(10, 6));  //wynik ma byc 30

console.log(getTriangleArea(5, 8));   //wynik ma byc 20

console.log(getTriangleArea(20, 23));   //wynik ma byc 230

console.log(getTriangleArea(0, 6)); 

console.log(getTriangleArea(10, 0));


console.log(getTriangleArea(-10, 6));


console.log(getTriangleArea(10, -6));



// alert('wynik obliczen ' + wynik);
// console.log('wynik obliczeń ' + wynik);


//triangleArea = a*h/2;

//alert('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

//console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea); 

