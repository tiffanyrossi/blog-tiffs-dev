import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import styles from '../../components/links.module.css';
import { FaInstagram, FaGithub, FaTwitter, FaDev, FaLinkedin, FaStar, FaEnvelope, FaRegFile, FaFile } from 'react-icons/fa6';

export const siteDescription = "";
export const siteName = "Tiffany Rossi - Desenvolvedora";

export default function MeusLinks() {
    return (

        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                name="description"
                content={siteDescription}
                />
                <meta name="og:title" content={siteName} />
                <meta name="twitter:card" content="summary_large_image" />

                <title>{siteName}</title>
            </Head>

            <header className={styles.header}>
                <Image
                    priority
                    src="/images/avatar.png"
                    className={utilStyles.borderCircle}
                    width={150}
                    height={150}
                    alt="tiffs.dev"
                />
                <h1 className={styles.headingLg}>Tiffany Rossi</h1>
                <h2 className={styles.headingMd}>Desenvolvedora Full-Stack</h2>
                <ul className={utilStyles.list}>
                    <li className={utilStyles.listItem}><a href="https://instagram.com/tiffsrc" target="_blank"><FaInstagram className={styles.pinkIcon} /></a></li>
                    <li className={utilStyles.listItem}><a href="https://twitter.com/tiffsrc" target="_blank"><FaTwitter className={styles.pinkIcon} /></a></li>
                    <li className={utilStyles.listItem}><a href="https://linkedin.com/in/tiffanyrossi" target="_blank"><FaLinkedin className={styles.pinkIcon} /></a></li>
                    <li className={utilStyles.listItem}><a href="https://github.com/tiffanyrossi" target="_blank"><FaGithub className={styles.pinkIcon} /></a></li>
                </ul>   
            </header>

            <main>
                <nav className={styles.navList}>
                    <ul>
                    <a href="/" target="_blank">
                            <li>
                                <FaStar className={styles.socialIcon} /> Blog
                            </li>
                        </a>
                        <a href="https://linkedin.com/in/tiffanyrossi" target="_blank">
                            <li>
                                <FaLinkedin className={styles.socialIcon} /> LinkedIn
                            </li>
                        </a>
                        <a href="https://github.com/tiffanyrossi" target="_blank">
                            <li>
                                <FaGithub className={styles.socialIcon} /> Github
                            </li>
                        </a>
                        <a href="https://dev.to/tiffs" target="_blank">
                            <li>
                                <FaDev className={styles.socialIcon} /> DEV.TO
                            </li>
                        </a>
                        <a href="mailto:tiffsdev@gmail.com" target="_blank">
                            <li>
                                <FaEnvelope className={styles.socialIcon} /> E-mail
                            </li>
                        </a>
                        <a href="/cv" target="_blank">
                            <li>
                                <FaFile className={styles.socialIcon} /> CV
                            </li>
                        </a>
                        
                    </ul>
                </nav>
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