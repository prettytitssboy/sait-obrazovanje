const courses = [
    {
        name: "Web-разработка",
        description: "HTML, CSS, JavaScript, React. Создание современных сайтов.",
        duration: "4 месяца"
    },
    {
        name: "Аналитика данных",
        description: "Python, SQL, визуализация данных, практические кейсы.",
        duration: "3.5 месяца"
    },
    {
        name: "Графический дизайн",
        description: "Figma, Illustrator, Photoshop. Работа с брендингом.",
        duration: "3 месяца"
    },
    {
        name: "Английский язык",
        description: "Разговорный английский. Группы от начального уровня.",
        duration: "6 месяцев"
    },
    {
        name: "Python для начинающих",
        description: "Основы Python, алгоритмы, первые проекты.",
        duration: "2.5 месяца"
    }
];

// Данные преподавателей (4 эксперта)
const teachers = [
    {
        name: "Анна Волкова",
        specialty: "Web-разработка",
        bio: "Опыт разработки 7 лет. Помогает студентам создавать реальные проекты."
    },
    {
        name: "Дмитрий Соколов",
        specialty: "Аналитика данных",
        bio: "Data Scientist. Научит работать с большими данными и делать выводы."
    },
    {
        name: "Елена Морозова",
        specialty: "Графический дизайн",
        bio: "Арт-директор. Обучает современным подходам к дизайну."
    },
    {
        name: "Игорь Белов",
        specialty: "Английский язык",
        bio: "Жил в Англии, преподает уже 8 лет. Разговорный клуб и грамматика."
    }
];

// Функция динамической загрузки карточек курсов
function loadCourses() {
    const container = document.getElementById('coursesList');
    if (!container) return;
    
    let html = '';
    for (let i = 0; i < courses.length; i++) {
        html += `
            <div class="course-card">
                <h3>${courses[i].name}</h3>
                <p>${courses[i].description}</p>
                <div class="course-info">
                    <span>длительность: ${courses[i].duration}</span>
                    <span>занятия: 1 раз / неделю</span>
                </div>
            </div>
        `;
    }
    container.innerHTML = html;
}

// Функция динамической загрузки карточек преподавателей
function loadTeachers() {
    const container = document.getElementById('teachersList');
    if (!container) return;
    
    let html = '';
    for (let i = 0; i < teachers.length; i++) {
        html += `
            <div class="teacher-card">
                <h3>${teachers[i].name}</h3>
                <div class="teacher-spec">${teachers[i].specialty}</div>
                <p>${teachers[i].bio}</p>
            </div>
        `;
    }
    container.innerHTML = html;
}

// Обработка формы записи: валидация + имитация отправки
function initForm() {
    const form = document.getElementById('registerForm');
    const messageDiv = document.getElementById('formMessage');
    if (!form) return;

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // отмена перезагрузки страницы

        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const course = document.getElementById('course').value;

        // Проверка заполнения обязательных полей
        if (name === '' || phone === '' || email === '') {
            messageDiv.style.color = '#c23d2e';
            messageDiv.innerHTML = 'Пожалуйста, заполните все поля';
            return;
        }

        // Простейшая проверка корректности email
        if (!email.includes('@') || !email.includes('.')) {
            messageDiv.style.color = '#c23d2e';
            messageDiv.innerHTML = 'Введите корректный email (пример: name@domain.ru)';
            return;
        }

        // Имитация отправки данных на сервер
        messageDiv.style.color = '#e26d2e';
        messageDiv.innerHTML = 'Отправка...';

        setTimeout(() => {
            messageDiv.style.color = '#2d7a5c';
            messageDiv.innerHTML = `${name}, спасибо! Заявка на курс "${course}" отправлена. Мы свяжемся с вами.`;
            form.reset();  // очищаем все поля формы
            // Автоматически скрываем сообщение через 5 секунд
            setTimeout(() => {
                if (messageDiv.innerHTML.includes('спасибо')) {
                    messageDiv.innerHTML = '';
                }
            }, 5000);
        }, 800);
    });
}

// Плавная прокрутка при клике на пункты меню и кнопки
function initSmoothScroll() {
    const links = document.querySelectorAll('nav a, .hero-buttons a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    }
}

// Запуск всех функций после полной загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    loadTeachers();
    initForm();
    initSmoothScroll();
});