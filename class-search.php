<?php
class NntSearch {
    private $searchResults;
    private $searchTerm;

    public function __construct($input) {
        $this->searchTerm = $input;
        $this->searchResults = [];
    }

    public function search() {
        $dbo = new NntDb(true);
        $this->searchTerm = '.*' . $this->searchTerm . '.*';

        $dbo->prepare('SELECT name,price,availability FROM products WHERE name REGEXP ? ORDER BY name ASC');
        $dbo->bindParameters('s', [$this->searchTerm]);
        $dbo->execute();
        $dbo->fetchResults($this->searchResults);
        $dbo->close();
    }

    public function displayResult() {
        foreach ($this->searchResults as $resultRow) {
            $resultDiv = "<div class=\"search-result\"><ul>";
            $resultDiv .= "<li>{$resultRow['name']}</li>";
            $resultDiv .= "<li>{$resultRow['price']} VND</li>";

            if ($resultRow['availability']) {
                $resultDiv .= '<li style="color: green;">Available</li>';
            }
            else {
                $resultDiv .= '<li style="color: red;">Out of stock</li>';
            }
            $resultDiv .= "</ul></div>";
            echo($resultDiv . "\n");
        }
    }
}
