import React from 'react';
import { ListIcon, HistoryIcon, CalendarIcon, InboxIcon, SettingsIcon, LeafIcon, HourglassIcon } from './Icons';

type MenuView = 'all' | 'completed' | 'scheduled' | 'requested' | 'pending';
type View = 'dashboard' | 'management' | 'reports';

interface SideMenuProps {
  activeMenu: MenuView;
  activeView: View;
  onSelectMenu: (menu: MenuView) => void;
  onShowManagement: () => void;
  onShowReports: () => void;
}

const SideMenu: React.FC<SideMenuProps> = ({ activeMenu, activeView, onSelectMenu, onShowManagement, onShowReports }) => {
  const isDashboardActive = activeView === 'dashboard';

  // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
  const menuItems: { id: MenuView; label: string; icon: React.ReactElement }[] = [
    { id: 'all', label: 'Todos', icon: <ListIcon /> },
    { id: 'requested', label: 'Solicitados', icon: <InboxIcon /> },
    { id: 'scheduled', label: 'Programados', icon: <CalendarIcon /> },
    { id: 'pending', label: 'Pendientes', icon: <HourglassIcon /> },
    { id: 'completed', label: 'Historial', icon: <HistoryIcon /> },
  ];

  const MenuItem: React.FC<{
    onClick: () => void;
    label: string;
    // FIX: Replaced JSX.Element with React.ReactElement to resolve namespace issue.
    icon: React.ReactElement;
    isActive: boolean;
  }> = ({ onClick, label, icon, isActive }) => (
    <li>
      <button
        onClick={onClick}
        className={`flex items-center w-full p-3 my-1 rounded-lg transition-colors ${
          isActive
            ? 'bg-brand-primary text-white shadow-md'
            : 'text-gray-600 hover:bg-base-300 hover:text-base-content'
        }`}
      >
        <div className="w-6 h-6 mr-3">{icon}</div>
        <span className="font-medium">{label}</span>
      </button>
    </li>
  );

  return (
    <aside className="w-64 bg-base-200 shadow-lg flex-col p-4 border-r border-gray-200 hidden md:flex">
      <div className="flex items-center gap-3 p-3 mb-6">
        <LeafIcon className="text-brand-primary h-8 w-8" />
        <h1 className="text-xl font-bold text-base-content">
            Franco's <span className="text-brand-primary">DripOp</span>
        </h1>
      </div>

      <nav className="flex-1">
        <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Vistas</p>
        <ul>
          {menuItems.map(item => (
            <MenuItem 
              key={item.id} 
              onClick={() => onSelectMenu(item.id)} 
              label={item.label} 
              icon={item.icon} 
              isActive={isDashboardActive && activeMenu === item.id} 
            />
          ))}
        </ul>
      </nav>

      <div>
        <p className="px-3 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Herramientas</p>
        <ul>
            <MenuItem
              onClick={onShowManagement}
              label="Gestión"
              icon={<SettingsIcon />}
              isActive={activeView === 'management'}
            />
        </ul>
      </div>
    </aside>
  );
};

export default SideMenu;
