import Marquee from 'react-fast-marquee'

interface Props {
  children: React.ReactNode
  speed?: number
  delay?: number
  direction?: 'left' | 'right' | 'up' | 'down'
}

const HomeMarquee = ({ children, speed = 50, delay = 0, direction = 'left' }: Props) => {
  return (
    <Marquee className="overflow-hidden" speed={speed} delay={delay} direction={direction} gradient pauseOnHover gradientColor="#fbfbfb">
      {children}
    </Marquee>
  )
}

export default HomeMarquee