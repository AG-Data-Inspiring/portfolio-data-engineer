import Link from 'next/link';
import { getStoryBySlug, getAllStories } from '@/lib/stories';
import { notFound } from 'next/navigation';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  const stories = getAllStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export default function StoryDetailPage({ params }: { params: Params }) {
  const story = getStoryBySlug(params.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Article Header */}
      <section className="px-6 sm:px-12 py-12 bg-gray-950 border-b border-gray-800">
        <div className="max-w-3xl mx-auto">
          <Link href="/story" className="text-blue-400 hover:text-blue-300 transition mb-6 inline-block">
            ← Back to Stories
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">{story.frontmatter.title}</h1>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>{story.frontmatter.author}</span>
            <span>•</span>
            <span>{new Date(story.frontmatter.date).toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-6 sm:px-12 py-24">
        <article className="max-w-3xl mx-auto prose prose-invert">
          <div className="prose-headings:text-white prose-p:text-gray-400 prose-a:text-blue-400 prose-a:hover:text-blue-300 prose-strong:text-white prose-code:text-gray-300 prose-code:bg-gray-900 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800">
            {/* Parse markdown headings and content */}
            {story.content.split('\n').map((line, idx) => {
              if (line.startsWith('# ')) {
                return (
                  <h1 key={idx} className="text-4xl font-bold mt-8 mb-4">
                    {line.replace('# ', '')}
                  </h1>
                );
              }
              if (line.startsWith('## ')) {
                return (
                  <h2 key={idx} className="text-2xl font-bold mt-6 mb-3">
                    {line.replace('## ', '')}
                  </h2>
                );
              }
              if (line.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl font-semibold mt-4 mb-2">
                    {line.replace('### ', '')}
                  </h3>
                );
              }
              if (line.startsWith('- ')) {
                return (
                  <li key={idx} className="ml-6 text-gray-400">
                    {line.replace('- ', '')}
                  </li>
                );
              }
              if (line.trim() === '') {
                return <div key={idx} className="h-2"></div>;
              }
              if (line.startsWith('---')) {
                return <hr key={idx} className="my-6 border-gray-800" />;
              }
              return (
                <p key={idx} className="text-gray-400 mb-4 leading-relaxed">
                  {line}
                </p>
              );
            })}
          </div>
        </article>
      </section>
    </div>
  );
}
