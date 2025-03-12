
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <section className="mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Welcome back, Team</h1>
            <p className="text-lg text-muted-foreground">
              Track your tasks and collaborate with your team efficiently
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <QuickActionCard
            title="Create New Task"
            description="Add a new task to your project backlog"
            link="/tasks/new"
          />
          <QuickActionCard
            title="View Projects"
            description="Check the status of ongoing projects"
            link="/projects"
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

const QuickActionCard = ({ title, description, link }: { title: string; description: string; link: string }) => (
  <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground mb-4">{description}</p>
    <Button variant="outline" className="w-full group" asChild>
      <a href={link}>
        Get Started
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      </a>
    </Button>
  </Card>
);

export default Index;
