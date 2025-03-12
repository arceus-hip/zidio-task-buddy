
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus, MessageSquare, Mail, Phone } from 'lucide-react';

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
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Team</h1>
            <p className="text-lg text-muted-foreground">
              Manage your team members and their roles
            </p>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Add Member
          </Button>
        </section>

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
  <Card className="overflow-hidden hover:shadow-md transition-all">
    <div className="bg-primary h-8"></div>
    <CardContent className="pt-5 p-6">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white -mt-16 mb-4 shadow-sm">
          <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="font-medium text-lg">{member.name}</h3>
        <p className="text-muted-foreground mb-4">{member.role}</p>
        
        <div className="flex justify-center gap-2 w-full">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Mail className="w-4 h-4" />
            Email
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <MessageSquare className="w-4 h-4" />
            Chat
          </Button>
        </div>
        
        <div className="w-full mt-6 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-muted-foreground" />
            <span>{member.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-muted-foreground" />
            <span>{member.phone}</span>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default Team;
