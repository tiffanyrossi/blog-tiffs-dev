import Date from '../../components/date';
import Disclaimer from '../../components/disclaimer';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
    return (
      <Layout isPost siteTitle={postData.title}>  
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
              escrito por <strong>{postData.author}</strong> @ <Date dateString={postData.date} />
            </div>
            <div>
              {postData.tags.map((tag) => (
                  <Link className={utilStyles.tagItem} key={tag} href={`/tags/${tag}`}>{tag}</Link>
                ))}
            </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        {postData.tags.includes("estudos") || postData.tags.includes("livros") ?
        <Disclaimer
          sourceType={postData.sourcetype}
          sourceName={postData.sourcename}
          sourceAuthor={postData.sourceauthor}
          sourceUrl={postData.sourceurl} />
          : <></>}
      </Layout>
    );
}
  