function esPrim(numero) {
    if (numero<2) return false;
    for (var i=2; i<numero; i++){
      if (numero % i === 0){
          return false;
      }
     }
    return true; 
  }
 
console.log(esPrim(19))