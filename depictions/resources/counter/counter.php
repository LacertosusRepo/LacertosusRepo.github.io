<?php
function errorout($message) {
    //Makes dpkg know it's not a package
    header("Content-Type: text/plain");
    //Generates HTTP error 500
    header($_SERVER["SERVER_PROTOCOL"] . " 500 Internal Server Error");
    //Then print out the error.
    //Because the content type is plain text, escaping is not necessary.
    die($message);
}
$link = mysqli_connect("localhost", "myrepo", "mypassword"); //change parameters to what you use
if (!$link) {
    errorout("Couldn't connect to the database. Please try your download later.");
}
if (!mysqli_set_charset($link, "UTF8")) { //change UTF8 if your database uses otherwise
    errorout("Couldn't set the charset for the database. Please try your download later.");
}
if (!mysqli_select_db($link, "myrepodb")) { //change myrepodb to your database name
    errorout("Couldn't open the database. Plrase try your download later.");
}
//Store the file name in a variable
$file = isset($_GET["filename"]) ? mysqli_real_escape_string($link, $_GET["filename"]) : "";
//The following code checks for attempts to read files that aren't debs.
//Not doing this lets attackers read PHP scripts and system files.
if (empty($file) or stristr("..", $file) or stristr("/", $file) or stristr("\\", $file) or !file_exists("downloads/$file")) {
    //Reset the file name to the Cydia package listing
    $file = "Packages";
}
//Count the download in the database
//A log will be saved if something goes wrong.
try {
    //Check whether the package has already been downloaded
    $query = mysqli_query($link, "SELECT * FROM downloads WHERE filename='$file'");
    if (!$query or mysqli_num_rows($query) == 0) {
        //If it doesn't exist, create the row
        mysqli_query($link, "INSERT INTO downloads SET filename='$file', count=1, dldate=NOW()");
    } else {
        //If it does, add one to the counter
        mysqli_query($link, "UPDATE downloads SET count=count+1, dldate=NOW() WHERE filename='$file'");
    }
} catch (Exception $e) {
    //Something went wrong, so save a log file below the document root
    //(usually htdocs or public_html)
    file_put_contents(dirname($_SERVER["DOCUMENT_ROOT"]) . "/cydiaerr.log", print_r($e, true));
}
//Finally, serve the user the file they requested
$cont = file_get_contents($file == "Packages" ? "Packages" : "downloads/$file");
//If it's more than 16 bytes long, it's ok to serve it
if (strlen($cont) > 16) {
    //Force Cydia to download the file, not display it
    header("Content-Type: application/octet-stream");
    header("Content-Disposition: inline; filename=\"$file\"");
    //Tell Cydia how big the file is so it can show the progress bar
    header("Content-Length: " . strlen($cont));
    //And finally, output the file!
    echo $cont;
} else {
    errorout("The file you requested either doesn't exist or isn't allowed to be downloaded.");
}