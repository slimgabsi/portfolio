import { Hero } from '@/components/hero';
import { GithubDemos } from '@/components/githubDemos';
import { GamesDemo } from '@/components/gamesDemo';
import { ReactDemos } from '@/components/reactDemos';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-8">
      <Head>
        <meta
          property="og:title"
          content="Frontend Lead | Indie Game Developer"
        />
        <meta
          property="og:description"
          content="I'm passionate about blending design and technology, leading front-end projects by day and crafting captivating game experiences in my spare time."
        />
        <meta
          property="og:image"
          content="https://portfolio-kappa-blue-57.vercel.app/_next/image?url=%2Favatar2.png&w=384&q=75"
        />
        <meta
          property="og:url"
          content="https://portfolio-kappa-blue-57.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Slim Gabsi" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Frontend Lead | Indie Game Developer"
        />
        <meta
          name="twitter:description"
          content="I'm passionate about blending design and technology, leading front-end projects by day and crafting captivating game experiences in my spare time."
        />
        <meta
          name="twitter:image"
          content="https://portfolio-kappa-blue-57.vercel.app/_next/image?url=%2Favatar2.png&w=384&q=75"
        />
      </Head>
      <main className="flex flex-col items-center justify-center w-full gap-20">
        <header className="flex flex-col items-center justify-center  gap-8">
          <h1 className="font-bold text-4xl leading-tight ">Slim Gabsi</h1>
          <Contact />
        </header>
        <Hero />
        <GithubDemos />
        <GamesDemo />
        <ReactDemos />
        <Footer />
      </main>
    </div>
  );
}
