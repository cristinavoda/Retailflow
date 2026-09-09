import { Search, Plus, MoreHorizontal } from 'lucide-react';

import products from '../data/products';

import { useState } from 'react';

import './Products.css';

function Products() {
  const [productList, setProductList] = useState(products);
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [openMenuId, setOpenMenuId] = useState(null);

  const [newProduct, setNewProduct] = useState({
    name: '',
    sku: '',
    category: '',
    price: '',
    stock: '',
  });

  const filteredProducts = productList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );  

   const handleInputChange = (event) => {
    const { name, value } = event.target;

    setNewProduct((currentProduct) => ({
      ...currentProduct,
      [name]: value,
    }));
  };
    const handleAddProduct = (event) => {
    event.preventDefault();

    const product = {
      id: Date.now(),
      name: newProduct.name.trim(),
      sku: newProduct.sku.trim(),
      category: newProduct.category.trim(),
      price: Number(newProduct.price),
      stock: Number(newProduct.stock),
    };

    setProductList((currentProducts) => [
      ...currentProducts,
      product,
    ]);

    setNewProduct({
      name: '',
      sku: '',
      category: '',
      price: '',
      stock: '',
    });

    setShowForm(false);
  };

  const handleEditProduct = (product) => {
  setEditingProduct(product);

  setNewProduct({
    name: product.name,
    sku: product.sku,
    category: product.category,
    price: product.price,
    stock: product.stock,
  });

  setShowForm(true);
};
const handleDeleteProduct = (productId) => {
  setProductList((currentProducts) =>
    currentProducts.filter((product) => product.id !== productId)
  );

  setOpenMenuId(null);
};


  return (
    <section className="products-page">

      {/* Header */}

      <div className="products-header">

        <div>
          <h1 className="page-title">Productos</h1>
          <p className="page-description">
            Gestión del catálogo y disponibilidad
          </p>
        </div>



       <button
  className="products-add-button"
  type="button"
  onClick={() => setShowForm(true)}
>
          <Plus size={17} strokeWidth={1.8} />
          <span>Nuevo producto</span>
        </button>

      </div>


      {/* Toolbar */}

      <div className="products-toolbar">

        <div className="products-search">

          <Search size={17} strokeWidth={1.7} />

         <input
  type="text"
  placeholder="Buscar productos..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>

        </div>

      </div>
{showForm && (
  <form
    className="product-form"
    onSubmit={handleAddProduct}
  >

    <div className="product-form-header">
      <div>
        <h2>Nuevo producto</h2>
        <p>Introduce los datos del producto.</p>
      </div>
    </div>


    <div className="product-form-grid">

      <div className="form-field">
        <label htmlFor="name">Nombre</label>

        <input
          id="name"
          name="name"
          type="text"
          value={newProduct.name}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="form-field">
        <label htmlFor="sku">SKU</label>

        <input
          id="sku"
          name="sku"
          type="text"
          value={newProduct.sku}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="form-field">
        <label htmlFor="category">Categoría</label>

        <input
          id="category"
          name="category"
          type="text"
          value={newProduct.category}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="form-field">
        <label htmlFor="price">Precio</label>

        <input
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          value={newProduct.price}
          onChange={handleInputChange}
          required
        />
      </div>


      <div className="form-field">
        <label htmlFor="stock">Stock inicial</label>

        <input
          id="stock"
          name="stock"
          type="number"
          min="0"
          value={newProduct.stock}
          onChange={handleInputChange}
          required
        />
      </div>

    </div>


    <div className="product-form-actions">

      <button
        className="product-cancel-button"
        type="button"
        onClick={() => setShowForm(false)}
      >
        Cancelar
      </button>

      <button
        className="product-save-button"
        type="submit"
      >
        Guardar
      </button>

    </div>

  </form>
)}



      {/* Products table */}

      <div className="products-table-wrapper">

        <table className="products-table">

          <thead>
            <tr>
              <th>Producto</th>
              <th>SKU</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

        {filteredProducts.map((product) => (    
              <tr key={product.id}>

                <td>
                  <div className="product-name">
                    {product.name}
                  </div>
                </td>

                <td>
                  <span className="product-sku">
                    {product.sku}
                  </span>
                </td>

                <td>
                  <span className="product-category">
                    {product.category}
                  </span>
                </td>

                <td>
                  <span className="product-price">
                    {product.price.toFixed(2).replace('.', ',')} €
                  </span>
                </td>

                <td>
                  <span
                    className={`product-stock ${
                      product.stock <= 10 ? 'low-stock' : ''
                    }`}
                  >
                    {product.stock}
                  </span>
                </td>
            <td className="product-actions">

  <button
    type="button"
    aria-label={`Acciones para ${product.name}`}
    onClick={() =>
      setOpenMenuId(
        openMenuId === product.id ? null : product.id
      )
    }
  >
    <MoreHorizontal
      size={18}
      strokeWidth={1.7}
    />
  </button>

  {openMenuId === product.id && (
    <div className="product-actions-menu">

      <button
        type="button"
        onClick={() => {
          handleEditProduct(product);
          setOpenMenuId(null);
        }}
      >
        Editar
      </button>

      <button
        type="button"
        className="delete-action"
        onClick={() => handleDeleteProduct(product.id)}
      >
        Eliminar
      </button>

    </div>
  )}

</td>
         
              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Products;