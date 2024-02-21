import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Date from '../../components/date';

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  const allTags = new Set();
  const postsByTag = {};

  filenames.forEach((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    if (data.tags && Array.isArray(data.tags)) {
      data.tags.forEach((tag) => {
        allTags.add(tag);
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push({
          slug: filename.replace('.md', ''),
          frontmatter: data,
        });
      });
    }
  });
  

  return {
    props: {
      tags: Array.from(allTags),
      postsByTag,
    },
  };
}

export default function TagsPage({ tags, postsByTag }) {
    return (
      <Layout siteTitle={'Tags'}>
          <section className={utilStyles.padding1px}>
          {tags.map((tag) => (
                <Link className={utilStyles.tagItem} key={tag} href={`#${tag}`}>{tag}</Link>
              ))}
              <hr />
                <h2 className={utilStyles.headingLg}>[posts por tag]</h2>
                  <ul className={utilStyles.list}>
                      {tags.map((tag) => (
                          <li className={utilStyles.postItem} id={`${tag}`} key={`${tag}`}>
                              <span className={utilStyles.tagHeader}>
                              <Link href={`/tags/${tag}`}>{tag}</Link></span>
                              <ul className={utilStyles.list}>
                                  {postsByTag[tag].map((post) => (
                                      <li key={post.slug} className={utilStyles.postItem}>
                                          <Link href={`/posts/${post.slug}`}>
                                              {post.frontmatter.title}
                                          </Link>
                                          <br />
                                          <small className={utilStyles.lightText}>
                                              <Date dateString={post.frontmatter.date} />
                                          </small>    
                                      </li>
                                  ))}
                              </ul>
                          </li>
                      ))}
                  </ul>
          </section>
      </Layout>
    );
  };