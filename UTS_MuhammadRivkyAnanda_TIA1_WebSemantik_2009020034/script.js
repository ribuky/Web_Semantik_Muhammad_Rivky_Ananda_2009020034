$(".hasil-pembelian").hide();

$("#pay").click(function () {
  console.log("Ok");
  var nama_produk = $("#nama_produk").val();
  if (nama_produk == "") {
    $("#lihat_nama").text("Nama Produk Masih Kosong!");
  } else {
    $("#lihat_nama").text("");
  }

  var harga_produk = $("#harga_produk").val();
  if (harga_produk == "") {
    $("#lihat_harga").text("Harga Produk Masih Kosong!");
  } else {
    $("#lihat_harga").text("");
  }

  var qty_produk = $("#qty_produk").val();
  if (qty_produk == "") {
    $("#lihat_qty").text("Qty Produk Masih Kosong!");
  } else {
    $("#lihat_qty").text("");
  }

  var jumlah_bayar = $("#jumlah_bayar").val();
  if (jumlah_bayar == "") {
    $("#lihat_jumlah").text("Jumlah Bayar Tidak Boleh Kosong!");
  } else {
    $("#lihat_jumlah").text("");
  }

  if (nama_produk != "" && harga_produk != "" && qty_produk != "" && jumlah_bayar != "") {
    var total_bayar = harga_produk * qty_produk;
    if (jumlah_bayar < total_bayar) {
      $("#jumlah_kurang").text("Jumlah Bayar Tidak Mencukupi!");
      $("#alert_berhasil").empty(); 
      $(".hasil-pembelian").hide(); 
    } else {
      var kembalian = jumlah_bayar - total_bayar;
      $("#jumlah_kurang").text("");
      $("#alert_berhasil").html(`
          <div class="alert alert-success alert-dismissible fade show" role="alert">
          <strong>Successfully!</strong> Terimakasih telah melakukan pembelian.
          Jumlah Kembalian: ${kembalian}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `);

      
      $("#hasil_nama_produk").text(nama_produk);
      $("#hasil_harga_produk").text(harga_produk);
      $("#hasil_qty_produk").text(qty_produk);
      $("#hasil_total_bayar").text(total_bayar);
      $("#hasil_jumlah_bayar").text(jumlah_bayar);
      $("#hasil_jumlah_kembalian").text(kembalian);
      $(".hasil-pembelian").show(); 
    }
  }
});

// $("button.btn-warning").click(function () {
//   $("#nama_produk").val(""); 
//   $("#harga_produk").val(""); 
//   $("#qty_produk").val(""); 
//   $("#jumlah_bayar").val(""); 
//   $("#lihat_nama").text(""); 
//   $("#lihat_harga").text(""); 
//   $("#lihat_qty").text(""); 
//   $("#lihat_jumlah").text(""); 
//   $("#jumlah_kurang").text(""); 
//   $("#alert_berhasil").empty(); 
//   $(".hasil-pembelian").hide(); 
// });

$("#clear").click(function (){
  location.reload();
})
