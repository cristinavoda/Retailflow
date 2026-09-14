import { useState } from 'react';

import {
  Search,
  ShoppingBag,
  Clock,
  PackageCheck,
  CheckCircle2,
  MoreHorizontal,
  X,
} from 'lucide-react';

import './Orders.css';


const initialOrders = [
  {
    id: 1052,
    customer: 'Laura Ferrer',
    date: '06/09/2026',
    time: '18:42',
    items: [
      {
        product: 'Agua mineral 1,5 L',
        quantity: 2,
        price: 0.75,
      },
      {
        product: 'Pan integral',
        quantity: 1,
        price: 1.85,
      },
      {
        product: 'Café molido 250 g',
        quantity: 1,
        price: 4.9,
      },
    ],
    total: 29.8,
    payment: 'Tarjeta',
    status: 'Completado',
  },

  {
    id: 1051,
    customer: 'Jordi Puig',
    date: '06/09/2026',
    time: '18:17',
    items: [
      {
        product: 'Leche entera 1 L',
        quantity: 2,
        price: 1.2,
      },
      {
        product: 'Huevos 12 ud.',
        quantity: 1,
        price: 2.75,
      },
      {
        product: 'Pan integral',
        quantity: 1,
        price: 1.85,
      },
    ],
    total: 18.45,
    payment: 'Efectivo',
    status: 'Listo',
  },

  {
    id: 1050,
    customer: 'Marta Soler',
    date: '06/09/2026',
    time: '18:03',
    items: [
      {
        product: 'Aceite de oliva 1 L',
        quantity: 1,
        price: 8.95,
      },
      {
        product: 'Tomates 1 kg',
        quantity: 2,
        price: 2.25,
      },
      {
        product: 'Papel higiénico 12 ud.',
        quantity: 1,
        price: 4.5,
      },
    ],
    total: 52.2,
    payment: 'Tarjeta',
    status: 'Preparando',
  },

  {
    id: 1049,
    customer: 'Anna Riera',
    date: '06/09/2026',
    time: '17:46',
    items: [
      {
        product: 'Yogur natural',
        quantity: 2,
        price: 0.65,
      },
      {
        product: 'Plátanos 1 kg',
        quantity: 1,
        price: 1.79,
      },
    ],
    total: 7.9,
    payment: 'Tarjeta',
    status: 'Pendiente',
  },

  {
    id: 1048,
    customer: 'Marc Vidal',
    date: '06/09/2026',
    time: '17:21',
    items: [
      {
        product: 'Zumo de naranja 1 L',
        quantity: 2,
        price: 2.15,
      },
      {
        product: 'Manzanas 1 kg',
        quantity: 1,
        price: 2.1,
      },
      {
        product: 'Azúcar 1 kg',
        quantity: 1,
        price: 1.35,
      },
    ],
    total: 24.6,
    payment: 'Tarjeta',
    status: 'Completado',
  },

  {
    id: 1047,
    customer: 'Laura Ferrer',
    date: '06/09/2026',
    time: '16:58',
    items: [
      {
        product: 'Jamón cocido 200 g',
        quantity: 1,
        price: 2.95,
      },
      {
        product: 'Pan integral',
        quantity: 2,
        price: 1.85,
      },
    ],
    total: 12.4,
    payment: 'Efectivo',
    status: 'Completado',
  },
];


