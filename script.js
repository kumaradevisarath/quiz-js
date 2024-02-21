

var obtained = document.getElementById("obtained");
var r1 = document.getElementById("r1");
var r2 = document.getElementById("r2");
var r3 = document.getElementById("r3");

var box=document.getElementById("box");

var btn = document.getElementById("btn");


btn.addEventListener("click", function () {
    var score = 0;
    if (document.getElementById("r1").checked) {
        score++;

    }
    else {
        score;
    }
    if (document.getElementById("r2").checked) {
        score++;
    }
    else {
        score;
    }
    if (document.getElementById("r3").checked) {
        score++
    }
    else {
        score;
    }

    obtained.innerHTML = "you got:" + score;
    alert("you completed the test and your score is:"+score)
    
})
