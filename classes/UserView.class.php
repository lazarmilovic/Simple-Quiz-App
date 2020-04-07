<?php include 'classes/Model.class.php';
		
class UserView extends Model{

	public function showQuestions(){
		return $this->getQuestions();
	}
}


?>