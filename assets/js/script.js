// Dependencies

var qPage = document.querySelector("#questionPage");
var qtitle = qPage.children[0].querySelector("#qtitle");
var qbuttonEl = document.querySelector("#buttonList");
var allDonePage = document.querySelector("#allDonePage");
var msg = document.querySelector(".msg");
var score = 0;
var timeLeft = 75;

console.dir(qPage);
var bList = qPage.children[0].children[1].querySelector("#buttonList");
console.dir(bList);

var timerEl = document.querySelector("#timer");
var startButton = document.querySelector("#start");

// STARTING DATA
var timer = localStorage.getItem("timer") || 75;

// Display the current count
timerEl.textContent = timer;


// Data
var index = 0;
var questionOne;

// define initial variables
var total_timer = 75;
var time_discount = 10;

// define variable first page
var start_question = {
  title : "Coding Quiz Challenge",
  description : "Try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by ten secons!",
  sbutton : "Start Quiz"
}

var answers = ["Wrong!","Correct!"] ;
var index = 0;

// define variable questions
var questions = [
    {
      question :  "Commonly used data types DO NOT include",
      choices : [
           "1. strings",
           "2. booleans",
           "3. alerts",
           "4. numbers"
          ],
      answer : "3. alerts"
    },
    {
      question :  "The condition in an if / else statement is enclosed within _____.",
      choices : [
           "1. quotes",
           "2. curly trackets",
           "3. parenthesis",
           "4. square brackets"
          ],
      answer : "3. parenthesis"      
    },
    {
      question :  "Arrays in Javascript can be used to store",
      choices : [
           "1. numbers and strings",
           "2. other arrays",
           "3. booleans",
           "4. all of the above"
          ],
      answer : "4. all of the above"      
    },
    {
      question :  "String values must be enclosed within _____ when being assigned to variables.",
      choices : [
           "1. commas",
           "2. curly brackets",
           "3. quotes",
           "4. parentheses"
          ],
      answer : "3. quotes"      
    },
    {
      question :  "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices : [
           "1. Javascript",
           "2. Terminal / bash",
           "3. for loops",
           "4. console log"
          ],
      answer : "4. console log"      
    }
  ];

function finishQuiz(){
  console.log("finishQuiz");
  console.dir(qPage);

  qPage.style.display = "none";
  allDonePage.style.display = "block";

   var titleEl = document.querySelector("#title");
   titleEl.textContent = "All done!"
   var qtnEl = document.querySelector("#qtn");
  //  var scoreSt = getLoca;

   qtnEl.textContent = "Your final score is "+ score;
   
   var initialEl = document.querySelector(".input-group");
   initialEl.setAttribute("display","block")

   var initialElValue = document.querySelector(".input-group");

}

function countdown() {
  console.log("countdown");

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "0";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
      finishQuiz();
    }
  }, 1000);
}

function navigate() {
  console.log("navigate");
  
  console.log("navigate.index:"+index);
  questionOne = questions[index];

  qtitle.textContent = questionOne.question;


  bList.innerHTML="";
  for (var i = 0; i < questionOne.choices.length; i++) {
    var tmp = questionOne.choices[i];

    //create
    var li = document.createElement("li");
   
    //build
    // li.textContent = tmp;
    li.setAttribute("data-index", i);

    //create
    var button = document.createElement("button");
    //build
    button.textContent = tmp;

    //place
    li.appendChild(button);
    bList.appendChild(li);
  }
  // index & questions
}


// bLis.addEventListener("submit", function(event) {
//   event.preventDefault();
//   var todoText = todoInput.value.trim();
//   // TODO: Describe the functionality of the following `if` statement.
//   if (todoText === "") {
//     return;
//   }
//  // TODO: Describe the purpose of the following lines of code.
//   todos.push(todoText);
//   todoInput.value = "";
 
//   // TODO: What will happen when the following functions are called?
//   storeTodos();
//   renderTodos();
// });

bList.addEventListener("click", function(event) {
  console.log("click");

  var element = event.target;

  // Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    // choices : idx 
    var idx = element.parentElement.getAttribute("data-index");
    var rst = (questions[index].answer==questions[index].choices[idx]?1:0);
    if (rst) score += 10;
    else     timeLeft -= 10;

    msg.textContent = answers[rst];
    console.log("score:"+score);
    
    if (index<questions.length-1) {
      index += 1;
      navigate();
    }
    else 
      finishQuiz();
  }
  
});

//first page button
startButton.addEventListener("click", function() {
  console.log("click.timer");
  if (timer > 0) {

    console.log("click button")
    countdown();
   
    var firstEl=document.querySelector("#firstPage");
   
    firstEl.style.display="none";

    var questionEl=document.querySelector("#questionPage");
    questionEl.style.display="block";

    navigate();
    
    // // update the dispaly of the timer
    // timer.textContent = timer;
    // // store the current count in local storage
    // localStorage.setItem("timer", timer);
  }
});