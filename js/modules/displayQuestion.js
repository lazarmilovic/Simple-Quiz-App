import { Dom } from './Dom.js';

export const displayQuestion = (data) => {
    Dom.question.html(data.question);
    Dom.answer1h.html(data.answer1);
    Dom.answer2h.html(data.answer2);
    Dom.answer3h.html(data.answer3);
    Dom.answer4h.html(data.answer4);
    
}