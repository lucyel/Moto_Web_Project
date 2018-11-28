<?php
require('traits.php');
class NntDb {
    use nntDebug;

    private $nntDbo;                /* mysqli connection */
    private $expectResult = false;  /* SELECT statements normally expect results, while UPDATE ones do not */
    private $preparedStatement;     /* mysqli prepared statement */
    private $results;               /* mysqli query result */

    /* Constructor of this class */
    public function __construct($expectResult = false) {
        $this->connect();
        if ($expectResult) {
            $this->expectResult = true;
        }
    }

    private function connect() {
        $this->nntDbo = new mysqli('localhost', 'root', '', 'webpro');

        if ($this->nntDbo->connect_error) {
            $this->nntExit("Can't connect to database", $this->nntDbo->connect_errno, $this->nntDbo->connect_error);
        }
    }

    public function prepare($sqlQuery) {
        $this->preparedStatement = $this->nntDbo->prepare($sqlQuery);

        if ($this->preparedStatement == false) {
            $this->nntExit("Can't prepare given statement");
        }
    }

    /* bind_param is used to prevent SQL Injection */
    public function bindParameters($formatter, $parametersArray) {
        $status = $this->preparedStatement->bind_param($formatter, ...$parametersArray);

        if ($status == false) {
          $this->nntExit("Can't bind given parameters to prepared statement");
        }
    }

    public function execute() {
        $status = $this->preparedStatement->execute();

        return $status;
    }

    public function fetchResults(array &$externalResultStorage = []) {
        $this->results = $this->preparedStatement->get_result();

        if ($this->expectResult) {
            // Fetch result from database object
            $resultsRows = $this->results->num_rows;
            for ($i = 0; $i < $resultsRows; $i++) {
                array_push($externalResultStorage, $this->results->fetch_assoc());
            }
        }

        return $this->nntDbo->affected_rows;
    }

    public function close() {
        $this->preparedStatement->close();
        $this->nntDbo->close();
    }
}
?>
