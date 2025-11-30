import Link from 'next/link';
import { getAllStories } from '@/lib/stories';

export default function StoryPage() {
  const stories = getAllStories();

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 sm:px-12 py-24 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">Stories & Insights</h1>
          <p className="text-lg text-gray-400">
            Documentation, learnings, and insights from my data engineering journey.
          </p>
        </div>
      </section>

      {/* Stories List */}
      <section className="px-6 sm:px-12 py-24">
        <div className="max-w-3xl mx-auto space-y-8">
          {stories.length === 0 ? (
            <p className="text-gray-400 text-center">No stories published yet.</p>
          ) : (
            stories.map((story) => (
              <Link
                key={story.slug}
                href={`/story/${story.slug}`}
                className="block border border-gray-800 p-8 rounded-lg hover:border-gray-600 hover:bg-gray-950 transition group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 className="text-2xl font-bold group-hover:text-blue-400 transition">
                    {story.frontmatter.title}
                  </h2>
                  <span className="text-sm text-gray-500 whitespace-nowrap ml-4">
                    {new Date(story.frontmatter.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{story.frontmatter.description}</p>
                <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition">
                  Read More →
                </div>
              </Link>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
