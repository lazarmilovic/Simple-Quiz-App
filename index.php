<?php include 'autoloader.php' ?>
<!DOCTYPE html>
<html>
<head>
	<title>Quiz!</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	
</head>
<body>
	<?php 
		$object= new UserView();
		$show_questions= $object->showQuestions();

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
	<div id="answer1" class="answer" >
		<div class="small">1</div>
		<div><h3 id="answer1h">Answer 1</h3></div>
	</div>
	<div id="answer2" class="answer" >
		<div class="small">2</div>
		<div><h3 id="answer2h">Answer 2</h3></div>
	</div>
	<div id="answer3" class="answer" >
		<div class="small">3</div>
		<div><h3 id="answer3h">Answer 3</h3></div>
	</div>
	<div id="answer4" class="answer" >
		<div class="small">4</div>
		<div><h3 id="answer4h">Answer 4</h3></div>
	</div>
	<div id="start">
		<button id="button">Start</button>
	</div>
</div>
<script>

	 let setQuestion= (function(){
	 	return {

	 		data: <?php echo json_encode($show_questions); ?>
	 	}
	 })();
</script>
<script src="main.js" type="module"></script>
</body>
</html>