function printGreeting(msg, alertGreet) {
    if(msg=='evening'){
        evening(alertGreet);
    }
    else if(msg=='morning')
    {
        morning(alertGreet);
    }
    else
    {
        night(alertGreet);
    }
}

function morning(alertGreet) {
    alert("good morning");
    alertGreet("Hello World");
}
function evening(alertGreet) {
    alert("good evening");
    alertGreet("Hello World");
}
function night(alertGreet) {
    alert("good night");
    alertGreet("Hello World");
}

function alertGreet (msg) {
alert(msg);
}

printGreeting("morning", alertGreet);