import path from "node:path";

export const BLOGS_DIRECTORY = path.join(process.cwd(), "content", "blogs");

export type BlogFrontmatter = {
  title: string;
  description: string;
  publishedAt: string;
  coverImage?: string;
};

