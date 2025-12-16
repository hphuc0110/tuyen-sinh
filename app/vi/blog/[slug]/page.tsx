import { BLOG_POSTS } from "@/components/blogPost/blog-post-overview";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.id === params.slug);

  if (!post) {
    return {
      title: "Bài viết không tìm thấy",
    };
  }

  return {
    title: post.title,
    description: `Đọc bài viết: ${post.title}`,
    openGraph: {
      title: post.title,
      description: `Đọc bài viết: ${post.title}`,
      images: post.image ? [post.image] : [],
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find((p) => p.id === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 font-semibold transition-colors"
          >
            ← Quay lại trang chủ
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          {post.image && (
            <div className="relative w-full h-64 md:h-96 mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}

          <div className="px-6 md:px-12 py-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Date */}
            <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
              <time dateTime={post.date}>{post.date}</time>
            </div>

            {/* Divider */}
            <div className="border-t border-slate-200 mb-8"></div>

            {/* Content */}
            <div className="prose prose-slate prose-lg max-w-none">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1
                      className="text-3xl font-bold text-slate-900 mt-8 mb-4"
                      {...props}
                    />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2
                      className="text-2xl font-bold text-slate-800 mt-6 mb-3"
                      {...props}
                    />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3
                      className="text-xl font-semibold text-slate-700 mt-4 mb-2"
                      {...props}
                    />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="text-slate-700 leading-relaxed mb-4"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="text-slate-700" {...props} />
                  ),
                  strong: ({ node, ...props }) => (
                    <strong className="font-bold text-slate-900" {...props} />
                  ),
                  em: ({ node, ...props }) => (
                    <em className="italic text-slate-800" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-primary pl-4 italic text-slate-600 my-4"
                      {...props}
                    />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-primary hover:text-primary/80 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }) => {
                    // Handle relative image paths from MDX
                    const src = props.src as string;
                    const imageSrc = src?.startsWith('../') 
                      ? src.replace('../../images/ai/', '/image/')
                      : src;
                    return (
                      <img
                        className="rounded-lg shadow-md my-6 w-full"
                        {...props}
                        src={imageSrc}
                        alt={props.alt as string || ''}
                      />
                    );
                  },
                  hr: ({ node, ...props }) => (
                    <hr className="my-8 border-slate-200" {...props} />
                  ),
                }}
              >
                {post.mdxContent}
              </ReactMarkdown>
            </div>
          </div>
        </article>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-md hover:bg-primary/90 transition-colors"
          >
            ← Quay lại trang chủ
          </Link>
        </div>
      </main>
    </div>
  );
}

