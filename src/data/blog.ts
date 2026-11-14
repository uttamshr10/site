
export type BlogCategory =
  | "Engineering"
  | "AI"
  | "Building";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: BlogCategory;
  description: string;
  readingTime: number;
  content: string;
}

const markdownFiles = import.meta.glob<string>(
  "../content/blog/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

function parsePost(
  path: string,
  raw: string
): BlogPost | null {
  const match = raw.match(
    /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
  );

  if (!match) {
    console.warn(`Missing frontmatter: ${path}`);
    return null;
  }

  const metadata: Record<string, string> = {};

  match[1].split(/\r?\n/).forEach((line) => {
    const separator = line.indexOf(":");

    if (separator === -1) return;

    const key = line.slice(0, separator).trim();
    const value = line
      .slice(separator + 1)
      .trim()
      .replace(/^["']|["']$/g, "");

    metadata[key] = value;
  });

  const categories: BlogCategory[] = [
    "Engineering",
    "AI",
    "Building",
  ];

  const category = metadata.category as BlogCategory;

  if (
    !metadata.title ||
    !metadata.date ||
    !metadata.description ||
    !categories.includes(category) ||
    !/^\d{4}-\d{2}-\d{2}$/.test(metadata.date)
  ) {
    console.warn(`Invalid blog metadata: ${path}`);
    return null;
  }

  const content = raw.slice(match[0].length).trim();
  const words = content.split(/\s+/).filter(Boolean).length;

  return {
    slug: path.split("/").pop()!.replace(/\.md$/, ""),
    title: metadata.title,
    date: metadata.date,
    category,
    description: metadata.description,
    readingTime: Math.max(1, Math.ceil(words / 220)),
    content,
  };
}

export const blogPosts: BlogPost[] = Object.entries(markdownFiles)
  .map(([path, content]) => parsePost(path, content))
  .filter((post): post is BlogPost => post !== null)
  .sort((a, b) => b.date.localeCompare(a.date));
