import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogPosts } from './blogData';
import authorPfp from '../media/author-pfp.png';
import CommentsPanel from './CommentsPanel';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto py-20 px-6 text-center">
        <h2 className="font-bimbo text-5xl md:text-6xl text-white mb-4">blog not found</h2>
        <p className="font-bimbo-alt text-xl text-pink-300 mb-8">
          the post you are looking for does not exist yet.
        </p>
        <Link
          to="/blogs"
          className="inline-block font-bimbo text-2xl px-6 py-3 rounded-xl border-2 border-pink-500/40 text-[#FF85C1] hover:bg-pink-500/10 transition-all"
        >
          back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <div className="mb-10">
        <Link
          to="/blogs"
          className="font-bimbo text-xl text-pink-300 hover:text-white transition-colors"
        >
          ← back to blogs
        </Link>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Comments panel on left */}
        <div className="md:col-span-1 order-2 md:order-1">
          <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-hidden flex flex-col">
            <CommentsPanel blogSlug={slug ?? ''} />
          </div>
        </div>

        {/* Blog content on right */}
        <div className="md:col-span-3 order-1 md:order-2 p-8 md:p-10 rounded-3xl border border-pink-900/30 bg-black/40 backdrop-blur-sm shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <span className="font-bimbo text-pink-400">{post.date}</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-bimbo text-lg px-3 py-0.5 bg-pink-900/20 border border-pink-500/20 rounded-lg text-pink-400"
                >
                  {tag.toLowerCase()}
                </span>
              ))}
            </div>
          </div>

          <h1 className="font-bimbo text-5xl md:text-6xl text-white mb-4 tracking-tight">
            {post.title}
          </h1>
          <p className="font-bimbo-alt text-xl text-pink-200/80 mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 mb-10">
            <img
              src={authorPfp}
              alt="Author"
              className="w-24 h-24 rounded-full border-2 border-pink-500/40 object-cover flex-shrink-0"
            />
            <div>
              <div className="font-bimbo text-2xl text-white">{post.author}</div>
              <div className="font-bimbo text-lg text-pink-300">{post.readTime}</div>
            </div>
          </div>

          <div className="space-y-8">
            {post.sections.map((section, idx) => (
              <section key={`${section.heading ?? 'section'}-${idx}`}>
                {section.heading && (
                  <h2 className="font-bimbo text-3xl text-[#FF85C1] mb-3">{section.heading}</h2>
                )}
                {section.paragraphs.map((paragraph, pIdx) => (
                  <p
                    key={`${idx}-${pIdx}`}
                    className="font-bimbo-alt text-lg text-pink-100/90 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
