import { useInView } from 'react-intersection-observer';
import { GetStaticProps } from 'next';

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/index/Hero";
import About from "@/components/sections/index/About";
import Experience from "@/components/sections/index/Experience";
import Projects from "@/components/sections/index/Projects";
import Footer from "@/components/sections/index/Footer";
import { GridPattern } from "@/components/GridPattern";

export default function Home({ lastUpdated }: { lastUpdated: string }) {

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-x-hidden px-6">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className='z-[-5]'
        />
        <Hero inView={inView} descRef={ref} />
        <About />
        <Experience />
        <Projects />
        <Footer lastUpdated={lastUpdated} />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const lastUpdated = process.env.VERCEL_GIT_COMMIT_TIMESTAMP || new Date().toISOString();

  return {
    props: {
      lastUpdated,
    },
    revalidate: 60, // Re-generate the page every 60 seconds if needed
  };
};
