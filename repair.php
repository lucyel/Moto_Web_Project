<?php include('header.php'); ?>
<main id="repair-form">
  <form method="post" action="process-repair.php">
    <label for="inspect">Enter your inspect code:</label>
    <input id="inspect" type="text" name="inspect" required />
    <input type="submit" value="Submit" />
  </form>
</main>
<?php include('footer.php'); ?>
