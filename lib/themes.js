import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');
const filenames = fs.readdirSync(postsDirectory);
const allThemes = new Set();
const postsByTheme = {};

export async function getPostsByTheme() {
    filenames.forEach((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        if (data.themes && Array.isArray(data.themes)) {
          data.themes.forEach((theme) => {
            allThemes.add(theme);
            if (!postsByTheme[theme]) {
              postsByTheme[theme] = [];
            }
            postsByTheme[theme].push({
              slug: filename.replace('.md', ''),
              frontmatter: data,
            });
          });
        }
      });

    return {
        tags: Array.from(allThemes),
        postsByTheme,
    };

}