'use client'
import { FaInstagram } from "react-icons/fa"
import { FaSpotify } from "react-icons/fa"
import { FaBandcamp } from "react-icons/fa"
import { SiTidal } from "react-icons/si"
import { FaYoutube } from "react-icons/fa"
import Link from "next/link"
import { usePathname } from "next/navigation"

const rrss = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/iirepaz.cortezaelectrica/",
    icon: <FaInstagram />,
  },
  {
    name: "Spotify",
    url: "https://open.spotify.com/intl-es/artist/3Jr7ZXCzYBXiVpHrSyslOZ?si=XbXWNx9XQX6azJvBgqrKSQ",
    icon: <FaSpotify />,
  },
  {
    name: "Tidal",
    url: "https://tidal.com/browse/artist/24507937/u",
    icon: <SiTidal />,
  },
  {
    name: "Bandcamp",
    url: "https://iirepaz.bandcamp.com/music",
    icon: <FaBandcamp />,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@iirepaz",
    icon: <FaYoutube />,
  },
]

const navItems = [
  {
    path: "/",
    title: "Inicio",
  },
  {
    path: "/solista",
    title: "Solista",
  },
  {
    path: "/edificios",
    title: "Edificios",
  },
  {
    path: "/la-corteza-electrica",
    title: "Corteza",
  },
  {
    path: "/ipjr",
    title: "Ipjr",
  },
  {
    path: "/supervivencia-visual",
    title: "Visual",
  },
]

const Footer = () => {
  const pathname = usePathname()
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4 bg-black/50 flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6">
      <ul className="w-full flex justify-center items-center gap-6">
        {rrss.map((item, i) => (
          <li key={i}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ir al perfil de ${item.name}`}
              className="text-white hover:text-purple-300 text-2xl transition-colors duration-300"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <ul className="w-full flex justify-center items-center gap-4">
        {navItems.map((item, i) => {
          const isActive = pathname === item.path
          return (
            <li key={i}>
              <Link
                href={item.path}
                className={`transition-colors duration-300 ${
                  isActive
                    ? "text-purple-300 underline underline-offset-4"
                    : "text-white hover:text-purple-300"
                }`}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
