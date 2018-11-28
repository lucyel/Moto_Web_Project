<?php
require('class-database.php');
class NntRepair {
    use nntDebug;

    private $inspectCode;
    private $repairStatusResults;
    private $componentsList;
    private $statusesList;
    private $colorsList;

    public function __construct($formData) {
        $this->inspectCode = $formData['inspect'];
        $this->componentsList = [
            'C01' => 'Mirror',
            'C02' => 'Suspension',
            'C03' => 'Engine',
            'C04' => 'Gas tank',
            'C05' => 'Fuel gauge',
            'C06' => 'Gearbox',
            'C07' => 'Motor',
            'C08' => 'Tyre',
            'C09' => 'Brakes',
            'C10' => 'Meters'
        ];
        $this->statusesList = [
            'To be checked',
            'Checking',
            'To be repaired',
            'Repairing',
            'Repaired',
            'Checked, left as-is'
        ];
        $this->repairStatusResults = [];
    }

    public function inspectRepairStatus() {
        $dbo = new NntDb(true);
        $selectRepairCustomers = <<<SQL
SELECT customerName,repairID,repairStartTime,repairPlannedTime,componentIDs FROM repair INNER JOIN customers
ON repair.customerID = customers.customerID
WHERE repairID = ?
SQL;

        $dbo->prepare($selectRepairCustomers);
        $dbo->bindParameters('s', [$this->inspectCode]);
        $dbo->execute();
        $status = $dbo->fetchResults($this->repairStatusResults);

        /* Normally there is only one repairID per customer */
        if ($status != 1) {
            $this->nntExit("Database failure!");
        }

        $dbo->close();
    }
    public function displayRepairStatus() {
        $resultRow = $this->repairStatusResults[0];
        $repairStartTime = date('j M Y, H:i:s', $resultRow['repairStartTime']);
        $repairPlannedTime = date('j M Y, H:i:s', $resultRow['repairPlannedTime']);

        $resultTable = '<table class="repair-status"><tr><th colspan="2" style="text-align: center;">Customer information</th></tr>';
        $resultTable .= "<tr><th scope=\"row\">Customer name</th><td>{$resultRow['customerName']}</td></tr>";
        $resultTable .= "<tr><th scope=\"row\">Inspect code</th><td>{$resultRow['repairID']}</td></tr>";
        $resultTable .= "<tr><th scope=\"row\">Repair started time</th><td>$repairStartTime</td></tr>";
        $resultTable .= "<tr><th scope=\"row\">Planned finish time</th><td>$repairPlannedTime</td></tr>";

        /* This one is different from $this->componentsList */
        $componentsList = unserialize($resultRow['componentIDs']);
        /* Sort the list so that finished tasks are placed higher than incompleted ones. */
        arsort($componentsList);
        $resultTable .= '<tr><th colspan="2" style="text-align: center;">Detailed components status</th></tr>';
        foreach ($componentsList as $id => $repairStatus) {
            $resultTable .= "<tr><th scope=\"row\">{$this->componentsList[$id]}</th><td>{$this->statusesList[$repairStatus]}</td></tr>";
        }
        $resultTable .= '</table>';
        echo($resultTable . "\n");
    }
}
