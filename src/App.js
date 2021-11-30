//import logo from './logo.svg';
import './App.css';
import './componentes/poke.css';
import React from 'react';
import PokeIndex from './componentes/PokeIndex.js';
import InfoPoke from './componentes/infoPoke/InfoPoke.js';
import PokeList from './componentes/pokeList/PokeList.js';
import PokeSearch from './componentes/search/PokeSearch.js';
import PokeFooter from './componentes/footer/PokeFooter.js';

function App() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container px-4 px-lg-5">
            <a class="navbar-brand" href="#page-top">Bienvenido entrenador</a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                aria-label="Toggle navigation">
                 Pokemenu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#about">Acerca de</a></li>
                    <li class="nav-item"><a class="nav-link" href="#projects">Consultas</a></li>
                    <li class="nav-item"><a class="nav-link" href="#signup">Buscar</a></li>
                    <li class="nav-item"><a class="nav-link" href="#redes">Contacto</a></li>
                </ul>
            </div>
        </div>
      </nav>
    <PokeIndex />
    <InfoPoke />
    <PokeList />
    <PokeSearch /> 
    <PokeFooter />
    <br/>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="js/scripts.js"></script>
    <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </React.Fragment>
  );
}
//ReactDOM.render(pokeIndex(), document.getElementById(pokeIndex));

export default App;

