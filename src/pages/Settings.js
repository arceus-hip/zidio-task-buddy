
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bell, Shield, User, Monitor, Moon, Sun } from 'lucide-react';

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <section className="mb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Settings</h1>
            <p className="text-lg text-muted-foreground">
              Manage your account and application preferences
            </p>
          </div>
        </section>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Profile Settings
              </CardTitle>
              <CardDescription>
                Manage your personal information and account details
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ProfileField label="Name" value="Jane Smith" />
              <ProfileField label="Email" value="jane.smith@example.com" />
              <ProfileField label="Position" value="Product Manager" />
              <ProfileField label="Department" value="Engineering" />
              <div className="pt-2">
                <Button variant="outline">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Settings
              </CardTitle>
              <CardDescription>
                Configure how you receive notifications
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
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
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Appearance
              </CardTitle>
              <CardDescription>
                Customize the look and feel of the application
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Theme</h3>
                  <p className="text-sm text-muted-foreground">
                    Choose between light and dark mode
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Sun className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon" className="h-8 w-8 bg-secondary">
                    <Moon className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security
              </CardTitle>
              <CardDescription>
                Manage your password and security preferences
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Last changed 3 months ago
                </p>
                <Button variant="outline">Change Password</Button>
              </div>
              <div className="pt-2">
                <h3 className="font-medium">Two-Factor Authentication</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  Add an extra layer of security to your account
                </p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

const ProfileField = ({ label, value }) => (
  <div>
    <div className="text-sm font-medium text-muted-foreground">{label}</div>
    <div className="text-base">{value}</div>
  </div>
);

const ToggleSetting = ({ title, description, enabled }) => (
  <div className="flex items-center justify-between">
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <div className={`w-11 h-6 rounded-full p-1 cursor-pointer ${enabled ? 'bg-primary' : 'bg-gray-300'}`}>
      <div className={`h-4 w-4 rounded-full bg-white transform transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0'}`} />
    </div>
  </div>
);

export default Settings;
