import { useState } from 'react';

import {
  Users,
  UserCheck,
  Star,
  Gift,
  MoreHorizontal,
  Plus,
} from 'lucide-react';

import './Customers.css';

const initialCustomers = [
  {
    id: 1,
    name: 'Marta Soler',
    email: 'marta.soler@email.com',
    phone: '612 345 678',
    purchases: 24,
    totalSpent: 486.2,
    points: 486,
    discount: 5,
    giftCard: 0,
    lastPurchase: '04/09/2026',
    status: 'Activo',
  },
  {
    id: 2,
    name: 'Jordi Puig',
    email: 'jordi.puig@email.com',
    phone: '623 456 789',
    purchases: 17,
    totalSpent: 312.8,
    points: 312,
    discount: 0,
    giftCard: 25,
    lastPurchase: '02/09/2026',
    status: 'Activo',
  },
  {
    id: 3,
    name: 'Laura Ferrer',
    email: 'laura.ferrer@email.com',
    phone: '634 567 890',
    purchases: 39,
    totalSpent: 821.5,
    points: 821,
    discount: 10,
    giftCard: 0,
    lastPurchase: '06/09/2026',
    status: 'Activo',
  },
  {
    id: 4,
    name: 'Anna Riera',
    email: 'anna.riera@email.com',
    phone: '645 678 901',
    purchases: 8,
    totalSpent: 94.6,
    points: 94,
    discount: 0,
    giftCard: 0,
    lastPurchase: '28/08/2026',
    status: 'Activo',
  },
  {
    id: 5,
    name: 'Marc Vidal',
    email: 'marc.vidal@email.com',
    phone: '656 789 012',
    purchases: 31,
    totalSpent: 645.3,
    points: 645,
    discount: 5,
    giftCard: 10,
    lastPurchase: '01/09/2026',
    status: 'Activo',
  },
];

function Customers() {
  const [customerList, setCustomerList] = useState(initialCustomers);
  const [searchTerm, setSearchTerm] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showForm, setShowForm] = useState(false);
const [editingCustomer, setEditingCustomer] = useState(null);

