import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wyzzhbqesagtehoduhey.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_k8hVz0K88hSfcW8WB158MA_xb_dRWGe';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export type BlogComment = {
  id: string;
  blog_slug: string;
  name: string | null;
  message: string;
  created_at: string;
};

// basic profanity filter
const PROFANITY_LIST = [
  'spam',
  'viagra',
  'casino',
  'porn',
  'xxx',
  'click here',
  'buy now',
  'limited time',
];

export const containsSpam = (text: string): boolean => {
  const lower = text.toLowerCase();
  return PROFANITY_LIST.some((word) => lower.includes(word));
};

export const fetchComments = async (blogSlug: string): Promise<BlogComment[]> => {
  try {
    const { data, error } = await supabase
      .from('blog_comments')
      .select('*')
      .eq('blog_slug', blogSlug)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching comments:', error);
      return [];
    }

    return (data ?? []) as BlogComment[];
  } catch (err) {
    console.error('Unexpected error fetching comments:', err);
    return [];
  }
};

export const addComment = async (
  blogSlug: string,
  message: string,
  name?: string
): Promise<BlogComment | null> => {
  try {
    if (containsSpam(message)) {
      console.warn('Message flagged as potential spam');
      return null;
    }

    const { data, error } = await supabase
      .from('blog_comments')
      .insert([
        {
          blog_slug: blogSlug,
          name: name || null,
          message,
          created_at: new Date().toISOString(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Error adding comment:', error);
      return null;
    }

    return (data ?? null) as BlogComment | null;
  } catch (err) {
    console.error('Unexpected error adding comment:', err);
    return null;
  }
};
