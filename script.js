// Ініціалізація AOS
AOS.init({
    duration: 800,
    once: true,
  });

  
  // GSAP анімації
  gsap.from(".hero-content h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
  });

  gsap.from(".hero-content p", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.6,
  });

  gsap.from(".hero-btns", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.9,
  });

  // Мобільне меню
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    navLinks.classList.toggle("active");
  });

  $('.testimonials-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    image: {
      titleSrc: 'title'
    }
  });

  // Закриття меню при кліку на посилання
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      navLinks.classList.remove("active");
    });
  });

  // Фіксація хедера при скролі
  window.addEventListener("scroll", () => {
    const header = document.getElementById("header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Плавний скрол
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Темна/світла тема
  const themeSwitch = document.getElementById("themeSwitch");
  const body = document.body;

  // Перевірка системних налаштувань
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    body.classList.add("light-mode");
    themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
  }

  themeSwitch.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    if (body.classList.contains("light-mode")) {
      themeSwitch.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
      themeSwitch.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });

  // GitHub API
  fetch("https://api.github.com/users/MrDancerOriginal")
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      document.getElementById("repos").textContent = data.public_repos;
      document.getElementById("followers").textContent = data.followers;
    });

  // Приклад для комітів (потрібен власний бекенд або GitHub API для конкретного репозиторію)
  // document.getElementById('commits').textContent = '142';
  // document.getElementById('stars').textContent = '56';

  // Анімація кнопки відправки форми
  const contactForm = document.getElementById("contactForm");
  const submitBtn = contactForm.querySelector(".submit-btn");

  // contactForm.addEventListener("submit", function (e) {
  //   e.preventDefault();

  //   const btnText = submitBtn.querySelector(".btn-text");
  //   btnText.textContent = "Відправляється...";
  //   submitBtn.querySelector("i").classList.add("fa-spin");

  //   // Імітація відправки форми
  //   setTimeout(() => {
  //     btnText.textContent = "Відправлено!";
  //     submitBtn.querySelector("i").classList.remove("fa-spin");
  //     submitBtn.querySelector("i").classList.add("fa-check");
  //     submitBtn.disabled = true;

  //     // Повернення до початкового стану через 3 секунди
  //     setTimeout(() => {
  //       btnText.textContent = "Надіслати";
  //       submitBtn.querySelector("i").classList.remove("fa-check");
  //       submitBtn.querySelector("i").classList.add("fa-paper-plane");
  //       submitBtn.disabled = false;
  //       contactForm.reset();
  //     }, 3000);
  //   }, 1500);
  // });

  // Анімація хвиль на фото в "Про мене"
  const aboutPhoto = document.querySelector(".about-photo");
  const waveEffect = document.createElement("div");
  waveEffect.className = "wave-effect";
  aboutPhoto.appendChild(waveEffect);

  aboutPhoto.addEventListener("mouseenter", () => {
    gsap.to(waveEffect, {
      scale: 1.5,
      opacity: 0,
      duration: 2,
      ease: "power2.out",
    });
  });

  aboutPhoto.addEventListener("mouseleave", () => {
    gsap.set(waveEffect, {
      scale: 0.8,
      opacity: 1,
    });
  });

  // Паралакс ефект для герой секції
  window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    const heroSection = document.querySelector(".hero");
    heroSection.style.backgroundPositionY = scrollPosition * 0.5 + "px";
  });

  // Ініціалізація GitHub календаря активності (потрібен власний бекенд)
  // fetch('https://github-contributions-api.deno.dev/yourusername.json')
  //     .then(response => response.json())
  //     .then(data => {
  //         // Обробка даних для відображення календаря
  //     });

// Функція для відкриття модального вікна з відео
function openVideoModal(event) {
  // Отримуємо елемент відео, на який клікнули
  const videoElement = event.currentTarget.querySelector('video');
  console.log(event)
  // Отримуємо source з відео елемента
  const sourceElement = videoElement.querySelector('source');
  const videoSrc = sourceElement.src;
  const videoType = sourceElement.type;

  // Налаштовуємо модальне відео
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  
  // Очищаємо попередні джерела
  while(modalVideo.firstChild) {
    modalVideo.removeChild(modalVideo.firstChild);
  }
  
  // Додаємо нове джерело
  const newSource = document.createElement('source');
  newSource.src = videoSrc;
  newSource.type = videoType;
  modalVideo.appendChild(newSource);
  
  // Завантажуємо та відтворюємо відео
  modalVideo.load();
  modal.style.display = 'block';
  
  // Спроба відтворення (може бути заблокована політиками браузера)
  modalVideo.play().catch(e => console.error("Відтворення не вдалося:", e));
}

// Функція для закриття модального вікна
function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const modalVideo = document.getElementById('modalVideo');
  
  modalVideo.pause();
  modal.style.display = 'none';
}

// Додаємо обробники подій до всіх елементів портфоліо з відео
document.addEventListener('DOMContentLoaded', function() {
  let videoItems = document.querySelectorAll('.portfolio-item');
  const videoWebItems = document.querySelectorAll('.project-media');
  videoItems = [...videoItems, ...videoWebItems];

  
  videoItems.forEach(item => {
    // Перевіряємо, чи є у елементі відео
    if (item.querySelector('video')) {
      item.addEventListener('click', openVideoModal);
      
      // Автовідтворення прев'ю при наведенні
      const video = item.querySelector('video');
      item.addEventListener('mouseenter', () => video.play());
      item.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    }
  });
  
  // Закриття модального вікна при кліку поза ним
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('videoModal');
    if (event.target === modal) {
      closeVideoModal();
    }
  });
});
