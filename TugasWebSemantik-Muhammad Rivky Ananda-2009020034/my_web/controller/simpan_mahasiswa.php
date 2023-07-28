<?php
require "../functions.php";
$npm = $_POST["npm"];
$nama_mahasiswa = $_POST["nama_mahasiswa"];
$tgl_lahir = $_POST["tgl_lahir"];
$jurusan = $_POST["jurusan"];
$alamat = $_POST["alamat"];

$tanggal_hari_ini = date("Y-m-d H:i:s");

$simpan = q("INSERT INTO mahasiswa VALUES(null,
'$npm',
'$nama_mahasiswa',
'$tgl_lahir',
'$jurusan',
'$alamat',
'$tanggal_hari_ini','$tanggal_hari_ini')");
if ($simpan) {
  echo "berhasil";
} else {
  echo "gagal";
}