import { AuroraThreeJS, InteractiveCard, NavBar, Projects, VideoSection, Services, NeonFooter } from "./imports";
export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <section id="home">
          <AuroraThreeJS />
        </section>
        <section id="Services">
          <Services />
        </section>
        <VideoSection />
        <section id="projects">
          <Projects />
        </section>

        <InteractiveCard />

        <NeonFooter />

      </main>
    </div>
  );
}
