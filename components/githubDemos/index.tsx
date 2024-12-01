import { DemoCard } from '@/components/demoCard';
export function GithubDemos() {
  return (
    <section className="flex gap-8 w-full p-6 sm:flex-col justify-center items-center m-auto">
      <h2 className="text-2xl leading-tight">GitHub repositories</h2>
      <div className="flex md:flex-row sm:flex-col items-center justify-center w-full gap-20">
        <DemoCard
          title="Communication between unity WebGL and external JS."
          imageSrc="/assets/GithubDemos/01.png"
          alt="webgl and js"
          link="https://github.com/SlimGabsi/Unity-3D-WebGl-Browser-Scripting"
        />
        <DemoCard
          title="Simple Unity Ml agents implementation"
          imageSrc="/assets/GithubDemos/02.png"
          alt="unity ml agents"
          link="https://github.com/SlimGabsi/Roller-Ball-ML-Agents"
        />
        <DemoCard
          title="Brawl stars clone with photon for unity"
          imageSrc="/assets/GithubDemos/03.png"
          alt="brawl stars clone "
          link="https://github.com/SlimGabsi/Brawl-Stars-Clone-PUN"
        />
      </div>
    </section>
  );
}
