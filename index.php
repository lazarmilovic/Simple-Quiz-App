<?php include 'autoloader.php' ?>
<!DOCTYPE html>
<html>
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
	
</head>
<body>
	<?php 
		$object= new UserView();
		$show_questions= $object->showQuestions();

		$questions=array_column($show_questions, 'question');
		$possible_answers_1= array_column($show_questions,'answer1');
		$possible_answers_2= array_column($show_questions,'answer2');
		$possible_answers_3= array_column($show_questions,'answer3');
		$possible_answers_4= array_column($show_questions,'answer4');
		$right_answers= array_column($show_questions,'correct_answer');
	?>
<div class="container">
	<div id="answered">
	<h4 id="question_in_a_row">Question <span id="question_no">0</span>/10</h4>
 	<h4 id="correctly_answered"> Questions Answered Correctly :<span id="correct_answers"> 0</span></h4>
	</div>
	<div class="question">
		<h1>Question</h1>
		<h3 id="question">Here goes the question:</h3>
	</div>
	<div id="answer1" class="answer" onclick="checkAnswer('answer1h')">
		<div class="small">1</div>
		<div><h3 id="answer1h">Answer 1</h3></div>
	</div>
	<div id="answer2" class="answer" onclick="checkAnswer('answer2h')">
		<div class="small">2</div>
		<div><h3 id="answer2h">Answer 2</h3></div>
	</div>
	<div id="answer3" class="answer" onclick="checkAnswer('answer3h')">
		<div class="small">3</div>
		<div><h3 id="answer3h">Answer 3</h3></div>
	</div>
	<div id="answer4" class="answer" onclick="checkAnswer('answer4h')">
		<div class="small">4</div>
		<div><h3 id="answer4h">Answer 4</h3></div>
	</div>
	<div id="start">
		<button onclick="Quiz()" id="button">Start</button>
	</div>
</div>
<script>
	 let possible_answers_1=<?php echo json_encode($possible_answers_1); ?>;
	 let possible_answers_2=<?php echo json_encode($possible_answers_2); ?>;
	 let possible_answers_3=<?php echo json_encode($possible_answers_3); ?>;
	 let possible_answers_4=<?php echo json_encode($possible_answers_4); ?>; 
	 let questions=<?php echo json_encode($questions); ?>;
	 let right_answers= <?php echo json_encode($right_answers); ?>;
</script>
<script src="js/script.js"></script>
</body>
</html>