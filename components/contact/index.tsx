import Image from 'next/image';

export function Contact() {
  return (
    <div className="flex items-center justify-center w-full gap-20 ">
      <a
        href="https://github.com/SlimGabsi"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/github.svg"
          alt={'github'}
          width={40}
          height={40}
          className="fill-amber-100"
        />
      </a>
      <a
        href="https://x.com/slim_gabsi1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image src="/icons/x.svg" alt={'x'} width={40} height={40} />
      </a>
      <a
        href="https://www.linkedin.com/in/slim-gabsi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icons/linkedin.svg"
          alt={'linkedin'}
          width={40}
          height={40}
        />
      </a>
    </div>
  );
}
