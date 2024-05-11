import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from './../lib/posts';
import Link from 'next/link';
import { getPostsByTheme } from '../lib/themes';

export async function getStaticProps() {
  const postsByTheme = getPostsByTheme().postsByTheme;
  const themes = getPostsByTheme().themes;

  return {
    props: {
      themes,
      postsByTheme,
    },
  };
}

export default function Home({postsByTheme, themes}) {

  return (
    <Layout isHome>
      <ul className={utilStyles.list}>
        {themes.map((theme) => (
            <li className={utilStyles.postItem} id={`${theme}`} key={`${theme}`}>
              <span className={utilStyles.tagHeader}>
                <Link href={`/themes/${theme}`}>{theme}</Link>
              </span>
              <ul className={utilStyles.list}>
                  {postsByTheme[theme].map((post) => (
                    <li key={post.slug} className={utilStyles.postItem}>
                        <Link href={`/posts/${post.slug}`}>
                            {post.frontmatter.title}
                        </Link>
                    </li>
                    ))}
              </ul>
          </li>
      ))}
        
      </ul>

    </Layout>
  );
}
