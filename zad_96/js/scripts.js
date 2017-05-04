//var przyciskNaStronie.addEventListener(click,handler);
var list = document.getElementById('list');

var add = document.getElementById('addElem');

var liczba = 0;

add.addEventListener('click', function() {
    var liczba = document.getElementsByTagName('li').lenght;
    
    list.innerHTML += '<li>item '+liczba+'</li>';
});

console.log(liczba);
console.log(list);
console.log(add);




