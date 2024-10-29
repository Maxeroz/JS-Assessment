// 1) Выбор всех необходимых элементов.
const carouselImages = document.querySelectorAll(".carousel-image");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

// 2) Все непобходимые переменные для создания интерактивности.
let currentIndex = 0;
const totalImages = carouselImages.length;
let intervalId;

// 3) Helper функции.

// 3.1) Функция для отображения текущего изображения.
function showImage(index) {
  carouselImages.forEach((img) => {
    img.style.transform = `translateX(-${index * 100}%)`;
  });
}

// 3.2) Функция для перехода к следующему изображению.
function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
}

// 3.3) Функция для перехода к предыдущему изображению.
function prevImage() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
}

// 4) Обработичики событий.

// 4.1) Обработчик для кнопки "Вперед".
nextBtn.addEventListener("click", () => {
  nextImage();
  resetCarouselInterval();
});

// 4.2) Обработчик для кнопки "Назад".
prevBtn.addEventListener("click", () => {
  prevImage();
  resetCarouselInterval();
});

// 5) Устанавливаем автоматическую смену изображений каждые 3 секунды.
function startCarousel() {
  intervalId = setInterval(nextImage, 3000);
}

// 6) Сброс интервала для предотвращения быстрого перелистывания после нажатия кнопки.
function resetCarouselInterval() {
  clearInterval(intervalId);
  startCarousel();
}

// 7) Инициализация карусели.
showImage(currentIndex);
startCarousel();
