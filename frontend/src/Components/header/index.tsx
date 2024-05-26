import { FaCode } from "react-icons/fa"

function Header() {
  return (
    <div className="flex justify-between px-10 items-center min-h-[100px] fixed top-0 left-0 right-0 bg-neutral-900">
      <h1 className="font-bold text-xl">Vinicius Portfólio</h1>
      <div className="flex gap-5">
        <a href="#about"><h2>Sobre</h2></a>
        <a href="#skills"><h2>Habilidades</h2></a>
        <a href="#contact"><h2>Contato</h2></a>
      </div>
      <div className="font-bold flex justify-end text-3xl items-end min-w-[22px]"><FaCode/></div>
    </div>
  )
}

export default Header
