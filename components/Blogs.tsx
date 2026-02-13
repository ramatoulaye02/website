
import React from 'react';

const Blogs: React.FC = () => {
  const blogs = [
    {
      title: "why black & pink is the only valid theme",
      date: "Oct 24, 2023",
      excerpt: "an essay on color theory and how to make people's eyes happy and sad at the same time.",
      tags: ["design", "opinion"]
    },
    {
      title: "how i built this portfolio while drinking too much coffee",
      date: "Sept 12, 2023",
      excerpt: "a technical deep dive into the mess that is my source code and why i love it.",
      tags: ["coding", "lifestyle"]
    },
    {
      title: "the future of web design: more gradients, less sense",
      date: "Aug 05, 2023",
      excerpt: "predictions for 2024 and why we are all going back to retro styles eventually.",
      tags: ["ux", "future"]
    },
    {
      title: "my favorite css tricks for glowing text",
      date: "July 19, 2023",
      excerpt: "because if it doesn't glow, is it even a website? let's talk about box-shadow abuse.",
      tags: ["tutorial", "css"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        blogs
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog, idx) => (
          <div key={idx} className="group relative p-1 rounded-3xl bg-pink-900/10 hover:bg-[#FF85C1]/20 transition-all duration-500 border border-pink-900/30 hover:border-[#FF85C1]/50 shadow-xl">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-[22px] h-full flex flex-col">
              <div className="flex justify-between items-start mb-4 gap-4">
                <span className="font-bimbo text-pink-400">{blog.date}</span>
                <div className="flex flex-wrap justify-end gap-2">
                  {blog.tags.map(tag => (
                    <span
                      key={tag}
                      className="font-bimbo text-lg px-3 py-0.5 bg-pink-900/20 border border-pink-500/20 rounded-lg text-pink-400"
                    >
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="font-bimbo text-4xl text-white mb-4 tracking-tight group-hover:text-[#FF85C1] transition-colors">
                {blog.title}
              </h3>

              <p className="font-bimbo-alt text-lg text-pink-200/70 mb-8 flex-grow leading-relaxed">
                {blog.excerpt}
              </p>

              <button className="font-bimbo text-2xl py-2 rounded-xl border-2 border-pink-500/30 hover:bg-pink-500/10 text-[#FF85C1] transition-all active:scale-95">
                read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
