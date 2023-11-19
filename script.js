function cekKelayakan() {
    var form = document.getElementById('jabatanForm');
    var hasilTesDiv = document.getElementById('hasilTes');

    // Ambil nilai dari form
    var nilaiPemerintahan = parseInt(form.elements['nilaiPemerintahan'].value);
    var nilaiAgama = parseInt(form.elements['nilaiAgama'].value);
    var nilaiUmum = parseInt(form.elements['nilaiUmum'].value);
    var nilaiIndonesia = parseInt(form.elements['nilaiIndonesia'].value);
    var nilaiKomputer = parseInt(form.elements['nilaiKomputer'].value);
    var nilaiPraktek = parseInt(form.elements['nilaiPraktek'].value);

    // Hitung rata-rata nilai
    var rataRataNilai = (nilaiPemerintahan + nilaiAgama + nilaiUmum + nilaiIndonesia + nilaiKomputer + nilaiPraktek) / 6;

    // Ambil jabatan yang dilamar
    var jabatanDilamar = form.elements['jabatan'].value;

    // Evaluasi kelayakan berdasarkan jabatan
    var hasilTes;
    if (jabatanDilamar === 'Sekretaris Desa') {
        hasilTes = rataRataNilai >= 75;
    } else if (jabatanDilamar === 'Kepala Dusun') {
        hasilTes = rataRataNilai >= 80;
    } else if (jabatanDilamar === 'Perangkat Desa') {
        hasilTes = rataRataNilai >= 70;
    }

    // Tampilkan hasil tes
    if (hasilTes) {
        hasilTesDiv.innerHTML = '<p>Memenuhi Syarat Menjadi ' + jabatanDilamar + '.</p>';
        hasilTesDiv.style.color = '#4caf50'; // warna hijau
    } else {
        hasilTesDiv.innerHTML = '<p>Tidak Layak Menjabat Menjadi ' + jabatanDilamar + '.</p>';
        hasilTesDiv.style.color = '#f44336'; // warna merah
    }
}
