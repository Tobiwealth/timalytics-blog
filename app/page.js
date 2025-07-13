import Image from "next/image";
import Herosection from "./components/Herosection";
import Features from "./components/Features";

export default function Home() {
  return (
    <main className="">
      <Herosection/>
      <Features/>
    </main>
  );
}
