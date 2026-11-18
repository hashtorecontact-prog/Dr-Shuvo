import { blogsPart1 } from './blogsPart1';
import { blogsPart2 } from './blogsPart2';
import type { BlogArticle } from '../types/content';

export const blogsData: BlogArticle[] = [...blogsPart1, ...blogsPart2];

export function getBlogBySlug(slug: string): BlogArticle | undefined {
  return blogsData.find((post) => post.slug === slug);
}
