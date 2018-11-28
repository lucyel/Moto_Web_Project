<?php
require('class-database.php');
class NntAppointment {
    private $customerID;
    private $customerName;
    private $customerPhoneNumber;
    private $customerAppointmentStartTime;
    private $appointmentStatusResults;

    public function __construct($formData, $checkStatus = false) {
        if ($checkStatus) {
            $this->customerID = $formData['customerID'];
            $this->appointmentStatusResults = [];
        }
        else {
            $this->customerID = $formData['customerID'];
            $this->customerName = $formData['customerName'];
            $this->customerPhoneNumber = $formData['customerPhoneNumber'];

            $tf = $formData['timeframe'];
            $this->customerAppointmentStartTime = strtotime("{$formData['date']} " . substr($tf, 0, strpos($tf, ' ')));
        }
    }
    public function updateDatabase() {
        $dbo = new NntDb;
        $dbo->prepare('INSERT INTO appointment (customerID, customerName, customerPhoneNumber, customerAppointmentStartTime) VALUES(?, ?, ?, ?);');
        $dbo->bindParameters('sssi', [$this->customerID, $this->customerName, $this->customerPhoneNumber, $this->customerAppointmentStartTime]);
        if ($dbo->execute() == false) {
            return 0;
        }
        $rowsUpdated = $dbo->fetchResults();
        $dbo->close();

        return $rowsUpdated;
    }
    public function checkAppointmentStatus() {
        $dbo = new NntDb(true);
        $dbo->prepare('SELECT customerName,customerPhoneNumber,customerAppointmentStartTime FROM appointment WHERE customerID = ?');
        $dbo->bindParameters('s', [$this->customerID]);
        $dbo->execute();
        $dbo->fetchResults($this->appointmentStatusResults);
        $dbo->close();
    }
    public function displayAppointmentStatus() {
        $resultRow = $this->appointmentStatusResults[0];
        $appointmentStartTime = date('j M Y, H:i:s', $resultRow['customerAppointmentStartTime']);
        
        $resultTable = '<div class="ap-status><table id="appointment-status"><tr><th colspan="2" style="text-align: center;">Appointment Status</th></tr>';
        $resultTable .= "<tr><th scope=\"row\">Customer name</th><td>{$resultRow['customerName']}</td></tr>";
        $resultTable .= "<tr><th scope=\"row\">Contact number</th><td>{$resultRow['customerPhoneNumber']}</td></tr>";
        $resultTable .= "<tr><th scope=\"row\">Appointment start time</th><td>$appointmentStartTime</td></tr>";
        $resultTable .= '</table></div>';

        echo($resultTable);
    }
}
