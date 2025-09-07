interface Props {
  src: string
  title: string
}

const VideoBox = ({ src, title }: Props) => {
  return (
    <div className="my-4 border border-white p-2 h-[500px]">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="border-0 h-full w-full"
      ></iframe>
    </div>
  )
}

export default VideoBox
