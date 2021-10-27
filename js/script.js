// event link klik
$('.page-scroll').on('click', function(e){
	

	// ambil isi href
	var tujuan = $(this).attr('href');
	// elemen bersangkutan
	var elemenTujuan = $(tujuan);

	// pindah scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top
	});

	
});