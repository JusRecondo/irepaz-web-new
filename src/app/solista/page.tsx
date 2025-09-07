import TextBox from "@/components/text-box";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col item-center justify-center p-4 pb-16 max-w-7xl mx-auto">
      <TextBox>Lorem ipsum</TextBox>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <Image
            src="/irepaz-solista1.webp"
            height={400}
            width={400}
            alt="Ire paz tocando y cantando"
            className="my-4 border border-white p-2"
          />
          <TextBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TextBox>
        </div>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <TextBox>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </TextBox>
          <Image
            src="/irepaz-solista2.webp"
            height={400}
            width={400}
            alt="Ire paz tocando y cantando"
            className="my-4 border border-white p-2"
          />
        </div>
      </section>
    </main>
  );
}
