import { Hero } from '@/components/hero';
import { GithubDemos } from '@/components/githubDemos';
import { GamesDemo } from '@/components/gamesDemo';
import { ReactDemos } from '@/components/reactDemos';
import { Footer } from '@/components/footer';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-8">
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
