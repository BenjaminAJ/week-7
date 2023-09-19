const questionWrapper = document.querySelector(".questionWrapper");
const resultWrapper = document.querySelector(".resultWrapper");
const submitBtn = document.querySelector("#submit");

let questObj = {
  question: '',
  answer: '',
  options: '',
}

let score;
let grade;


let questionarray = [{
  question: "What is HTML?",
  answer: 'All of the mentioned',
  options: ["HTML describes the structure of a webpage", ' HTML is the standard markup language mainly used to create web pages', ' HTML consists of a set of elements that helps the browser how to view the content', 'All of the mentioned'],
  userAnswer: '',

},
{
  question: " Who is the father of HTML?",
  answer: 'Tim Berners-Lee',
  options: ['Rasmus Lerdorf', 'Tim Berners-Lee', 'Brendan Eich', 'Sergey Brin'],
  userAnswer: '',

},
{
  question: "HTML stands for __________",
  answer: 'HyperText Markup Language',
  options: ['HyperText Markup Language', 'HyperText Machine Language', 'HyperText Marking Language', 'HighText Marking Language'],
  userAnswer: '',

},
{
  question: "Upon encountering empty statements, what does the Javascript Interpreter do?",
  answer: 'Ignores the statements',
  options: [' Gives a warning', 'Ignores the statements', 'Throws an error', 'None of the above'],
  userAnswer: '',

},
{
  question: " Which of the following is used to read an HTML page and render it?",
  answer: 'Web browser',
  options: [' Web matrix', 'Web server', 'Web browser', ' Web network'],
  userAnswer: '',

},
{
  question: " Javascript is an _______ language?",
  answer: 'Object-Oriented',
  options: [' Object-based', 'Object-Oriented', 'Procedural', ' None of the above'],
  userAnswer: '',

},
{
  question: " Which of the following keywords is used to define a variable in Javascript?",
  answer: 'Both A and B',
  options: [' let', 'var', 'Both A and B', ' None of the above'],
  userAnswer: '',

},];

submitBtn.addEventListener('click', () => {
  getScore();
})

let questionIndex = 0;

questionarray.forEach(element => {
  questionIndex++;
  questionWrapper.innerHTML += `
        <div class="row">
            <h3><span>${questionIndex}. <span>${element.question}</h3 >
            <form id="question${questionIndex - 1}">
            <div class="row">
              <div class="col-12">
              
                <input type="radio" id="question${questionIndex}optionChoice1" name="option" value="${element.options[0]}" onclick="getSelectedOption(${questionIndex - 1}, question${questionIndex}optionChoice1)" />
                <label for="optionChoice1">${element.options[0]}</label>

              </div>
              <div class="col-12"> 
                <input type="radio" id="question${questionIndex}optionChoice2" name="option" value="${element.options[1]}" onclick="getSelectedOption(${questionIndex - 1}, question${questionIndex}optionChoice2)" />
                <label for="optionChoice2">${element.options[1]}</label>
              </div>

              <div class="col-12">
                <input type="radio" id="question${questionIndex}optionChoice3" name="option" value="${element.options[2]}"  onclick="getSelectedOption(${questionIndex - 1}, question${questionIndex}optionChoice3)"/>
                <label for="optionChoice3">${element.options[2]}</label>
              
              </div>

              <div class="col-12">
                <input type="radio" id="question${questionIndex}optionChoice4" name="option" value="${element.options[3]}" onclick="getSelectedOption(${questionIndex - 1}, question${questionIndex}optionChoice4)" />
                <label for="optionChoice4">${element.options[3]}</label>
              
              </div>

            </div>
      </form>
        </div>
    `;
});

function getSelectedOption(questionIndex, userSelectedOption) {

  questionarray[questionIndex].userAnswer = userSelectedOption.value;
  console.log(userSelectedOption.value);

  console.log(questionarray);
}

function getScore(params) {
  score = 0;

  questionarray.forEach(element => {
    if (element.answer.trim() === element.userAnswer.trim()) {
      score++;
    }

  });

  if (score >= (questionarray.length / 2)) {
    grade = 'passed';
  }
  else {
    grade = 'failed';

  }
  resultWrapper.innerHTML = `Your score is ${score}/${questionarray.length }.` + `You ${grade}.`;
  // console.log(score);

}