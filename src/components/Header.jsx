
import { Search, Bell } from 'lucide-react';

function Header() {
  return (
    <header className="app-header">

      <div className="header-search">
        <Search size={18} strokeWidth={1.7} />

        <input
          type="text"
          placeholder="Buscar productos ,pedidos,clientes..."
        />
      </div>

      <div className="header-actions">

        <div className="pilot-indicator">
          <span className="pilot-status-dot" />
          <span>Pilot activo</span>
        </div>

        <button className="header-icon" aria-label="Notifications">
          <Bell size={19} strokeWidth={1.7} />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            CV
          </div>

          <div className="user-info">
            <span className="user-name">Cristina</span>
            <span className="user-role">Administrador</span>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Header;

