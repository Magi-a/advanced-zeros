module.exports = function getZerosCount(number, base) {
  
  var lim = 11; // 5^11 = 48828125

  var res = 0;

  // test // 
  var number2 = 47815664;

  //factorization

  var fact = [];

  var factRes = base;

  for(let i = 2; i < base; i++){

    while(factRes % i === 0){
      fact.push(i);
      factRes = factRes / i;
    }
  }

  if(fact.length === 0){
    fact.push(base);
  }

  if(fact.length > 1 && fact.length % 2) {
    fact.push(1);
  }

  //console.log(fact);
  
  ////
 
  var factDel = 0; 

  if(fact.length === 1){
    factDel = fact[0];
  } else {
    factDel = Math.max.apply(null, fact);
  }


 for(var i = 1; i < 1000000000; i++){
   
  var temp = 0;
  
  temp = Math.floor(number / Math.pow(factDel, i));

  if(temp === 0){
    break;
  } else {
    res += temp;
  }  
 }
/*
 console.log(fact);
 console.log(factDel);
 console.log(res);*/
 return res; 
 //console.log(res);

}