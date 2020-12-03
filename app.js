console.log("Before Prepare Food");





function prepareFood(callback) {
    let Promname = new Promise(

        function (resolve, reject) {

            setTimeout(() => {
                console.log("Prepare Food")
                 resolve("Food is Ready");
                 
            }, 1000);

        });
    return Promname;
}

function prepareFrenchToast(callback) {
    let Promname = new Promise(

        function (resolve, reject) {
            setTimeout(() => {
                console.log("prepare French Toast");
                resolve("French Toast is ready");
            }, 2000); 
        });
    return Promname;
}

function preparecoffie(callback) {
    let Promname = new Promise(

        function (resolve, reject) {
    setTimeout(() => {
        console.log("prepare coffie");
        resolve("prepare coffie is ready");
    }, 3000)
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
})
.catch(function(error){
console.log("Error=",error)
});




console.log("After prepare food dinner is ready");