import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/hero';

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] p-8">
      <main className="flex flex-col items-center justify-center w-full gap-20">
        <h1 className="font-bold text-4xl leading-tight ">Slim Gabsi</h1>
        <Hero />
      </main>
    </div>
  );
}
