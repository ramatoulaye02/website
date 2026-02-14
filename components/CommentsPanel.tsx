import React, { useEffect, useState } from 'react';
import { BlogComment, fetchComments, addComment, containsSpam } from '../utils/supabase';

type CommentsPanelProps = {
  blogSlug: string;
};

const CommentsPanel: React.FC<CommentsPanelProps> = ({ blogSlug }) => {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [loading, setLoading] = useState(true);
  const [commentName, setCommentName] = useState('');
  const [commentMessage, setCommentMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadComments = async () => {
      setLoading(true);
      const loaded = await fetchComments(blogSlug);
      setComments(loaded);
      setLoading(false);
    };

    loadComments();
  }, [blogSlug]);

  const handleCommentSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    if (!commentMessage.trim()) {
      setError('message cannot be empty');
      return;
    }

    if (containsSpam(commentMessage)) {
      setError('your message was flagged as spam. please try again.');
      return;
    }

    setSubmitting(true);
    const newComment = await addComment(blogSlug, commentMessage.trim(), commentName.trim() || undefined);

    if (newComment) {
      setComments([newComment, ...comments]);
      setCommentName('');
      setCommentMessage('');
    } else {
      setError('failed to post comment. please try again.');
    }

    setSubmitting(false);
  };

  return (
    <div className="flex flex-col h-full space-y-6">
      <div>
        <h3 className="font-bimbo text-3xl text-white mb-4">comments</h3>
        <form onSubmit={handleCommentSubmit} className="space-y-4">
          <div>
            <label className="block font-bimbo text-base text-pink-300 mb-2">name (optional)</label>
            <input
              type="text"
              value={commentName}
              onChange={(e) => setCommentName(e.target.value)}
              className="w-full bg-pink-900/5 border-2 border-pink-900/40 rounded-xl p-3 font-bimbo text-base text-white outline-none focus:border-[#FF85C1] transition-colors"
              placeholder="anonymous"
            />
          </div>
          <div>
            <label className="block font-bimbo text-base text-pink-300 mb-2">comment</label>
            <textarea
              rows={4}
              value={commentMessage}
              onChange={(e) => setCommentMessage(e.target.value)}
              className="w-full bg-pink-900/5 border-2 border-pink-900/40 rounded-xl p-3 font-bimbo text-base text-white outline-none focus:border-[#FF85C1] transition-colors resize-none"
              placeholder="drop your thoughts"
              required
            />
          </div>
          {error && <p className="font-bimbo text-base text-red-400">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full font-bimbo text-xl px-4 py-3 rounded-xl border-2 border-pink-500/40 text-[#FF85C1] hover:bg-pink-500/10 transition-all active:scale-95 disabled:opacity-50"
          >
            {submitting ? 'posting...' : 'post'}
          </button>
        </form>
      </div>

      <div className="flex-1 overflow-y-auto">
        <h4 className="font-bimbo text-xl text-pink-300 mb-4">
          {loading ? 'loading...' : `${comments.length} ${comments.length === 1 ? 'comment' : 'comments'}`}
        </h4>
        <div className="space-y-4">
          {comments.length === 0 ? (
            <p className="font-bimbo-alt text-base text-pink-200/70">be the first to comment!</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="p-4 rounded-lg border border-pink-900/30 bg-pink-900/10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="font-bimbo text-base text-white">
                    {comment.name || 'anonymous'}
                  </span>
                  <span className="font-bimbo text-sm text-pink-300">
                    {new Date(comment.created_at).toLocaleDateString('en-US', {
                      month: 'short',
                      day: '2-digit',
                    })}
                  </span>
                </div>
                <p className="font-bimbo-alt text-base text-pink-100/90 leading-relaxed">
                  {comment.message}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsPanel;
