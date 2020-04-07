<?php 

spl_autoload_register('AutoLoader');

function AutoLoader($class){
	$classes='classes/';

	$ext= '.class.php';

	$full_path= $classes.$class.$ext;

	include_once $full_path;
}

?>