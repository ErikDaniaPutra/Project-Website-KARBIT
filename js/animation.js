// Tunggu sampai halaman selesai dimuat
window.addEventListener('load', () => {
    // Pilih elemen navbar
    const navbar = document.querySelector('.navbar');
  
    // Tambahkan kelas "visible" setelah delay (100ms)
    setTimeout(() => {
      navbar.classList.add('navbar-visible');
    }, 100); // Ubah waktu delay jika perlu
});


document.addEventListener("DOMContentLoaded", function() {
  setTimeout(() => {
      document.querySelector(".hero").classList.add("show");
  }, 300); // Delay awal sebelum animasi dimulai
});



// Animasi
const hiddenElements = document.querySelectorAll('.home-content');

// Buat observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Tambahkan kelas 'visible' saat elemen terlihat
      entry.target.classList.add('visible');
      // Hapus observer agar tidak terpicu lagi
      observer.unobserve(entry.target);
    }
  });
});

// Pasang observer ke setiap elemen
hiddenElements.forEach((el) => observer.observe(el));