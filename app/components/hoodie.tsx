import { IoIosStar } from "react-icons/io";

export default function Hoodie () {
    return (
      <div className={`mt-4 text-black px-20 `}>
        <div className={`flex item-center justify-center`}>
          <p className={`text-lg font-bold`}>From Our Hoodie & Tees Lovers</p>
        </div>
        <div className={`flex justify-center mb-4`}>
          <p>What customers have been saying!</p>
        </div>
        <div className={`grid grid-cols-2`}></div>

        <div className={`md:flex md:justify-between mb-4 md:px-16 bg-slate-200`}>
          <div>
            <div className={`px-4 mt-2 flex justify-start space-x-2`}>
              <img
                src="/girl1.jpg"
                alt=""
                className={`w-[40px] h-[40px] rounded-full`}
              />
              <div>
                <p className={`text-bold`}>Heather Watson</p>
                <div className={`flex justify-start text-yellow-500 `}>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
              </div>
            </div>
            <div className={`60%`}>
              <p className={`font-bold mt-4 px-4`}>
                I got one for myself and one for my daughter, they’re so
                stinking adorable.{" "}
              </p>
              <p className={`px-4 mt-3`}>
                Such a cute way to match my baby when it gets cold again. The
                hoodies are true to size, I ordered a youth medium and it fits
                PERFECTLY! Overall, 100% satisfied and will definitely order
                again.
              </p>
              
            </div>
          </div>

          <div className={`bg-slate-200 pr-10 `}>
            <img src="/lil.png" alt="" className={`w-[200px] h-[200px] mb-3`} />
          </div>
        </div>
      </div>
    );
}