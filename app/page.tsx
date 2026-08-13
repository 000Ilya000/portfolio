import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Expertise } from "@/components/sections/Expertise";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="content" className="relative z-[1] min-w-0 overflow-x-clip">
        <Hero />
        <About />
        <Expertise />
        <Stack />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
