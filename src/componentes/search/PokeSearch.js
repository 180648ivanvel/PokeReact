import React from 'react';

export default function PokeSearch() {
    return (
        <div>
            <section class="signup-section" id="signup">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5">
                        <div class="col-md-10 col-lg-8 mx-auto text-center">
                            <form>
                                <div>
                                    <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
                                    <h2 class="text-white mb-5">Busca tu propio pokémon</h2>
                                    <div class="col">
                                        <input class="form-control" type="text" placeholder="Buscar" />
                                    </div>
                                    <div class="col-auto">
                                        <button class="btn btn-primary enable" type="submit">Atrapalo</button>
                                    </div>
                                    <div class="pokemon-container mt-600">

                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
