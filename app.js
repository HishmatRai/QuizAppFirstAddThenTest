var emptyArry = [];

function quizAdd(){
    // alert("ready")
    var getQuestion = document.getElementById("question").value;
    var getQuestion1Option11 = document.getElementById("optipn1").value;
    var getQuestion1Option12 = document.getElementById("optipn2").value;
    var getQuestion1Option13 = document.getElementById("optipn3").value;
    var getCorrectAns = document.getElementById("corectAns").value;
    if(getQuestion.length === 0){
      alert("Please Create Question?");
      return false;
  }
if(getQuestion1Option11.length === 0){
  alert("Please Create Option 1");
  return false;
}
if(getQuestion1Option12.length === 0){
  alert("Please Create Option 2");
  return false;
}

if(getQuestion1Option13.length === 0){
  alert("Please Create Option 3");
  return false;
}
if(getCorrectAns.length === 0){
  alert("Please Enter Correct Answer");
  return false;
}
    console.log(getQuestion);
    console.log(getQuestion1Option11);
    console.log(getQuestion1Option12);
    console.log(getQuestion1Option13);
      function Add (question, o1,o2,o3,ca){
               this.getQuestion = question;
               this.getQuestion1Option11 = o1;
               this.getQuestion1Option12 = o2;
               this.getQuestion1Option13 = o3;
               this.getCorrectAns = ca;
               
               
      }
      var quest = new Add (getQuestion,getQuestion1Option11,getQuestion1Option12,getQuestion1Option13,getCorrectAns);
    
      emptyArry.push(quest);
      console.log(emptyArry);
      document.getElementById("kkk").reset();
      
}
      
function quizSend(){

  
    localStorage.setItem('Quiz',JSON.stringify(emptyArry))
    document.getElementById("mainDiv").style.display = "none"; 
       var data = localStorage.getItem('Quiz');
    data = JSON.parse(data)
    console.log(data)
    
      for(var key in data){
          console.log(data[key].question)
          console.log(data[key].option1)
          console.log(data[key].option2)
          console.log(data[key].option3)
          console.log(data[key].corectAns)
      }
    
      window.location.href="Start-Quiz/startQuiz.html";
    }
    
