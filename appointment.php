<?php include('header.php'); ?>
		
			<div class="first-section-1">
				<div class="container">
					<div id="appointment" class="text-center text-white">
						<h1>Make a repair appointment</h1>
						<form id="appointment" method="post" action="process-appointment.php">
							<div class="row">
								<div class="row">
									<div class="col-25">
										<label for="name">Name </label>
									</div>
									<div class="col-75">
										<input id="name" type="text" name="customerName" required >
									</div>
								</div>
								<div class="col-25">
									<label for="tel">Phone Number </label>
								</div>
								<div class="col-75">
									<input id="tel" type="tel" name="customerPhoneNumber" required >
								</div>
							</div>
							<div class="row">
								<div class="col-25">
									<label for="idps">ID/Passport number </label>
								</div>
								<div class="col-75">
									<input id="idps" type="text" name="customerID" required >
								</div>
							</div>
							<div class="row">
							<?php $today = date('Y-m-d'); $nMonth = date('Y-m-d', strtotime('next month')); ?>
						  <p>
							<label for="date">Pick a date:</label>
							<input id="date" type="date" name="date" value=<?php echo($today); ?> min="<?php echo($today); ?>" max="<?php echo($nMonth); ?>"/>
						  </p>
						  <p>Select your time</p>
						  <p><input class="timeframe" type="submit" name="timeframe" value="09:30 - 10:00" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="10:00 - 10:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="10:30 - 11:00" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="11:00 - 11:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="11:30 - 12:00" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="12:00 - 12:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="12:30 - 12:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="13:00 - 13:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="13:30 - 14:00" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="14:00 - 14:30" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="14:30 - 15:00" /></p>
    <p><input class="timeframe" type="submit" name="timeframe" value="15:00 - 15:30" /></p>
						</div>
						<input type="submit" value="Submit">
						</form>
					</div>
				</div>
			</div>

		<?php include('footer.php') ?>