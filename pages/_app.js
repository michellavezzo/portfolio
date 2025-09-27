import "../styles/globals.css"
import Head from "next/head"
import Layout from "../components/Layout"
import Transition from "../components/Transition"
import { NextSeo } from "next-seo"
import { NEXT_SEO_DEFAULT } from "../next-seo-config"
import { useRouter } from "next/router"
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {
    const router = useRouter()
    return (
        <>
            <NextSeo {...NEXT_SEO_DEFAULT} useAppDir={true} />
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Layout>
                <AnimatePresence mode='wait'>
                    <motion.div key={router.route} className='h-full'>
                        <Transition />
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </Layout>
        </>
    )
}

// todo: https://dev.to/trinity_/como-gerenciar-seo-em-nextjs-com-next-seo-1pb3

export default MyApp
