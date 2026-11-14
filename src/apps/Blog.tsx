
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  FilePenLine,
  Search,
  X,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  blogPosts,
  type BlogCategory,
  type BlogPost,
} from "../data/blog";

type CategoryFilter = "All" | BlogCategory;

const categories: CategoryFilter[] = [
  "All",
  "Engineering",
  "AI",
  "Building",
];

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );
}

function BlogReader({
  post,
  onBack,
}: {
  post: BlogPost;
  onBack: () => void;
}) {
  return (
    <article className="blog-reader">
      <button
        className="blog-back"
        onClick={onBack}
        type="button"
      >
        <ArrowLeft size={16} />
        All articles
      </button>

      <header className="blog-reader-header">
        <span className="blog-eyebrow">
          {post.category.toUpperCase()}
        </span>

        <h1>{post.title}</h1>

        <p>{post.description}</p>

        <div className="blog-meta">
          <span>
            <CalendarDays size={14} />
            {formatDate(post.date)}
          </span>

          <span>
            <Clock3 size={14} />
            {post.readingTime} min read
          </span>
        </div>
      </header>

      <div className="blog-markdown">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      <footer className="blog-reader-footer">
        <button
          className="blog-back"
          onClick={onBack}
          type="button"
        >
          <ArrowLeft size={16} />
          Back to journal
        </button>
      </footer>
    </article>
  );
}

export default function Blog() {
  const [selectedPost, setSelectedPost] =
    useState<BlogPost | null>(null);

  const [category, setCategory] =
    useState<CategoryFilter>("All");

  const [search, setSearch] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      category === "All" || post.category === category;

    const query = search.trim().toLowerCase();

    const matchesSearch =
      !query ||
      [
        post.title,
        post.description,
        post.category,
        post.content,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);

    return matchesCategory && matchesSearch;
  });

  if (selectedPost) {
    return (
      <div className="blog-page">
        <BlogReader
          post={selectedPost}
          onBack={() => setSelectedPost(null)}
        />
      </div>
    );
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <div>
          <span className="blog-eyebrow">NOTES.MD</span>

          <h1>
            Developer Journal<span>.</span>
          </h1>

          <p>
            Notes on software engineering, AI, system
            design and turning ideas into working products.
          </p>
        </div>

        <BookOpen
          className="blog-header-icon"
          size={35}
          strokeWidth={1.4}
        />
      </header>

      {blogPosts.length === 0 ? (
        <section className="blog-empty">
          <div className="blog-empty-icon">
            <FilePenLine size={29} strokeWidth={1.5} />
          </div>

          <h2>First entry in progress.</h2>

          <p>
            Technical notes, experiments and lessons
            from building software will live here.
          </p>

          <div className="blog-empty-topics">
            <span>Engineering</span>
            <span className="blog-topic-separator">/</span>
            <span>AI</span>
            <span className="blog-topic-separator">/</span>
            <span>Building</span>
          </div>
        </section>
      ) : (
        <>
          <div className="blog-toolbar">
            <div className="blog-filters">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`blog-filter ${
                    category === item ? "active" : ""
                  }`}
                  onClick={() => setCategory(item)}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="blog-search">
              <Search size={15} />

              <input
                type="search"
                placeholder="Search articles..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Search blog articles"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          <div className="blog-results">
            {filteredPosts.length === 0 ? (
              <div className="blog-no-results">
                <Search size={23} />
                <h2>No matching articles.</h2>
                <p>Try a different search or category.</p>
              </div>
            ) : (
              filteredPosts.map((post) => (
                <button
                  key={post.slug}
                  type="button"
                  className="blog-post-row"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="blog-post-top">
                    <span className="blog-post-category">
                      {post.category}
                    </span>

                    <span className="blog-post-date">
                      {formatDate(post.date)}
                    </span>
                  </div>

                  <div className="blog-post-heading">
                    <h2>{post.title}</h2>
                    <ArrowRight size={18} />
                  </div>

                  <p>{post.description}</p>

                  <span className="blog-reading-time">
                    <Clock3 size={13} />
                    {post.readingTime} min read
                  </span>
                </button>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
}
