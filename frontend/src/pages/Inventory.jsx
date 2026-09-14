import { Package, AlertTriangle, XCircle } from 'lucide-react';

import products from '../data/products';

import './Inventory.css';

function Inventory() {
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const lowStockProducts = products.filter(
    (product) => product.stock > 0 && product.stock <= 10
  );

  const outOfStockProducts = products.filter(
    (product) => product.stock === 0
  );

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return {
        label: 'Agotado',
        className: 'status-out',
      };
    }

    if (stock <= 10) {
      return {
        label: 'Stock bajo',
        className: 'status-low',
      };
    }

    return {
      label: 'Disponible',
      className: 'status-ok',
    };
  };

  return (
    <section className="inventory-page">

      {/* HEADER */}

      <header className="inventory-header">

        <div>
          <h1 className="page-title">
            Inventario
          </h1>

          <p className="page-description">
            Control de stock y disponibilidad
          </p>
        </div>

      </header>


      {/* METRICS */}

      <section className="inventory-metrics">

        <div className="inventory-metric">

          <div className="inventory-metric-icon">
            <Package size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Stock total
            </span>

            <strong className="metric-value">
              {totalStock}
            </strong>
          </div>

        </div>


        <div className="inventory-metric">

          <div className="inventory-metric-icon">
            <Package size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Productos
            </span>

            <strong className="metric-value">
              {products.length}
            </strong>
          </div>

        </div>


        <div className="inventory-metric inventory-metric-warning">

          <div className="inventory-metric-icon">
            <AlertTriangle size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Stock bajo
            </span>

            <strong className="metric-value">
              {lowStockProducts.length}
            </strong>
          </div>

        </div>


        <div className="inventory-metric inventory-metric-danger">

          <div className="inventory-metric-icon">
            <XCircle size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Agotados
            </span>

            <strong className="metric-value">
              {outOfStockProducts.length}
            </strong>
          </div>

        </div>

      </section>


      {/* STOCK ALERT */}

      {lowStockProducts.length > 0 && (
        <section className="inventory-alert">

          <div className="inventory-alert-icon">
            <AlertTriangle size={19} strokeWidth={1.7} />
          </div>

          <div>
            <strong>
              Incidencias de stock
            </strong>

            <p>
              {lowStockProducts.length} productos necesitan revisión.
            </p>
          </div>

        </section>
      )}


      {/* TABLE */}

      <section className="inventory-table-section">

        <div className="inventory-section-header">

          <div>
            <h2>
              Estado del inventario
            </h2>

            <p>
              Disponibilidad actual de los productos
            </p>
          </div>

        </div>


        <div className="inventory-table-wrapper">

          <table className="inventory-table">

            <thead>
              <tr>
                <th>Producto</th>
                <th>SKU</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Estado</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => {

                const status = getStockStatus(product.stock);

                return (
                  <tr key={product.id}>

                    <td>
                      <span className="inventory-product-name">
                        {product.name}
                      </span>
                    </td>

                    <td>
                      <span className="inventory-sku">
                        {product.sku}
                      </span>
                    </td>

                    <td>
                      <span className="inventory-category">
                        {product.category}
                      </span>
                    </td>

                    <td>
                      <strong
                        className={
                          product.stock <= 10
                            ? 'inventory-stock inventory-stock-low'
                            : 'inventory-stock'
                        }
                      >
                        {product.stock}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={`inventory-status ${status.className}`}
                      >
                        <span className="inventory-status-dot" />
                        {status.label}
                      </span>
                    </td>

                  </tr>
                );
              })}

            </tbody>

          </table>

        </div>

      </section>

    </section>
  );
}

export default Inventory;