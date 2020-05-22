let answer1h= document.getElementById("answer1h");
let answer2h= document.getElementById("answer2h");
let answer3h= document.getElementById("answer3h");
let answer4h= document.getElementById("answer4h");

let question= document.getElementById("question");

let correct_answers= document.getElementById('correct_answers');

let question_no= document.getElementById('question_no');

let question_in_a_row= document.getElementById('question_in_a_row');


function displayQuestion(){
	question.innerHTML= questions[0];

}

function displayPossibleAnswer1(){
	answer1h.innerHTML=possible_answers_1[0];
}

function displayPossibleAnswer2(){
	answer2h.innerHTML=possible_answers_2[0];
}

function displayPossibleAnswer3(){
	answer3h.innerHTML=possible_answers_3[0];
}

function displayPossibleAnswer4(){
	answer4h.innerHTML=possible_answers_4[0];
}

function removeElementsFromArray(){ //'shifting' a first element of each array so the quiz can go on.
	right_answers.shift(); 
	possible_answers_1.shift(); 
	possible_answers_2.shift();
	possible_answers_3.shift();
	possible_answers_4.shift();
	questions.shift(); 	
}


function Quiz(){ //this function will start the quiz and display the question and the possible answers 
		
	displayQuestion(); //displaying the question

	question_no.innerHTML= Number(question_no.innerHTML) + 1;

	question_in_a_row.style.display='inline';

	document.getElementById("button").style.display="none"; //making button unavailable so user cannot re-start the quiz

	displayPossibleAnswer1(); //assigning values to each of answer HTML element
	displayPossibleAnswer2();
	displayPossibleAnswer3();
	displayPossibleAnswer4();
				
}


function checkAnswer(x){

	 if(answer1h.innerHTML != "Answer 1") { //if user clicks the answer before the quiz is started, will get an alert to start the quiz first 

		if(document.getElementById(x).innerHTML == right_answers[0]) { //checking if the provided answer from the user is the same as the first element of rigth_answers array
		
			correct_answers.innerHTML = Number(correct_answers.innerHTML) +1;//incrising the correct_answers element for 1 since the user answered correctly
			removeElementsFromArray();

			if(right_answers.length>0){ //checking if the array with the rigth answers is empty- if not it will continue with the quiz

				alert('Correct! Let\'s move on!');
				Quiz(); //calling the Quiz() automatically so the user cannot manipulate with it and provide multiple answers on a same question */
			}

			else { //if the array with the rigth answers is empty, the quiz is over and the user will get the alert with how many correct answers was provided
				alert('No more questions! You\'ve answered '+correct_answers.innerHTML+' correctly! Congrats!');
				location.reload();
			}
		}
		else { //if the provided asnwer is wrong, the user will get an alert with the right answer and the quiz will move on, if there are more questions to display
			
			alert('Wrong answer- the correct one is '+ right_answers[0]);
			removeElementsFromArray();	
			if(right_answers.length>0) {

				Quiz();
			}
			else {
				alert('No more questions! You\'ve answered '+correct_answers.innerHTML+' correctly out of 10! Congrats!');
				location.reload();
			}
		}
		
	}

	else {
		alert('Please start the quiz first!');
	} 
}

