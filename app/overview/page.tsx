export default function come() {
  return (
    <div>
      <div className={`w-[40%]`}>
        <p className={`font-bold mt-2`}>Overview</p>
        <p className={`mt-2`}>
          One of our most popular t-shirts for direct-to-garment printing.
        </p>
        <p className={`mt-3`}>
          It’s eco-friendly, unisex, and available in plenty of colour options.
          And it’s manufactured not only to high quality standards but with
          garment decoration in mind. It’s made for DTG, made for embroidery.
          There’s a reason why countless online clothing brands use it as their
          staple hoodie! Find yours below.
        </p>
        <div className={`mt-5`}>
          <li>Unisex style, medium fit. It’s for everyone.</li>
          <li>Round drawcords in matching body color.</li>
          <li>1x1 rib at sleeve hem and bottom hem.</li>
          <li>Flatlock topstitch on all seams.</li>
          <li>Kangaroo pocket with flatlock topstitch.</li>
        </div>
      </div>

      <div className={`w-[30%]`}>
        <p className={`font-bold mt-2`}>Material</p>
        <div className={`mt-3`}>
          <li>85% Organic ring-spun Combed Cotton</li>
          <li>15% Recycled Polyester.</li>
        </div>
      </div>

      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">Sizes</td>
        <td className="border border-gray-300 px-4 py-2 text-center">X</td>
        <td className="border border-gray-300 px-4 py-2 text-center">M</td>
        <td className="border border-gray-300 px-4 py-2 text-center">L</td>
        <td className="border border-gray-300 px-4 py-2 text-center">XL</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          Half chest
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">51.5</td>
        <td className="border border-gray-300 px-4 py-2 text-center">54</td>
        <td className="border border-gray-300 px-4 py-2 text-center">57</td>
        <td className="border border-gray-300 px-4 py-2 text-center">60</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          Body Length
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">66</td>
        <td className="border border-gray-300 px-4 py-2 text-center">70</td>
        <td className="border border-gray-300 px-4 py-2 text-center">72</td>
        <td className="border border-gray-300 px-4 py-2 text-center">74</td>
      </tr>
      <tr>
        <td className="border border-gray-300 px-4 py-2 text-center">
          Sleeve Length
        </td>
        <td className="border border-gray-300 px-4 py-2 text-center">64</td>
        <td className="border border-gray-300 px-4 py-2 text-center">65.5</td>
        <td className="border border-gray-300 px-4 py-2 text-center">67</td>
        <td className="border border-gray-300 px-4 py-2 text-center">68.5</td>
      </tr>

      <div className={`flex flex-col  text-black px-4`}>
        <div className={`flex justify-between w-[80%]`}>
          <button className={`border-2 border-slate-200 flex space-x-4`}>
            Why do I have to choose a high-resolution image for my printed
            product?
          </button>
        </div>
      </div>
    </div>
  );
}
