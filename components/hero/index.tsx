import Image from 'next/image';

export function Hero() {
  return (
    <section className="flex gap-8 w-full p-6 sm:flex-col md:flex-row justify-center items-center m-auto">
      <a
        href="https://github.com/SlimGabsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/avatar2.png" alt="Avatar" width={300} height={300} />
      </a>
      <div className="flex flex-col gap-8 md:w-1/2 sm:w-full">
        <h2 className="text-2xl leading-tight">
          Frontend Lead | Indie Game Developer
        </h2>
        <p className="w-10/12">
          {`I'm passionate about blending design and technology, leading
          front-end projects by day and crafting captivating game experiences in
          my spare time.`}
          <br /> Below some of my personal GitHub repos and demos.
          <br /> Thanks for visiting &apos;!
        </p>
      </div>
    </section>
  );
}
