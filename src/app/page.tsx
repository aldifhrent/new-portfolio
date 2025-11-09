
import About from "./components/about";
import Contacts from "./components/contacts";
import Skills from "./components/skills";

export default function Home() {
  return (
    <section className="flex flex-col gap-1">
      <About/>
      <Skills/>
      <Contacts />
    </section>
  );
}
