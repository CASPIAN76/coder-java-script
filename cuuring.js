
function add(a){
    return function(b){
       return function(c){
        if(c) return add(a+b-c);
        return a;
       }
          
    }
}


console.log(add(1)(2)(3)(4)(5)(8)(10)()())

////////////////////////////////////   
  function Nikhil (a){

    return function(b){
 return function(c){
  return a+b+c
 }
    }
  }


  console.log(  Nikhil(3)(4)(23))

/////////////////////////////////////////////////////////////////
  function N(a){
    return function m(b){
     if(b)  return N(a+b);
     return a
    }
    
    
    
  }

console.log(N(3)(4)(3)(23)(232)());;


////////////////////////////////////////////////////////////////////

function multiplication(c){

  return function second(d){
    if(d)  return multiplication(c*d)
    return c
  }
}


console.log(multiplication(2)(3)(34)(3)(10)(11)())

/////////////////////////////////////////////////////


// let a=10;
// let b=a;

// b=20;
// console.log(b);
// console.log(a);

// let data={
//   name:"anirudha",
//   lname:"dahate",
// }
// data.mname="ghanshyam"
// let data1=data;


// console.log(data);
// console.log(data1);

// const ani=(a)=>(b)=>(c)=>(d)=>(e)=>a+b+c+d+e;
// console.log(ani(2)(3)(34)(3)(10)(56)(56));