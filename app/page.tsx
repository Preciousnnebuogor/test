import Details from "./components/details";
import HomePage from "./components/home";

export default function Home() {
  return (
    <div className={`bg-white w-full h-full`}>
      <HomePage/>
      <Details/>
    </div>
  );
}
