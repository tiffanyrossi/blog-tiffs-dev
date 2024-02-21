import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export async function getStaticProps({ params }) {
  const tag = params.tag;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, "/", filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return { slug: filename.replace('.md', ''), frontmatter: data };
  });

  const filteredPosts = posts.filter((post) =>
  post.frontmatter.tags && post.frontmatter.tags.includes(tag)
  );

  return {
    props: {
      tag,
      posts: filteredPosts,
    },
  };
}

export async function getStaticPaths() {
  const tags = ['java', 'javascript', 'livros', 'algoritmos', 'api rest', 'git', 'aws', 'restjs', 'estudos', 'planejamento'];
  const paths = tags.map((tag) => ({
    params: { tag },
  }));  
  return {
    paths,
    fallback: false,
  };
}

export default function Tags({ tag, posts }) {
    return (
      <Layout siteTitle={`${tag}`}>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <h2 className={utilStyles.headingLg}>[tags/{tag}]</h2>

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