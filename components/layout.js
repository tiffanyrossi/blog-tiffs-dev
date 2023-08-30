import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './layout.module.css';

var siteTitle = "Tiffany Rossi - Desenvolvedora";
var isHome = true;

export const siteName = "<tiffs.dev>"
export const siteDescription = "";
export var siteTitleStr = !isHome ? `${siteTitle} - Tiffany Rossi` : siteTitle;

export default function Layout({ children, isPost, siteTitle, isHome }) {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content={siteDescription}
                />
                <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                    siteTitle,
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <title>{!isHome ? `${siteTitle} - Tiffany Rossi` : 'Tiffany Rossi - Desenvolvedora'}</title>
            </Head>

            <header className={styles.header}>
                <Image
                    priority
                    src="/images/avatar.png"
                    className={utilStyles.borderCircle}
                    width={85}
                    height={85}
                    alt="tiffs.dev"
                />
                <h1 className={utilStyles.heading2Xl}>{siteName}</h1>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}>[<Link href="/">home</Link>]</li>
                    <li className={utilStyles.listItem}>[<Link href="/sobre">sobre</Link>]</li>
                    <li className={utilStyles.listItem}>[<Link href="/tags">tags</Link>]</li>
                    <li className={utilStyles.listItem}>[<Link href="/links" target="_blank">links</Link>]</li>
                </ul>
            </header>

            <main>
                {children}
                {isPost && (
                <div className={styles.backToHome}>
                    <Link href="/">← voltar para os posts</Link>
                </div>    
                )}
            </main>

            <footer className={styles.footer}>
                <div className={utilStyles.footerText}>
                    <hr />
                    tiffany rossi ☠️ 2023
                </div>
            </footer>      

        </div>

    );
  }