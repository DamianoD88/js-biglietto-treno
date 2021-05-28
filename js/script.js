var km = prompt('Quanti Km?'); 

var eta = prompt('Quanti anni hai?');

var messaggio = ('Nessuno sconto');

var prezzo = 0.21 * parseInt( km );

if (eta < 18) {

    prezzo = prezzo - prezzo * 20 / 100;
    console.log('minorenne');

}else if ( eta >= 65) {

    prezzo = prezzo - prezzo * 40 /100;
    console.log('over65');

}else if (eta >= 18 || eta > 65 ) {

    console.log('nessuno sconto');
}



