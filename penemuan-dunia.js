```javascript
function tampilkanLokasi() {
    const hasil = document.getElementById("hasil");

    if (navigator.geolocation) {
        hasil.innerHTML = "Sedang mencari lokasi Anda...";

        navigator.geolocation.getCurrentPosition(
            function(posisi) {
                const lintang = posisi.coords.latitude;
                const bujur = posisi.coords.longitude;

                hasil.innerHTML =
                    "Lokasi berhasil ditemukan!<br>" +
                    "Garis Lintang: " + lintang + "<br>" +
                    "Garis Bujur: " + bujur;
            },
            function() {
                hasil.textContent =
                    "Lokasi tidak dapat ditemukan. Silakan izinkan akses lokasi.";
            }
        );
    } else {
        hasil.textContent =
            "Browser Anda tidak mendukung fitur lokasi.";
    }
}
```