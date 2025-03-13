
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Plus, Users, Calendar, MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectForm from '../components/forms/ProjectForm';

// Sample project data
const projects = [
  { 
    id: 1, 
    name: 'Website Redesign', 
    description: 'Redesign the company website with new branding', 
    teamMembers: 5,
    tasks: 12,
    dueDate: '2023-12-15'
  },
  { 
    id: 2, 
    name: 'Mobile App Development', 
    description: 'Create a new mobile app for customers', 
    teamMembers: 8,
    tasks: 24,
    dueDate: '2024-02-20'
  },
  { 
    id: 3, 
    name: 'Marketing Campaign', 
    description: 'Q4 Marketing campaign for new product launch', 
    teamMembers: 4,
    tasks: 8,
    dueDate: '2023-11-30'
  },
];

const Projects = () => {
  const [showProjectForm, setShowProjectForm] = useState(false);

  return (
    <Layout>
      <div className="container">
        <section className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-lg text-muted">
              Manage your team projects and track their progress
            </p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => setShowProjectForm(true)}
          >
            <Plus className="nav-item-icon" />
            New Project
          </button>
        </section>

        {showProjectForm && (
          <div className="card mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">Create New Project</h2>
            <ProjectForm onClose={() => setShowProjectForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const ProjectCard = ({ project }) => (
  <div className="card">
    <div className="card-content">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-semibold">{project.name}</h3>
        <button className="text-muted p-1 rounded-full hover:bg-gray-100">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
      <p className="text-muted mb-4">{project.description}</p>
      
      <div className="flex justify-between items-center text-sm mb-4">
        <div className="flex items-center gap-1">
          <Users className="h-4 w-4 text-muted" />
          <span>{project.teamMembers} members</span>
        </div>
        <div className="flex items-center gap-1">
          <Calendar className="h-4 w-4 text-muted" />
          <span>Due {new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="flex justify-between">
        <Link to="/tasks" className="text-primary hover:underline">
          {project.tasks} Tasks
        </Link>
        <Link to="/team" className="text-primary hover:underline">
          View Team
        </Link>
      </div>
    </div>
  </div>
);

export default Projects;
