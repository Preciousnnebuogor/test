import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
  TbCircleNumber5Filled,
  TbCircleNumber6Filled,
} from "react-icons/tb";
import { FaBell, FaGift, FaHeart } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";

export default function HomePage() {
  return (
    <div className={`container mx-auto px-4 py-6`}>
      <div className={`md:grid md:grid-cols-2 md:space-x-6 text-black px-4  `}>
        <div
          className={`md:flex  md:items-center md:justify-center pt-4 md:pt-0`}
        >
          <div className={`md:[w-70%] md:mt-10 mt-4`}>
            <div className={`w-[100%]`}>
              <img
                src="/img0.png"
                alt=""
                className={`w-[200px] h-[70px] bg-slate-200 mb-4`}
              />
            </div>

            <div className={` bg-slate-200 px-2 w-[100%]`}>
              <div
                className={`flex items-center justify-center text-xs mt-2 font-bold border-b-4`}
              >
                <h1 className={`pt-2`}>COLOR</h1>
              </div>

              <div className={`grid grid-cols-3 bg-slate-200`}>
                <div>
                  <p className={`text-sm font-thin`}>white</p>
                  <img
                    src="/img0.png"
                    alt=""
                    className={`w-[50px] h-[50px]  `}
                  />
                </div>
                <div>
                  <h6 className={`text-sm font-thin`}>blue</h6>
                  <img src="/img3.png" alt="" className={`w-[50px] h-[50px]`} />
                </div>
                <div>
                  <h6 className={`text-sm font-thin`}>white</h6>
                  <img src="/img4.png" alt="" className={`w-[50px] h-[50px]`} />
                </div>
                <div>
                  <h6 className={`text-sm font-thin`}>white</h6>
                  <img src="/img5.png" alt="" className={`w-[50px] h-[50px]`} />
                </div>
                <div>
                  <h6 className={`text-sm font-thin`}>white</h6>
                  <img src="/img2.png" alt="" className={`w-[50px] h-[50px]`} />
                </div>
              </div>
            </div>

            <div className={`w-[100%] bg-slate-200 mt-4 pt-2 pb-2`}>
              <div className={`flex item-center justify-center text-base mb-1`}>
                <h1>Text font</h1>
              </div>
              <div className={`grid grid-cols-2 px-2  text-xs`}>
                <div className={`flex items-end space-x-1`}>
                  <TbCircleNumber1Filled />
                  <h6>commome</h6>
                </div>
                <div className={`flex items-end space-x-1`}>
                  <TbCircleNumber2Filled />
                  <h6>commome</h6>
                </div>
                <div className={`flex items-end space-x-1 mt-1`}>
                  <TbCircleNumber3Filled />

                  <h6>commome</h6>
                </div>
                <div className={`flex items-end space-x-1 mt-1`}>
                  <TbCircleNumber4Filled />

                  <h6>comhome</h6>
                </div>
                <div className={`flex items-end space-x-1 mt-1`}>
                  <TbCircleNumber5Filled />

                  <h6>cohome</h6>
                </div>
                <div className={`flex items-end space-x-1 mt-2 `}>
                  <TbCircleNumber6Filled />
                  <h6 className={`text-xs font-thin`}>comhome</h6>
                  <div />
                </div>
              </div>

              <div className={`pt-6 flex items-center justify-center`}>
                <h1>Text Color</h1>
              </div>
              <div className={`grid grid-cols-3 px-3  text-xs mt-4`}>
                <div className={`flex justify-center items-center gap-1 `}>
                  <p className={"bg-white rounded-full w-2 h-2"}></p>
                  <p>white</p>
                </div>

                <div className={`flex justify-center items-center gap-1 `}>
                  <p className={"bg-green-600 rounded-full w-2 h-2"}></p>
                  <p>green</p>
                </div>

                <div className={`flex justify-center items-center gap-1 `}>
                  <p className={"bg-blue-500 rounded-full w-2 h-2"}></p>
                  <p>blue</p>
                </div>

                <div className={`flex justify-center items-center gap-1 `}>
                  <p
                    className={
                      "bg-yellow-500 rounded-full w-2 h-2 md:w-8 md:h-2"
                    }
                  ></p>
                  <p>yellow</p>
                </div>
                <div className={`flex justify-center items-center gap-1 `}>
                  <p className={"bg-pink-500 rounded-full md:w-2 md:h-2"}></p>

                  <p>pink</p>
                </div>
                <div className={`flex justify-center items-center gap-1 `}>
                  <p className={"bg-purple-500 rounded-full w-2 h-2"}></p>

                  <p>purple</p>
                </div>
              </div>
            </div>
            <div className={`w-[100%] bg-slate-200 mt-4 mb-4`}>
              <img src="/img3.png" alt="" className={`w-[200px] h-[80px]`} />
            </div>
          </div>

          <div className={` md:ml-10 bg-slate-200 mt-0 `}>
            <img src="/img0.png" alt="" className={`w-[600px] h-[540px]`} />
          </div>
        </div>

        <div className={`mt-10 w-[90%]`}>
          <div className={`flex item-center space-x-2 text-blue-500 `}>
            <FaBell />
            <p>Selling fast! 5 people have this in their carts</p>
          </div>
          <p className={`mt-4 text-3xl font-bold`}>
            Personalized Photo and Slogan Text Hoodie
          </p>
          <div className={`flex justify-between`}>
            <p className={`text-3xl font-bold mt-3`}>
              $39.99 <span className={`text-slate-200`}>$44.44</span>
            </p>
            <p
              className={`border-2 border-red-500 rounded-full px-8 pt-3 text-red-500`}
            >
              in stock
            </p>
          </div>

          <div className={`bg-slate-200  mt-4 px-6`}>
            <div className={`flex justify-start text-yellow-500 pt-4 `}>
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
            </div>

            <p className={`mt-3`}>
              I love this! When I saw this hoodie, I knew I had to get it. It
              makes me so confident every time I wear it. Thanks
            </p>
            <p className={`font-bold`}>Wandy N</p>
          </div>
          <p className={`font-bold mt-4 `}>color</p>
          <div className={`flex justify-start space-x-5 pt-2`}>
            <p
              className={
                "bg-white rounded-full w-5 h-5 border-2 border-slate-200"
              }
            ></p>
            <p className={"bg-black rounded-full w-5 h-5"}></p>
            <p className={"bg-sky-950 rounded-full w-5 h-5"}></p>
            <p className={"bg-blue-600 rounded-full w-5 h-5"}></p>
            <p className={"bg-yellow-800 rounded-full w-5 h-5"}></p>
          </div>
          <div>
            <p className={`font-bold mt-4 `}>size</p>
            <div className={`flex justify-start space-x-5 pt-2 `}>
              <p className={`border-2 border-slate-200 rounded-full px-3`}>S</p>
              <p className={`border-2 border-slate-200 rounded-full px-3`}>M</p>
              <p className={`border-2 border-slate-200 rounded-full px-3`}>X</p>
              <p className={`border-2 border-slate-200 rounded-full px-3`}>
                XL
              </p>
            </div>
          </div>

          <div className={`w-[70%]`}>
            <p className={`font-bold mt-4 `}>Type your custom text</p>
            <p>
              Please note the font size and color in parentheses after your
              text.E.g. My BFF (30, Black)
            </p>
            <p
              className={`border-2 border-slate-200 text-slate-200 py-3 px-4 text-lg `}
            >
              My custom hoodie
            </p>
          </div>

          <div>
            <p className={`font-bold mt-4 bg-white`}>perfect to</p>
            <div className={`flex items-start space-x-2 `}>
              <div className={`text-blue-500 mt-1`}>
                <IoIosStar />
              </div>
              <p>Dress yourself up</p>
            </div>
            <div className={`flex items-start space-x-2 `}>
              <div className={`text-blue-500 mt-1`}>
                <FaGift />
              </div>
              <p>Anniversary gifts for your loved one</p>
            </div>
            <div className={`flex items-start space-x-2 `}>
              <div className={`text-blue-500 mt-1`}>
                <FaHeart />
              </div>
              <p>Birthday or celebration gifts for friends and family</p>
            </div>
            <div
              className={`flex md:flex-row flex-col items-center justify-center md:items-start md:justify-between`}
            >
              <div
                className={`border-2 border-black rounded px-4 pt-3 mt-3 outline-none`}
              >
                <input type="number" />
              </div>

              <button
                className={`border-2 border-blue-500 bg-blue-500 rounded mt-3 px-16 pt-3 text-bold text-white`}
              >
                Get My Hoodie
              </button>
            </div>
            <p className={`text-bold mt-6`}>Guaranteed SAFE Checkout</p>
            <div className={`flex items-start space-x-2`}>
              <img src="/a.jpg" alt="" className={`w-[50px] h-[30px]`} />{" "}
              <img src="/v.jpg" alt="" className={`w-[50px] h-[30px]`} />{" "}
              <img src="/m.jpg" alt="" className={`w-[50px] h-[40px]`} />{" "}
              <img src="/ap.jpg" alt="" className={`w-[50px] h-[30px]`} />
              <img
                src="/gp.jpg"
                alt=""
                className={`w-[50px] h-[30px]  border-black border-2`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
