import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import styles from './layout.module.css';
import ExportedImage from 'next-image-export-optimizer';
import profilePic from './../public/images/profile.png';

var siteTitle = "Tiffany Rossi - Desenvolvedora";
var isHome = true;

export const siteName = "<tiffs.dev>"
export const siteDescription = "";
export var siteTitleStr = !isHome ? `${siteTitle} - Tiffany Rossi` : siteTitle;

export var currentYear = new Date().getFullYear();

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

            <div className={styles.sidebar}>
                <header className={styles.header}>
                    <ExportedImage
                        priority
                        src={profilePic}
                        placeholder="empty"
                        className={utilStyles.borderCircle}
                        width={75}
                        height={75}
                        alt="tiffs.dev"
                    />
                    <h1 className={utilStyles.headingLg}>{siteName}</h1>
                </header>

                <ul className={utilStyles.mainMenu}>
                    <li>[<Link href="/">home</Link>]</li>
                    <li>[<Link href="/sobre">sobre</Link>]</li>
                    <li>[<Link href="/links" target="_blank">links</Link>]</li>
                    <li>[<Link href="/tags">tags</Link>]</li>
                </ul>
            </div>

            <main className={styles.content}>
                {children}
                {isPost && (
                <div className={styles.backToHome}>
                    <hr />
                    <Link href="/">← voltar para os posts</Link>
                </div>    
                )}

            <footer className={styles.footer}>
                <div className={utilStyles.footerText}>
                    <hr />
                    tiffany rossi ☠️ {currentYear}
                </div>
            </footer>

            </main>


        </div>

    );
  }