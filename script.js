document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. SMOOTH SCROLL (NAVIGASI) ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // --- 2. ANIMASI FADE IN SAAT SCROLL ---
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .feature-card');
    animatedElements.forEach(el => observer.observe(el));


    // --- 3. LOGIKA POPUP QR CODE (BARU DITAMBAHKAN) ---
    
    // Ambil elemen dari HTML
    const modal = document.getElementById("qrModal");
    const btn = document.getElementById("qrBtn");
    const closeSpan = document.querySelector(".close-btn");

    // Pastikan tombol ada sebelum menjalankan logika (biar ga error)
    if(btn) {
        // A. Buka Modal saat tombol diklik
        btn.addEventListener('click', function(e) {
            e.preventDefault(); // Mencegah link scroll ke atas
            modal.classList.add("show"); // Tambahkan class 'show' (CSS: opacity 1)
        });

        // B. Tutup Modal saat tombol X diklik
        closeSpan.addEventListener('click', function() {
            modal.classList.remove("show");
        });

        // C. Tutup Modal saat user klik di area gelap (luar kotak putih)
        window.addEventListener('click', function(event) {
            if (event.target == modal) {
                modal.classList.remove("show");
            }
        });
    }

});