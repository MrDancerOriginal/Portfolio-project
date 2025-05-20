// Функція для завантаження відгуків
function loadTestimonials() {
  const gallery = document.querySelector('.testimonials-gallery');
  
  // Очищаємо контейнер перед завантаженням
  gallery.innerHTML = '';
  
  // Масив з іменами файлів відгуків (можна отримувати і з сервера)
  const testimonials = [
    'feedback1.jpg',
    'feedback2.jpg',
    'feedback3.jpg',
    'feedback4.jpg',
    'feedback5.jpg',
    'feedback6.jpg',
    'feedback7.jpg',
    'feedback8.jpg',
    'feedback9.jpg',
    'feedback10.jpg',
    'feedback11.jpg',
  ];
  
  // Створюємо елементи для кожного відгуку
  testimonials.forEach((img, index) => {
    const testimonialItem = document.createElement('a');
    testimonialItem.href = `assets/images/feedbacks/${img}`;
    testimonialItem.className = 'testimonial-item';
    
    const imgElement = document.createElement('img');
    imgElement.src = `assets/images/feedbacks/${img}`;
    imgElement.alt = `Відгук клієнта ${index + 1}`;
    imgElement.className = 'testimonial-img';
    
    const overlay = document.createElement('div');
    overlay.className = 'testimonial-overlay';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-search-plus';
    
    overlay.appendChild(icon);
    testimonialItem.appendChild(imgElement);
    testimonialItem.appendChild(overlay);
    gallery.appendChild(testimonialItem);
  });
  
  // Ініціалізуємо Magnific Popup для нових елементів
  $('.testimonials-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
}

// Викликаємо функцію після завантаження DOM
document.addEventListener('DOMContentLoaded', loadTestimonials);