function Orders() {

  const [orderList, setOrderList] = useState(initialOrders);

  const [searchTerm, setSearchTerm] = useState('');

  const [statusFilter, setStatusFilter] = useState('Todos');

  const [selectedOrder, setSelectedOrder] = useState(null);

  const [openMenuId, setOpenMenuId] = useState(null);


  const filteredOrders = orderList.filter((order) => {

    const matchesSearch =
      order.customer
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      order.id
        .toString()
        .includes(searchTerm);

    const matchesStatus =
      statusFilter === 'Todos' ||
      order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });


  const pendingOrders = orderList.filter(
    (order) => order.status === 'Pendiente'
  );

  const preparingOrders = orderList.filter(
    (order) => order.status === 'Preparando'
  );

  const completedOrders = orderList.filter(
    (order) => order.status === 'Completado'
  );


  const getStatusClass = (status) => {

    if (status === 'Pendiente') {
      return 'order-status-pending';
    }

    if (status === 'Preparando') {
      return 'order-status-preparing';
    }

    if (status === 'Listo') {
      return 'order-status-ready';
    }

    return 'order-status-completed';
  };


  const handleChangeStatus = (orderId, newStatus) => {

    setOrderList((currentOrders) =>
      currentOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
            }
          : order
      )
    );

    setOpenMenuId(null);

    setSelectedOrder((currentOrder) =>
      currentOrder?.id === orderId
        ? {
            ...currentOrder,
            status: newStatus,
          }
        : currentOrder
    );
  };


  const calculateOrderItems = (items) => {

    return items.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  };


  return (
    <section className="orders-page">


      {/* HEADER */}

      <header className="orders-header">

        <div>

          <h1 className="page-title">
            Pedidos
          </h1>

          <p className="page-description">
            Ventas y pedidos en curso
          </p>

        </div>

      </header>


      {/* METRICS */}

      <section className="orders-metrics">


        <div className="orders-metric">

          <div className="orders-metric-icon">
            <ShoppingBag
              size={18}
              strokeWidth={1.7}
            />
          </div>

          <div>

            <span className="metric-label">
              Total pedidos
            </span>

            <strong className="metric-value">
              {orderList.length}
            </strong>

          </div>

        </div>


        <div className="orders-metric">

          <div className="orders-metric-icon">
            <Clock
              size={18}
              strokeWidth={1.7}
            />
          </div>

          <div>

            <span className="metric-label">
              Pendientes
            </span>

            <strong className="metric-value">
              {pendingOrders.length}
            </strong>

          </div>

        </div>


        <div className="orders-metric">

          <div className="orders-metric-icon">
            <PackageCheck
              size={18}
              strokeWidth={1.7}
            />
          </div>

          <div>

            <span className="metric-label">
              Preparando
            </span>

            <strong className="metric-value">
              {preparingOrders.length}
            </strong>

          </div>

        </div>


        <div className="orders-metric orders-metric-success">

          <div className="orders-metric-icon">
            <CheckCircle2
              size={18}
              strokeWidth={1.7}
            />
          </div>

          <div>

            <span className="metric-label">
              Completados
            </span>

            <strong className="metric-value">
              {completedOrders.length}
            </strong>

          </div>

        </div>


      </section>


      {/* TOOLBAR */}

      <section className="orders-toolbar">


        <div className="orders-search">

          <Search
            size={17}
            strokeWidth={1.7}
          />

          <input
            type="text"
            placeholder="Buscar pedidos o clientes..."
            value={searchTerm}
            onChange={(event) =>
              setSearchTerm(event.target.value)
            }
          />

        </div>


        <div className="orders-filters">

          {[
            'Todos',
            'Pendiente',
            'Preparando',
            'Listo',
            'Completado',
          ].map((status) => (

            <button
              key={status}
              type="button"
              className={
                statusFilter === status
                  ? 'order-filter-active'
                  : ''
              }
              onClick={() =>
                setStatusFilter(status)
              }
            >
              {status}
            </button>

          ))}

        </div>


      </section>


      {/* TABLE */}

      <section className="orders-table-section">


        <div className="orders-section-header">

          <div>

            <h2>
              Pedidos
            </h2>

            <p>
              Seguimiento del estado de los pedidos
            </p>

          </div>

        </div>


        <div className="orders-table-wrapper">

          <table className="orders-table">

            <thead>

              <tr>

                <th>Pedido</th>
                <th>Cliente</th>
                <th>Fecha</th>
                <th>Artículos</th>
                <th>Total</th>
                <th>Pago</th>
                <th>Estado</th>
                <th></th>

              </tr>

            </thead>


            <tbody>

              {filteredOrders.map((order) => (

                <tr key={order.id}>


                  <td>

                    <button
                      className="order-number"
                      type="button"
                      onClick={() =>
                        setSelectedOrder(order)
                      }
                    >
                      #RF-{order.id}
                    </button>

                  </td>


                  <td>

                    <span className="order-customer">
                      {order.customer}
                    </span>

                  </td>


                  <td>

                    <div className="order-date">

                      <span>
                        {order.date}
                      </span>

                      <span>
                        {order.time}
                      </span>

                    </div>

                  </td>


                  <td>

                    <span>
                      {calculateOrderItems(order.items)}
                    </span>

                  </td>


                  <td>

                    <strong className="order-total">
                      {order.total
                        .toFixed(2)
                        .replace('.', ',')} €
                    </strong>

                  </td>


                  <td>

                    <span className="order-payment">
                      {order.payment}
                    </span>

                  </td>


                  <td>

                    <span
                      className={`order-status ${getStatusClass(
                        order.status
                      )}`}
                    >

                      <span className="order-status-dot" />

                      {order.status}

                    </span>

                  </td>


                  <td className="order-actions">

                    <button
                      type="button"
                      aria-label={`Acciones para pedido ${order.id}`}
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === order.id
                            ? null
                            : order.id
                        )
                      }
                    >

                      <MoreHorizontal
                        size={18}
                        strokeWidth={1.7}
                      />

                    </button>


                    {openMenuId === order.id && (

                      <div className="order-actions-menu">

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedOrder(order);
                            setOpenMenuId(null);
                          }}
                        >
                          Ver pedido
                        </button>


                        {order.status === 'Pendiente' && (
                          <button
                            type="button"
                            onClick={() =>
                              handleChangeStatus(
                                order.id,
                                'Preparando'
                              )
                            }
                          >
                            Preparar
                          </button>
                        )}


                        {order.status === 'Preparando' && (
                          <button
                            type="button"
                            onClick={() =>
                              handleChangeStatus(
                                order.id,
                                'Listo'
                              )
                            }
                          >
                            Marcar listo
                          </button>
                        )}


                        {order.status === 'Listo' && (
                          <button
                            type="button"
                            onClick={() =>
                              handleChangeStatus(
                                order.id,
                                'Completado'
                              )
                            }
                          >
                            Completar
                          </button>
                        )}

                      </div>

                    )}

                  </td>

                </tr>

              ))}


              {filteredOrders.length === 0 && (

                <tr>

                  <td
                    className="orders-empty"
                    colSpan="8"
                  >
                    No se han encontrado pedidos.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </section>


      {/* ORDER DETAIL */}

      {selectedOrder && (

        <div
          className="order-detail-overlay"
          onClick={() =>
            setSelectedOrder(null)
          }
        >

          <aside
            className="order-detail-panel"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <header className="order-detail-header">

              <div>

                <span className="order-detail-label">
                  Pedido
                </span>

                <h2>
                  #RF-{selectedOrder.id}
                </h2>

              </div>


              <button
                type="button"
                aria-label="Cerrar detalle"
                onClick={() =>
                  setSelectedOrder(null)
                }
              >

                <X
                  size={19}
                  strokeWidth={1.7}
                />

              </button>

            </header>


            <div className="order-detail-content">


              <div className="order-detail-customer">

                <span className="metric-label">
                  Cliente
                </span>

                <strong>
                  {selectedOrder.customer}
                </strong>

              </div>


              <div className="order-detail-meta">

                <div>

                  <span className="metric-label">
                    Fecha
                  </span>

                  <strong>
                    {selectedOrder.date}
                  </strong>

                </div>


                <div>

                  <span className="metric-label">
                    Hora
                  </span>

                  <strong>
                    {selectedOrder.time}
                  </strong>

                </div>


                <div>

                  <span className="metric-label">
                    Pago
                  </span>

                  <strong>
                    {selectedOrder.payment}
                  </strong>

                </div>

              </div>


              <div className="order-detail-status">

                <span className="metric-label">
                  Estado
                </span>

                <span
                  className={`order-status ${getStatusClass(
                    selectedOrder.status
                  )}`}
                >

                  <span className="order-status-dot" />

                  {selectedOrder.status}

                </span>

              </div>


              <div className="order-detail-items">

                <div className="order-detail-items-header">

                  <span>
                    Artículo
                  </span>

                  <span>
                    Total
                  </span>

                </div>


                {selectedOrder.items.map(
                  (item, index) => (

                    <div
                      className="order-detail-item"
                      key={`${item.product}-${index}`}
                    >

                      <div>

                        <strong>
                          {item.product}
                        </strong>

                        <span>
                          {item.quantity} ×{' '}
                          {item.price
                            .toFixed(2)
                            .replace('.', ',')}{' '}
                          €
                        </span>

                      </div>

                      <strong>
                        {(item.quantity * item.price)
                          .toFixed(2)
                          .replace('.', ',')}{' '}
                        €
                      </strong>

                    </div>

                  )
                )}

              </div>


              <div className="order-detail-total">

                <span>
                  Total
                </span>

                <strong>
                  {selectedOrder.total
                    .toFixed(2)
                    .replace('.', ',')}{' '}
                  €
                </strong>

              </div>


            </div>

          </aside>

        </div>

      )}

    </section>
  );
}

export default Orders;