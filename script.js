// Плавная прокрутка для навигации
document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для ссылок навигации
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Обработка формы контактов
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Получаем данные формы
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Простая валидация
            if (!name || !email || !message) {
                alert('Пожалуйста, заполните все поля!');
                return;
            }
            
            // Имитация отправки формы
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Отправляется...';
            submitButton.disabled = true;
            
            // Имитация задержки
            setTimeout(() => {
                alert('Спасибо! Ваше сообщение отправлено. Мы свяжемся с вами в ближайшее время.');
                
                // Сброс формы
                this.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        });
    }

    // Анимация появления элементов при прокрутке
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Наблюдаем за карточками и секциями
    const animatedElements = document.querySelectorAll('.about-card, .service-card, .section');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Обработка кнопки CTA
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = aboutSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Добавление активного класса для навигации
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-menu a');

    window.addEventListener('scroll', function() {
        let current = '';
        const headerHeight = document.querySelector('.header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // Добавление стилей для активного состояния навигации
    const style = document.createElement('style');
    style.textContent = `
        .nav-menu a.active {
            color: #f0f0f0 !important;
            font-weight: 600;
            position: relative;
        }
        
        .nav-menu a.active::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #f0f0f0;
            border-radius: 1px;
        }
    `;
    document.head.appendChild(style);

    // Консольное сообщение
    console.log('🚀 Сайт успешно загружен! Добро пожаловать!');
}); 