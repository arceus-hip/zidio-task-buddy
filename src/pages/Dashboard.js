
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
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
      <div className="max-w-6xl mx-auto">
        <section className="mb-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Track your progress and monitor team activity
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <StatCard 
            title="Completed Tasks" 
            value="49" 
            description="+12% from last week" 
            icon={<CheckCircle className="h-8 w-8 text-emerald-500" />}
          />
          <StatCard 
            title="In Progress" 
            value="24" 
            description="8 due soon" 
            icon={<Clock className="h-8 w-8 text-amber-500" />}
          />
          <StatCard 
            title="Pending Tasks" 
            value="19" 
            description="3 high priority" 
            icon={<AlertCircle className="h-8 w-8 text-red-500" />}
          />
        </div>

        <section className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={data}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="completed" stackId="a" fill="#16a34a" />
                    <Bar dataKey="inProgress" stackId="a" fill="#f59e0b" />
                    <Bar dataKey="pending" stackId="a" fill="#f43f5e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

const StatCard = ({ title, value, description, icon }) => (
  <Card>
    <CardContent className="pt-6">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2">{value}</p>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
        <div>{icon}</div>
      </div>
    </CardContent>
  </Card>
);

export default Dashboard;
