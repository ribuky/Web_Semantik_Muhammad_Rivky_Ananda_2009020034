<?php
require "functions.php";
?>

<h1>Halaman Program Studi</h1>

<p id="berhasil"></p>

<div class="row" id="halaman_edit_prodi">
    <div class="col-sm-10">
        <label for="">Nama Prodi</label>
        <input type="text" class="form-control" id="nama_prodi" placeholder="Input Nama Prodi">
        <p class="peringatan" id="lihat_nama_prodi"></p>
    </div>
    <div class="col-sm-2">
        <button class="btn btn-info mt-4" id="simpan_prodi">Simpan</button>
    </div>
</div>

<div class="table-responsive">
    <table class="table table-sm table-dark">
        <thead>
            <tr>
                <th>No</th>
                <th>ID</th>
                <th>Nama Prodi</th>
                <th>Updated</th>
                <th>Opsi</th>
            </tr>
        </thead>
        <tbody>
            <?php
            $no = 1;
            foreach (prodi() as $p) : ?>
                <tr>
                    <td><?= $no++; ?></td>
                    <td><?= $p["id"]; ?></td>
                    <td><?= $p["nama_prodi"]; ?></td>
                    <td><?= date("d/m/Y", strtotime($p["edit"])); ?></td>
                    <td>
                        <button class="btn btn-success btn-sm edit-prodi" id_prodi="<?= $p["id"]; ?>">Edit</button>
                        <button class="btn btn-danger btn-sm hapus-prodi" id_prodi="<?= $p["id"]; ?>">Hapus</button>
                    </td>
                </tr>
            <?php endforeach; ?>    
        </tbody>
    </table>
</div>

<script>
    $(".edit-prodi").click(function() {
        var id_prodi = $(this).attr("id_prodi")
        $.ajax({
            type: "POST",
            url: "views/edit-prodi.php",
            data: "id_prodi=" + id_prodi,
            success: function(data) {
                $("#halaman_edit_prodi").html(data)
            }
        })
    })

    $(".hapus-prodi").click(function() {
        var id_prodi = $(this).attr("id_prodi")
        $.ajax({
            type: "POST",
            url: "controller/hapus_prodi.php",
            data: "id_prodi=" + id_prodi,
            success: function(data) {
                if (data == "gagal") {
                    $("#berhasil").html(`
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            <strong>Error!</strong> Data gagal dihapus.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `)
                } else if (data == "berhasil") {
                    alert("Data berhasil dihapus!")
                    $("#halaman_body").load("prodi.php")
                }
            }
        })
    })

    $("#simpan_prodi").click(function() {
        var nama_prodi = $("#nama_prodi").val()
        if (nama_prodi == "") {
            $("#lihat_nama_prodi").text("Nama Prodi masih kosong!")
        } else {
            $.ajax({
                type: "POST",
                url: "controller/simpan_prodi.php",
                data: "nama_prodi=" + nama_prodi,
                success: function(data) {
                    if (data == "berhasil") {
                        $("#halaman_body").load("prodi.php")
                        alert("Data berhasil ditambahkan")
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