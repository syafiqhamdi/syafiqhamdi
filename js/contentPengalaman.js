window.onload = function() {
    // Menampilkan pengalaman kerja secara default
    document.getElementById('kerjaKerja').style.display = 'block';
}

function showContent(id) {
    // Sembunyikan semua konten
    var contents = document.querySelectorAll('.contentPengalaman');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Tampilkan konten yang dipilih
    document.getElementById(id).style.display = 'block';
}

function showContent2(id) {
    // Sembunyikan semua konten
    var contents2 = document.querySelectorAll('.contentPengalaman2');
    contents2.forEach(function(content2) {
        content2.style.display = 'none';
    });

    // Tampilkan konten yang dipilih
    document.getElementById(id).style.display = 'block';
}
