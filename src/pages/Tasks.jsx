
import React from 'react';
import Layout from '../components/layout/Layout';
import { Clock, CheckCircle, AlertCircle, Plus, Filter } from 'lucide-react';

// Sample task data
const tasks = [
  { id: 1, title: 'Update navigation menu', status: 'todo', priority: 'high', dueDate: '2023-10-15', assignee: 'John Doe' },
  { id: 2, title: 'Fix login page responsiveness', status: 'in-progress', priority: 'medium', dueDate: '2023-10-18', assignee: 'Jane Smith' },
  { id: 3, title: 'Implement dark mode', status: 'in-progress', priority: 'low', dueDate: '2023-10-20', assignee: 'John Doe' },
  { id: 4, title: 'Create API documentation', status: 'todo', priority: 'medium', dueDate: '2023-10-25', assignee: 'Alex Johnson' },
  { id: 5, title: 'Setup testing environment', status: 'completed', priority: 'high', dueDate: '2023-10-10', assignee: 'Jane Smith' },
  { id: 6, title: 'Optimize database queries', status: 'completed', priority: 'high', dueDate: '2023-10-12', assignee: 'Alex Johnson' },
];

const Tasks = () => {
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'in-progress');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <Layout>
      <div className="container">
        <section className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
            <p className="text-lg text-muted">
              Manage and track your tasks efficiently
            </p>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-outline btn-sm">
              <Filter className="nav-item-icon" />
              Filter
            </button>
            <button className="btn btn-primary btn-sm">
              <Plus className="nav-item-icon" />
              New Task
            </button>
          </div>
        </section>

        <div className="grid grid-cols-3 gap-6">
          <TaskColumn title="To Do" icon={<AlertCircle className="nav-item-icon" style={{color: '#ef4444'}} />} tasks={todoTasks} />
          <TaskColumn title="In Progress" icon={<Clock className="nav-item-icon" style={{color: '#f59e0b'}} />} tasks={inProgressTasks} />
          <TaskColumn title="Completed" icon={<CheckCircle className="nav-item-icon" style={{color: '#10b981'}} />} tasks={completedTasks} />
        </div>
      </div>
    </Layout>
  );
};

const TaskColumn = ({ title, icon, tasks }) => (
  <div className="task-column">
    <div className="task-column-header">
      {icon}
      <h3 className="font-semibold">{title}</h3>
      <span className="task-badge" style={{background: '#f3f4f6', color: '#374151'}}>
        {tasks.length}
      </span>
    </div>
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
    {tasks.length === 0 && (
      <div style={{border: '1px dashed #d1d5db', borderRadius: 'var(--radius)', padding: '1.5rem', textAlign: 'center', color: 'var(--muted-foreground)'}}>
        <p>No tasks</p>
      </div>
    )}
  </div>
);

const TaskCard = ({ task }) => {
  // Determine the priority badge class
  const priorityBadgeClass = 
    task.priority === 'high' ? 'badge-high' :
    task.priority === 'medium' ? 'badge-medium' :
    'badge-low';
  
  return (
    <div className="card task-card">
      <div className="card-content">
        <h4 className="font-medium mb-2">{task.title}</h4>
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`task-badge ${priorityBadgeClass}`}>
            {task.priority}
          </span>
          <span className="text-xs">{task.assignee}</span>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
