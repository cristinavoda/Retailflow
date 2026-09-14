from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.products import router as products_router


app = FastAPI(
    title="RetailFlow API",
    version="1.0.0",
    description="Backend API for RetailFlow POS"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(products_router)


@app.get("/")
def root():
    return {
        "message": "RetailFlow API running",
        "status": "ok"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }