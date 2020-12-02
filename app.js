const anyFunction =()=>{
return (((Math.floor(Math.random()*10))%2)===0)?true : false
}

const resolveFunction =()=>console.log("success");
const rejectFunction =()=>console.log("failure");

const result = new Promise((resolve,reject)=>{
setTimeout(()=>(anyFunction() ? resolve() : reject() ),2000)
})

result.then(resolveFunction).catch(rejectFunction);

console.log('hello world');

//this is a synchronous

