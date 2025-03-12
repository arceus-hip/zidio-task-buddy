
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Home, LayoutDashboard, Users, Calendar, Settings, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 h-screen w-64 glass-effect border-r border-gray-200 px-4 py-6">
      <div className="flex flex-col h-full">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Zidio</h2>
          <div className="space-y-1">
            <NavItem icon={<Home className="w-4 h-4" />} to="/" label="Home" />
            <NavItem icon={<LayoutDashboard className="w-4 h-4" />} to="/dashboard" label="Dashboard" />
            <NavItem icon={<Users className="w-4 h-4" />} to="/team" label="Team" />
            <NavItem icon={<Calendar className="w-4 h-4" />} to="/tasks" label="Tasks" />
            <NavItem icon={<Settings className="w-4 h-4" />} to="/settings" label="Settings" />
          </div>
        </div>
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start" onClick={() => {}}>
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, to, label }: { icon: React.ReactNode; to: string; label: string }) => (
  <Link to={to}>
    <Button variant="ghost" className="w-full justify-start">
      {icon}
      <span className="ml-2">{label}</span>
    </Button>
  </Link>
);

export default Navbar;
