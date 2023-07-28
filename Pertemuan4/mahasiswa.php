<div class="row">
                <div class="col-sm-8">
                    <p id="alert_berhasil"></p>
                    <h4>Data Mahasiswa</h4>
                        <table class="table table-dark table-striped" id="tabel_mahasiswa">
                            <tr>
                                <th>NPM</th>
                                <th>Nama Mahasiswa</th>
                                <th>Tanggal Lahir</th>
                                <th>Jurusan</th>
                                <th>Alamat</th>
                            </tr>
                            <tr>
                                <td>98765</td>
                                <td>Ronaldo</td>
                                <td>19/09/2009</td>
                                <td>Sistem Informasi</td>
                                <td>Marelan</td>
                            </tr>
                            <tr>
                                <td>98766</td>
                                <td>Messi</td>
                                <td>01/01/2001</td>
                                <td>Teknologi Informasi</td>
                                <td>Medan Barat</td>  
                            </tr>
                            <tr>
                                <td>98767</td>
                                <td>Halland</td>
                                <td>02/02/2002</td>
                                <td>Data Sains</td>
                                <td>Medan Timur</td>
                            </tr>
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
                            <input type="text" id="nama_mahasiswa" class="form-control" placeholder="Input Nama">
                            <p id="lihat_nama_mahasiswa" class="peringatan"></p>
                        </div>
                        <div class="form-group">
                            <label for="">Tanggal Lahir</label>
                            <input type="date" id="tgl_lahir" class="form-control" placeholder="Input Tanggal Lahir">
                            <p id="lihat_tgl_lahir" class="peringatan"></p>
                        </div>
                        <div class="form-group">
                            <label for="">Jurusan</label>
                            <select id="jurusan" class="form-control">
                                <option value="" selected>Pilih Jurusan</option>
                                <option>Sistem Informasi</option>
                                <option>Teknologi Informasi</option>
                                <option>Data Sains</option>
                            </select>
                            <p id="lihat_jurusan" class="peringatan"></p>
                        </div>
                        <div class="form-group">
                            <label for="">Alamat</label>
                            <textarea class="form-control" placeholder="Isi Alamat" id="alamat" style="height: 100px;"></textarea>
                            <p id="lihat_alamat" class="peringatan"></p>
                        </div>
                        <div class="form-group mt-2" style="text-align:right;">
                            <button class="btn btn-danger">Batal</button>
                            <button class="btn btn-success" id="simpan">Simpan</button>
                        </div>
                </div>
            </div>

<script>
    $("#simpan").click(function(){
    console.log("Ok")
    var npm = $("#npm").val()
    if (npm == "") {
        $("#lihat_npm").text("NPM MASIH KOSONG!")
    }else{
        $("#lihat_npm").text("")
    }

    var nama_mahasiswa = $("#nama_mahasiswa").val()
    if (nama_mahasiswa == "") {
        $("#lihat_nama_mahasiswa").text("Nama Mahasiswa masih kosong!")
    }else{
        $("#lihat_nama_mahasiswa").text("")
    }

    var tgl_lahir = $("#tgl_lahir").val()
    if (tgl_lahir == "") {
        $("#lihat_tgl_lahir").text("Tanggal Lahir masih kosong!")
    }else{
        $("#lihat_tgl_lahir").text("")
    }

   var jurusan = $("#jurusan").val()
   if (jurusan == "") {
        $("#lihat_jurusan").text("Jurusan Belum dipilih!")
   }else{
        $("#lihat_jurusan").text("")
   }

    var alamat = $("#alamat").val()
    if (alamat == "") {
        $("#lihat_alamat").text("Alamat belum di isi!")
    }else{
        $("#lihat_alamat").text("")
    }

    if (npm != "" && nama_mahasiswa != "" && tgl_lahir !="" && jurusan !="" && alamat !="") {
        $("#alert_berhasil").html(`
        <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>Holy guacamole!</strong> Data Berhasil Ditambahkan.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `)
    var tabel = document.getElementById("tabel_mahasiswa")
    var baris = tabel.insertRow(1)
    var kolom_npm = baris.insertCell(0)
    var kolom_mahasiswa = baris.insertCell(1)
    var kolom_tgl_lahir = baris.insertCell(2)
    var kolom_jurusan = baris.insertCell(3)
    var kolom_alamat = baris.insertCell(4)

    kolom_npm.innerHTML = npm
    kolom_mahasiswa.innerHTML = nama_mahasiswa
    kolom_tgl_lahir.innerHTML = tgl_lahir
    kolom_jurusan.innerHTML = jurusan
    kolom_alamat.innerHTML = alamat

    $("#npm").val("")
    $("#nama_mahasiswa").val("")
    $("#alamat").val("")
    }

})
</script>