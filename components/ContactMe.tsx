
import React, { useState } from 'react';
import contactMeImg from '../media/contact-me.png';

const ContactMe: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <h2 className="font-bimbo text-6xl md:text-8xl mb-4 border-b-2 border-pink-900/30 pb-4 inline-block">
          contact me
        </h2>
        <p className="font-bimbo-alt text-2xl text-pink-300">drop me a message, let's build something.</p>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-2 space-y-10">
          <div className="p-8 bg-pink-900/10 rounded-3xl border border-pink-900/30 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
            <h3 className="font-bimbo text-3xl text-white mb-4">the quick way</h3>
            <ul className="space-y-4 font-bimbo text-xl text-pink-200">
              <li className="flex items-center gap-3">
                <span className="text-[#FF85C1]">✉</span> hello@pinkteletubbi.dev
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF85C1]">@</span> dm me on instagram
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#FF85C1]">📍</span> the internet void
              </li>
            </ul>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-2 bg-pink-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img 
              src={contactMeImg}
              alt="Workspace" 
              className="relative w-full h-40 md:h-52 object-contain bg-black/20 rounded-3xl border-2 border-pink-900/40"
            />
          </div>
        </div>

        <div className="md:col-span-3">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-pink-900/10 rounded-3xl border-2 border-dashed border-[#FF85C1]/50">
              <div className="text-8xl mb-6">📬</div>
              <h3 className="font-bimbo text-5xl text-white mb-4">message sent!</h3>
              <p className="font-bimbo-alt text-xl text-pink-300">i'll get back to you as soon as i finish this coffee.</p>
              <button 
                onClick={() => setSent(false)}
                className="mt-10 font-bimbo text-2xl text-[#FF85C1] hover:underline"
              >
                send another one?
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-bimbo text-2xl text-pink-400 mb-2">your name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-pink-900/5 border-2 border-pink-900/40 rounded-2xl p-4 font-bimbo text-2xl text-white outline-none focus:border-[#FF85C1] transition-colors"
                  placeholder="who are you?"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block font-bimbo text-2xl text-pink-400 mb-2">your email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-pink-900/5 border-2 border-pink-900/40 rounded-2xl p-4 font-bimbo text-2xl text-white outline-none focus:border-[#FF85C1] transition-colors"
                  placeholder="where can i find you?"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block font-bimbo text-2xl text-pink-400 mb-2">the tea</label>
                <textarea 
                  rows={5}
                  required
                  className="w-full bg-pink-900/5 border-2 border-pink-900/40 rounded-2xl p-4 font-bimbo text-2xl text-white outline-none focus:border-[#FF85C1] transition-colors resize-none"
                  placeholder="what's on your mind?"
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-[#FF85C1] text-black font-bimbo text-4xl rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,133,193,0.3)] hover:shadow-[0_0_40px_rgba(255,133,193,0.6)]"
              >
                blast it!
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
