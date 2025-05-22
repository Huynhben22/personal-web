import React from 'react';
import { Coffee, Waves, Gamepad2, Zap, Mail } from 'lucide-react';
import dogo from '../images/dogo.jpg';

const Personal = () => {
  const personalInterests = [
    { icon: Coffee, title: 'Coffee Enthusiast', description: 'Always exploring new brewing methods and local roasters, with traditional Vietnamese coffee as my personal favorite' },
    { icon: Waves, title: 'Swimming', description: 'Dedicated swimmer since 4th grade, developing discipline and endurance that translates to my work ethic' },
    { icon: Gamepad2, title: 'Gaming', description: 'FPS and competitive games keep my reflexes sharp and strategic thinking honed' },
    { icon: Zap, title: 'Gym', description: 'Started my fitness journey during COVID, now dedicated to body building and wellness' }
  ];

  return (
    <div id="personal" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Beyond Code
        </h2>
        <p className="text-center text-gray-400 mb-16 text-lg">What drives me outside of development</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personalInterests.map((interest, index) => {
            const IconComponent = interest.icon;
            return (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center border border-gray-700 hover:border-purple-500/30">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 p-4 mb-6 mx-auto border border-purple-500/30">
                  <IconComponent size={32} className="text-purple-400 mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{interest.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{interest.description}</p>
              </div>
            );
          })}
        </div>
        
                <div className="mt-24 text-center">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center gap-3">
            <Heart className="text-pink-400" size={32} />
            My Best Friend
            <Heart className="text-pink-400" size={32} />
          </h3>
          
          <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 max-w-2xl mx-auto">
            <div className="mb-6">
              <img
                src={dogo}
                alt="Ben and his dog"
                className="w-full max-w-md h-64 rounded-xl object-cover mx-auto border-2 border-pink-500/30 shadow-lg"
              />
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Meet my unofficial little brother, Gumball! Always by my side through thick and thin, 
              he's the best motivation for pushing through all my problems, no matter how challenging. 
              The perfect balance to a developer's life! 🐾
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-700 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about technology. 
              Whether you're looking for a full-stack developer or want to explore innovative solutions together, I'd love to hear from you.
            </p>
            <a
              href="mailto:HuynhBen22@yahoo.com"
              target="_self"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-purple-700 hover:to-cyan-700 transition-all transform hover:scale-105 font-semibold"
            >
              <Mail size={20} />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;