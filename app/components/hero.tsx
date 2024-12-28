import { IoDiamondOutline } from "react-icons/io5";


export default function Hero() {
  return (
    <div className={`grid grid-cols-2 text-black mt-4 px-4`}>
      <div>
        <div className={` w-[500px] h-[px]`}>
          <IoDiamondOutline  className={`w-[400px]`}/>
        </div>

        <p className={`font-bold`}>Premium Quality</p>
        <p className={`text-center`}>At GemCustom, we take product quality very seriously.</p>
      </div>
    </div>
  );
}
