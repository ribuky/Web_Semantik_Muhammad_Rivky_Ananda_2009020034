$("#halaman_body").load("beranda.php")

$(".halaman").click(function(){
    var halaman = $(this).attr("halaman")
    if (halaman == "beranda") {
        $("#halaman_body").load("beranda.php")
    }else if (halaman == "mahasiswa") {
        $("#halaman_body").load("mahasiswa.php")
    }else if (halaman == "prodi") {
        $("#halaman_body").load("prodi.php")
    }
})