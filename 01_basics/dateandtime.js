let mydate=new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
//let newdate=new Date(2025,4,10,5,4);
let newdate=new Date("01-14-2025");
console.log(newdate.toLocaleString());
let myTimeStamp=Date.now()
//console.log(myTimeStamp);
//console.log(newdate.getTime());
//converting to seconds
console.log(Math.floor(Date.now()/1000));
let date=new Date();
console.log(date.getMonth()+1);
console.log(date.getDay());
date.toLocaleString('default',{
    weekday:"long",

    

})








