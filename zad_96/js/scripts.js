var list = document.getElementById('list');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
    var liczba = document.getElementsByTagName('li').length;
    list.innerHTML += '<li>item ' + liczba + '</li>';
});
