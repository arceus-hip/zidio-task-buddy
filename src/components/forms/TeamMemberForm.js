
import React, { useState } from 'react';
import { UserPlus } from 'lucide-react';
import { toast } from 'sonner';

const roles = [
  'Project Manager',
  'Frontend Developer',
  'Backend Developer',
  'UI/UX Designer',
  'QA Engineer',
  'DevOps Engineer',
  'Full Stack Developer'
];

const TeamMemberForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate team member addition
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Team member added successfully");
      if (onClose) onClose();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="member-name" className="block text-sm font-medium">
          Full Name
        </label>
        <input
          id="member-name"
          className="w-full p-2 border rounded-md"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter full name"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="member-email" className="block text-sm font-medium">
          Email
        </label>
        <input
          id="member-email"
          type="email"
          className="w-full p-2 border rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
          required
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="member-phone" className="block text-sm font-medium">
          Phone
        </label>
        <input
          id="member-phone"
          className="w-full p-2 border rounded-md"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="member-role" className="block text-sm font-medium">
          Role
        </label>
        <select
          id="member-role"
          className="w-full p-2 border rounded-md"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="" disabled>Select a role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>
      
      <div className="flex justify-end gap-2">
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
          <UserPlus className="h-4 w-4" />
          {isSubmitting ? 'Adding...' : 'Add Member'}
        </button>
      </div>
    </form>
  );
};

export default TeamMemberForm;
