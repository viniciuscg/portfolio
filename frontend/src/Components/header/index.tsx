import { FaCode } from "react-icons/fa"

function Header() {
  return (
    <div className="flex justify-between items-center min-h-[100px]">
      <h1 className="min-w-44 font-bold text-xl">Vinicius Portfólio</h1>
      <div className="flex gap-5 min-w-44">
        <a href="#home"><h2>Home</h2></a>
        <a href="#about"><h2>Sobre</h2></a>
        <a href="#skills"><h2>Habilidades</h2></a>
        <a href="#contact"><h2>Contato</h2></a>
      </div>
      <div className="min-w-44 font-bold flex justify-end text-3xl items-end"><FaCode/></div>
    </div>
  )
}

export default Header
