import React from 'react'
import './poke.css';

function PokeIndex() {
    return (
        <div>
            <header class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase">Pokeguia</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">Bienvenido a esta guia donde encontraremos datos de
                                nuestros Pokemons favoritos</h2>
                            <a class="btn btn-primary" href="#about">COMENCEMOS ENTRENADOR</a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default PokeIndex;
