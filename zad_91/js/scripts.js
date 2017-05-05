function getTriangleArea(a,h) {
    if (a <= 0 || h <= 0) {
        console.log('nieprawidłowe dane - zmienne sa mniejsze od zera');
    } else {
        return a*h/2;
    }
}

console.log(getTriangleArea(10,6));  //wynik ma byc 30

console.log(getTriangleArea(5,8));   //wynik ma byc 20

console.log(getTriangleArea(20,23));   //wynik ma byc 230

console.log(getTriangleArea(0, 6));

console.log(getTriangleArea(10, 0));

console.log(getTriangleArea(-10, 6));

var triangle1Area = getTriangleArea(10,15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(0,15);

console.log(triangle2Area);