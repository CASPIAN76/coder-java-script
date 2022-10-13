
//  var age=18    

/* var keyword polute tthe code   it has function scope */

// if(age>=18){
//     var drivingg=true
//     let driving=true
// }
 //console.log(drivingg)
// console.log(driving)
 /*it show referce error   because  let keyword has block scop*/


//  var  password="jdjshjd"
// function  login(){
//     var  usrname="nilesh"
//       password="secret"
// }

// login(console.log(password))



// let  product="laptop"
// console.log(product)



// const data={
//     name:"Nilesh"
// }


// data.name="rahul"

// console.log(data)






/////////////////////////////////////////////////////////          arrow function //////////////////////////////////////
// function date(){
//     console.log("good morning")
// }
// date()

// const date=()=>{ console.log("good Mornong")}
//   date()
//  const add =(a,b)=>{  console.log("add", b + a)}
// add(10,10)



//////////////////////////////  hoisting /////////////////////


// register()
const register=( )=>{
  x=2
  console.log(x);
};
 register()
// function  register(){
//     x=20
//     console.log(x)
// }


// console.log(b);

// var b;


// x=5;
// console.log(x);
// let x



//////////////////////////////      lexical scoping //////////////////////////
// var d = 300;
// console.log(a)
// const data =()=>{
//     var a=10;
//     console.log(a)
//     // console.log(b);
//     console.log(d)

//     const data2=()=>{
//         const b=20;
//         console.log(a)
//         console.log(b)
//         console.log(d)



//         const data3=()=>{
//             let c=30;
//             console.log(c)
//             console.log(b)
//             console.log(a)

//         }
//         data3()
//     }
// data2()
// }

// data()


//////////////////////////////////////   bind   ////////////////////////////////
const student={
    name:"rahul",
    latsname:"rrr",
  fullname: function(){
    return this.latsname + " " + this.name
   
  }
    
}



const student1={
    name:"ccxcxc",
    latsname:"cxcxcxcx"
}

let fullna=student.fullname.bind(student1)
console.log(fullna())


////////////////////////////////////////////////     call //////////////////////////////

const  teacher={
 name:"nikhil",
 lastname:"xxxxx",
 fullname:function(){
     return this.name + " "+ this.lastname
 }

}
const  data={
    name:"PALLAVI",
    lastname:"ZADE",

}
const d=teacher.fullname.call(data);
console.log(d)

// console.log(teacher.fullname());

// console.log( teacher.name +" " + teacher.lastname)


///////////////////////////////////////////  call back  ////////////////////


// const  multiplcation=(a,b)=>{
// return a*b
// }
// console.log(multiplcation(5,5))


// function  add(a,b,data){
//   let sum=a+b,
//   data(sum)
// }
// console.log(add(10, 10, calme))



// function  p(name, student){
// console.log(name, )
// student()
// }



// function Nile( ){
// console.log("nilesh")
// }
// p('Nikile', Nile)


///
               ////   calback ////
// const datta=[
//     {  name:"nilesh", age:30, payment:3000},
//     {  name:"pallavi", age:90, payment:90000},
// ]

// function  st(){
//     setTimeout(()=>{
//         let output;
//         datta.forEach((dat, index)=>{
//          output+=` <li> ${ dat.name}</li>`
//         })
// document.body.innerHTML=output;

//     },1000)
// }


// function addStudent( newdata, data){
//  setTimeout(()=>{
//   datta.push(newdata)
//    data()
//  },3000)
// }

  
//   addStudent({ name:"Nikhilesh", age:30, payment:3000}, st)



///////////////////////////////////   async and awiat  /////////////////




