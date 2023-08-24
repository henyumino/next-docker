import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [count, setCount] = useState<number>(0);

  const increase = () => setCount((prev) => prev + 1);
  const decrease = () => setCount((prev) => prev - 1);

  return (
    <main>
      <div className="flex gap-x-2 w-full justify-center">
        <button
          onClick={decrease}
          className=" px-4 bg-blue-500 rounded-lg text-white"
        >
          -
        </button>
        <span>count: {count}</span>
        <button
          onClick={increase}
          className=" px-4 bg-blue-500 rounded-lg text-white"
        >
          +
        </button>
      </div>
    </main>
  );
}
