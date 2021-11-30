import React from 'react';

function PokeList() {
    return (
        <div>
        <div class="container px-4 px-lg-5">           
            <div class="row gx-0 mb-4 mb-lg-5 align-items-center">          
                    <div class="featured-text text-center text-lg-left">                 
                        <h2>Pokémones Random</h2>
                        <div class="container text-center w-25 mt-4">
                            <div class="container">
                                <div class="image">
                                    <img src="" alt="" id="pokemon" width="150" height="150"/>
                                </div>
                                <div class="name"></div>                         
                                <div class="botones">
                                    <button id="next">Siguiente</button>
                                    <button id="before">Atrás</button>
                                </div>                                                             
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    )
}


export default PokeList
