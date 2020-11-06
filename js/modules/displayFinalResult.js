import { Dom } from './Dom.js';

export const displayFinalResult= () => {
    alert(`The qiuz is over! You had ${Dom.correct_answers.html()} correct answers. Congrats!`);
}