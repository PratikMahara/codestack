import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    name: "Sarah Chen",
    position: "CEO",
    company: "TechFlow Solutions",
    review: "Working with this team has been transformative for our business. Their attention to detail and innovative approach exceeded all expectations.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    position: "CTO",
    company: "InnovateHub",
    review: "Outstanding technical expertise and professionalism. They delivered solutions we didn't even know we needed.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    name: "Emily Watson",
    position: "Founder",
    company: "GreenEarth Ventures",
    review: "Exceptional service from start to finish. Our project was delivered on time and under budget with remarkable quality.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    name: "David Park",
    position: "Director",
    company: "Streamline Analytics",
    review: "Their strategic approach revolutionized our workflow and improved our efficiency by 250%. Truly game-changing.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
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
    <section className="py-16 bg-zinc-900 relative overflow-hidden">
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
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {clients.map((client, index) => (
            <ClientCard key={client.id} client={client} index={index} />
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl p-8 text-white shadow-2xl border border-zinc-700/30">
            <h3 className="text-2xl font-bold mb-3">Ready to Join Our Success Stories?</h3>
            <p className="text-lg opacity-90 mb-6">
              Let's work together to create something extraordinary.
            </p>
            <button className="bg-white text-zinc-900 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Get Started Today
            </button>
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
