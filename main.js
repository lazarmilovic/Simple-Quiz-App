import { Dom }from './js/modules/Dom.js';
import { displayQuestion } from './js/modules/displayQuestion.js';
import { removeQuestion } from './js/modules/removeQuestion.js';
import { checkAnswer } from './js/modules/checkAnswer.js';
import { displayFinalResult } from './js/modules/displayFinalResult.js';

$(document).ready(()=>{

    //this variable will control the event listener on four divs with possible answers
    let quizHasStarted= false; 
    //this variable will control number of the current qustion in format- counter/10. 
    let counter= 1; 

    //setting up an event listener for start button and hiding it right after, so user cannot re-start the quiz. 
    Dom.button_start.click(()=>{
        displayQuestion(setQuestion.data[0]);
        quizHasStarted= true;
        Dom.button_start.css('display', 'none');
        Dom.question_in_a_row.show();
        Dom.question_no[0].innerHTML= counter
    })
        Dom.allAnswers.map(el => {

            el.addEventListener('click', (e)=>{
                let providedAnswer; 
                //if quiz has started, proceed and check the answers
                if(quizHasStarted){
                    //getting the text of an answer depending where has user clicked- on the parent or child div
                    if(e.target.className==='answer'){
                        providedAnswer= e.target.childNodes[3].lastChild.innerHTML;
                    } else {
                        providedAnswer= e.target.innerHTML;
                    } 
                    //incrementing the counter and displaying the question number. 
                    counter ++;
                    Dom.question_no[0].innerHTML= counter;
                    //checking the answer and removing the first element from the array
                    checkAnswer(providedAnswer, setQuestion.data[0].correct_answer);
                    removeQuestion(setQuestion.data);
                    //if the array with questions is empty, alert the final result. If not, continue with the quiz.
                    if(setQuestion.data.length> 0){
                        const new_current_question= setQuestion.data[0];
                        displayQuestion(new_current_question);
                        
                    } else {
                        displayFinalResult();
                        location.reload();
                    }
                    
                } else {
                    alert('Please start the quiz!');
                }

            })
    }) 
   

})