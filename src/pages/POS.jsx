import { useState } from 'react';
import {
  Search,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  Banknote,
} from 'lucide-react';

import products from '../data/products';

import './POS.css';

const categories = [
  'Todos',
  'Bebidas',
  'Alimentación',
  'Lácteos',
  'Panadería',
];

function POS() {

  const [ticketItems, setTicketItems] = useState([
    {
      ...products[0],
      quantity: 2,
    },
    {
      ...products[1],
      quantity: 1,
    },
  ]);


  const addToTicket = (product) => {
    setTicketItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };


  const increaseQuantity = (productId) => {
    setTicketItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };


  const decreaseQuantity = (productId) => {
    setTicketItems((currentItems) =>
      currentItems
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };


  const removeFromTicket = (productId) => {
    setTicketItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  };

  const clearTicket = () => {
  setTicketItems([]);
};

  const subtotal = ticketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discount = 0;

  const total = subtotal - discount;


  

  return (
    <section className="pos-page">

      <div className="pos-header">
        <div>
          <h1 className="page-title">POS</h1>
          <p className="page-description">
            Punto de venta
          </p>
        </div>

        <div className="pos-sale-number">
          Venta <strong>#RF-1052</strong>
        </div>
      </div>


      <div className="pos-layout">

        

        <section className="pos-products">

          <div className="pos-search">
            <Search size={18} strokeWidth={1.7} />

            <input
              type="text"
              placeholder="Buscar producto o SKU..."
            />
          </div>


          <div className="pos-categories">

            {categories.map((category, index) => (
              <button
                key={category}
                className={`pos-category ${
                  index === 0 ? 'active' : ''
                }`}
              >
                {category}
              </button>
            ))}

          </div>


          <div className="product-grid">

            {products.map((product) => (

             <button
  className="product-item"
  key={product.id}
  type="button"
  onClick={() => addToTicket(product)}> 

                <div className="product-item-top">
                  <span className="product-category">
                    {product.category}
                  </span>

                  <span className="product-stock">
                    {product.stock} uds.
                  </span>
                </div>

                <div className="product-name">
                  {product.name}
                </div>

                <div className="product-item-bottom">

                  <span className="product-sku">
                    {product.sku}
                  </span>

                  <span className="product-price">
                    {product.price.toFixed(2)} €
                  </span>

                </div>

              </button>

            ))}

          </div>

        </section>


      

        <aside className="pos-ticket">

          <div className="ticket-header">

            <div>
              <span className="ticket-label">TICKET</span>
              <h2>Venta #RF-1052</h2>
            </div>

           <button
  className="ticket-clear"
  type="button"
  onClick={clearTicket}
>
  Vaciar
</button> 

          </div>


          <div className="ticket-items">

{ticketItems.map((item) => (
  <div className="ticket-item" key={item.id}>

    <div className="ticket-item-info">

      <span className="ticket-item-name">
        {item.name}
      </span>

      <span className="ticket-item-price">
        {item.price.toFixed(2).replace('.', ',')} € / ud.
      </span>

      <span>{item.quantity}</span>

    </div>


    <div className="ticket-item-actions">
<button
  type="button"
  onClick={() => decreaseQuantity(item.id)}
>
  <Minus size={14} />
</button>


<button
  type="button"
  onClick={() => increaseQuantity(item.id)}
>
  <Plus size={14} />
</button>

    <button
  className="remove-item"
  type="button"
  onClick={() => removeFromTicket(item.id)}
>
  <Trash2 size={15} />
</button>
    </div>

  </div>
))}
           
          </div>

<div className="ticket-summary">

  <div>
    <span>Subtotal</span>
    <strong>{subtotal.toFixed(2).replace('.', ',')} €</strong>
  </div>

  <div>
    <span>Descuento</span>
    <strong>{discount.toFixed(2).replace('.', ',')} €</strong>
  </div>

  <div className="ticket-total">
    <span>Total</span>
    <strong>{total.toFixed(2).replace('.', ',')} €</strong>
  </div>

</div>

          <div className="payment-section">

            <span className="payment-label">
              MÉTODO DE PAGO
            </span>

            <div className="payment-methods">

              <button
                className="payment-method active"
                type="button"
              >
                <CreditCard size={18} />
                Tarjeta
              </button>

              <button
                className="payment-method"
                type="button"
              >
                <Banknote size={18} />
                Efectivo
              </button>

            </div>


            <button
              className="checkout-button"
              type="button"
            >
              Cobrar
            </button>

          </div>

        </aside>

      </div>

    </section>
  );

}
export default POS;