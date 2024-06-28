import { FaCode } from "react-icons/fa"

function Header() {
  return (
    <div>
      <div className="flex content-center max-lg:flex-col justify-between px-10 items-center min-h-[100px] fixed top-0 left-0 right-0 bg-neutral-900">
        <h1 className="font-bold min-w-[200px] text-xl">Vinicius Portfólio</h1>
        <div className="flex gap-5">
          <a href="#about"><h2>Sobre</h2></a>
          <a href="#skills"><h2>Habilidades</h2></a>
          <a href="#contact"><h2>Contato</h2></a>
          <a href="#experience"><h2>Experiência</h2></a>
        </div>
        <div className="font-bold flex justify-end text-3xl max-lg:flex-grow-1 max-lg:justify-center min-w-[200px] items-end"><FaCode/></div>
      </div>
    </div>
  )
}

export default Header
