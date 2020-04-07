<?php 
class Connection {
	
	private $host= 'localhost';
	private $dbname= 'quiz';
	private $user= 'root';
	private $pass= '';
	private $charset= 'utf8mb4';

	protected function connect(){

	try { 
			$dns= "mysql:host=$this->host;dbname=$this->dbname;charset=$this->charset";
			$connection = new PDO($dns,$this->user,$this->pass);
			$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
			return $connection;
		
	} catch (Exception $e) {
		echo $e->getMessage();
	}
}

}

?>