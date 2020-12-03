console.log ("Before Prepare Food");

function prepareFood(callback){
    setTimeout(()=>{
        console.log("prepare Food");
        callback("Food is ready");
    },1000)
}

function prepareFrenchToast(callback){
    setTimeout(()=>{
        console.log("prepare French Toast");
        callback("prepare French is ready");
    },2000)
}

function mycallback(Value){
    console.log("Food callback=",Value);
    prepareFrenchToast(FrenchToastcallback);
}
function FrenchToastcallback(Value){
    console.log("French Toast callback=",Value);
}



prepareFood(mycallback);


console.log("After prepare food dinner is ready");