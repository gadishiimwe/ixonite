import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import WhatsAppButton from "../../components/WhatsAppButton";
import { blogPosts, getBlogPostById } from "../../lib/blogPosts";
import { Button } from "../../components/ui/button";

interface Comment {
  id: number;
  text: string;
  likes: number;
  dislikes: number;
}

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const [comments, setComments] = useState<Comment[]>([]);
  const [commentText, setCommentText] = useState("");

  if (!id) {
    return <div>Invalid blog post ID.</div>;
  }

  const postId = parseInt(id, 10);
  const post = getBlogPostById(postId);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-6 py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="mb-8">The blog post you are looking for does not exist.</p>
          <Button onClick={() => navigate("/blog")}>Back to Blog</Button>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  const handleAddComment = () => {
    if (commentText.trim() === "") return;
    const newComment: Comment = {
      id: Date.now(),
      text: commentText.trim(),
      likes: 0,
      dislikes: 0,
    };
    setComments([newComment, ...comments]);
    setCommentText("");
  };

  const handleLike = (id: number) => {
    setComments(comments.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleDislike = (id: number) => {
    setComments(comments.map(c => c.id === id ? { ...c, dislikes: c.dislikes + 1 } : c));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-6 py-16 max-w-4xl">
        <div className="mb-6">
          <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
            {post.category}
          </span>
          <div className="text-gray-500 text-sm mt-1">{new Date(post.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-auto rounded-lg mb-8"
          />
        )}
        <article className="prose prose-lg max-w-none text-gray-800">
          {/* Assuming content is a long string, split into paragraphs */}
          {post.content.split('\n\n').map((para, idx) => (
            <p key={idx} className="mb-6">{para}</p>
          ))}
        </article>

        {/* Comment Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-semibold mb-4">Comments</h2>
          <div className="mb-4">
            <textarea
              className="w-full p-3 border border-gray-300 rounded-md resize-none"
              rows={4}
              placeholder="Write your comment here..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <Button className="mt-2" onClick={handleAddComment}>Post Comment</Button>
          </div>
          <div>
            {comments.length === 0 && <p className="text-gray-600">No comments yet. Be the first to comment!</p>}
            {comments.map(comment => (
              <div key={comment.id} className="mb-4 p-4 bg-white rounded shadow">
                <p className="mb-2">{comment.text}</p>
                <div className="flex space-x-4 text-sm text-gray-600">
                  <button onClick={() => handleLike(comment.id)} className="hover:text-green-600">👍 {comment.likes}</button>
                  <button onClick={() => handleDislike(comment.id)} className="hover:text-red-600">👎 {comment.dislikes}</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
