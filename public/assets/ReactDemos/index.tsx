import { CcvCard, DemoCard } from '@/components/demoCard';
export function GamesDemo() {
  return (
    <section className="flex gap-8 w-full p-6 sm:flex-col justify-center items-center m-auto">
      <h2 className="text-2xl leading-tight">Unity Games</h2>
      <div className="flex md:flex-row sm:flex-col items-center justify-center w-full gap-20">
        <DemoCard
          title="Solar System Sim"
          imageSrc="/assets/GamesDemos/01.png"
          alt="webgl and js"
          link="https://slimgabsi.itch.io/solar-sytem"
        />
        <DemoCard
          title="SpaceShooter2D"
          imageSrc="/assets/GamesDemos/02.png"
          alt="unity ml agents"
          link="https://slimgabsi.itch.io/2dspaseshooter"
        />
        <DemoCard
          title="Dark Vania"
          imageSrc="/assets/GamesDemos/03.png"
          alt="brawl stars clone "
          link="https://play.unity.com/mg/other/webglbuild-145"
        />
      </div>
      <div className="flex md:flex-row sm:flex-col items-center justify-center w-full gap-20">
        <DemoCard
          title="Super Spacio"
          imageSrc="/assets/GamesDemos/04.png"
          alt="webgl and js"
          link="https://slimgabsi.itch.io/super-spacio"
        />
        <DemoCard
          title="Simple Crowd Simulation"
          imageSrc="/assets/GamesDemos/05.png"
          alt="unity ml agents"
          link="https://slimgabsi.itch.io/simplecrowdsimulation"
        />
        <CcvCard />
      </div>
    </section>
  );
}
