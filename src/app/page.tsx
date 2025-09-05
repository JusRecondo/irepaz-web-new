import HomeMarquee from "@/components/home-marquee";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid items-center justify-items-center min-h-screen p-0 gap-16 overflow-hidden">
      <main className="w-full h-full flex flex-col gap-[32px] item-center justify-center">
        <HomeMarquee>
          <Link href="/solista" className="text-4xl w-full hover:text-amber-800">IRE PAZ SOLISTA</Link>
        </HomeMarquee>
        <HomeMarquee speed={55} delay={1} direction="right">
          <Link href="/edificios" className="text-4xl w-full hover:text-purple-800">EDIFICIOS DERRUMBADOS</Link>
        </HomeMarquee>
        <HomeMarquee speed={45} delay={0.5}>
          <Link href="/la-corteza-electrica" className="text-4xl w-full hover:text-orange-500">IRE PAZ Y LA CORTEZA ELÉCTRICA</Link>
        </HomeMarquee>
        <HomeMarquee speed={40} delay={2} direction="right">
          <Link href="/ipjr" className="text-4xl w-full hover:text-teal-700">IPJR</Link>
        </HomeMarquee>
        <HomeMarquee speed={60}>
          <Link href="/supervivencia-visual" className="text-4xl w-full hover:text-red-400">SUPERVIVENCIA VISUAL</Link>
        </HomeMarquee>        
      </main>
    </div>
  );
}
