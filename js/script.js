let UIControler= (function (){
	
	DOM= {
			 answer1h: document.getElementById("answer1h"),
			 answer2h: document.getElementById("answer2h"),
			 answer3h: document.getElementById("answer3h"),
			 answer4h: document.getElementById("answer4h"),
			 answer1: document.getElementById("answer1"),
			 answer2: document.getElementById("answer2"),
			 answer3: document.getElementById("answer3"),
			 answer4: document.getElementById("answer4"),
			 question: document.getElementById("question"),
			 button: document.getElementById('button'),
			 correct_answers: document.getElementById('correct_answers'),
			 question_no: document.getElementById('question_no'),
			 question_in_a_row: document.getElementById('question_in_a_row')
		};

	return {
			returnDOM: function(){
				return DOM;
			},
			// funcstion will display question and possible answers from the passed object (the object will be  setQuestion.data[0])
			displayQuestion: function(newItem){
				DOM.question.textContent= newItem.question;
				DOM.answer1h.textContent= newItem.answer1;
				DOM.answer2h.textContent= newItem.answer2;
				DOM.answer3h.textContent= newItem.answer3;
				DOM.answer4h.textContent= newItem.answer4;

				},

			 Quiz: function(){ //this function will start the quiz and display the question and the possible answers 
			
				UIControler.displayQuestion(setQuestion.data[0]); //displaying the question
				DOM.question_no.innerHTML= Number(DOM.question_no.innerHTML) + 1;
				DOM.question_in_a_row.style.display='inline';
				DOM.button.style.display="none"; //making button unavailable so user cannot re-start the quiz

					
			},
			// function will remove the first element of the object so the quiz can go on
			removeElementsFromArray: function(){
				setQuestion.data.shift();
			},
			// function will check the submitted answer and display if the answer is wrong or correct and will move on with the quiz if there are more questions to display
			checkAnswer: function(x,obj){
					if(document.getElementById(x).textContent == obj[0].correct_answer) {
					alert('Correct! Let\'s move on!');
					correct_answers.innerHTML = Number(DOM.correct_answers.innerHTML) +1;//incrising the correct_answers element for 1 since the user answered correctly
					UIControler.removeElementsFromArray();
						if(obj.length>0){ //checking if there are more qustions to ask
							UIControler.Quiz();

						} else {
							alert('No more questions! You\'ve answered '+DOM.correct_answers.innerHTML+' correctly out of 10! Congrats!');
							location.reload();
						}


					} else {
						alert('Wrong answer- the correct one is '+ obj[0].correct_answer);
						UIControler.removeElementsFromArray();	
							if(obj.length>0) {

								UIControler.Quiz();
							}
							else {
								alert('No more questions! You\'ve answered '+DOM.correct_answers.innerHTML+' correctly out of 10! Congrats!');
								location.reload();
							}

					}


			} 
	}		

})();





let Controler= (function(QuestionCTRL, UICTRL){

	let setUpEventListeners= function(){
		
		UICTRL.returnDOM().answer1.addEventListener('click', function(){
			if(event.target.textContent.includes('Answer')){
			alert('Start the quiz first');
			}
			else {
				UICTRL.checkAnswer('answer1h', setQuestion.data);
			}
		});
		UICTRL.returnDOM().answer2.addEventListener('click', function(){
			if(event.target.textContent.includes('Answer')){ //if textContent of the target contains "Answer", that means the user didn't start the quiz 
			alert('Start the quiz first');
			}
			else {
				UICTRL.checkAnswer('answer2h', setQuestion.data);
			}
		});
		UICTRL.returnDOM().answer3.addEventListener('click', function(){
			if(event.target.textContent.includes('Answer')){
			alert('Start the quiz first');
			}
			else {
				UICTRL.checkAnswer('answer3h', setQuestion.data);
			}
		});
		UICTRL.returnDOM().answer4.addEventListener('click', function(){
			if(event.target.textContent.includes('Answer')){
			alert('Start the quiz first');
			}
			else {
				UICTRL.checkAnswer('answer4h', setQuestion.data);
			}
		});
		UICTRL.returnDOM().button.addEventListener('click', UICTRL.Quiz); 

	};

	return{
		init: function(){
			setUpEventListeners();
		}
	}

}(setQuestion,UIControler))

Controler.init();
