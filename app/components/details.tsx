"use client"
import { useState } from "react";

export default function Details() {
  const [overview, setOverview] = useState(true);
  const [sizing, setSizing] = useState(false);
  const [packaging, setPackaging] = useState(false);
  const [ship, setShip] = useState(false);

  return (
    <div className={`text-black`}>
      <div
        className={
          "mt-4 px-4 border-b-2 border-black  text-black mb-4 space-x-14"
        }
      >
        <button
          onClick={() => {
            setOverview(true);
            setSizing(false);
            setPackaging(false);
            setShip(false);
          }}
        >
          OVERVIEW
        </button>
        <button
          onClick={() => {
            setOverview(false);
            setSizing(true);
            setPackaging(false);
            setShip(false);
          }}
        >
          SIZING
        </button>
        <button
          onClick={() => {
            setOverview(false);
            setSizing(false);
            setPackaging(true);
            setShip(false);
          }}
        >
          PACKAGING
        </button>
        <button
          onClick={() => {
            setOverview(false);
            setSizing(false);
            setPackaging(false);
            setShip(true);
          }}
        >
          SHIPPING & FREE RETURNS
        </button>
      </div>

      {overview && (
        <div className={`grid grid-cols-3 px-4 space-x-8`}>
          <div className={`w-[100%]`}>
            <p className={`font-bold mt-2`}>Overview</p>
            <p className={`mt-2`}>
              One of our most popular t-shirts for direct-to-garment printing.
            </p>
            <p className={`mt-3`}>
              It’s eco-friendly, unisex, and available in plenty of colour
              options. And it’s manufactured not only to high quality standards
              but with garment decoration in mind. It’s made for DTG, made for
              embroidery. There’s a reason why countless online clothing brands
              use it as their staple hoodie! Find yours below.
            </p>
            <div className={`mt-5`}>
              <li>Unisex style, medium fit. It’s for everyone.</li>
              <li>Round drawcords in matching body color.</li>
              <li>1x1 rib at sleeve hem and bottom hem.</li>
              <li>Flatlock topstitch on all seams.</li>
              <li>Kangaroo pocket with flatlock topstitch.</li>
            </div>
          </div>
          <div className={``}>
            <p className={`font-bold mt-2`}>Material</p>
            <div className={`mt-3 px-2`}>
              <li>85% Organic ring-spun Combed Cotton</li>
              <li>15% Recycled Polyester.</li>
              <p className={`font-bold mt-2`}>Weight</p>
              <li>270 gsm.</li>
            </div>
          </div>

          <div className={``}>
            <p className={`font-bold mt-2`}>Color information</p>
            <p className={`w-[70%]`}>
              Color repre­­sen­­ta­­tion is only as accurate as the web design
              process allows.
            </p>
          </div>
        </div>
      )}

      {sizing && (
        <div className={`grid grid-cols-2 px-4`}>
          <div>
            <img src="/wb.png" alt="" className={`w-[500px] h-[400px]`} />
          </div>

          <div>
            <p className={`font-bold mt-2`}>Size Chart</p>
            <table className="table-auto border-collapse border mt-2 border-gray-300 w-[80%] bg-white px-6 shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Sizes
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    X
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    M
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    L
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    XL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Half chest
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    51.5
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    54
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    57
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    60
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Body Length
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    66
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    70
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    72
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    74
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    Sleeve Length
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    64
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    65.5
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    67
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    68.5
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {packaging && (
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between px-10 md:space-x-10">
          {/* Column Container for Heading and Content */}
          <div className="w-[80%] md:w-1/2">
            {/* Heading */}
            <p className="font-bold text-lg mt-2">Eco-friendly Packaging</p>
            {/* Content */}
            <div className="mt-4">
              <p className="text-black">
                All orders are shipped in 100% plastic-free packaging. Hoodies
                are folded neatly into these bags. To save on packing materials
                and reduce waste, we do not pack items into individual bags
                before they are shipped in these mailers.
              </p>
            </div>
            <p className="mt-4 text-black">
              Our paper postal mailing bags are manufactured from responsible,
              sustainable sources to comply with FSC certification. The paper is
              both compostable and degradable, and paper mailers can be easily
              recycled, making this an extremely eco-friendly option. The
              weather-proof parcel protects its contents during transit.
            </p>
          </div>
          {/* Second Column */}
          <div className="w-full md:w-1/2">
            {/* Heading */}
            <p className="font-bold text-lg mt-2">Free Gift Wrapping</p>
            {/* Content */}
            <p className="mt-4 text-black">
              If you need extra help wrapping your order as a gift for your
              friends and loved ones, here we are at your service. And it’s
              totally FREE!
            </p>
            <p className="mt-4 text-black">
              Just don’t forget to add a note to us for any request when you
              check out, and we'll make it the most perfect gift ever.
            </p>
          </div>
        </div>
      )}

      {ship && (
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between px-10 md:space-x-10">
          {/* Column Container for Heading and Content */}
          <div className="w-[80%] md:w-1/2">
            {/* Heading */}
            <p className="font-bold text-lg mt-2">Shipping</p>
            {/* Content */}
            <div className="mt-4">
              <p className="text-black">
                The products are printed and shipped via a third party printing
                company, with times that vary due to order volume.
              </p>
            </div>
            <p className="mt-4 text-black">
              We would currently allow up to 3 weeks for your order to arrive
              just to be safe, though it could take much less time!
            </p>
            <p className="mt-4 text-black">
              If you need the hoodie immediately than the estimated time, please
              upgrade shipping in the cart.
            </p>
          </div>

          {/* Second Column */}
          <div className="w-full md:w-1/2">
            {/* Heading */}
            <p className="font-bold text-lg mt-2">Free returns</p>
            {/* Content */}
            <p className="mt-4 text-black">
              If you are not 100% satisfied with your items, you may return your
              order for a refund on all eligible merchandise (Original shipping
              charges are non-refundable). Our return policy is effective for up
              to 60 days from when the order is fulfilled.
            </p>
            <p className="mt-3 text-black">
              We want you to have the best experience when shopping online with
              us, so if for whatever reason you’re not happy with your purchase,
              please let us know via: gemcustom@gmail.com
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
