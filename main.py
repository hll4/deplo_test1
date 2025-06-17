from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI(title="Freelance Exchange API", version="1.0.0")

@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Freelance Exchange API</title>
        <style>
            body { font-family: Arial, sans-serif; margin: 40px; }
            .container { max-width: 800px; margin: 0 auto; }
            .status { color: green; font-weight: bold; }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Freelance Exchange API</h1>
            <p class="status">✅ Сервер успешно запущен через GitHub Actions!</p>
            <p>Это тестовая страница для проверки деплоя FastAPI на VPS.</p>
            <h2>Доступные эндпоинты:</h2>
            <ul>
                <li><a href="/docs">📚 API документация (Swagger)</a></li>
                <li><a href="/health">💚 Проверка здоровья сервера</a></li>
                <li><a href="/api/v1/jobs">💼 Список вакансий (пока пустой)</a></li>
            </ul>
        </div>
    </body>
    </html>
    """

@app.get("/health")
async def health_check():
    return {"status": "healthy", "message": "Сервер работает!"}

@app.get("/api/v1/jobs")
async def get_jobs():
    return {
        "jobs": [],
        "message": "База данных пока не настроена. Это тестовый эндпоинт."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80) 