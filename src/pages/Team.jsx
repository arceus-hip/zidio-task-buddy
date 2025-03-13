
import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Plus, MessageSquare, Mail, Phone, UserPlus } from 'lucide-react';
import TeamMemberForm from '../components/forms/TeamMemberForm';

// Sample team data
const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Project Manager', email: 'john@example.com', phone: '+1234567890', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Jane Smith', role: 'Frontend Developer', email: 'jane@example.com', phone: '+1234567891', avatar: 'https://i.pravatar.cc/150?img=5' },
  { id: 3, name: 'Alex Johnson', role: 'Backend Developer', email: 'alex@example.com', phone: '+1234567892', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Emily Brown', role: 'UI/UX Designer', email: 'emily@example.com', phone: '+1234567893', avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: 5, name: 'Michael Wilson', role: 'QA Engineer', email: 'michael@example.com', phone: '+1234567894', avatar: 'https://i.pravatar.cc/150?img=8' },
  { id: 6, name: 'Sarah Davis', role: 'DevOps Engineer', email: 'sarah@example.com', phone: '+1234567895', avatar: 'https://i.pravatar.cc/150?img=9' },
];

const Team = () => {
  const [showMemberForm, setShowMemberForm] = useState(false);

  return (
    <Layout>
      <div className="container">
        <section className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Team</h1>
            <p className="text-lg text-muted">
              Manage your team members and their roles
            </p>
          </div>
          <button 
            className="btn btn-primary"
            onClick={() => setShowMemberForm(true)}
          >
            <UserPlus className="nav-item-icon" />
            Add Member
          </button>
        </section>

        {showMemberForm && (
          <div className="card mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">Add Team Member</h2>
            <TeamMemberForm onClose={() => setShowMemberForm(false)} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const TeamMemberCard = ({ member }) => (
  <div className="card team-card">
    <div className="team-card-header"></div>
    <div className="card-content">
      <div className="flex flex-col items-center">
        <div className="avatar">
          <img src={member.avatar} alt={member.name} />
        </div>
        <h3 className="font-medium text-lg">{member.name}</h3>
        <p className="text-muted mb-4">{member.role}</p>
        
        <div className="flex gap-2 w-100 mb-4">
          <button className="btn btn-outline btn-sm">
            <Mail className="nav-item-icon" />
            Email
          </button>
          <button className="btn btn-outline btn-sm">
            <MessageSquare className="nav-item-icon" />
            Chat
          </button>
        </div>
        
        <div className="w-100 mt-6 space-y-2">
          <div className="flex items-center gap-2">
            <Mail className="nav-item-icon text-muted" />
            <span>{member.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="nav-item-icon text-muted" />
            <span>{member.phone}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Team;
