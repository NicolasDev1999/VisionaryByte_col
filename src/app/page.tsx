import { AuroraThreeJS, InteractiveCard, NavBar, Projects, VideoSection,Services,NeonFooter } from "./imports";
export default function Home() {
  return (
    <div>
      <NavBar />
      <main>
        <AuroraThreeJS />
        <Services />
        <VideoSection />
        <Projects />
        <InteractiveCard />
        <NeonFooter />
      </main>
    </div>
  );
}
