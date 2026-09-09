
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Boxes,
  Users,
  ClipboardList,
  Bot,
} from 'lucide-react';

const navigation = [
  {
    label: 'Inicio',
    path: '/',
    icon: LayoutDashboard,
  },
  {
    label: 'POS',
    path: '/pos',
    icon: ShoppingCart,
  },
  {
    label: 'Productos',
    path: '/products',
    icon: Package,
  },
  {
    label: 'Inventario',
    path: '/inventory',
    icon: Boxes,
  },
  {
    label: 'Clientes',
    path: '/customers',
    icon: Users,
  },
  {
    label: 'Pedidos',
    path: '/orders',
    icon: ClipboardList,
  },
  {
    label: 'Pilot',
    path: '/pilot',
    icon: Bot,
  },
];

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-brand">
        <span className="brand-name">RETAILFLOW</span>
        <span className="brand-subtitle">Gestión para comercios</span>
      </div>

      <nav className="sidebar-nav">

        {navigation.map(({ label, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
          >
            <Icon size={18} strokeWidth={1.7} />
            <span>{label}</span>
          </NavLink>
        ))}

      </nav>

      <div className="sidebar-footer">
        <span className="pilot-status-dot" />
        <span>Pilot online</span>
      </div>

    </aside>
  );
}

export default Sidebar;

