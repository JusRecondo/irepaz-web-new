import Image from "next/image"

interface Props {
  src: string
  alt: string
}

const ImageBox = ({ src, alt }: Props) => {
  return (
    <Image
      src={src}
      height={400}
      width={400}
      alt={alt}
      className="my-4 border border-white p-2"
    />
  )
}

export default ImageBox
