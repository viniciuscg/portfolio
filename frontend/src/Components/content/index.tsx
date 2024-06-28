import { FaAngular, FaBrain, FaClock, FaDatabase, FaGithub, FaHandshake, FaLightbulb, FaLinkedin, FaMusic, FaNode, FaPeopleCarry, FaPhone, FaReact, FaRegEye, FaRegSmileBeam, FaTable, FaTachometerAlt } from 'react-icons/fa'
import img from './img.png'
import pdf from "./Vinicius-Carneiro-Gonçalves-2024.pdf"
import { IoIosPaper, IoLogoJavascript, IoLogoWhatsapp, IoMdMail } from 'react-icons/io'
import { BiLogoTypescript } from 'react-icons/bi'
import { MdOutlinePhp } from 'react-icons/md'
import { FaPeopleGroup } from 'react-icons/fa6'
import { TbSql } from 'react-icons/tb'
import { TiSocialInstagram } from 'react-icons/ti'
import logo from './4mti_logo.png'

function Content() {

  const languages = [
    {
      icon: <FaReact />,
      description: "Conhecimento desde fazer boa utilização de componentes reutilizáveis, context com seus estados globais, hooks, router e etc..."
    },
    {
      icon: <FaNode />,
      description: "Capacidade de construir uma API, boa logica, conhecimento em principios como SOLID, CLEAN CODE, KISS e DRY."
    },
    {
      icon: <IoLogoJavascript />,
      description: "Proficiência em JavaScript, incluindo o entendimento de conceitos como closures, protótipos, async/await, e ES6+ features."
    },
    {
      icon: <BiLogoTypescript />,
      description: "Habilidade para escrever código TypeScript seguro e eficiente, com um bom entendimento de tipos, interfaces e decorators."
    },
    {
      icon: <MdOutlinePhp />,
      description: "Experiência em desenvolver aplicações web robustas usando PHP, com um forte entendimento de conceitos como OOP, MVC e PSR standards."
    },
    {
      icon: <FaAngular />,
      description: "Conhecimento em Angular para construir aplicações SPA eficientes, com experiência em RxJS, decorators, e Angular CLI."
    },
    {
      icon: <FaDatabase />,
      description: "Experiência em SQL, Postregess e mais, com habilidade para escrever consultas. Conhecimento em bancos de dados relacionais."
    },
  ]

  const softSkills = [
    {
      icon: <FaBrain />,
      description: "Habilidade para analisar problemas complexos e implementar soluções eficientes."
    },
    {
      icon: <FaPeopleCarry />,
      description: "Capacidade de trabalhar efetivamente em um ambiente de equipe e colaborar com os outros."
    },
    {
      icon: <FaRegSmileBeam />,
      description: "Habilidade para comunicar ideias de forma clara e eficaz, tanto verbalmente quanto por escrito."
    },
    {
      icon: <FaTachometerAlt />,
      description: "Capacidade de se adaptar a novas tecnologias, linguagens e metodologias de desenvolvimento."
    },
    {
      icon: <FaClock />,
      description: "Habilidade para gerenciar efetivamente o tempo e priorizar tarefas."
    },
    {
      icon: <FaLightbulb />,
      description: "Disposição para aprender novas habilidades e se manter atualizado com as últimas tendências e tecnologias."
    },
    {
      icon: <FaHandshake />,
      description: "Capacidade de entender e compartilhar os sentimentos dos outros, especialmente ao trabalhar em equipe ou ao lidar com clientes."
    },
    {
      icon: <FaRegEye />,
      description: "Habilidade para identificar erros ou inconsistências no código e garantir a qualidade do software."
    },
  ]
  
  const projects = [
    {
      icon: <FaPeopleGroup />,
      link: "https://github.com/viniciuscg/forum",
      tecnologies: [
        <FaReact />,
        <FaNode />,
        <IoLogoJavascript />,
        <BiLogoTypescript />,
        <FaDatabase />
      ]
    },
    {
      icon: <FaMusic />,
      link: "https://github.com/viniciuscg/AngelsMusic",
      tecnologies: [
        <FaReact />,
        <FaNode />,
        <IoLogoJavascript />,
        <BiLogoTypescript />,
        <FaDatabase />
      ]
    },
    {
      icon: <TbSql />,
      link: "https://github.com/viniciuscg/SQL-BeeCrowd",
      tecnologies: [
        <FaDatabase />
      ]
    },
    {
      icon: <FaTable />,
      link: "https://github.com/viniciuscg/codificar-project",
      tecnologies: [
        <FaReact />,
        <FaNode />,
        <IoLogoJavascript />,
        <MdOutlinePhp />,
        <FaDatabase />
      ]
    },
  ]

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

  const contact = [
    {
      icon: <IoMdMail />,
      description: "viniciuscgoncalves@hotmail.com",
      link: undefined
    },
    {
      icon: <FaPhone />,
      description: "(31) 985791710",
      link: undefined
    },
    {
      icon: <IoIosPaper />,
      description: "clique para abrir meu currículo em pdf",
      link: pdf
    },
  ]
  
  const experience = [
    {
      icon: <img src={logo} />,
      level: "4MTI",
      description: "Desenvolvedor PHP, SQL. Responsavel por criar codigo para coleta de dados em php, Aquisição de informações de arquivos (HTML, JSON, PDF, entre outros) Gerenciamento de banco de dados SQL",
    },
  ]

  return (
    <div className='flex flex-col gap-6'>
      <div id='home' className='flex max-lg:flex-col gap-6 justify-center items-center'>
        <div>
          <span className='font-light'>Olá, meu nome é Vinicius,</span>
          <h1 className='font-extrabold max-lg:text-6xl text-7xl'>Full stack <br/> Developer</h1>
        </div>
        <img className='max-w-[400px] max-lg:w-[300px] rounded-lg' src={img} />
      </div>

      <div>
        <div className='flex gap-5 justify-center items-center'>
          <h1 id='about' className='font-extrabold text-3xl'>Sobre</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex py-10 justify-center text-center'>
          <p className='max-w-7xl'>Olá, meu nome é Vinicius Carneiro Gonçalves. Tenho 22 anos e estou cursando Análise e Desenvolvimento de Sistemas. 
          Sou um desenvolvedor full stack apaixonado por tecnologia e inovação. Tenho experiência na criação de APIs e na elaboração de interfaces 
          front-end sofisticadas. Acredito que a tecnologia tem o poder de transformar o mundo e estou sempre buscando novas maneiras de contribuir para isso. 
          Estou constantemente aprendendo e aprimorando minhas habilidades para me manter atualizado com as últimas tendências e tecnologias. 
          Adoro os desafios que a programação apresenta e a satisfação de resolver problemas complexos. Estou ansioso para continuar minha jornada 
          no mundo da tecnologia e ver onde ela me levará.</p>
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center'>
          <h1 id='experience' className='font-extrabold text-3xl'>Experiência</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex gap-5 flex-col items-center'>
          <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3'>
            {experience.map(item => (
              <div className='flex flex-col gap-2 text-center items-center'>
                <span className='w-24'>{item.icon}</span>
                <p>{item.level}</p>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col'>
        <div className='flex gap-5 justify-center items-center'>
          <h1 id='skills' className='font-extrabold text-3xl'>Habilidades</h1>
          <hr className='w-full'/>
        </div>
        <div className='py-10 flex flex-col gap-20'>
          <div className='flex gap-10 flex-col items-center'>
            <h2 className='text-xl'>Programação:</h2>
            <div className='grid gap-6 text-center md:grid-cols-2 lg:grid-cols-4'>
              {languages.map(item => (
                <div className='flex flex-col items-center'>
                  <span className='text-6xl'>{item.icon}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-5 flex-col items-center'>
            <h2 className='text-xl'>Habilidades interpessoais:</h2>
            <div className='grid gap-6 md:grid-cols-2 text-center lg:grid-cols-4'>
              {softSkills.map(item => (
                <div className='flex flex-col items-center'>
                  <span className='text-6xl'>{item.icon}</span>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className='flex gap-5 flex-col items-center'>
            <h2 className='text-xl'>Projetos:</h2>
            <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
              {projects.map(item => (
                <a href={item.link} target='_blank'>
                  <div className='flex flex-col items-center'>
                    <span className='text-6xl'>{item.icon}</span>
                    <div className='flex gap-3'>
                      {item.tecnologies.map(tech => (
                        <p className='text-xl'>{tech}</p>
                      ))}
                    </div>
                    <p className='font-extralight text-xs'>Clique para ser redirecionado</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='flex justify-center items-center'>
            <h1 id='socialMedia' className='font-extrabold text-3xl'>Redes</h1>
            <hr className='w-full'/>
          </div>
          <div className='flex gap-5 flex-col items-center'>
            <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-4'>
              {socialMedia.map(item => (
                <a href={item.link} target='_blank'>
                  <div className='flex flex-col items-center'>
                    <span className='text-6xl'>{item.icon}</span>
                    <p className='font-extralight text-xs'>Clique para ser redirecionado</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='flex justify-center items-center'>
          <h1 id='contact' className='font-extrabold text-3xl'>Contatos</h1>
          <hr className='w-full'/>
        </div>
        <div className='flex gap-5 flex-col items-center'>
          <div className='grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3'>
            {contact.map(item => (
              <a href={item.link} target='_blank'>
                <div className='flex flex-col items-center'>
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
