import { FaBrain, FaChartLine, FaCogs, FaDatabase, FaGithub, FaHandshake, FaLightbulb, FaLinkedin, FaNode, FaPhone, FaProjectDiagram, FaReact, FaTools, FaUsers } from 'react-icons/fa'
import img from './img.png'
import pdf from "./Vinicius-Carneiro-Gonçalves-Developer.pdf"
import { IoIosPaper, IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { BiLogoTypescript } from 'react-icons/bi'
import { MdOutlinePhp } from 'react-icons/md'
import { TiSocialInstagram } from 'react-icons/ti'
import logo from './4mti_logo.png'
import { useTranslation } from 'react-i18next'

function Content() {
  const { t } = useTranslation();

  const socialMedia = [
    {
      icon: <FaGithub />,
      link: "https://github.com/viniciuscg"
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/vinicius-c-goncalves/"
    },
    {
      icon: <TiSocialInstagram />,
      link: "https://www.instagram.com/vinic7us/"
    },
    {
      icon: <IoLogoWhatsapp />,
      link: "https://wa.me/5531985791710"
    },
  ]
 
  const languages = [
    {
      icon: <FaReact />,
      description: t('languages.0')
    },
    {
      icon: <FaNode />,
      description: t('languages.1')
    },
    {
      icon: <BiLogoTypescript />,
      description: t('languages.2')
    },
    {
      icon: <MdOutlinePhp />,
      description: t('languages.3')
    },
    {
      icon: <FaDatabase />,
      description: t('languages.4')
    }
  ];

  const softSkills = [
    {
      icon: <FaBrain />,
      description: t('softSkillsArr.0')
    },
    {
      icon: <FaCogs />,
      description: t('softSkillsArr.1')
    },
    {
      icon: <FaHandshake />,
      description: t('softSkillsArr.2')
    },
    {
      icon: <FaChartLine />,
      description: t('softSkillsArr.3')
    },
    {
      icon: <FaProjectDiagram />,
      description: t('softSkillsArr.4')
    },
    {
      icon: <FaTools />,
      description: t('softSkillsArr.5')
    },
    {
      icon: <FaLightbulb />,
      description: t('softSkillsArr.6')
    },
    {
      icon: <FaUsers />,
      description: t('softSkillsArr.7')
    }
  ];

  const contact = [
    {
      icon: <IoMdMail />,
      description: t('contactDetails.0'),
      link: undefined
    },
    {
      icon: <FaPhone />,
      description: t('contactDetails.1'),
      link: undefined
    },
    {
      icon: <IoIosPaper />,
      description: t('contactDetails.2'),
      link: pdf
    }
  ];

  const experience = [
    {
      icon: <img src={logo} alt="Company logo" />,
      level: "4MTI",
      description: t('jobExperience.0')
    }
  ]

  return (
    <div className='flex flex-col gap-6'>
      <div id='home' className='flex max-lg:flex-col gap-6 justify-center items-center'>
        <div>
          <span className='font-light'>{t('presentation')}</span>
          <h1 className='font-extrabold max-lg:text-6xl text-7xl'>Software <br/> Developer</h1>
        </div>
        <img className='max-w-[700px] max-lg:w-[300px] rounded-lg' src={img} />
      </div>

      <div>
        <div className='flex gap-5 justify-center items-center'>
          <h1 id='about' className='font-extrabold text-3xl'>{t('about')}</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex py-10 justify-center text-center'>
          <p className='max-w-7xl'>{t('summary')}</p>
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center'>
          <h1 id='experience' className='font-extrabold text-3xl'>{t('experience')}</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex gap-5 flex-col items-center'>
          <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3'>
            {experience.map(item => (
              <div className='flex flex-col gap-2 text-center items-center'>
                <span className='p-3 w-24'>{item.icon}</span>
                <p>{item.level}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex gap-5 justify-center items-center'>
          <h1 id='skills' className='font-extrabold text-3xl'>{t('skills')}</h1>
          <hr className='w-full'/>
        </div>
        <div className='py-10 flex flex-col gap-20'>
          <div className='flex gap-10 flex-col items-center'>
            <h2 className='text-xl'>{t('skillsProgramming')}</h2>
            <div className='grid gap-6 text-center md:grid-cols-2 lg:grid-cols-4'>
              {languages.map(item => (
                <div className='flex flex-col items-center'>
                  <span className='p-3 text-6xl'>{item.icon}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-5 flex-col items-center'>
            <h2 className='text-xl'>{t('softSkills')}</h2>
            <div className='grid gap-6 md:grid-cols-2 text-center lg:grid-cols-4'>
              {softSkills.map(item => (
                <div className='flex flex-col items-center'>
                  <span className='p-3 text-6xl'>{item.icon}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center'>
            <h1 id='socialMedia' className='font-extrabold text-3xl'>{t('medias')}</h1>
            <hr className='w-full'/>
          </div>
          <div className='flex gap-5 flex-col items-center'>
            <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-4'>
              {socialMedia.map(item => (
                <a href={item.link} target='_blank'>
                  <div className='flex flex-col items-center gap-2'>
                    <span className='text-6xl'>{item.icon}</span>
                    <p className='font-extralight text-xs'>{t('click')}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center'>
          <h1 id='contact' className='font-extrabold text-3xl'>{t('contact')}</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex gap-5 flex-col items-center'>
          <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3'>
            {contact.map(item => (
              <a href={item.link} target='_blank'>
                <div className='flex flex-col gap-2 items-center'>
                  <span className='text-6xl'>{item.icon}</span>
                  <p className='font-extralight text-xs'>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
