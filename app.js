console.log("Before Prepare Food");





function prepareFood() {
    let Promname = new Promise(

        function (resolve, reject) {

            setTimeout(() => {
                console.log("Prepare Food")
                 resolve("Food is Ready");
                 
            }, 1000);

        });
    return Promname;
}

function prepareFrenchToast() {
    let Promname = new Promise(

        function (resolve, reject) {
            setTimeout(() => {
                console.log("prepare French Toast");
                resolve("French Toast is ready");
            }, 1500); 
        });
    return Promname;
}

function preparecoffie() {
    let Promname = new Promise(

        function (resolve, reject) {
    setTimeout(() => {
        console.log("prepare coffee");
        resolve("prepare coffee is ready");
    }, 2000)
});
return Promname;
}

let val1 =prepareFood();
//console.log("Promise=",val1);

val1.then(function(value){
console.log("Food Is Ready CallBack=",value)
return prepareFrenchToast();
})
.then(function(prepareFrenchToast){
    console.log("French Toast Is Ready CallBack=",prepareFrenchToast)
    return preparecoffie();
})
.then(function(preparecoffie){
    console.log("French Toast Is Ready CallBack=",preparecoffie)
})
.catch(function(error){
console.log("Error=",error)
});




console.log("After prepare food dinner is ready");