
import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from './blogData';

const Blogs: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="font-bimbo text-5xl md:text-6xl mb-12 border-b-2 border-pink-900/50 pb-4 inline-block">
        blogs
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {blogPosts.map((blog) => (
          <div key={blog.slug} className="group relative p-1 rounded-3xl bg-pink-900/10 hover:bg-[#FF85C1]/20 transition-all duration-500 border border-pink-900/30 hover:border-[#FF85C1]/50 shadow-xl">
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

              <Link
                to={`/blogs/${blog.slug}`}
                className="font-bimbo text-2xl py-2 rounded-xl border-2 border-pink-500/30 hover:bg-pink-500/10 text-[#FF85C1] transition-all active:scale-95 text-center"
              >
                read more →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
