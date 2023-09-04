import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './layout.module.css';
import ExportedImage from 'next-image-export-optimizer';
import profilePic from 'public/images/avatar.png';

var siteTitle = "Tiffany Rossi - Desenvolvedora";
var isHome = true;

export const siteName = "<tiffs.dev>"
export const siteDescription = "";
export var siteTitleStr = !isHome ? `${siteTitle} - Tiffany Rossi` : siteTitle;

export default function Layout({ children, isPost, siteTitle, isHome }) {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="icon" href="favicon.ico" />
                <meta
                name="description"
                content={siteDescription}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />

                <title>{!isHome ? `${siteTitle} - Tiffany Rossi` : 'Tiffany Rossi - Desenvolvedora'}</title>
            </Head>

            <header className={styles.header}>
                <ExportedImage
                    priority
                    src={profilePic}
                    placeholder="empty"
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