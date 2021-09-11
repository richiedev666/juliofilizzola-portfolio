import React from 'react';
import {DiGithubBadge} from 'react-icons/di';
import { useLocation } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Space from '../image/block_big.jpg';
import Todo from '../image/todoList.png';
import ProjectsImg from '../image/project.png';
import Pokebola from "../image/pokebola.png";
import './projects.css';



function Projects() {
  const location = useLocation();
  
  React.useEffect(() => {
    if (location.pathname === '/projects'){
      document.title='Projects';
      document.getElementById("favicon").href = ProjectsImg;
    }
  });

  return (
    <div className="pageProjects">
      <Header />
      
      <div className="project-container">
        <main>
          <h1>Meus projetos</h1>
          <div>
            Algum desses projetos são de cunho avaliativo da Trybe, e outros são projetos pessoais.
          </div>
          <p>Link do meu
            <a href="https://github.com/juliofilizzola" target="_blank" rel="noreferrer">
              <span></span>
              <span></span>
              Github
              <span></span>
              <span></span>
            </a>
          </p>
        </main>
        <section>
          <div className="Project">
            <h3 className="h3Project">To-do List</h3> 
            <div className="containerProject">
              <img className="img-projects" src={Todo} alt='imagem do projeto'/>
              <div className="text_Container">
              <p>O To-do List é o primeiro projeto pessoal, fiz quando comecei o modulo de Front-end na Trybe;</p>
              <p>
                Esse projeto foi feito em React, usanado as tecnologia de React Router Dom, React Redux e foi estilizado usando CSS.
                <a href="https://github.com/juliofilizzola/Project-todo-list" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge/></a>
              </p>
              </div>
            </div>
          </div>
          <div className="Project">
            <h3 className="h3Project">Pokebola</h3> 
            <div className="containerProject">
              <div className="text_Container">
                <p>O To-do List é o primeiro projeto pessoal, fiz quando comecei o modulo de Front-end;

                </p>
                <p>
                  Esse projeto foi feito em React, usnado as tecnologia de React Router Dom, React Redux e foi estilizado usando CSS.
                  <a href="https://github.com/juliofilizzola/Pokebola" className="link_git" target="_blank" rel="noreferrer" >Link do Repositorio <DiGithubBadge/></a>
                </p>
                </div>
                <img className="img-projects" src={Pokebola} alt='imagem do projeto'/>
              </div>
          </div>
   
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Projects
