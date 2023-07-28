<?php
require "../functions.php";

$nama_prodi = $_POST["nama_prodi"];
$id_prodi = $_POST["id_prodi"];

$tanggal = date("Y-m-d H:i:s");

$edit = q("UPDATE prodi SET
nama_prodi = '$nama_prodi',
edit = '$tanggal'
WHERE
id = '$id_prodi'
");
if ($edit) {
  echo "berhasil";
} else {
  echo "gagal";
}