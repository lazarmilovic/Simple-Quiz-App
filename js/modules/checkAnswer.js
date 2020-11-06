import { Dom } from './Dom.js';

export const checkAnswer = (answer, correct_answer )=> {
    if(answer=== correct_answer){
        Dom.correct_answers[0].innerHTML++;
        alert('Correct! Let\'s move on!');
    } else {
        alert(`Wrong answer- the correct one is ${correct_answer}`);
    }
}