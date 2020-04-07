<?php include 'classes/Connection.class.php';
	
	class Model extends Connection{

		protected function getQuestions(){
			$sql="SELECT * FROM questions ORDER BY RAND() LIMIT 10";
			$stmt= $this->connect()->query($sql);
			$result = $stmt->fetchAll();
			return $result;
		}

	}

?>