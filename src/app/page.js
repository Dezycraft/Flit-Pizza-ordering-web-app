import NavBar from "../components/layout/NavBar"
import HeroPage from "@/components/layout/HeroPage";
import Image from 'next/image';
import Link from "next/Link";

export default function Home() {
  return (
    <>
     <NavBar />
     <HeroPage />
    </>
  );
}
