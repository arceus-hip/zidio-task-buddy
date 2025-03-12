
import React from 'react';
import Layout from '../components/layout/Layout';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <div className="container">
        <section className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back, Team</h1>
            <p className="text-lg text-muted">
              Track your tasks and collaborate with your team efficiently
            </p>
          </div>
        </section>

        <section className="grid grid-cols-3">
          <QuickActionCard
            title="Create New Task"
            description="Add a new task to your project backlog"
            link="/tasks"
          />
          <QuickActionCard
            title="View Dashboard"
            description="Check the status of ongoing projects"
            link="/dashboard"
          />
          <QuickActionCard
            title="Team Overview"
            description="See what your team is working on"
            link="/team"
          />
        </section>
      </div>
    </Layout>
  );
};

const QuickActionCard = ({ title, description, link }) => (
  <div className="card">
    <div className="card-content">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted mb-4">{description}</p>
      <Link to={link} className="btn btn-outline">
        Get Started
        <ArrowRight className="nav-item-icon" />
      </Link>
    </div>
  </div>
);

export default Index;
