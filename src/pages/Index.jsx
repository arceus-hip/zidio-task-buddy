
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { ArrowRight, FolderPlus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CreateProjectForm from '../components/forms/CreateProjectForm';

const Index = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <Layout>
      <div className="container">
        <section className="mb-8">
          <div className="flex justify-between items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">Welcome back, Team</h1>
              <p className="text-lg text-muted">
                Track your tasks and collaborate with your team efficiently
              </p>
            </div>
            <button 
              className="btn btn-primary flex items-center gap-2"
              onClick={() => setShowProjectForm(true)}
            >
              <FolderPlus className="h-5 w-5" />
              Create Project
            </button>
          </div>
        </section>

        {showProjectForm && (
          <section className="mb-8">
            <div className="card p-6">
              <h2 className="text-2xl font-semibold mb-6">Create New Project</h2>
              <CreateProjectForm onClose={() => setShowProjectForm(false)} />
            </div>
          </section>
        )}

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
      <Link to={link} className="btn btn-outline flex items-center gap-2">
        Get Started
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </div>
);

export default Index;
