import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import { useRouter } from 'next/router'
import { League_Spartan } from 'next/font/google'

const leagueSpartan = League_Spartan({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <main className={leagueSpartan.className}>
      <NextSeo
        title={"Array"}
        description={"16 year old full-stack developer"}
        canonical={`https://your-domain.com${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`}
        openGraph={{
          url: `https://your-domain.com${router.asPath.split("?")[0] === "/" ? "" : router.asPath.split("?")[0]}`,
          title: "Array",
          description: "16 year old full-stack developer",
          images: [
            {
              url: 'https://r2.e-z.host/2082d908-7c65-4fc3-b02a-5f50f9141543/1w9b4ygr.png',
              width: 1920,
              height: 1080,
              alt: 'og image',
            },
          ],
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Component {...pageProps} />
    </main>
  )
}
