var poziomy = 0;

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
var poziomy1 = 0;
var pion1 = '.';

function drawTree1(poziomy1) {
    if (poziomy1 === 1) {
        poziomy1 = poziomy1 +2;
        pion1 = '.';
    } else if (poziomy1 === 2) {
        poziomy1 = poziomy1 -1;
        pion1 = '..';
    } else if (poziomy1 === 3) {
        //poziomy1 = poziomy1 -1;
        pion1 = '.';
    }
    
    for (var i = 1; i < poziomy1; i++) {
        pion1 += '.';
    }
    
    var dlugoscPion = pion1.length;
    
    star1 = 'X';
    console.log(pion1+star1);

    for (var i = 0; i < poziomy1; i++) {
        star1 += 'XX';        
        dlugoscPion = dlugoscPion -1;
        pion1 = pion1.substr(0,dlugoscPion);
        console.log(pion1+star1);
    }
  
}

drawTree1(5);

drawTree1(2);

drawTree1(3);

//drawTree1(6);
