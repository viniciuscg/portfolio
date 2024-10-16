// src/i18n/i18next.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: {
        translation: {
          portfolio: "Vinicius Portfólio",
          presentation: "Olá, meu nome é Vinicius.",
          summary: "Desenvolvedor de Software com sólida experiência em PHP, Node.js e TypeScript. Com atuação em projetos desafiadores, possuo habilidades comprovadas em desenvolver soluções, criar novas features e resolver problemas complexos. Minha experiência técnica é acompanhada por uma compreensão profunda das necessidades dos clientes, adquirida através de um envolvimento direto em diversas funções. Tenho um forte compromisso com a inovação e sou capaz de entregar soluções escaláveis e eficientes que atendem tanto a requisitos técnicos quanto de negócios.",
          about: "Sobre",
          skills: "Habilidades",
          contact: "Contato",
          experience: "Experiência",
          skillsProgramming: "Programação",
          softSkills: "Habilidades interpessoais",
          medias: "Redes",
          click: "Clique para ser redirecionado",
          languages: [
            "Conhecimento desde fazer boa utilização de componentes reutilizáveis, context com seus estados globais, hooks, router e etc...",
            "Capacidade de construir uma API, boa lógica, conhecimento em princípios como SOLID, CLEAN CODE, KISS e DRY.",
            "Habilidade para escrever código TypeScript seguro e eficiente, com um bom entendimento de tipos, interfaces e decorators.",
            "Experiência em desenvolver aplicações web robustas usando PHP, com um forte entendimento de conceitos como OOP, MVC e padrões PSR.",
            "Experiência em SQL, Postgres e mais, com habilidade para escrever consultas. Conhecimento em bancos de dados relacionais."
          ],
          softSkillsArr: [
            "Habilidade para analisar problemas complexos e desenvolver soluções inovadoras e eficientes.",
            "Capacidade de criar novas features e aprimorar funcionalidades existentes, alinhando-se às necessidades do cliente.",
            "Forte compreensão das necessidades dos clientes, adquirida através de um envolvimento direto em projetos desafiadores.",
            "Compromisso com a inovação e capacidade de adaptar-se rapidamente a novas tecnologias e metodologias.",
            "Facilidade em gerenciar projetos complexos, entregando soluções escaláveis que atendem a requisitos técnicos e de negócios.",
            "Habilidade em identificar e resolver problemas técnicos, garantindo a qualidade e eficiência do software.",
            "Disposição contínua para aprender e evoluir, mantendo-se atualizado com as últimas tendências tecnológicas.",
            "Capacidade de colaborar efetivamente em equipe e promover um ambiente de trabalho produtivo."
          ],
          contactDetails: [
            "viniciuscgoncalves@hotmail.com",
            "(31) 985791710",
            "clique para abrir meu currículo em pdf"
          ],
          jobExperience: [
            "Desenvolvedor PHP, SQL. Responsável por criar código para coleta de dados em PHP, aquisição de informações de arquivos (HTML, JSON, PDF, entre outros), gerenciamento de banco de dados SQL."
          ]
        },
      },
      en: {
        translation: {
          portfolio: "Vinicius Portfolio",
          presentation: "Hello, my name is Vinicius.",
          summary: "Software Developer with solid experience in PHP, Node.js, and TypeScript. With experience in challenging projects, I have proven skills in developing solutions, creating new features, and solving complex problems. My technical expertise is complemented by a deep understanding of customer needs, gained through direct involvement in various roles. I have a strong commitment to innovation and am capable of delivering scalable and efficient solutions that meet both technical and business requirements.",
          about: "About",
          skills: "Skills",
          contact: "Contact",
          experience: "Experience",
          skillsProgramming: "Programming",
          softSkills: "Soft skills",
          medias: "Social Media",
          click: "Click to be redirected",
          languages: [
            "Experience in using reusable components effectively, global states through context, hooks, router, and more.",
            "Ability to build APIs with solid logic, and knowledge of principles like SOLID, CLEAN CODE, KISS, and DRY.",
            "Skilled in writing secure and efficient TypeScript code with a good understanding of types, interfaces, and decorators.",
            "Experience in developing robust web applications using PHP, with a strong grasp of concepts like OOP, MVC, and PSR standards.",
            "Experience with SQL, Postgres, and more, capable of writing queries. Knowledgeable in relational databases."
          ],
          softSkillsArr: [
            "Ability to analyze complex problems and develop innovative and efficient solutions.",
            "Capability to create new features and improve existing functionalities, aligning with client needs.",
            "Strong understanding of client needs, gained through direct involvement in challenging projects.",
            "Commitment to innovation and ability to quickly adapt to new technologies and methodologies.",
            "Ease in managing complex projects, delivering scalable solutions that meet technical and business requirements.",
            "Skill in identifying and solving technical issues, ensuring software quality and efficiency.",
            "Continuous willingness to learn and grow, staying up-to-date with the latest technological trends.",
            "Ability to collaborate effectively in a team and foster a productive work environment."
          ],
          contactDetails: [
            "viniciuscgoncalves@hotmail.com",
            "(31) 985791710",
            "click to open my resume in pdf"
          ],
          jobExperience: [
            "PHP Developer, SQL. Responsible for writing code for data collection in PHP, acquiring information from files (HTML, JSON, PDF, and others), and managing SQL databases."
          ]
        },
      },
    },
    lng: "pt",
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
