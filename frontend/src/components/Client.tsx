import React from 'react';
import { Star, Quote, Contact } from 'lucide-react';
import { Link } from 'react-router-dom';
interface Client {
  id: number;
  name: string;
  position: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: "Hemraj Magar",
    position: "Project Manager",
    company: "Gorkha Construction and Consultants",
    review: "CodeStack delivered a high-quality construction management system tailored to our needs. Their team was professional, efficient, and exceeded our expectations.",
    rating: 5,
    avatar: "./gorkha.jpeg"
  },
  {
    id: 2,
    name: "",
    position: "Founder",
    company: "Smile Garden Dental Clinic",
    review: "We're extremely satisfied with the appointment booking and patient record system developed by CodeStack. It has significantly improved our workflow and patient experience.",
    rating: 5,
    avatar: "./clinic.jpeg"
  },
  {
    id: 3,
    name: "Raj Sharma",
    position: "Manager",
    company: "Hotel Aashraya",
    review: "The online booking and hotel management system created by CodeStack was exactly what we needed. Smooth design, user-friendly interface, and excellent support.",
    rating: 5,
    avatar: "./aashraya.jpeg"
  },
  {
    id: 4,
    name: "",
    position: "Owner",
    company: "Classic Wear",
    review: "CodeStack built a modern, easy-to-manage eCommerce platform for our clothing store. Their team delivered on time and provided great post-launch support.",
    rating: 5,
    avatar: "./classicwear.jpeg"
  }
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? 'text-amber-400 fill-current'
              : 'text-gray-500'
          }`}
        />
      ))}
    </div>
  );
};

const ClientCard: React.FC<{ client: Client; index: number }> = ({ client, index }) => {
  return (
    <div 
      className="group bg-zinc-800/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
      style={{ 
        animationDelay: `${index * 150}ms`,
        animation: 'slideUp 0.8s ease-out forwards'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative z-10">
        <Quote className="w-6 h-6 text-amber-400 mb-4 opacity-70" />
        
        <p className="text-gray-300 leading-relaxed mb-6 font-medium">
          "{client.review}"
        </p>
        
        <div className="mb-4">
          <StarRating rating={client.rating} />
        </div>
        
        <div className="flex items-center space-x-3">
          <img
            src={client.avatar}
            alt={client.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-zinc-600 shadow-md group-hover:ring-amber-400/50 transition-all duration-300"
          />
          <div>
            <h4 className="font-bold text-white">{client.name}</h4>
            <p className="text-amber-400 font-semibold text-sm">{client.position}</p>
            <p className="text-gray-400 text-xs">{client.company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientsSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
“Don’t just take our word for it — here’s what our clients say after receiving their custom-built solutions from CodeStack.”          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {clients.map((client, index) => (
            <ClientCard key={client.id} client={client} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white shadow-2xl border border-zinc-700/30">
            <h3 className="text-2xl font-bold mb-3">Ready to Build Your Own Success Story with CodeStack?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let’s build a product that sets your brand apart.
            </p>
      <Link to="/contact">
  <button className="bg-white text-zinc-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
    Get Started Today
  </button>
</Link>
          
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientsSection;
