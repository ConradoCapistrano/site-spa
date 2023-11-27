import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Design Personalizado",
      description: "Nossos sites podem ser totalmente personalizados para refletir a identidade da sua marca. Desde a escolha das cores até a seleção de imagens e a exibição do seu logotipo, garantimos que o design do seu site seja exclusivo e atraente.",
      imgUrl: projImg1,
    },
    {
      title: "Conteúdo Informativo",
      description: "Oferecemos a possibilidade de criar conteúdo personalizado para o seu site. Transmita a mensagem da sua empresa de forma clara e concisa, destacando os valores, missão e visão da sua marca.",
      imgUrl: projImg2,
    },
    {
      title: "Funcionalidades avançadas",
      description: "Integramos funcionalidades essenciais, como formulários de contato, recursos de chat ao vivo, galerias de imagens e muito mais. Isso permite que você se envolva com seus visitantes e forneça uma experiência interativa e satisfatória.",
      imgUrl: projImg3,
    },
    {
      title: "Responsividade Móvel",
      description: "Todos os nossos sites institucionais são desenvolvidos com um design responsivo, o que significa que eles se adaptam perfeitamente a dispositivos móveis, como smartphones e tablets. Seus clientes poderão acessar seu site com facilidade em qualquer lugar e a qualquer momento.",
      imgUrl: projImg4,
    },
    {
      title: "Otimização para Mecanismos de Busca",
      description: "Construímos nossos sites com base nas melhores práticas de SEO (Search Engine Optimization). Isso garante que seu site seja encontrado facilmente pelos motores de busca, aumentando sua visibilidade online e atraindo mais tráfego qualificado.",
      imgUrl: projImg5,
    },
    {
      title: "Suporte técnico contínuo",
      description: "Oferecemos suporte técnico dedicado para garantir que seu site esteja sempre funcionando perfeitamente. Além disso, fornecemos atualizações regulares para manter seu site seguro e atualizado.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos e Beneficios</h2>
                <p>Aqui no LunarWeb, estamos comprometidos em ajudá-lo a construir a presença online que sua empresa merece. Oferecemos uma ampla gama de sites institucionais pré-fabricados, que podem ser personalizados para atender às suas necessidades exclusivas.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Row>
                      {
                        projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project}
                              />
                          )
                        })
                      }
                    </Row>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}