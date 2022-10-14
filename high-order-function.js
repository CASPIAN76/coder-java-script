
///     higher  order  function is that fucntion   who take other  function  as argument    or 
    // return function as there result



//      const HighOreder=[12,10,3,77,90,9]

//     const ff=HighOreder.reduce((data, age)=>{
//    return console.log(age)
//     },0)

//     console.log(ff)
//     const array1 = [1,4,5,6,7,8,];
// const sumWithInitial = array1.reduce( (previousValue) => previousValue );
// console.log(sumWithInitial);
//  var total=0;
//  for(let i=0; i<array1.length;i++){
//     total+= array1[i]
//  }
//  console.log(total)


 ///////////////////////////////////sort /////////////////////////////////
  const child =[
    {name:"nilesh", year:1992},
    {name:"nikhilesh", year:1892},
    {name:"naryan", year:1990},
    {name:"pallavi", year:3000},
    {name:"suchita", year:2022},
  ]

  const da=child.sort((a,b)=>a.year>b.year ? -1:1)
 
 console.log(da)
//   const  sort=child.sort((year, data)=>{
// if( year.year>data.year)
// {
//     return 1
// } else{
//     return -1
// }
//   }) 

//   console.log(sort)