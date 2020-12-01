let promise = new Promise(function(resolve,reject){
    console.log("new promise")
    resolve()
})

promise.then(function(){
   // console.log("promise resolve")
})