// primitive 
// 7 types
//:String call by value,Number,Boolean,null,undefined,symbol(for unique)
//BigInt

// reference (Non primitive)
//refernce can be directly allocate in memory 
const score=100

const outsidetemp=null
let userEmail;
const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid);

//dynamic means not 
//Array,Objects,Functions


const bigNumber=3456827635652625562262n;
const heros=["shaktiman","naagraj","doga"];
let myobj={
    name:"mayank",
    age:22,

}



const myfunction=function(){
    console.log("hello world");


}
console.log(typeof bigNumber);
console.log(typeof id);
// non primitive data type after typrof is objects