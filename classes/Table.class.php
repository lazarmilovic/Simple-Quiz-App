<?php include "classes/Connection.class.php"; 

class Table extends Connection {

public $table = "CREATE TABLE IF NOT EXISTS questions(
		id int(4) auto_increment not null primary key, 
		question varchar(255) not null,
		answer1 varchar(255) not null, 
		answer2 varchar(255) not null,
		answer3 varchar(255) not null,
		answer4 varchar(255) not null,
		correct_answer varchar(255) not null

)";

public function createTable(){
	$this->connect()->query($this->table);
}

}

$table = new Table();
$table->createTable();