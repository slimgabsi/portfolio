import { CcvCard, DemoCard } from '@/components/demoCard';
export function ReactDemos() {
  return (
    <section className="flex gap-8 w-full p-6 sm:flex-col justify-center items-center m-auto">
      <h2 className="text-2xl leading-tight">React Demos</h2>
      <div className="flex md:flex-row sm:flex-col items-center justify-center w-full gap-20">
        <DemoCard
          title="My Reads"
          imageSrc="/assets/ReactDemos/01.png"
          alt="My Reads"
          link="https://slimgabsi.github.io/reactnd-project-myreads/"
        />
        <DemoCard
          title="Twitter Clone"
          imageSrc="/assets/ReactDemos/02.png"
          alt="Twitter Clone"
          link="https://slimgabsi.github.io/react-twitter-clone/"
        />
        <CcvCard />
      </div>
    </section>
  );
}