const [newCustomer, setNewCustomer] = useState({
  name: '',
  email: '',
  phone: '',
});

  const filteredCustomers = customerList.filter((customer) =>
    `${customer.name} ${customer.email}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const totalPoints = customerList.reduce(
    (total, customer) => total + customer.points,
    0
  );

  const customersWithBenefits = customerList.filter(
    (customer) =>
      customer.discount > 0 || customer.giftCard > 0
  );

  
  const handleInputChange = (event) => {
  const { name, value } = event.target;

  setNewCustomer((currentCustomer) => ({
    ...currentCustomer,
    [name]: value,
  }));
};


const handleSaveCustomer = (event) => {
  event.preventDefault();

  const customer = {
    id: editingCustomer
      ? editingCustomer.id
      : Date.now(),

    name: newCustomer.name.trim(),
    email: newCustomer.email.trim(),
    phone: newCustomer.phone.trim(),

    purchases: editingCustomer
      ? editingCustomer.purchases
      : 0,

    totalSpent: editingCustomer
      ? editingCustomer.totalSpent
      : 0,

    points: editingCustomer
      ? editingCustomer.points
      : 0,

    discount: editingCustomer
      ? editingCustomer.discount
      : 0,

    giftCard: editingCustomer
      ? editingCustomer.giftCard
      : 0,

    lastPurchase: editingCustomer
      ? editingCustomer.lastPurchase
      : '—',

    status: 'Activo',
  };


  if (editingCustomer) {
    setCustomerList((currentCustomers) =>
      currentCustomers.map((currentCustomer) =>
        currentCustomer.id === editingCustomer.id
          ? customer
          : currentCustomer
      )
    );
  } else {
    setCustomerList((currentCustomers) => [
      ...currentCustomers,
      customer,
    ]);
  }


  setNewCustomer({
    name: '',
    email: '',
    phone: '',
  });

  setEditingCustomer(null);
  setShowForm(false);
};


const handleEditCustomer = (customer) => {
  setEditingCustomer(customer);

  setNewCustomer({
    name: customer.name,
    email: customer.email,
    phone: customer.phone,
  });

  setShowForm(true);
};


  const handleDeleteCustomer = (customerId) => {
    setCustomerList((currentCustomers) =>
      currentCustomers.filter(
        (customer) => customer.id !== customerId
      )
    );

    setOpenMenuId(null);
  };

  return (
    <section className="customers-page">

      {/* HEADER */}

      <header className="customers-header">

        <div>
          <h1 className="page-title">
            Clientes
          </h1>

          <p className="page-description">
            Clientes, fidelización y beneficios
          </p>
        </div>

      </header>


      {/* METRICS */}

      <section className="customers-metrics">

        <div className="customers-metric">

          <div className="customers-metric-icon">
            <Users size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Clientes
            </span>

            <strong className="metric-value">
              {customerList.length}
            </strong>
          </div>

        </div>


        <div className="customers-metric">

          <div className="customers-metric-icon">
            <UserCheck size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Activos
            </span>

            <strong className="metric-value">
              {customerList.filter(
                (customer) => customer.status === 'Activo'
              ).length}
            </strong>
          </div>

        </div>


        <div className="customers-metric">

          <div className="customers-metric-icon">
            <Star size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Puntos acumulados
            </span>

            <strong className="metric-value">
              {totalPoints.toLocaleString('es-ES')}
            </strong>
          </div>

        </div>


        <div className="customers-metric customers-metric-benefit">

          <div className="customers-metric-icon">
            <Gift size={18} strokeWidth={1.7} />
          </div>

          <div>
            <span className="metric-label">
              Con beneficios
            </span>

            <strong className="metric-value">
              {customersWithBenefits.length}
            </strong>
          </div>

        </div>

      </section>


      {/* TOOLBAR */}

     <section className="customers-toolbar">

  <div className="customers-search">

    <Users
      size={17}
      strokeWidth={1.7}
    />

    <input
      type="text"
      placeholder="Buscar clientes..."
      value={searchTerm}
      onChange={(event) =>
        setSearchTerm(event.target.value)
      }
    />

  </div>


  <button
    className="customers-add-button"
    type="button"
    onClick={() => setShowForm(true)}
  >
    <Plus
      size={17}
      strokeWidth={1.8}
    />

    <span>
      Nuevo cliente
    </span>
  </button>

</section>

{showForm && (
  <form
    className="customer-form"
    onSubmit={handleSaveCustomer}
  >

    <div className="customer-form-header">

      <div>
        <h2>
          {editingCustomer
            ? 'Editar cliente'
            : 'Nuevo cliente'}
        </h2>

        <p>
          {editingCustomer
            ? 'Modifica los datos del cliente.'
            : 'Introduce los datos del cliente.'}
        </p>
      </div>

    </div>


    <div className="customer-form-grid">

      <div className="form-field">

        <label htmlFor="customer-name">
          Nombre
        </label>

        <input
          id="customer-name"
          name="name"
          type="text"
          value={newCustomer.name}
          onChange={handleInputChange}
          required
        />

      </div>


      <div className="form-field">

        <label htmlFor="customer-email">
          Email
        </label>

        <input
          id="customer-email"
          name="email"
          type="email"
          value={newCustomer.email}
          onChange={handleInputChange}
          required
        />

      </div>


      <div className="form-field">

        <label htmlFor="customer-phone">
          Teléfono
        </label>

        <input
          id="customer-phone"
          name="phone"
          type="tel"
          value={newCustomer.phone}
          onChange={handleInputChange}
          required
        />

      </div>

    </div>


    <div className="customer-form-actions">

      <button
        className="customer-cancel-button"
        type="button"
        onClick={() => {
          setShowForm(false);
          setEditingCustomer(null);

          setNewCustomer({
            name: '',
            email: '',
            phone: '',
          });
        }}
      >
        Cancelar
      </button>


      <button
        className="customer-save-button"
        type="submit"
      >
        Guardar
      </button>

    </div>

  </form>
)}

      {/* TABLE */}

      <section className="customers-table-section">

        <div className="customers-section-header">

          <div>
            <h2>
              Clientes
            </h2>

            <p>
              Información y fidelización de clientes
            </p>
          </div>

        </div>


        <div className="customers-table-wrapper">

          <table className="customers-table">

            <thead>
              <tr>
                <th>Cliente</th>
                <th>Compras</th>
                <th>Total gastado</th>
                <th>Puntos</th>
                <th>Beneficio</th>
                <th>Última compra</th>
                <th>Estado</th>
                <th></th>
              </tr>
            </thead>

            <tbody>

              {filteredCustomers.map((customer) => (

                <tr key={customer.id}>

                  <td>
                    <div className="customer-info">

                      <span className="customer-name">
                        {customer.name}
                      </span>

                      <span className="customer-contact">
                        {customer.email}
                      </span>

                    </div>
                  </td>


                  <td>
                    {customer.purchases}
                  </td>


                  <td>
                    <strong className="customer-spent">
                      {customer.totalSpent
                        .toFixed(2)
                        .replace('.', ',')} €
                    </strong>
                  </td>


                  <td>

                    <span className="customer-points">
                      <Star
                        size={14}
                        strokeWidth={1.7}
                      />

                      {customer.points}
                    </span>

                  </td>


                  <td>

                    <div className="customer-benefits">

                      {customer.discount > 0 && (
                        <span className="benefit-discount">
                          -{customer.discount}%
                        </span>
                      )}

                      {customer.giftCard > 0 && (
                        <span className="benefit-gift">
                          {customer.giftCard} € regalo
                        </span>
                      )}

                      {customer.discount === 0 &&
                        customer.giftCard === 0 && (
                          <span className="benefit-none">
                            —
                          </span>
                        )}

                    </div>

                  </td>


                  <td>
                    <span className="customer-date">
                      {customer.lastPurchase}
                    </span>
                  </td>


                  <td>
                    <span className="customer-status">
                      <span className="customer-status-dot" />
                      {customer.status}
                    </span>
                  </td>


                  <td className="customer-actions">

                    <button
                      type="button"
                      aria-label={`Acciones para ${customer.name}`}
                      onClick={() =>
                        setOpenMenuId(
                          openMenuId === customer.id
                            ? null
                            : customer.id
                        )
                      }
                    >
                      <MoreHorizontal
                        size={18}
                        strokeWidth={1.7}
                      />
                    </button>


                    {openMenuId === customer.id && (
                      <div className="customer-actions-menu">

                        <button
                          type="button"
                          onClick={() => {
                            setOpenMenuId(null);
                          }}
                        >
                          Ver cliente
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setOpenMenuId(null);
                          }}
                        >
                          Editar
                        </button>

                        <button
                          type="button"
                          className="delete-action"
                          onClick={() =>
                            handleDeleteCustomer(customer.id)
                          }
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

    </section>
  );
}

export default Customers;
