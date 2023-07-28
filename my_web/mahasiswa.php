<?php
require "functions.php";
?>

<div class="row">
    <div class="col-sm-8">
        <p id="alert_berhasil"></p>
        <h4>Data Mahasiswa</h4>
        <table id="tabel_mahasiswa" class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>NPM</th>
                    <th>Nama Mahasiswa</th>
                    <th>Tanggal Lahir</th>
                    <th>Jurusan</th>
                    <th>Alamat</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach (mahasiswa() as $m) : ?>
                    <tr>
                        <td><?= $m["npm"]; ?></td>
                        <td><?= $m["nama_mahasiswa"]; ?></td>
                        <td><?= date("d/m/Y", strtotime($m["tgl_lahir"])); ?></td>
                        <td><?= prodi_satu($m["id_prodi"], "nama_prodi"); ?></td>
                        <td><?= $m["alamat"]; ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
        </table>
    </div>
    <div class="col-sm-4">
        <h4>Form Input Mahasiswa</h4>

        <div class="form-group">
            <label for="">NPM</label>
            <input type="number" id="npm" class="form-control" placeholder="Input NPM">
            <p id="lihat_npm" class="peringatan"></p>
        </div>
        <div class="form-group">
            <label for="">Nama Mahasiswa</label>
            <input type="text" id="nama_mahasiswa" class="form-control" placeholder="Input Nama Mahasiswa">
            <p id="lihat_nama_mahasiswa" class="peringatan"></p>
        </div>
        <div class="form-group">
            <label for="">Tanggal Lahir</label>
            <input type="date" id="tgl_lahir" class="form-control">
            <p id="lihat_tgl_lahir" class="peringatan"></p>
        </div>
        <div class="form-group">
            <label for="">Jurusan</label>
            <select id="jurusan" class="form-control">
                <option value="" selected>Pilih Jurusan</option>
                <?php foreach (prodi() as $p) : ?>
                    <option value="<?= $p["id"]; ?>"><?= $p["nama_prodi"]; ?></option>
                <?php endforeach; ?>
            </select>
            <p id="lihat_jurusan" class="peringatan"></p>
        </div>
        <div class="form-group">
            <label for="">Alamat</label>
            <textarea id="alamat" class="form-control" placeholder="Isi alamat mahasiswa disini"></textarea>
            <p id="lihat_alamat" class="peringatan"></p>
        </div>
        <div class="form-group mt-2" style="text-align: right;">
            <button class="btn btn-danger">Batal</button>
            <button class="btn btn-success" id="simpan">Simpan</button>
        </div>

    </div>
</div>

<script>
    $("#simpan").click(function() {
        var npm = $("#npm").val()
        if (npm == "") {
            $("#lihat_npm").text("NPM Masih kosong!")
        } else {
            $("#lihat_npm").text("")
        }

        var nama_mahasiswa = $("#nama_mahasiswa").val()
        if (nama_mahasiswa == "") {
            $("#lihat_nama_mahasiswa").text("Nama Mahasiswa masih kosong!")
        } else {
            $("#lihat_nama_mahasiswa").text("")
        }

        var tgl_lahir = $("#tgl_lahir").val()
        if (tgl_lahir == "") {
            $("#lihat_tgl_lahir").text("Tanggal Lahir belum dipilih!")
        } else {
            $("#lihat_tgl_lahir").text("")
        }

        var jurusan = $("#jurusan").val()
        if (jurusan == "") {
            $("#lihat_jurusan").text("Jurusan belum dipilih!")
        } else {
            $("#lihat_jurusan").text("")
        }

        var alamat = $("#alamat").val()
        if (alamat == "") {
            $("#lihat_alamat").text("Alamat belum diisi!")
        } else {
            $("#lihat_alamat").text("")
        }

        if (npm != "" && nama_mahasiswa != "" && tgl_lahir != "" && jurusan != "" && alamat != "") {

            $.ajax({
                type: "POST",
                url: "controller/simpan_mahasiswa.php",
                data: "npm=" + npm + "&nama_mahasiswa=" + nama_mahasiswa + "&tgl_lahir=" + tgl_lahir + "&jurusan=" + jurusan + "&alamat=" + alamat,
                success: function(data) {
                    if (data == "gagal") {
                        $("#alert_berhasil").html(`
                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <strong>Danger!</strong> NPM yang diinput sudah ada sebelumnya.
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `)
                    } else if (data == "berhasil") {
                        $("#halaman_body").load("mahasiswa.php")
                        alert("Data berhasil ditambahkan")
                    }
                }
            })

        }

    })
</script>