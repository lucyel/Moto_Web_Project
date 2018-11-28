<?php
require('class-appointment.php');
include('header.php');

$appointment = NULL;
$status = NULL;
if (array_key_exists('timeframe', $_POST)) {
    $appointment = new NntAppointment($_POST);
    $status = $appointment->updateDatabase();
    if ($status == 0) {
        echo('<p><span style="color: red;">Registration failed.</span> You may choose another time frame.</p>');
        echo('<script>function toAppointment() { window.location.href = "appointment.php"; }</script>');
        echo('<input type="button" onclick="toAppointment()" value="Go back to appointment form" />');
    }
    else {
        echo('<p><span style="color: green;">Registration succeeded.</span> Use your registered ID to check appointment status.</p>');
        echo('<script>function toIndex() { window.location.href = "index.php"; }</script>');
        echo('<input type="button" onclick="toIndex()" value="Go back to index page" />');
    }
}
else {
    $appointment = new NntAppointment($_POST, true);
    $appointment->checkAppointmentStatus();
    $appointment->displayAppointmentStatus();
}

include('footer.php');
?>
