import AnimatedBlock from "@/components/animated-block"
import ImageBox from "@/components/image-box"
import TextBox from "@/components/text-box"

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col item-center justify-center p-4 pb-16 max-w-7xl mx-auto">
      <TextBox>Lorem ipsum</TextBox>
      <section className="flex flex-col gap-4">
        <AnimatedBlock>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <ImageBox
              src="/irepaz-solista1.webp"
              alt="Ire paz tocando y cantando"
            />
            <TextBox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TextBox>
          </div>
        </AnimatedBlock>
        <AnimatedBlock direction="right">
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <TextBox>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TextBox>
            <ImageBox
              src="/irepaz-solista2.webp"
              alt="Ire paz tocando y cantando"
            />
          </div>
        </AnimatedBlock>
      </section>
    </main>
  )
}
