from sqlalchemy.orm import Session

from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate


def create_product(db: Session, product_data: ProductCreate) -> Product:
    product = Product(
        name=product_data.name,
        sku=product_data.sku,
        price=product_data.price,
        stock=product_data.stock,
        category=product_data.category,
    )

    db.add(product)
    db.commit()
    db.refresh(product)

    return product


def get_products(db: Session) -> list[Product]:
    return db.query(Product).all()


def get_product(db: Session, product_id: int) -> Product | None:
    return db.get(Product, product_id)

def update_product(
    db: Session,
    product_id: int,
    product_data: ProductUpdate
) -> Product | None:

    product = db.get(Product, product_id)

    if product is None:
        return None

    product.name = product_data.name
    product.sku = product_data.sku
    product.price = product_data.price
    product.stock = product_data.stock
    product.category = product_data.category

    db.commit()
    db.refresh(product)

    return product


def delete_product(db: Session, product_id: int) -> bool:
    product = db.get(Product, product_id)

    if product is None:
        return False

    db.delete(product)
    db.commit()

    return True