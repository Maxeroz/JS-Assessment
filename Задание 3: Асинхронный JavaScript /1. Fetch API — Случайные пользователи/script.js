// Асинхронная функция для получения случайных пользователей.
async function fetchRandomUsers() {
  const loadingText = document.getElementById("loading");
  const errorText = document.getElementById("error");
  const userList = document.getElementById("userList");

  // 1) Отображаем индикатор загрузки и скрываем сообщение об ошибке перед выполнением запроса.
  loadingText.style.display = "block";
  errorText.style.display = "none";

  try {
    // 2) Делаем запрос к API для получения 10 случайных пользователей.
    const response = await fetch("https://randomuser.me/api/?results=10");

    // 3) Проверяем, успешен ли ответ от сервера.
    if (!response.ok) {
      throw new Error("Ошибка сети");
    }

    const data = await response.json();

    // 4) Скрываем индикатор загрузки после получения данных.
    loadingText.style.display = "none";

    // 5) Перебираем массив полученных пользователей и добавляем каждый в список.
    data.results.forEach((user) => {
      // 5.1) Создаем элемент списка (li) для каждого пользователя.
      const listItem = document.createElement("li");

      // 5.2) Создаем элемент изображения профиля и добавляем его в элемент списка.
      const profileImage = document.createElement("img");
      profileImage.src = user.picture.thumbnail;
      profileImage.alt = `${user.name.first} ${user.name.last}`;

      // 5.3) Создаем элемент span для отображения имени и email пользователя.
      const userInfo = document.createElement("span");
      userInfo.textContent = `${user.name.first} ${user.name.last} - ${user.email}`;

      // 5.4) Добавляем изображение и информацию о пользователе в элемент списка.
      listItem.appendChild(profileImage);
      listItem.appendChild(userInfo);

      // 5.5) Добавляем элемент списка в ul с id "userList".
      userList.appendChild(listItem);
    });
  } catch (error) {
    // 6) Если произошла ошибка, скрываем индикатор загрузки и показываем сообщение об ошибке.
    loadingText.style.display = "none";
    errorText.style.display = "block";
    console.error("Ошибка при получении пользователей:", error);
  }
}

// 7) Запускаем функцию при загрузке страницы.
fetchRandomUsers();
