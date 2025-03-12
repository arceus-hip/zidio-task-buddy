
import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="ml-64 p-8">{children}</main>
    </div>
  );
};

export default Layout;
