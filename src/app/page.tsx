import { AuroraThreeJS, NavBar, Projects, VideoSection, Services, NeonFooter, HeroCarousel, Articles, ContactForm} from "./imports";
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
        <HeroCarousel />
        <Articles />
        {/* <InteractiveCard /> */}
        <ContactForm />
        <NeonFooter />
      </main>
    </div>
  );
}
