import styles from './styles.module.scss'
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroProps{
    heading:string;
    buttonUrl:string;
    buttonTitle:string;
    bannerUrl:string;
    icon: ReactNode
}
export function Hero({heading, buttonUrl, buttonTitle, bannerUrl, icon}: HeroProps){
    return(
        <main className={styles.main}>
            <div className={styles.containerHero}>
                <h1 className={styles.title}>{heading}</h1>

                <a
                target='_blank'
                 href={buttonUrl}
                 className={styles.Link}
                 >
                    {icon}
                    {buttonTitle}
                 </a>
            </div>

            <div className={styles.contentBanner}>
                <Image
                className={styles.banner}
                alt={heading}
                src={bannerUrl}
                priority={true}
                quality={100}
                fill={true}

                />
            </div>
        </main>
    )
}