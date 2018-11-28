<?php
require('config.php');
trait nntDebug {
    public function nntExit($message, $errno = 0, $error = "") {
        include_once('header.php');
        if (NNT_DEBUG) {
            $statement = "<p>$message";
            if ($errno) {
              $statement .= " ($errno): $error</p>";
            }
            else {
              $statement .= ".</p>";
            }

            echo($statement);
        }
        else {
            echo('<p>Errors occurred somewhere in the code and developers are too lazy to fix it. But please still wait for them :-)</p>');
        }
        include_once('footer.php');
        exit(1);
    }
}
