"use client"
import { FaChevronUp } from "react-icons/fa";

export default function  Question () {

    return (
      <div className={`px-20 mt-10`}>
        <div className={`grid grid-cols-1 md:grid-cols-2 space-x-4`}>
          <div className={` text-black px-20 `}>
            <div className={`flex item-center justify-center`}>
              <p className={`text-lg font-bold`}>For Head-to-Toe Matching</p>
            </div>
            <div className={`flex justify-center mb-4`}>
              <p>The collection that goes perfectly with your hoodie!</p>
            </div>
          </div>

          <div className={`flex flex-col  text-black px-4`}>
            <div className={`flex justify-between`}>
              <button
                className={`border-2 border-slate-200 flex space-x-4 w-[90%] px-3 mb-2`}
              >
                Why do I have to choose a high-resolution image for my printed
                product?
              </button>
            </div>

            <div className={`flex justify-between `}>
              <button
                className={`border-2 border-slate-200 flex space-x-4 w-[90%] px-3 mb-2`}
              >
                Can I make changes to my order once it has been placed?
              </button>
            </div>

            <div className={`flex justify-between `}>
              <button
                className={`border-2 border-slate-200 flex space-x-4 w-[90%] px-3 mb-2`}
              >
                Can I cancel my order if I change my mind?
              </button>
            </div>

            <div className={`flex justify-between `}>
              <p
                className={`border-2 border-slate-200 flex space-x-4 w-[90%] px-3 mb-2`}
              >
                How do I track my order?
              </p>
            </div>

            <div className={`flex justify-between `}>
              <p
                className={`border-2 border-slate-200 flex space-x-4 w-[90%] px-3`}
              >
                How long before I get my return refund?
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}