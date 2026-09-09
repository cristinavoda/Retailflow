import {
  ArrowUpRight,
  AlertTriangle,
  ShoppingBag,
  Bot,
  Package,
} from 'lucide-react';
import './Dashboard.css';
function Dashboard() {
  return (
    <section className="dashboard">

     

      <div className="dashboard-intro">

        <div>
          <span className="eyebrow">OPERACIONES</span>

          <h1 className="page-title">
          Resumen
          </h1>

          
        </div>

        <div className="dashboard-date">
          08 SEP 2026 · 10:42
        </div>

      </div>


      

      <section className="today-section">

        <div className="section-label">
          HOY
        </div>

        <div className="today-metrics">

          <div className="primary-metric">

            <span className="metric-label">
              VENTAS
            </span>

            <strong className="metric-value">
              € 4.286,40
            </strong>

            <span className="metric-change positive">
              <ArrowUpRight size={14} />
              12.8% vs ayer
            </span>

          </div>


          <div className="metric">

            <span className="metric-label">
              TRANSACCIONES

            </span>

            <strong className="metric-value">
              128
            </strong>

          </div>


          <div className="metric">

            <span className="metric-label">
               TICKET MEDIO
            </span>

            <strong className="metric-value">
              € 33,49
            </strong>

          </div>

        </div>

      </section>


     

      <div className="dashboard-grid">


       

        <section className="operations-section">

          <div className="section-heading">

            <div>
              <span className="eyebrow">
                OPERACIONES
              </span>

              <h2>
                Atención requerida
              </h2>
            </div>

            <span className="section-count">
              06
            </span>

          </div>


          <div className="operation-list">

            <div className="operation-item">

              <div className="operation-icon warning">
                <AlertTriangle size={17} />
              </div>

              <div className="operation-content">

                <strong>
                 Incidencias de stock
                </strong>

                <span>
                  2 productos por debajo del mínimo
                </span>

              </div>

              <ArrowUpRight size={16} />

            </div>


            <div className="operation-item">

              <div className="operation-icon">
                <ShoppingBag size={17} />
              </div>

              <div className="operation-content">

                <strong>
                  Pedido #RF-1048
                </strong>

                <span>
                 Listo para recoger
                </span>

              </div>

              <ArrowUpRight size={16} />

            </div>


            <div className="operation-item">

              <div className="operation-icon copper">
                <Bot size={17} />
              </div>

              <div className="operation-content">

                <strong>
                  Pilot 
                </strong>

                <span>
                2 recomendaciones pendientes de aprobación 
                </span>

              </div>

              <ArrowUpRight size={16} />

            </div>

          </div>

        </section>


       

        <section className="pilot-panel">

          <div className="pilot-header">

            <div>

              <span className="eyebrow">
                PILOT
              </span>

              <h2>
               INTELIGENCIA OPERATIVA
              </h2>

            </div>

            <span className="pilot-live">
              <span className="pilot-status-dot" />
              ACTIVO
            </span>

          </div>


          <div className="pilot-event">

            <span className="pilot-event-label">
             DETECTADO  · 09:43
            </span>

            <h3>
             anomalía de la demanda
            </h3>

            <p>
             El agua mineral de 1,5 litros se vende un 31 % más rápido que el nivel de referencia actual. 
            </p>

          </div>


          <div className="pilot-recommendation">

            <span>
             RECOMENDACIÓN
            </span>

            <strong>
             Revisar pedido · 48 unidades
            </strong>

            <button>
              REVISAR
              <ArrowUpRight size={15} />
            </button>

          </div>

        </section>

      </div>


      

      <div className="dashboard-grid bottom-grid">


        <section className="data-section">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                VENTAS

              </span>

              <h2>
                € 4.286
              </h2>

            </div>

            <span className="muted-text">
              HOY
            </span>

          </div>


          <div className="sales-visual">

            <div className="sales-line">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

          </div>

          <div className="data-footer">
          Hora punta   · 11:00
          </div>

        </section>


        <section className="data-section">

          <div className="section-heading">

            <div>

              <span className="eyebrow">
                INVENTARIO
              </span>

              <h2>
                94.2%
              </h2>

            </div>

            <Package size={18} />

          </div>


          <div className="inventory-bar">

            <span />

          </div>

          <div className="data-footer">
           6 productos requieren atención
          </div>

        </section>

      </div>

    </section>
  );
}

export default Dashboard;