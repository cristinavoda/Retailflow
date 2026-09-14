import {
  Brain,
  AlertTriangle,
  TrendingUp,
  Package,
  ShoppingBag,
  ArrowRight,
  Check,
} from 'lucide-react';

import './Pilot.css';

const pilotInsights = [
  {
    id: 1,
    type: 'critical',
    icon: AlertTriangle,
    label: 'Atención prioritaria',
    title: 'Riesgo de falta de stock',
    description:
      'El aceite de oliva 1 L tiene actualmente 8 unidades disponibles y presenta una demanda elevada.',
    recommendation:
      'Reponer 12 unidades para mantener la disponibilidad.',
    action: 'Recomendar reposición',
  },
  {
    id: 2,
    type: 'warning',
    icon: ShoppingBag,
    label: 'Operaciones',
    title: 'Pedidos pendientes de preparación',
    description:
      'Hay pedidos que llevan tiempo esperando preparación y podrían generar retrasos.',
    recommendation:
      'Priorizar los pedidos pendientes antes de que aumente el tiempo de espera.',
    action: 'Priorizar pedidos',
  },
  {
    id: 3,
    type: 'opportunity',
    icon: TrendingUp,
    label: 'Oportunidad',
    title: 'Aumento de demanda',
    description:
      'El consumo de productos de alimentación muestra una tendencia positiva.',
    recommendation:
      'Revisar las previsiones de stock para los productos con mayor rotación.',
    action: 'Ver tendencia',
  },
];

function Pilot() {
  return (
    <section className="pilot-page">

      <header className="pilot-header">
        <div>
          <div className="pilot-title-row">
            <Brain size={24} strokeWidth={1.6} />

            <h1 className="page-title">
              Pilot
            </h1>
          </div>

          <p className="page-description">
            Inteligencia operativa para tu comercio
          </p>
        </div>

        <div className="pilot-status">
          <span className="pilot-status-dot" />
          <span>Pilot activo</span>
        </div>
      </header>


      <section className="pilot-overview">

        <div className="pilot-overview-icon">
          <Brain size={22} strokeWidth={1.6} />
        </div>

        <div className="pilot-overview-content">
          <span className="metric-label">
            Estado operativo
          </span>

          <h2>
            Pilot ha detectado 3 puntos de atención
          </h2>

          <p>
            Analiza stock, pedidos y comportamiento de
            ventas para anticipar problemas y ayudarte
            a tomar decisiones.
          </p>
        </div>

      </section>


      <section className="pilot-section">

        <div className="pilot-section-header">
          <div>
            <h2>
              Análisis de Pilot
            </h2>

            <p>
              Recomendaciones basadas en la actividad
              actual del comercio
            </p>
          </div>
        </div>


        <div className="pilot-insights">

          {pilotInsights.map((insight) => {

            const Icon = insight.icon;

            return (
              <article
                className={`pilot-insight pilot-insight-${insight.type}`}
                key={insight.id}
              >

                <div className="pilot-insight-top">

                  <div className="pilot-insight-icon">
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                    />
                  </div>

                  <span className="pilot-insight-label">
                    {insight.label}
                  </span>

                </div>


                <div className="pilot-insight-content">

                  <h3>
                    {insight.title}
                  </h3>

                  <p>
                    {insight.description}
                  </p>

                </div>


                <div className="pilot-recommendation">

                  <span className="metric-label">
                    Recomendación
                  </span>

                  <p>
                    {insight.recommendation}
                  </p>

                </div>


                <div className="pilot-insight-action">

                  <button type="button">
                    <span>
                      {insight.action}
                    </span>

                    <ArrowRight
                      size={16}
                      strokeWidth={1.7}
                    />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </section>


      <section className="pilot-activity">

        <div className="pilot-activity-header">
          <div>
            <h2>
              Actividad reciente
            </h2>

            <p>
              Acciones y decisiones supervisadas por el
              comercio
            </p>
          </div>
        </div>


        <div className="pilot-activity-list">

          <div className="pilot-activity-item">

            <div className="pilot-activity-icon">
              <Check size={17} strokeWidth={1.7} />
            </div>

            <div>
              <strong>
                Análisis de inventario completado
              </strong>

              <span>
                Hace 4 minutos
              </span>
            </div>

          </div>


          <div className="pilot-activity-item">

            <div className="pilot-activity-icon">
              <Package size={17} strokeWidth={1.7} />
            </div>

            <div>
              <strong>
                Detectado stock bajo en 4 productos
              </strong>

              <span>
                Hace 7 minutos
              </span>
            </div>

          </div>


          <div className="pilot-activity-item">

            <div className="pilot-activity-icon">
              <ShoppingBag size={17} strokeWidth={1.7} />
            </div>

            <div>
              <strong>
                Revisión de pedidos pendientes
              </strong>

              <span>
                Hace 11 minutos
              </span>
            </div>

          </div>

        </div>

      </section>

    </section>
  );
}

export default Pilot;