




function myCpst( phon= 0, car= 0, laptop= 0){

 document.getElementById("phon").innerHTML=phon;
 document.getElementById("car").innerHTML=car;
 document.getElementById("laptop").innerHTML=laptop;
   let cost = phon+ car+ laptop;
    return cost;
}
document.getElementById("demo").innerHTML= myCpst(1000,200,5000);



function hotelCost(day, price){
    
   
   let parsent= 0;

   if(10<day && 20>=day){
    parsent= 20;
  }
  else if(20<day){
    parsent = 50;
  }
   
  //  let pTl = total*parsent;
  //   let shotkora = pTl/100;
  //   let fPrice = total - shotkora;

  let sotkra = price - ((price/100)*parsent);
  let allTotal = sotkra*day;

  //  console.log(allTotal);
   
}
hotelCost(25,100);



// arry
var myarry = [
  "MD Masud Rana",
  "Manik Hasan ",
  "MD Heron Uddin",
  "MD Munsur Rahman"
];
for( var i = 0; i<myarry.length; i++){
  var index = myarry[i].length;
  // var indexNumber = index[i];
  console.log(index);
 
 
}





