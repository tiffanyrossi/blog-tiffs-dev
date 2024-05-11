import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const theme = params.theme;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, "/", filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return { slug: filename.replace('.md', ''), frontmatter: data };
  });

  const filteredPosts = posts.filter((post) =>
  post.frontmatter.themes && post.frontmatter.themes.includes(theme)
  );

  return {
    props: {
      theme,
      posts: filteredPosts,
    },
  };
}

export async function getStaticPaths() {
  const themes = ['entendendo algoritmos', 'java - guia do programador'];
  const paths = themes.map((theme) => ({
    params: { theme },
  }));  
  return {
    paths,
    fallback: false,
  };
}

export default function Tags({ theme, posts }) {
    return (
      <Layout siteTitle={`${theme}`}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>[{theme}]</h2>

            <ul className={utilStyles.list}>
            {posts.map((post) => (
                <li className={utilStyles.postItem} key={post.slug}>
                <Link href={`/posts/${post.slug}`}>{post.frontmatter.title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                    <Date dateString={post.frontmatter.date} />
                </small>
                </li>
            ))}
            </ul>
        </section>
      </Layout>
    );
  };