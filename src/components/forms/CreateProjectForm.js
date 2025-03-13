
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Users } from 'lucide-react';
import { toast } from 'sonner';

// Sample team members data (in a real app, this would come from an API)
const teamMembers = [
  { id: 1, name: 'John Doe', role: 'Project Manager' },
  { id: 2, name: 'Jane Smith', role: 'Frontend Developer' },
  { id: 3, name: 'Alex Johnson', role: 'Backend Developer' },
  { id: 4, name: 'Emily Brown', role: 'UI/UX Designer' },
  { id: 5, name: 'Michael Wilson', role: 'QA Engineer' },
  { id: 6, name: 'Sarah Davis', role: 'DevOps Engineer' },
];

const CreateProjectForm = ({ onClose }) => {
  const [projectName, setProjectName] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate project creation with team members
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Project created successfully with " + selectedMembers.length + " team members");
      if (onClose) onClose();
      navigate('/projects');
    }, 1000);
  };

  const toggleMemberSelection = (memberId) => {
    if (selectedMembers.includes(memberId)) {
      setSelectedMembers(selectedMembers.filter(id => id !== memberId));
    } else {
      setSelectedMembers([...selectedMembers, memberId]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Project Details</h3>
        <div className="space-y-2">
          <label htmlFor="project-name" className="block text-sm font-medium">
            Project Name
          </label>
          <input
            id="project-name"
            className="w-full p-2 border rounded-md"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            placeholder="Enter project name"
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="project-description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="project-description"
            className="w-full p-2 border rounded-md"
            value={projectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            placeholder="Enter project description"
            rows={3}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="due-date" className="block text-sm font-medium">
            Due Date
          </label>
          <input
            id="due-date"
            type="date"
            className="w-full p-2 border rounded-md"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="text-lg font-medium flex items-center gap-2">
          <Users className="h-5 w-5" />
          Assign Team Members
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {teamMembers.map(member => (
            <div 
              key={member.id} 
              className={`p-3 border rounded-md cursor-pointer ${
                selectedMembers.includes(member.id) ? 'bg-primary/10 border-primary' : ''
              }`}
              onClick={() => toggleMemberSelection(member.id)}
            >
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  checked={selectedMembers.includes(member.id)}
                  onChange={() => toggleMemberSelection(member.id)}
                  className="h-4 w-4"
                />
                <div>
                  <p className="font-medium">{member.name}</p>
                  <p className="text-sm text-muted">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-end gap-2 pt-4">
        <button 
          type="button" 
          onClick={onClose}
          className="px-4 py-2 border rounded-md hover:bg-gray-100"
        >
          Cancel
        </button>
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          {isSubmitting ? 'Creating...' : 'Create Project'}
        </button>
      </div>
    </form>
  );
};

export default CreateProjectForm;
