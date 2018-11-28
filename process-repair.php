<?php
require('class-repair.php');
$repairObj = new NntRepair($_POST);
$repairObj->inspectRepairStatus();
include('header.php');
?>

<main id="repair-status">

<?php
$repairObj->displayRepairStatus();
?>

</main>

<?php
include('footer.php');
?>
