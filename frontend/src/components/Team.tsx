
import React from 'react';

const teamMembers = {
  mentors: [
    {
      name: 'Er. Bikas Bhandari',
      position: 'Mentor',
      image: 'Bikash.jpeg'
    },
    {
      name: 'Er. Bechu Pandit',
      position: 'Mentor',
       image: 'bechu.jpeg'
    }
    ,
    {
      name:'Er. Jeevan Acharya',
      position:'Structural Engineer(Mentor)',
      image:'jeevan.jpeg'

    }
  ],
  leadership: [
    {
      name: 'Er. Biplav Acharya',
      position: 'CEO & Managing Director',
       image: 'biplav.jpeg'
    },
     {
      name: 'Er. Pratik Mahara',
      position: 'Project Head & Senior Developer',
       image: 'me.jpg'
    },
  ],
  developers: [
      {
      name:'Pratik Poudel',
      position:'Junior Cybersecurity Analyst ',
      image:'poudel.jpeg'
    },
   
    {
      name: 'Prabesh Bhandari',
      position: 'Developer',
       image: 'prabesh.jpeg'
    },
    {
      name: 'Roshan Thapa',
      position: 'Developer',
      image:'Roshan Thapa.jpg'
    },

 {
      name:'Sagar Ramrudri',
      position:'Developer',
      image:'Sagar Ramrudri.png'
    },
     {
      name:'Rajan',
      position:'Developer',
      image:'rajan.jpg'
    },
    {
      name:'Bibek Singh',
      position:'Developer',
      image:'Bibek.jpeg'
    }
    ,
    {
      name:'Aaditya Kc',
      position:'Developer',
      image:'Aaditya.jpeg'
    },  {
      name:'Bihbab Dahal',
      position:'Developer',
      image:''
    },
      {
      name:'Bishal Sharma',
      position:'Developer',
      image:''
    }
  ],
  interns: [
      {
      name:'Binita',
      position:'Intern',
      image:'binita.jpeg'
    },{
      name:'Ramesh Sharma',
      position:'Intern',
      image:''
    }
  ]
};

const Team = () => {
  return (
    <section id="team" className="py-20 bg-codestack-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet <span className="gradient-text">Our Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our talented professionals are dedicated to delivering exceptional results and driving innovation.
          </p>
        </div>

        {/* Mentors */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Mentors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.mentors.map((member, index) => (
              <div key={index} className="bg-codestack-black-light rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-codestack-red">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Leadership</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.leadership.map((member, index) => (
              <div key={index} className="bg-codestack-black-light rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-codestack-red">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Developers */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Developers</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.developers.map((member, index) => (
              <div key={index} className="bg-codestack-black-light rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                <div className="w-28 h-28 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-codestack-red">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interns */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Interns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.interns.map((member, index) => (
              <div key={index} className="bg-codestack-black-light rounded-lg p-6 text-center transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold mb-1">{member.name}</h4>
                <p className="text-codestack-red">{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
