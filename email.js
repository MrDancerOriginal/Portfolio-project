// emailjs.init("VEvE-Kfyaoa2iGq3W");

// document.getElementById("contactForm").addEventListener("submit", function (e) {
//   e.preventDefault();

//     const btn = this.querySelector('button[type="submit"]');
//   btn.disabled = true;
//   btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Відправка...';

//   console.log(this)

// //   emailjs
// //     .sendForm("service_miqf6df", "template_s260g6x", this)
// //     .then(() => {
// //         btn.innerHTML = 'Відправлено';
// //     })
// //     .catch(() => alert("Помилка, спробуйте ще раз"));
// });


// });

document.querySelectorAll('.toggle-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Видаляємо активний клас
    document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    
    // Ховаємо всі блоки контенту
    document.querySelectorAll('.contact-content').forEach(content => {
      content.classList.remove('active');
    });
    
    // Показуємо потрібний блок
    const targetId = this.dataset.target + 'Section';
    document.getElementById(targetId).classList.add('active');
  });
});