let promise = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        console.log("new pormise")
        resolve()
    },1000)
    
})

promise.then(function(){
    console.log("promise resolve")
})