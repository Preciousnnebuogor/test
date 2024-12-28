"use client"


export default function Hero() {
  return (
    
      <div className={`md:grid md:grid-cols-4  text-black mt-4 bg-slate-200 px-4 md:px-8`}>
        <div className={`flex flex-col items-start justify-center mt-2`}>
          <div className={``}>
            <img src="/3.png" alt="" className={`w-[100px] h-[100px] mb-4`} />
          </div>

          <p className={`font-bold`}>Premium Quality</p>
          <p className={`w-[50%]`}>
            At GemCustom, we take product quality very seriously.
          </p>
        </div>

        <div className={`flex flex-col items-start justify-center mt-2`}>
          <img src="/1.png" alt="" className={`w-[100px] h-[100px] mb-4`} />
          <p className={`font-bold`}>Free Delivery </p>
          <p className={`w-[50%]`}>
            Spend from $50 to get free shipping worldwide with 24/7 order
            tracking.
          </p>
        </div>

        <div className={`flex flex-col items-start justify-center mt-2`}>
          <img src="/0.png" alt="" className={`w-[100px] h-[100px] mb-4`} />
          <p className={`font-bold`}>Free Delivery </p>
          <p className={`w-[50%]`}>
            Spend from $50 to get free shipping worldwide with 24/7 order
            tracking.
          </p>
        </div>

        <div className={`flex flex-col items-start justify-center mt-2`}>
          <img src="/m.png" alt="" className={`w-[100px] h-[100px] mb-4`} />
          <p className={`font-bold`}>Free Delivery </p>
          <p className={`w-[50%]`}>
            Spend from $50 to get free shipping worldwide with 24/7 order
            tracking.
          </p>
        </div>
      </div>

  );
}
