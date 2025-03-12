
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
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
      <div className="max-w-6xl mx-auto">
        <section className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Tasks</h1>
            <p className="text-lg text-muted-foreground">
              Manage and track your tasks efficiently
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <TaskColumn title="To Do" icon={<AlertCircle className="w-5 h-5 text-red-500" />} tasks={todoTasks} />
          <TaskColumn title="In Progress" icon={<Clock className="w-5 h-5 text-amber-500" />} tasks={inProgressTasks} />
          <TaskColumn title="Completed" icon={<CheckCircle className="w-5 h-5 text-emerald-500" />} tasks={completedTasks} />
        </div>
      </div>
    </Layout>
  );
};

interface Task {
  id: number;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
  assignee: string;
}

const TaskColumn = ({ title, icon, tasks }: { title: string; icon: React.ReactNode; tasks: Task[] }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center gap-2 mb-4">
      {icon}
      <h3 className="font-semibold">{title}</h3>
      <span className="bg-gray-100 text-gray-700 rounded-full px-2 py-0.5 text-xs ml-2">
        {tasks.length}
      </span>
    </div>
    <div className="space-y-3 flex-grow">
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
    {tasks.length === 0 && (
      <div className="border border-dashed rounded-md p-6 text-center text-muted-foreground flex-grow">
        <p>No tasks</p>
      </div>
    )}
  </div>
);

const TaskCard = ({ task }: { task: Task }) => {
  // Determine the priority badge color
  const priorityBadgeColor = 
    task.priority === 'high' ? 'bg-red-100 text-red-800' :
    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
    'bg-green-100 text-green-800';
  
  return (
    <Card className="cursor-pointer hover:shadow-md transition-all">
      <CardContent className="p-4">
        <h4 className="font-medium mb-2">{task.title}</h4>
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Due: {new Date(task.dueDate).toLocaleDateString()}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className={`text-xs ${priorityBadgeColor} px-2 py-0.5 rounded-full`}>
            {task.priority}
          </span>
          <span className="text-xs">{task.assignee}</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default Tasks;
