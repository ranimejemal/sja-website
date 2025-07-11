
import React from 'react';
import Navigation from '@/components/Navigation';

const Projects = () => {
  // Placeholder project data - you can replace these with your own images and project names
  const projects = [
    {
      id: 1,
      title: "Lake Bled Estate",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Mix-use Tower (Europe)",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Urban Masterplan (North America)",
      image: "https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Waterfront Development",
      image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      title: "Commercial Complex",
      image: "https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      title: "Residential Villa",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Projects Grid */}
      <div className="pt-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
          {projects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-center">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
