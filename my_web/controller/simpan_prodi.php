<?php
require "../functions.php";

$nama_prodi = $_POST["nama_prodi"];

$tanggal = date("Y-m-d H:i:s");

$simpan = mysqli_query(koneksi(), "INSERT INTO prodi VALUES(null,'$nama_prodi','$tanggal','$tanggal')");

if ($simpan) {
  echo "berhasil";
} else {
  echo "gagal";
}