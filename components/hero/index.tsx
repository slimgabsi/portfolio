import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex gap-8 w-full p-6 sm:flex-col md:flex-row justify-center items-center m-auto">
      <Image
        src="/avatar1.png"
        alt="Avatar"
        width={300}
        height={300}
        className="rounded-full"
      />
      <div className="flex flex-col gap-8 w-1/2">
        <h2 className="font-bold text-3xl leading-tight">
          Frontend Lead | Indie Game Developer
        </h2>
        <p>
          I'm passionate about blending design and technology, leading front-end
          projects by day and crafting captivating game experiences in my spare
          time. Below some of my personal GitHub repos and demos. Thanks for
          visiting !
        </p>
      </div>
    </section>
  );
}
