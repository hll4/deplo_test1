# Мой Первый Сайт

Простой и красивый одностраничный сайт с современным дизайном, созданный для демонстрации и деплоя.

## Особенности

- 🎨 Современный и отзывчивый дизайн
- 📱 Адаптивная верстка для всех устройств
- ✨ Плавные анимации и переходы
- 🧭 Интерактивная навигация
- 📝 Контактная форма
- 🚀 Готов к деплою

## Структура проекта

```
├── index.html          # Основная HTML страница
├── styles.css          # CSS стили
├── script.js           # JavaScript функциональность
└── README.md           # Документация
```

## Как запустить локально

1. Скачайте все файлы проекта
2. Откройте `index.html` в любом современном браузере
3. Или используйте локальный сервер:
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (если установлен)
   npx serve .
   ```

## Варианты деплоя

### 1. GitHub Pages (Бесплатно)
1. Создайте репозиторий на GitHub
2. Загрузите файлы проекта
3. Перейдите в Settings → Pages
4. Выберите источник: "Deploy from a branch"
5. Выберите ветку `main` и папку `/ (root)`
6. Сайт будет доступен по адресу: `https://username.github.io/repository-name`

### 2. Netlify (Бесплатно)
1. Зарегистрируйтесь на [netlify.com](https://netlify.com)
2. Перетащите папку с проектом в область деплоя
3. Или подключите GitHub репозиторий
4. Сайт будет автоматически задеплоен

### 3. Vercel (Бесплатно)
1. Зарегистрируйтесь на [vercel.com](https://vercel.com)
2. Подключите GitHub репозиторий
3. Vercel автоматически определит статический сайт
4. Нажмите "Deploy"

### 4. Firebase Hosting (Бесплатно)
1. Установите Firebase CLI: `npm install -g firebase-tools`
2. Войдите в аккаунт: `firebase login`
3. Инициализируйте проект: `firebase init hosting`
4. Укажите папку `public` и файл `index.html`
5. Деплой: `firebase deploy`

### 5. Surge.sh (Бесплатно)
1. Установите Surge: `npm install -g surge`
2. В папке проекта выполните: `surge`
3. Следуйте инструкциям для создания аккаунта
4. Сайт будет доступен по адресу вида: `project-name.surge.sh`

## Настройка для деплоя

Сайт готов к деплою без дополнительных настроек. Все файлы оптимизированы и не требуют сборки.

## Технологии

- HTML5
- CSS3 (с Flexbox и Grid)
- Vanilla JavaScript (ES6+)
- Google Fonts (Inter)
- CSS Animations

## Лицензия

MIT License - используйте свободно для любых целей.

---

**Удачи с деплоем! 🚀**