
import React, { useState } from 'react';

const projects = [
  {
    title: 'School Management System',
    category: 'Web Application',
    description: 'Complete school management solution with modules for student management, attendance tracking, grade management, and administrative tasks.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Social Media Management Platform',
    category: 'Web Application',
    description: 'Comprehensive platform for businesses to schedule posts, track engagement metrics, and analyze social media performance across multiple platforms.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Coaching Institute Mobile App',
    category: 'Mobile Application',
    description: 'Mobile application for coaching institutes to manage schedules, courses, student progress, and interactive learning materials.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'E-Commerce Website',
    category: 'Web Development',
    description: 'Fully responsive e-commerce platform with secure payment processing, inventory management, and customer relationship management tools.',
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const Works = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg text-codestack-gray max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered to our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-codestack-black to-transparent opacity-70"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="inline-block bg-codestack-red px-3 py-1 text-xs rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className={`text-white/80 text-sm transition-all duration-300 ${activeProject === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
