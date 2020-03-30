
class ChemElement {
    constructor( name, chemSymbol, atomicWeight, wtVariance) {
    this.name = name;
    this.chemSymb = chemSymbol;
    this.atomicWeight = Number(atomicWeight);
    this.wtVariance = Number(wtVariance);
    }
}

//This is the routine as requested for the challenge.
const objectToArray = ( obj ) => {
    var objVals = Object.values( obj );
    var objKeys = Object.keys( obj );
    var objArray = [];
    var pairArray = [];
    for ( let i = 0; i < objKeys.length; i++ ) {
        pairArray = [ objKeys[ i ] , objVals[ i ] ];
        objArray.push( pairArray );
    }
    return objArray;
}

//This is perhaps an even better option - putting the key, value pairs into a map
const objectToMap = ( obj ) => {
    var objVals = Object.values( obj );
    var objKeys = Object.keys( obj );
    var objMap = new Map();
    // console.log( objKeys )
    for ( let i = 0; i < objKeys.length; i++ ) {
        objMap.set( objKeys[ i ] , objVals[ i ] );
    }
    return objMap;
}

hydrogen = new ChemElement( 'hydrogen', 'H', 1.00784, 6.075E-09 );
carbon = new ChemElement( 'carbon', 'C', 12.0096, 3.333E-07 );

var hArray = objectToArray( hydrogen );
console.log( hArray );

var cMap = objectToMap( carbon );
console.log( cMap );
