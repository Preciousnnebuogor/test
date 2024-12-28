import Check from "./components/check";
import Contact from "./components/contact";
import Details from "./components/details";
import Hero from "./components/hero";
import HomePage from "./components/home";
import Hoodie from "./components/hoodie";
import Question from "./components/quest";

export default function Home() {
  return (
    <div className={`bg-white w-full h-full`}>
      <HomePage/>
      <Details/>
      <Hero/>
      <Hoodie/>
      <Check/>
      <Question/>
      <Contact/>
    </div>
  );
}
