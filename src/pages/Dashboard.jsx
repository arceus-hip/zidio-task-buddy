
import React from 'react';
import Layout from '../components/layout/Layout';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Clock, CheckCircle, AlertCircle } from 'lucide-react';

const data = [
  { name: 'Project A', completed: 16, inProgress: 4, pending: 2 },
  { name: 'Project B', completed: 8, inProgress: 10, pending: 5 },
  { name: 'Project C', completed: 5, inProgress: 8, pending: 12 },
  { name: 'Project D', completed: 20, inProgress: 2, pending: 0 },
];

const Dashboard = () => {
  return (
    <Layout>
      <div className="container">
        <section className="mb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-lg text-muted">
              Track your progress and monitor team activity
            </p>
          </div>
        </section>

        <div className="grid grid-cols-3 mb-8">
          <StatCard 
            title="Completed Tasks" 
            value="49" 
            description="+12% from last week" 
            icon={<CheckCircle className="stat-card-icon" style={{color: '#10b981'}} />}
          />
          <StatCard 
            title="In Progress" 
            value="24" 
            description="8 due soon" 
            icon={<Clock className="stat-card-icon" style={{color: '#f59e0b'}} />}
          />
          <StatCard 
            title="Pending Tasks" 
            value="19" 
            description="3 high priority" 
            icon={<AlertCircle className="stat-card-icon" style={{color: '#ef4444'}} />}
          />
        </div>

        <section className="mb-8">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Project Overview</h3>
            </div>
            <div className="card-content">
              <div className="chart-container">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="completed" stackId="a" fill="#10b981" />
                    <Bar dataKey="inProgress" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="pending" stackId="a" fill="#ef4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

const StatCard = ({ title, value, description, icon }) => (
  <div className="card stat-card">
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm text-muted">{title}</p>
        <p className="stat-card-value">{value}</p>
        <p className="text-xs text-muted">{description}</p>
      </div>
      <div>{icon}</div>
    </div>
  </div>
);

export default Dashboard;
