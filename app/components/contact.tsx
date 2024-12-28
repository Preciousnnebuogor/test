"use client"
export default function Contact () {
    return (
      <div>
        <div className={`mt-10 text-black px-20 `}>
          <div className={`flex item-center justify-center`}>
            <p className={`text-lg font-bold`}>
              You Should Be The Next One Here!
            </p>
          </div>
          <div className={`flex justify-center mb-4`}>
            <p>
              Follow us at @GemCustom and use the hashtag #GemCustom to be
              featured
            </p>
          </div>
        </div>

        <div className={`md:grid md:grid-cols-4 flex flex-col items-center`}>
          <img
            src="/girl1.jpg"
            alt=""
            className={`w-[200px] h-[150px] bg-slate-200 mb-4`}
          />
          <img
            src="/f2.png"
            alt=""
            className={`w-[200px] h-[150px] bg-slate-200 mb-4`}
          />
          <img
            src="/f1.png"
            alt=""
            className={`w-[200px] h-[150px] bg-slate-200 mb-4`}
          />

          <img
            src="/girl2.jpg"
            alt=""
            className={`w-[200px] h-[150px] bg-slate-200 mb-4`}
          />
        </div>

        <div className={`flex items-center justify-center space-x-3 text-black`}>
          <p>About Us</p>
          <p>Privacy</p>
          <p>FAQ</p>
          <p>Return</p>
        </div>
      </div>
    );
}