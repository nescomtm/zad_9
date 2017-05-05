function drawTree(poziomy) {   
    for (var i = 0; i < poziomy; i++) {
        star = '';
        for (var j = 0; j <= i; j++) {
            star +='*';
        }
        console.log(star);
    }
}
// wywołanie funkcji drawTree 
drawTree(5);
drawTree(10);
drawTree(6);

// wersja druga z pionowa choinka
//var pion1 ='';  // tylko jak to usunę to mam bład deklaracji

function drawTree1(poziomy1) {
    console.log('ilosc poziomów choinki '+poziomy1);
    poziomy2 = poziomy1-1;
    
    for (var i = 0; i < poziomy1; i++) {
        pion1 = '';
        star1 = 'X';

        for (var j = 1; j <= poziomy2; j++) {
            pion1 += '.';
        }

        dlugoscPion = pion1.length;

        for (var k = dlugoscPion; k < poziomy1-1; k++) {
            star1 += 'XX';    
        }
        console.log(pion1+star1);
        poziomy2 --
    }
}

drawTree1(5);

drawTree1(2);

drawTree1(3);

drawTree1(13);

drawTree1(6);
