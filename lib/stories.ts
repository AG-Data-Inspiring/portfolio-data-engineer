import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const storiesDir = path.join(process.cwd(), 'content/stories');

export interface StoryFrontmatter {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
}

export interface Story {
  frontmatter: StoryFrontmatter;
  content: string;
  slug: string;
}

export function getAllStories(): Story[] {
  const files = fs.readdirSync(storiesDir).filter((file) => file.endsWith('.mdx'));

  return files
    .map((file) => {
      const filePath = path.join(storiesDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        frontmatter: data as StoryFrontmatter,
        content,
        slug: data.slug,
      };
    })
    .sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime());
}

export function getStoryBySlug(slug: string): Story | null {
  const filePath = path.join(storiesDir, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  return {
    frontmatter: data as StoryFrontmatter,
    content,
    slug,
  };
}
