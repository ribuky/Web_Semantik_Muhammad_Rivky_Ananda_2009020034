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



// $("#simpan").click(function(){
//     var npm = $("#npm").val("")
//     if (npm == "") {
//         $("#isi-npm").text("NPM Masih Kosong")

//     }else{
//         $("isi-npm").text("")
//     }
//     var nama = $("#nama").val()
//     if (nama == "") {
//         $("#isi-nama").text("Nama Peserta Masih Kosong")

//     }else{
//         $("isi-nama").text("")
//     }    

//     var jurusan = $("#jurusan").val()
//     if (jurusan == "") {
//         $("#isi-jurusan").text("Jurusan Belum Dipilih")

//     }else{
//         $("isi_Jurusan").text("")
//     } 
//     var tanggal = $("#tanggal").val()
//     if (tanggal == "") {
//         $("#isi-tanggal").text("Tanggal Lahir Belum Dipilih")

//     }else{
//         $("isi-tanggal").text("")
//     }
//     if (npm != "" && nama != "" && jurusan != "" && tanggal != "" && alamat != "") {
//         $("#alert_berhasil").html(`
//         <div class="alert alert-success alert-dismissible fade show" role="alert">
//         <strong>Berhasil Disimpan</strong>Data Berhasil Di Tambahkan.
//         <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//         </div>`)

//         var tabel = document.getElementById("tabel_mahasiswa")
//         var baris = tabel.insertRow(-1)
//         var kolom_npm = baris.insertCell(0)
//         var kolom_mahasiswa = baris.insertCell(1)
//         var kolom_tgl_lahir = baris.insertCell(2)
//         var kolom_jurusan = baris.insertCell(3)
//         var kolom_alamat = baris.insertCell(4)
//     }            
// })




$("#simpan").click(function(){
    var npm = $("#npm").val();
    var nama = $("#nama").val();
    var tanggal = $("#tanggal").val();
    var alamat = $("#alamat").val();
    
  
  })
  
  
  // Mencari elemen form dan tabel
  var form = document.getElementById("form-data");
  var tabel = document.getElementById("tabel-data");
  
  // Menangani event submit pada form
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form untuk melakukan submit secara default
  
    // Mengambil nilai dari input
    var npm = document.getElementById("npm").value;
    var nama = document.getElementById("nama").value;
    var jurusan = document.getElementById("jurusan").value;
    var tanggal = document.getElementById("tanggal").value;
    var alamat = document.getElementById("alamat").value;
  
  
    // Memastikan nilai input tidak kosong
  
    if (npm == "") {
      $("#isi-npm").text("NPM tidak boleh kosong");
      document.getElementById("npm").value = "";
      return;
    }else if (nama == "") {
      $("#isi-nama").text("NAMA tidak boleh kosong");
      document.getElementById("nama").value = "";
      return;
    }else if (tanggal == "") {
      $("#isi-tanggal").text("TANGGAL tidak boleh kosong");
      document.getElementById("tanggal").value = "";
      return;
    }else if (alamat == "") {
      $("#isi-alamat").text("Isi Alatmatmu");
      document.getElementById("alamat").value = "";
      return;
    }else {
      alert("Data Berhasil Disimpan!");
    }
  

  
  
  
    // Membuat sebuah baris pada tabel dan menambahkan data ke dalam baris tersebut
    var row = tabel.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = npm;
    cell2.innerHTML = nama;
    cell3.innerHTML = jurusan;
    cell4.innerHTML = tanggal;
    cell5.innerHTML = alamat;
  
    // Membersihkan nilai dari input npm, nama, tanggal, alamat, jurusan
    document.getElementById("npm").value = "";
    document.getElementById("nama").value = "";
    document.getElementById("jurusan").value = "";
    document.getElementById("tanggal").value = "";
    document.getElementById("alamat").value = "";
  });


  