var show = document.getElementById("show");
var show1 = document.getElementById("show1");
var getQNumWise = 0;
var c = 1;
var marks = 0;
var getQuestinFromLocalStorage = localStorage.getItem("Quiz");
getQuestinFromLocalStorage = JSON.parse(getQuestinFromLocalStorage);
console.log(getQuestinFromLocalStorage[getQNumWise])

var question =  document.getElementById("question").innerHTML = c+") " +getQuestinFromLocalStorage[getQNumWise].getQuestion;
console.log(question);



var radio1 = document.getElementById("option1").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option11;
var opt1 = document.getElementById("optionShow1").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option11;
console.log(radio1);

var radio2 = document.getElementById("option2").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option12;
var opt2 = document.getElementById("optionShow2").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option12;
console.log(opt2);


var radio3 = document.getElementById("option3").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option13;
var opt3 = document.getElementById("optionShow3").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option13;
console.log(radio3);
   


function nextQuestion(){
    var x = document.querySelector("input[type = radio]:checked");
    x.checked = false;
    var flag = false;
    if(x.value === getQuestinFromLocalStorage[getQNumWise].getCorrectAns){
        marks = marks + (100/getQuestinFromLocalStorage.length)
        flag=true;
        // marks++;

        console.log(marks)
    }
    if(flag===false){
        // alert("Wrongs")
    }
    getQNumWise++;
    c++;
    if(getQNumWise < getQuestinFromLocalStorage.length){

var question =  document.getElementById("question").innerHTML = c+") " +getQuestinFromLocalStorage[getQNumWise].getQuestion;
console.log(question);



var radio1 = document.getElementById("option1").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option11;
var opt1 = document.getElementById("optionShow1").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option11;
console.log(radio1);

var radio2 = document.getElementById("option2").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option12;
var opt2 = document.getElementById("optionShow2").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option12;
console.log(radio2);


var radio3 = document.getElementById("option3").value = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option13;
var opt3 = document.getElementById("optionShow3").innerHTML = getQuestinFromLocalStorage[getQNumWise].getQuestion1Option13;
console.log(radio3);

}
else{
    if(marks >= 50){
marks = marks.toFixed(2);

        // console.log("You are Passed Your marks is "+marks*5);
    show.innerHTML = "Congratulations You are Passed Your Score is " + marks +"%";

    }
    else{
marks = marks.toFixed(2);

        // console.log("You are Failed Your marks is "+marks*5);
    show1.innerHTML = "Sorry ! You are Filed Your Score is " + marks+ "%";

    }
}



}