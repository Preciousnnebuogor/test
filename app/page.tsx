import Details from "./components/details";
import Hero from "./components/hero";
import HomePage from "./components/home";
import Hoodie from "./components/hoodie";

export default function Home() {
  return (
    <div className={`bg-white w-full h-full`}>
      <HomePage/>
      <Details/>
      <Hero/>
      <Hoodie/>
    </div>
  );
}
