import styles from './styles.module.scss'
import { getItemBySlug } from '@/utils/actions/get-data'
import { PostProps } from '@/utils/post.type';
import { Hero } from '@/components/hero';
import { Phone } from 'lucide-react';

export default async function Page({params: { slug }}:{
    params: {slug: string}
}){

    const { object }: PostProps = await getItemBySlug(slug);
    console.log(JSON.stringify(object, null, 2));
    return(
        <>
        <Hero
       heading={object[0].title}
       buttonTitle={object[0].metadata.button.title}
       buttonUrl={object[0].metadata.button.url}
       bannerUrl={object[0].metadata.banner.url}
       icon={<Phone size={24} color="#FFF"/>}
       />
        </>
    )
}