<?php
date_default_timezone_set("Asia/Jakarta");

function koneksi()
{
  $server = "localhost";
  $username = "root";
  $password = "";
  $database = "web_semantik_a1_2009020034_muhammadrivkyananda";
  return mysqli_connect($server, $username, $password, $database);
}

function q($data){
    $koneksi = koneksi();
    return mysqli_query($koneksi, $data);
}
    
function prodi(){
    return q("SELECT * FROM prodi");
}
?>