// adding questions and options
var problems = [
    {
        question: "What is the colour of apple?",
        a: "Yellow",
        b: "Green",
        c: "Red",
        d: "Purple",
        answer: "c"
    }
]

// get elements
var title = document.querySelector(".title");
var optA = document.querySelector(".labela");
var optB = document.querySelector(".labelb");
var optC = document.querySelector(".labelc");
var optD = document.querySelector(".labeld");
var answers = document.querySelectorAll(".answer");
var submitBtn = document.getElementsByClassName("submit")[0];


// add data to the scree from the arraay of objects
function displayUI(){
    title.innerHTML = problems[0].question;
    optA.innerHTML = problems[0].a;
    optB.innerHTML = problems[0].b;
    optC.innerHTML = problems[0].c;
    optD.innerHTML = problems[0].d;
}

// giving functions for the submit button
function submt(){
    submitBtn.addEventListener("click",function submit(event){
        event.preventDefault();
        answers.forEach(function(i){
            if(i.checked === true  ){
            if (i.id === problems[0].answer){
                alert("You have selected the right answer");
            }
            else{
                alert("You have selected the wrong answer");
            }
            }
        });
        
    });
1    
}

// calling functions
displayUI();
submt();

