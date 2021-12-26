 // questions to answer

 const questionToAnswer = [{
     que: "Who is the President of Nigeria?",
     a: "bubu",
     b: "obj",
     c: "babangi",
     d: "jona",
     correct: 'a'
   },
   {
     que: "How many letters does the Arabic Alphabets Have ?",
     a: "29",
     b: "27",
     c: "28",
     d: "25",
     correct: 'c'
   },
   {
     que: "Who Rightly Deserves to be Worshipped",
     a: "Isa",
     b: "Muhammed",
     c: "Angel Jibril",
     d: "Allah",
     correct: 'd'
   },
   {
     que: "How Many Phophets were mentioned in the Quran?",
     a: "25",
     b: "10",
     c: "2",
     d: "15",
     correct: 'a'
   },
   {
     que: "How many Surats are in the Quran?",
     a: "10",
     b: "1000",
     c: "114",
     d: "144",
     correct: 'c'
   },
   {
     que: "Pick which ever is right",
     a: "Uthman married zaynab only",
     b: "Uthman married zaynab and Rukaya together",
     c: "Uthman married zaynab and Rukaya But seperately",
     d: "Uthman married Rukaya only",
     correct: 'c'
   }

 ]


 var buttonStart = document.getElementById('button-start');
 var header = document.getElementById('header');
 var mainQuiz = document.getElementById('main-quiz');
 var questionHead = document.getElementById('question');

 var ansa = document.getElementById('ansa');
 var ansb = document.getElementById('ansb');
 var ansc = document.getElementById('ansc');
 var ansd = document.getElementById('ansd');
 var next = document.getElementById('next');
 var quizList = document.getElementsByClassName("quiz-list")[0];
 var rad = document.querySelectorAll('input[name="answer"]');

 var currentQuestionData = questionToAnswer[currentQuestion];


 var secondCurrentA = 1
 var currentQuestion = 0
 var pickedAnswerScore = 0





 function toggleDisplay() {
   console.log("working");
   header.classList.add("displayClass");
   mainQuiz.classList.remove("displayClass");

 }



 function loadQuestion() {
   var currentQuestionData = questionToAnswer[currentQuestion];


   questionHead.innerText = (currentQuestionData.que);
   ansa.innerText = (currentQuestionData.a);
   ansb.innerText = (currentQuestionData.b);
   ansc.innerText = (currentQuestionData.c);
   ansd.innerText = (currentQuestionData.d);

 }

 function loadQuestionAgain() {

   var currentQuestionData = questionToAnswer[secondCurrentA];


   questionHead.innerText = (currentQuestionData.que);
   ansa.innerText = (currentQuestionData.a);
   ansb.innerText = (currentQuestionData.b);
   ansc.innerText = (currentQuestionData.c);
   ansd.innerText = (currentQuestionData.d);

 }


 function getAnswerSelected() {
   var rad = document.querySelectorAll('input[name="answer"]');

   var currentQuestionData = questionToAnswer[currentQuestion];

   rad.forEach((radi) => {
     if (radi.checked) {
       // pickedAnswer.push[radi.value];
       pickedAnswer = radi.id;
       if (pickedAnswer == currentQuestionData.correct) {
         pickedAnswerScore++
       }
       console.log(pickedAnswer);
       console.log(pickedAnswerScore)
       console.log(currentQuestionData.correct);
       deselectAnswers();

     }

   });

 }


 buttonStart.addEventListener("click", function() {
   toggleDisplay();
   loadQuestion();

 });



 next.addEventListener('click', function() {
       var rad = document.querySelectorAll('input[name="answer"]');

       if (currentQuestion < questionToAnswer.length - 1) {
         rad.forEach((radi) => {
           if (radi.checked) {
             loadQuestionAgain();
             getAnswerSelected();
             currentQuestion++;
             secondCurrentA++;
           }
         });

       } else {
         next.setAttribute("onClick", "location.reload()")
         quizList.remove();
         next.innerText = 'Referesh';
         if (pickedAnswerScore == currentQuestion.length - 1) {
           questionHead.innerText = ("You are Done, Your Score is " + pickedAnswerScore + " Perfect Score");
         } else if (pickedAnswerScore >= 3) {
           questionHead.innerText = ("You are Done, Your Score is " + pickedAnswerScore + " Good Job");
         } else {
           questionHead.innerText = ("You are Done, Your Score is " + pickedAnswerScore + " Try Harder");
         }


       };

     })


     function deselectAnswers() {
       var rad = document.querySelectorAll('input[name="answer"]');
       rad.forEach((radi) => {
         radi.checked = false;
       });
     }
