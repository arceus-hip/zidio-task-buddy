
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Bell, Shield, User, Monitor, Moon, Sun } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="container" style={{maxWidth: '800px'}}>
        <section className="mb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
            <p className="text-lg text-muted">
              Manage your account and application preferences
            </p>
          </div>
        </section>

        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <div className="flex items-center gap-2">
                  <User className="nav-item-icon" />
                  Profile Settings
                </div>
              </h3>
              <p className="card-description">
                Manage your personal information and account details
              </p>
            </div>
            <div className="card-content space-y-4">
              <ProfileField label="Name" value="Jane Smith" />
              <ProfileField label="Email" value="jane.smith@example.com" />
              <ProfileField label="Position" value="Product Manager" />
              <ProfileField label="Department" value="Engineering" />
              <div className="mt-4">
                <button className="btn btn-outline">Edit Profile</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <div className="flex items-center gap-2">
                  <Bell className="nav-item-icon" />
                  Notification Settings
                </div>
              </h3>
              <p className="card-description">
                Configure how you receive notifications
              </p>
            </div>
            <div className="card-content space-y-4">
              <ToggleSetting 
                title="Email Notifications" 
                description="Receive email notifications for task assignments, updates, and mentions"
                enabled={true}
              />
              <ToggleSetting 
                title="Push Notifications" 
                description="Receive browser push notifications for important alerts"
                enabled={false}
              />
              <ToggleSetting 
                title="Task Due Reminders" 
                description="Get notified before your tasks are due"
                enabled={true}
              />
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <div className="flex items-center gap-2">
                  <Monitor className="nav-item-icon" />
                  Appearance
                </div>
              </h3>
              <p className="card-description">
                Customize the look and feel of the application
              </p>
            </div>
            <div className="card-content">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p className="text-sm text-muted">
                    Choose between light and dark mode
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button className="btn btn-icon btn-outline">
                    <Sun className="nav-item-icon" />
                  </button>
                  <button className="btn btn-icon btn-outline" style={{background: 'var(--secondary)'}}>
                    <Moon className="nav-item-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">
                <div className="flex items-center gap-2">
                  <Shield className="nav-item-icon" />
                  Security
                </div>
              </h3>
              <p className="card-description">
                Manage your password and security preferences
              </p>
            </div>
            <div className="card-content space-y-4">
              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-sm text-muted mb-2">
                  Last changed 3 months ago
                </p>
                <button className="btn btn-outline">Change Password</button>
              </div>
              <div className="mt-4">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-muted mb-2">
                  Add an extra layer of security to your account
                </p>
                <button className="btn btn-outline">Enable 2FA</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const ProfileField = ({ label, value }) => (
  <div>
    <div className="text-sm font-medium text-muted">{label}</div>
    <div>{value}</div>
  </div>
);

const ToggleSetting = ({ title, description, enabled: initialEnabled }) => {
  const [enabled, setEnabled] = useState(initialEnabled);
  
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted">{description}</p>
      </div>
      <div 
        className={`toggle-switch ${enabled ? 'active' : ''}`}
        onClick={() => setEnabled(!enabled)}
      >
        <div className="toggle-switch-thumb" />
      </div>
    </div>
  );
};

export default Settings;
