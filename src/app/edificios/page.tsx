import AnimatedBlock from "@/components/animated-block"
import ImageBox from "@/components/image-box"
import TextBox from "@/components/text-box"
import VideoBox from "@/components/video-box"

export default function Edificios() {
  return (
    <main className="w-full h-full flex flex-col item-center justify-center p-4 pb-24 max-w-7xl mx-auto overflow-x-hidden">
      <TextBox>Lorem ipsum</TextBox>
      <section className="flex flex-col gap-4">
        <AnimatedBlock>
          <div className="flex flex-col lg:flex-row gap-2 items-center">
            <ImageBox
              src="/irepaz-edificios1.webp"
              alt="Portada de edifcios que se derrumban"
            />
            <TextBox>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </TextBox>
          </div>
        </AnimatedBlock>
        <AnimatedBlock direction="right">
          <div className="flex flex-col gap-2">
            <TextBox>Lorem ipsum</TextBox>
            <VideoBox
              src="https://www.youtube.com/embed/Q9eBBrtmegk?si=sMhdH_9ifuKD4W82"
              title="Ire Paz tocando 316 en la presentacion de su disco"
            />
          </div>
        </AnimatedBlock>
      </section>
    </main>
  )
}
