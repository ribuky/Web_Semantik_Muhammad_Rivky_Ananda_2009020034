<?php
require "../functions.php";

$nama_prodi = $_POST["nama_prodi"];

$tanggal = date(("Y-m-d H:i:s"));

$s = mysqli_query(koneksi(),"INSERT INTO prodi VALUES(null,'$nama_prodi','$tanggal','$tanggal')");
if ($s) {
    echo "berhasil";
} else {
    mysql_errno(komeksi());
}