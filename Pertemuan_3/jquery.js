$("#simpan").click(function(){
    var npm = $("#npm").val()
    if (npm == "") {
        $("#lihat_npm").text("NPM Masih Kosong")

    }else{
        $("lihat_npm").text("")
    }
    var nama_peserta = $("#nama_peserta").val()
    if (nama_peserta == "") {
        $("#lihat_nama_peserta").text("Nama Peserta Masih Kosong")

    }else{
        $("lihat_nama_peserta").text("")
    }    

    var jurusan = $("#jurusan").val()
    if (jurusan == "") {
        $("#lihat_jurusan").text("Jurusan Belum Dipilih")

    }else{
        $("lihat_Jurusan").text("")
    } 
    var tanggal_lahir = $("#tanggal_lahir").val()
    if (tanggal_lahir == "") {
        $("#lihat_tanggal_lahir").text("Tanggal Lahir Belum Dipilih")

    }else{
        $("lihat_tanggal_lahir").text("")
    }
    if (npm != "" && nama_peserta != "" && jurusan != "" && tanggal_lahir != "") {
        $("#alert_berhasil").html(`
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Horeeee</strong> Data berhasil di tambahkan.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>`)
    }            
})