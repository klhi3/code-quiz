// Dependencies
// TODO: Which element is the following line of code selecting?
// var carousel = document.querySelector(".carouselbox");
// var next = carousel.querySelector(".next");
var timerEl = document.querySelector(".timer");

// Data
var index = 0;
var currentImage;

var images = [
  "https://picsum.photos/300/200",
  "https://picsum.photos/300/201",
  "https://picsum.photos/300/202",
  "https://picsum.photos/300/203"
];


// define initial variables
var total_timer = 75;
var wrong_answer_time_discount = 15;

// define variable first page
var start_question = {
  title : "Coding Quiz Challenge",
  description : "Try to answer the following code-related questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by ten secons!",
  sbutton : "Start Quiz"
}

var answers = ["Wrong!","Correct!"] ;

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

// carousel.style.backgroundImage = "url('https://picsum.photos/300/200')";

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = images.length - 1; 
//   } else if (index > images.length - 1) { 
//     index = 0;
//   }
//   currentImage = images[index];
//   carousel.style.backgroundImage = "url('" + currentImage + "')";
// }

// // TODO: Describe the functionality of the following event listener.
// carousel.addEventListener("click", function() {
//   window.location.href = images[index];
// });

// // TODO: Describe the functionality of the following event listener.
// next.addEventListener("click", function(event) {
//   // TODO: What is the purpose of the following line of code?
//   event.stopPropagation();

//   navigate(1);
// });

// // TODO: Describe the functionality of the following event listener.
// prev.addEventListener("click", function(event) {
//     // TODO: What would happen if we didn't add the following line of code?
//   event.stopPropagation();

//   navigate(-1);
// });

function countdown() {
  var timeLeft = 75;

  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = 'Time: '+timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = 'Time: '+timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = 'Time: 0';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `displayMessage()` function
      // displayMessage();
    }
  }, 1000);
}


// navigate(0);
countdown();
