
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, Users, Calendar, Settings, LogOut, FolderKanban } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="sidebar">
      <div className="nav-container">
        <h2 className="nav-brand">Zidio</h2>
        <div className="nav-items">
          <NavItem 
            icon={<Home className="nav-item-icon" />} 
            to="/" 
            label="Home" 
            isActive={location.pathname === '/'}
          />
          <NavItem 
            icon={<LayoutDashboard className="nav-item-icon" />} 
            to="/dashboard" 
            label="Dashboard" 
            isActive={location.pathname === '/dashboard'}
          />
          <NavItem 
            icon={<FolderKanban className="nav-item-icon" />} 
            to="/projects" 
            label="Projects" 
            isActive={location.pathname === '/projects'}
          />
          <NavItem 
            icon={<Users className="nav-item-icon" />} 
            to="/team" 
            label="Team" 
            isActive={location.pathname === '/team'}
          />
          <NavItem 
            icon={<Calendar className="nav-item-icon" />} 
            to="/tasks" 
            label="Tasks" 
            isActive={location.pathname === '/tasks'}
          />
          <NavItem 
            icon={<Settings className="nav-item-icon" />} 
            to="/settings" 
            label="Settings" 
            isActive={location.pathname === '/settings'}
          />
        </div>
        <button className="logout-btn">
          <LogOut className="nav-item-icon" />
          Logout
        </button>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, to, label, isActive }) => (
  <Link to={to} className={`nav-item ${isActive ? 'active' : ''}`}>
    {icon}
    <span>{label}</span>
  </Link>
);

export default Navbar;
