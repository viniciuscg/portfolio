import { useState } from "react" 
import { IoIosArrowDown } from "react-icons/io" 
import { useLanguage } from "../../useLanguageContext" 
import { useTranslation } from 'react-i18next'

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { language, setLanguage } = useLanguage() 
  const { t } = useTranslation()  

  const handleLanguageChange = (option: string) => {
    setLanguage(option === 'Português' ? 'pt' : 'en') 
    setIsOpen(false) 
  } 

  return (
    <div>
      <div className="flex content-center max-lg:flex-col justify-between px-10 items-center min-h-[100px] fixed top-0 left-0 right-0 bg-neutral-900">
        <h1 className="font-bold min-w-[200px] text-xl">{t('portfolio')}</h1>
        <div className="flex gap-5">
          <a href="#about"><h2>{t('about')}</h2></a>
          <a href="#skills"><h2>{t('skills')}</h2></a>
          <a href="#contact"><h2>{t('contact')}</h2></a>
          <a href="#experience"><h2>{t('experience')}</h2></a>
        </div>
        <div className="font-bold flex justify-end text-3xl max-lg:flex-grow-1 max-lg:justify-center min-w-[200px] items-end">
          <div className="relative">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center bg-neutral-900 text-white text-lg rounded-md cursor-pointer hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none px-4 py-2"
            >
              <span>{language}</span>
              <span className="ml-2"><IoIosArrowDown /></span>
            </div>

            {isOpen && (
              <ul className="absolute left-[-50px] right-0 w-40 text-xl text-center rounded-md shadow-lg bg-neutral-900 z-10">
                {["Português", "English"].map((option) => (
                  <li
                    key={option}
                    onClick={() => handleLanguageChange(option)}
                    className="py-2 text-white cursor-pointer hover:bg-neutral-700 focus:bg-neutral-700"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Header 
