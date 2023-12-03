import Image from "next/image";
import Link from "next/Link";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

export default function products() {
    return (
      <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 px-6 sm:px-10">
          <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
            <div className="">
              <Image
                className="max-h-auto max-h-50 block mx-auto"
                src="/sandwich_1.jpg"
                alt="sandwich"
                width={250}
                height={250}
                priority
                object-contain
              />
            </div>
            <div className="flex sm:items-center">
              <p className="font-semibold my-6 text-xl ">Burger Pizza</p>
              <p className="font-semibold text-2xl text-red-500 my-6"> $65 </p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} className="text-yellow-300 text-2xl mb-4" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">This is burga pizza</p>
            <Link href="../../components/layout/ProductOrderPage.js">
              <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-6 flex justify-center gap-2 text-md hover:text-gray-800">
                <FaShoppingCart className="text-2xl" />
                ORDER NOW
              </button>
            </Link>
          </div>
          <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
            <div className="">
              <Image
                className="max-h-auto max-h-50 block mx-auto"
                src="/sandwich_2.jpg"
                alt="sandwich"
                width={250}
                height={250}
                priority
                object-contain
              />
            </div>
            <div className="flex">
              <p className="font-semibold my-6 text-xl">Burger Pizza</p>
              <p className="font-semibold text-2xl text-red-500 my-6"> $65 </p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} className="text-yellow-300 text-2xl mb-4" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">This is burga pizza</p>
            <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-6 flex justify-center gap-2 text-md hover:text-gray-800">
              <FaShoppingCart className="text-2xl" />
              ORDER NOW
            </button>
          </div>
          <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
            <div className="">
              <Image
                className="max-h-auto max-h-50 block mx-auto"
                src="/pizza_pp.png"
                alt="sandwich"
                width={250}
                height={30}
                priority
                object-contain
              />
            </div>
            <div className="flex">
              <p className="font-semibold my-6 text-xl">Burger Pizza</p>
              <p className="font-semibold text-2xl text-red-500 my-6"> $65 </p>
            </div>
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar key={index} className="text-yellow-300 text-2xl mb-4" />
              ))}
            </div>
            <p className="text-gray-500 text-sm">This is burga pizza</p>
            <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-6 flex justify-center gap-2 text-md hover:text-gray-800">
              <FaShoppingCart className="text-2xl" />
              ORDER NOW
            </button>
          </div>
          <div className="hover:bg-gray-100 transition-all hover:shadow-md p-6 rounded-lg border">
          <div className="">
            <Image
              className="max-h-auto max-h-50 block mx-auto"
              src="/greek-pizza.png"
              alt="sandwich"
              width={250}
              height={250}
              priority
              object-contain
            />
          </div>
          <div className="flex">
            <p className="font-semibold my-6 text-xl">Greek Pizza</p>
            <p className="font-semibold text-2xl text-red-500 my-6"> $65 </p>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className="text-yellow-300 text-2xl mb-4" />
            ))}
          </div>
          <p className="text-gray-500 text-sm">This is burga pizza</p>
          <button className="border rounded-full px-5 py-3 bg-amber-500 text-white hover:bg-amber-500 border-r-50px mt-6 flex justify-center gap-2 text-md hover:text-gray-800">
            <FaShoppingCart className="text-2xl" />
            ORDER NOW
          </button>
        </div>
          <div />
        </div>
      </>
    );
}