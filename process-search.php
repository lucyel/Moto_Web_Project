<?php
include('header.php');
require('class-database.php');
require('class-search.php');

$searchTerm = $_POST['searchbar'];
$searchObj = new NntSearch($searchTerm);
$searchObj->search();
$searchObj->displayResult();

include('footer.php');
?>
