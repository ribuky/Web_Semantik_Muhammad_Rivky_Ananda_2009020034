<?php
require "../functions.php";

$id_prodi = $_POST["id_prodi"];

$lihat_prodi = qs("SELECT * FROM prodi WHERE id = '$id_prodi'");
?>

<div class="col-sm-10">
  <label for="">Nama Prodi</label>
  <input type="text" class="form-control" id="edit_nama_prodi" placeholder="Input Nama Prodi" value="<?= $lihat_prodi["nama_prodi"]; ?>">
  <p class="peringatan" id="lihat_nama_prodi"></p>
</div>
<div class="col-sm-2">
  <button class="btn btn-success mt-4" id="edit_prodi" id_prodi="<?= $id_prodi; ?>">Edit</button>
</div>

<script>
  $("#edit_prodi").click(function() {
    var nama_prodi = $("#edit_nama_prodi").val()
    var id_prodi = $(this).attr("id_prodi")
    if (nama_prodi == "") {
      $("#lihat_nama_prodi").text("Nama Prodi masih kosong!")
    } else {
      $.ajax({
        type: "POST",
        url: "controller/edit_prodi.php",
        data: "nama_prodi=" + nama_prodi + "&id_prodi=" + id_prodi,
        success: function(data) {
          if (data == "berhasil") {
            $("#halaman_body").load("prodi.php")
            alert("Data berhasil diupdate")
          } else if (data == "gagal") {
            $("#berhasil").html(`
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Warning!</strong> Data yang sama sudah ada sebelumnya.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `)
          }
        }
      })
      $("#lihat_nama_prodi").text("")
    }
  })
</script>