document.addEventListener("DOMContentLoaded", () => {
  // 1) Выбираем все DOM-элементы, с которыми будем взаимодействовать для создания интерактивности приложения.
  const taskInput = document.getElementById("taskInput");
  const addTaskBtn = document.getElementById("addTaskBtn");
  const taskList = document.getElementById("taskList");
  const allFilter = document.getElementById("allFilter");
  const completedFilter = document.getElementById("completedFilter");
  const incompleteFilter = document.getElementById("incompleteFilter");

  // 2) Инициализируем массив для хранения задач.
  let tasks = [];

  // 3) Вспомогательные функции

  // 3.1) Функция для добавления новой задачи.
  function addTask(taskText) {
    if (taskText.trim() === "") return;

    const task = {
      id: Date.now(), // Уникальный ID задачи для облегчения её отслеживания и управления.
      text: taskText,
      completed: false,
    };
    tasks.push(task); // Добавляем новую задачу в массив `tasks`.
    renderTasks(); // Обновляем отображение списка задач.
  }

  // 3.2) Функция для отображения задач с учетом фильтрации.
  function renderTasks(filter = "all") {
    taskList.innerHTML = ""; // Очищаем список задач перед отрисовкой.

    // 3.2.1) Фильтруем массив задач в зависимости от выбранного фильтра.
    const filteredTasks = tasks.filter((task) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed
    );

    // 3.2.2) Создаем элемент списка для каждой задачи из отфильтрованного массива.
    filteredTasks.forEach((task) => {
      const taskElement = document.createElement("li");
      taskElement.classList.add("task");
      if (task.completed) taskElement.classList.add("completed"); // Добавляем CSS-класс для выполнения стилизации завершенных задач.
      taskElement.innerText = task.text;

      // 3.2.3) Добавляем обработчик для переключения статуса выполнения задачи при клике.
      taskElement.addEventListener("click", () =>
        toggleTaskCompletion(task.id)
      );

      // 3.2.4) Создаем кнопку удаления для каждой задачи.
      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "&times;"; // Добавляем символ &times; для отображения крестика.

      // 3.2.5) Добавляем обработчик клика на кнопку удаления, чтобы можно было удалить задачу.
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Останавливаем распространение события, чтобы при нажатии на кнопку удаления задача не отмечалась как выполненная.
        deleteTask(task.id); // Удаляем задачу по её ID.
      });

      // 3.2.6) Добавляем кнопку удаления в элемент задачи.
      taskElement.appendChild(deleteBtn);

      // 3.2.7) Добавляем элемент задачи в список задач (родительский элемент `ul`).
      taskList.appendChild(taskElement);
    });
  }

  // 4) Функция для завершения задачи (переключение статуса выполнения).
  function toggleTaskCompletion(id) {
    const task = tasks.find((task) => task.id === id); // Находим задачу по её ID.
    if (task) {
      task.completed = !task.completed; // Переключаем статус выполнения задачи.
      renderTasks(); // Обновляем отображение задач.
    }
  }

  // 5) Функция для удаления задачи.
  function deleteTask(id) {
    tasks = tasks.filter((task) => task.id !== id); // Оставляем в массиве только задачи, ID которых не совпадает с ID удаляемой задачи.
    renderTasks(); // Обновляем отображение задач.
  }

  // 6) Обработчики фильтров для отображения всех задач, завершенных или незавершенных.
  allFilter.addEventListener("click", () => {
    renderTasks("all"); // Отображаем все задачи.
    setActiveFilter(allFilter); // Обновляем активный фильтр.
  });

  completedFilter.addEventListener("click", () => {
    renderTasks("completed"); // Отображаем только завершенные задачи.
    setActiveFilter(completedFilter);
  });

  incompleteFilter.addEventListener("click", () => {
    renderTasks("incomplete"); // Отображаем только незавершенные задачи.
    setActiveFilter(incompleteFilter);
  });

  // 7) Функция для обновления активного фильтра.
  function setActiveFilter(button) {
    [allFilter, completedFilter, incompleteFilter].forEach((btn) =>
      btn.classList.remove("active")
    ); // Убираем активный класс со всех фильтров.
    button.classList.add("active"); // Добавляем активный класс к выбранному фильтру.
  }

  // 8) Обработчик кнопки добавления задачи.
  addTaskBtn.addEventListener("click", () => {
    addTask(taskInput.value); // Добавляем задачу, используя значение из текстового поля.
    taskInput.value = ""; // Очищаем текстовое поле после добавления задачи.
  });

  // 9) Добавление задачи при нажатии Enter.
  taskInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      // Проверяем, была ли нажата клавиша Enter.
      addTask(taskInput.value); // Добавляем задачу.
      taskInput.value = ""; // Очищаем текстовое поле.
    }
  });

  // 10) Инициализация списка задач при загрузке страницы.
  renderTasks();
});
