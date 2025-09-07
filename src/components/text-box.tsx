import React from 'react'

interface Props {
  children: React.ReactNode
}

const TextBox = ({ children }: Props) => {
  return (
    <div className="text-base lg:text-xl text-white bg-black/50 border border-white p-2 flex flex-col gap-2 w-full">
        {children}
    </div>
  )
}

export default TextBox