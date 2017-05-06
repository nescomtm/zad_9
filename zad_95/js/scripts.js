var itemByClassName = document.getElementsByClassName('button');
var dlugosc = (itemByClassName.length);


for (var i = 0; i < dlugosc; i++) {
    console.log(itemByClassName[i]);
    console.log(itemByClassName[i].innerText); // podejrzałem na necie jak to uzyć :)

    //alert(itemByClassName[i]);
    alert(itemByClassName[i].innerText);
}
