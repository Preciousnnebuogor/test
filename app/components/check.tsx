"use client"
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

export default function Check () {
    return (
      <div>
        <div className={`mt-5 text-black px-20 `}>
          <div className={`flex item-center justify-center`}>
            <p className={`text-lg font-bold`}>For Head-to-Toe Matching</p>
          </div>
          <div className={`flex justify-center mb-4`}>
            <p>The collection that goes perfectly with your hoodie!</p>
          </div>
        </div>

        <div
          className={`flex md:flex-row flex-col md:justify-center mb-4 px-4 md:px-20  md:space-x-6`}
        >
          <FaRegArrowAltCircleLeft className={`w-[50px] h-[50px] text-black`} />
          <div
            className={`flex justify-start items-center text-black mb-2 md:mb-0 md:pb-0 pb-2 border-2 border-slate-200 px-2   `}
          >
            <img src="/img0.png" alt="" className={`w-[50px]`} />
            <div className={`font-bold `}>
              <p className={`font-bold text-xs mt-2`}>
                Personalized Photo & Slogan Text T-shirt
              </p>
              <p>
                $24.99 <span className={`text-slate-500`}>$27.77</span>
              </p>
              <div className={`flex justify-start space-x-5 pt-2`}>
                <p
                  className={
                    "bg-white rounded-full w-5 h-5 border-2 border-slate-200"
                  }
                ></p>
                <p className={"bg-black rounded-full w-5 h-5"}></p>
                <p className={"bg-blue-600 rounded-full w-5 h-5"}></p>
                <p className={"bg-yellow-800 rounded-full w-5 h-5"}></p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-start items-center mb-2 md:mb-0 md:pb-0 pb-2 text-black border-2 border-slate-200 px-2 `}
          >
            <img src="/img2.png" alt="" className={`w-[50px] h-[50px]  `} />
            <div className={`font-bold `}>
              <p className={`font-bold text-xs `}>
                Personalized Photo & Slogan Text T-shirt
              </p>
              <p>
                $24.99 <span className={`text-slate-500`}>$27.77</span>
              </p>
              <div className={`flex justify-start space-x-5 pt-2`}>
                <p className={"bg-blue-600 rounded-full w-5 h-5"}></p>
                <p className={"bg-yellow-800 rounded-full w-5 h-5"}></p>
              </div>
            </div>
          </div>

          <div
            className={`flex justify-start items-center mb-2 md:mb-0 md:pb-0 pb-2 text-black border-2 border-slate-200 px-2`}
          >
            <img src="/img2.png" alt="" className={`w-[50px] h-[50px]  `} />
            <div className={`font-bold text-xs `}>
              <p>Personalized Photo & Slogan Text T-shirt</p>
              <p>
                $24.99 <span className={`text-slate-500`}>$27.77</span>
              </p>
              <div className={`flex justify-start space-x-5 pt-2`}>
                <p
                  className={
                    "bg-white rounded-full w-5 h-5 border-2 border-slate-200"
                  }
                ></p>
                <p className={"bg-black rounded-full w-5 h-5"}></p>
              </div>
            </div>
          </div>

          <FaRegArrowAltCircleRight
            className={`w-[50px] h-[50px] text-black `}
          />
        </div>
        <div className={`flex items-center justify-center`}>
          <button
            className={`border-2 border-blue-500  rounded mt-2 px-4 pt-3 text-bold text-blue-500`}
          >
            View All Custom Products
          </button>
        </div>
      </div>
    );
}