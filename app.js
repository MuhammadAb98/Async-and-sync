console.log("Start Group");

function breakfast(){
setTimeout(function(){console.log("breakfast complete")},100);
}

function morning(){
console.log("breakfast start");
breakfast();
}

morning(); 
console.log("End Group");

