from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ProductCreate(BaseModel):
    name: str
    sku: str
    price: float
    stock: int = 0
    category: str


class ProductResponse(ProductCreate):
    id: int
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
    

class ProductUpdate(BaseModel):
    name: str
    sku: str
    price: float
    stock: int
    category: str