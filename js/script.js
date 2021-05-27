var km = prompt('Quanti Km?') 

var eta = prompt('Quanti anni hai?') 

if (eta < 18) {
    
    console.log( 'minorenne' )

}else if ( eta >= 65) {

    console.log( 'over65')

}else{

    var prezzo = 0.21 * parseInt( km );
}


console.log( prezzo )

