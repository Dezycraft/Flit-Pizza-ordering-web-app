import Image from "next/image";
import Link from "next/Link";
import { FaShoppingCart } from "react-icons/fa";
export default function HeroPage() {
  return (
    <>
      <section className="grid grid-cols-3">
        <div className="pt-10 pl-6 justify-around">
          <h1 className="text-6xl font-bold mt-4">
            Handmade, <br />
            With an extra <br />
            Pinch of <i className="text-red-600">Love</i>
          </h1>

          <p className="text-4xl pt-5 text-gray-500">
            Your best pizza app, 
            you cannot go wrong with pizzon
          </p>
          <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-8 flex justify-center gap-2 text-md hover:text-gray-800">
            <FaShoppingCart className="text-2xl" />
            ORDER NOW
          </button>
        </div>
        <div className="flex flex-col pl-10 col-span-1 relative">
          <Image
            className=" block mx-auto top-1/4 transform -translate-y-1/8 translate-x-1/2 "
            src="/pizza_pp.png"
            alt="Pizza"
            width={500}
            height={50}
            priority
            object-contain
          />
          <div className="flex pt-6 transform -translate-y-1/6 translate-x-1/2 gap-4 justify-between">
            <Image
              className=" block mx-auto"
              src="/pizza-onion.png"
              alt="Pizza"
              width={100}
              height={3}
              priority
              object-contain
            />
            <Image
              className=" block mx-auto  "
              src="/hero-pizza2.png"
              alt="Pizza"
              width={200}
              height={50}
              priority
              object-contain
            />
          </div>
        </div>
        <div className="bg-yellow-500  rounded-l-full"></div>
      </section>
    </>
  );
}
