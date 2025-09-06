import { FaInstagram } from "react-icons/fa"

const rrss = [
    {
        name: "Instagram",
        url: "https://instagram.com",
        icon: <FaInstagram />
    },
    {
        name: "Spotify",
        url: "https://spotify.com",
        icon: <FaInstagram />
    },
    {
        name: "Tidal",
        url: "https://tidal.com",
        icon: <FaInstagram />
    },
    {
        name: "Bandcamp",
        url: "https://bandcamp.com",
        icon: <FaInstagram />
    },
]


const Footer = () => {
  return (
    <footer className="w-full h-20">
        <ul className="w-full flex justify-center items-center gap-4 text-white text-2xl">
            {rrss.map((item, i) => (
                <li key={i}>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={`Ir al perfil de ${item.name}`}>
                        {item.icon}
                    </a>
                </li>
            ))}
        </ul>
    </footer>
  )
}

export default Footer