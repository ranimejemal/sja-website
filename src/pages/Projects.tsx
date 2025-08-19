
import React from 'react';
import Navigation from '@/components/Navigation';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: "VILLA M",
      image: "/assets/Copie de Copie de ARCHITECTURE (Présentation) (1).png"
    },
    {
      id: 2,
      title: "TOWER I",
      image: "/assets/tower.png"
    },
    {
      id: 3,
      title: "VILLA K",
      image: "/assets/Copie de Copie de ARCHITECTURE (Présentation) (7).png"
    },
    {
      id: 4,
      title: "VILLA x",
      image: "/assets/Copie de Copie de ARCHITECTURE (Présentation) (12).png"
    },
    {
      id: 5,
      title: "STUDIO S",
      image: "/assets/Copie de Copie de ARCHITECTURE (Présentation) (2).png"
    },
    {
      id: 6,
      title: "HOUSE F",
      image: "/assets/Copie de Copie de ARCHITECTURE (Présentation) (4).png"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
